import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Publications", to: "/publications" },
	{ label: "Our Team", to: "/team" },
	{ label: "Contact", to: "/contact" },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const closeMobileMenu = () => {
		setIsMobileOpen(false);
	};

	return (
		<header
			style={{
				height: "70px",
				backgroundColor: isScrolled ? "#ffffff" : "#E6F2FF",
				transition: "background-color 0.3s ease",
			}}
			className={`fixed inset-x-0 top-0 z-50 w-full flex items-center ${
				isScrolled
					? "border-b border-gray-200 shadow-sm"
					: "border-none shadow-none"
			}`}>
			<nav className="w-full px-8 md:px-24 lg:px-32 h-full">
				<div className="flex h-full items-center justify-between w-full">
					{/* LOGO */}
					<Link
						to="/"
						className="flex items-center gap-3 shrink-0"
						aria-label="Akanksha Publications home">
						<img
							src="/AKANKSHA FINAL LOGO copy.png"
							decoding="async"
							alt="Akanksha Publications logo"
							className="h-16 w-16 object-contain"
						/>
						<span className="font-bold text-xl hidden sm:block text-gray-900">
							Akanksha Publications
						</span>
					</Link>

					{/* DESKTOP NAV */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									`inline-flex items-center px-3 py-2 text-sm font-medium transition-all border-b-2 ${
										isActive
											? "text-orange-600 border-orange-600"
											: "text-gray-900 border-transparent hover:text-orange-600 hover:border-orange-400"
									}`
								}>
								{item.label}
							</NavLink>
						))}
					</div>

					{/* MOBILE BUTTON */}
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-md p-2 md:hidden transition-colors text-gray-900 hover:text-orange-600 hover:bg-black/5"
						onClick={() => setIsMobileOpen((open) => !open)}>
						{isMobileOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>

				{/* MOBILE MENU */}
				{isMobileOpen && (
					<div
						className="md:hidden pb-3 border-t border-gray-200 bg-white absolute left-0 right-0 px-4 shadow-lg"
						style={{ top: "90px" }}>
						<div className="flex flex-col gap-1 pt-2">
							{navItems.map((item) => (
								<NavLink
									key={item.to}
									to={item.to}
									onClick={closeMobileMenu}
									className={({ isActive }) =>
										`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
											isActive
												? "bg-orange-50 text-orange-700"
												: "text-gray-700 hover:bg-orange-50 hover:text-orange-700"
										}`
									}>
									{item.label}
								</NavLink>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
