import React, { useEffect, useState } from "react";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemoveClientsModal from "./modals/removeClientsModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditClientsModal from "./modals/editClientsModal";
import { IClient } from "@/app/types";
import { useClients } from "@/app/hooks/clients/queries";

type ModalProps = {
	isOpen: boolean;
	client: IClient | null;
};

interface ClientsTableProps {
	clients: IClient[];
}

export default function ClientsTable({ clients }: ClientsTableProps) {
	const { isLoading, isSuccess } = useClients();

	const hasContent = clients?.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		client: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		client: null,
	});

	const handleRemoveModalOpen = (client: IClient) => setRemoveModal({ isOpen: true, client });
	const handleRemoveModalClose = () => setRemoveModal({ isOpen: false, client: null });
	const handleEditModalOpen = (client: IClient) => setEditModal({ isOpen: true, client });
	const handleEditModalClose = () => setEditModal({ isOpen: false, client: null });

	return (
		<div className="bg-slate-800 h-full shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<Modal style={defaultModalStyle} isOpen={removeModal.isOpen}>
				<RemoveClientsModal onRequestClose={handleRemoveModalClose} data={removeModal.client} />
			</Modal>
			<Modal style={defaultModalStyle} isOpen={editModal.isOpen}>
				<EditClientsModal onRequestClose={handleEditModalClose} client={editModal.client} />
			</Modal>

			{!isLoading && isSuccess ? (
				hasContent ? (
					<table className="w-full text-left text-sm table-fixed">
						<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
							<tr>
								<th scope="col">Nome</th>
								<th scope="col">E-mail</th>
								<th scope="col">Telefone</th>
								<th scope="col">Cpf</th>
								<th scope="col">Ações</th>
							</tr>
						</thead>
						<tbody>
							{clients.map((data, index) => (
								<tr
									className="border-b-2 border-gray-700 [&>td]:py-3 [&>td]:overflow-clip "
									key={index}
								>
									<th scope="row" className="">
										{data.name}
									</th>
									<td>{data.email}</td>
									<td>{data.phone}</td>
									<td>{data.cpf}</td>
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
						<p>Nenhum cliente encontrado</p>
					</div>
				)
			) : (
				<div className="flex h-full justify-center items-center">
					<p className="">Carregando...</p>
				</div>
			)}
		</div>
	);
}
