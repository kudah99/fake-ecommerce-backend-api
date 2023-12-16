from fastapi import APIRouter

from app.api.v1.end_point.category_route import router as category_route
from app.api.v1.end_point.product_route import router as product_route
from app.api.v1.end_point.auth_route import router as auth_route
from app.api.v1.end_point.cart_route import router as cart_route

routers = APIRouter()
router_list = [category_route, product_route, auth_route, cart_route]

for router in router_list:
    router.tags = routers.tags.append("v1")
    routers.include_router(router)
