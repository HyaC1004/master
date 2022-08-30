import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title,
    Tooltip, Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

function ReportBarChart({ datas }) {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const options = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: '결제유형별 통계'
            },
        }
    }

    const data = {
        labels: ["결제유형"],
        datasets: [
            {
                label: '카드',
                data: [470000],
            },
            {
                label: '현금',
                data: [120000]
            },
        ],
    }
    return (<Bar options={options} data={data} height={50}/>);
}

export default ReportBarChart;