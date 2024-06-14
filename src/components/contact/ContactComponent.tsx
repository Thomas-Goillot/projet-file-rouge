import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import ContactInputBoxComponent from "./ContactInputBoxComponent";
import ContactTextAreaComponent from "./ContactTextAreaComponent";
import { useState } from "react";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 px-4 dark:bg-gray-900">
      <div className="container py-3">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-6 px-6 text-[32px] font-bold uppercase  sm:text-[40px] lg:text-[36px] xl:text-[40px] text-dark dark:text-white">
                Besoin d'aide ?
              </h2>
              <span className="mb-4 px-6 block text-base font-semibold text-primary dark:text-primary-300">
                Nous contacter
              </span>

              <p className="mb-9 px-6 text-base leading-relaxed text-body-color dark:text-gray-400">
                Une question ? Un projet ? N'hésitez pas à nous contacter, nous
                vous répondrons dans les plus brefs délais.
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px] dark:bg-primary/10 dark:text-primary-300">
                  <FaHome className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Notre adresse
                  </h4>
                  <p className="text-base text-body-color dark:text-gray-400">
                    1234 rue de la rue, Paris, France
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px] dark:bg-primary/10 dark:text-primary-300">
                  <FaPhone className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Numéro de téléphone
                  </h4>
                  <p className="text-base text-body-color dark:text-gray-400">
                    (+33) 6 12 34 56 78
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px] dark:bg-primary/10 dark:text-primary-300">
                  <FaMailBulk className="w-5 h-5 text-primary lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Adresse email
                  </h4>
                  <p className="text-base text-body-color dark:text-gray-400">
                    contact@maison-horrifique.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 sm:p-12">
              <form onSubmit={handleSubmit}>
                <ContactInputBoxComponent
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  onChange={handleChange}
                />
                <ContactInputBoxComponent
                  type="mail"
                  name="email"
                  placeholder="Votre email"
                  onChange={handleChange}
                />
                <ContactInputBoxComponent
                  type="text"
                  name="phone"
                  placeholder="Votre numéro de téléphone"
                  onChange={handleChange}
                />
                <ContactTextAreaComponent
                  row={6}
                  placeholder="Votre Message"
                  name="message"
                  defaultValue=""
                  onChange={handleChange}
                />
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border border-primary bg-primary p-3 text-dark dark:text-white transition hover:bg-opacity-90"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute -right-9 -top-10 z-[-1]">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                  <svg
                    width={34}
                    height={134}
                    viewBox="0 0 34 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="31.9993"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 31.9993 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 31.9993 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 31.9993 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 31.9993 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 31.9993 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 31.9993 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 31.9993 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 31.9993 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 31.9993 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 31.9993 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 17.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 17.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 17.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 17.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 17.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 17.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 17.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 17.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 17.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 17.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 2.66536 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 2.66536 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 2.66536 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 2.66536 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 2.66536 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 2.66536 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 2.66536 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 2.66536 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 2.66536 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 2.66536 1.66665)"
                      fill="#13C296"
                    />
                  </svg>
                </span>
                <span className="absolute -bottom-7 -left-7 z-[-1]">
                  <svg
                    width={107}
                    height={134}
                    viewBox="0 0 107 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="104.999"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 104.999 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 104.999 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 104.999 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 104.999 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 104.999 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 104.999 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 104.999 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 104.999 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 104.999 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 104.999 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 90.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 90.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 90.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 90.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 90.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 90.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 90.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 90.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 90.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 90.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 75.6654 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 31.9993 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 75.6654 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 31.9993 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 75.6654 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 31.9993 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 75.6654 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 31.9993 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 75.6654 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 31.9993 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 75.6654 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 31.9993 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 75.6654 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 31.9993 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 75.6654 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 31.9993 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 75.6654 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 31.9993 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 75.6654 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 31.9993 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 60.9993 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 17.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 60.9993 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 17.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 60.9993 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 17.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 60.9993 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 17.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 60.9993 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 17.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 60.9993 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 17.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 60.9993 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 17.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 60.9993 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 17.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 60.9993 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 17.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 60.9993 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 17.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 46.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 2.66536 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 46.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 2.66536 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 46.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 2.66536 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 46.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 2.66536 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 46.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 2.66536 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 46.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 2.66536 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 46.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 2.66536 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 46.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 2.66536 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 46.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 2.66536 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 46.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 2.66536 1.66665)"
                      fill="#13C296"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
