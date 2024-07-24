import React, { useContext } from 'react'
import { UserNameContext } from './Pages/context/usernameContext'

export const Child2 = () => {
    const { userNameX } = useContext(UserNameContext)
    return (
        <div className='bg-green-200 p-9'>
            username is : {userNameX}
        </div>
    )
}
