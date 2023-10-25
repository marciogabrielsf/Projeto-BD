import React from "react";

interface Props {
	total: number;
	title: string;
}

export default function DashboardItem({ total, title }: Props) {
	return (
		<div className=" bg-slate-700 rounded-2xl flex flex-col justify-between w-full h-40 p-5">
			<h1 className="text-xl font-bold">{title}</h1>
			<h2 className="font-normal mt-3 text-gray-200">Total de {title}:</h2>
			<h2 className="text-3xl font-bold">{total}</h2>
		</div>
	);
}
