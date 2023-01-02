export default function Header(){
    return (
        <div className="lg:mx-32 mx-20">
        <div className="h-128 py-10">
          <div className="flex flex-row justify-between items-center">
            <div>
              <img src="/assets/images/logo.png" alt="website logo" className='lg:max-w-[175px] max-w-[128px] cursor-pointer' />
            </div>
            <div className="md:block hidden ">
              <div className="flex flex-row justify-between lg:gap-x-10 gap-x-6 items-center">
                <ul className="flex flex-row justify-between lg:gap-x-10 gap-x-6 text-xl">
                  <li className='font-bold cursor-pointer'>
                    Home
                  </li>
                  <li className='font-medium cursor-pointer'>
                    About
                  </li>
                  <li className='font-medium cursor-pointer'>
                    Services
                  </li>
                  <li className='font-medium cursor-pointer'>
                    Faq's
                  </li>
                  <li className='font-medium cursor-pointer'>
                    Login
                  </li>
                </ul>
                <div>
                  <button className='bg-black text-white p-3 text-xl font-bold'>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
}