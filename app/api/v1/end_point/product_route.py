from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends
from app.core.container import Container
from app.schema.product import ProductSchema
from app.services.product_service import ProductService
from typing import List

router = APIRouter(prefix="/products", tags=["products"])


@router.post("/", response_model=ProductSchema, summary="Add products")
@inject
async def add_products(
    product: ProductSchema,
    service: ProductService = Depends(Provide[Container.product_service]),
):
    return service.add(product)


@router.get("/", response_model=List[ProductSchema], summary="Get all products")
@inject
async def get_products_list(
    service: ProductService = Depends(Provide[Container.product_service]),
):
    return service.get_list_all()


@router.get("/{id}", response_model=ProductSchema, summary="Get product by id")
@inject
async def get_product_by_id(
    id: int, service: ProductService = Depends(Provide[Container.product_service])
):
    return service.get_by_id(id=id)


@router.get("/category/{id}", summary="Get products by category id")
@inject
async def get_by_category_id(
    id: int, service: ProductService = Depends(Provide[Container.product_service])
):
    return service.get_by_category_id(id=id)
