from dependency_injector import containers, providers

from app.core.config import configs
from app.core.database import Database

from app.repository import *
from app.services import *


class Container(containers.DeclarativeContainer):

    wiring_config = containers.WiringConfiguration(
        modules=[
            "app.api.v1.end_point.category_route",
            "app.api.v1.end_point.product_route",
            "app.api.v1.end_point.auth_route",
        ]
    )

    db = providers.Singleton(Database, db_url=configs.DATABASE_URI)

    category_repository = providers.Factory(
        CategoryRepository, session_factory=db.provided.session
    )

    product_repository = providers.Factory(
        ProductRepository, session_factory=db.provided.session
    )

    user_repository = providers.Factory(
        UserRepository, session_factory=db.provided.session
    )

    cart_repository = providers.Factory(
        CartRepository, session_factory=db.provided.session
    )

    category_service = providers.Factory(
        CategoryService,
        category_repository= category_repository
    )

    product_service = providers.Factory(
        ProductService,
        product_repository=product_repository
    )

    auth_service = providers.Factory(
        AuthService,
        user_repository = user_repository
    )

    cart_service = providers.Factory(
        CartService,
        cart_repository = cart_repository
    )