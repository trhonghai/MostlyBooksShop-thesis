import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  let navigate = useNavigate();

  const { name, username, email } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div>
      <h2>Form Add User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
