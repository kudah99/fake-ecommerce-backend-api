from typing import List

from app.core.exceptions import AuthError
from app.model.user_model import User
from app.repository.user_repo import UserRepository
from app.schema.auth_schema import SignIn, SignUp
from app.core.security import get_password_hash, verify_password
from app.schema.user_schema import FindUser
from app.services.base_service import BaseService


class AuthService(BaseService):
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository
        super().__init__(user_repository)

    # user login
    def sign_in(self, sign_in_info: SignIn):
        find_user = FindUser()
        find_user.email__eq = sign_in_info.email__eq
        user: List[User] = self.user_repository.read_by_options(find_user)["founds"]
        if len(user) < 1:
            raise AuthError(detail="Incorrect email or password")
        found_user = user[0]
        if not verify_password(sign_in_info.password, found_user.password):
            raise AuthError(detail="Incorrect email or password")
        delattr(found_user, "password")
        sign_in_result = {
            "message": "Login succesful",
        }
        return sign_in_result

    # user sign-up
    def sign_up(self, user_info: SignUp):
        user = User(**user_info.dict(exclude_none=True))
        user.password = get_password_hash(user_info.password)
        created_user = self.user_repository.create(user)
        print(created_user)
        # delattr(created_user, "password")
        return created_user
