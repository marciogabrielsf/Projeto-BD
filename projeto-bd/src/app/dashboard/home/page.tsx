"use client";
import React, { useEffect } from "react";
import DashboardItem from "./components/DashboardItem";
import DefaultTable from "@/app/components/defaultTable";

import { useClients } from "@/app/hooks/clients/queries";
import { useCompanies } from "@/app/hooks/companies/queries";
import { usePlaces } from "@/app/hooks/places/queries";
import { useTables } from "@/app/hooks/tables/queries";

export default function HomePage() {
	const { data: clients } = useClients();
	const { data: companies } = useCompanies();
	const { data: places } = usePlaces();
	const { data: tables } = useTables();

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div className="flex gap-5">
				<DashboardItem title="Clientes" total={clients?.length || 0} />
				<DashboardItem title="Empresas" total={companies?.length || 0} />
				<DashboardItem title="Estabelecimentos" total={places?.length || 0} />
				<DashboardItem title="Mesas" total={tables?.length || 0} />
			</div>
			<h2 className="font-bold mt-10">Ultimos Clientes cadastrados</h2>
			<DefaultTable clients={clients || []} />
		</div>
	);
}
