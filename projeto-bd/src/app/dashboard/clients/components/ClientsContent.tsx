"use client";
import React, { useState } from "react";
import ClientsTable from "./clientsTable";
import Modal from "react-modal";
import AddClientsModalContent from "./addClientsModal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "#334155",
		border: "none",
		borderRadius: "1rem",
	},
	overlay: {
		backgroundColor: "#000000bc",
	},
};

export default function ClientsContent() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleModalOpen = () => {
		setModalIsOpen(true);
	};

	const handleCloseModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div>
				<h1 className="text-2xl font-bold">Clientes</h1>
				<Modal style={customStyles} isOpen={modalIsOpen}>
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
