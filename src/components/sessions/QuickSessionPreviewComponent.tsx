import { SetStateAction, useEffect, useState } from "react";
import { Session } from "../../types/Session";
import { Link } from "react-router-dom";

const QuickSessionPreviewComponent = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/sessions?_limit=3")
      .then((response) => response.json())
      .then((data) => setSessions(data));
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            La Maison Horrifique
          </h2>

          <p className="mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Bienvenue à La Maison Horrifique, où mystères et frissons vous
            attendent à chaque coin de rue. Vous et votre équipe avez été
            choisis pour explorer cette demeure abandonnée, réputée pour ses
            phénomènes paranormaux et son histoire macabre. Votre mission est de
            découvrir le secret du dernier propriétaire et de vous échapper
            avant que l'heure ne soit écoulée. Méfiez-vous, les esprits rôdent
            et le temps presse.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {sessions && sessions.map((session) => (
            <li key={session.id}>
              {" "}
              {/* Added a key prop for list item */}
              <span className="group relative block">
                <img
                  src={session.image}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-black bg-opacity-50">
                  <h3 className="text-xl font-medium text-white">
                    {session.title}
                  </h3>
                  <small className="text-sm text-gray-400">
                    ({session.theme})
                  </small>

                  <Link
                    to={`/session/${session.id}`}
                    className="mt-1.5 inline-block bg-black dark:bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-white dark:text-black"
                  >
                    Réserver
                  </Link>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuickSessionPreviewComponent;
