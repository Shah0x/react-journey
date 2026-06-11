import useFetch from "../hooks/useFetch";

const UsersApp = () => {
  const { data: users, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>👥 Users List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersApp;
