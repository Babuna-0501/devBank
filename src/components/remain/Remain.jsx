import { useState }  from 'react'
import "./remain.scss";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

const Remain = () => {
  const [data, setData] = useState({
    datasets: [{
      label: 'vote',
      data: [12, 19, 3, 5, 2, 23],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: '#ddd'
  }],
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
})
  return (
    <div className='remain'>   
      <h2>Зээл, хүүгийн өрийн үлдэгдэл /төгрөгөөр/</h2>
      <div className='remain_main'>
        <Doughnut className='donut' data={data}/>
        <table id="customers">
          <tr>
            <th></th>
            <th>Зээлдэгчийн нэр</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Königlich Essen</td>
            <td>Philip Cramer</td>
            <td>Germany</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>9</td>
            <td>North/South</td>
            <td>Simon Crowther</td>
            <td>UK</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
        </table>
      </div>
      
    </div>
  )
}

export default Remain;