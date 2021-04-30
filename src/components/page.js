import React, { useState } from 'react'
import './style.css'
const Page = () => {
  const [shape, setShape] = useState('')
  const [margin, setMargin] = useState('')
  const shapes = (x) => {
    setShape(x)
    setMargin('add-margin')
  }

  return (
    <>
      <span>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2f5d62'
            fill-opacity='5.89'
            d='M0,96L17.1,106.7C34.3,117,69,139,103,133.3C137.1,128,171,96,206,112C240,128,274,192,309,192C342.9,192,377,128,411,112C445.7,96,480,128,514,133.3C548.6,139,583,117,617,101.3C651.4,85,686,75,720,101.3C754.3,128,789,192,823,192C857.1,192,891,128,926,101.3C960,75,994,85,1029,106.7C1062.9,128,1097,160,1131,192C1165.7,224,1200,256,1234,245.3C1268.6,235,1303,181,1337,144C1371.4,107,1406,85,1423,74.7L1440,64L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z'
          ></path>
        </svg>
      </span>
      <div className='d-container'>
        <div className='d-info'>
          <h1>Welcome to shapes</h1>
          <p>please click on any button you like, then see the magic!</p>
        </div>
        <div className={`${shape} shape`}></div>
        <div className={`${margin} d-buttons`}>
          <button
            className='buttons-c'
            onClick={() => {
              shapes('circle')
            }}
          >
            Circle
          </button>
          <button
            className='buttons-s'
            onClick={() => {
              shapes('square')
            }}
          >
            Square
          </button>
          <button
            className='buttons-t'
            onClick={() => {
              shapes('triangle')
            }}
          >
            Triangle
          </button>
          <button
            className='buttons-r'
            onClick={() => {
              shapes('rectangle')
            }}
          >
            Rectangle
          </button>
        </div>
      </div>
    </>
  )
}

export default Page
