import React from 'react'
import { Button, Menu, TaskList } from '../components'

function Doing() {
    return (
        <div className="container">
            <Menu
                info={{
                    type: 'doing',
                    text: 'Doing',
                    prevClass: '',
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
                ]}
            />
            <div className="wrapper">
                <Button type={'doing'} />
            </div>
        </div>
    )
}

export default Doing
