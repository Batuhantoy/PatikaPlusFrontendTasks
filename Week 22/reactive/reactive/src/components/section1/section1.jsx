import React from 'react';
import HeaderSite from './headerSite';
import Cards from './cards';
import Container from './container';

function Section1() {
    return (
        <div>
            <div className="background">
                <HeaderSite></HeaderSite>
                <Container></Container>
            </div>

            <Cards></Cards>
        </div>
    );
}

export default Section1;