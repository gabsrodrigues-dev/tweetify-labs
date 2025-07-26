import React, { useEffect, useState } from "react";
import { Toastify } from "../Toastify/Toastify";
import "./style.css"
import WhiteButton from "../Buttons/WhiteButton";

export default function MainHeader({ headerType, contentTopMargin, buttonMarginY, buttonWidth, buttonText, buttonRedirect, h1Text, h2Text }) {
    const handleStartNowClick = (e) => {
        e.preventDefault();
        const element = document.getElementById('headerRedirect');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    }
    return (
        <section className="h-34 w-full relative">
            <img className="w-full select-none" alt="Header Background" src={`/images/header/${headerType}-header.svg`} />
            <div style={{marginTop: contentTopMargin ? `-${contentTopMargin}px` : "0px"}} className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h1>{h1Text}</h1>
                <h2 className="text-center max-w-[720px]">{h2Text}</h2>
                <WhiteButton marginY={buttonMarginY} width={buttonWidth} text={buttonText} onClick={handleStartNowClick} />
            </div>
        </section>
    );
}