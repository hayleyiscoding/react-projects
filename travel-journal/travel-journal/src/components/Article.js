// import journalData from "./journalData.js";
import mapIcon from "../images/map-icon.png";

export default function Article() {
  return (
    <article className='container flex justify-between'>
      <img
        src='https://source.unsplash.com/WLxQvbMyfas'
        alt='Japan'
        width='200px'
      />
      <div className='flex column justify-between align-center'>
        <div className='flex justify-between align-center'>
          <img src={mapIcon} alt='icon' width='100px' />
          <h5>Japan</h5>
          <a href='https://googlemaps.com'>View on Google Maps</a>
        </div>
        <h2>Mount Fuji</h2>
        <h6>12 Jan, 2021 - 24 Jan, 2021</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, enim,
          dicta facilis voluptatem praesentium, eius beatae esse velit nam odio
          quas excepturi rem mollitia. Quasi id culpa quo provident veritatis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          ipsam officia quisquam ad perferendis? Velit esse aut quam et nihil
          consectetur dolor, iste, dolorem itaque neque delectus excepturi.
          Provident, rerum?
        </p>
      </div>
    </article>
  );
}
