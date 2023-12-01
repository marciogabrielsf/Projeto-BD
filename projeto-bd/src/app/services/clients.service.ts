import { IClient } from "../types";
import api from "./api";

interface IResponse {
	clients: IClient[];
}

export const getClients = async (): Promise<IResponse> => {
	const response = await api.get("/clients/");
	return response.data;
};

export const deleteClient = async (id: number) => {
	const response = await api.delete(`/clients/`, { data: { id } });
	return response.data;
};

export const updateClient = async (
	id: number,
	name: string,
	email: string,
	cpf: string,
	phone: string
) => {
	const response = await api.put(`/clients/`, { id, name, cpf, email, phone });
	return response.data;
};

export const createClient = async (
	name: string,
	email: string,
	cpf: string,
	phone: string,
	password: string
) => {
	const response = await api.post(`/clients/`, { name, email, cpf, phone, password });
	return response.data;
};
