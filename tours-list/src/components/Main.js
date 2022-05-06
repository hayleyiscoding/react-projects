import Tour from "./Tour";
import React from "react";

export default function Main() {
  const url =
    "https://gist.githubusercontent.com/hayleyiscoding/5ddd9582fe26975ee0f30a6f810a93b3/raw/9ea1ad1cfe18a6ccab78f54459ffb8710fd45df8/gistfile1.txt";

  const [tourData, setTourData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTourData(data));
  }, []);

  const tourCards = tourData.map((tour) => {
    return (
      <Tour
        id={tour.id}
        name={tour.name}
        info={tour.info}
        image={tour.image}
        price={tour.price}
        setTourData={setTourData}
      />
    );
  });

  return (
    <main className='main'>
      {tourData.length > 0 ? (
        tourCards
      ) : (
        <h2 className='text-center'>Loading...</h2>
      )}
    </main>
  );
}
