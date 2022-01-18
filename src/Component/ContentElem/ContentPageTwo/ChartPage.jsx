import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const style = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  border: "solid 2px black",
  borderColor: "#6f47d7",
  backgroundColor: "white",
  zIndex: "10"
};

const data = [
  {
    subject: "Кол-во отказов",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "ИО",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Ср ВБР ФГ",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Кол-во тестов",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

const dataTwo = [
  {
    name: "1",
    uv: 553,
    amt: 2400
  },
  {
    name: "2",
    uv: 123,
    amt: 2210
  },
  {
    name: "3",
    uv: 754,
    amt: 2290
  },
  {
    name: "4",
    uv: 565,
    amt: 2000
  },
  {
    name: "5",
    uv: 947,
    amt: 2181
  },
  {
    name: "6",
    uv: 352,
    amt: 2500
  },
  {
    name: "7",
    uv: 756,
    amt: 2100
  },
  {
    name: "8",
    uv: 463,
    amt: 2100
  },
  {
    name: "9",
    uv: 564,
    amt: 2100
  },
  {
    name: "10",
    uv: 342,
    amt: 2100
  }
];

export default function ChartPage() {
  return (
    <div style={style} className="container">
      <div className="row row-cols-2">
        <div className="col text-center" style={{ color: "green" }}>
          Зависимость среднего кол-ва отказов ФГ во времени
        </div>
        <div className="col" style={{ color: "green" }}>
          Зависимость интенсивности отказов от времени
        </div>
        <LineChart
          className="col"
          width={500}
          height={300}
          data={dataTwo}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <LineChart
          className="col"
          width={500}
          height={300}
          data={dataTwo}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <span className="col text-center" style={{ color: "green" }}>
          Зависимость вероятности безотказной работы от времени
        </span>
        <span className="col" style={{ color: "green" }}>
          График радар показателей ФГ
        </span>
        <LineChart
          className="col"
          width={500}
          height={300}
          data={dataTwo}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <ResponsiveContainer width="30%" height={300} className="col">
          <RadarChart cx="50%" cy="30%" outerRadius="50%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
