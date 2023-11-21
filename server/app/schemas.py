from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str
    email: str
    password: str

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True


class CarCreate(BaseModel):
    name: str
    brand: str
    model: str
    year: int
    color: str
    image: str
    price: float

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True


class CarUpdate(BaseModel):
    name: str = None
    brand: str = None
    model: str = None
    year: int = None
    color: str = None
    image: str = None
    price: float = None

    class Config:
        orm_mode = True
        arbitrary_types_allowed = True
