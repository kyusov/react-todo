import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'

import '../styles/task.scss'

function Task({ task }) {
    const [position, setPosition] = useState(0)

    const { x, css } = useSpring({
        x: position * 100,
        css: {
            position: 'absolute',
            zIndex: '5',
        },
    })

    const bind = useDrag(
        ({ swipe: [swipeX] }) => {
            // position will either be -1, 0 or 1
            setPosition((p) => {
                return Math.min(Math.max(-1, p + swipeX), 1)
            })
        }
    )

    return (
        <animated.div {...bind()} style={{ x, ...css }} className="task">
            {/* <div className="task"> */}
            <p>{task}</p>
            {/* </div> */}
        </animated.div>
    )
}

export default Task
