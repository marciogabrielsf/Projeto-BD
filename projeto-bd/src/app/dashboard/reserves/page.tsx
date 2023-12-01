import React from "react";
import Sidebar from "../../components/sidebar";
import ReservesContent from "./components/ReservesContent";

export default function Reserves() {
	return (
		<main>
			<section className="bg-slate-900 flex h-screen">
				<Sidebar />
				<ReservesContent />
			</section>
		</main>
	);
}
