import React from 'react';

const ContactInputBoxComponent = ({ type, placeholder, name, onChange }: { type: string, placeholder: string, name: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 text-gray-900"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ContactInputBoxComponent;