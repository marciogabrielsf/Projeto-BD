import { getCompanies } from "@/app/services/companies.service";
import { getTables } from "@/app/services/tables.service";
import { useQuery } from "react-query";

export function useTables() {
	const result = useQuery(
		"tables",
		async () => {
			const response = await getTables();
			return response.tables;
		},
		{
			staleTime: 1000 * 60 * 10, // 10 minutes
		}
	);

	return result;
}
