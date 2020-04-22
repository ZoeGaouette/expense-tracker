import React from 'react';
import supermarket from './icons/supermarket.svg';
import school from './icons/school.svg';
import restaurant from './icons/restaurant.svg';
import bill from './icons/bill.svg';
import food from './icons/food.svg';
import laptop from './icons/laptop.svg';
import wash from './icons/wash.svg';
import payment from './icons/payment.svg';
import {exps} from './App';

export const categories = [
    {key: "", image: { avatar: true, src: payment, width: 50, height: 50}
    },
    { key: 'work', image: { avatar: true, src: laptop, width: 50, height: 50}
    },
    { key: 'groceries', image: { avatar: true, src: supermarket, width: 50, height: 50 }
    },
    { key: 'eating out', image: { avatar: true, src: restaurant, width: 50, height: 50}
    },
    { key: 'bills', image: { avatar: true, src: bill, width: 50, height: 50 }
    },
    { key: 'coffee shops', image: { avatar: true, src: food, width: 50, height: 50 }
    },
    { key: 'school', image: { avatar: true, src: school, width: 50, height: 50 }
    },
    { key: 'misc', image: { avatar: true, src: wash, width: 50, height: 50 }
    }
];


class Add extends React.Component {
    constructor(properties) {
        super(properties);
        this.handleClick = this.handleClick.bind(this);
        this.handleCost = this.handleCost.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.state = {
            expenseName: '',
            cost: 0,
            category: ''
        };
    }


    /**
     * validates user input
     * @return {Boolean}     true if input is valid, false otherwise
     */
    validateInput() {
        if (!isFinite(Number(String(this.state.cost)))) {
            return false;
        } else if (this.state.category === "") {
            return false;
        } else if (this.state.expenseName === "" || this.state.expenseName == null) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * handles user click of "add expense" button
     */
    handleClick() {
        if (this.validateInput()) {
            console.log(this.state.expenseName);
            console.log(this.state.cost);
            console.log(this.state.category);
            exps.push({name: this.state.expenseName, cost: this.state.cost, category: this.state.category});
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
     * renders the react component
     */
    render() {
        return (
            <div>
                <div id={'d5'} style={{marginBottom:"10px"}}>
                    <text style={{fontSize:"20px", fontFamily:"Courier New, monospace"}}>Add Expense</text>
                </div>
                <div>
                    <img id={'preview'} src={payment} alt={''} width={"50"} height = {"50"}/>
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
                        value="Add Expense"
                        onClick={this.handleClick}
                    />
            </div>
        );
    }
}

export default Add;


