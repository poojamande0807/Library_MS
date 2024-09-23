import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Extract unique genres and their counts
  const genreCounts = data.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  const genreLabels = Object.keys(genreCounts);
  const genreValues = Object.values(genreCounts);

  const chartData = {
    labels: genreLabels,
    datasets: [
      {
        data: genreValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // Red
          "rgba(54, 162, 235, 0.5)", // Blue
          "rgba(255, 206, 86, 0.5)", // Yellow
          "#50C878", // Green
          "rgba(153, 102, 255, 0.5)", // Purple
          "rgba(255, 159, 64, 0.5)", // Orange
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-div">
      <h1>Genre Distribution</h1>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
