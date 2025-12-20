import {
	BookOpen,
	GraduationCap,
	Calculator,
	Globe,
	Package,
} from "lucide-react";
import React from "react";

export function Publications() {
	const bookImages = [
		{
			url: "./Book-1.jpg",
			title: "JEE MAINS PHYSICS",
		},
		{
			url: "./Book-2.jpg",
			title: "JEE MAINS MATHEMATICS",
		},
		{
			url: "./Book-3.jpg",
			title: "JEE MAINS CHEMISTRY",
		},
		{
			url: "./Book-9.webp",
			title: "JEE ADVANCED PHYSICS",
		},
		{
			url: "./Book-10.webp",
			title: "JEE ADVANCED MATHEMATICS",
		},
		{
			url: "./Book-11.webp",
			title: "JEE ADVANCED CHEMISTRY",
		},
		{
			url: "./Book-4.jpg",
			title: "NEET BOTANY",
		},
		{
			url: "./Book-5.jpg",
			title: "NEET ZOOLOGY",
		},
		{
			url: "./Book-6.jpg",
			title: "EAPCET PHYSICS",
		},
		{
			url: "./Book-7.jpg",
			title: "EAPCET MATHEMATICS",
		},
		{
			url: "./Book-8.jpg",
			title: "EAPCET CHEMISTRY",
		},
	];

	return (
		<section
			style={{ paddingTop: "100px" }}
			className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
						Our Publications
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Discover our comprehensive range of educational
						materials designed to support learners at every stage of
						their academic journey.
					</p>

					<div className="mt-8 flex justify-center">
						<div
							className="inline-flex items-center gap-3 bg-white border border-amber-200 shadow-sm px-12 py-3 rounded-full"
							style={{
								paddingLeft: "20px",
								paddingRight: "20px",
							}}>
							<div className="bg-amber-100 p-2 rounded-full">
								<Package className="text-amber-600" size={20} />
							</div>
							<p className="text-gray-700 font-medium text-sm md:text-base">
								We accept orders of any size — from single
								copies to bulk institutional orders. Contact :
								+91 9550616777
							</p>
						</div>
					</div>
				</div>

				{/* Split Layout */}
				<div className="mt-16">
					<div className="flex flex-col lg:flex-row gap-8">
						{/* Right Side - Book Titles (Now Left) */}
						<div className="lg:w-1/2">
							<div className="bg-white rounded-xl shadow-lg p-8">
								<h3 className="text-2xl text-gray-900 mb-8 text-center">
									Our Books
								</h3>
								<div className="grid grid-cols-3 gap-3">
									{bookImages.map((book, index) => (
										<div
											key={index}
											className="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow relative group">
											<img
												src={book.url}
												loading="lazy"
												decoding="async"
												alt={book.title}
												className="w-full h-full object-cover"
											/>
											{/* Hover Overlay with Title */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
												<p className="text-white p-3 text-sm">
													{book.title}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Left Side - Featured Series (Now Right) */}
						<div className="lg:w-1/2">
							<div className="bg-white rounded-xl shadow-lg p-8">
								<h3 className="text-2xl text-gray-900 mb-8 text-center">
									Featured Series
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									{/* JEE */}
									<div className="border-2 border-amber-200 rounded-lg p-6 hover:border-amber-500 transition-colors">
										<div className="w-full h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
											<BookOpen
												className="text-amber-600"
												size={48}
											/>
										</div>
										<h4 className="text-gray-900 mb-2">
											JEE Main & Advanced
										</h4>
										<p className="text-gray-600 text-sm">
											Concept-focused books with advanced
											problem solving for top ranks
										</p>
									</div>

									{/* NEET */}
									<div className="border-2 border-orange-200 rounded-lg p-6 hover:border-orange-500 transition-colors">
										<div className="w-full h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg mb-4 flex items-center justify-center">
											<BookOpen
												className="text-orange-600"
												size={48}
											/>
										</div>
										<h4 className="text-gray-900 mb-2">
											NEET
										</h4>
										<p className="text-gray-600 text-sm">
											Biology, Physics & Chemistry guides
											aligned with latest NEET syllabus
										</p>
									</div>

									{/* EAPCET */}
									<div className="border-2 border-amber-200 rounded-lg p-6 hover:border-amber-500 transition-colors">
										<div className="w-full h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
											<BookOpen
												className="text-amber-600"
												size={48}
											/>
										</div>
										<h4 className="text-gray-900 mb-2">
											EAPCET
										</h4>
										<p className="text-gray-600 text-sm">
											State-focused preparation with
											solved previous year questions
										</p>
									</div>

									{/* IPE */}
									<div className="border-2 border-orange-200 rounded-lg p-6 hover:border-orange-500 transition-colors">
										<div className="w-full h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg mb-4 flex items-center justify-center">
											<BookOpen
												className="text-orange-600"
												size={48}
											/>
										</div>
										<h4 className="text-gray-900 mb-2">
											AP State Board IPE
										</h4>
										<p className="text-gray-600 text-sm">
											Textbooks and study material
											strictly as per Intermediate
											syllabus
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Split Layout */}
			</div>
		</section>
	);
}
