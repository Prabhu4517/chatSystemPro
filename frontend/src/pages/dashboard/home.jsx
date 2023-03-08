import React from 'react';

import SideBar from 'components/layouts/sideBar';
import BodyContent from 'components/layouts/bodyContent';

import "style/home.css";

export default function home() {
  return (
    <div className="main-container">
      <SideBar />
      <BodyContent />
    </div>
  )
}
