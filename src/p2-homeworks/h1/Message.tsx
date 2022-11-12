import React from 'react'
import s from './Message.module.css'
import {messageDataType} from './HW1'

export type messageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageType) {
    return (
        <>
            <div className={s.imageAndText}>
                <img
                    src={props.avatar}
                />
                <div className={s.text}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <pre className={s.messageText}>
                        {props.message}
                    </pre>
                </div>
            </div>
            <div className={s.time}>
                {props.time}
            </div>
        </>
    )
}

export default Message
