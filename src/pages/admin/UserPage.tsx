import React, { useEffect, useState } from "react";
import CardStat from "../../components/admin/CardStatComponent";
import TableComponent from "../../components/admin/TableComponent";
import UserForm from "../../components/admin/UserForm";
import UserUpdateForm from "../../components/admin/UserUpdateForm";
import { User } from "../../types/User";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (user: User) => {
    const response = await fetch(`http://localhost:3000/users/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setUsers(users.filter((u) => u.id !== user.id));
    } else {
      console.error("Error deleting user");
    }
  };

  const handleCreate = async (user: Partial<User>) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const newUser = await response.json();
      setUsers([...users, newUser]);
    } else {
      console.error("Error creating user");
    }
  };

  const handleUpdate = async (updatedUser: User) => {
    const response = await fetch(`http://localhost:3000/users/${updatedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
      setEditingUser(null);
    } else {
      console.error("Error updating user");
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Mail", accessor: "email" },
    { header: "Nom", accessor: "name" },
    { header: "Administrateur", accessor: "admin" },
  ];

  const actions = [
    { label: "Modifier", onClick: setEditingUser },
    { label: "Supprimer", onClick: handleDelete },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <CardStat title="Nombre d'employés" count={users.length} />
      </div>
      {editingUser ? (
        <UserUpdateForm user={editingUser} onUpdate={handleUpdate} onCancel={() => setEditingUser(null)} />
      ) : (
        <UserForm onCreate={handleCreate} />
      )}
      <TableComponent data={users} columns={columns} actions={actions} />
    </div>
  );
};

export default UsersPage;
