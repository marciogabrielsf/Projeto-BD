import React, { useEffect, useState } from "react";
import { BiSolidPencil, BiSolidStar, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemoveReserveModal from "../modals/removeReserveModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditTableModal from "../modals/editReserveModal";
import { IReservation, ITable } from "@/app/types";

export interface TableProps {
	reserves: IReservation[];
}

type ModalProps = {
	isOpen: boolean;
	table: IReservation | null;
};

export default function ReservesTable({ reserves }: TableProps) {
	const hasContent = reserves.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		table: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		table: null,
	});

	const handleRemoveModalOpen = (table: IReservation) => setRemoveModal({ isOpen: true, table });
	const handleRemoveModalClose = () => setRemoveModal({ isOpen: false, table: null });
	const handleEditModalOpen = (table: IReservation) => setEditModal({ isOpen: true, table });
	const handleEditModalClose = () => setEditModal({ isOpen: false, table: null });

	return (
		<div className="bg-slate-800 h-full shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<Modal style={defaultModalStyle} isOpen={removeModal.isOpen}>
				<RemoveReserveModal onRequestClose={handleRemoveModalClose} data={removeModal.table} />
			</Modal>
			<Modal style={defaultModalStyle} isOpen={editModal.isOpen}>
				<EditTableModal onRequestClose={handleEditModalClose} data={editModal.table} />
			</Modal>

			{hasContent ? (
				<table className="w-full text-left text-sm table-fixed">
					<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
						<tr>
							<th scope="col">Numero da mesa</th>
							<th scope="col">Cliente</th>
							<th scope="col">Estabelecimento</th>
							<th scope="col">Data</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{reserves.map((data, index) => (
							<tr
								className="border-b-2 border-gray-700 [&>td]:py-3 [&>td]:overflow-clip "
								key={index}
							>
								<td>{data.number}</td>
								<td>{data.client_name}</td>
								<td>{data.place_name}</td>
								<td>{data.date}</td>
								<td>
									<div className="flex gap-3 [&>button:hover]:text-primary [&>button]:transition">
										<button onClick={() => handleEditModalOpen(data)}>
											<BiSolidPencil size={20} />
										</button>
										<button onClick={() => handleRemoveModalOpen(data)}>
											<BiTrash size={20} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="flex h-full justify-center items-center">
					<p className="">Não há Reservas Adicionadas</p>
				</div>
			)}
		</div>
	);
}
