import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';


Chart.register(ArcElement);

const config={
    data :{
        datasets: [{
            data: [11, 16, 1, 3, 14],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(17, 17, 202)'
              ],
              hoverOffset:4,
              borderRadius:30,
              spacing:10
          }]
    },
    options:{

    }
}

export default function Graph() {
  return (
    <div className='contenu'>
        <div className='item'>
            <div className='chart'>
                <Doughnut {...config}></Doughnut>
                <h3 className='title'>Totale<br></br>
                    <span className='pourcentage'>${0}</span>
                </h3>
            </div>
        </div>
    </div>
  )
}
