from flask_restful import Resource, reqparse
from app.config import DatabaseConnection

from app.services import ClientService, CompanyService, PlaceService, TableService


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
    def __init__(self) -> None:
        self.database = DatabaseConnection()

    def get(self):
        companies, code = CompanyService.getCompanies(self)

        return {"companies": companies}, code

    def post(self):
        parser = reqparse.RequestParser()

        parser.add_argument("name", type=str, required=True)
        parser.add_argument("email", type=str, required=True)
        parser.add_argument("phone", type=str, required=True)
        parser.add_argument("cnpj", type=str, required=True)

        data = parser.parse_args()

        company = {
            "name": data["name"],
            "email": data["email"],
            "phone": data["phone"],
            "cnpj": data["cnpj"],
        }

        response, code = CompanyService.createCompanies(self, company)
        return {"message": response}, code

    def put(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        parser.add_argument("name", type=str, required=True)
        parser.add_argument("email", type=str, required=True)
        parser.add_argument("phone", type=str, required=True)
        parser.add_argument("cnpj", type=str, required=True)
        data = parser.parse_args()
        company = {
            "id": data["id"],
            "name": data["name"],
            "email": data["email"],
            "phone": data["phone"],
            "cnpj": data["cnpj"],
        }
        response, code = CompanyService.updateCompany(self, company)
        return {"message": response}, code
        

    def delete(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        data = parser.parse_args()
        id = data["id"]
        response, code = CompanyService.deleteCompany(self, id)
        return {"message": response}, code
        


class PlaceView(Resource):
    def __init__(self) -> None:
        self.database = DatabaseConnection()
    
    def get(self):
        places, code = PlaceService.getPlaces(self)
        return {"places": places}, code
    
    def post(self):
        parser = reqparse.RequestParser()

        parser.add_argument("name", type=str, required=True)
        parser.add_argument("address", type=str, required=True)
        parser.add_argument("phone", type=str, required=True)
        parser.add_argument("avg_price", type=int, required=True)
        parser.add_argument("stars", type=int, required=True)
        parser.add_argument("company_id", type=int, required=True)
        
        data = parser.parse_args()

        place = {
            "name": data["name"],
            "address": data["address"],
            "phone": data["phone"],
            "avg_price": data["avg_price"],
            "stars": data["stars"],
            "company_id": data["company_id"],
        }

        response, code = PlaceService.createPlace(self, place)
        return {"message": response}, code
    
    def put(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        parser.add_argument("name", type=str, required=True)
        parser.add_argument("address", type=str, required=True)
        parser.add_argument("phone", type=str, required=True)
        parser.add_argument("avg_price", type=int, required=True)
        parser.add_argument("stars", type=int, required=True)
        parser.add_argument("company_id", type=int, required=True)
        
        data = parser.parse_args()
        place = {
            "id": data["id"],
            "name": data["name"],
            "address": data["address"],
            "phone": data["phone"],
            "avg_price": data["avg_price"],
            "stars": data["stars"],
            "company_id": data["company_id"],
        }
        response, code = PlaceService.updatePlace(self, place)
        return {"message": response}, code
    
    def delete(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        data = parser.parse_args()
        id = data["id"]
        response, code = PlaceService.deletePlace(self, id)
        return {"message": response}, code
    
    


class TableView(Resource):
    def __init__(self) -> None:
        self.database = DatabaseConnection()
        
    def get(self):
        tables, code = TableService.getTable(self)

        return {"tables": tables}, code
    
    def post(self):
        parser = reqparse.RequestParser()

        parser.add_argument("number", type=int, required=True)
        parser.add_argument("value", type=int, required=True)
        parser.add_argument("client_id", type=int, required=True)
        parser.add_argument("place_id", type=int, required=True)

        data = parser.parse_args()

        tables = {
            "number": data["number"],
            "value": data["value"],
            "client_id": data["client_id"],
            "place_id": data["place_id"],
            
        }

        response, code = TableService.createTable(self, tables)
        return {"message": response}, code
    
    def put(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        parser.add_argument("number", type=int, required=True)
        parser.add_argument("value", type=int, required=True)
        parser.add_argument("client_id", type=int, required=True)
        parser.add_argument("place_id", type=int, required=True)
        data = parser.parse_args()
        tables = {
            "id": data["id"],
            "number": data["number"],
            "value": data["value"],
            "client_id": data["client_id"],
            "place_id": data["place_id"],
        }
        response, code = TableService.updateTable(self, tables)
        return {"message": response}, code
    
    def delete(self):
        parser = reqparse.RequestParser()

        parser.add_argument("id", type=int, required=True)
        data = parser.parse_args()
        id = data["id"]
        response, code = TableService.deleteTable(self, id)
        return {"message": response}, code

        
