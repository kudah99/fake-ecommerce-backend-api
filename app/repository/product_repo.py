from contextlib import AbstractContextManager
from typing import Callable
from sqlalchemy.orm import Session, joinedload
from app.model.product import Product
from .base_repo import BaseRepository
from app.core.exceptions import NotFoundError


class ProductRepository(BaseRepository):
    def __init__(self, session_factory: Callable[..., AbstractContextManager[Session]]):
        self.session_factory = session_factory
        super().__init__(session_factory, Product)

    # get products by category id
    def get_by_category_id(self, id: int, eager=False):
        with self.session_factory() as session:
            query = session.query(self.model)
            if eager:
                for eager in getattr(self.model, "eagers", []):
                    query = query.options(joinedload(getattr(self.model, eager)))
            query = query.filter(self.model.category_id == id).all()
            if not query:
                raise NotFoundError(detail=f"not found category : {id}")
            return query
