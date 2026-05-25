import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function UsersList() {

  const users = [
    {
      name: "Olivia Rhye",
      role: "Product Designer",
      skills: ["Figma", "UI/UX", "Prototyping"],
      score: "92%",
      verified: true,
    },
    {
      name: "Phoenix Baker",
      role: "Software Engineer",
      skills: ["React", "Node.js", "SQL"],
      score: "88%",
      verified: true,
    },
    {
      name: "Daniel Carter",
      role: "Frontend Developer",
      skills: ["HTML", "CSS", "JS"],
      score: "86%",
      verified: true,
    },
    {
      name: "Sasha Grey",
      role: "Marketing Specialist",
      skills: ["SEO", "Copywriting"],
      score: "83%",
      verified: false,
    },
    {
      name: "Lana Steiner",
      role: "Data Analyst",
      skills: ["Python", "Tableau"],
      score: "85%",
      verified: false,
    },
    {
      name: "Ava Brooks",
      role: "UI Designer",
      skills: ["Figma", "Illustrator"],
      score: "91%",
      verified: true,
    },
    {
      name: "John Wilson",
      role: "Backend Engineer",
      skills: ["Node.js", "MongoDB"],
      score: "82%",
      verified: true,
    },
  ];

  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const firstIndex = (page - 1) * rowsPerPage;
  const currentUsers = users.slice(firstIndex, firstIndex + rowsPerPage);

  return (
    <div className="flex h-screen w-full bg-[#1A0F0A] text-white overflow-hidden">

      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
          <h1 className="text-xl md:text-2xl font-semibold">Users List</h1>

          <div className="flex items-center gap-3">
            <div className="relative w-72">
              {/* Icon */}
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

              {/* Input */}
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <button className="h-10 w-10 rounded-full bg-[#2b1810] flex items-center justify-center">
                🔔
              </button>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-500 text-[10px] flex items-center justify-center">
                3
              </span>
            </div>

            <img
              src="https://i.pravatar.cc/35"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <div className="bg-[#2b1810] border border-[#3b261b] rounded-2xl p-6 space-y-4">
              <h2 className="text-xl font-semibold">Filters</h2>

              <div>
                <label className="text-sm">Role</label>
                <select className="w-full mt-1 bg-[#1A0F0A] border border-[#3b261b] rounded-lg px-3 py-2 text-sm">
                  <option>All Roles</option>
                </select>
              </div>

              <div>
                <p className="text-sm">Verification</p>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="accent-orange-500"
                      defaultChecked
                    />
                    College Verified
                  </label>

                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-orange-500" />
                    Skills Verified
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm">Skills</p>
                <input
                  type="text"
                  placeholder="e.g. Figma, React"
                  className="w-full bg-[#1A0F0A] border border-[#3b261b] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">
                  Apply Filters
                </button>
                <button className="border border-[#3b261b] px-4 py-2 rounded-lg text-sm">
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="bg-[#2b1810] border border-[#3b261b] rounded-2xl p-4 md:p-6 overflow-x-auto">
              {currentUsers.map((u, index) => (
                <UserRow
                  key={index}
                  name={u.name}
                  role={u.role}
                  skills={u.skills}
                  score={u.score}
                  verified={u.verified}
                />
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-4 text-sm opacity-90 gap-3">
              <p className="text-center md:text-left">
                Page {page} of {totalPages}
              </p>

              <div className="flex gap-2 justify-center md:justify-end">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="px-4 py-1 border border-[#3b261b] rounded-lg disabled:opacity-40"
                >
                  Previous
                </button>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="px-4 py-1 border border-[#3b261b] rounded-lg disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function UserRow({ name, role, skills, score, verified }) {
  return (
    <div className="py-4 border-b border-[#3b261b] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <div className="md:col-span-3 flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>

      <div className="md:col-span-4 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="bg-[#3b261b] px-2 py-1 rounded text-xs">
            {s}
          </span>
        ))}
      </div>

      <div className="md:col-span-2 text-orange-400 font-semibold">{score}</div>

      <div
        className={`md:col-span-2 font-semibold ${
          verified ? "text-green-400" : "text-red-400"
        }`}
      >
        {verified ? "Yes" : "No"}
      </div>

      <div className="md:col-span-1 flex justify-end">
        <button>⋮</button>
      </div>
    </div>
  );
}
