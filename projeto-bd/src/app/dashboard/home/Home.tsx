import React from "react";
import DashboardItem from "./components/DashboardItem";
import DefaultTable from "@/app/components/defaultTable";

export default function HomePage() {
	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div className="flex gap-5">
				<DashboardItem title="Clientes" total={42} />
				<DashboardItem title="Empresas" total={412} />
				<DashboardItem title="Estabelecimentos" total={4} />
				<DashboardItem title="Mesas" total={100} />
			</div>
			<h2 className="font-bold mt-10">Ultimos Clientes cadastrados</h2>
			<DefaultTable />
		</div>
	);
}
