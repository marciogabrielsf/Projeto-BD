from app.config import DatabaseConnection
import collections


class ClientService:
    def getClients(self):
        rows = self.database.cursor.execute("SELECT * FROM client").fetchall()

        clients = []
        for row in rows:
            d = collections.OrderedDict()
            d["id"] = row[0]
            d["name"] = row[1]
            d["email"] = row[2]
            d["phone"] = row[3]
            d["cpf"] = row[4]
            clients.append(d)
        self.database.cursor.close()

        return clients, 200

    def createClient(self, client):
        try:
            name, email, phone, cpf, password = (
                client["name"],
                client["email"],
                client["phone"],
                client["cpf"],
                client["password"],
            )
            self.database.cursor.execute(
                "INSERT INTO client (name, email, phone, cpf, password) VALUES (?, ?, ?, ?, ?)  ",
                (name, email, phone, cpf, password),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Client created successfully!", 200
        except Exception as e:
            print(e)
            return "Erro ao criar Cliente", 400

    def updateClient(self, client):
        try:
            (
                id,
                name,
                email,
                phone,
                cpf,
            ) = (
                client["id"],
                client["name"],
                client["email"],
                client["phone"],
                client["cpf"],
            )
            self.database.cursor.execute(
                "UPDATE client SET name = ?, email = ?, phone = ?, cpf = ? WHERE id = ?",
                (name, email, phone, cpf, id),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Client updated successfully!", 200
        except Exception as e:
            return "Erro ao atualizar Cliente", 400

    def deleteClient(self, id):
        try:
            self.database.cursor.execute("DELETE FROM client WHERE id = ?", (id,))
            self.database.connection.commit()
            self.database.cursor.close()
            return "Client deleted successfully!", 200
        except Exception as e:
            return "Erro ao deletar Cliente", 400


class CompanyService:
    def getCompanies(self):
        rows = self.database.cursor.execute("SELECT * FROM companies").fetchall()

        companies = []
        for row in rows:
            d = collections.OrderedDict()
            d["id"] = row[0]
            d["name"] = row[1]
            d["email"] = row[2]
            d["phone"] = row[3]
            d["cnpj"] = row[4]
            companies.append(d)

        return companies, 200

    def createCompanies(self, company):
        try:
            name, email, phone, cnpj = (
                company["name"],
                company["email"],
                company["phone"],
                company["cnpj"],
            )
            self.database.cursor.execute(
                "INSERT INTO companies (name, email, phone, cnpj) VALUES (?, ?, ?, ?)",
                (name, email, phone, cnpj),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Company created successfully!", 200
        except Exception as e:
            print(e)
            return "Erro ao criar Empresa", 400

    def updateCompany(self, company):
        try:
            (
                id,
                name,
                email,
                phone,
                cnpj,
            ) = (
                company["id"],
                company["name"],
                company["email"],
                company["phone"],
                company["cnpj"],
            )
            self.database.cursor.execute(
                "UPDATE companies SET name = ?, email = ?, phone = ?, cnpj = ? WHERE id = ?",
                (name, email, phone, cnpj, id),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Company updated successfully!", 200
        except Exception as e:
            return "Erro ao atualizar Empresa", 400

    def deleteCompany(self, id):
        try:
            self.database.cursor.execute("DELETE FROM companies WHERE id = ?", (id,))
            self.database.connection.commit()
            self.database.cursor.close()
            return "Company deleted successfully!", 200
        except Exception as e:
            return "Erro ao deletar Empresa", 400


class PlaceService:
    def getPlaces(self):
        rows = self.database.cursor.execute("SELECT * FROM place").fetchall()

        places = []
        for row in rows:
            d = collections.OrderedDict()
            d["id"] = row[0]
            d["name"] = row[1]
            d["address"] = row[2]
            d["phone"] = row[3]
            d["avg_price"] = row[4]
            d["stars"] = row[5]
            d["company_id"] = row[6]
            places.append(d)
        self.database.cursor.close()

        return places, 200

    pass

    def createPlace(self, place):
        try:
            name, address, phone, avg_price, stars, company_id = (
                place["name"],
                place["address"],
                place["phone"],
                place["avg_price"],
                place["stars"],
                place["company_id"],
            )
            self.database.cursor.execute(
                "INSERT INTO place (name, address, phone, avg_price, stars, company_id) VALUES (?, ?, ?, ?, ?, ?)  ",
                (name, address, phone, avg_price, stars, company_id),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Place created successfully!", 200
        except Exception as e:
            print(e)
            return "Erro ao criar Place", 400

    def updatePlace(self, place):
        try:
            (
                id,
                name,
                address,
                phone,
                avg_price,
                stars,
                company_id,
            ) = (
                place["id"],
                place["name"],
                place["address"],
                place["phone"],
                place["avg_price"],
                place["stars"],
                place["company_id"],
            )
            self.database.cursor.execute(
                "UPDATE place SET name = ?, address = ?, phone = ?, avg_price = ?, stars = ?, company_id = ? WHERE id = ?",
                (name, address, phone, avg_price, stars, company_id, id),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Place updated successfully!", 200
        except Exception as e:
            return "Erro ao atualizar Place", 400

    def deletePlace(self, id):
        try:
            self.database.cursor.execute("DELETE FROM place WHERE id = ?", (id,))
            self.database.connection.commit()
            self.database.cursor.close()
            return "Place deleted successfully!", 200
        except Exception as e:
            return "Erro ao deletar Place", 400


class TableService:
    def getTable(self):
        rows = self.database.cursor.execute("SELECT * FROM tables").fetchall()

        tables = []
        for row in rows:
            d = collections.OrderedDict()
            d["id"] = row[0]
            d["number"] = row[1]
            d["value"] = row[2]
            d["client_id"] = row[3]
            d["place_id"] = row[4]
            tables.append(d)

        return tables, 200

    def createTable(self, tables):
        try:
            number, value, client_id, place_id = (
                tables["number"],
                tables["value"],
                tables["client_id"],
                tables["place_id"],
            )
            self.database.cursor.execute(
                "INSERT INTO tables (number, value, client_id, place_id) VALUES (?, ?, ?, ?)  ",
                (number, value, client_id, place_id),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Tables created successfully!", 200
        except Exception as e:
            print(e)
            return "Erro ao criar Tables", 400

    pass

    def updateTable(self, tables):
        try:
            (
                id,
                number,
                value,
                client_id,
                place_id,
            ) = (
                tables["id"],
                tables["number"],
                tables["value"],
                tables["client_id"],
                tables["place_id"],
            )
            self.database.cursor.execute(
                "UPDATE tables SET number = ?, value = ?, client_id = ?, place_id = ? WHERE id = ?",
                (number, value, client_id, place_id, id),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Table updated successfully!", 200
        except Exception as e:
            return "Erro ao atualizar Mesa", 400

    def deleteTable(self, id):
        try:
            self.database.cursor.execute("DELETE FROM tables WHERE id = ?", (id,))
            self.database.connection.commit()
            self.database.cursor.close()
            return "Table deleted successfully!", 200
        except Exception as e:
            return "Erro ao deletar table"
