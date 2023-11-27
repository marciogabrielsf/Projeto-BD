import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import InputMask from "react-input-mask";
import { updateClient } from "@/app/services/clients.service";
import { ClientProps } from "../ClientsContent";

interface Props {
	onRequestClose: () => void;
	client: ClientProps | null;
	getClients: () => void;
}

export default function EditClientsModal({ onRequestClose, client, getClients }: Props) {
	const [name, setName] = useState(client?.name || "");
	const [email, setEmail] = useState(client?.email || "");
	const [phone, setPhone] = useState(client?.phone || "");
	const [cpf, setCpf] = useState(client?.cpf || "");

	const addButton = async (e: React.MouseEvent) => {
		e.preventDefault();

		if (client) {
			await updateClient(client.id, name, email, cpf, phone);
			await getClients();
			onRequestClose();
		}
	};

	const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Editar Cliente</h2>
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
					<label htmlFor="">CPF</label>
					<InputMask
						mask={"999.999.999-99"}
						value={cpf}
						onChange={(e) => setCpf(onlyNumbers(e.target.value))}
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o CPF..."
					/>
				</div>
				<button
					onClick={(e) => addButton(e)}
					className="py-3 mt-3 px-10 hover:bg-secondary transition active:opacity-80 bg-primary rounded-xl"
				>
					Atualizar
				</button>
			</form>
		</div>
	);
}
