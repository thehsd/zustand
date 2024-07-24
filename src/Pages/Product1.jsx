import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product1 = () => {

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)

  const { postId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const response = await data.json()
      setPost(response)
      setLoading(false)
    }
    fetchData()


  }, [postId])


  return (
    <>
      {loading ?
        'loading...'
        :
        <>
          <h1 className='font-extrabold'>{post.title}</h1>
          <p>
            {post.body}
          </p>
        </>
      }
    </>
  )
}

export default Product1