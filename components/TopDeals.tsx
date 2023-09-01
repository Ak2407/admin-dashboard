import { topDealUsers } from "@/data";
import Image from "next/image";
import React from "react";

const TopDeals = () => {
  return (
    <div className=" h-full rounded-lg bg-secondary p-4 flex flex-col gap-10">
      <h1 className="text-4xl text-primary font-extrabold">Top Deals</h1>
      <div className=" mt-6 flex flex-col gap-4">
        {topDealUsers.map((user) => (
          <div className=" flex flex-row justify-between gap-10" key={user.id}>
            <div className="flex gap-6">
              <Image
                src={user.img}
                width={50}
                height={10}
                alt=""
                className="sm:inline hidden"
              />
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold">{user.username}</span>
                <span className="text-sm sm:inline hidden">{user.email}</span>
              </div>
            </div>
            <span className="font-extrabold hidden  xsm:inline  ">
              ${user.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
