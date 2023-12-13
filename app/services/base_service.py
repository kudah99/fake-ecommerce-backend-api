class BaseService:
    def __init__(self, repository) -> None:
        self._repository = repository

    def get_list_all(self):
        return self._repository.read_all()

    def get_list(self, schema):
        return self._repository.read_by_options(schema)

    def get_by_id(self, id: any):
        return self._repository.read_by_id(id)
    
    def add(self, schema):
        return self._repository.create(schema)