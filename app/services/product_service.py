from .base_service import BaseService
from app.repository.product_repo import ProductRepository

class ProductService(BaseService):
    def __init__(
        self,
        product_repository: ProductRepository,
    ):
        self.product_repository = product_repository
        super().__init__(product_repository)