import { getClients } from "@/app/services/clients.service";
import { useQuery } from "react-query";

export function useClients() {
	const teste = useQuery(
		"clients",
		async () => {
			const response = await getClients();
			return response.clients;
		},
		{
			staleTime: 1000 * 60 * 10, // 10 minutes
		}
	);

	return teste;
}
