import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const {id} = useParams()
  
  return (
    <div>BlogDetail page {id}</div>
  )
}

export default BlogDetail