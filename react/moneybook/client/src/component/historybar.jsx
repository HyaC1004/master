import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

function HistoryBar({datas}) {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
    const options = {
        plugins: {
          title: {
            display: true,
            text: '카테고리별 사용금액',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
    };

    const labels =  ["미분류","식비","주거/통신","생활용품","의복/미용","교통/차량","용돈/기타"];
    const cashSum = [0,0,0,0,0,0,0];
    const cardSum = [0,0,0,0,0,0,0];

    datas.forEach(one => {
        let idx = labels.indexOf(one.category);
        if(idx !==-1){
            cashSum[idx] += one.cashAmt ?? 0
            cardSum[idx] += one.cardAmt ?? 0
        }
    });

    const data = {
        labels: labels,
        datasets:[
            {
                label: '현금',
                data: cashSum,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '카드',
                data: cardSum,
                backgroundColor: 'rgba(11, 156, 213, 0.5)',
            }
        ]
    }
    

    return (<Bar options={options} data={data} />);
}

export default HistoryBar;