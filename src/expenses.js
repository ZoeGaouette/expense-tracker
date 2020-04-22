export default class Expenses {
    expenses_list = [];

    addExpense(name, amount, category) {
        let elem = {name: name, amount: amount, category: category};
        this.expenses_list.push(elem);
    }

    removeExpense(name, amount, category){
        let index = -1;
        for (let i = 0; i< this.expenses_list.length ; i++) {
            if ((name === this.expenses_list[i].name) && (amount === this.expenses_list[i].amount) && (category === this.expenses_list[i].category)) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.expenses_list.splice(index, 1);
        }
    }

    getExpensesList() {
        return this.expenses_list;
    }

}