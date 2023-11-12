import React from "react";
import Sidebar from "../../components/sidebar";
import CompanyContent from "./components/companiesContent";

export default function Companies() {
	return (
		<main>
			<section className="bg-slate-900 flex h-screen">
				<Sidebar />
				<CompanyContent />
			</section>
		</main>
	);
}
