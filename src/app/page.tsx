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

        <h1 className="text-xl text-center text-teal">Vision</h1>
        <div className="md:flex mt-10 gap-10">
          <p className="leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore
            id! Earum cum, fuga culpa, temporibus illo deserunt, vero quibusdam
            eos molestiae laboriosam harum vitae in quam nam sed commodi.
          </p>
          <img src="images/Abdul Kalam.png" className="mx-auto" />
        </div>
      </section>

      <section className="py-10">
        <h1 className="text-xl text-center text-teal">Mission</h1>
        <div className="md:flex mt-10 gap-10">
          <img src="images/mission.jpeg" className="mx-auto" width="500px" />
          <p className="leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore
            id! Earum cum, fuga culpa, temporibus illo deserunt, vero quibusdam
            eos molestiae laboriosam harum vitae in quam nam sed commodi.
          </p>
        </div>
      </section>

      <section className="py-10">
        <h1 className="text-xl text-center text-teal">Our Services</h1>
        <div className="grid grid-cols-2 text-center gap-10 mt-10">
          <div className="p-3 border bg-blue">Career Guidance</div>
          <div className="p-3 border bg-blue">Aeromodelling Workshops</div>
          <div className="p-3 border bg-blue">Robotics Workshops</div>
          <div className="p-3 border bg-blue">Lab Assistance</div>
          <div className="p-3 border bg-blue">Computer / English Speaking Classes</div>
          <div className="p-3 border bg-blue">Job Assistance</div>
        </div>
      </section>
    </div>
  );
}
