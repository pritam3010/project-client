import React from "react";
import { Link } from "react-router-dom";

import "./style/Navbar.css";
import logo from "../../assests/svg/homepage/logo.svg";

const Header = () => {
    return (
        <nav className=" nav scrolled show-signup">
            <div grid="">
                <Link
                    className="h-iblock mr-auto"
                    to="/"
                    title="Go to MeisterTask Task Management Software homepage and manage agile projects with your team"
                >
                    <img
                        className="w-110px h-46px"
                        alt="MeisterTask Logo - Task Management for Teams - MeisterTask"
                        src={logo}
                    />
                </Link>
                <Link id="signin" to="/login">
                    Log In
                </Link>
                <Link
                    className="signup button blue iconed-button ml-20 h-hidden-phone"
                    to="/register"
                    style={{ marginLeft: "20px" }}
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};
export default Header;
