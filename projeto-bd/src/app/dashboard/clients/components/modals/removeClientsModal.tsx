import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { deleteClient } from "@/app/services/clients.service";
import { IClient } from "@/app/types";
import { useClients } from "@/app/hooks/clients/queries";

interface Props {
	onRequestClose: () => void;
	data: IClient | null;
}

export default function RemoveClientsModal({ onRequestClose, data }: Props) {
	const { refetch } = useClients();
	const handleRemoveButton = async (e: React.MouseEvent) => {
		e.preventDefault();
		if (data) {
			await deleteClient(data.id);
			refetch();
			onRequestClose();
		}
	};

	return (
		<div className="text-white w-[30rem] p-2 flex gap-3 flex-col">
			<div className="flex mb-2 flex-row items-center justify-between">
				<h2 className="font-bold text-xl">Remover cliente</h2>
				<button onClick={onRequestClose}>
					<MdClose size={22} />
				</button>
			</div>
			<div>
				<h2>
					Você Realmente deseja remover o cliente <strong>{data?.name}?</strong>
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
