import React from 'react';
import '../Style/Footer.css';

import nis_logo from '../Images/NIS_logo.png'
import mootcourt_logo from '../Images/mootcourt_logo.jpeg'
import girlupnis_logo from '../Images/girlupnis_logo.jpeg'

function Footer() {
    return (
        <div className="footer">
            <h6>Moot Court Kazakhstan for High School</h6>
            <div className='footer-contacts'>
                <p>Эл. адрес: mootcourt.kz@gmail.com</p>
                <p>Тел.: +7-775-985-26-27</p>
                <p>Instagram: girl.up.nis</p>
            </div>
        </div >
    );
}

export default Footer;
