import Banner from '@/components/Banner';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section>
        <p className="leading-10 text-justify">
          KALAM Science Foundation-INDIA is an inspirational initiative to
          develop the new ways in the field of science and technology with
          bilateral support. KALAM Science Foundation-INDIA is recognized by
          Government of Karnataka, registered under Karnataka Societies
          Registration Act- 1860. Also registered with NGO - Darpan (NITI
          Aayog). KSF-INDIA organizes academic associated activities, project
          associated programs, workshops, seminars, educational tours, technical
          visit, social visits, rural development, women empowerment, digital
          literacy, computer knowledge programs etc.
        </p>
      </section>

      <section className="py-10">
        <h1 className="text-2xl font-medium text-center text-teal">Vision</h1>
        <div className="md:flex mt-10 gap-10">
          <p className="leading-10 text-justify">
            &quot;To democratize access to quality science education and
            opportunities, particularly among underprivileged communities,
            fostering inclusive development, innovation, and scientific literacy
            across India.&quot; This aim emphasizes the foundation&apos;s
            commitment to promoting equity in education and leveraging science
            as a tool for social empowerment and progress. It aligns with Dr.
            APJ Abdul Kalam&apos;s vision of using knowledge and technology to
            uplift society, particularly focusing on reaching those who are
            often marginalized or disadvantaged. KSF-INDIA organizes academic
            associated activities, project associated programs, workshops,
            seminars, educational tours, technical visit, social visits, rural
            development, women empowerment, digital literacy, computer knowledge
            programs etc.
          </p>
          <img src="images/Abdul Kalam.png" className="mx-auto" />
        </div>
      </section>

      <section className="py-10">
        <h1 className="text-2xl font-medium text-center text-teal">Mission</h1>
        <div className="mt-10">
          <img
            src="images/Abdul Kalam Quote.jpeg"
            className="mx-auto"
            style={{
              width: '50%',
            }}
          />
        </div>
        <div className="md:flex mt-10 gap-10">
          <p className="leading-10 text-justify">
            KALAM Science Foundation-INDIA, is committed to Serve the Nation.
            The thought of our Founder, “Endeavour towards Educate, Enrich and
            Empowering Bharat” is the Mission of the Organization. Empowering
            Bharat, or India, entails fostering an environment where all
            citizens have the opportunity to contribute to the nation's
            progress. This empowerment encompasses enhancing education,
            healthcare, and employment opportunities, particularly for
            marginalized communities. By promoting awareness in rural areas,
            promoting digital literacy, entrepreneurial initiatives, and gender
            equality, India can harness the diverse talents of its people to
            drive innovation and economic growth. KSF-INDIA, is about creating
            an inclusive society where every individual can thrive, thereby
            strengthening the nation's democratic foundations and securing a
            prosperous future for all.
            <br />
            KSF-INDIA is committed to help the needy by providing support,
            resources, and care to individuals and communities facing hardships.
            It signifies the act of extending a helping hand to those who are
            struggling with poverty, hunger, homelessness, educational support,
            rural development initiatives, Hands on Activities, Women
            Empowerment and other forms of adversity. By offering financial aid,
            food, shelter, education, and emotional support, we can make a
            significant difference in their lives and foster a sense of hope and
            dignity. Helping the needy is not just about charity; it is about
            empowering them to overcome challenges and achieve self-sufficiency.
            This humanitarian effort promotes social equity, strengthens
            community bonds, and reflects the values of empathy, kindness, and
            solidarity in society.
            <br />
            KSF-INDIA's profound and honorable commitment that encompasses
            various forms of dedication and sacrifice for the greater good of
            the country. It involves selfless acts by individuals who contribute
            to the welfare, security, and progress of the nation through diverse
            roles for public, community service, and civic engagement. It
            requires a deep sense of patriotism, integrity, and responsibility,
            fostering unity and resilience among citizens. KSF-INDIA is
            committed to the country's values and future.
          </p>
        </div>
      </section>

      <h1 className="text-2xl font-medium text-center text-teal">
        Failure To Success Story: Kalam Sir
      </h1>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/UX5cgiaEGMQ?si=4LMvLQgqaViFdpVT"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mt-10 mx-auto"
      ></iframe>

      <section className="py-10">
        <h1 className="text-2xl font-medium text-center text-teal">
          Our Services
        </h1>

        <div className="grid grid-cols-2 text-center gap-10 mt-10">
          <Link href="/services/career-guidance">
            <div className="p-3 border bg-blue">Career Guidance</div>
          </Link>
          <Link href="/services/aeromedelling-workshops">
            <div className="p-3 border bg-blue">Aeromodelling Workshops</div>
          </Link>
          <Link href="/services/robotics-workshops">
            <div className="p-3 border bg-blue">Robotics Workshops</div>
          </Link>
          <div className="p-3 border bg-blue">Lab Assistance</div>
          <Link href="/services/computer-english-classes">
            <div className="p-3 border bg-blue">
              Computer / English Speaking Classes
            </div>
          </Link>
          <Link href="/services/job-assistance">
            <div className="p-3 border bg-blue">Job Assistance</div>
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <a href="/Membership_Form.pdf" download="membership_form.pdf">
          <button className="block bg-teal text-white p-5 m-auto">
            Become a Member
          </button>
        </a>
      </div>
    </div>
  );
}
