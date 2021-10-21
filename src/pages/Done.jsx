import React from 'react'
import { Button, Menu, TaskList } from '../components'

function Done() {
    return (
        <div className="container">
            <Menu
                info={{
                    type: 'done',
                    text: 'Done',
                    prevClass: '',
                    nextClass: 'disabled',
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
                ]}
            />
            <div className="wrapper">
                <Button type={'done'} />
            </div>
        </div>
    )
}

export default Done
