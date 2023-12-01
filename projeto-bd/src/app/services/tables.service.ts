import { ITable } from "../types";
import api from "./api";

interface ITableResponse {
	tables: ITable[];
}

export const getTables = async (): Promise<ITableResponse> => {
	const response = await api.get("/table/");
	return response.data;
};

export const deleteTable = async (id: number) => {
	const response = await api.delete(`/table/`, { data: { id } });
	return response.data;
};

export const updateTable = async (id: number, number: number, value: number, place_id: number) => {
	const response = await api.put(`/table/`, {
		id,
		number,
		value,
		place_id,
	});
	return response.data;
};

export const createTable = async (number: number, value: number, place_id: number) => {
	const response = await api.post(`/table/`, {
		number,
		value,
		place_id,
	});
	return response.data;
};
