from contextlib import AbstractContextManager
from typing import Callable
from sqlalchemy.orm import Session
from app.model.category import Category
from .base_repo import BaseRepository


class CategoryRepository(BaseRepository):
    def __init__(self, session_factory: Callable[..., AbstractContextManager[Session]]):
        self.session_factory = session_factory
        super().__init__(session_factory, Category)
