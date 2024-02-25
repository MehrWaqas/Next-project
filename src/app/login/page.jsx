"use client"

import React from 'react'
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Link from 'next/link'
// import styles from "../styles/login.module.css";

const login = () => {
  return (
    <div className="flex">
      <img  className="flex-initial w-1/3 h-screen object-cover" src="/assets/img/b.jpg"></img>
      <div className="flex flex-col justify-center  px-56">
        <h1 className="text-3xl mb-14 font-semibold text-left">Login Your Account</h1>

        <div>
            <label for="Username" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <Input
              type="text"
              placeholder="Enter your Username"
              className="mb-4 !border dark:bg-gray-700 w-96 px-4 py-2 rounded-md !border-gray-300 bg-white text-gray-900  ring-transparent placeholder:text-gray-500"
              labelProps={{
                className: "text-gray-700 mb-1",
                children: "Username",
              }}
              containerProps={{ className: "w-full" }}
            />
        </div>
        <div>
            <label for="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <Input
              type="password"
              icon={<i className="fas fa-heart" />}
              placeholder="Enter password"
              className="mb-4 !border dark:bg-gray-700 w-96 px-4 py-2 rounded-md !border-gray-300 bg-white text-gray-900  ring-transparent placeholder:text-gray-500"
              labelProps={{
                className: "text-gray-700 mb-1",
                children: "Username",
              }}
              containerProps={{ className: "w-full" }}
            />
        </div>
         <Link href="/dashboard"><Button className="bg-yellow-400 px-2 w-96 py-2 text-white mt-7">Login</Button></Link>
      </div>
      
    </div>
  )
}

export default login

