import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    let navigate = useNavigate()
    const { username } = useParams()
    return (<> This is a Profile Page for {username} <button onClick={() => navigate('/about')}>Go to About Page</button></>)
}


export default Profile