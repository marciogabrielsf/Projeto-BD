import React from "react";
import Sidebar from "../../components/sidebar";
import ClientsContent from "./components/TablesContent";

export default function Tables() {
	return (
		<main>
			<section className="bg-slate-900 flex h-screen">
				<Sidebar />
				<ClientsContent />
			</section>
		</main>
	);
}
