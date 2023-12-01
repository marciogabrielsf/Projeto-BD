"use client";
import React from "react";
import CityRoll from "@/assets/cityroll.png";
import Image from "next/image";
import { HiUser } from "react-icons/hi2";
import { MdHome, MdBusiness, MdTableBar, MdStore, MdDoorFront } from "react-icons/md";
import { IoTicket } from "react-icons/io5";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();

	const selectedProps = "bg-slate-800 shadow-md";

	return (
		<menu className="w-72 gap-6 overflow-hidden bg-gray-950 h-full relative flex flex-col py-10 px-3 items-center top-0 left-0 rounded-r-2xl">
			<div className="text-white w-full flex flex-col items-center gap-3 ">
				<Image className="w-40" src={CityRoll} alt="City Roll Logo" />
				<h2 className="text-2xl font-bold">Admin Panel</h2>
			</div>
			<nav className="w-full text-white text-lg  [&>ul>li>a>div]:rounded-md">
				<ul className="flex flex-col gap-3 [&>li>a>div:hover]:bg-slate-800 [&>li>a>div]:transition [&>li>a>div]:p-1.5 [&>li>a>div]:flex [&>li>a>div]:items-center [&>li>a>div]:gap-2">
					<li>
						<Link href="/dashboard">
							<div className={`${pathname == "/dashboard" && selectedProps}`}>
								<MdHome />
								<span>Inicio</span>
							</div>
						</Link>
					</li>
					<li>
						<Link href="/dashboard/clients">
							<div className={`${pathname == "/dashboard/clients" && selectedProps}`}>
								<HiUser />
								<span>Clientes</span>
							</div>
						</Link>
					</li>
					<li>
						<Link href="/dashboard/companies">
							<div className={`${pathname == "/dashboard/companies" && selectedProps}`}>
								<MdBusiness />
								<span>Empresas</span>
							</div>
						</Link>
					</li>
					<li>
						<Link href="/dashboard/places">
							<div className={`${pathname == "/dashboard/places" && selectedProps}`}>
								<MdStore />
								<span>Estabelecimentos</span>
							</div>
						</Link>
					</li>
					<li>
						<Link href="/dashboard/tables">
							<div className={`${pathname == "/dashboard/tables" && selectedProps}`}>
								<MdTableBar />
								<span>Mesas</span>
							</div>
						</Link>
					</li>
					<li>
						<a href="/dashboard/reserves">
							<div className={`${pathname == "/dashboard/reserves" && selectedProps}`}>
								<IoTicket />
								<span>Reservas</span>
							</div>
						</a>
					</li>
					<li>
						<Link href="/">
							<div>
								<MdDoorFront />
								<span>Sair</span>
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</menu>
	);
}
