import React, { useState } from "react";
import { Session } from "../../types/Session";

interface SessionFormProps {
  onCreate: (session: Partial<Session>) => void;
}

const SessionForm: React.FC<SessionFormProps> = ({ onCreate }) => {
  const [image, setImage] = useState("");
  const [theme, setTheme] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nbParticipantsMax, setNbParticipantsMax] = useState(0);
  const [duree, setDuree] = useState(0);
  const [price, setPrice] = useState(0);
  const [crenaux, setCrenaux] = useState<{ [key: string]: string }>({});
  const [newCreneauValue, setNewCreneauValue] = useState("");

  const handleAddCreneau = () => {
    if (newCreneauValue) {
      const newKey = `${Object.keys(crenaux).length + 1}`;
      setCrenaux((prev) => ({ ...prev, [newKey]: newCreneauValue }));
      setNewCreneauValue("");
    }
  };

  const handleRemoveCreneau = (key: string) => {
    const { [key]: _, ...rest } = crenaux;
    setCrenaux(rest);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      image,
      theme,
      title,
      description,
      nbParticipantsMax,
      duree,
      price,
      crenaux,
    });
    setImage("");
    setTheme("");
    setTitle("");
    setDescription("");
    setNbParticipantsMax(0);
    setDuree(0);
    setPrice(0);
    setCrenaux({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl mb-4">Créer une nouvelle session</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Image
        </label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="theme"
        >
          Theme
        </label>
        <input
          id="theme"
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nbParticipantsMax"
        >
          Nombre de Participants Max
        </label>
        <input
          id="nbParticipantsMax"
          type="number"
          value={nbParticipantsMax}
          onChange={(e) => setNbParticipantsMax(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="duree"
        >
          Durée
        </label>
        <input
          id="duree"
          type="number"
          value={duree}
          onChange={(e) => setDuree(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Prix
        </label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Créneaux
        </label>
        <div className="flex items-center mb-2">
          <input
            type="time"
            placeholder="Heure"
            value={newCreneauValue}
            onChange={(e) => setNewCreneauValue(e.target.value)}
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
          />
          <button
            type="button"
            onClick={handleAddCreneau}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ajouter
          </button>
        </div>
        <ul>
          {Object.keys(crenaux).map((key, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">
                {key}: {crenaux[key]}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveCreneau(key)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Créer
        </button>
      </div>
    </form>
  );
};

export default SessionForm;
