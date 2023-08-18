'use client'

import Link from 'next/link';
import Image from 'next/image'

import {Montserrat} from "next/font/google"

const montserrat = Montserrat({weight:"600", subsets:
["latin"]});

const Sidebar = () => {
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#3c3d3d]">
            <div className="px-3 py-2 flex-1">
                <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
                
                <div className='relative w-8 h-8 mr-4'>
                    <Image
                    fill
                    alt="Logo"
                    src='/favicon.png'/>
                </div>
                <h1 className='text-xl font-bold'>Acumen Aura</h1>
                </Link>

            </div>

        </div>
     );
}
 
export default Sidebar;