import React from "react";

interface Props {
	total: number;
	title: string;
}

export default function DashboardItem({ total, title }: Props) {
	return (
		<div className=" from-primary to-secondary bg-gradient-to-r transition hover:scale-[103%] hover:shadow-2xl rounded-2xl flex flex-col justify-between w-full h-40 p-5 shadow-xl shadow-[rgba(0,0,0,0.3)]">
			<h1 className="text-xl font-bold">{title}</h1>
			<h2 className="font-normal mt-3 text-gray-200">Total de {title}:</h2>
			<h2 className="text-3xl font-bold">{total}</h2>
		</div>
	);
}
