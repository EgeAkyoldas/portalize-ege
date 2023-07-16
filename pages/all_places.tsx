import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Places from '../components/places';
import Tags from '../components/tags';
import SearchBar from '../components/SearchBar';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';



type Place = {
  id: string;
  title: string;
  image: string;
  total: number;
};

type Repo = {
  places: Place[];
};

export const getServerSideProps: GetServerSideProps<{
    repo: Repo;
  }> = async () => {
    try {
      const res = await fetch('http://localhost:3000/get');
      if (!res.ok) {
        throw new Error('Failed to fetch data from the server');
      }
      const data: Place[] = await res.json();
  
      return { props: { repo: { places: data } } };
    } catch (error) {
      console.error(error);
      return { props: { repo: { places: [] } } }; // Return an empty array as a fallback
    }
  };

  

const AllPlaces = ({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [placesData, setPlacesData] = useState<Place[]>([]);

  useEffect(() => {
    if (repo && repo.places) {
      setPlacesData(repo.places);
    }
  }, [repo]);


    const handleSearch = (searchText) => {
      console.log("Search text:", searchText);
      // Perform search logic here
    }; 

  return (
    <Fragment>
      <Navbar />
      <main className='overflow-hidden pt-14'>
        <div className="bg-[#171717] flex flex-col gap-2 w-full pt-3 pb-32 px-8 rounded-lg">
          <div className="flex flex-row justify-between ml-3 w-1/2 items-center">
            <div className="text-xl font-['Gilroy'] font-light text-white">Tags</div>
            <div className="text-xl font-['Gilroy'] font-light text-white">Age</div>
          </div>
          <div className='flex flex-row gap-5 items-center h-full'>
            <div className='flex flex-row gap-3'>
                <Tags title="Movie" />
                <Tags title="Art" />
                <Tags title="Chat" />
                <Tags title="Education" />
                <Tags title="Shop" />
            </div>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          {placesData.map((place) => (
            <Places
              key={place.id}
              title={place.title}
              image={place.image || 'https://file.rendit.io/n/G3UbXdJBrIQRzd0xpKWm.png'}
              total={place.total}
            />
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default AllPlaces;
