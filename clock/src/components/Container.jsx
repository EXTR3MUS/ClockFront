import React from 'react'
import './Container.css'

const Container = (props) => {
  return (
    <div className='container'>
        <h1>{props.title}</h1>
        <div className="container-content">
          {props.children}
        </div>
    </div>
  )
}

export default Container