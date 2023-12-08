import React from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';

export default function Layouts() {
    return (
        <div className="container mt-3 mb-3 layouts">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
