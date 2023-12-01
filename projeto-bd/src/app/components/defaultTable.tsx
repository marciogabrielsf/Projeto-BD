import React from "react";
import { IClient } from "../types";

interface TableData {
	clients: IClient[];
}

export default function DefaultTable({ clients }: TableData) {
	return (
		<div className="bg-slate-800 shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<table className="w-full text-left text-sm">
				<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
					<tr className="[&>th]:">
						<th scope="col">Nome</th>
						<th scope="col">E-mail</th>
						<th scope="col">Telefone</th>
						<th scope="col">Cpf</th>
					</tr>
				</thead>
				<tbody>
					{clients.map((data, index) => (
						<tr className="border-b-2 border-gray-700 [&>td]:py-3 " key={index}>
							<th scope="row" className="">
								{data.name}
							</th>
							<td>{data.email}</td>
							<td>{data.phone}</td>
							<td>{data.cpf}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
