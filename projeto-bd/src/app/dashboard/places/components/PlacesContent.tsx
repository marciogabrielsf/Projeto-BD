"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import AddPlaceModal from "./modals/addPlaceModal";
import PlacesTable from "./PlacesTable";
import { IPlace } from "@/app/types";
import { getPlaces } from "@/app/services/places.service";
import { filterQuery } from "@/app/utils/filterQuery";
import { usePlaces } from "@/app/hooks/places/queries";

export default function PlacesContent() {
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);
	const [query, setQuery] = useState("");

	const { data } = usePlaces();

	const filteredPlaces = filterQuery<IPlace>(data || [], query);

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
						value={query}
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
			<PlacesTable places={filteredPlaces} />
		</div>
	);
}
