import React from "react";

const Loggedout = () => {
    return (
        <main>
            <header
                style={{
                    margin: "130px 0 40px ",
                    padding: "0 40px",
                    textAlign: "center"
                }}
            >
                <h1
                    style={{
                        fontSize: "34px",
                        lineHeight: "120%",
                        color: "#3D474D",
                        fontWeight: 900
                    }}
                >
                    You've been logged out
                </h1>
                <h2
                    style={{
                        fontSize: "21px",
                        fontWeight: 300,
                        color: "#8A9499"
                    }}
                >
                    Got to home page or login to continue.
                </h2>
            </header>
        </main>
    );
};

export default Loggedout;
