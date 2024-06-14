import { useEffect, useState } from "react";
import { Session } from "../types/Session";
import { useParams } from "react-router-dom";
import SessionCardComponent from "../components/sessions/SessionCardComponent";
import ContactInputBoxComponent from "../components/contact/ContactInputBoxComponent";

interface Reservation {
  date: string;
  creneaux: string;
  participants: number;
  sessionId: string;
}

const SessionReservation = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/sessions?_limit=3")
      .then((response) => response.json())
      .then((data) => setSessions(data));

    fetch("http://localhost:3000/reservations")
      .then((response) => response.json())
      .then((data) => setReservations(data));
  }, []);

  if (!id) return <div>Session not found</div>;

  const session = sessions.find((session) => session.id === id);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const participants = parseInt(data.participants as string, 10);

    if (!data.creneaux || !data.date || !data.email || !data.participants) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    const existingReservations = reservations.filter(
      (reservation) =>
        reservation.date === data.date && reservation.creneaux === data.creneaux
    );

    const totalParticipants: number = existingReservations.reduce(
      (total: number, reservation: Reservation) =>
        total + reservation.participants,
      0
    );

    if (
      session &&
      Number(totalParticipants) + Number(participants) >
        session.nbParticipantsMax
    ) {
      alert("Nombre de participants maximum atteint pour ce créneau.");
      return;
    }

    const reservationData = {
      ...data,
      participants,
      sessionId: session.id, // Add session ID to the reservation data
    };

    fetch("http://localhost:3000/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Réservation effectuée avec succès.");
      })
      .catch((error) => {
        console.error("Erreur lors de la réservation:", error);
      });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const getAvailablePlaces = (creneaux: string): number => {
    const existingReservations = reservations.filter(
      (reservation) =>
        reservation.date === selectedDate && reservation.creneaux === creneaux
    );

    const totalParticipants = existingReservations.reduce(
      (total, reservation) => total + reservation.participants,
      0
    );

    return session ? session.nbParticipantsMax - totalParticipants : 0;
  };

  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-14 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {session !== undefined && <SessionCardComponent session={session} />}

      <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12 bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 py-10 dark:text-white">
          Réserver la session "{session?.title}"
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <ContactInputBoxComponent
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="participants">
              Nombre de participants
            </label>
            <ContactInputBoxComponent
              type="number"
              placeholder="Nombre de participants"
              name="participants"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="date">
              Date de réservation
            </label>
            <input
              type="date"
              placeholder="Date de réservation"
              name="date"
              className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 text-gray-900"
              onChange={handleDateChange}
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="creneaux">
              Créneaux
            </label>
            <select
              name="creneaux"
              id="creneaux"
              className="w-full rounded border border-stroke px-[14px] py-3 text-base outline-none focus:border-primary dark:border-dark-3 text-gray-900 dark:text-white"
              disabled={!selectedDate}
              defaultValue=""
            >
              <option value="" disabled>
                Selectionner un créneau
              </option>
              {session &&
                Object.entries(session.crenaux).map(([key, value]) => {
                  const availablePlaces = getAvailablePlaces(value);
                  return (
                    <option
                      key={key}
                      value={value}
                      disabled={availablePlaces <= 0}
                    >
                      {value}{" "}
                      {availablePlaces <= 0
                        ? "(Complet)"
                        : `(Places restantes: ${availablePlaces})`}
                    </option>
                  );
                })}
            </select>
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
