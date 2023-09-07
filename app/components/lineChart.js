// components/MyLineChart.tsx
"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  BarController,
  Tooltip,
  PointElement,
  BarElement,
  LinearScale
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  PointElement,
  BarController,
  BarElement,
  LinearScale,
  Tooltip
);

const MyLineChart = () => {
    return (
      <div>
        <Bar
          data={{
            labels: [
              "Floor-1",
              "Floor-2",
              "Floor-3",
              "Floor-4"
            ],
            datasets: [
              {
                data: [4, 1, 2, 6,],
                backgroundColor: "rgba(251, 0, 0, 0.25)",
                barThickness: 80,
                maxBarThickness: 80,
                minBarLength: 2,
              },
            ]
          }}
        />
      </div>
    );
  };
  export default MyLineChart;