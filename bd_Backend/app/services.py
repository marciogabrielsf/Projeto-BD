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

class TableService:
    def getTable(self):
        rows = self.database.cursor.execute("SELECT * FROM table").fetchall()

        table = []
        for row in rows:
            d = collections.OrderedDict()
            d["id"] = row[0]
            d["number"] = row[1]
            d["value"] = row[2]
            d["client_id"] = row[3]
            d["place_id"] = row[4]
            table.append(d)
        

        return table, 200
    
    def createTable(self, table):
        try:
            number, value, client_id, place_id = (
                table["number"],
                table["value"],
                table["client_id"],
                table["place_id"]
            )
            self.database.cursor.execute(
                "INSERT INTO table (number, value, client_id, place_id) VALUES (?, ?, ?, ?)  ",
                (number, value, client_id, place_id),
            )
            self.database.connection.commit()
            self.database.cursor.close()
            return "Table created successfully!", 200
        except Exception as e:
            print(e)
            return "Erro ao criar Table", 400
    
    
    pass


class PlaceView:
    pass
