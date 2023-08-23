"use client"

import Link from 'next/link';
import React, { useState } from 'react';

import { FiMenu } from "react-icons/fi"
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {

    const [ flag , setFlag ] = useState(false)

    const clickHandler = () => { setFlag( !flag ) }

    return (
        <div className="bg-dark py-5 fixed w-full z-10" >
            <div className=' container items-center text-f6' >
                <div className='flex' >
                    <div className='sm:hidden flex-1 text-2xl' >
                        {
                            !flag ? <FiMenu onClick={ clickHandler } /> : <IoCloseSharp onClick={ clickHandler } />
                        }
                    </div>
                    <div className='hidden sm:flex gap-x-6 items-center  flex-1' >
                        <Link href="./" >Home page</Link>
                        <Link href='./advertisments' >Advertisements</Link>
                        <Link href="/signin" className=' bg-RED px-3 py-2 rounded ' >Sign in</Link>
                    </div>
                    <div className=' text-lightBlue sm:text-2xl text-lg' >
                        <Link href="./" >Real State</Link>
                    </div>
                </div>
                {
                    flag ? <div className=' gap-y-4 flex flex-col py-4 ' >
                        <Link href="./" >Home page</Link>
                        <Link href='./advertisments' >Advertisements</Link>
                        <Link href="/signin" className=' bg-RED px-6 py-1 rounded w-fit ' >Sign in</Link>
                    </div> : null
                }
            </div>
        </div>
    );
};

export default Header;