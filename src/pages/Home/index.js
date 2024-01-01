import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <Link>view</Link>
          <Link to={`/edituser/${user.id}`}>Edit</Link>
          <Link onClick={() => deleteUser(user.id)}>Delete</Link>
        </div>
      ))}
      <Link to="/adduser">Add User</Link>
    </div>
  );
}

export default Home;
