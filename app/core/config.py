from typing import List
from pydantic import BaseSettings

class Configs(BaseSettings):
    PROJECT_NAME: str = "ECOMMERCE MOCKUP API"
    API: str = "/api"
    BACKEND_CORS_ORIGINS: List[str] = ["*"]

configs = Configs()