from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
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

if __name__ == "__main__":
    app.run(debug=True)