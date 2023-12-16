from contextlib import AbstractContextManager
from typing import Callable

from sqlalchemy.orm import Session

from app.model.cart_model import Cart
from app.repository.base_repo import BaseRepository


class CartRepository(BaseRepository):
    def __init__(self, session_factory: Callable[..., AbstractContextManager[Session]]):
        self.session_factory = session_factory
        super().__init__(session_factory, Cart)
