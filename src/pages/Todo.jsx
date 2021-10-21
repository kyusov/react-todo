import React from 'react'
import { Button, Menu, TaskList } from '../components'

function Todo() {
    return (
        <div className="container">
            <Menu
                info={{
                    type: 'todo',
                    text: 'To Do',
                    prevClass: 'disabled',
                    nextClass: '',
                }}
            />

            <TaskList
                tasks={[
                    {
                        id: 1,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 2,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 3,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 4,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 5,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 6,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 7,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 8,
                        text: "Something I have to do but I don't have time to do.",
                    },
                    {
                        id: 9,
                        text: "Something I have to do but I don't have time to do.",
                    },
                ]}
            />
            <div className="wrapper">
                <Button type={'todo'} />
            </div>
        </div>
    )
}

export default Todo
