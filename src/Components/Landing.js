import React from 'react'
import '../Style/Landing.css'

function Landing(props) {
    return (
        <div className="landing-container">
            <div className='landing-body'>
                <div className='landing-body-text'>
                    <h2>Moot Court Kazakhstan for High School</h2>
                    <h6>-игровой судебный процесс-</h6>
                </div>
                <button onClick={props.scroll}>Подробнее</button>
            </div>
        </div>
    )
}

export default Landing