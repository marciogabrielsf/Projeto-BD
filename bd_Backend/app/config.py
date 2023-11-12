import sqlite3


class DatabaseConnection:
    def __init__(self) -> None:
        self.connection = sqlite3.connect("database.db")
        self.cursor = self.connection.cursor()
        self.connection.row_factory = sqlite3.Row

    def run_migrations(self):
        self.cursor.execute(
            """CREATE TABLE IF NOT EXISTS client (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                phone TEXT NOT NULL,
                cpf TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            ) 
            """
        )
        self.cursor.execute(
            """CREATE TABLE IF NOT EXISTS companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            cnpj TEXT NOT NULL UNIQUE
            )"""
        )
        self.cursor.execute(
            """CREATE TABLE IF NOT EXISTS  places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            address TEXT NOT NULL,
            phone TEXT NOT NULL,
            avg_price INTEGER,
            stars INTEGER,
            company_id INTEGER NOT NULL,
            FOREIGN KEY (company_id) REFERENCES companies (id)
            )
            """
        )
        self.cursor.execute(
            """CREATE TABLE IF NOT EXISTS tables (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                number INTEGER NOT NULL,
                value INTEGER NOT NULL,
                client_id INTEGER,
                place_id INTEGER NOT NULL,
                FOREIGN KEY (client_id) REFERENCES client (id),
                FOREIGN KEY (place_id) REFERENCES places (id)
            )
            """
        )
        self.connection.commit()
