import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/menu.scss'

import nextArrow from '../images/menu/next-arrow.svg'
import prevArrow from '../images/menu/prev-arrow.svg'

function Menu({ info }) {
    return (
        <div className={`menu ${info.type}-border`}>
            {info.type !== 'todo' && (
                <Link
                    to={`/${
                        (info.type === 'doing' && 'todo') ||
                        (info.type === 'done' && 'doing')
                    }`}
                >
                    <img className={info.prevClass} src={prevArrow} alt="prev arrow" />
                </Link>
            )}

            {info.type === 'todo' && (
                <img className={info.prevClass} src={prevArrow} alt="prev arrow" />
            )}

            <div className="menu__title">{info.text}</div>

            {info.type !== 'done' && (
                <Link
                    to={`/${
                        (info.type === 'todo' && 'doing') ||
                        (info.type === 'doing' && 'done')
                    }`}
                >
                    <img className={info.nextClass} src={nextArrow} alt="next arrow" />
                </Link>
            )}

            {info.type === 'done' && (
                <img className={info.nextClass} src={nextArrow} alt="next arrow" />
            )}
        </div>
    )
}

export default Menu
