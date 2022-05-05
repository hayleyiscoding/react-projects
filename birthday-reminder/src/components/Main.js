import User from "./User";
import birthdayData from "../birthdayData";

export default function Main() {
  function handleChange() {}

  return (
    <div className='container'>
      <h1>{birthdayData.length} birthdays today</h1>
      {birthdayData.map((user) => (
        <User
          name={user.username}
          age={user.userAge}
          image={user.image}
          key={user.username}
        />
      ))}
      <button onClick={handleChange}>Clear All</button>
    </div>
  );
}
