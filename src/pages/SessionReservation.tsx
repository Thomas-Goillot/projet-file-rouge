import { useEffect, useState } from "react";
import data from "../data/session.json";
import { Session } from "../types/Session";
import { useParams } from "react-router-dom";
import SessionCardComponent from "../components/sessions/SessionCardComponent";
import ContactInputBoxComponent from "../components/contact/ContactInputBoxComponent";
import ContactTextAreaComponent from "../components/contact/ContactTextAreaComponent";

const SessionReservation = () => {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        setSessions(data);
    });

    let { id } = useParams();

    if(!id) return (<div>Session not found</div>);

    const session = sessions.find((session) => session.id === parseInt(id));

    return (
      <div className="grid grid-cols-1 gap-6 px-5 py-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4">
        {session && <SessionCardComponent session={session} />}

              <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">

                    <h1 className="text-2xl font-bold text-gray-900 py-10">
                        Réserver une session
                    </h1>

                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <ContactInputBoxComponent type="text" placeholder="Nom"  name="name" />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <ContactInputBoxComponent type="email" placeholder="Email" name="email" />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Numéro de téléphone
                      </label>
                      <ContactInputBoxComponent type="tel" placeholder="Numéro de téléphone" name="phone" />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="specialdemand">
                      Demande spéciale
                    </label>

                    <ContactTextAreaComponent row={4} placeholder="Demande spéciale" name="specialdemand" defaultValue="" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Reserver
                    </button>
                  </div>
                </form>
              </div>
            </div>
    );
};

export default SessionReservation;
