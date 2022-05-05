export default function User(props) {
  return (
    <div className='user'>
      <img src={props.image} alt='Profile' width='100' />
      <div>
        <h5>{props.name}</h5>
        <h6>{props.age} years</h6>
      </div>
    </div>
  );
}
