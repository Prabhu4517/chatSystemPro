import React from 'react';

import Message from './message';

// import chatBoard from 'images/chatboard.jpg';

export default function ChatboardHistoryList({ list }) {
  return (
    <div className="chatboard-history" 
    // style={{ backgroundImage: `url(${chatBoard})` }}
    >
      {
        list.map(item => <Message detail={item} />)
      }
    
    </div>
  )
}
