import React from "react";
import {
  FiHome,
  FiBell,
  FiCalendar,
  FiShoppingCart,
  FiSettings,
  FiUser,
  FiArchive,
  FiTrello,
  FiCreditCard,
} from "react-icons/fi";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  icon: React.FC<any>;
}

export const menu: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: FiHome,
  },
  {
    id: 2,
    title: "Notification",
    link: "/",
    icon: FiBell,
  },
  {
    id: 3,
    title: "Calendar",
    link: "/",
    icon: FiCalendar,
  },
  {
    id: 4,
    title: "Cart",
    link: "/",
    icon: FiShoppingCart,
  },
  {
    id: 5,
    title: "Settings",
    link: "/",
    icon: FiSettings,
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "/user-1.png",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "/user-2.png",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "/user-3.png",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "/user-4.png",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "/user-5.png",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "/user-6.png",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "/user-7.png",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const totalUsers = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const totalProducts = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const totalRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const totalRatio = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const PieChartBoxData = {
  title: "Leads by Source",
  chartData: [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ],
};

export const RevenueAnalyticsData = {
  title: "Revenue Analytics",
  chartData: [
    {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: "Mon",
      books: 3000,
      clothes: 1398,
      electronic: 2210,
    },
    {
      name: "Tue",
      books: 2000,
      clothes: 9800,
      electronic: 2290,
    },
    {
      name: "Wed",
      books: 2780,
      clothes: 3908,
      electronic: 2000,
    },
    {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2181,
    },
    {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500,
    },
    {
      name: "Sat",
      books: 3490,
      clothes: 4300,
      electronic: 2100,
    },
  ],
};
