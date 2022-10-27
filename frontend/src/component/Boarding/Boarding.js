import React from 'react';
import './boarding.css';

const Boarding = () => {
    return (
        <div>
             <div id="wrap">
        <div id="app">
            <header id='header'>
                <div class='wrap'>
                    <div class='gap'>
                        <div class='container clearfix'>
                            <h1>
                                <a href='#' >Laark</a>
                            </h1>
                            <nav>
                                <ul>
                                    <li><a href='#'>메뉴 1</a></li>
                                    <li><a href='#'>메뉴 2</a></li>
                                    <li><a href='#'>메뉴 3</a></li>
                                    <li><a href='#'>메뉴 4</a></li>
                                    <li><a href='#'>메뉴 5</a></li>
                                    <li><a href='#'>메뉴 6</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main id="main">
                <section id='section1' class='section'>
                    <div class='wrap'>
                        <div class='gap'>
                            <div class='container'>
                                <div class='title'>
                                    <h2>PEOPLE</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section2' class='section'>
                    <div class='wrap'>
                        <div class='gap'>
                            <div class='container'>
                                <div class='title'>
                                    <h2>NATURE</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section3' class='section'>
                    <div class='wrap'>
                        <div class='gap'>
                            <div class='container'>
                                <div class='title'>
                                    <h2>WILDLIFE</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section4' class='section'>
                    <div class='wrap'>
                        <div class='gap'>
                            <div class='container'>
                                <div class='title'>
                                    <h2>OBJECTS</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
        </div>
    );
};

export default Boarding;