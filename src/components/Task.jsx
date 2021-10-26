import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'

import '../styles/task.scss'
import settingDoing from '../images/doing.svg'
import settingRemove from '../images/remove.svg'

function Task({ task }) {
    const [position, setPosition] = useState(0)

    const nextStage = (prevStage) => {
        console.log('go to next stage')
    }

    const removeTask = (task) => {
        console.log('remove task', task)
    }

    const { x } = useSpring({
        x: position * 180,
    })

    const bind = useDrag(({ swipe: [swipeX] }) => {
        // position will either be -1, 0 or 1
        setPosition((p) => {
            if (position === -1) {
                return Math.min(Math.max(-1, p + swipeX), 1)
            }
            return Math.min(Math.max(-1, p + swipeX), 0)
        })
    })

    return (
        <div className="wrap">
            <animated.div {...bind()} style={{ x }} className="task">
                <p>{task}</p>
            </animated.div>
            <div className="settings">
                <div className="settings__setting" onClick={() => nextStage('пока doing потом подумать как унифицировать')}>
                    <img
                        className="settings__img"
                        src={settingDoing}
                        alt="set to doing"
                    />
                    <div className="settings__text">Doing</div>
                </div>
                <div className="settings__setting" onClick={() => removeTask(task)}>
                    <img
                        className="settings__img"
                        src={settingRemove}
                        alt="remove task"
                    />
                    <div className="settings__text">Remove</div>
                </div>
            </div>
        </div>
    )
}

export default Task
