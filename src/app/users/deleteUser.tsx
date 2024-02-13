"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: "active" | "inactive";
};

export default function DeleteUser(user: User) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(userId: number) {
    setIsMutating(true);

    try {
      const apiEndPoint = "https://gorest.co.in/public/v2/users";
      const response = await fetch(`${apiEndPoint}/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      router.refresh();
      setModal(false);
      console.log("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user");
    } finally {
      setIsMutating(false);
    }
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are sure delete to user : {user.name} ?
          </h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(user.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
