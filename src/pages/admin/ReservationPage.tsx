import React, { useEffect, useState } from "react";
import CardStat from "../../components/admin/CardStatComponent";
import TableComponent from "../../components/admin/TableComponent";
import { Reservation } from "../../types/Reservation";

const ReservationPage: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("http://localhost:3000/reservations");
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (reservation: Reservation) => {
     const response = await fetch(`http://localhost:3000/reservations/${reservation.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setReservations(reservations.filter((r) => r.id !== reservation.id));
      } else {
        console.error("Error deleting reservation");
      }

  };

  const columns = [
    { header: "Email", accessor: "email" },
    { header: "Participants", accessor: "participants" },
    { header: "Date", accessor: "date" },
    { header: "Créneaux", accessor: "creneaux" },
    { header: "Session ID", accessor: "sessionId" },
  ];

  const actions = [
    { label: "Supprimer", onClick: handleDelete },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <CardStat title="Nombre de réservation" count={reservations.length} />
      </div>
      <TableComponent data={reservations} columns={columns} actions={actions} />
    </div>
  );
};

export default ReservationPage;
