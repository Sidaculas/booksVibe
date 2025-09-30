import React from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { Github } from "lucide-react";

const Navbar = () => {
	const location = useLocation();
	// console.log(location);
	const links = [
		{ name: "Home", path: "/" },
		{ name: "Listed Books", path: "/listed-books" },
		{ name: "Pages to Read", path: "/pages-to-read" },
	];
	return (
		<div className="navbar bg-base-100 shadow-sm mb-10">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{links.map((link, idx) => (
							<li key={idx}>
								<Link
									to={link.path}
									className={
										location.pathname === link.path ? "underline font-bold" : ""
									}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<a className="btn btn-ghost text-xl font-black">Book Vibe</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links.map((link, idx) => (
						<li key={idx}>
							<Link
								to={link.path}
								className={location.pathname === link.path ? "underline" : ""}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="navbar-end">
				<Link
					to="https://github.com/sidaculas"
					className="btn bg-white rounded-full border-2"
				>
					<Github fill="black" />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
