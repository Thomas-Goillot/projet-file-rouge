import { Session } from "../../types/Session";
import { Link } from "react-router-dom";

const SessionCardComponent = ({ session }: { session: Session }) => {
  return (
    <div
      key={session.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img className="rounded-t-lg" src={session.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {session.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {session.description}
        </p>
        <p className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          {session.price} €
          <small className="text-gray-600 dark:text-gray-400">/place</small>
        </p>

        <Link
          to={`/session/${session.id}`}
          className="inline-block w-full rounded-lg bg-black px-4 py-3 font-medium text-white sm:w-auto dark:bg-white dark:text-black"
        >
          Réserver
        </Link>
      </div>
    </div>
  );
};

export default SessionCardComponent;
