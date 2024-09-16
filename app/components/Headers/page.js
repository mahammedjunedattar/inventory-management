'use client'
import React from 'react'
import Link from 'next/link'

const Headers = ({logout}) => {
  return (
    <div>
      <header className="bg-gray-900 text-gray-100 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-indigo-500 p-2 bg-white rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-semibold">Inventory Management</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ul className="flex space-x-6">
              <li>
                <Link href="/contactus" className="hover:text-indigo-400 transition duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-indigo-400 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/Termsandconditions" className="hover:text-indigo-400 transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>
          <button className=" mx-4 flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full transition duration-300" onClick={logout}>
            Logout
          </button>
        </div>
      </header>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Inventory Management</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

    </nav>
    <button class="flex   text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg my-1" onClick={logout}>Logout</button>


  </div>

  
</header>


      
    </div>
  )
}

export default Headers
