import React from "react";
import { Phone, User, Briefcase } from "lucide-react";

export function Founders() {
	const team = [
		{
			name: "C SRINIVASA RAO",
			role: "MANAGING PARTNER",
			degree: "M.Sc",
			phone: "+91 9494946777",
			image: "./CSR.png",
			experience: "25+ Years of Experience in Education Industry",
		},
		{
			name: "A BHANU SHUDHEER",
			role: "MANAGING PARTNER",
			degree: "M.Sc, B.Ed.",
			phone: "+91 9059379999",
			image: "./ABS.png",
			experience: "20+ Years of Experience in Education Industry",
		},
	];

	return (
		<section
			style={{ paddingTop: "90px" }}
			className="py-20 bg-white dark:bg-gray-950 transition-colors">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl text-gray-900 dark:text-gray-100 mb-4">
						Meet Our Team
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						The visionaries and leaders who have shaped Akanksha
						Publications into a trusted name in educational
						excellence.
					</p>
				</div>

				{/* Desktop Layout - Side by Side */}
				<div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{team.map((member, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-lg transition-shadow">
							{/* Image Placeholder */}
							<div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-amber-300 to-orange-400 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
								{member.image ? (
									<img
										src={member.image}
										alt={member.name}
										loading="lazy"
										decoding="async"
										width="192"
										height="192"
										className="w-full h-full object-cover"
									/>
								) : (
									<User
										className="text-white dark:text-gray-200"
										size={96}
									/>
								)}
							</div>
							<div className="text-center">
								<h3 className="text-2xl text-gray-900 dark:text-gray-100 mb-6">
									{member.name}{" "}
									<span
										className="text-gray-600 dark:text-gray-300"
										style={{
											fontSize: "14px",
											fontWeight: "400",
										}}>
										{member.degree}
									</span>
								</h3>
								<p
									className="text-amber-600 dark:text-amber-400 mb-4"
									style={{
										fontWeight: "700",
										letterSpacing: "0.2px",
										textTransform: "uppercase",
										fontSize: "1.1rem",
									}}>
									{member.role}
								</p>
								<div className="mb-6 flex items-center justify-center gap-2">
									<Briefcase
										size={18}
										className="text-amber-600 dark:text-amber-400"
									/>
									<span className="text-gray-600 dark:text-gray-300 font-medium">
										{member.experience}
									</span>
								</div>
								<div className="flex items-center justify-center gap-3">
									<div className="w-12 h-12 bg-amber-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
										<Phone
											className="text-amber-600 dark:text-amber-400"
											size={24}
										/>
									</div>
									<p className="text-gray-600 dark:text-gray-300">
										{member.phone}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Mobile Layout - Compact Cards */}
				<div className="md:hidden space-y-6">
					{team.map((member, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg">
							{/* Mobile Card with Horizontal Layout */}
							<div className="flex items-center p-4 gap-4">
								{/* Image - Smaller on Mobile */}
								<div className="w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-400 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
									{member.image ? (
										<img
											src={member.image}
											loading="lazy"
											decoding="async"
											width="192"
											height="192"
											alt={member.name}
											className="w-full h-full object-cover"
										/>
									) : (
										<User
											className="text-white dark:text-gray-200"
											size={48}
										/>
									)}
								</div>

								{/* Info - Compact */}
								<div className="flex-1 min-w-0">
									<h3 className="text-lg text-gray-900 dark:text-gray-100 mb-1 leading-tight">
										{member.name}
									</h3>
									<p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
										{member.degree}
									</p>
									<p className="text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wide">
										{member.role}
									</p>
								</div>
							</div>

							{/* Additional Info Below */}
							<div className="px-4 pb-4 space-y-3 border-t border-amber-100 dark:border-gray-700 pt-3">
								{/* Experience */}
								<div className="flex items-start gap-2">
									<Briefcase
										size={16}
										className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0"
									/>
									<span className="text-sm text-gray-600 dark:text-gray-300">
										{member.experience}
									</span>
								</div>

								{/* Phone */}
								<div className="flex items-center gap-2">
									<div className="w-8 h-8 bg-amber-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
										<Phone
											className="text-amber-600 dark:text-amber-400"
											size={16}
										/>
									</div>
									<a
										href={`tel:${member.phone}`}
										className="text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
										{member.phone}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
