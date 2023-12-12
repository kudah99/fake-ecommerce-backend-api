from fastapi import APIRouter

from app.api.v1.end_point.category_route import router as category_route
from app.api.v1.end_point.product_route import router as product_route

routers = APIRouter()
router_list = [category_route,product_route]

for router in router_list:
    router.tags = routers.tags.append("v1")
    routers.include_router(router)