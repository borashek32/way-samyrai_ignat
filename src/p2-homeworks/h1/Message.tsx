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
        <div className={s.bg}>
            <div className={s.imageAndText}>
                <img
                    src={props.avatar}
                />
                <div className={s.text}>
                    <div>
                        <div className={s.name}>
                            {props.name}
                        </div>
                        <div className={s.messageText}>
                            {props.message}
                        </div>
                    </div>
                    <div className={s.time}>
                        <p>{props.time}</p>
                    </div>
                    <div className={s.triangle}>
                        <div className={s.corner}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
