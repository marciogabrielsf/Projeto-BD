import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import InputMask from "react-input-mask";
import { PlaceProps } from "../PlacesTable";

interface Props {
	onRequestClose: () => void;
	place: PlaceProps | null;
}

export default function EditPlaceModal({ onRequestClose, place }: Props) {
	const addButton = (e: React.MouseEvent) => {
		e.preventDefault();
	};

	const [name, setName] = useState(place?.name);
	const [adress, setAdress] = useState(place?.address);
	const [phone, setPhone] = useState(place?.phone);
	const [stars, setStars] = useState(place?.stars);
	const [avgPrice, setAvgPrice] = useState(place?.priceavg);

	const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Editar Estabelecimento</h2>
				<button onClick={onRequestClose}>
					<MdClose size={22} />
				</button>
			</div>

			<form action="" className="flex flex-col gap-3">
				<div>
					<label htmlFor="">Empresa Dona</label>
					<select className=" p-2 rounded-md bg-slate-800 w-full" placeholder="Digite o Nome...">
						<option value="">Empresa A</option>
					</select>
				</div>
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
					<label htmlFor="">Endereço</label>
					<input
						value={adress}
						onChange={(e) => setAdress(e.target.value)}
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
					<label htmlFor="">Avaliação</label>
					<input
						value={stars}
						onChange={(e) => setStars(Number(e.target.value))}
						type="number"
						max={5}
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o CPF..."
					/>
				</div>
				<div>
					<label htmlFor="">Preço Médio</label>
					<input
						value={avgPrice}
						onChange={(e) => setAvgPrice(Number(e.target.value))}
						type="number"
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
