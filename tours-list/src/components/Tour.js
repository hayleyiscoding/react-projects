import React from "react";

export default function Tour(props) {
  const [readMore, setReadMore] = React.useState(true);

  function handleClick() {
    props.setTourData((prevState) => {
      return prevState.filter((tour) => tour.id !== props.id);
    });
  }

  function handleReadMore() {
    return setReadMore((prevState) => !prevState);
  }

  return (
    <div className='tour flex column center'>
      <img className='tour--image' src={props.image} alt={props.name} />
      <div className='tour--data'>
        <div className='tour--data--header flex align-center'>
          <h3 className='tour--data--header--name'>{props.name}</h3>
          <h4 className='tour--data--header--price'>${props.price}</h4>
        </div>
        <p className='tour--data--info'>
          {readMore ? `${props.info.slice(0, 200)}...` : props.info}
          <button
            className='tour--data--read_more_button'
            onClick={handleReadMore}
          >
            {readMore ? "Read More" : "Show Less"}
          </button>
        </p>
        <button className='tour--data--button' onClick={handleClick}>
          Not Interested
        </button>
      </div>
    </div>
  );
}
