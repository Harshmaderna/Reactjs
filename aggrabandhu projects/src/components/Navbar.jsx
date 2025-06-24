import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex gap-8">
        <div className="flex h-12 px-10 mt-5">
          <img
            src="https://aggrabandhuss.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FabssLogo.d9508beb.png&w=256&q=75"
            alt=""
          />
          <img
            src="https://aggrabandhuss.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwebsiteName.87f59f09.png&w=384&q=75"
            alt=""
          />
        </div>
        <div>
          <ul className="flex mt-8 gap-5 font-san font-medium">
            <li>Home</li>
            <li>About us</li>
            <li>Gallery</li>
            <li>Member List</li>
            <li>Donation List</li>
            <li>Rules & Regulations</li>
          </ul>
        </div>
        <div>
            <button className="mt-5 bg-orange-600 p-3 m-2 rounded-full border border-emerald-500 text-white cursor-pointer hover:bg-amber-700">
                Login / Apply membership
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
