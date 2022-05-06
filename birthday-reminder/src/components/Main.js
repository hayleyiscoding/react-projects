import React, { useState } from "react";
import User from "./User";
import birthdayData from "../birthdayData";

export default function Main() {
  const [birthdays, setBirthdays] = useState(birthdayData);

  function handleChange() {
    if (birthdays.length > 0) {
      setBirthdays([]);
    } else {
      setBirthdays(birthdayData);
    }
  }

  return (
    <div className='container main'>
      <h1 className='main--title'>
        {birthdays.length > 0
          ? `${birthdayData.length} birthdays today`
          : "You're all caught up!"}
      </h1>
      {birthdays.map((user) => (
        <User
          name={user.username}
          age={user.userAge}
          image={user.image}
          key={user.username}
        />
      ))}
      <button className='main--button' onClick={handleChange}>
        {birthdays.length > 0 ? "Clear All" : "Show Previous"}
      </button>
    </div>
  );
}
