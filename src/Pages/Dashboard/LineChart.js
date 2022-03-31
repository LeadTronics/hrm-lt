import React, {useEffect, useState} from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import Chart from 'chart.js/auto'
import { INTERVIEW_LIST } from '../../endpoint'
import axios from 'axios'
// import moment from 'moment'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = (props) => {
 
  const [interview, setinterview] = useState([]);
  const [labeldate, setlabelDate] = useState([]);
  useEffect(() => {
    //Interview Table data
    const user = JSON.parse(localStorage.getItem('token'));
    axios
      .get(INTERVIEW_LIST, { headers: { Authorization: `Bearer ${user}` } })
      .then((res) => {
        console.log(res.data);
        setinterview(res.data);
        console.log(res.data.map((d) => (d.interviewDate) ));
        setlabelDate(res.data.map((d) => (d.interviewDate) ));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  console.log(labeldate);
    const data = {
        
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        // labels: [props.month],
        // labels: [interview.map((d) => {moment(d.interviewDate).format('MMM')} )],
        
        datasets: [
          {
          label: "Scheduled",
          
          data: [10,20,14],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        },
        {
          label: "Hired",
           
          data:[7,15,10],
          backgroundColor: [
            'rgb(129 199 132)',
          ],
          borderColor: [
            'rgb(27 94 32)',
          ],
          borderWidth: 1
        },
        {
          label: "Rejected",
          
          data:[3,2,4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        }
      ]
      };
      
      const options = {
        type: 'bar',
        data: data,
        scales: {
                y: {
                  beginAtZero: true,
                  min: 0,
                  max: 20,
                  stepSize: 2,
                }
              },
        responsive: true,
        plugins: {
          title: {
            display: true,
            // text: 'Chart.js Bar Chart',
          },
        },
      };
      
  return (
    <div>
         <Bar data={data} options={options}/>
    </div>
  )
}
export default LineChart
