"use client";
import Image from "next/image";
import CityRoll from "@/assets/cityroll.png";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			router.push("/dashboard");
		}, 500);
	};

	return (
		<main>
			<section className="bg-black text-white h-screen flex flex-col justify-center items-center">
				<div className="flex items-center flex-col gap-6">
					<Image className="w-60" src={CityRoll} alt="" />
					<h1 className="font-bold self-start text-2xl">Seja bem vindo(a)!</h1>
					<div className="flex flex-col gap-3 w-96">
						<div className="flex flex-col">
							<label htmlFor="">E-mail</label>
							<input
								className="bg-gray-800 text-white rounded-md p-2"
								type="email"
								placeholder="Digite seu e-mail"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="">Senha</label>
							<input
								className="bg-gray-800 text-white rounded-md p-2"
								type="password"
								placeholder="Digite sua senha"
							/>
						</div>
					</div>
					<button
						onClick={handleSubmit}
						className="bg-orange-700 font-bold w-full transition hover:opacity-90 active:opacity-50 rounded-lg p-2"
					>
						Entrar
					</button>
					<a className="text-orange-700 font-bold" href="">
						Novo Aqui? Crie sua conta.
					</a>
				</div>
			</section>
		</main>
	);
}
