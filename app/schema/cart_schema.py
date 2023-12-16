from app.schema.base_schema import BaseSchema
from typing import List


class CartSchema(BaseSchema):
    user_id: int
    products: List

    class Config:
        orm_mode = True
