import { usePlaces } from "@/app/hooks/places/queries";
import { useTables } from "@/app/hooks/tables/queries";
import { getPlaces } from "@/app/services/places.service";
import { createTable } from "@/app/services/tables.service";
import { IPlace } from "@/app/types";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

interface Props {
	onRequestClose: () => void;
}

export default function AddTableModal({ onRequestClose }: Props) {
	const { data: places } = usePlaces();
	const { refetch } = useTables();

	const [tableNumber, setTableNumber] = useState(0);
	const [value, setValue] = useState(0);
	const [selectedTable, setSelectedTable] = useState(0);

	const addButton = async (e: React.MouseEvent) => {
		e.preventDefault();

		if (tableNumber && value && selectedTable !== 0) {
			await createTable(tableNumber, value, selectedTable);
			refetch();
			onRequestClose();
		} else {
			alert("Preencha todos os campos!");
		}
	};

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
					<label htmlFor="">Número da mesa</label>
					<input
						value={tableNumber}
						onChange={(e) => setTableNumber(e.target.valueAsNumber)}
						type="number"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Nome..."
					/>
				</div>

				<div>
					<label htmlFor="">Valor da mesa</label>
					<input
						value={value}
						onChange={(e) => setValue(e.target.valueAsNumber)}
						type="number"
						className=" p-2 rounded-md bg-slate-800 w-full"
						placeholder="Digite o Endereço..."
					/>
				</div>

				<div>
					<label htmlFor="">Estabelecimento </label>
					<select
						onChange={(e) => setSelectedTable(+e.target.value)}
						className="p-2 rounded-md bg-slate-800 w-full"
					>
						<option value="0">Selecione uma opção...</option>
						{places?.map((place, index) => (
							<option key={index} value={place.id}>
								{place.name}
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
