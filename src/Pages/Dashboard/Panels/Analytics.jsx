import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2"; // Import multiple chart types
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics = () => {
  const [chartType, setChartType] = useState("bar"); // State for chart type selection
  const [timePeriod, setTimePeriod] = useState("monthly"); // State for time period selection

  // Sample data for the charts based on the selected time period
  const getData = () => {
    switch (timePeriod) {
      case "monthly":
        return {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Sales Data",
              data: [17, 29, 80, 100, 156, 95, 400],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)", // January
                "rgba(54, 162, 235, 0.6)", // February
                "rgba(255, 206, 86, 0.6)", // March
                "rgba(75, 192, 192, 0.6)", // April
                "rgba(153, 102, 255, 0.6)", // May
                "rgba(255, 159, 64, 0.6)", // June
                "rgba(255, 165, 0, 0.6)", // July
              ],
            },
          ],
        };
      case "yearly":
        return {
          labels: ["2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Sales Data",
              data: [700, 800, 600, 900],
              backgroundColor: "rgba(255, 165, 0, 0.6)", // Single color for yearly data
            },
          ],
        };
      case "lifetime":
        return {
          labels: ["Total"],
          datasets: [
            {
              label: "Sales Data",
              data: [3000],
              backgroundColor: ["rgba(75, 192, 192, 0.6)"], // Single color for lifetime data
            },
          ],
        };
      default:
        return {};
    }
  };

  const data = getData(); // Get the current data based on selected time period

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow manual control of dimensions
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Sales Data (${
          timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)
        })`,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-xl font-semibold text-orange-600">Analytics</h1>
        <h1 className="text-3xl font-medium pb-1">Visit's Analytics</h1>
        <p className="w-full max-w-md">
          This shows all the visits we had each day/month/year/lifetime.
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-6 py-10">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <h1 className="text-md font-medium">Chart Type:</h1>
          <select
            className="border rounded p-1"
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <h1 className="text-md font-medium">Time Period:</h1>
          <select
            className="border rounded p-1"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </div>
      </div>

      <div className="w-full flex items-center justify-center sm:p-10">
        {chartType === "bar" && (
          <div className="w-full md:w-[600px] h-[400px]">
            <Bar data={data} options={options} />
          </div>
        )}
        {chartType === "line" && (
          <div className="w-full md:w-[600px] h-[400px]">
            <Line data={data} options={options} />
          </div>
        )}
        {chartType === "pie" && (
          <div className="w-full md:w-[600px] h-[400px]">
            <Pie data={data} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
