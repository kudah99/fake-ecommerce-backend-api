<h1 align="start">
  <br>
 Fake Ecommerce Backend API
</h1>



## :bulb: About

The [Fake Ecommerce Backend API](https://fake-ecommerce-backend-api-34jn.vercel.app/docs) is a free tool designed to expedite ecommerce frontend development by providing a simulated backend experience. This API enables developers to commence work on the frontend and test functionalities that depend on backend responses. Built with Python FastAPI for exceptional performance, this API offers a range of features for managing products, store categories, carts, and user-related operations.
## Features

### Products API

- ```Get All Products:``` Retrieve a list of all available products.
- ```Get Product by ID:``` Fetch details of a specific product using its unique identifier.
- ```Get Products by Category ID:``` Obtain a list of products belonging to a particular category.

### Categories API

- ```Get All Categories:``` Retrieve a list of all store categories.
- ```Get Category by ID:``` Fetch details of a specific store category.

### Cart API

- ```Get All Carts:``` Retrieve a list of all shopping carts.
- ```Get Cart by ID:``` Fetch details of a specific shopping cart.
- ```Update Cart by ID:``` Modify the contents of a shopping cart.
- ```Delete Cart by ID:``` Remove a shopping cart.

### User API

- ```Get All Users:``` Retrieve a list of all users.
- ```Get User by ID:``` Fetch details of a specific user.
- ```Authentication (Login and Sign Up):``` Secure user authentication using email and password.

## Documentation

Explore the API documentation and access usage code snippets on our [official website](https://fake-ecommerce-backend-api-34jn.vercel.app/docs).

## Tools

1. **Python Version**: 3.9 and above
2. **Web Framework**: FastAPI 0.99.1
3. **Database Integration**:
   - Postgres DB: Version 6.21 and above
   - Migration handled with Alembic
4. **Dependency Injection Framework**: Utilizing dependency-injector
   - Adhering to the service-repository pattern

## Getting Started

1. Clone the repository.
2. Install dependencies.

```bash
git clone https://github.com/kudah99/fake-ecommerce-backend-api
cd fake-ecommerce-backend-api
pipenv install or pip install -r requirements.txt
```
3. Database migrations
> **Note:** Use [.env_example](https://github.com/kudah99/fake-ecommerce-backend-api/edit/main/.env_example) as a sample for your .env:
   1. `alembic upgrade head`: apply every migrations
   2. `alembic downgrade base`: rollback every migrations
   3. `alembic revision --autogenerate -m "revision_name"`: create new migration 
   4. `alembic history`: get alembic revision history

4. Run the API server.

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
5. How to run with Docker?

* Ensure you have Docker installed and running on your machine.
 ```
docker-compose up --build
 ```

## License

This project is licensed under the [MIT License](LICENSE).