import { useState } from "react";
import "./App.css";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");

  const clickHandler = (e) => {
    if (e.target.id === "modal") {
      setToggleModal(false);
      return;
    }
    if (e.target.id === "button") {
      setToggleModal(true);
      return;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (/^[0-9]{10}$/.test(phone_number) === false) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(dob).getTime() > new Date().getTime()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      setUserName("");
      setEmail("");
      setPhoneNumber("");
      setDob("");
    }
    return;
  };

  return (
    <div className="App" onClick={clickHandler}>
      <h1>User Details Modal</h1>
      <button id="button" className="button" onClick={clickHandler}>
        Open Form
      </button>
      <div id="modal" className={toggleModal ? "modal" : "modal_close"}>
        <form className="modal-content" onSubmit={submitHandler}>
          <h1>Fill Details</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="number">Phone Number:</label>
          <input
            type="text"
            name="number"
            id="number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
