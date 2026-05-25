// src/pages/UserDetails.jsx
import React, { useState } from "react";
import {
  MdArrowBack,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegLightbulb, FaRegFilePdf } from "react-icons/fa";

export default function UserDetails() {
  const [activeTab, setActiveTab] = useState("profile");
  const [activeButton, setActiveButton] = useState(null);

  const buttonStyle = (name) =>
    `px-3 py-2 rounded-md flex items-center justify-center gap-2 border shadow-lg transition-all duration-200 text-xs sm:text-sm w-full sm:w-auto
     ${
       activeButton === name
         ? "bg-[#3a150d] text-orange-400 border-orange-400 shadow-orange-500/25"
         : "text-gray-300 hover:bg-white/5"
     }`;

  const user = {
    name: "Eleanor Vance",
    email: "eleanor.vance@example.com",
    title: "Software Engineer at Innovate Inc.",
    school: "Stanford University",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f5a0e0f6d2e8d2b2d4b4d0c0dfb7b91",
    score: "92%",
    about:
      "Dynamic and results-oriented Software Engineer with 5+ years of experience in developing, testing, and maintaining web applications. Proficient in JavaScript, React, and Node.js with a proven ability to work in fast-paced, collaborative environments. Passionate about creating intuitive user experiences and clean, efficient code.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Innovate Inc.",
        date: "2021 - Present",
        desc: "Lead development of the new customer-facing dashboard using React and TypeScript, resulting in a 20% increase in user engagement.",
      },
      {
        title: "Software Engineer",
        company: "Tech Solutions",
        date: "2018 - 2021",
        desc: "Developed and maintained RESTful APIs for the company's core product suite.",
      },
    ],
    details: {
      location: "San Francisco, CA",
      experience: "5+ Years",
      resume: "Download.pdf",
      linkedin: "/in/eleanovance",
      github: "/evance",
    },
    skills: ["React", "TypeScript", "Node.js", "SQL", "Testing", "Docker"],
  };

  const tabs = [
    { id: "profile", label: "Profile Info" },
    { id: "skills", label: "Skills" },
    { id: "applications", label: "Applications" },
    { id: "activity", label: "Activity Logs" },
    { id: "admin", label: "Admin Actions" },
  ];

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-white flex flex-col md:flex-row">
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header - Mobile first */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-b border-[#3b261b]">
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto mb-3 sm:mb-0">

            {/* Search - Hidden on mobile, full width on small screens */}
            <div className="flex-1 max-w-xs sm:max-w-none">
              <div className="relative w-full sm:w-72">
                <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#24140F] border-[#3b261b] text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="relative p-2 rounded-md hover:bg-white/5 bg-[#3a150d] text-orange-400">
              <MdOutlineNotificationsNone size={20} />
              <span className="absolute -top-1 -right-1 sm:-right-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-orange-500 text-[8px] sm:text-[10px] flex items-center justify-center">
                1
              </span>
            </button>

            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden border border-[#3b261b]">
              <img
                src={user.avatar}
                alt="admin"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Page body */}
        <div className="px-4 sm:px-6 py-6 sm:py-8 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">User Details</h2>

          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Profile header card - Full width responsive */}
            <div className="bg-[#24140F] border border-[#3b261b] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 items-start sm:items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full">
                <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full overflow-hidden border border-[#3b261b] flex-shrink-0">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left w-full sm:w-auto">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-2 mb-2 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold">{user.name}</h3>
                    <span className="flex items-center gap-1 bg-[#0d2f17] text-green-300 px-2 py-0.5 text-xs rounded-full">
                      <VscVerifiedFilled />
                      <span>Verified</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">{user.email}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">{user.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{user.school}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="text-right w-full sm:w-auto">
                  <p className="flex text-xs sm:text-sm text-gray-400 justify-left sm:justify-start pb-2">
                    Match Score
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-orange-400 font-bold text-xl sm:text-2xl">
                      {user.score}
                    </div>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#2b1810] flex items-center justify-center border border-[#3b261b]">
                      <div className="text-orange-400">
                        <FaRegLightbulb />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveButton("send")}
                    className={buttonStyle("send")}
                  >
                    <FiSend /> Send Message
                  </button>
                  <button
                    onClick={() => setActiveButton("verify")}
                    className={buttonStyle("verify")}
                  >
                    Verify Skills
                  </button>
                  <button
                    onClick={() => setActiveButton("disable")}
                    className={buttonStyle("disable")}
                  >
                    Disable User
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs - Horizontal scroll on mobile */}
            <div className="bg-[#24140F] border border-[#3b261b] rounded-2xl p-4">
              <div className="flex gap-4 sm:gap-6 border-b border-[#3b261b] pb-3 overflow-x-auto scrollbar-hide">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`text-xs sm:text-sm pb-2 font-semibold transition-all whitespace-nowrap flex-shrink-0
                      ${
                        activeTab === t.id
                          ? "text-orange-400 border-b-2 border-orange-400"
                          : "text-gray-400 hover:text-orange-300"
                      }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="pt-6 space-y-4 sm:space-y-6">
                {activeTab === "profile" && (
                  <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                      <div className="lg:col-span-2 space-y-4">
                        <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
                          <h4 className="font-semibold mb-2 text-base sm:text-lg">About</h4>
                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            {user.about}
                          </p>
                        </div>

                        <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
                          <h4 className="font-semibold mb-4 text-base sm:text-lg">
                            Work Experience
                          </h4>
                          <div className="space-y-4">
                            {user.experience.map((e, i) => (
                              <div key={i} className="flex gap-3 sm:gap-4 items-start">
                                <div className="h-10 w-10 rounded-md bg-[#2b1810] flex items-center justify-center border border-[#3b261b] flex-shrink-0 mt-1">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M3 7h18"
                                      stroke="#8b6b5b"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
                                    <div>
                                      <h5 className="font-semibold text-sm sm:text-base truncate">
                                        {e.title}
                                      </h5>
                                      <p className="text-xs text-gray-400">
                                        {e.company} · {e.date}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-300">
                                    {e.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
                          <h4 className="font-semibold mb-3 text-base sm:text-lg">Details</h4>
                          <div className="text-xs sm:text-sm text-gray-300 space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Location</span>
                              <span>{user.details.location}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Experience</span>
                              <span>{user.details.experience}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Resume</span>
                              <a
                                className="text-orange-400 text-xs sm:text-sm flex items-center gap-1"
                                href="#"
                              >
                                <FaRegFilePdf /> {user.details.resume}
                              </a>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">LinkedIn</span>
                              <a className="text-orange-400 text-xs sm:text-sm" href="#">
                                {user.details.linkedin}
                              </a>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">GitHub</span>
                              <a className="text-orange-400 text-xs sm:text-sm" href="#">
                                {user.details.github}
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 rounded-2xl flex items-center gap-3">
                          <HiOutlineLocationMarker className="text-xl sm:text-2xl text-orange-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs sm:text-sm text-gray-400">Nearby</p>
                            <p className="text-xs sm:text-sm">San Francisco, CA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "skills" && (
                  <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
                    <h4 className="font-semibold mb-3 text-base sm:text-lg">Skills</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {user.skills.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-md bg-[#2b1810] text-xs sm:text-sm border border-[#3b261b]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "applications" && (
                  <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
                    <h4 className="font-semibold mb-3 text-base sm:text-lg">Applications</h4>
                    <p className="text-sm text-gray-400">
                      No recent applications found.
                    </p>
                  </div>
                )}

                {activeTab === "activity" && (
                  <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
                    <h4 className="font-semibold mb-3 text-base sm:text-lg">Activity Logs</h4>
                    <p className="text-sm text-gray-400">
                      Recent activity will show up here.
                    </p>
                  </div>
                )}

                {activeTab === "admin" && (
                  <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
                    <h4 className="font-semibold mb-3 text-base sm:text-lg">Admin Actions</h4>
                    <p className="text-sm text-gray-400">
                      Actions like Disable, Flag, or Reset password.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column - Converts to stacked cards on mobile */}
      <aside className="w-full md:w-[320px] md:sticky md:top-6 md:h-screen md:overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 md:p-0 md:ml-6 space-y-4 md:space-y-4">
        <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Quick Info</h4>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-[#3b261b] flex-shrink-0">
              <img
                src={user.avatar}
                alt="avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm truncate">{user.name}</p>
              <p className="text-xs text-gray-400 truncate">{user.title}</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-gray-300 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Location</span>
              <span>{user.details.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Experience</span>
              <span>{user.details.experience}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Match</span>
              <span className="text-orange-400 font-semibold">{user.score}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Contact</h4>
          <p className="text-xs sm:text-sm text-gray-300 mb-3 truncate">{user.email}</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveButton("message")}
              className={buttonStyle("message")}
            >
              Message
            </button>
            <button
              onClick={() => setActiveButton("call")}
              className={buttonStyle("call")}
            >
              Call
            </button>
          </div>
        </div>

        <div className="bg-[#1a0f0b] border border-[#3b261b] p-4 sm:p-5 rounded-2xl">
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Actions</h4>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setActiveButton("verifyDocs")}
              className={buttonStyle("verifyDocs")}
            >
              Verify Documents
            </button>
            <button
              onClick={() => setActiveButton("suspend")}
              className={buttonStyle("suspend")}
            >
              Disable User
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
