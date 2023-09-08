import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(100);
  const [yourService, setYourService] = useState(0);
  const [friendService, setFriendService] = useState(0);
  return (
    <div>
      <Bill bill={bill} setBill={setBill}>
        How much was the bill?
      </Bill>
      <Service value={yourService} setValue={setYourService}>
        How did you like the service?
      </Service>
      <Service value={friendService} setValue={setFriendService}>
        How did your friend like the service?
      </Service>
      <h1>
        You pay $
        {Number(bill) + (Number(yourService) + Number(friendService)) / 2} ($
        {yourService}+${friendService})
      </h1>
      <Reset
        setBill={setBill}
        setFriendService={setFriendService}
        setYourService={setYourService}
      />
    </div>
  );
}

function Bill({ bill, setBill, children }) {
  return (
    <div>
      {children}{" "}
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function Service({ value, setValue, children }) {
  const servicesValue = {
    "Dissatisfied(0%)": 0,
    "It was okay(5%)": 5,
    "It was good(10%)": 10,
    "Absolutely amazing(20%)": 20
  };

  return (
    <div>
      {children}
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {Object.entries(servicesValue).map((e) => (
          <option value={e[1]}>{e[0]}</option>
        ))}
      </select>
    </div>
  );
}

function Reset({ setBill, setFriendService, setYourService }) {
  return (
    <button
      onClick={() => {
        setBill(100);
        setFriendService(0);
        setYourService(0);
      }}
    >
      Reset
    </button>
  );
}
