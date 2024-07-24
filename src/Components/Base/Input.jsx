import { useContext } from "react"
import { UserNameContext } from "../../Pages/context/usernameContext"

const Input = ({ type = 'text', placeholder }) => {
    const { userNameX, setUserNameX } = useContext(UserNameContext)
    return (
        <>
            <input
                value={userNameX}
                onChange={(e) => setUserNameX(e.target.value)}
                className='bg-yellow-100 border border-solid border-black'
                type={type} placeholder={placeholder} name={'my-input'}

            />
            <br />


        </>
    )
}

export default Input