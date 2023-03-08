import React from 'react';
import { Route, Routes } from "react-router-dom";

import { authComponents } from "constants/components";

function Init() {
    return (
        <>
            <Routes>
                {
                    authComponents.map((obj) => (<Route key={obj.path} path={obj.path} element={obj.element} />))
                }
            </Routes>
        </>
    );
};

export default Init;
