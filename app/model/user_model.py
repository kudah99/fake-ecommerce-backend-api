from sqlmodel import Field
from sqlmodel import Field, Column
from app.model.base_model import BaseModel


class User(BaseModel, table=True):
    email: str = Field(sa_column=Column(nullable=False, unique=True))
    password: str = Field(sa_column=Column(nullable=False))
    name: str = Field(sa_column=Column(nullable=False))
