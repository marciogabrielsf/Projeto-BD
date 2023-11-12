import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import InputMask from "react-input-mask";
import { CompanyProps } from "../companyTable";

interface Props {
	onRequestClose: () => void;
	company: CompanyProps | null;
}

export default function EditCompanyModal({ onRequestClose, company }: Props) {
	const addButton = (e: React.MouseEvent) => {
		e.preventDefault();
	};

	const [name, setName] = useState(company?.name);
	const [email, setEmail] = useState(company?.email);
	const [phone, setPhone] = useState(company?.phone);
	const [cnpj, setCNPJ] = useState(company?.cnpj);

	const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Editar Empresa</h2>
				<button onClick={onRequestClose}>
					<MdClose size={22} />
				</button>
			</div>

			<form action="" className="flex flex-col gap-3">
				<div>
					<label htmlFor="">Nome</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Nome..."
					/>
				</div>
				<div>
					<label htmlFor="">E-Mail</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o E-mail..."
					/>
				</div>
				<div>
					<label htmlFor="">Telefone</label>
					<InputMask
						mask={"(99) 99999-9999"}
						value={phone}
						onChange={(e) => setPhone(onlyNumbers(e.target.value))}
						type="text"
						className="p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Telefone..."
					/>
				</div>
				<div>
					<label htmlFor="">CNPJ</label>
					<InputMask
						mask={"99.999.999/9999-99"}
						value={cnpj}
						onChange={(e) => setCNPJ(onlyNumbers(e.target.value))}
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o CPF..."
					/>
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
