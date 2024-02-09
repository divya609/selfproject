import { LightningElement, track } from 'lwc';

export default class LoanCalculator extends LightningElement {
    @track loanAmount = 0;
    @track interestRate = 0;
    @track loanTerm = 0;
    @track monthlyPayment = 0;

    handleLoanAmountChange(event) {
        this.loanAmount = event.target.value;
    }

    handleInterestRateChange(event) {
        this.interestRate = event.target.value;
    }

    handleLoanTermChange(event) {
        this.loanTerm = event.target.value;
    }

    calculateMonthlyPayment() {
        const principal = parseFloat(this.loanAmount);
        const interest = parseFloat(this.interestRate) / 100 / 12;
        const payments = parseFloat(this.loanTerm) * 12;

        // Monthly payment formula
        const x = Math.pow(1 + interest, payments);
        const monthly = (principal*x*interest)/(x-1);

        this.monthlyPayment = monthly ? monthly.toFixed(2) : '0';
    }
}
