from app.schema.base_schema import BaseSchema, SearchOptions
from typing import List, Optional
from pydantic import BaseModel


class ProductSchema(BaseSchema):
    name: str
    description: str
    image: str
    price: str
    category_id: int

    class Config:
        orm_mode = True


class FindProductResult(BaseModel):
    founds: Optional[List[ProductSchema]]
    search_options: Optional[SearchOptions]
