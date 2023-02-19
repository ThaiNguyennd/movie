import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main1 = () => {
    return (
        <Fragment>
            <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Main1;