import { IReservation } from "../types";
import api from "./api";

interface IReservationResponse {
	reservations: IReservation[];
}

export const getReservation = async (): Promise<IReservationResponse> => {
	const response = await api.get("/reservation/");
	return response.data;
};

export const deleteReservation = async (id: number) => {
	const response = await api.delete(`/reservation/`, { data: { id } });
	return response.data;
};

export const updateReservation = async (
	id: number,
	client_id: number,
	table_id: number,
	date: Date
) => {
	const response = await api.put(`/reservation/`, {
		id,
		client_id,
		table_id,
		date,
	});
	return response.data;
};

export const createReservation = async (client_id: number, table_id: number, date: Date) => {
	const response = await api.post(`/reservation/`, {
		client_id,
		table_id,
		date,
	});
	return response.data;
};
