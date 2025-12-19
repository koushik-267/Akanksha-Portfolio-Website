import {
	BookOpen,
	Award,
	Users,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const bookCovers = [
	"./Book-1.jpg",
	"./Book-2.jpg",
	"./Book-3.jpg",
	"./Book-9.webp",
	"./Book-10.webp",
	"./Book-11.webp",
	"./Book-4.jpg",
	"./Book-5.jpg",
	"./Book-6.jpg",
	"./Book-7.jpg",
	"./Book-8.jpg",
];

export function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const navigate = useNavigate();
	const [logoContainerStyle, setLogoContainerStyle] = useState({});
	const [buttonStyle, setButtonStyle] = useState({});
	const [wavesContainerStyle, setWavesContainerStyle] = useState({});

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setLogoContainerStyle({ marginLeft: "6.5rem" });
				setButtonStyle({
					marginLeft: "10rem",
					marginTop: "2rem",
				});
				setWavesContainerStyle({
					marginLeft: "9.2rem",
					display: "flex",
				});
			} else {
				setLogoContainerStyle({});
				setButtonStyle({ marginTop: "-0.5rem" });
				setWavesContainerStyle({ display: "none" });
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % bookCovers.length);
		}, 3500);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				setCurrentSlide(
					(prev) => (prev - 1 + bookCovers.length) % bookCovers.length
				);
			} else if (e.key === "ArrowRight") {
				setCurrentSlide((prev) => (prev + 1) % bookCovers.length);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % bookCovers.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + bookCovers.length) % bookCovers.length
		);
	};

	const handlePublicationsClick = () => {
		navigate("/publications");
	};

	const handleContactClick = () => {
		navigate("/contact");
	};

	return (
		<section
			id="home"
			style={{ paddingTop: "40px" }}
			className="relative w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-colors px-8 py-4">
			<style>{`
        @keyframes pulse-wave {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(2.5); opacity: 0.8; }
        }
        .animate-pulse-wave {
          animation: pulse-wave 1.5s ease-in-out infinite;
        }
      `}</style>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
				{/* Desktop: Left-Right Split, Mobile: Top-Bottom */}
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[calc(100vh-180px)]">
					{/* Left Side - Logo and Company Info */}
					<div className="flex-1 flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
						{/* LOGO */}
						<div
							className="flex flex-col items-center justify-center mb-4 lg:items-start"
							style={logoContainerStyle}>
							<div
								className="relative mb-2 mix-blend-multiply dark:mix-blend-normal mx-auto lg:mx-0"
								style={{
									width: "clamp(120px, 40vw, 280px)",
									aspectRatio: "1 / 1",
								}}>
								<img
									src="/logo-akanksha.webp"
									decoding="async"
									alt="Akanksha Publications Logo"
									className="w-full h-full object-contain"
								/>
							</div>
						</div>

						{/* TAGLINE */}
						<p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto lg:mx-0">
							Empowering minds through quality educational content
							and innovative learning solutions
						</p>

						{/* STATS */}
						<div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mb-8">
							<div className="flex flex-col items-center">
								<div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
									<BookOpen
										className="text-amber-600 dark:text-amber-400"
										size={28}
									/>
								</div>
								<span className="text-gray-700 dark:text-gray-200 text-sm md:text-base">
									500+ Publications
								</span>
							</div>

							<div className="flex flex-col items-center">
								<div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
									<Award
										className="text-orange-600 dark:text-amber-400"
										size={28}
									/>
								</div>
								<span className="text-gray-700 dark:text-gray-200 text-sm md:text-base">
									Trusted by Educators
								</span>
							</div>

							<div className="flex flex-col items-center">
								<div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
									<Users
										className="text-amber-600 dark:text-amber-400"
										size={28}
									/>
								</div>
								<span className="text-gray-700 dark:text-gray-200 text-sm md:text-base">
									1M+ Students
								</span>
							</div>
						</div>

						{/* Animated Pulsing Waves */}
						<div
							className="flex items-center justify-center lg:justify-start gap-2 mb-4 h-20"
							style={wavesContainerStyle}>
							<div
								className="w-12 h-2 animate-pulse-wave"
								style={{
									background:
										"linear-gradient(90deg, #f59e0b, #ea580c)",
									animationDelay: "0s",
								}}
							/>
							<div
								className="w-12 h-2 animate-pulse-wave"
								style={{
									background:
										"linear-gradient(90deg, #f59e0b, #ea580c)",
									animationDelay: "0.2s",
								}}
							/>
							<div
								className="w-12 h-2 animate-pulse-wave"
								style={{
									background:
										"linear-gradient(90deg, #f59e0b, #ea580c)",
									animationDelay: "0.4s",
								}}
							/>
						</div>

						{/* CTA Button */}
						<button
							onClick={handleContactClick}
							style={buttonStyle}
							className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all shadow-md font-medium">
							Contact Us
						</button>
					</div>

					{/* Vertical Line - Only on Desktop */}
					<div className="hidden lg:block w-px h-96 bg-gradient-to-b from-transparent via-amber-300 to-transparent"></div>

					{/* Right Side - Slideshow and Button */}
					<div className="flex-1 flex flex-col items-center justify-center w-full">
						{/* Slideshow */}
						<div className="relative w-full max-w-md mb-8">
							<div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
								{bookCovers.map((cover, index) => (
									<div
										key={index}
										className={`absolute inset-0 transition-opacity duration-700 ${
											index === currentSlide
												? "opacity-100"
												: "opacity-0"
										}`}>
										<img
											src={cover}
											loading="lazy"
											decoding="async"
											alt={`Book cover ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
							</div>

							{/* Navigation Arrows */}
							<button
								onClick={prevSlide}
								className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-2 rounded-full shadow-lg transition-all"
								aria-label="Previous book">
								<ChevronLeft
									className="text-amber-600 dark:text-amber-400"
									size={24}
								/>
							</button>
							<button
								onClick={nextSlide}
								className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-2 rounded-full shadow-lg transition-all"
								aria-label="Next book">
								<ChevronRight
									className="text-amber-600 dark:text-amber-400"
									size={24}
								/>
							</button>

							{/* Dots Indicator */}
							<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
								{bookCovers.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`w-2 h-2 rounded-full transition-all ${
											index === currentSlide
												? "bg-amber-600 dark:bg-amber-400 w-8"
												: "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
										}`}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>
						</div>

						{/* Button */}
						<button
							onClick={handlePublicationsClick}
							className="mt-12 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all shadow-md font-medium">
							Explore Our Publications
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
