import React from "react";
import DashboardItem from "./DashboardItem";

export default function HomePage() {
	return (
		<div className="text-white w-full flex gap-5 p-12">
			<DashboardItem title="Clientes" total={42} />
			<DashboardItem title="Empresas" total={412} />
			<DashboardItem title="Estabelecimentos" total={4} />
			<DashboardItem title="Mesas" total={100} />
		</div>
	);
}
