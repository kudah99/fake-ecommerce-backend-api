from sqlmodel import Field, Column
from app.model.base_model import BaseModel
from typing import List

class Cart(BaseModel, table=True):
    user_id: int = Field(
        default=None,
        foreign_key="user.id"
    )
    products: List = Field(sa_column=Column('products',nullable=False))