import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import ExpandCard from './expandcard';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import items from './data';

type Repo = {
  _id: object,
  title: string,
  owner: string,
  desc: string
}


const FeaturedEvent = () => {    
    return (
      <div className="bg-[#151515] flex flex-col justify-end gap-4 w-full pt-5 pb-3 px-5  rounded-[21px]">
        <div className="relative flex flex-col ml-px pt-2 items-center">
          <img
            src="https://file.rendit.io/n/oybRKZRkYmWNAU4HU9uq.png"
            className="min-h-0 min-w-0"
          />
        </div>
        <div className="flex flex-row gap-4 items-center justify-center w-full ">
          <div className="bg-white flex flex-row justify-around mb-1 gap-1 items-center w-auto pl-6 pr-8 py-1 rounded-lg">
            <div className="whitespace-nowrap text-4xl font-['Gilroy'] font-bold text-[#272727] mt-px shrink-0">
              14 MAY
            </div>
            <div className="whitespace-nowrap text-xl font-['Gilroy'] font-light text-[#272727] self-end mb-1 shrink-0">
              / 19:30 GTM
            </div>
          </div>
          <div className="self-start relative flex flex-row items-center  w-auto gap-64">
            <div className="text-4xl font-['Gilroy'] font-bold text-white h-full">
              Meta Zoo Presents: CLUB NIGHTS
            </div>
          <div className="bg-[linear-gradient(95deg,_#3b29ff_28%,#9c4fff_310%)] bg-cover bg-50%_50% bg-blend-normal flex flex-col w-auto items-end px-12 py-2 rounded-[45px]">
            <div className="text-2xl font-['Gilroy'] font-bold text-white  h-full">
              ENROLL
            </div>
          </div>
          </div>
        </div>
      </div>

    )
  };

  export default FeaturedEvent