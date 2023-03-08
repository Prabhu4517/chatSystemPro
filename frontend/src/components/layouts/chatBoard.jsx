import React, { useState } from 'react';
import ChatboardHistoryList from './chatboardHistoryList';

export default function ChatBoard() {

    const [isHistory] = useState([
        {
            createdAt: '01:00 am',
            description: "dkjhfsdkh vgruhg rguif gufdgi nfig bdfjk bnvhgniuergb bignuv uiverguierhgi abnvifviernvneruivhffun viriyvnifdni jvnfdihgvberniugfnvu",
            isPostedByMe: true,
        },
        {
            createdAt: '01:00 am',
            description: "d gfig hdfguj hnuo",
            isPostedByMe: false,
        },
        {
            createdAt: '01:00 am',
            description: "jgh reuigfnuowefngjo",
            isPostedByMe: true,
        },
        {
            createdAt: '01:00 am',
            description: "rdhg iyrfgirenuigneriugneou gnoru nerugn euogner",
            isPostedByMe: false,
        },
        {
            createdAt: '01:00 am',
            description: "nviu fngiernd rwnguiengu ienfu neroup gr",
            isPostedByMe: false,
        },
        {
            createdAt: '01:00 am',
            description: "jkvn ifng iurengui ernguierigu dnbjv",
            isPostedByMe: false,
        },
        {
            createdAt: '01:00 am',
            description: "dkern iugfnvu",
            isPostedByMe: true,
        },
        {
            createdAt: '01:00 am',
            description: "dkernio ogfognofngo ernfgorael fkgneorlgjr ugfnvu",
            isPostedByMe: false,
        },
        {
            createdAt: '01:00 am',
            description: "dkernisufo gniaf ngunfogu snfuogn soug naerouugfnvu",
            isPostedByMe: true,
        },
        {
            createdAt: '01:00 am',
            description: "dkerniuofgn ouedfn reugn euodfgn uodfgpodfojfdn guogfnvu",
            isPostedByMe: false,
        },
        {
            createdAt: '01:00 am',
            description: "dkerniuroi gnueidfn guoefdnugoeny uerfn jlbdnvlvngfnvu",
            isPostedByMe: true,
        },
        {
            createdAt: '01:00 am',
            description: "dkesou gnf gneruog poerrniugfnvu",
            isPostedByMe: true,
        },
        {
            createdAt: '01:00 am',
            description: "dkern fngjdfnl jndfjgn eofgn og oefd gjlfdlgnjdfnjnjfngou ndfuo giugfnvu",
            isPostedByMe: false,
        },
        {
            createdAt: '01:00 am',
            description: "dkerniugfnvu",
            isPostedByMe: false,
        }
    ])
  return (
    <div className="chatboard-container">
        <div className="chatboard-history-container">
            <ChatboardHistoryList list={isHistory} />
        </div>
        <div className="chatboard-editor">
            <input type="text" placeholder="Type a message" className="chatboard-input" />
            <button className="chatboard-sumbit">></button>
        </div>
    </div>
  )
}
