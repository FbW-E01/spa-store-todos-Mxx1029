import React from "react"

const defaultValue = null;

// createContext takes in the default value
// The real values will be provided later, by our context Provider
export const UserContext = React.createContext(defaultValue);

console.log("UserContext is", UserContext);