import React from 'react';

export default function ChatDetail({ detail }) {
  return (
    <div className="chat-detail">
        <img src={detail.image} />
        <div className="chat-content">
            <div className="chat-name">
                <p>{detail.name}</p>
                <span>{detail.createdAt}</span>
            </div>
            <p>{detail.recentMessage}</p> 
        </div>
    </div>
  )
}
