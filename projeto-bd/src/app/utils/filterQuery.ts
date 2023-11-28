export function filterQuery<T>(array: T[], query: string): T[] {
	return array.filter((data: any) => {
		if (query === "") {
			return data;
		}
		if (data.name.toLowerCase().includes(query.toLowerCase())) {
			return data;
		}
	});
}
