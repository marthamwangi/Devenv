import "./style.css";
import numeral from "numeral";
const courseValue = numeral(1000).format("$0,0.00");
console.log(`I would like ${courseValue} to pay for the course`); //eslint-disable-line no-console
