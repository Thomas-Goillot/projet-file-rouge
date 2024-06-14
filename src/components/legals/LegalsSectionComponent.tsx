function LegalsSectionComponent({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p>{content}</p>
    </section>
  );
}

export default LegalsSectionComponent;