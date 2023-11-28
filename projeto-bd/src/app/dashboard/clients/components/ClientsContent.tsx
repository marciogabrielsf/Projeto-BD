"use client";
import React, { useEffect, useState } from "react";
import ClientsTable from "./clientsTable";
import Modal from "react-modal";
import AddClientsModalContent from "./modals/addClientsModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import { getClients } from "@/app/services/clients.service";
import { filterQuery } from "@/app/utils/filterQuery";
import { IClient } from "@/app/types";

export default function ClientsContent() {
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);

	const [clients, setClients] = useState<IClient[]>([]);
	const [query, setQuery] = useState("");

	const getClientData = async () => {
		const data = await getClients();
		if (data) {
			setClients(data.clients);
		}
	};

	useEffect(() => {
		getClientData();
	}, []);

	const filteredClients = filterQuery<IClient>(clients, query);

	const handleModalOpen = () => setAddModalIsOpen(true);

	const handleCloseModal = () => setAddModalIsOpen(false);

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div>
				<h1 className="text-2xl font-bold">Clientes</h1>
				<Modal style={defaultModalStyle} isOpen={addModalIsOpen}>
					<AddClientsModalContent getClients={getClientData} onRequestClose={handleCloseModal} />
				</Modal>

				<div className="flex flex-row justify-between">
					<input
						type="text"
						className=" mt-2 p-2 rounded-md bg-slate-800 "
						placeholder="Buscar..."
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button
						onClick={handleModalOpen}
						className="py-3 px-10 hover:bg-secondary transition active:opacity-80 bg-primary rounded-xl"
					>
						Adicionar
					</button>
				</div>
			</div>
			<ClientsTable clients={filteredClients} getClients={getClientData} />
		</div>
	);
}
