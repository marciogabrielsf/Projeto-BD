import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

interface Props {
	onRequestClose: () => void;
}

export default function AddClientsModalContent({ onRequestClose }: Props) {
	const addButton = (e: React.MouseEvent) => {
		e.preventDefault();
	};

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Adicionar Cliente</h2>
				<button onClick={onRequestClose}>
					<MdClose size={22} />
				</button>
			</div>
			<form action="" className="flex flex-col gap-2">
				<div>
					<label htmlFor="">Nome</label>
					<input
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Nome..."
					/>
				</div>
				<div>
					<label htmlFor="">E-Mail</label>
					<input
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o E-mail..."
					/>
				</div>
				<div>
					<label htmlFor="">Telefone</label>
					<input
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Telefone..."
					/>
				</div>
				<div>
					<label htmlFor="">CPF</label>
					<input
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
