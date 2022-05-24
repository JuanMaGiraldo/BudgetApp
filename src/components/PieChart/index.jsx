import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryLabel } from "victory";
import Title from "../../Utils/Title";
import { Container } from "./PieChart.styles";
import { numberWithCommas } from "../../helpers/money";
function PieChart({ title, data, limit }) {
  if (!data || !limit) return null;

  const dataToGraph = [...data];
  const dict = {};

  const newData = dataToGraph.reduce(
    (group, product) => {
      const { x } = product;

      if (!(x in dict)) dict[x] = group.length;
      const index = dict[x];

      group[index] = group[index] ?? { x, y: 0 };
      group[index]["y"] += parseInt(product.y);
      return group;
    },
    [{}]
  );
  newData.shift();
  const spent = newData.reduce((prev, current) => prev + current.y, 0);
  const remain = limit - spent;
  newData.push({ x: numberWithCommas(remain), y: remain });

  return (
    <Container>
      <Title title={title} />
      <svg width={300} height={300}>
        <VictoryPie
          standalone={false}
          colorScale={["cyan", "tomato", "orange", "white", "white"]}
          innerRadius={40}
          width={250}
          height={250}
          labelRadius={({ innerRadius }) => innerRadius + 10}
          data={newData}
          labels={({ datum }) => `${datum.x}`}
          style={{
            labels: {
              fill: "black",
              fontSize: 10,
              fontWeight: "bold",
            },
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          style={[
            {
              fontSize: 10,
              color: "#28323B",
              fontWeight: "600",
              lineHeight: 40,
            },
            { fontWeight: "600", fontSize: 16 },
          ]}
          x={250 * 0.5}
          y={250 * 0.525}
          text={"%"}
        />
      </svg>
      <Title title={`Limit: ${numberWithCommas(limit)}`} />
      <Title title={`Spent: ${numberWithCommas(spent)}`} />
      <Title title={`Remain: ${numberWithCommas(remain)}`} />
    </Container>
  );
}

export default PieChart;
