import React from "react";
import Sidebar from "../../components/sidebar";
import ClientsContent from "./components/PlacesContent";

export default function Places() {
	return (
		<main>
			<section className="bg-slate-900 flex h-screen">
				<Sidebar />
				<ClientsContent />
			</section>
		</main>
	);
}
