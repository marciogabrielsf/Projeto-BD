import { IPlace } from "../types";
import api from "./api";

interface IPlaceResponse {
	places: IPlace[];
}

export const getPlaces = async (): Promise<IPlaceResponse> => {
	const response = await api.get("/place/");
	return response.data;
};

export const deletePlace = async (id: number) => {
	const response = await api.delete(`/place/`, { data: { id } });
	return response.data;
};

export const updatePlace = async (
	id: number,
	name: string,
	address: string,
	phone: string,
	avg_price: number,
	stars: number,
	company_id: number
) => {
	const response = await api.put(`/place/`, {
		id,
		name,
		address,
		phone,
		avg_price,
		stars,
		company_id,
	});
	return response.data;
};

export const createPlace = async (
	name: string,
	address: string,
	phone: string,
	avg_price: number,
	stars: number,
	company_id: number
) => {
	const response = await api.post(`/place/`, {
		name,
		address,
		phone,
		avg_price,
		stars,
		company_id,
	});
	return response.data;
};
