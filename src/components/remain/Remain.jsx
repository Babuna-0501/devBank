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
      data: [12, 19, 13, 15 ],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
      hoverBackgroundColor: '#ddd'
  }],
  labels: ['ХЭВИЙН', 'Blue', 'Yellow', 'Чанаргүй: Дотоод шалгалт хийх']
})
  return (
    <div className='remain'>   
      <h2>Зээл, хүүгийн өрийн үлдэгдэл /төгрөгөөр/</h2>
      <div className='remain_main'>
        <div>
          <Doughnut className='donut' data={data}/>
        </div>
        <span>
        <div>
          <fieldset>
            <label>Text:</label>
            <input type="text" class="text" value="CIRCLE TEXT"/>
            <label>Radius:</label>
            <input class="radius" type="range" min="100" max="1000" value="500"/>
          </fieldset>
        </div><div class="curved-text">CIRCLE TEXT</div>
          <span>Чанаргүй: Дотоод шалгалт хийх</span>
          <span>Хэвийн</span>
          <span>Анхаарал хандуулах</span>
          <span>Чанаргүй: Шүүхэд нэхэмжлэл гаргасан</span>
        </span>
        <div>
          <table id="customers">
            <tr className='tr_wrapper'>
              <th></th>
              <th className='thhh'>Зээлдэгчийн нэр</th>
              <th>Contact</th>
              <th>Country</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <th className='thh'></th>
              <th className='thh'></th>
              <th className='thh'>Contact</th>
              <th className='thh'>Country</th>
              <th className='thh'>Company</th>
              <th className='thh'>Contact</th>
              <th className='thh'>Country</th>
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
    </div>
  )
}

export default Remain;