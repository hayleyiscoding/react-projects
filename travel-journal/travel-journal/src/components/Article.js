import mapIcon from "../images/map-icon.png";

export default function Article(props) {
  return (
    <article className='article flex justify-between'>
      <img
        src={props.imageUrl}
        alt={props.location}
        width='200px'
        className='col-1 article--img'
      />
      <div className='flex column center align-start col-2'>
        <div className='flex center'>
          <img src={mapIcon} alt='icon' width='7px' />
          <h5 className='article--country_name'>{props.location}</h5>
          <a href={props.googleMapsUrl} className='article--google_link'>
            View on Google Maps
          </a>
        </div>
        <h2 className='article--title'>{props.title}</h2>
        <h6 className='article--dates'>
          {props.startDate} - {props.endDate}
        </h6>
        <p className='article--text'>{props.description}</p>
      </div>
    </article>
  );
}
