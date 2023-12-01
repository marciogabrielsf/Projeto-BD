import { getReservation } from "@/app/services/reservations.service";
import { useQuery } from "react-query";

export function useReservations() {
	const result = useQuery(
		"reservations",
		async () => {
			const response = await getReservation();
			return response.reservations;
		},
		{
			staleTime: 1000 * 60 * 10, // 10 minutes
		}
	);

	return result;
}
