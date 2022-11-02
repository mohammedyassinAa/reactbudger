import React, { useContext } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';
import { GlobalContext } from "../context/GlobalState";
import GrapheExpense from './GrapheExpense';

Chart.register(ArcElement);


export default function Graph() {
    const { incomeTransactions } =useContext(GlobalContext);
    const data = incomeTransactions.map(item=> {return item.incomeAmount})
    const totale = data.reduce((a,b)=>a+b,0)
    const config={
        data : {
            datasets: [{
              data:data ,
              backgroundColor: [
                '#e21b18',
                '#037019',
                '#18e233'
              ],
              hoverOffset: 4
            }]
          }
    }
  return (
    <div className='contenu'>
        <div className='item'>
            <div className='chart'>
                <Doughnut {...config}></Doughnut>
                <h3 className='title'>Totale<br></br>
                    <span className='pourcentage'>${totale}</span>
                </h3>
            </div>
        </div>
        <GrapheExpense/>
    </div>
  )
}
