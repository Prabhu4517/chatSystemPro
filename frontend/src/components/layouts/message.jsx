import React from 'react'

export default function Message({ detail }) {
    return (
        <div className={`chatboard-cart ${ detail.isPostedByMe ? 'left' : 'right' }`}>
            <div className="chatboard-detail">
                <p>{detail.description}</p>
                <span>{detail.createdAt}</span>
            </div>
        </div>
    )
}
