import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return <div className="app">
        <ul>
            <li>
                <Link to="/run-time-error" >Demo Run Time Error</Link>
            </li>
            <li>
                <Link to="/dom-bugs-with-keys" >DOM Bugs with React Keys</Link>
            </li>
            <li>
                <Link to="/bugs-with-duplicate-keys" >Bugs with Duplicate React Keys</Link>
            </li>
            <li>
                <Link to="/input-field-bugs-with-keys" >Input Field Bugs with React Keys</Link>
            </li>
            <li>
                <Link to="/performance-bugs-with-keys" >Performance Bugs with React index Keys</Link>
            </li>
            <li>
                <Link to="/list-order-bugs-with-keys" >Performance Bugs with Unique and changing React Keys</Link>
            </li>
        </ul>
    </div>;
};

export default App;
