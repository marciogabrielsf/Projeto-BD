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
    pass


class TableService:
    pass


class PlaceView:
    pass
