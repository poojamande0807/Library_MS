import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AvalibilityBooksChart = ({ availableBooksData }) => {
  const availablePercentage = parseFloat(availableBooksData[0].availble);
  const borrowedPercentage = parseFloat(availableBooksData[1].borrowed);

  const chartData = {
    labels: ["Available", "Borrowed"],
    datasets: [
      {
        data: [availablePercentage, borrowedPercentage],
        backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-div">
      <h1>Book Availability</h1 >
      <Pie data={chartData} />
    </div>
  );
};

export default AvalibilityBooksChart;
