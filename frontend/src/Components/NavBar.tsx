"use client";

import { Binoculars, PawPrint, ShoppingBasket, UserRound } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

const categories = {
  Pets: ["Dogs", "Fish", "Cats", "Birds", "Small Pets"],
  Foods: [
    "Food for Dogs",
    "Food for Cats",
    "Food for Fish",
    "Food for Birds",
    "Food for Small Pets",
  ],
  Supplies: [
    "Supplies for Dogs",
    "Supplies for Cats",
    "Supplies for Fish",
    "Supplies for Birds",
    "Supplies for Small Pets",
  ],
  Services: [
    "Grooming @Clinic",
    "Training",
    "Dog Walking",
    "Pet Sitting",
    "Pet Ride",
    "Mobile Grooming",
    "Home Veterinary Care",
  ],
  VetsCorner: [
    "Vet Dog Dry Food",
    "Vet Cat Dry Food",
    "Vet Dog Wet Food",
    "Vet Cat Wet Food",
  ],
};

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [selected, setSelected] = useState<string>("");
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    setSelected(category);
    setPopoverOpen(false); // Close popover when an option is selected
  };

  return (
    <div className="min-h-fit flex flex-col font-glory">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary">
        <div className="mx-auto">
          <div className="flex h-20 items-center justify-between gap-4 px-8">
            {/* Logo and Desktop Nav */}
            <div className="flex items-center gap-8">
              <a
                href="/"
                className="flex flex-row gap-2 font-bold text-xl text-secondary font-caveat"
              >
                <PawPrint className="h-5.5 w-5.5" />
                <span className="hidden px-1 lg:flex text-2xl text-secondary">
                  pet shop
                </span>
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center text-xl gap-3">
              {/* Action Buttons */}
              <Link
                className="flex flex-row items-center gap-2 rounded-sm py-1 px-1 md:px-3 text-textPrm font-semibold"
                to={""}
              >
                <Binoculars className="h-5.5 w-5.5" strokeWidth={3} />
                <span className="hidden px-1 lg:flex">Search</span>
              </Link>
              <Link
                to="/projects"
                className="flex flex-row items-center gap-2 rounded-sm py-1 px-1 md:px-3 text-textPrm font-semibold"
              >
                <ShoppingBasket className="h-5.5 w-5.5" strokeWidth={3} />
                <span className="hidden px-1 lg:flex">Cart</span>
              </Link>
              <Link
                to="dd"
                className="flex flex-row items-center gap-2 rounded-sm py-1 px-1 md:px-3 text-textPrm font-semibold"
              >
                <UserRound className="h-5.5 w-5.5 mr-0 lg:mr-2" strokeWidth={3} />
                <span className="hidden px-1 lg:flex">User</span>
              </Link>
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="grid grid-cols-[1fr_2fr] bg-background h-11 w-full">
            <div className="flex border-r justify-center items-center">
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-80">
                    {selected.length > 0 ? selected : "Select Category"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-2 bg-background shadow-md rounded-lg">
                  {Object.entries(categories).map(([category, subcategories]) => (
                    <div key={category} className="mb-2">
                      <p className="font-semibold text-textPrm">{category}</p>
                      <div className="pl-4 flex flex-col space-y-1">
                        {subcategories.map((sub, index) => (
                          <button
                            key={index}
                            className="text-textPrm hover:bg-hover px-2 py-1 rounded-md transition"
                            onClick={() => handleCategoryClick(sub)}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex justify-end items-center pr-11"></div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {location.pathname === "/" ? (
        <main className="flex-1 bg-heroBg bg-cover bg-center flex flex-col items-center justify-center relative font-caveat">
          {children}
        </main>
      ) : location.pathname === "/conversation" ? (
        <main className="flex-1 bg-secondary w-full h-full flex flex-col items-center justify-start">
          {children}
        </main>
      ) : location.pathname === "/welcome" ? (
        <main className="flex-1 bg-[#89a6ac] bg-cover bg-center flex flex-col items-center justify-center relative font-caveat">
          {children}
        </main>
      ) : (
        <main className="flex-1 bg-gray-300 w-full h-full p-4">{children}</main>
      )}
    </div>
  );
};

export default NavBar;
