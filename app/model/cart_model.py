from sqlmodel import Field, Column, ARRAY
from app.model.base_model import BaseModel
from typing import List
from enum import  Enum

class ProductItem(int , Enum):
    product_id: int = 0
    quantity: int = 0

class Cart(BaseModel, table=True):
    user_id: int = Field(
        default=None,
        foreign_key="user.id"
    )
    products: List[ProductItem] = Field(sa_column=Column('products',nullable=False))