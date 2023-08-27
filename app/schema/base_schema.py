from datetime import datetime
from pydantic import BaseModel
from typing import  Optional, Union


class BaseSchema(BaseModel):
    id: int
    created_at: datetime
    updated_at: datetime

class FindBase(BaseModel):
    ordering: Optional[str]
    page: Optional[int]
    page_size: Optional[Union[int, str]]


class SearchOptions(FindBase):
    total_count: Optional[int]