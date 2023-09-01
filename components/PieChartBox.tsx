import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface ChartDataItem {
  name: string;
  value: number;
  color: string;
}

type Props = {
  title: string;
  chartData: ChartDataItem[];
};

const PieChartBox = (props: Props) => {
  return (
    <div className="h-full text-left w-full flex flex-col justify-between bg-secondary p-4 rounded-lg">
      <h1 className="text-4xl font-extrabold">{props.title}</h1>
      <div className="flex items-center justify-center w-full h-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={props.chartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {props.chartData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className=" hidden xsm:flex justify-between gap-2 flex-wrap sm:flex-nowrap  ">
        {props.chartData.map((item) => (
          <div className="flex flex-col  gap-2 items-center " key={item.name}>
            <div className="flex items-center gap-2  ">
              <div
                className=" w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span >{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
