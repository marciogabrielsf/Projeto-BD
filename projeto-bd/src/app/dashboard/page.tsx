import React from "react";
import Sidebar from "../components/sidebar";
import HomePage from "./components/Home";

export default function SignIn() {
	return (
		<main>
			<section className="bg-slate-900 flex h-screen">
				<Sidebar />
				<HomePage />
			</section>
		</main>
	);
}
