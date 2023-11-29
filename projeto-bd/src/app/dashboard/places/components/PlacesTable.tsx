import React, { useEffect, useState } from "react";
import { BiSolidPencil, BiSolidStar, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemovePlaceModal from "./modals/removePlaceModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditPlaceModal from "./modals/editPlaceModal";
import { IPlace } from "@/app/types";

export interface TableProps {
	places: IPlace[];
	getPlaceData: () => void;
}

type ModalProps = {
	isOpen: boolean;
	place: IPlace | null;
};

export default function PlacesTable({ places, getPlaceData }: TableProps) {
	const hasContent = places.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		place: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		place: null,
	});

	useEffect(() => {
		getPlaceData();
	}, [removeModal, editModal]);

	const handleRemoveModalOpen = (place: IPlace) => setRemoveModal({ isOpen: true, place });
	const handleRemoveModalClose = () => setRemoveModal({ isOpen: false, place: null });
	const handleEditModalOpen = (place: IPlace) => setEditModal({ isOpen: true, place });
	const handleEditModalClose = () => setEditModal({ isOpen: false, place: null });

	return (
		<div className="bg-slate-800 h-full shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<Modal style={defaultModalStyle} isOpen={removeModal.isOpen}>
				<RemovePlaceModal onRequestClose={handleRemoveModalClose} data={removeModal.place} />
			</Modal>
			<Modal style={defaultModalStyle} isOpen={editModal.isOpen}>
				<EditPlaceModal onRequestClose={handleEditModalClose} place={editModal.place} />
			</Modal>

			{hasContent ? (
				<table className="w-full text-left text-sm table-fixed">
					<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
						<tr>
							<th scope="col">Nome</th>
							<th scope="col">Endereço</th>
							<th scope="col">Telefone</th>
							<th scope="col">Avaliações</th>
							<th scope="col">Preço Médio</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{places.map((data) => (
							<tr
								className="border-b-2 border-gray-700 [&>td]:py-3 [&>td]:overflow-clip "
								key={data.id}
							>
								<th scope="row" className="">
									{data.name}
								</th>
								<td>{data.address}</td>
								<td>{data.phone}</td>
								<td>
									<div className="flex text-primary">
										{[...Array(data.stars)].map(() => (
											<BiSolidStar size={18} />
										))}
									</div>
								</td>
								<td>R${data.avg_price.toFixed(2)}</td>
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
					<p className="">Não há Estabelecimentos Adicionados</p>
				</div>
			)}
		</div>
	);
}
