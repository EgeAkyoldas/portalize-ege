import Navbar from '../components/Navbar'
import React , {Fragment} from 'react'
import GameSlider from '../components/gameslider';
import FeaturedSlider from '../components/featuredslider';
import FeaturedEvent from '../components/featuredEvent';
import PublicSpaces from '../components/publicSpaces';
import PortalNav from '../components/portalNav';




const PortalizeSB = ({data}) => {
  return (
    
    <Fragment>
      <Navbar/>
        <main className='overflow-hidden'>
          <div>
            <PortalNav/>
          </div>
            <div className=''>
                <GameSlider/>
            </div>
            <div className=' h-fit '>
              <h2 className='relative text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center 2xl:text-left 2xl:pl-14  mb-7'>Continue</h2>
              <FeaturedSlider/>
            </div>
            <div className=' h-fit'>
              <h2 className='relative text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center 2xl:text-left 2xl:pl-14  mb-7'>Community Featured</h2>
              <FeaturedSlider/>
            </div>
            <div className=' h-fit'>
              <h2 className='relative text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center 2xl:text-left 2xl:pl-14  mb-7'>Featured Event</h2>
              <FeaturedEvent/>
            </div>
            <div className=' w-screen mr-0 overflow-visible items-center'>
              <h2 className='relative text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-center 2xl:text-left 2xl:pl-14 mt-7 mb-7'>Public Spaces</h2>
              <PublicSpaces/>              
            </div>
            <div className="whitespace-nowrap text-sm font-['Gilroy'] font-bold text-white w-full text-center py-8 mb-4">
              PORTALIZE
              <div className="font-light contents"> | POWERED BY PAFF STUDIOS LLC</div>
            </div>
        </main>
    </Fragment>
  )
}

export default PortalizeSB