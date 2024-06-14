const ContactInputBoxComponent = ({ type, placeholder, name }: { type: string, placeholder: string, name: string }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 text-gray-900"
        />
      </div>
    </>
  );
};

export default ContactInputBoxComponent;