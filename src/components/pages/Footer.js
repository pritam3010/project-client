import React from "react";

import facebook from "../../assests/svg/homepage/facebook-white.svg";
import twitter from "../../assests/svg/homepage/twitter-white.svg";
import googlePlay from "../../assests/svg/homepage/google-play.svg";
import appStore from "../../assests/svg/homepage/app-store-en.svg";

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="footer-wrapper">
                <div className="subfooter">
                    <span className="fw-heavy">© 2019 EasyLabs</span>
                    <p>Terms of Service</p>
                    <p>Imprint</p>
                    <p>Privacy</p>
                </div>
                <div className="subfooter">
                    <a
                        className="mr-10 s-24"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={facebook} alt="Facebook Icon" />
                    </a>
                    <a
                        className="mh-10 s-24"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={twitter} alt="Twitter Icon" />
                    </a>
                    {/* <a
                        href="https://play.google.com"
                        className="mh-10"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    > */}
                    <img
                        className="w-120px h-40px"
                        src={googlePlay}
                        alt="Goolgle Play"
                    />
                    {/* </a> */}
                    {/* <a href="#" className="mh-10" target="_blank" rel="noopener noreferrer"> */}
                    <img
                        className="w-136px h-40px"
                        src={appStore}
                        alt="App Store"
                    />
                    {/* </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
