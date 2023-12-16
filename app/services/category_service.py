from .base_service import BaseService
from app.repository.category_repo import CategoryRepository


class CategoryService(BaseService):
    def __init__(
        self,
        category_repository: CategoryRepository,
    ):
        self.category_repository = category_repository
        super().__init__(category_repository)
