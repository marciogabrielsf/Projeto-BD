import { useClients } from "@/app/hooks/clients/queries";
import { useReservations } from "@/app/hooks/reservations/queries";
import { useTables } from "@/app/hooks/tables/queries";
import { updateReservation } from "@/app/services/reservations.service";
import { IReservation } from "@/app/types";

import React, { useState } from "react";
import { MdClose } from "react-icons/md";

interface Props {
	data: IReservation | null;
	onRequestClose: () => void;
}

export default function AddReserveModal({ onRequestClose, data }: Props) {
	const [selectedTable, setSelectedTable] = useState(0);
	const [selectedClient, setSelectedClient] = useState(0);
	const [date] = useState(new Date());

	const { refetch } = useReservations();
	const { data: client } = useClients();
	const { data: tables } = useTables();

	const addButton = async (e: React.MouseEvent) => {
		e.preventDefault();

		if (data && date && selectedClient !== 0 && selectedTable !== 0) {
			await updateReservation(data.id, selectedClient, selectedTable, date);
			refetch();
			onRequestClose();
		} else {
			alert("Preencha todos os campos!");
		}
	};

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Adicionar Estabelecimento</h2>
				<button onClick={onRequestClose}>
					<MdClose size={22} />
				</button>
			</div>

			<form action="" className="flex flex-col gap-3">
				<div>
					<label htmlFor="">Mesa</label>
					<select
						onChange={(e) => setSelectedTable(+e.target.value)}
						className="p-2 rounded-md bg-slate-800 w-full"
					>
						<option value="0">Selecione uma opção...</option>
						{tables?.map((table, index) => (
							<option key={index} value={table.id}>
								{table.number}
							</option>
						))}
					</select>
				</div>

				<div>
					<label htmlFor="">Cliente</label>
					<select
						onChange={(e) => setSelectedClient(+e.target.value)}
						className="p-2 rounded-md bg-slate-800 w-full"
					>
						<option value="0">Selecione uma opção...</option>
						{client?.map((client, index) => (
							<option key={index} value={client.id}>
								{client.name}
							</option>
						))}
					</select>
				</div>

				<button
					onClick={(e) => addButton(e)}
					className="py-3 mt-3 px-10 hover:bg-secondary transition active:opacity-80 bg-primary rounded-xl"
				>
					Adicionar
				</button>
			</form>
		</div>
	);
}
