import { ChangeEvent } from 'react';

const ContactTextAreaComponent = ({ row, placeholder, name, defaultValue, onChange }: { row: number, placeholder: string, name: string, defaultValue: string, onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 outline-none focus:border-primary dark:border-dark-3 text-gray-900"
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ContactTextAreaComponent;