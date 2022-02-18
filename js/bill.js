export default class Bill {
    constructor() {
    this.amounts = [];
    }
    
    /** @param {string} amountStr */
    addAmount(amountStr) {
    let num = Number(amountStr);
    this.amounts.push(num);
    return this.amounts;
    }
    
    getCount() {
    return this.amounts.length;
    }
    
    getTotal() {
    
    return this.amounts.reduce(function(total, current) {
    return total + current;
    },0 )
    
    }
    
    getAverage() {
    let sum = 0;
    this.amounts.forEach(function(amount) {
    sum = sum + amount;
    })
    return sum / this.amounts.length;
    }
    }