from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.String(32), primary_key=True, default=get_uuid, unique=True)
    username=db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    cattle_id = db.Column(db.String(50), nullable=True)
    area_in_acre = db.Column(db.Float, nullable=True)
    password = db.Column(db.Text, nullable=False)
