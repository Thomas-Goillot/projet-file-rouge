import { useEffect, useState } from "react";
import data from '../data/session.json';
import { Session } from '../types/Session';
import SessionCardComponent from "../components/sessions/SessionCardComponent";

const Sessions = () => {

    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
      setSessions(data);
    }, []);

  return (

    <div className="grid grid-cols-1 gap-6 px-5 py-14 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    {sessions.map((session) => (
      <SessionCardComponent session={session} />
    ))}

    </div>
  );
};

export default Sessions;
