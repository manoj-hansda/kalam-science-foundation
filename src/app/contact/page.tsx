'use client'

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Contact = () => {

  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);


    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => router.push('/contact/success'))
      .catch((error) => alert(error));
  };

  return (
    <>
      <h1>Contact Us</h1>
      
      
      <form
        
        className="mt-10"
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Name" name="name" className="w-full border p-2" />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full border p-2 mt-2"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="w-full border p-2 mt-2"
        />
        <textarea placeholder="Message" name="message" className="w-full border p-2 mt-2" />
        <input type="hidden" name="form-name" value="contact" />
        <button
          type="submit"
          className="bg-blue text-teal border py-2 px-10 mt-6"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
