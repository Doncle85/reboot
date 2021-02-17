import React, { Component } from 'react';

const Bouton = (props) => {
    const btnCss = `btn ${props.typeBtn} ${props.css}`;
    return <button className={btnCss} onClick={props.onClick}>{props.children}</button>
}

export default Bouton;