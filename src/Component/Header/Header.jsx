// //for a basic functional component we can use a shortcut called rfc

// import React from 'react'
// import bImage from './micro_internships_banner_desktop_1920x1080.png'

// export default function Header() {
//   return (
//     <><div className="flex justify-center">
//     <img src={bImage} alt="banner" className="w-full h-64 object-cover" />
//     <div className='font-serif text-8xl text-center md:m-3rem md:p-8 sm-p-6 text-neutral-50'>Weather Forecasting</div>
// </div>
//     </>
//   )
// }



import React from 'react';
import bImage from './micro_internships_banner_desktop_1920x1080.png';

export default function Header() {
  return (
    <>
    <div className=" bg-evening bg-cover bg-center h-screen">
      <div className="md:text-8xl text-center md:p-10 md:m-3rem sm:m-1rem font-serif text-white sm:p-7 sm:text-7xl xs:text-5xl xs:p-7 xs:m-1rem xs:mt-5rem md:mt-5rem sm:mt-5rem">
          <span className=' border-b-green'>Weather Forecasting</span>
      </div>
      </div>
      </>
  );
}
