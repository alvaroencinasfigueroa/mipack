import React from 'react'
import { Navigate } from 'react-router-dom'
import ProfileUser from './ProfileUser'

const ProtectedRoute = ({children}) => {
  return (
    <ProfileUser></ProfileUser>
  )
}

export default ProtectedRoute