import React from "react";

const tabledata = [
	{
		id: 1,
		name: "Marcondes Cavalcante",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "091.644.383-33",
	},
	{
		id: 2,
		name: "Eai cla",
		email: "marcondescavalcante75@gmail.com",
		phone: "99999999999",
		cpf: "161",
	},
	{
		id: 3,
		name: "opa",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "1512",
	},
	{
		id: 4,
		name: "Marasconasion",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "512",
	},
	{
		id: 5,
		name: "Marasconasion",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "512",
	},
	{
		id: 6,
		name: "Marasconasion",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "512",
	},
];

export default function ClientsTable() {
	return (
		<div className="bg-slate-800 h-full shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<table className="w-full text-left text-sm table-fixed">
				<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
					<tr>
						<th scope="col">Nome</th>
						<th scope="col">E-mail</th>
						<th scope="col">Telefone</th>
						<th scope="col">Cpf</th>
					</tr>
				</thead>
				<tbody>
					{tabledata.map((data) => (
						<tr
							className="border-b-2 border-gray-700 [&>td]:py-3 [&>td]:overflow-clip "
							key={data.id}
						>
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
