/**
 * The Contact component is a form that allows users to enter their name, email, subject, and message,
 * and submit it to be handled by a form submission logic.
 * @returns The Contact component is returning a section element containing a header and a form. The
 * header displays the title "Contact Me" and the form allows users to input their name, email,
 * subject, and message. There are also social icons for LinkedIn and email, and a "Send Message"
 * button. The component also handles form submission logic and logs the form values to the console.
 */
import React, { useState } from "react";
import userData from "@constants/data";

export default function Contact({ darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values with name, email, subject, and message variables
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  const formClassName = darkMode ? "bg-gray-800" : "";
  const contentClassName = darkMode ? "text-white" : "text-gray-800";
  const linkClassName = darkMode ? "text-blue-300 hover:text-blue-500" : "text-blue-700 hover:text-blue-700";

  return (
    <section>
      <div className={`h-48 max-w-6xl mx-auto antialiased ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h1 className={`py-20 text-5xl font-bold text-center md:text-9xl md:text-left ${darkMode ? "text-white" : "text-black"}`}>
          Contact Me
        </h1>
      </div>
      <div className={`relative z-10 max-w-6xl p-4 mx-auto mb-20 -mt-4 bg-white rounded-md shadow-md ${formClassName} md:p-10 lg:p-20`}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center md:ml-4">
            <header>
              <h1 className={`text-2xl ${contentClassName}`}>
                Please feel free to reach out on LinkedIn or email me at{" "}
                <a href={`mailto:${userData.email}`} className={`text-blue-500 hover:underline ${linkClassName}`}>
                  {userData.email}
                </a>
              </h1>
            </header>
            {/* <div className="flex flex-row mt-4 space-x-8"> */}
            <div className="flex flex-row space-x-8 social-icons">
              <a
                href={userData.socialLinks.linkedin}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={`mailto:${userData.email}`} className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-blue-500">
                <svg
                  width="30"
                  height="30"
                  className={`text-gray-800 ${darkMode ? "text-white" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM4 6L12 11L20 6H4ZM4 18L12 13L20 18H4Z" />
                </svg>
              </a>
            </div>
          </div>
          <form
            className={`flex flex-col p-4 bg-white rounded-lg form ${formClassName}`}
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="mx-4 text-sm text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light border rounded-md focus:outline-none focus:ring-2 focus:border-none ring-blue-500"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="email" className="mx-4 mt-4 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light border rounded-md focus:outline-none focus:ring-2 focus:border-none ring-blue-500"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <label
              htmlFor="subject"
              className="mx-4 mt-4 text-sm text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light border rounded-md focus:outline-none focus:ring-2 focus:border-none ring-blue-500"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <label
              htmlFor="message"
              className="mx-4 mt-4 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              rows="4"
              className="px-1 py-2 mx-4 mt-2 font-light border rounded-md focus:outline-none focus:ring-2 focus:border-none ring-blue-500"
              name="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button
              type="submit"
              className={`w-1/2 py-2 mx-4 mt-8 text-xs font-bold bg-blue-500 rounded-md text-gray-50 ${darkMode ? "bg-blue-800" : ""}`}
              onClick={handleSubmit} // Add onClick event handler
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
