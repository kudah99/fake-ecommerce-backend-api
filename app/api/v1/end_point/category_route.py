from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends
from app.core.container import Container
from app.schema.category import CategorySchema
from app.services.category_service import CategoryService
from typing import List

router = APIRouter(prefix="/category", tags=["category"])

@router.post("/", response_model=CategorySchema,summary="Add product category")
@inject
async def add_category(
    category: CategorySchema,
    service: CategoryService = Depends(Provide[Container.category_service])
):
    return service.add(category)

@router.get("/", response_model=List[CategorySchema])
@inject
async def get_category_list(
    service: CategoryService = Depends(Provide[Container.category_service]),
):
    return service.get_list_all()

@router.get("/{id}", response_model=CategorySchema,summary="Get category by id")
@inject
async def get_category_by_id(
    id: int,
    service: CategoryService = Depends(Provide[Container.category_service])
):
    return service.get_by_id(id=id)