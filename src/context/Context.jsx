import React, { createContext, useState, useEffect } from "react";
export const pinDetailsContext = createContext();

function pinAddStorage(props){
    const { pinAdd, setPinAdd } = useContext(pinDetailsContext);
}