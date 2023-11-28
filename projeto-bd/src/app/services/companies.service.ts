import api from "./api";

export const getCompanies = async () => {
	const response = await api.get("/company/");
	return response.data;
};

export const deleteCompany = async (id: number) => {
	const response = await api.delete(`/company/`, { data: { id } });
	return response.data;
};

export const updateCompany = async (
	id: number,
	name: string,
	email: string,
	cnpj: string,
	phone: string
) => {
	const response = await api.put(`/company/`, { id, name, cnpj, email, phone });
	return response.data;
};

export const createCompany = async (name: string, email: string, cnpj: string, phone: string) => {
	const response = await api.post(`/company/`, { name, email, cnpj, phone });
	return response.data;
};
