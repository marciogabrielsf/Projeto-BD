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

export function filterQueryNumber<T>(array: T[], query: number): T[] {
	return array.filter((data: any) => {
		if (query === 0) {
			return data;
		}
		if (data.number.toString().includes(query.toString())) {
			return data;
		}
	});
}
