'use client';

import React from 'react';

export const Marquee = () => {
    return (
        <section className="marquee-section" aria-hidden="true">
            <div className="marquee-container">
                <div className="marquee-scroller scroller-left">
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee-scroller scroller-right">
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                    <span>HASOON GENERAL TRADING </span>
                </div>
            </div>
        </section>
    );
};
