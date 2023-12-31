import React, {useState , useEffect} from 'react'
import SignInform from '../components/signinform'
import Image from 'next/image'



function SignIn({}) {

  const [windowDimension, setWindowDimension] = useState(null);

  

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const isMobile = windowDimension <= 768;

  return (
    <>
     <main className='relative flex md:flex-row flex-col-reverse h-screen w-screen '>
      
      <div className='relative md:w-[35%] h-[100%] md:h-auto rounded-t-3xl bg-paffbg'>
        <div className='absolute  top-5 left-[12%]'>
         <Image src='/img/logo.png'  className="relative scale-75 -left-7 md:left-0 md:scale-100 my-5" width={218} height={38} alt="Logo"></Image>
          <p className='text-lg lg:text-4xl font-bold'>Join Ecosystem</p>
          <p className='text-lg lg:text-4xl font-thin'>And Start Building Future</p>  
          </div>
          <div className='absolute flex flex-col top-[35%] md:top-[58%] left-1/2 -translate-x-1/2 w-3/4 gap-2'>
            <SignInform/>
          </div>
          </div>
          <div className='bg-purple-500 opacity-20 absolute bottom-6 left-4 w-[320px] h-[168px] blur-3xl z-10'></div>
            
      <div className='md:w-[65%] h-[35%] md:h-auto bg-Hero bg-center bg-cover z-50'>
      </div>
     </main>
    </>
  )
}

export default SignIn;