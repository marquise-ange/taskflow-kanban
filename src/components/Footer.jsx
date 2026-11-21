
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t border-[#DFE1E6] bg-white px-6 py-5">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

                {/* Logo and Tagline */}
                <div className="text-center sm:text-left">
                    <h2 className="text-lg font-bold text-[#172B4D]">
                        Task<span className="text-[#0C66E4]">Flow</span>
                    </h2>
                    <p className="mt-1 text-xs text-[#626F86]">
                        Make every task count.
                    </p>
                </div>


                {/* Copyright */}
                <p className="text-center text-xs text-[#8590A2]">
                    © {new Date().getFullYear()} TaskFlow. All rights reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;
