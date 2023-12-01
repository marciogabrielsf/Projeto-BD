import { useCompanies } from "@/app/hooks/companies/queries";
import { usePlaces } from "@/app/hooks/places/queries";
import { getCompanies } from "@/app/services/companies.service";
import { createPlace } from "@/app/services/places.service";
import { ICompany } from "@/app/types";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import InputMask from "react-input-mask";

interface Props {
	onRequestClose: () => void;
}

export default function AddPlaceModal({ onRequestClose }: Props) {
	const { refetch } = usePlaces();
	const { data: companies } = useCompanies();

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [avgPrice, setAvgPrice] = useState(0);
	const [stars, setStars] = useState(0);
	const [phone, setPhone] = useState("");
	const [selectedCompany, setSelectedCompany] = useState(0);

	const addButton = async (e: React.MouseEvent) => {
		e.preventDefault();

		if (name && address && avgPrice && stars && selectedCompany) {
			await createPlace(name, address, phone, avgPrice, stars, selectedCompany);
			refetch();
			onRequestClose();
		} else {
			alert("Preencha todos os campos!");
		}
	};

	const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Adicionar Estabelecimento</h2>
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
					<label htmlFor="">Endereço</label>
					<input
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Endereço..."
					/>
				</div>

				<div>
					<label htmlFor="">Telefone</label>
					<InputMask
						mask={"(99) 99999-9999"}
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						type="text"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Endereço..."
					/>
				</div>

				<div>
					<label htmlFor="">Preço médio</label>
					<input
						value={avgPrice}
						type="number"
						onChange={(e) => setAvgPrice(e.target.valueAsNumber)}
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Telefone..."
					/>
				</div>

				<div>
					<label htmlFor="">Estrelas</label>
					<input
						min={0}
						max={5}
						type="number"
						value={stars}
						onChange={(e) => setStars(e.target.valueAsNumber)}
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o CPF..."
					/>
				</div>

				<div>
					<label htmlFor="">Empresa matriz</label>
					<select
						onChange={(e) => setSelectedCompany(+e.target.value)}
						className="p-2 rounded-md bg-slate-800 w-full"
					>
						<option value="0">Selecione uma opção...</option>
						{companies?.map((company, index) => (
							<option key={index} value={company.id}>
								{company.name}
							</option>
						))}
					</select>
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
