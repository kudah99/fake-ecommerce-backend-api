import os
from typing import List
from pydantic import BaseSettings
from dotenv import load_dotenv

load_dotenv()


class Configs(BaseSettings):
    PROJECT_NAME: str = "ECOMMERCE MOCKUP API"
    API: str = "/api"

    BACKEND_CORS_ORIGINS: List[str] = ["*"]

    PROJECT_ROOT: str = os.path.dirname(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    )

    # database
    DB_ENGINE: str = os.getenv("DB_ENGINE", "postgresql")
    DB_USER: str = os.getenv("DB_USER")
    DB_PASSWORD: str = os.getenv("DB_PASSWORD")
    DB_HOST: str = os.getenv("DB_HOST")
    DB_PORT: str = os.getenv("DB_PORT")
    DB: str = os.getenv("DB")

    DATABASE_URI = "{db_engine}://{user}:{password}@{host}:{port}/{database}".format(
        db_engine=DB_ENGINE,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT,
        database=DB
    )

    # find query
    PAGE = 1
    PAGE_SIZE = 20
    ORDERING = "-id"


configs = Configs()
