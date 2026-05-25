import React, { useState } from "react";
import {
  MdOutlineNotificationsNone,
} from "react-icons/md";

import { IoSearch } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi2";

export default function Company() {
  const [currentPage, setCurrentPage] = useState(1);
  const[verified,setverified]=useState("");
  const[industry,setindustry]=useState("");
  const[location,setlocation]=useState("");
  const[size,setsize]=useState("");

  const ITEMS_PER_PAGE = 4;

  const companies = [
    { name: "Stripe", domain: "stripe.com", industry: "FinTech", recruiters: 3, status: "Active", documents: 5, logo: "https://logo.clearbit.com/stripe.com" },
    { name: "Google", domain: "google.com", industry: "SaaS", recruiters: 2, status: "Prospecting", documents: 2, logo: "https://logo.clearbit.com/google.com" },
    { name: "Microsoft", domain: "microsoft.com", industry: "Enterprise Software", recruiters: 1, status: "Active", documents: 12, logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Microsoft", domain: "microsoft.com", industry: "Enterprise Software", recruiters: 1, status: "Active", documents: 12, logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Microsoft", domain: "microsoft.com", industry: "Enterprise Software", recruiters: 1, status: "Active", documents: 12, logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Microsoft", domain: "microsoft.com", industry: "Enterprise Software", recruiters: 1, status: "Active", documents: 12, logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Microsoft", domain: "microsoft.com", industry: "Enterprise Software", recruiters: 1, status: "Active", documents: 12, logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Airbnb", domain: "airbnb.com", industry: "Hospitality", recruiters: 1, status: "Inactive", documents: 3, logo: "https://logo.clearbit.com/airbnb.com" },
  ];

  const user = { avatar: "https://i.pravatar.cc/150?img=12" };

  const totalPages = Math.ceil(companies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCompanies = companies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function handleverifiedchange(e){
    setverified(e.target.value);
  }

  function handleindustrychange(e){
    setindustry(e.target.value);
  }

  function handlelocationchange(e){
    setlocation(e.target.value);
  }
  function handlesizechange(e){     
    setsize(e.target.value);
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
            {/* Search - Full width on mobile */}
            <div className="flex-1 max-w-xs sm:max-w-none lg:w-72">
              <div className="relative w-full">
                <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#24140F] border-[#3b261b] text-white placeholder-gray-400 text-sm"
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200">Companies List</h1>  
          <button className="w-full sm:w-auto px-6 h-10 bg-orange-400 border border-orange-600 rounded-2xl text-center hover:bg-orange-500 hover:font-bold text-sm">
            Add Company
          </button>
        </div>

        {/* Filters */}
        <div className="flex p-4 mb-6">
          <div className="flex flex-col bg-[#1A0F0A] w-full border border-[#3b261b] rounded-2xl p-2 sm:p-4 lg:p-4">
            <input 
              type="text"
              placeholder="Search Here...."
              className="w-full bg-[#2a160f] rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4 text-sm"
            />
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-5 justify-between sm:justify-start overflow-x-auto pb-2 scrollbar-hide">
              <select
                value={verified}
                onChange={handleverifiedchange}
                className="w-full sm:w-24 lg:w-32 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Verified</option>
                <option value="verified">Verified</option>
                <option value="unverified">Not verified</option>
              </select>
              <select
                value={industry}
                onChange={handleindustrychange}
                className="w-full sm:w-24 lg:w-32 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Industry</option>
                <option value="fintech">FinTech</option>
                <option value="saas">SaaS</option>
              </select>
              <select
                value={location}
                onChange={handlelocationchange}
                className="w-full sm:w-24 lg:w-32 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Location</option>
                <option value="india">India</option>
                <option value="srilanka">Sri Lanka</option>
              </select>
              <select
                value={size}
                onChange={handlesizechange}
                className="w-full sm:w-24 lg:w-32 bg-[#2a160f] text-gray-400 rounded-2xl px-3 py-2 bg-[#1A0F0A] text-gray-300 text-xs sm:text-sm flex-shrink-0 whitespace-nowrap"
              >
                <option value="">Size</option>
                <option value="small">Small</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#2a160f] border border-[#3b261b] rounded-2xl p-4 sm:p-6 overflow-hidden">
          {/* Mobile Header - Hidden on desktop */}
          <div className="grid grid-cols-1 sm:hidden text-gray-400 font-semibold px-4 py-3 border-b border-[#3b261b] mb-4">
            <span>Companies</span>
          </div>

          {/* Desktop Header */}
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] lg:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] text-gray-400 font-semibold px-4 py-3 border-b border-[#3b261b] hidden sm:grid">
            <span>COMPANY</span>
            <span>INDUSTRY</span>
            <span>RECRUITERS</span>
            <span>STATUS</span>
            <span>DOCUMENTS</span>
            <span></span>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-4">
            {paginatedCompanies.map((item, index) => (
              <div key={index} className="bg-[#24140F] border border-[#3b261b] rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <img src={item.logo} className="w-10 h-10 rounded-full bg-white p-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-400 truncate">{item.domain}</p>
                    </div>
                  </div>
                  <FiMoreHorizontal className="text-gray-400 cursor-pointer mt-1 flex-shrink-0" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-400 block mb-1">Industry</span>
                    <span className="text-gray-300">{item.industry}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs w-fit ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Recruiters</span>
                    <div className="flex -space-x-1">
                      {[...Array(Math.min(item.recruiters, 3))].map((_, i) => (
                        <img key={i} src={`https://i.pravatar.cc/150?img=${i + 10}`} className="w-5 h-5 rounded-full border border-[#2a160f]" />
                      ))}
                      {item.recruiters > 3 && <span className="w-5 h-5 bg-gray-600 rounded-full text-xs flex items-center justify-center text-white font-bold">+{item.recruiters-2}</span>}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Documents</span>
                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <HiDocumentText className="text-sm" /> {item.documents}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Rows */}
          <div className="hidden sm:block">
            {paginatedCompanies.map((item, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] lg:grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr_0.5fr] items-center px-4 py-4 border-b border-[#3b261b] last:border-none hover:bg-[#24140F] transition-colors">
                <div className="flex items-center gap-3 sm:col-span-1">
                  <img src={item.logo} className="w-9 h-9 rounded-full bg-white p-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-xs text-gray-400 truncate">{item.domain}</p>
                  </div>
                </div>

                <p className="hidden sm:block text-sm text-gray-300 truncate">{item.industry}</p>

                <div className="flex -space-x-2">
                  {[...Array(Math.min(item.recruiters, 3))].map((_, i) => (
                    <img key={i} src={`https://i.pravatar.cc/150?img=${i + 10}`} className="w-7 h-7 rounded-full border border-[#2a160f]" />
                  ))}
                  {item.recruiters > 3 && <span className="w-7 h-7 bg-gray-600 rounded-full text-xs flex items-center justify-center text-white font-bold ml-1">+{item.recruiters-2}</span>}
                </div>

                <span className={`text-xs px-3 py-1 rounded-full w-fit ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <HiDocumentText /> {item.documents}
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
