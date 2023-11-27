"use client";
import React, { useEffect } from "react";
import DashboardItem from "./components/DashboardItem";
import DefaultTable from "@/app/components/defaultTable";
import { ClientProps } from "../clients/components/ClientsContent";
import { getClients } from "@/app/services/clients.service";

export default function HomePage() {
	const [clients, setClients] = React.useState<ClientProps[]>([]);

	const getClientData = async () => {
		const data = await getClients();
		if (data) {
			setClients(data.clients);
		}
	};
	useEffect(() => {
		getClientData();
	}, []);

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div className="flex gap-5">
				<DashboardItem title="Clientes" total={clients.length} />
				<DashboardItem title="Empresas" total={412} />
				<DashboardItem title="Estabelecimentos" total={4} />
				<DashboardItem title="Mesas" total={100} />
			</div>
			<h2 className="font-bold mt-10">Ultimos Clientes cadastrados</h2>
			<DefaultTable clients={clients} />
		</div>
	);
}
