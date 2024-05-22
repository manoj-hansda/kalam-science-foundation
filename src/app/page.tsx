import Link from "next/link"

export default function Home() {
  return (
    <div>
      <section>
        <p className="leading-10">
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
        <h1 className="text-xl font-medium text-center text-teal">Vision</h1>
        <div className="md:flex mt-10 gap-10">
          <p className="leading-10">
            &quot;To democratize access to quality science education and
            opportunities, particularly among underprivileged communities,
            fostering inclusive development, innovation, and scientific literacy
            across India.&quot; This aim emphasizes the foundation&apos;s commitment to
            promoting equity in education and leveraging science as a tool for
            social empowerment and progress. It aligns with Dr. APJ Abdul
            Kalam&apos;s vision of using knowledge and technology to uplift society,
            particularly focusing on reaching those who are often marginalized
            or disadvantaged. KSF-INDIA organizes academic associated
            activities, project associated programs, workshops, seminars,
            educational tours, technical visit, social visits, rural
            development, women empowerment, digital literacy, computer knowledge
            programs etc.
          </p>
          <img src="images/Abdul Kalam.png" className="mx-auto" />
        </div>
      </section>

      
      <section className="py-10">
        <h1 className="text-xl font-medium text-center text-teal">Our Services</h1>
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
    </div>
  );
}
