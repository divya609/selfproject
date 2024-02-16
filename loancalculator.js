// Import necessary modules from the LWC framework
import { LightningElement, track } from 'lwc';

// Define the LoanCalculator class which extends LightningElement
export default class LoanCalculator extends LightningElement {
    // Track property changes to re-render the component with updated data
    @track loanAmount = 0; // Initial loan amount set to 0
    @track interestRate = 0; // Initial interest rate set to 0
    @track loanTerm = 0; // Initial loan term set to 0
    @track monthlyPayment = 0; // Calculated monthly payment, initially set to 0

    // Handler for loan amount input change
    handleLoanAmountChange(event) {
        this.loanAmount = event.target.value; // Update loanAmount with the new input value
    }

    // Handler for interest rate input change
    handleInterestRateChange(event) {
        this.interestRate = event.target.value; // Update interestRate with the new input value
    }

    // Handler for loan term input change
    handleLoanTermChange(event) {
        this.loanTerm = event.target.value; // Update loanTerm with the new input value
    }

    // Function to calculate the monthly payment based on the input values
    calculateMonthlyPayment() {
        const principal = parseFloat(this.loanAmount); // Convert string input to float
        const interest = parseFloat(this.interestRate) / 100 / 12; // Convert annual rate to monthly and percentage to decimal
        const payments = parseFloat(this.loanTerm) * 12; // Convert years to number of monthly payments

        // Formula to calculate monthly payment
        const x = Math.pow(1 + interest, payments); // Calculate compound interest factor
        const monthly = (principal * x * interest) / (x - 1); // Calculate monthly payment

        // Update monthlyPayment with calculated value or set to '0' if calculation is not possible
        this.monthlyPayment = monthly ? monthly.toFixed(2) : '0';
    }
}
