import React, { useState } from "react";
import {
  MdOutlineNotificationsNone,
} from "react-icons/md";

import { IoSearch } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi2";

export default function Jobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const[status,setstatus]=useState("");
  const[company,setcompany]=useState("");
  const[salary,setsalary]=useState("");
  const[job,setjob]=useState("");
  const[skills,setskills]=useState("");

  const ITEMS_PER_PAGE = 4;

  const companies = [
    { title: "Senior Product Engineer",  company: "Innovate Inc", applicants: 3, status: "Active", documents: 5, posted:"2024-10-10" },
    { title: "Lead Frontend Engineer", company: "Creative Solution", applicants: 2, status: "Prospecting", documents: 2,posted:"2024-10-10" },
    { title: "Marketing Manager", company: "DataDriven Co", applicants: 1, status: "Active", documents: 12, posted:"2024-10-10" },
    { title: "Data Scientist",  company: "FutureTech", applicants: 1, status: "Active", documents: 12, posted:"2024-10-10" },
    { title: "UX Researcher", company: "Enterprise Software", applicants: 1, status: "Active", documents: 12, posted:"2024-10-10" },
    { title: "Frontend Developer",  company: "FutureTech", applicants: 1, status: "Active", documents: 12, posted:"2024-10-10" },
    { title: "Backend Developer",  company: "Enterprise Software", applicants: 1, status: "Active", documents: 12, posted:"2024-10-10" },
    { title: "Product Manager",  company: "FutureTech", applicants: 1, status: "Inactive", documents: 3, posted:"2024-10-10" },
  ];

  const user = { avatar: "https://i.pravatar.cc/150?img=12" };

  const totalPages = Math.ceil(companies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCompanies = companies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function handlestatuschange(e){
    setstatus(e.target.value);
  }

  function handlecompanychange(e){
    setcompany(e.target.value);
  }

  function handlesalarychange(e){
    setsalary(e.target.value);
  }
  function handlejobchange(e){     
    setjob(e.target.value);
  }
  function handleskillschange(e){
    setskills(e.target.value);
  }

  const getStatusColor = (status) => {
    if (status === "Active") return "bg-green-600";
    if (status === "Prospecting") return "bg-yellow-600";
    if (status === "Inactive") return "bg-red-600";
    return "bg-gray-600";
  };

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-white flex flex-col lg:flex-row">
      <main className="flex-1 p-4 sm:p-6 overflow-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-2 sm:px-4 lg:px-6 py-4 border-b border-[#3b261b] mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto mb-3 lg:mb-0">
            <div className="flex-1 max-w-xs sm:max-w-none lg:w-72">
              <div className="relative w-full">
                <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search for jobs, candidates..."
                  className="w-full pl-10 pr-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#24140F] border-[#3b261b] text-white placeholder-gray-400 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="relative p-2 rounded-md hover:bg-white/5 bg-[#3a150d] text-orange-400">
              <MdOutlineNotificationsNone size={18} />
              <span className="absolute -top-1 -right-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-orange-500 text-[8px] sm:text-[10px] flex items-center justify-center">
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

        {/* Title & Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200">Jobs</h1>  
          <button className="w-full sm:w-auto px-6 h-10 bg-orange-400 border border-orange-600 rounded-2xl text-center hover:bg-orange-500 hover:font-bold text-sm">
            + Create New Job
          </button>
        </div>

        {/* Filters */}
        <div className="flex mb-6">
          <div className="flex flex-col bg-[#1A0F0A] w-full p-2 sm:p-4 border border-[#3b261b] rounded-2xl">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-5 p-2 sm:p-4 justify-between sm:justify-start overflow-x-auto pb-2 scrollbar-hide">
              <select
                value={status}
                onChange={handlestatuschange}
                className="w-full sm:w-24 lg:w-28 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="prospecting">Prospecting</option>
              </select>
              <select
                value={company}
                onChange={handlecompanychange}
                className="w-full sm:w-24 lg:w-28 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Company</option>
                <option value="Innovate Inc">Innovate Inc</option>
                <option value="FutureTech">FutureTech</option>
              </select>
              <select
                value={salary}
                onChange={handlesalarychange}
                className="w-full sm:w-24 lg:w-28 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Salary</option>
                <option value="60">60k</option>
                <option value="100">100k</option>
              </select>
              <select
                value={job}
                onChange={handlejobchange}
                className="w-full sm:w-24 lg:w-28 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Job Type</option>
                <option value="parttime">Part Time</option>
                <option value="fulltime">Full Time</option>
              </select>
              <select
                value={skills}
                onChange={handleskillschange}
                className="w-full sm:w-24 lg:w-28 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Skills</option>
                <option value="c++">C++</option>
                <option value="python">Python</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#2a160f] border border-[#3b261b] rounded-2xl p-4 sm:p-6 overflow-hidden">
          {/* Mobile Header - Hidden on desktop */}
          <div className="grid grid-cols-1 sm:hidden text-gray-400 font-semibold px-4 py-3 border-b border-[#3b261b] mb-4">
            <span>Jobs</span>
          </div>

          {/* Desktop Header */}
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] lg:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] text-gray-400 font-semibold px-4 py-3 border-b border-[#3b261b] hidden sm:grid">
            <span>Title</span>
            <span>Company</span>
            <span>Applicants</span>
            <span>Status</span>
            <span>Posted</span>
            <span>Actions</span>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-4">
            {paginatedCompanies.map((item, index) => (
              <div key={index} className="bg-[#24140F] border border-[#3b261b] rounded-xl p-4 hover:bg-[#2a160f] transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm mb-1 truncate">{item.title}</p>
                    <p className="text-xs text-gray-400 mb-2 truncate">{item.company}</p>
                  </div>
                  <FiMoreHorizontal className="text-gray-400 cursor-pointer mt-1 flex-shrink-0" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <span className="text-gray-400 block mb-1">Applicants</span>
                    <span className="font-semibold text-gray-300">{item.applicants}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs w-fit ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Posted</span>
                  <span className="text-sm text-gray-300 font-semibold">{item.posted}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Rows */}
          <div className="hidden sm:block">
            {paginatedCompanies.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] lg:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] items-center px-4 py-4 border-b border-[#3b261b] last:border-none hover:bg-[#24140F] transition-colors">
                <div className="flex items-center gap-3 sm:col-span-1">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm truncate">{item.title}</p>
                  </div>
                </div>

                <p className="hidden sm:block text-sm text-gray-300 truncate">{item.company}</p>

                <div className="flex -space-x-2 justify-center sm:justify-start">
                  <span className=" text-l px-2 py-1 font-semibold text-white">{item.applicants}</span>
                </div>

                <span className={`text-xs px-3 py-1 rounded-full w-fit ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>

                <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold justify-center sm:justify-start">
                  {item.posted}
                </div>

                <FiMoreHorizontal className="text-gray-400 cursor-pointer justify-self-end" />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 rounded-md bg-[#3a150d] text-orange-400 disabled:opacity-40 hover:bg-orange-500 hover:font-bold hover:text-[#3a150d] w-full sm:w-auto text-sm"
            >
              Previous
            </button>

            <span className="text-xs sm:text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 rounded-md bg-[#3a150d] text-orange-400 disabled:opacity-40 hover:bg-orange-500 hover:font-bold hover:text-[#3a150d] w-full sm:w-auto text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
