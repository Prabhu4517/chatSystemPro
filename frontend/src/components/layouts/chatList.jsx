import React from 'react';

import ChatDetail from './chatDetail';

import "style/chat.css"

export default function ChatList({ list }) {
  return (
    <div className="chat-list">
        {
          list.map(item => <ChatDetail detail={item} />)
        }
        

    </div>
  )
}
