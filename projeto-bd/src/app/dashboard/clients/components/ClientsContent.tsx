"use client";
import React, { useState } from "react";
import ClientsTable from "./clientsTable";
import Modal from "react-modal";
import AddClientsModalContent from "./modals/addClientsModal";
import { defaultModalStyle } from "@/app/components/modalstyle";

export default function ClientsContent() {
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);

	const handleModalOpen = () => {
		setAddModalIsOpen(true);
	};

	const handleCloseModal = () => {
		setAddModalIsOpen(false);
	};

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div>
				<h1 className="text-2xl font-bold">Clientes</h1>
				<Modal style={defaultModalStyle} isOpen={addModalIsOpen}>
					<AddClientsModalContent onRequestClose={handleCloseModal} />
				</Modal>

				<div className="flex flex-row justify-between">
					<input
						type="text"
						className=" mt-2 p-2 rounded-md bg-slate-800 "
						placeholder="Buscar..."
					/>
					<button
						onClick={handleModalOpen}
						className="py-3 px-10 hover:bg-secondary transition active:opacity-80 bg-primary rounded-xl"
					>
						Adicionar
					</button>
				</div>
			</div>
			<ClientsTable />
		</div>
	);
}
