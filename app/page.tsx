import NavLink from '@/components/ui/NavLink'
import React from 'react'

function Home() {
  return (
    <>
      <h1 className="text-base font">
        سلام
      </h1>
      <div className="flex gap-4">
      <NavLink href="/" activeClassName='text-indigo-500'>
        home
      </NavLink>
      </div>
    </>
  )
}

export default Home
