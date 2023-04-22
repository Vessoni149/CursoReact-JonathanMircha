import React from 'react'
import {Link} from 'react-router-dom';
export function Navigation(props) {
  

  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
          <li>
          <Link to="/admin">Admin</Link>
        </li>
        </li>
      </ul>
    </nav>
  )
}
