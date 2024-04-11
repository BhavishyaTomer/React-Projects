import React, { Children } from "react";
import KeepContext from "./KeepContext";
import { useContext } from "react";
import { useState } from "react";

const KeepContextProvider = ({ children }) => {
    const [task, setTask] = useState([]);
    return (
        <KeepContext.Provider value={{ task, setTask }}>
            {children}
        </KeepContext.Provider>
    );
};

export default KeepContextProvider;

