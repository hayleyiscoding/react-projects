export default function User(props) {
  return (
    <div className='user flex align-center justify-between'>
      <img className='user--img flex-20' src={props.image} alt='Profile' />
      <div className='flex-75'>
        <h5 className='user--name'>{props.name}</h5>
        <h6 className='user--age'>{props.age} years</h6>
      </div>
    </div>
  );
}
