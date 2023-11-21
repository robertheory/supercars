from sqlalchemy import Column, Integer, String, Sequence, Float
from .database import Base


class UserSchema(Base):
    __tablename__ = "users"

    id = Column(Integer, Sequence('user_id_seq'), primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)


class CarsSchema(Base):
    __tablename__ = "cars"

    id = Column(Integer, Sequence('car_id_seq'), primary_key=True, index=True)
    name = Column(String, index=True)
    brand = Column(String, index=True)
    model = Column(String, index=True)
    year = Column(Integer, index=True)
    color = Column(String, index=True)
    image = Column(String, index=True)
    price = Column(Float, index=True)
