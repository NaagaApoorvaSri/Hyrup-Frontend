import React, { useState } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Companydetails() {
  const company = {
    name: "Invocate Inc.",
    website: "www.invocate.com",
    industry: "Information Technology",
    status: "Verified",
  };
  const getStatusColor = (status) => {
    if (status === "Verified") return "bg-green-600";
    if (status === "Pending") return "bg-yellow-600";
    if (status === "Not Verified") return "bg-red-600";
    return "bg-gray-600";
  };
  const documents = [
    {
      name: "Company_Charter.pdf",
      url: "/documents/Company_Charter.pdf",
    },
    {
      name: "Tax_Info_2023.doc",
      url: "/documents/Tax_Info_2023.doc",
    },
    {
      name: "Tax_Info_2023.doc",
      url: "/documents/Tax_Info_2023.doc",
    },
  ];

  const details = [
    { name: "John Doe", email: "john.doe@example.com", jobposted: 5, hires: 2 },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      jobposted: 3,
      hires: 1,
    },
    {
      name: "Charlie Brown",
      email: "charle@gmail.com",
      jobposted: 10,
      hires: 5,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      jobposted: 3,
      hires: 1,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      jobposted: 3,
      hires: 1,
    },
  ];
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalpages = Math.ceil(details.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDetails = details.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-white flex flex-col lg:flex-row">
      <main className="flex-1 p-2 sm:p-4 lg:p-6 overflow-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-2 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-[#3b261b] mb-3 sm:mb-4 lg:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full lg:w-auto mb-2 sm:mb-3 lg:mb-0 order-2 lg:order-1">
            <div className="flex-1 max-w-xs sm:max-w-md lg:w-72">
              <div className="relative w-full">
                <IoSearch className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#24140F] border-[#3b261b] text-white placeholder-gray-400 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 order-1 lg:order-2 mb-2 lg:mb-0">
            <button className="relative p-1.5 sm:p-2 rounded-md hover:bg-white/5 bg-[#3a150d] text-orange-400">
              <MdOutlineNotificationsNone size={16} sm:size={18} />
              <span className="absolute -top-0.5 sm:-top-1 -right-0.5 h-2.5 sm:h-3 w-2.5 sm:w-3 sm:h-4 sm:w-4 rounded-full bg-orange-500 text-[7px] sm:text-[8px] lg:text-[10px] flex items-center justify-center">
                1
              </span>
            </button>

            <div className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 rounded-full overflow-hidden border border-[#3b261b]">
              <img
                src="https://i.pravatar.cc/100"
                alt="admin"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title & Action Buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-3 sm:p-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-200 font-bold leading-tight">Companies Details</h1>
          <div className="flex flex-row sm:flex-row gap-2 sm:gap-3 lg:gap-4 w-full lg:w-auto justify-center">
            <button className="flex-1 lg:flex-none lg:w-56 xl:w-64 h-9 sm:h-10 bg-[#1A0F0A] border border-[#3b261b] rounded-2xl text-center hover:font-bold text-xs sm:text-sm px-3">
              Request more documents
            </button>
            <button className="w-20 sm:w-24 h-9 sm:h-10 bg-[#2a160f] border border-[#3b261b] rounded-2xl text-center hover:font-bold text-xs sm:text-sm px-2">
              Reject
            </button>
            <button className="w-20 sm:w-24 h-9 sm:h-10 bg-orange-400 border border-orange-600 rounded-2xl text-center hover:bg-orange-500 hover:font-bold text-xs sm:text-sm px-2">
              Approve
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="border border-[#3b261b] p-3 sm:p-4 lg:p-6 bg-[#160B08] rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6">
              {/* Company Info */}
              <div className="bg-[#1a0f0b] border border-[#3b261b] p-3 sm:p-4 lg:p-5 rounded-2xl">
                <p className="text-base sm:text-lg lg:text-xl font-bold pb-2 sm:pb-3">Company Information</p>

                <p className="text-xs sm:text-sm text-gray-400 mb-1">Company Name</p>
                <p className="font-bold pb-2 sm:pb-3 text-xs sm:text-sm lg:text-base truncate">{company.name}</p>

                <p className="text-xs sm:text-sm text-gray-400 mb-1">Website</p>
                <p className="text-orange-500 font-bold pb-2 sm:pb-3 text-xs sm:text-sm lg:text-base truncate">
                  {company.website}
                </p>

                <p className="text-xs sm:text-sm text-gray-400 mb-1">Industry</p>
                <p className="font-bold pb-2 sm:pb-3 text-xs sm:text-sm lg:text-base truncate">{company.industry}</p>

                <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Status</p>
                <span
                  className={`text-xs px-2 sm:px-3 py-1 rounded-full ${getStatusColor(company.status)}`}
                >
                  {company.status}
                </span>
              </div>

              {/* Documents */}
              <div className="bg-[#1a0f0b] border border-[#3b261b] p-3 sm:p-4 lg:p-5 rounded-2xl">
                <p className="text-base sm:text-lg lg:text-xl font-bold pb-3 sm:pb-4">Documents</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-6">
                  {documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer group"
                    >
                      <div className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-xl bg-[#3a2418] flex items-center justify-center group-hover:bg-[#4a2c1c] transition-all duration-200 flex-shrink-0">
                        <IoDocumentTextOutline className="text-white text-lg sm:text-xl lg:text-2xl" />
                      </div>
                      <p className="text-xs text-gray-300 text-center max-w-[70px] sm:max-w-[80px] lg:max-w-[90px] break-words group-hover:text-orange-400 line-clamp-2 px-1">
                        {doc.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-4">
              <div className="bg-[#1a0f0b] border border-[#3b261b] p-3 sm:p-4 lg:p-5 rounded-2xl min-h-[400px]">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-3 sm:mb-4 gap-2 sm:gap-3 lg:gap-0">
                  <p className="text-base sm:text-lg lg:text-xl font-bold">Recruiters</p>
                  <input
                    placeholder="Search Recruiters..."
                    className="w-full lg:w-64 border border-[#3b261b] rounded-2xl p-2 sm:p-3 bg-transparent text-sm placeholder-gray-500"
                  />
                </div>

                {/* Mobile Recruiters Cards */}
                <div className="lg:hidden space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {paginatedDetails.map((item, index) => (
                    <div key={index} className="bg-[#2a160f] border border-[#3b261b] rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                        <p className="font-medium text-sm">{item.name}</p>
                      </div>
                      <p className="text-xs text-gray-400 mb-2 truncate">{item.email}</p>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs">
                        <div>
                          <span className="text-gray-400 block mb-1">Jobs Posted</span>
                          <span className="font-semibold text-gray-300 text-sm">{item.jobposted}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block mb-1">Hires</span>
                          <span className="font-semibold text-gray-300 text-sm">{item.hires}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Recruiters Table */}
                <div className="hidden lg:block">
                  <div className="bg-[#2a160f] border border-[#3b261b] rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-4 text-gray-400 px-4 py-3 border-b border-[#3b261b] text-sm">
                      <span>NAME</span>
                      <span>EMAIL</span>
                      <span>JOB POSTED</span>
                      <span>HIRES</span>
                    </div>

                    {paginatedDetails.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-4 p-4 border-b border-[#3b261b] hover:bg-[#24140F] transition-colors text-sm"
                      >
                        <span className="font-medium truncate">{item.name}</span>
                        <span className="truncate">{item.email}</span>
                        <span>{item.jobposted}</span>
                        <span>{item.hires}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-5 sm:mt-6 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#3b261b]">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-3 sm:px-4 py-2 rounded-md bg-[#3a150d] text-orange-400 disabled:opacity-40 hover:bg-orange-500 hover:font-bold hover:text-[#3a150d] w-full sm:w-auto text-xs sm:text-sm flex-1 sm:flex-none"
                  >
                    Previous
                  </button>

                  <span className="text-xs sm:text-sm text-gray-400 min-w-[100px] text-center">
                    Page {currentPage} of {totalpages}
                  </span>

                  <button
                    disabled={currentPage === totalpages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-3 sm:px-4 py-2 rounded-md bg-[#3a150d] text-orange-400 disabled:opacity-40 hover:bg-orange-500 hover:font-bold hover:text-[#3a150d] w-full sm:w-auto text-xs sm:text-sm flex-1 sm:flex-none"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
