"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import AddCompanyModal from "./modals/addCompanyModal";
import CompanyTable from "./companyTable";
import { ICompany } from "@/app/types";
import { filterQuery } from "@/app/utils/filterQuery";
import { useCompanies } from "@/app/hooks/companies/queries";

export default function CompaniesContent() {
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);

	const { data } = useCompanies();

	const [query, setQuery] = useState("");

	const filteredCompanies = filterQuery<ICompany>(data || [], query);

	const handleModalOpen = () => setAddModalIsOpen(true);
	const handleCloseModal = () => setAddModalIsOpen(false);

	return (
		<div className="text-white w-full flex flex-col gap-5 p-12">
			<div>
				<h1 className="text-2xl font-bold">Empresas</h1>
				<Modal style={defaultModalStyle} isOpen={addModalIsOpen}>
					<AddCompanyModal onRequestClose={handleCloseModal} />
				</Modal>

				<div className="flex flex-row justify-between">
					<input
						type="text"
						className=" mt-2 p-2 rounded-md bg-slate-800 "
						placeholder="Buscar..."
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
			<CompanyTable companies={filteredCompanies} />
		</div>
	);
}
