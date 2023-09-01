import Link from "next/link";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";


type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="flex h-full text-quaternary p-8 rounded-lg border-[0.5px] border-quaternary justify-between">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1 className="text-2xl">{props.number}</h1>
        <Link href="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="flex flex-col justify-between w-[50%]">
        <div className="w-full h-full hidden xsm:inline">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="hidden xsm:flex flex-col text-right ">
          <span
            className={`font-extrabold ${props.percentage < 0 ? "text-red-500" : "text-green-500"}`}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
