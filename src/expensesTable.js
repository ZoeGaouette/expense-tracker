import React from 'react';
import {exps} from './App';
import Add from './add';
import jQuery from "jquery";
import './expensesTable.css';
window.$ = window.jQuery = jQuery;

class ExpensesTable extends React.Component {

    constructor(props) {
        super(props);
        this.renderTableData = this.renderTableData.bind(this);
    }

    renderTableData() {
        window.$("#expenses").find("tr:gt(0)").remove();
        let table = document.getElementById("expenses");
        for (let i = 0; i<exps.length; i++) {
            let row = table.insertRow();
            let cell0 = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            cell0.innerHTML = exps[i].name;
            cell1.innerHTML = exps[i].cost;
            cell2.innerHTML = exps[i].category;
        }
    }

    render() {
        return (
            <body>
            <div>
                <div>
                    <Add onClick = {this.renderTableData}> </Add>
                </div>
                <h1 id='title' style={{fontSize:"30px"}}>Expenses </h1>
                <table id='expenses'>
                    <thead id='head'>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody id='body'>
                    </tbody>
                </table>
            </div>
            </body>
        )
    }

}

export default ExpensesTable;