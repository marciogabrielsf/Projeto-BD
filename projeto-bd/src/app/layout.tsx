import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "react-query";
import { QueryProvider, queryClient } from "./contexts/reactQuery";

const poppins = Poppins({ weight: ["200", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={poppins.className} lang="en">
			<body>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
