"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import AddReserveModal from "../modals/addReserveModal";
import ReservesTable from "./ReservesTable";
import { useReservations } from "@/app/hooks/reservations/queries";
import { filterQuery, filterQueryNumber } from "@/app/utils/filterQuery";
import { IReservation } from "@/app/types";

export default function ReservesContent() {
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);
	const [query, setQuery] = useState("");

	const { data } = useReservations();
	const filteredReserves = filterQueryNumber<IReservation>(data || [], Number(query));

	const handleModalOpen = () => setAddModalIsOpen(true);
	const handleCloseModal = () => setAddModalIsOpen(false);

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div>
				<h1 className="text-2xl font-bold">Reservas</h1>
				<Modal style={defaultModalStyle} isOpen={addModalIsOpen}>
					<AddReserveModal onRequestClose={handleCloseModal} />
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
			<ReservesTable reserves={filteredReserves} />
		</div>
	);
}
