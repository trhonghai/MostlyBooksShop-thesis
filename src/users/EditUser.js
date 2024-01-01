import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();
  let navigate = useNavigate();

  const { name, username, email } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };


  return (
    <div>
      <h2>Form Edit User</h2>
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

export default EditUser;
