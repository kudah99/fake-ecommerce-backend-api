from app.repository.cart_repo import CartRepository
from app.services.base_service import BaseService


class CartService(BaseService):
    def __init__(self, cart_repository: CartRepository):
        self.cart_repository = cart_repository
        super().__init__(cart_repository)
