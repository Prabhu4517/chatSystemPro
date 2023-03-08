import React from 'react'

export default function Search({ placeholder }) {
  return (
    <div className="search-box">
        <input type="text" placeholder={placeholder} />
    </div>
  )
}
