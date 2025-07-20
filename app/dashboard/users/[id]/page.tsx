import React from 'react'

const page = ({params}: {params: {id:string}}) => {
    const { id } = params;
  return (
    <div>User Details for User ID: {id}  </div>
  )
}

export default page