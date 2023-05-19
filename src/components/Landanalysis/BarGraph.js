import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js/auto';
import styles from "./Landanalysis.module.css"

const BarGraph = (props) => {
  const chartRef = useRef(null);


const data = {
  labels: props.name,
  datasets: [{
    label: 'My First Dataset',
    data: props.mean
  }]
};

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
    });
  }, []);

  return <canvas className={styles.canvas} ref={chartRef} />;
};

export default BarGraph;
