import { Logo } from "@/components/icons/logo";
import { LightModeToggler } from "@/components/behaviors/light-mode-toggler";

export function Header() {
	return (
		<header className="flex justify-between bg-gray-800 p-4 text-white">
			<Logo />
			<LightModeToggler />
		</header>
	);
}
