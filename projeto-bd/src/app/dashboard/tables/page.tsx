import React from "react";
import Sidebar from "../../components/sidebar";
import TablesContent from "./components/TablesContent.1";

export default function Tables() {
	return (
		<main>
			<section className="bg-slate-900 flex h-screen">
				<Sidebar />
				<TablesContent />
			</section>
		</main>
	);
}
