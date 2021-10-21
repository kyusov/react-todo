import React, { useState } from 'react'

import '../styles/modal.scss'

function Modal({ type, toggleModal, addTaskHandler }) {
    const [taskText, setTaskText] = useState('')

    const modalHandler = (e) => {
        if (e.target.classList.contains('overlay')) {
            toggleModal()
        }

        if (e.target.classList.contains('modal__button')) {
            addTaskHandler(taskText)
            toggleModal()
        }
    }

    const textareaHandler = (event) => {
        setTaskText(event.target.value)
    }

    return (
        <div className="overlay" onClick={(e) => modalHandler(e)}>
            <div className="modal">
                <div className="modal__title">Add task</div>
                <textarea onChange={textareaHandler} className={`modal__text modal__text-${type}`} name="task" placeholder="Task description"></textarea>
                <button className={`modal__button modal__button-${type}`}>Add</button>
            </div>
        </div>
    )
}

export default Modal
