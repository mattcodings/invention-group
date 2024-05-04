"use client";
import { getAllPendingInventions } from "../../utils/actions";
import DenyInvention from "@/components/admin/DenyInvention";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchInventions from "./SearchInventions";
import ApprovedInventionItem from "./ApprovedInventionItem";
const ApprovedInventionList = () => {
  const [inventions, setInventions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchInventions = async () => {
      const fetchedInventions = await getAllPendingInventions();
      setInventions(fetchedInventions);
    };
    fetchInventions();
  }, []);

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };
  const filteredInventions = inventions.filter((invention) => {
    return (
      invention.isApproved &&
      (invention.nameOfInvention.toLowerCase().includes(searchTerm) ||
        invention.nameOfInventor.toLowerCase().includes(searchTerm))
    );
  });
  if (inventions.length === 0) {
    return <h2 className="text-white p-2 text-3xl">No inventions submitted</h2>;
  }

  return (
    <div className="lg:w-[700px] md:w-[600px]">
      <h2 className="text-3xl text-center mb-8 font-bold text-neutral">
        Approved Invention List
      </h2>
      <SearchInventions onSearchChange={handleSearchChange} />
      <ul>
        {filteredInventions.length > 0
          ? filteredInventions.map((invention) => {
              if (invention.isApproved) {
                return <ApprovedInventionItem invention={invention} />;
              }
            })
          : inventions.map((invention) => {
              if (invention.isApproved) {
                return <ApprovedInventionItem invention={invention} />;
              }
            })}
      </ul>
    </div>
  );
};
export default ApprovedInventionList;
