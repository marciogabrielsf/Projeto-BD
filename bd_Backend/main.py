from flask import Flask
from flask_restful import Api, Resource
from app.views import AuthView, ClientView, CompanyView, PlaceView, TableView

app = Flask(__name__)
api = Api(app)


api.add_resource(AuthView,"/client/auth")
api.add_resource(ClientView,"/client/")
api.add_resource(CompanyView,"/company/")

if __name__ == "__main__":
    app.run(debug=True)