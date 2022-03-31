import './ScrolltoTop.css'
import React, { useState } from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
const ScrolltoTop = () => {

    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 100) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 100) {
            setShowScroll(false)
        }
    };
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('scroll', checkScrollTop);

    return (
        <>
            <div className='container'>
                <div className='row' >
                    <IoMdArrowDropup
                        className="back-to-top"
                        onClick={scrollTop}
                        style={{ visibility: showScroll ? 'visible' : 'hidden' }}
                    />
                </div>
            </div>
        </>
    )
}
export default ScrolltoTop