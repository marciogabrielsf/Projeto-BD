from flask import Flask
from flask_cors import CORS

# from flask_cors import CORS
from flask_restful import Api
from app.config import DatabaseConnection
from app.views import (
    AuthView,
    ClientView,
    CompanyView,
    PlaceView,
    ReservationView,
    TableView,
)

app = Flask(__name__)
api = Api(app)
CORS(app)

api.add_resource(AuthView, "/auth/")
api.add_resource(ClientView, "/clients/")
api.add_resource(CompanyView, "/company/")
api.add_resource(TableView, "/table/")
api.add_resource(PlaceView, "/place/")
api.add_resource(ReservationView, "/reservation/")

if __name__ == "__main__":
    database = DatabaseConnection()
    database.run_migrations()
    print("--- Migrations running... ---")

    app.run(host="0.0.0.0", debug=True)
