import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useGlobalStore from '../store/global'

const Navbar = () => {
  const {activePage, editing} = useGlobalStore();
  return (
    <div className="mx-5 px-5 rounded-2 my-3 py-2 border row justify-content-around">
      <Link to={'/student'} className={`col-5 btn ${activePage == 'student' ? 'btn-primary': 'btn-light'}`}>{editing ? 'Edit' : 'Add'} Student</Link>
      <Link className={`col-5 btn ${activePage == 'viewall' ? 'btn-primary': 'btn-light'}`} to={'/viewall'}>View all Students</Link>
    </div>
  )
}

export default Navbar