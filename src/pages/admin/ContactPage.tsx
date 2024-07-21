import React, { useEffect, useState } from "react";
import CardStat from "../../components/admin/CardStatComponent";
import TableComponent from "../../components/admin/TableComponent";
import { Contact } from "../../types/Contact";

const ContactPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:3000/contacts");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleMarkAsRead = async (contact: Contact) => {
    const response = await fetch(
      `http://localhost:3000/contacts/${contact.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...contact, isRead: true }),
      }
    );

    if (response.ok) {
      setContacts(
        contacts.map((c) => (c.id === contact.id ? { ...c, isRead: true } : c))
      );
    } else {
      console.error("Error marking contact as read");
    }
  };

  const columns = [
    { header: "Nom", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Téléphone", accessor: "phone" },
    { header: "Message", accessor: "message" },
    {
      header: "Lu",
      accessor: "isRead",
      cell: (row: Contact) => (row.isRead ? "Oui" : "Non"),
    },
  ];

  const actions = [{ label: "Marquer comme lu", onClick: handleMarkAsRead }];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <CardStat title="Nombre de messages" count={contacts.length} />
      </div>
      <TableComponent data={contacts} columns={columns} actions={actions} />
    </div>
  );
};

export default ContactPage;
