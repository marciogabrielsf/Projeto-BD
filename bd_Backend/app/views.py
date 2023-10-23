from flask_restful import Resource

class AuthView(Resource):
    def get(self):
        return {"message": "Eae mundo"}
    
class ClientView(Resource):
    def get(self):
        pass

class CompanyView(Resource):
    def get(self):
        pass
    
class TableView(Resource):
    def get(self):
        pass
    
class PlaceView(Resource):
    def get(self):
        pass