import React from 'react'

function Cards({item}) {
  
  return (
    <>
    <div className='mt-5 my-3 p-3  '>
    <div className="card w-92 shadow-xl hover:scale-110 duration-200 border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body  dark:bg-slate-700">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" p-3 bg-pink-600 badge badge-outline hover:bg-pink-900 hover:text-white  ">Buy Now</div>
    </div>
  </div>
</div> 
</div> 
    </>
  )
}

export default Cards
