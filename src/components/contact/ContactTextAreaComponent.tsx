const ContactTextAreaComponent = ({ row, placeholder, name, defaultValue }: { row: number, placeholder: string, name: string, defaultValue: string }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 outline-none focus:border-primary dark:border-dark-3 text-gray-900"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};
export default ContactTextAreaComponent;