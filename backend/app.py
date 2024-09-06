from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
import pickle
import numpy as np
import pandas as pd

from models import db, User
 
app = Flask(__name__)
 
app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
 
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
  
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
db.init_app(app)
  
with app.app_context():
    db.create_all()
 
@app.route("/")
def hello_world():
    return "Backend running fine!"
 
@app.route("/signup", methods=["POST"])
def signup():
    print("Signup route hit!")  # Check if this line prints
    data = request.json
    print("Received data:", data)  # Print all received data for debugging

    email = data.get("email")
    password = data.get("password")
    username = data.get("username")  # Use .get() to avoid KeyError

    if not email and not password and not username:
        print("Missing fields")  # Debugging
        return jsonify({"error": "Missing required fields"}), 400

    user_exists = User.query.filter_by(email=email).first() is not None
    username_exists = User.query.filter_by(username=username).first() is not None

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    if username_exists:
        return jsonify({"error": "Username already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    print("User created:", new_user.username)  # Debugging

    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "username": new_user.username
    })



@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]
  
    user = User.query.filter_by(email=email).first()
  
    if user is None or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized Access"}), 401
  
    session["user_id"] = user.id
  
    return jsonify({
        "id": user.id,
        "email": user.email,
        "username": user.username  # Return the username in the response
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id", None)
    return jsonify({"message": "Successfully logged out"}), 200

# Load the trained model (you should have saved the model previously using pickle)
with open('cattle_disease_model.pkl', 'rb') as f:
    clf_model = pickle.load(f)

# List of symptoms corresponding to the model
symptoms_list = ['anorexia','abdominal_pain','anaemia','abortions','acetone','aggression','arthrogyposis',
    'ankylosis','anxiety','bellowing','blood_loss','blood_poisoning','blisters','colic','Condemnation_of_livers',
    'coughing','depression','discomfort','dyspnea','dysentery','diarrhoea','dehydration','drooling',
    'dull','decreased_fertility','diffculty_breath','emaciation','encephalitis','fever','facial_paralysis','frothing_of_mouth',
    'frothing','gaseous_stomach','highly_diarrhoea','high_pulse_rate','high_temp','high_proportion','hyperaemia','hydrocephalus',
    'isolation_from_herd','infertility','intermittent_fever','jaundice','ketosis','loss_of_appetite','lameness',
    'lack_of-coordination','lethargy','lacrimation','milk_flakes','milk_watery','milk_clots',
    'mild_diarrhoea','moaning','mucosal_lesions','milk_fever','nausea','nasel_discharges','oedema',
    'pain','painful_tongue','pneumonia','photo_sensitization','quivering_lips','reduction_milk_vields','rapid_breathing',
    'rumenstasis','reduced_rumination','reduced_fertility','reduced_fat','reduces_feed_intake','raised_breathing','stomach_pain',
    'salivation','stillbirths','shallow_breathing','swollen_pharyngeal','swelling','saliva','swollen_tongue',
    'tachycardia','torticollis','udder_swelling','udder_heat','udder_hardeness','udder_redness','udder_pain','unwillingness_to_move',
    'ulcers','vomiting','weight_loss','weakness']

# Route to handle the disease diagnosis request
@app.route('/diagnose', methods=['POST'])
def diagnose():
    data = request.json

    # Extract the symptoms from the request
    symptoms = data.get('symptoms', {})

    # Convert symptoms into the format expected by the model
    input_symptoms = [0] * len(symptoms_list)
    for i, symptom in enumerate(symptoms_list):
        if symptoms.get(f'symptom{i+1}') in symptoms_list:
            input_symptoms[i] = 1

    # Convert input_symptoms to DataFrame with the same feature names used during training
    input_df = pd.DataFrame([input_symptoms], columns=symptoms_list)

    # Predict using the pre-trained model
    prediction = clf_model.predict(input_df)[0]

    # Return the prediction as a JSON response
    disease_list = ['mastitis','blackleg','bloat','coccidiosis','cryptosporidiosis',
        'displaced_abomasum','gut_worms','listeriosis','liver_fluke','necrotic_enteritis','peri_weaning_diarrhoea',
        ' rift_valley_fever','rumen_acidosis',
        'traumatic_reticulitis','calf_diphtheria','foot_rot','foot_and_mouth','ragwort_poisoning','wooden_tongue','infectious_bovine_rhinotracheitis',
'acetonaemia','fatty_liver_syndrome','calf_pneumonia','schmallen_berg_virus','trypanosomosis','fog_fever']  # Modify based on your model output
    predicted_disease = disease_list[prediction] if prediction < len(disease_list) else 'Unknown'

    return jsonify({
        'predictedDisease': predicted_disease
    })


if __name__ == "__main__":
    app.run(debug=True)