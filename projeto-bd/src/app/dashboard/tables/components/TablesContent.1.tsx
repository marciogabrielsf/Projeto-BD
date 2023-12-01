"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import TablesTable from "./TablesTable";
import { ITable } from "@/app/types";
import { useTables } from "@/app/hooks/tables/queries";
import { filterQuery } from "@/app/utils/filterQuery";
import AddTableModal from "../modals/addTableModal";

export default function TablesContent() {
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);
	const [query, setQuery] = useState("");

	const { data } = useTables();

	const filteredTables = filterQuery<ITable>(data || [], query);

	const handleModalOpen = () => setAddModalIsOpen(true);
	const handleCloseModal = () => setAddModalIsOpen(false);

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div>
				<h1 className="text-2xl font-bold">Mesas</h1>
				<Modal style={defaultModalStyle} isOpen={addModalIsOpen}>
					<AddTableModal onRequestClose={handleCloseModal} />
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
			<TablesTable tables={filteredTables} />
		</div>
	);
}
