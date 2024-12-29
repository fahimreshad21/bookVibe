import React, { useEffect, useState } from "react";
import { getBookData } from "../../Utility/ReadBook";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell } from "recharts";

const PageRead = () => {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const allData = getBookData();
    setReadBooks(allData);
  }, []);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="w-full bg-base-200 flex items-center justify-center lg:p-20 text-xl font-black">
      <BarChart
        width={1800}
        height={600}
        data={readBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar></TriangleBar>}
          label={{ position: "top" }}
        >
          {readBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PageRead;
