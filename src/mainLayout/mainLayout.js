import React, { Children } from 'react';
//main layout
import Header from './Header/Header';
import Footer from './Footer/Footer';

const mainLayout = (props) => {
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
        
    );
    
}

export default mainLayout;