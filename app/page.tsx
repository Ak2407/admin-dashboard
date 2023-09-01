"use client";

import BarChartBox from "@/components/BarChartBox";
import ChartBox from "@/components/ChartBox";
import Sidebar from "@/components/Sidebar";
import PieChartBox from "@/components/PieChartBox";
import TopDeals from "@/components/TopDeals";
import {
  totalUsers,
  totalProducts,
  totalRatio,
  totalRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
  PieChartBoxData,
  RevenueAnalyticsData,
} from "@/data";
import { Bar } from "recharts";
import BigChartBox from "@/components/BigChartBox";

const Home = () => {
  return (
    <div className="bg-primary flex">
      <Sidebar />
      <div className="p-8 grid gap-4 grid-cols-1 xl:grid-cols-4 w-full overflow-hidden">
        <div className="row-span-3">
          <TopDeals  />
        </div>
        <div>
          <ChartBox {...totalUsers} />
        </div>
        <div>
          <ChartBox {...totalProducts} />
        </div>
        <div className="row-span-3">
          <PieChartBox {...PieChartBoxData} />
        </div>
        <div>
          <ChartBox {...totalRatio} />
        </div>
        <div>
          <ChartBox {...totalRevenue} />
        </div>
        <div className=" hidden md:inline col-span-2 row-span-2">
          <BigChartBox {...RevenueAnalyticsData} />
        </div>
        <div>
          <BarChartBox {...barChartBoxVisit} />
        </div>
        <div>
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    </div>
  );
};

export default Home;
