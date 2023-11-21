from fastapi import Depends, FastAPI, HTTPException
from os import getenv
from sqlalchemy.orm import Session
from .models import Cars
from .schemas import CarCreate, CarUpdate
from .database import engine, SessionLocal, Base

# ACCESS_TOKEN_EXPIRE_MINUTES = int(getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

app = FastAPI()

Base.metadata.create_all(bind=engine)


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.get("/cars")
def get_cars(db: Session = Depends(get_db)):
    cars = db.query(Cars).all()
    return cars


@app.post("/cars")
def create_car(car: CarCreate, db: Session = Depends(get_db)):
    db_car = Cars(name=car.name, brand=car.brand, model=car.model,
                  year=car.year, color=car.color, image=car.image, price=car.price)
    db.add(db_car)
    db.commit()
    db.refresh(db_car)
    return db_car


@app.get("/cars/{car_id}")
def get_car(car_id: int, db: Session = Depends(get_db)):
    car = db.query(Cars).filter(Cars.id == car_id).first()
    if not car:
        raise HTTPException(status_code=404, detail="Car not found")
    return car


@app.put("/cars/{car_id}")
def update_car(car_id: int, car: CarUpdate, db: Session = Depends(get_db)):
    db_car = db.query(Cars).filter(Cars.id == car_id).first()
    if not db_car:
        raise HTTPException(status_code=404, detail="Car not found")
    db_car.name = car.name
    db_car.brand = car.brand
    db_car.model = car.model
    db_car.year = car.year
    db_car.color = car.color
    db_car.image = car.image
    db_car.price = car.price
    db.commit()
    db.refresh(db_car)
    return db_car


@app.delete("/cars/{car_id}")
def delete_car(car_id: int, db: Session = Depends(get_db)):
    db_car = db.query(Cars).filter(Cars.id == car_id).first()
    if not db_car:
        raise HTTPException(status_code=404, detail="Car not found")
    db.delete(db_car)
    db.commit()
    return {"message": "Car deleted"}


@app.get("/")
def read_root():
    return {"Hello": "World"}
