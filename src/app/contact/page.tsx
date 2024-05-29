'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

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
      <h1 className="text-lg text-teal font-medium">Contact Us</h1>

      <h2 className="text-lg mt-10">Address</h2>

      <div>
        <p className="mt-10">
          Head Office- <br />
          NMR Square, #6 & 13, 4th Cross, Kuvempu Main Road, <br />
          Hebbal Kempapura, <br />
          Bangalore (Karnataka) <br />
          Pin- 560024 <br />
          Email: ksfindia.info@gmail.com <br />
          Mobile: +917906166635
        </p>
        <p className="mt-10">
          Uttar Pradesh- <br />
          2/356, <br />
          Vishwas Khand, Gomtinagar, <br />
          Lucknow (UP) <br />
          Pin- 226010
          <br />
        </p>
        <p className="mt-10">
          Delhi
        </p>
        <p className="mt-10">
          Bihar
        </p>
        <p className="mt-10">
          Haryana
        </p>
        <p className="mt-10">
          Uttrakhand
        </p>

        <p className="mt-10">
          Jharkhand
        </p>
      </div>

      <form className="mt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full border p-2"
        />
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
        <textarea
          placeholder="Message"
          name="message"
          className="w-full border p-2 mt-2"
        />
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
