import React from 'react'

import { TbCategory } from "react-icons/tb";


export default function AllProducts() {
  return (
    <section>
      <div className='pt-5 md:pt-10'>
        <div className='flex justify-between items-center'>
          <h1>Trending Products</h1>
          <div><TbCategory /></div>
        </div>
        <div className='border mt-2 border-border'></div>
      </div>
    </section>
  )
}
