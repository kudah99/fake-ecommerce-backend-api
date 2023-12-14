from .base_service import BaseService
from app.repository.product_repo import ProductRepository
from app.model.product import Product
from typing import List

class ProductService(BaseService):
    def __init__(
        self,
        product_repository: ProductRepository,
    ):
        self.product_repository = product_repository
        super().__init__(product_repository)
    
    #get products by category id
    def  get_by_category_id(self, id: any) -> List[Product]:
        return self.product_repository.get_by_category_id(id=id)