import React from 'react'

const Card = ({ item }) => {
    
  return (
<div className='m-3 p-3 '>
<div className="card bg-base-100 w-92 shadow-xl p-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-warning">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-5 cursor-pointer rounded-full boder-[2px]w-px">$&nbsp;{item.price}</div>
      <div className=" cursor-pointer rounded-full boder-[2px] bg-warning duration-300 p-3 hover:bg-base-content hover:text-base-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
  )
}

export default Card