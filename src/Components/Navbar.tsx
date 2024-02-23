import React from 'react';
import Image from 'next/image';
import logo from '../../public/logos/logo.png';
// import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
// import { HiOutlineMailOpen } from 'react-icons/hi';
import { GoArrowUpRight } from 'react-icons/go';

const Navbar = (): JSX.Element => {
	return (
		<>
			<nav className="fixed z-40 h-auto w-full">
				{/* <section className="flex h-7 w-full items-center gap-10 bg-[#4C4C6D] text-white">
					<div className="mx-auto flex w-full  max-w-[90rem] items-center justify-end gap-10">
						<div className="flex items-center gap-2 text-sm">
							<HiMiniDevicePhoneMobile />
							8017194170
						</div>
						<div className="flex items-center gap-2 text-sm">
							<HiOutlineMailOpen />
							shoolin@gmail.com
						</div>
					</div>
				</section> */}
				<section className="flex h-auto w-full justify-center bg-white">
					<section className=" mx-32 flex w-full max-w-7xl items-center justify-between bg-white py-2 ">
						{/* Logo */}
						<section>
							<Image
								src={logo}
								width={0}
								height={0}
								alt=""
								className="h-auto w-[90px]"
							/>
						</section>

						<section className="flex w-fit items-center gap-12 ">
							<div>
								<ul className="flex gap-10">
									<li>Home</li>
									<li>About</li>
									<li>Projects</li>
									<li>Media</li>
									<li>Contacts</li>
								</ul>
							</div>
							{/* Register Button  */}
							<div>
								<button className=" flex items-center  justify-center rounded border border-black bg-primary px-4 py-2 font-semibold text-black">
									Book Online <GoArrowUpRight className=" text-2xl" />
								</button>
							</div>
						</section>
					</section>
				</section>
			</nav>
		</>
	);
};

export default Navbar;
