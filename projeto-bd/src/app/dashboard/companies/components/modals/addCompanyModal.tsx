import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import InputMask from "react-input-mask";
import { createCompany } from "@/app/services/companies.service";

interface Props {
	onRequestClose: () => void;
}

export default function AddCompanyModal({ onRequestClose }: Props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [cnpj, setCnpj] = useState("");

	const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");

	const addButton = async (e: React.MouseEvent) => {
		e.preventDefault();

		if (name && email && phone && cnpj) {
			await createCompany(name, email, phone, cnpj);
			onRequestClose();
		} else {
			alert("Preencha todos os campos!");
		}
	};
	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Adicionar Empresa</h2>
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
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Telefone..."
					/>
				</div>

				<div>
					<label htmlFor="">CNPJ</label>
					<InputMask
						mask={"99.999.999/9999-99"}
						value={cnpj}
						onChange={(e) => setCnpj(onlyNumbers(e.target.value))}
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
