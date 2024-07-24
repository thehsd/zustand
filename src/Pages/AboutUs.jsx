// import React, { useRef } from 'react'

// const AboutUs = () => {
//     // const [userName, setUserName] = useState('')
//     const count = useRef(0)
//     const btnRef = useRef(null)
//     // const inputRef = useRef(null)
//     // console.log(" inputRef : ", inputRef)

//     // const showUserName = () => {
//     //     setUserName(inputRef.current.value)
//     // }



//     const formRef = useRef(null)
//     const handleForm = () => {
//         const data = new FormData(formRef.current)
//         for (let property of data.entries()) {
//             console.log(property);
//         }
//     }
//     const changeColor = () => {
//         btnRef.current.style.background = 'red'
//     }

//     return (
//         <div>
//             <button
//                 onClick={changeColor}
//                 className='p-3 bg-gray-500 text-white rounded-lg border-none m-2'>
//                 change btn color
//             </button>
//             <button ref={btnRef} className='p-3 bg-gray-500 text-white rounded-lg border-none m-2'
//                 onClick={() => count.current++}>plus plus</button>
//             <button className='p-3 bg-gray-500 text-white rounded-lg border-none m-2' onClick={() => alert(count.current)}>show count</button>

//             <br />
//             {count.current}
//             <br />
//             {/* <button className='p-3 bg-gray-500 text-white rounded-lg border-none m-2' onClick={showUserName}>show userName</button> */}
//             <form ref={formRef}>
//                 <input type="text" name={'username'} placeholder='write user name ' />
//                 <input type="password" name={'password'} placeholder='write password' />

//             </form>
//             <button className='p-3 bg-gray-500 text-white rounded-lg border-none m-2' onClick={handleForm}>submit form</button>
//         </div>
//     )
// }

// export default AboutUs

import React, { useState } from 'react'
import Child from '../Child'
import { UserNameContext } from './context/usernameContext'
import { Child2 } from '../Child2'



const AboutUs = () => {
    const [userName, setUserName] = useState('alireza')

    return (
        <div className='mt-9 ml-4 p-6 bg-gray-200'>
            <UserNameContext.Provider value={{
                userNameX: userName,
                setUserNameX: setUserName
            }}>

                <Child placeholder={'user name'} />
                <br />
                <Child2 />
                <br />

            </UserNameContext.Provider>

        </div>
    )
}

export default AboutUs