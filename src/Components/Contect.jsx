// src/components/ContactForm.jsx
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xnndpane");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-6xl bg-gray-400 dark:bg-gray-800 p-8 rounded-lg shadow grid grid-cols-1 md:grid-cols-1 gap-6 md:ml-50 ">

        {/* Contact Information Section */}
        <div className="space-y-6 ml-10 sm:ml-0">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <a
                href="mailto:prabhakararunasalam17@gmail.com"
                className="hover:text-blue-700"
              >
                prabhakararunasalam17@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📱</span>
              <span>+91 7708888802</span>
            </li>
            <li className="flex items-center space-x-4">
              <a
                href="https://github.com/prabhakararunasalam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-iconez/64/GitHub-512.png"
                  alt="GitHub Logo"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/prabhakar-a-962688235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <img
                  src="https://cdn-icons-png.freepik.com/256/3955/3955056.png?semt=ais_hybrid"
                  alt="LinkedIn Logo"
                  className="w-6 h-6"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Contact Me
          </h2>

          {state.succeeded ? (
            <p className="text-green-600 text-center text-lg font-semibold">
              ✅ Thanks for reaching out! I’ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-1 border rounded shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 mt-1 border rounded shadow-sm resize-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
