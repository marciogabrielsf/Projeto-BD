export interface IClient {
	id: number;
	name: string;
	email: string;
	phone: string;
	cpf: string;
}

export interface ICompany {
	id: number;
	name: string;
	email: string;
	cnpj: string;
	phone: string;
}

export interface IPlace {
	id: number;
	name: string;
	address: string;
	phone: string;
	avg_price: number;
	stars: number;
	company_id: number;
}

export interface ITable {
	id: number;
	number: number;
	value: number;
	place_id: number;
	place_name: string;
}

export interface IReservation {
	id: number;
	client_name: string;
	client_id: number;
	number: number;
	place_name: number;
	table_id: number;
	date: string;
}
