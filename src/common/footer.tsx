import React from "react";
import Logo from "@/assets/images/logo.png";

const Footer = () => {
	return (
		<footer className="footer bg-neutral text-neutral-content p-10">
			<aside>
				<img src={Logo.src} alt="logo" className="h-[50px]" />
				<p>
					ACME Industries Ltd.
					<br />
					Providing reliable tech since 1992
				</p>
			</aside>
			<nav>
				<h6 className="footer-title">Services</h6>
				<a className="link link-hover" href="/">
					Branding
				</a>
				<a className="link link-hover" href="/">
					Design
				</a>
				<a className="link link-hover" href="/">
					Marketing
				</a>
				<a className="link link-hover" href="/">
					Advertisement
				</a>
			</nav>
			<nav>
				<h6 className="footer-title">Company</h6>
				<a className="link link-hover" href="/">
					About us
				</a>
				<a className="link link-hover" href="/">
					Contact
				</a>
				<a className="link link-hover" href="/">
					Jobs
				</a>
				<a className="link link-hover" href="/">
					Press kit
				</a>
			</nav>
			<nav>
				<h6 className="footer-title">Legal</h6>
				<a className="link link-hover" href="/">
					Terms of use
				</a>
				<a className="link link-hover" href="/">
					Privacy policy
				</a>
				<a className="link link-hover" href="/">
					Cookie policy
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
