from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends

from app.core.container import Container
from app.schema.auth_schema import SignIn, SignUp, SignInResponse
from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)


@router.post("/sign-in", response_model=SignInResponse)
@inject
async def sign_in(
    user_info: SignIn, service: AuthService = Depends(Provide[Container.auth_service])
):
    return service.sign_in(user_info)


@router.post("/sign-up")
@inject
async def sign_up(
    user_info: SignUp, service: AuthService = Depends(Provide[Container.auth_service])
):
    return service.sign_up(user_info)
