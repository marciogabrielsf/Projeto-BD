import { useTables } from "@/app/hooks/tables/queries";
import { deleteTable } from "@/app/services/tables.service";
import { ITable } from "@/app/types";
import React from "react";
import { MdClose } from "react-icons/md";

interface Props {
	onRequestClose: () => void;
	data: ITable | null;
}

export default function RemoveTableModal({ onRequestClose, data }: Props) {
	const { refetch } = useTables();
	const handleRemoveButton = async (e: React.MouseEvent) => {
		e.preventDefault();
		if (data) {
			await deleteTable(data.id);
			refetch();
		}

		onRequestClose();
	};

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Remover Empresa</h2>
				<button onClick={onRequestClose}>
					<MdClose size={22} />
				</button>
			</div>
			<div>
				<h2>
					Você Realmente deseja remover a mesa <strong>{data?.number}?</strong>
				</h2>
				<div className="flex gap-6 mt-10">
					<button
						onClick={onRequestClose}
						className="py-3 px-10 flex-1 hover:bg-gray-900 transition active:opacity-80 bg-gray-800 rounded-lg"
					>
						Cancelar
					</button>
					<button
						onClick={(e) => handleRemoveButton(e)}
						className="py-3 px-10 flex-1 hover:bg-secondary transition active:opacity-80 bg-primary rounded-xl"
					>
						Remover
					</button>
				</div>
			</div>
		</div>
	);
}
