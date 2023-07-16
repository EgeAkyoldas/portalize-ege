

const Card = () => {
    return (
        <div className="w-full p-4">
        <div className="bg-[url(https://file.rendit.io/n/DQ4a7Zutey9tJd2lF4HZ.png)] bg-cover  flex flex-col w-full h-64 items-start  pt-[113px] rounded-[32px]  pl-12 relative text-justify-left">
          <div className=" text-5xl font-['Gilroy'] font-bold text-white ">
            Tedy’s Gallery
          </div>
        </div>
      </div>
    );
  };
  
  const PublicSpaces = () => {
    return (
      <div className="container-xl mx-auto px-16 w-full">
        <div className="flex flex-col -mx-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  };
  export default PublicSpaces