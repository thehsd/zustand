import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='flex  gap-3'>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => {
                            return isActive ? 'text-blue-600' : ''
                        }}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/products'} className={({ isActive }) => {
                            return isActive ? 'text-blue-600' : ''
                        }}>
                            products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about-us'} className={({ isActive }) => {
                            return isActive ? 'text-blue-600' : ''
                        }}>
                            about us
                        </NavLink>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Header