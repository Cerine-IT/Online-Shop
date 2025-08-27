import React from "react";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div>
        {/* upper Navbar */}
        <div>
            <div>
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="Logo" className="w-10" />
                        Shopsy
                    </a>
                </div>

                {/* search bar */}
                <div>

                </div>
            </div>
        </div>

        {/* lower Navbar */}
        <div>
            <div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
