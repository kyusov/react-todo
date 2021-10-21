import React from 'react'
import { useState } from 'react'

import '../styles/menu.scss'

import nextArrow from '../images/menu/next-arrow.svg'
import prevArrow from '../images/menu/prev-arrow.svg'

function Menu({ type, title, changePage }) {
    const [pageIndex, setPageIndex] = useState(0)

    const nextPage = () => {
        if (pageIndex < 2) {
            changePage(pageIndex + 1)
            setPageIndex(pageIndex + 1)
        }
    }

    const prevPage = () => {
        if (pageIndex > 0) {
            changePage(pageIndex - 1)
            setPageIndex(pageIndex - 1)
        }
    }

    return (
        <div className={`menu ${type}-border`}>
            <img
                className={pageIndex > 0 ? '' : 'disabled'}
                src={prevArrow}
                alt="prev arrow"
                onClick={prevPage}
            />
            <div className="menu__title">{title}</div>
            <img
                className={pageIndex < 2 ? '' : 'disabled'}
                src={nextArrow}
                alt="next arrow"
                onClick={nextPage}
            />
        </div>
    )
}

export default Menu
