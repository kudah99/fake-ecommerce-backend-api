from sqlmodel import Field, Column
from app.model.product import BaseModel


class Category(BaseModel, table=True):
    name: str = Field(sa_column=Column(unique=True, nullable=False))
    description: str = Field(sa_column=Column(nullable=True))
    slug: str = Field(sa_column=Column(nullable=True))