import Navbar from '../components/Navbar'
import React , {Fragment} from 'react'


const MainPlace = ({data}) => {
  return (
    
    <Fragment>
        <main className='overflow-hidden'>
            <div className="absolute bg-[url(https://file.rendit.io/n/uWadKNBdddMko4WzsWMW.png)] bg-cover bg-blend-normal bg-no-repeat flex flex-col justify-center items-center w-full md:h-[669px] h-[360px]">                
                <div className="md:absolute md:top-3/4 bg-[#191919] flex md:flex-row justify-between md:h-32 h-auto py-4 shrink-0 md:items-center  px-10 rounded-[35px] md:w-full ">
                    <div className='flex flex-col md:flex-row items-center justify-between md:gap-6 gap-2 w-full '>
                        <div className='flex flex-col md:flex-row items-center gap-2 md:gap-6'>
                            <div className="whitespace-nowrap md:text-4xl font-'Gilroy' font-bold md:text-white mb-2">
                                Poker House
                            </div>
                            <div className="whitespace-nowrap font-'Gilroy' md:text-xl font-light md:text-white">
                                Community Space
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-6 md:justify-end justify-center w-full'>                              
                            <div className='flex flex-row items-center gap-2 justify-center'>
                                <img
                                    src="https://file.rendit.io/n/vltkDnIaqTfv1jmD3WMe.svg"
                                    className="min-h-0 min-w-0 shrink-0"
                                />
                                <div className="md:text-2xl font-['Gilroy'] font-light md:text-white  shrink-0">
                                    256M
                                </div>
                            </div>
                            <div className='flex flex-row items-center gap-2 justify-center'>
                               <img
                                    src="https://file.rendit.io/n/AkL8kLZorKUZ9TsV5ud4.svg"
                                    className="min-h-0 min-w-0 self-center shrink-0"
                                />
                                <div className="md:text-2xl font-['Gilroy'] font-light md:text-white shrink-0">
                                    25M
                                 </div>
                            </div>                                                                          
                            <div className="bg-[linear-gradient(95deg,_#3b29ff_28%,#9c4fff_310%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col shrink-0 h-10 md:text-center py-2 px-10 rounded-[50px]">
                                 <button className="whitespace-nowrap md:text-xl font-['Gilroy'] font-light md:text-white w-3/5">
                                    Join Space
                                </button>
                            </div>                   
                        </div>
                    </div>
                </div>        
            </div>          

        </main>
    </Fragment>
  )
}

export default MainPlace