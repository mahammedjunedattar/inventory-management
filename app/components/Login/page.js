'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Login = () => {
    const [form,setform] =  useState('')
    const router = useRouter()
    const onchange  = (e)=>{
    console.log(e.target.value)
        setform({...form,[e.target.name] : e.target.value})

    }
    const Loginuser = async (e)=>{
        e.preventDefault();
try {
    const response = await fetch('/apis/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
        credentials: 'include' // Include credentials in the request
});
    const result = await response.json();
    localStorage.setItem('token',result.authtoken)

    if (response.ok && !result.errors ) {
        console.log('your have logged in successefully')

        router.push('/inventory')
    }
    else{
                console.log('some error has accured')

    }

    
} catch (error) {
    console.error('Error creating account:', error);
    
}

}
  return (
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" onSubmit={Loginuser}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={onchange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                      </div>
                      <div class="ml-3 text-sm">
                      <Link href={'/Termsandconditions'}>Terms and conditions</Link>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 bg-blue-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login Here</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      create account <Link href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup here</Link>
                  </p>

              </form>
          </div>
      </div>
  </div>
</section>
      
    </div>
  )
}

export default Login