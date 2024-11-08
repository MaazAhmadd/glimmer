import React from "react";
import Logo from "@/assets/images/logo.png";
import DefaultAvatar from "@/assets/images/default-avatar.png";
const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl" href="/">
					<img src={Logo.src} alt="logo" className="h-10" />
				</a>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Cart</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="badge badge-sm indicator-item">8</span>
						</div>
					</div>
					<div
						tabIndex={0}
						className="card card-compact dropdown-content z-[1] mt-3 w-52 bg-base-100 shadow"
					>
						<div className="card-body">
							<span className="font-bold text-lg">8 Items</span>
							<span className="text-info">Subtotal: $999</span>
							<div className="card-actions">
								<button className="btn btn-primary btn-block">View cart</button>
							</div>
						</div>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src={DefaultAvatar.src}
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<li>
							<a className="justify-between" href="/">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a href="/">Settings</a>
						</li>
						<li>
							<a href="/">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
