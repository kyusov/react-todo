import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Menu, TaskList, Modal } from '../components'

function Todo() {
    const [tasks, setTasks] = useState([])

    const [info, setInfo] = useState({
        type: 'todo',
        title: 'To Do',
    })

    const [pageIndex, setPageIndex] = useState(0)

    const [modal, setModal] = useState(false)

    const setDataToLS = (type, task) => {
        const ls = JSON.parse(localStorage.getItem('tasks'))

        ls.forEach((e) => {
            if (e.type === type) {
                e.tasks = [...e.tasks, task]
            }
        })

        localStorage.setItem('tasks', JSON.stringify(ls))
    }

    const getDataFromLS = (type) => {
        const ls = JSON.parse(localStorage.getItem('tasks'))
        return ls.filter((e) => e.type === type)[0].tasks
    }

    const addTaskHandler = (task) => {
        setDataToLS(info.type, {
            id: tasks.length + 1,
            text: task,
        })

        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                text: task,
            },
        ])
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        const ls = localStorage.getItem('tasks')

        if (!ls) {
            localStorage.setItem(
                'tasks',
                JSON.stringify([
                    {
                        type: 'todo',
                        tasks: [
                            {
                                id: 1,
                                text: "Something I have to do but I don't have time to do.",
                            },
                            {
                                id: 2,
                                text: "Something I have to do but I don't have time to do.",
                            },
                        ],
                    },
                    {
                        type: 'doing',
                        tasks: [
                            {
                                id: 1,
                                text: 'Doing doing doing',
                            },
                            {
                                id: 2,
                                text: "Something I have to do but I don't have time to do.",
                            },
                        ],
                    },
                    {
                        type: 'done',
                        tasks: [
                            {
                                id: 1,
                                text: 'Done',
                            },
                            {
                                id: 2,
                                text: 'Done',
                            },
                        ],
                    },
                ])
            )
        } else {
            const tasks = JSON.parse(ls).filter((e) => e.type === 'todo')[0].tasks

            setTasks(tasks)
        }
    }, [])

    useEffect(() => {
        if (pageIndex === 0) {
            setInfo({
                type: 'todo',
                title: 'To Do',
            })

            setTasks(getDataFromLS('todo'))
        }

        if (pageIndex === 1) {
            setInfo({
                type: 'doing',
                title: 'Doing',
            })

            setTasks(getDataFromLS('doing'))
        }

        if (pageIndex === 2) {
            setInfo({
                type: 'done',
                title: 'Done',
            })

            setTasks(getDataFromLS('done'))
        }
    }, [pageIndex])

    return (
        <div className="container">
            <Menu type={info.type} title={info.title} changePage={setPageIndex} />

            <TaskList tasks={tasks} />

            <div className="wrapper">
                <Button type={info.type} toggleModal={toggleModal} />
            </div>

            {modal && (
                <Modal
                    type={info.type}
                    addTaskHandler={addTaskHandler}
                    toggleModal={toggleModal}
                />
            )}
        </div>
    )
}

export default Todo
