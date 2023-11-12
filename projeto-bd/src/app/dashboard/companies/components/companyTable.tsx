import React, { useState } from "react";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemoveCompanyModal from "./modals/removeCompanyModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditCompanyModal from "./modals/editCompanyModal";

export interface CompanyProps {
	id: number;
	name: string;
	email: string;
	phone: string;
	cnpj: string;
}

const tabledata: CompanyProps[] = [
	{
		id: 1,
		name: "Empresa A",
		email: "contato@empresaA.com",
		phone: "(11) 1234-5678",
		cnpj: "12.345.678/0001-90",
	},
	{
		id: 2,
		name: "Empresa B",
		email: "contato@empresaB.com",
		phone: "(21) 9876-5432",
		cnpj: "98.765.432/0001-21",
	},
	{
		id: 3,
		name: "Empresa C",
		email: "contato@empresaC.com",
		phone: "(31) 8765-4321",
		cnpj: "76.543.210/0001-32",
	},
	{
		id: 4,
		name: "Empresa D",
		email: "contato@empresaD.com",
		phone: "(41) 7654-3210",
		cnpj: "54.321.098/0001-43",
	},
	{
		id: 5,
		name: "Empresa E",
		email: "contato@empresaE.com",
		phone: "(51) 4321-0987",
		cnpj: "43.210.987/0001-54",
	},
	{
		id: 6,
		name: "Empresa F",
		email: "contato@empresaF.com",
		phone: "(61) 2109-8765",
		cnpj: "32.109.876/0001-65",
	},
	{
		id: 7,
		name: "Empresa G",
		email: "contato@empresaG.com",
		phone: "(71) 9876-5432",
		cnpj: "21.098.765/0001-76",
	},
	{
		id: 8,
		name: "Empresa H",
		email: "contato@empresaH.com",
		phone: "(81) 8765-4321",
		cnpj: "10.987.654/0001-87",
	},
	{
		id: 9,
		name: "Empresa I",
		email: "contato@empresaI.com",
		phone: "(91) 7654-3210",
		cnpj: "09.876.543/0001-98",
	},
	{
		id: 10,
		name: "Empresa J",
		email: "contato@empresaJ.com",
		phone: "(01) 2345-6789",
		cnpj: "87.654.321/0001-09",
	},
];

type ModalProps = {
	isOpen: boolean;
	company: CompanyProps | null;
};

export default function CompanyTable() {
	const hasContent = tabledata.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		company: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		company: null,
	});

	const handleRemoveModalOpen = (company: CompanyProps) => {
		setRemoveModal({ isOpen: true, company });
	};
	const handleRemoveModalClose = () => {
		setRemoveModal({ isOpen: false, company: null });
	};

	const handleEditModalOpen = (company: CompanyProps) => {
		setEditModal({ isOpen: true, company });
	};
	const handleEditModalClose = () => {
		setEditModal({ isOpen: false, company: null });
	};

	return (
		<div className="bg-slate-800 h-full shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<Modal style={defaultModalStyle} isOpen={removeModal.isOpen}>
				<RemoveCompanyModal onRequestClose={handleRemoveModalClose} data={removeModal.company} />
			</Modal>
			<Modal style={defaultModalStyle} isOpen={editModal.isOpen}>
				<EditCompanyModal onRequestClose={handleEditModalClose} company={editModal.company} />
			</Modal>

			{hasContent ? (
				<table className="w-full text-left text-sm table-fixed">
					<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
						<tr>
							<th scope="col">Nome</th>
							<th scope="col">E-mail</th>
							<th scope="col">Telefone</th>
							<th scope="col">CNPJ</th>
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
								<td>{data.email}</td>
								<td>{data.phone}</td>
								<td>{data.cnpj}</td>
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
					<p className="">Não há Empresas Adicionadas</p>
				</div>
			)}
		</div>
	);
}
