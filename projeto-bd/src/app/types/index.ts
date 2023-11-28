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
