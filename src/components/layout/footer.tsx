import Link from "next/link";
import { Logo } from "@/components/icons";
import React from "react";

export function Footer() {
	return (
		<footer className=" text-center overflow-x-hidden ">
      <div className="h-9">
      </div>
			<ul className=" px-20 bg-[#FFEEE2]">
				<li className="py-14">
					<nav className="flex justify-center items-center *:px-8 ">
						<p>
							<Link href="/">About</Link>
						</p>
						<p className="border-x-2 border-[#F98F46]">
							<Link href="/" >FAQ</Link>
						</p>
						<p>
							<Link href="/">Contact</Link>
						</p>
					</nav>
          <div className="flex justify-center items-center py-8">
            <Logo className="h-11" />
          </div>
          <p>
            <span>© 2024 TheMealDB Proudly built in the UK</span>
          </p>
				</li>
        <li className="h-[1px] bg-[#F98F46] "></li>
				<li className=" pt-8 pb-16">
          <p>
            <span>Thank you TheMealDB</span>
          </p>
        </li>
			</ul>
		</footer>
	);
}
