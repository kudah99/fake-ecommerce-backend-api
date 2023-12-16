from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends
from app.core.container import Container
from app.schema.cart_schema import CartSchema
from app.services.cart_service import CartService
from typing import List

router = APIRouter(prefix="/cart", tags=["cart"])


@router.post("/", response_model=CartSchema, summary="Add cart")
@inject
async def add_cart(
    cart: CartSchema, service: CartService = Depends(Provide[Container.cart_service])
):
    return service.add(cart)


@router.get("/", response_model=List[CartSchema], summary="Get all cart")
@inject
async def get_cart_list(
    service: CartService = Depends(Provide[Container.cart_service]),
):
    return service.get_list_all()


@router.get("/{id}", response_model=CartSchema, summary="Get cart by id")
@inject
async def get_cart_by_id(
    id: int, service: CartService = Depends(Provide[Container.cart_service])
):
    return service.get_by_id(id=id)


@router.patch("/{id}", response_model=CartSchema, summary="Update cart by id")
@inject
async def update_cart_by_id(
    id: int, service: CartService = Depends(Provide[Container.cart_service])
):
    return service.patch(id=id)
