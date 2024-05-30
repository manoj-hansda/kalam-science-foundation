'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

const Team = () => {
  const [activeView, setActiveView] = useState('advisors');

  const handleViewChange = (category: string) => () => {
    setActiveView(category);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div className="border">
          <Link href="/team/founding-members">
            <img
              src="images/founding members.jpeg"
              alt=""
              className="h-full object-cover"
            />
          </Link>
          <div className="text-center text-teal font-medium mt-3">
            Founding Members
          </div>
        </div>

        <div
          className="border"
        
          onClick={handleViewChange('advisors')}
        >
          <img
            src="images/advisors.jpeg"
            alt=""
            className="h-full object-cover"
          />

          <div className="text-center text-teal font-medium mt-3">
            Advisory Council
          </div>
        </div>

        <div
          className="border"
        
          onClick={handleViewChange('members')}
        >
          <img
            src="images/members.jpeg"
            alt=""
            className="h-full object-cover"
          />
          <div className="text-center text-teal font-medium mt-3">Members</div>
        </div>

        <div
          className="border"
        
          onClick={handleViewChange('volunteers')}
        >
          <img
            src="images/volunteer.jpeg"
            alt=""
            className="h-full object-cover"
          />
          <div className="text-center text-teal font-medium mt-3">
            Volunteers
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center gap-10">
        <button
          className={clsx(
            activeView === 'advisors' ? 'bg-teal text-white' : 'border',
            'px-5 py-3'
          )}
          onClick={handleViewChange('advisors')}
        >
          Advisors
        </button>
        <button
          className={clsx(
            activeView === 'members' ? 'bg-teal text-white' : 'border',
            'px-5 py-3'
          )}
          onClick={handleViewChange('members')}
        >
          Members
        </button>
        <button
          className={clsx(
            activeView === 'volunteers' ? 'bg-teal text-white' : 'border',
            'px-5 py-3'
          )}
          onClick={handleViewChange('volunteers')}
        >
          Volunteers
        </button>
      </div> */}

      {activeView === 'advisors' && (
        <section id="advisors" className="mt-10">
          {/* <div className="mt-40">
            <img src="images/people/Shilpa Chaudhary.jpg" width="250px" />
            <h2 className="font-medium mt-3">Mrs. Shilpa Chaudhary</h2>
            <p>
              She is M.Com M.A.Economics, MBA (Finance). Having Total 10 years
              of experience. She is working as an Assistant Director in Bharath
              Engineering College. She is very much career oriented women,
              always going for the growth of organization.
            </p>
          </div> */}
        </section>
      )}

      {activeView === 'founding_members' && (
        <section className="mt-40">
          <div className="mt-10">
            <img src="images/founder.jpeg" width="250px" />
            <h2 className="font-medium mt-3">Shadab Qureshi</h2>
            <p>President</p>
          </div>
        </section>
      )}

      {activeView === 'members' && (
        <section className="mt-40" id="members">
          {/* <div className="mt-10">
            <img src="images/people/Ayesha Begum.jpg" width="250px" />
            <h2 className="font-medium mt-3">Ms. Ayesha Begum</h2>
            <p>Software Engineer</p>
          </div>

          <div className="mt-10">
            <img src="images/people/Rashi Jain.jpg" width="250px" />
            <h2 className="font-medium mt-3">Ms. Rashi Jain</h2>
            <p>
              She is Graduate in Bachelor of Architecture and currently doing
              Fellowship under Anant National University, Ahmedabad. She is
              Researcher on Detailed Analysis of the Heritage Timeline of
              Bhopal. Also she is been in to Journalism and Country Reporter for
              World Architecture Community. <br />
              *Awards and Achievements*
              <ul>
                <li>
                  1- Design Excellence Award (2016). The Unknown Place
                  University of Westminster, London.
                </li>
                <li>
                  2- Semi-Finalist, Essay Prize Competition (2016), UC Berkeley,
                  California.
                </li>
                <li>
                  3- Nominated in Archiprix 2018 - 2019 International
                  Architectural Thesis Competition
                </li>
                <li>
                  4- Guinness World Record - Team Wajid Art (2019), World’s
                  Largest Nail Art Mosaic.
                </li>
              </ul>
              *Publications and Presentations*
              <ul>
                <li>1- Midnight Triumph (ICTOAD)</li>
                <li>2- Arbitrary Systems (ICTOAD)</li>
                <li>
                  3- Assocham (Speaker) - Roundtable of Architects She is having
                  Exposure of major center parts in the USA. Curated workshops
                  and conferences.
                </li>
              </ul>
            </p>
          </div>

          <div className="mt-10">
            <img src="images/people/Nahid Afshan.jpg" width="250px" />
            <h2 className="font-medium mt-3">Ms. Nahid Afshan</h2>
            <p>
              Currently She is a pursuing Phd from Patliputra University, Patna.
              Also She is a Research Scholar. Also She is PG in Journalism and
              Mass Communication.
              <br />
              *Achievements*
              <ul>
                <li>
                  1- Published several Articles on various topics around the
                  State.{' '}
                </li>
                <li>2- Aspirant of Civil Services.</li>
              </ul>
              *Publication*
              <ul>
                <li>
                  1- Chauthi Adalat New Delhi (Feb 2012) Badlaw Ki Bayaar
                  (Women&apos;s Empowerment).
                </li>
                <li>
                  2- Mukammal Inqalab (Aug 2018) Taleem Niswaan Ki Ahmiyat Ka
                  Tarjuman Afsana: &quot;Kash Tum Hoti&quot;.
                </li>
              </ul>
            </p>
          </div> */}
        </section>
      )}

      {activeView === 'volunteers' && (
        <section className="mt-40" id="volunteers">
          {/* <div className="mt-10">
            <img src="images/people/Shabeena.jpg" width="250px" />
            <h2 className="font-medium mt-3">Mrs. Shabeena</h2>
            <p>Advocate (LLB, LLM)</p>
          </div>

          <div className="mt-10">
            <img src="images/people/Akil.jpg" width="250px" />
            <h2 className="font-medium mt-3">Akil</h2>
          </div> */}
        </section>
      )}
    </>
  );
};
export default Team;
