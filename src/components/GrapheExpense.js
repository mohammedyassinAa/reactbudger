import React, { useContext } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';
import { GlobalContext } from "../context/GlobalState";

Chart.register(ArcElement);
export default function GrapheExpense() {
    const { expenseTransactions } =useContext(GlobalContext);
    const data2 = expenseTransactions.map(item=> {return item.expenseAmount})
    const totale = data2.reduce((a,b)=>a+b,0)
    const config={
        data : {
            datasets: [{
              data:data2 ,
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
            <div className='chart2'>
                <Doughnut {...config}></Doughnut>
                <h3 className='title2'>Totale<br></br>
                    <span className='pourcentage2'>${totale}</span>
                </h3>
            </div>
        </div>
    </div>
  )
}
