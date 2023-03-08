import React from 'react'

export default function Header({ profileImage, profileName = '', actions = [] }) {
    return (
        <div className="header">
            <div className="side-bar-header-layout">
                <div className="profile-avatar">
                    <img src={profileImage} />
                    {profileName ? <p>{profileName}</p> : ''}
                </div>
                <div className="side-bar-menu">
                    {
                        actions.map(itm => itm)
                    }
                </div>
            </div>
        </div>
    )
}
