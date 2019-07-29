//External Libraries
import * as React from "react";
import "./NumberEntry.scss";


const imgLogo = require("../assets/img/logo.png");

function NumberEntry() {


    return (
        <div className="numberEntry">

            <div className="splash">


                <img src={imgLogo} alt="logo"  className="logo"/>

                <div className="beyondLoader">
                    <div className="title">
                        <p>Please <br /> sign-in first <br /> ...</p>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>

            <div className="form">

                <h1>Enter your phone number</h1>

                <input type="tel" placeholder="Phone number here..." />
            </div>

        </div>
    );
}

export default NumberEntry;
