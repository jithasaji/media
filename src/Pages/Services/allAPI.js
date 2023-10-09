import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch history</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',fontSize:'20px',color:'white'}}>
        <i class="fa-solid fa-arrow-left" style={{color:'white'}}></i>Back to Home
        </Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kanban</td>
            <td>https://fontawesome.com/icons/arrow-left?f=classic&s=solid&pc=%23fcfcfc</td>
            <td>4/10/23</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory
