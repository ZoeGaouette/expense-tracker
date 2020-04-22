import React from 'react';
import {exps} from "./App";
import {categories} from "./add";


class Remove extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleCost = this.handleCost.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.state = {
            expenseName: '',
            cost: null,
            category: ''
        };
    }

    /**
     * handles a user clicking the remove expense button, deleting data accordingly
     */
    handleClick() {
        console.log(this.state.expenseName);
        console.log(this.state.cost);
        console.log(this.state.category);
        let indices = this.determineIndicesToDelete();
        let tempArr = [];
        for (let i = 0; i<exps.length; i++) {
            if (!indices.includes(i)) {
                tempArr.push(exps[i]);
            }
        }
        exps.length = 0;
        for (let i = 0; i<tempArr.length; i++) {
            exps.push(tempArr[i]);
        }
        this.props.onClick();
    }

    /**
     * handles a change in the name text field, setting the state accordingly
     * @param e value that user changed field to
     */
    handleName(e) {
        this.setState({expenseName: e.target.value});
    }

    /**
     * handles a change in the cost text field, setting the state accordingly
     * @param e value that user changed field to
     */
    handleCost(e) {
        this.setState({cost: e.target.value});
    }

    /**
     * handles a change in the category drop-down menu, setting the state accordingly
     * @param e value that user changed field to
     */
    handleCategory(e) {
        for (let i = 0; i < categories.length; i ++) {
            if (categories[i].key === String(e.target.value)) {
                document.getElementById('preview').src = categories[i].image.src;
            }
        }
        this.setState({category: e.target.value});
    }

    /**
     * from the state values, determines the indices in exps of expenses that match the states, and thus will be deleted
     * @returns an array of the indices in exps to be deleted
     */
    determineIndicesToDelete() {
        let name_str = this.state.expenseName;
        let cost = this.state.cost;
        let category = this.state.category;
        let indices = [];

        for (let i = 0; i<exps.length; i++) {
            if (name_str !== '') {
                if (cost !== null) {
                    if (category !== '') {
                        if ((name_str === exps[i].name) && (cost === exps[i].cost) && (category === exps[i].category)) {
                            indices.push(i);
                        }
                    } else {
                        if ((name_str === exps[i].name) && (cost === exps[i].cost)) {
                            indices.push(i);
                        }
                    }
                } else {
                    if (name_str === exps[i].name) {
                        indices.push(i);
                    }
                }
            } else if (cost !== null) {
                if (category !== '') {
                    if ((cost === exps[i].cost) && (category === exps[i].category)) {
                        indices.push(i);
                    }
                } else {
                    if (cost === exps[i].cost) {
                        indices.push(i);
                    }
                }

            } else if (category !== '') {
                if (category === exps[i].category) {
                    indices.push(i);
                }
            }
        }
        return indices;
    }

    /**
     * renders the react component
     */
    render() {
        return (
            <div>
                <div>
                    <text style={{fontSize:"20px", fontFamily:"Courier New, monospace"}}>Delete Expenses</text>
                </div>
                <div id={'name'}>
                    <label style={{fontSize:"20px", fontFamily:"Courier New, monospace"}}> Name </label>
                    <input type="text" name="Name" onChange={(e) => this.handleName(e)} />
                </div>

                <div id={'cost'}>
                    <label style={{fontSize:"20px", fontFamily:"Courier New, monospace"}}> Cost </label>
                    <input type="number" name="Cost" onChange={(e) => this.handleCost(e)} />
                </div>
                <select id="category" onChange={(e) => this.handleCategory(e)}>
                    <option value="" disabled selected style={{fontFamily:"Courier New, monospace"}}>Category</option>
                    <option style={{fontFamily:"Courier New, monospace"}}>work</option>
                    <option style={{fontFamily:"Courier New, monospace"}}>school</option>
                    <option style={{fontFamily:"Courier New, monospace"}}>bills</option>
                    <option style={{fontFamily:"Courier New, monospace"}}>groceries</option>
                    <option style={{fontFamily:"Courier New, monospace"}}>eating out</option>
                    <option style={{fontFamily:"Courier New, monospace"}}>coffee shops</option>
                    <option style={{fontFamily:"Courier New, monospace"}}>misc</option>
                </select>
                <input
                    type="button"
                    value="Delete Expense(s)"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default Remove;