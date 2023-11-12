import React, { useState } from "react";
import { BiSolidPencil, BiSolidStar, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemovePlaceModal from "./modals/removePlaceModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditPlaceModal from "./modals/editPlaceModal";

export interface PlaceProps {
	id: number;
	address: string;
	stars: number;
	priceavg: number;
	name: string;
	phone: string;
}

const tabledata: PlaceProps[] = [
	{
		id: 1,
		address: "Rua A, 123",
		stars: 4,
		name: "Restaurante A",
		phone: "(11) 1234-5678",
		priceavg: 52.0,
	},
	{
		id: 2,
		address: "Avenida B, 456",
		stars: 3,
		name: "Restaurante B",
		phone: "(21) 9876-5432",
		priceavg: 40.0,
	},
	{
		id: 3,
		address: "Travessa C, 789",
		stars: 5,
		name: "Restaurante C",
		phone: "(31) 8765-4321",
		priceavg: 75.0,
	},
	{
		id: 4,
		address: "Praça D, 101",
		stars: 2,
		name: "Restaurante D",
		phone: "(41) 7654-3210",
		priceavg: 30.0,
	},
	{
		id: 5,
		address: "Alameda E, 202",
		stars: 4,
		name: "Restaurante E",
		phone: "(51) 4321-0987",
		priceavg: 55.0,
	},
	{
		id: 6,
		address: "Av. F, 303",
		stars: 3,
		name: "Restaurante F",
		phone: "(61) 2109-8765",
		priceavg: 45.0,
	},
	{
		id: 7,
		address: "Rua G, 404",
		stars: 4,
		name: "Restaurante G",
		phone: "(71) 9876-5432",
		priceavg: 60.0,
	},
	{
		id: 8,
		address: "Avenida H, 505",
		stars: 2,
		name: "Restaurante H",
		phone: "(81) 8765-4321",
		priceavg: 35.0,
	},
	{
		id: 9,
		address: "Travessa I, 606",
		stars: 5,
		name: "Restaurante I",
		phone: "(91) 7654-3210",
		priceavg: 70.0,
	},
	{
		id: 10,
		address: "Praça J, 707",
		stars: 3,
		name: "Restaurante J",
		phone: "(01) 2345-6789",
		priceavg: 50.0,
	},
];

type ModalProps = {
	isOpen: boolean;
	place: PlaceProps | null;
};

export default function CompanyTable() {
	const hasContent = tabledata.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		place: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		place: null,
	});

	const handleRemoveModalOpen = (company: PlaceProps) => {
		setRemoveModal({ isOpen: true, place: company });
	};
	const handleRemoveModalClose = () => {
		setRemoveModal({ isOpen: false, place: null });
	};

	const handleEditModalOpen = (company: PlaceProps) => {
		setEditModal({ isOpen: true, place: company });
	};
	const handleEditModalClose = () => {
		setEditModal({ isOpen: false, place: null });
	};

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
						{tabledata.map((data) => (
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
								<td>R${data.priceavg.toFixed(2)}</td>
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
					<p className="">Não há Clientes Adicionados</p>
				</div>
			)}
		</div>
	);
}
