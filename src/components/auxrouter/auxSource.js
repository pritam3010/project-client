import React from "react";
import { Link } from "react-router-dom";

const AuxSource = () => {
    return (
        <div>
            <div>
                <Link
                    to={{
                        pathname: "app/task/djdjfjjj",
                        state: { isModal: true }
                    }}
                >
                    Modal Hai bhia
                </Link>
            </div>
        </div>
    );
};
