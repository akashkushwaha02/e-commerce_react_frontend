import React from 'react'

 const ImageHelper = ({product}) => {
     console.log(product.image)
     const imageurl = product ? product.image :
     'https://images.unsplash.com/photo-1586370740632-f910eb4ad077?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=956&q=80'
    return (
        <div className="rounded border border-success p-2">
            <img src={imageurl} style={{ maxHeight:"100%",maxWidth:"100%" }} className="mb-3 rounded" alt=""/>
        </div>
    )
}

export default ImageHelper;