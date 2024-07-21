import React, { useState, useEffect } from "react";
import { User } from "../../types/User";

interface UserUpdateFormProps {
  user: User;
  onUpdate: (user: User) => void;
  onCancel: () => void;
}

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({
  user,
  onUpdate,
  onCancel,
}) => {
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [admin, setAdmin] = useState(user.admin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ ...user, email, name, admin });
  };

  useEffect(() => {
    setEmail(user.email);
    setName(user.name);
    setAdmin(user.admin);
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl mb-4">Mettre à jour un compte</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nom
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="admin"
        >
          Administrateur
        </label>
        <input
          id="admin"
          type="checkbox"
          checked={admin}
          onChange={(e) => setAdmin(e.target.checked)}
          className="mr-2 leading-tight"
        />
        <span className="text-sm">Oui</span>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Mettre à jour
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Annuler
        </button>
      </div>
    </form>
  );
};

export default UserUpdateForm;
