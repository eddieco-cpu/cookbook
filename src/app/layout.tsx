import { ReactNode } from "react";
import { ThemeProvider } from "@/components/behaviors/theme-provider";
import { Header } from "@/components/layout/header";

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
