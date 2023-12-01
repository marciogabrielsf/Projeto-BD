import { getCompanies } from "@/app/services/companies.service";
import { getPlaces } from "@/app/services/places.service";
import { useQuery } from "react-query";

export function usePlaces() {
	const result = useQuery(
		"places",
		async () => {
			const response = await getPlaces();
			return response.places;
		},
		{
			staleTime: 1000 * 60 * 10, // 10 minutes
		}
	);

	return result;
}
