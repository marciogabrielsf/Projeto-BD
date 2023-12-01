import { getCompanies } from "@/app/services/companies.service";
import { useQuery } from "react-query";

export function useCompanies() {
	const result = useQuery(
		"companies",
		async () => {
			const response = await getCompanies();
			return response.companies;
		},
		{
			staleTime: 1000 * 60 * 10, // 10 minutes
		}
	);

	return result;
}
