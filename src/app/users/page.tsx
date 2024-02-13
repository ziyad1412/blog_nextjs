import AddUser from "./addUser";
import DeleteUser from "./deleteUser";
import DetailUser from "./detailUser";
import UpdateUser from "./updateUser";

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: "active" | "inactive";
};

async function getUsers() {
  const apiEndPoint = "https://gorest.co.in/public/v2/users";
  const res = await fetch(apiEndPoint, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    cache: "no-store",
  });
  return res.json();
}

export default async function UsersPage() {
  const users: User[] = await getUsers();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddUser />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <div
                  className={`badge ${
                    user.status === "active" ? "badge-info" : "badge-error"
                  } gap-2`}
                >
                  {user.status}
                </div>
              </td>
              <td className="flex space-x-1">
                <DetailUser {...user} />
                <UpdateUser {...user} />
                <DeleteUser {...user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
