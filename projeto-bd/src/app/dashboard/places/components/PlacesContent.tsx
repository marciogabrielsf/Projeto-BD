"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import AddPlaceModal from "./modals/addPlaceModal";
import PlacesTable from "./PlacesTable";

export default function PlacesContent() {
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);

	const [places, setPlaces] = useState([]);

	const handleModalOpen = () => setAddModalIsOpen(true);
	const handleCloseModal = () => setAddModalIsOpen(false);

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div>
				<h1 className="text-2xl font-bold">Estabelecimentos</h1>
				<Modal style={defaultModalStyle} isOpen={addModalIsOpen}>
					<AddPlaceModal onRequestClose={handleCloseModal} />
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
			<PlacesTable />
		</div>
	);
}
