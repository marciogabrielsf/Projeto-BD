import Image from "next/image";
import CityRoll from "@/assets/cityroll.png";

export default function Home() {
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
								type="text"
								placeholder="Digite seu nome"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="">Senha</label>
							<input
								className="bg-gray-800 text-white rounded-md p-2"
								type="text"
								placeholder="Digite seu nome"
							/>
						</div>
					</div>
					<button className="bg-orange-700 w-full transition hover:opacity-90 active:opacity-50 rounded-lg p-2">
						Entrar
					</button>
				</div>
			</section>
		</main>
	);
}
