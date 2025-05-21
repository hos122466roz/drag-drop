import React from 'react';
import logo from '../../../../public/image/logo/logo.png'
import Image from 'next/image';
const Aside = () => {
    return (
        <aside className='fixed   h-[100vh] w-[18%]  top-0 left-0 bg-white' >
            <div className='pt-4 pl-6'>
                <Image src={ logo} alt='logo'/> 
            </div>
        </aside>
    );
}

export default Aside;
