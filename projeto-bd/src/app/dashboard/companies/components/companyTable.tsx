import React, { useEffect, useState } from "react";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemoveCompanyModal from "./modals/removeCompanyModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditCompanyModal from "./modals/editCompanyModal";
import { ICompany } from "@/app/types";

type ModalProps = {
	isOpen: boolean;
	company: ICompany | null;
};

interface TableProps {
	companies: ICompany[];
	getCompanies: () => void;
}

export default function CompanyTable({ companies, getCompanies }: TableProps) {
	const hasContent = companies.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		company: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		company: null,
	});

	useEffect(() => {
		if (!removeModal.isOpen || !editModal.isOpen) getCompanies();
	}, [removeModal, editModal]);

	const handleRemoveModalOpen = (company: ICompany) => setRemoveModal({ isOpen: true, company });
	const handleRemoveModalClose = () => setRemoveModal({ isOpen: false, company: null });
	const handleEditModalOpen = (company: ICompany) => setEditModal({ isOpen: true, company });
	const handleEditModalClose = () => setEditModal({ isOpen: false, company: null });

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
						{companies.map((data) => (
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
