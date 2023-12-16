from sqlmodel import Field, Column
from app.model.base_model import BaseModel


class Product(BaseModel, table=True):
    name: str = Field(sa_column=Column("name", nullable=False))
    description: str = Field(sa_column=Column("description", nullable=False))
    price: float = Field(sa_column=Column("price", nullable=False))
    image: str = Field(sa_column=Column("image", nullable=True))
    category_id: int = Field(default=None, foreign_key="category.id")
