import React from 'react';
import { Route, Routes } from "react-router-dom";

import { dashboardComponents } from "constants/components";

function Init() {
    return (
        <>
            <Routes>
                {
                    dashboardComponents.map((obj) => (<Route key={obj.path} path={obj.path} element={obj.element} />))
                }
            </Routes>
        </>
    );
};

export default Init;
