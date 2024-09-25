import React from 'react';
import Toggle from "../Toggle/Toggle"

export default function Menu({ children }) {
    return (
        <Toggle>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}
