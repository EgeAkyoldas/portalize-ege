import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Places from '../components/places';
import Tags from '../components/tags';
import SearchBar from '../components/SearchBar';
import AgeSlider from '../components/AgeSlider';
import EventCard from '../components/event'; 
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import PortalNav from '../components/portalNav';

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

const Events = ({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [placesData, setPlacesData] = useState<Place[]>([]);

  useEffect(() => {
    if (repo && repo.places) {
      setPlacesData(repo.places);
    }
  }, [repo]);

  const handleSearch = (searchText) => {
    console.log('Search text:', searchText);
    // Perform search logic here
  };

  return (
    <Fragment>
      <Navbar />
      <main className="overflow-hidden mb-14">
        <PortalNav/>
        <div className="flex flex-col gap-10  px-4 md:px-12">
          {placesData.map((place) => (
            <Places
              key={place.id}
              title={place.title}
              image={place.image || 'https://file.rendit.io/n/G3UbXdJBrIQRzd0xpKWm.png'}
              total={place.total}
            />
          ))}
          {/* Replace the sample EventCard components with your actual event data */}
          <EventCard
            date="18 MAY"
            time="19:30"
            title="Meta Zoo Presents: CLUB NIGHTS"
            imageUrl="https://file.rendit.io/n/Y4N7rHoelxFbpPE3FmXh.png"
          />
          <EventCard
            date="18 MAY"
            time="19:30"
            title="Meta Zoo Presents: CLUB NIGHTS"
            imageUrl="https://file.rendit.io/n/Y4N7rHoelxFbpPE3FmXh.png"
          />
          <EventCard
            date="18 MAY"
            time="19:30"
            title="Meta Zoo Presents: CLUB NIGHTS"
            imageUrl="https://file.rendit.io/n/Y4N7rHoelxFbpPE3FmXh.png"
          />
          <EventCard
            date="18 MAY"
            time="19:30"
            title="Meta Zoo Presents: CLUB NIGHTS"
            imageUrl="https://file.rendit.io/n/Y4N7rHoelxFbpPE3FmXh.png"
          />
          <EventCard
            date="18 MAY"
            time="19:30"
            title="Meta Zoo Presents: CLUB NIGHTS"
            imageUrl="https://file.rendit.io/n/Y4N7rHoelxFbpPE3FmXh.png"
          />
        </div>
      </main>
    </Fragment>
  );
};

export default Events;
