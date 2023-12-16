from app.schema.base_schema import BaseSchema


class CategorySchema(BaseSchema):
    name: str
    description: str
    slug: str
