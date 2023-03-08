import React, { useState } from 'react';

import Header from './header';
import Content from './content';
import Search from './search';
import ChatList from './chatList';

import avatar from 'images/avatar.avif';
import menu from 'images/menu.png';

export default function SideBar() {
    const [list, setList] = useState([
        {
            image: avatar,
            name: "prabhu",
            recentMessage: "Hello there!",
            createdAt: "yesterday"
        },
        {
            image: avatar,
            name: "Praveen",
            recentMessage: "Hello there!",
            createdAt: "yesterday"
        },
        {
            image: avatar,
            name: "Karthic",
            recentMessage: "Hello there!",
            createdAt: "yesterday"
        },
        {
            image: avatar,
            name: "vignesh",
            recentMessage: "Hello there!",
            createdAt: "yesterday"
        },
        {
            image: avatar,
            name: "Sat sarath",
            recentMessage: "Hello there!",
            createdAt: "yesterday"
        },
        {
            image: avatar,
            name: "nandha",
            recentMessage: "Hello there!",
            createdAt: "yesterday"
        },
        {
            image: avatar,
            name: "surya",
            recentMessage: "Hello there!",
            createdAt: "yesterday"
        },
    ])
    return (
        <div className="side-bar">
            <Header 
                profileImage={avatar}
                profileName=""
                actions={[
                    <img src={menu} />,
                ]}
            />
            <Content 
                innerHTML={<React.Fragment>
                    <Search placeholder="Search People..." />
                    <ChatList list={list} />
                </React.Fragment>}
            />
        </div>
    )
}
