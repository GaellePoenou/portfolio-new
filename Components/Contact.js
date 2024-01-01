import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4m5pzf9",
        "template_fc9f97h",
        form.current,
        "0kYLpmovxEi61JFav"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pt-1rem md:pt-4rem pb-5rem mb-3">
      <h1 className="text-left px-5 text-3xl py-1 font-saira text-[#496a7a]">
        <span className="font-bold">05.</span>Contact
      </h1>
      <div className="max-w-md mx-auto border-2 border-[#496a7a] p-4 rounded-xl">
        <form ref={form} onSubmit={sendEmail} className="mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="input-field">
              <label>Votre nom</label>
              <input
                type="text"
                name="user_name"
                className="item w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8aa3a7]"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <label>Votre email</label>
              <input
                type="email"
                name="user_email"
                className="item w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8aa3a7]"
                autoComplete="off"
              />
            </div>
            <div className="textarea-field">
              <label>Votre message</label>
              <textarea
                name="message"
                className="item w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8aa3a7]"
                autoComplete="off"
              />
              <input
                type="submit"
                value="Let's Go!"
                className="bg-[#496a7a] text-white px-3 py-2 rounded-lg hover:bg-[#8aa3a7] focus:outline-none focus:shadow-outline-blue active:bg-[#8aa3a7]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
