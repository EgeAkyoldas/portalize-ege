import Navbar from '../components/Navbar'
import React , {Fragment} from 'react'
import GameSlider from '../components/gameslider';
import FeaturedSlider from '../components/featuredslider';
import FeaturedEvent from '../components/featuredEvent';
import PublicSpaces from '../components/publicSpaces';





const PortalizeSB = ({data}) => {
  return (
    
    <Fragment>
      <Navbar/>
        <main className='overflow-hidden'>
            <div className=''>
                <GameSlider/>
            </div>
            <div className=' h-fit '>
              <h2 className='relative text-5xl left-14 w-18 mb-7'>Continue</h2>
              <FeaturedSlider/>
            </div>
            <div className=' h-fit'>
              <h2 className='relative text-5xl left-14 w-18 mb-7'>Community Featured</h2>
              <FeaturedSlider/>
            </div>
            <div className=' h-fit'>
              <h2 className='relative text-5xl left-14 w-18 mb-7'>Featured Event</h2>
              <FeaturedEvent/>
            </div>
            <div className=' w-screen mr-0 overflow-visible items-center'>
              <h2 className='relative text-5xl left-14 w-18 mb-7 mt-7 gap-10'>Public Spaces</h2>
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