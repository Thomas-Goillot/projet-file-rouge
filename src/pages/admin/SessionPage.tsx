import React, { useEffect, useState } from "react";
import CardStat from "../../components/admin/CardStatComponent";
import TableComponent from "../../components/admin/TableComponent";
import SessionForm from "../../components/admin/SessionForm";
import { Session } from "../../types/Session";
import SessionUpdateForm from "../../components/admin/SessionUpdateForm";

const SessionPage: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSession, setEditingSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch("http://localhost:3000/sessions");
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const handleDelete = async (session: Session) => {
    const response = await fetch(
      `http://localhost:3000/sessions/${session.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      setSessions(sessions.filter((s) => s.id !== session.id));
    } else {
      console.error("Error deleting session");
    }
  };

  const handleCreate = async (session: Partial<Session>) => {
    const response = await fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    });

    if (response.ok) {
      const newSession = await response.json();
      setSessions([...sessions, newSession]);
    } else {
      console.error("Error creating session");
    }
  };

  const handleUpdate = async (updatedSession: Session) => {
    const response = await fetch(
      `http://localhost:3000/sessions/${updatedSession.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSession),
      }
    );

    if (response.ok) {
      setSessions(
        sessions.map((session) =>
          session.id === updatedSession.id ? updatedSession : session
        )
      );
      setEditingSession(null);
    } else {
      console.error("Error updating session");
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Image", accessor: "image" },
    { header: "Theme", accessor: "theme" },
    { header: "Title", accessor: "title" },
    { header: "Description", accessor: "description" },
    { header: "Participants Max", accessor: "nbParticipantsMax" },
    { header: "Durée", accessor: "duree" },
    { header: "Prix", accessor: "price" },
  ];

  const actions = [
    {
      label: "Edit",
      onClick: (session: Session) => setEditingSession(session),
    },
    { label: "Delete", onClick: handleDelete },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <CardStat title="Nombre de sessions" count={sessions.length} />
      </div>
      {editingSession ? (
        <SessionUpdateForm
          session={editingSession}
          onUpdate={handleUpdate}
          onCancel={() => setEditingSession(null)}
        />
      ) : (
        <SessionForm onCreate={handleCreate} />
      )}
      <TableComponent data={sessions} columns={columns} actions={actions} />
    </div>
  );
};

export default SessionPage;
