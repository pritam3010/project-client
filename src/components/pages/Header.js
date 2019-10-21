import React from "react";
import { Link } from "react-router-dom";

import "./style/Navbar.css";
import logo from "../../assests/svg/homepage/logo.svg";

const Header = () => {
    return (
        <nav kr="" class="scrolled show-signup">
            <div grid="" kr="">
                <Link
                    class="h-iblock mr-auto"
                    to="/"
                    title="Go to MeisterTask Task Management Software homepage and manage agile projects with your team"
                    kr=""
                >
                    <img
                        class="w-110px h-46px"
                        alt="MeisterTask Logo - Task Management for Teams - MeisterTask"
                        src={logo}
                        kr=""
                    />
                </Link>
                <Link id="signin" to="/login" kr="">
                    Log In
                </Link>
                <Link
                    class="signup button blue iconed-button ml-20 h-hidden-phone"
                    to="/register"
                    kr=""
                    style={{ marginLeft: "20px" }}
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};
export default Header;
