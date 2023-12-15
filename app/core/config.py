import os
from typing import List
from pydantic import BaseSettings

class Configs(BaseSettings):

    PROJECT_NAME: str = "ECOMMERCE MOCKUP API"
    API: str = "/api"

    BACKEND_CORS_ORIGINS: List[str] = ["*"]

    DB_ENGINE: str = "sqlite"

    PROJECT_ROOT: str = os.path.dirname(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    )

    DATABASE_URI = "{db_engine}:///{path}/sqlite.db".format(
        db_engine=DB_ENGINE,
        path=PROJECT_ROOT
    )

    # find query
    PAGE = 1
    PAGE_SIZE = 20
    ORDERING = "-id"

configs = Configs()