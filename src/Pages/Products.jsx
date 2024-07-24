import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const response = await data.json()
            setPosts(response)
        }
        fetchData()
    }, [])

    console.log(posts);
    return (
        <div className='grid grid-cols-6'>
            <aside>
                <nav>
                    <ul>
                        {
                            posts.map((post) => {
                                return <li key={post.id}>
                                    <NavLink to={`/products/${post.id}`} className={({ isActive }) => {
                                        return isActive ? 'text-green-600' : ''
                                    }}>
                                        {post.title}
                                    </NavLink>
                                </li>
                            })
                        }
                        {/* <li>
                            <NavLink to={'/products/product-1'}>
                                sun route 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products/product-2'}>
                                sun route 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products/product-3'}>
                                sun route 3
                            </NavLink>
                        </li> */}
                    </ul>
                </nav>
            </aside>
            <div className='col-end-7	col-start-2'>

                <Outlet />
            </div>
        </div>
    )
}

export default Products