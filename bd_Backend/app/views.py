from flask_restful import Resource, reqparse
from app.config import DatabaseConnection

from app.services import ClientService


class AuthView(Resource):
    def get(self):
        return {"message": "Eae mundo"}


class ClientView(Resource):
    def __init__(self) -> None:
        self.database = DatabaseConnection()

    def get(self):
        clients, code = ClientService.getClients(self)
        return {"clients": clients}, code

    def post(self):
        parser = reqparse.RequestParser()

        parser.add_argument("name", type=str, required=True)
        parser.add_argument("email", type=str, required=True)
        parser.add_argument("phone", type=str, required=True)
        parser.add_argument("cpf", type=str, required=True)
        parser.add_argument("password", type=str, required=True)
        data = parser.parse_args()
        client = {
            "name": data["name"],
            "email": data["email"],
            "phone": data["phone"],
            "cpf": data["cpf"],
            "password": data["password"],
        }
        print(client)
        response, code = ClientService.createClient(self, client)
        return {"message": response}, code

    def put(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        parser.add_argument("name", type=str, required=True)
        parser.add_argument("email", type=str, required=True)
        parser.add_argument("phone", type=str, required=True)
        parser.add_argument("cpf", type=str, required=True)
        data = parser.parse_args()
        client = {
            "id": data["id"],
            "name": data["name"],
            "email": data["email"],
            "phone": data["phone"],
            "cpf": data["cpf"],
        }
        response, code = ClientService.updateClient(self, client)
        return {"message": response}, code

    def delete(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        data = parser.parse_args()
        id = data["id"]
        response, code = ClientService.deleteClient(self, id)
        return {"message": response}, code


class CompanyView(Resource):
    def get(self):
        pass


class TableView(Resource):
    def get(self):
        pass


class PlaceView(Resource):
    def get(self):
        pass
