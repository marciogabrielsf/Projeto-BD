import React from "react";
import Sidebar from "../components/sidebar";
import HomePage from "./home/Home";

export default function SignIn() {
	return (
		<main>
			<section className="from-slate-800 to-slate-950 bg-gradient-to-tr flex h-screen">
				<Sidebar />
				<HomePage />
			</section>
		</main>
	);
}
