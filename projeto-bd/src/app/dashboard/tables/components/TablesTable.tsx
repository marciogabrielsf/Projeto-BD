import React, { useEffect, useState } from "react";
import { BiSolidPencil, BiSolidStar, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemoveTableModal from "../modals/removeTableModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditTableModal from "../modals/editTableModal";
import { ITable } from "@/app/types";

export interface TableProps {
	tables: ITable[];
}

type ModalProps = {
	isOpen: boolean;
	table: ITable | null;
};

export default function TablesTable({ tables }: TableProps) {
	const hasContent = tables.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		table: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		table: null,
	});

	const handleRemoveModalOpen = (table: ITable) => setRemoveModal({ isOpen: true, table });
	const handleRemoveModalClose = () => setRemoveModal({ isOpen: false, table: null });
	const handleEditModalOpen = (table: ITable) => setEditModal({ isOpen: true, table });
	const handleEditModalClose = () => setEditModal({ isOpen: false, table: null });

	return (
		<div className="bg-slate-800 h-full shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<Modal style={defaultModalStyle} isOpen={removeModal.isOpen}>
				<RemoveTableModal onRequestClose={handleRemoveModalClose} data={removeModal.table} />
			</Modal>
			<Modal style={defaultModalStyle} isOpen={editModal.isOpen}>
				<EditTableModal onRequestClose={handleEditModalClose} table={editModal.table} />
			</Modal>

			{hasContent ? (
				<table className="w-full text-left text-sm table-fixed">
					<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
						<tr>
							<th scope="col">Estabelecimento Dono</th>
							<th scope="col">Numero</th>
							<th scope="col">Valor</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{tables.map((data, index) => (
							<tr
								className="border-b-2 border-gray-700 [&>td]:py-3 [&>td]:overflow-clip "
								key={index}
							>
								<th scope="row" className="">
									{data.place_name}
								</th>
								<td>{data.number}</td>
								<td>R${data.value.toFixed(2)}</td>
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
					<p className="">Não há Mesas Adicionadas</p>
				</div>
			)}
		</div>
	);
}
