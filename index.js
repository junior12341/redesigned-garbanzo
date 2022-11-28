// Code challenge week 1 

// Challenge 1:Student Grade Generator (Toy Problem)

function grade (total) {                             // Use function for generating grades for the students 
    if (total <= 100 && total >= 0 ) {              // Use if statements to showcase range of grades
        if(total > 79 ) {
            return "A";
        }
        else {
            if (total >= 60 && total <= 79 ) {    //Use if else conditional statements to determine grade based on marks achieved
               return "B";
            }
            else {
               if (total >= 50 && total <= 59 ) {
                return "C";
               }
               else {
                if (total >= 40 && total <= 49 ){ 
                 return "D";  
                }
                else {
                    if (total < 40 ) {               // Use if statement to show grade according to total marks scored
                        return "E";
                    }
                }
               }
            }  
        }
    }
    return grade(total);    // return function returns grade depending on scores achieved
}
console.log(grade(90));


//Challenge 2: Speed Detector (Toy Problem)

function speedDetector(vehicleSpeed) {
    const speedLimit = 70 
    const speedRate = 5 

    if (vehicleSpeed <= speedLimit) {  // Use conditional statement to return "0K" if its less or equal to the speed limit
        return "OK";
    }

    const overSpeed = vehicleSpeed - speedLimit;         //The constant overSpeed used to determine how much the driver has exeeded the speed limit

    let demeritPoint = 0;
    for (let y = 0; y < overSpeed; y+= speedRate) {       //We use for loop to make the point system for awarding demerit depending on how much the driver has exeeded the speed limit

        demeritPoint += 1

        //demeritpoints are points accumulated after every speedrate (5km/h) over the speed limit
        if(demeritPoint > 12) {
            return "Lisence suspended "
        }
    }
    return `Points: ${demeritPoint}`

}
console.log(speedDetector(100));



//Challenge 3: Net Salary Calculator (Toy Problem)


// These 4 constants asks the user for input and stores in the declared variable
const promptBasicSalary = require(`prompt-sync`)();
let basicSalary = promptBasicSalary("Enter basicSalary:")
const promptBenefits = require(`prompt-sync`)();
let benefits = promptBenefits("Enter benefits:")

//functions below used to dispaly calculations & display them in tabular data-structure
function netSalaryCalculator (){
    const grossSalary = Number(basicSalary + benefits);
    const nssf = calculateNSSF(grossSalary);
    const taxableIncome = grossSalary-nssf;
    const taxBeforeRelief = calculateTax(taxableIncome);
    const personalRelief = 2400;
    const nhif = calculateNHIF(grossSalary);
    const insuranceRelief = nhif * 0.15;
    const taxes = taxBeforeRelief-(personalRelief+insuranceRelief);
    const payee = (taxes <= 0) ? 0 : taxes;
    const netPay = grossSalary-(nssf + payee + nhif);

    const result = {
        "taxBeforeRelief" : taxBeforeRelief,
        "taxableIncome" : taxableIncome,
        "grossSalary" : grossSalary,
        "NHIF" : nhif,
        "NSSF" : nssf,
        "payee(tax)" : payee,
        // "netPay" : netPay,
        "insuranceRelief" : insuranceRelief
    };

    console.table(result);
    console.log(`Your net salary is : ${netPay} Ksh`)
}

// function below calculates NSSF by using basic salary as the argument
function calculateNSSF(basicSalary){
    let nssf;
    if(basicSalary <= 6000){
        nssf = basicSalary * 0.06;
    }
    else if(basicSalary > 6000 && basicSalary < 18000){
        nssf = (6000 * 0.06) + ((basicSalary - 6000) * 0.06);
    }
    else{
        nssf = 360 + 720;
    }
    return nssf;
}

function calculateTax(taxableIncome){
    let tax = 0.01;
    if(taxableIncome <= 24000){
        tax = taxableIncome * 0.1;
    }
    else if(taxableIncome > 24000 && taxableIncome <= 32,333){
        tax = (24000 * 0.1)+(( taxableIncome - 24000) * 0.25);
    }
    else{
        tax = (24000 * 0.1)+((8333) * 0.25)+(( taxableIncome - 32333) * 0.3);
    }
    return tax;
}

function calculateNHIF(salary){
    let deduction;
    if(salary <= 5999){
        deduction = 150;
    }
    else if(salary >= 6000 && salary < 8000){
        deduction = 300;
    }
    else if(salary >= 8000 && salary <= 11999){
        deduction = 400;
    }
    else if(salary >= 12000 && salary <= 14999){
        deduction = 500;
    }
    else if(salary >= 15000 && salary <= 19999){
        deduction = 600;
    }
    else if(salary >= 20000 && salary <= 24999){
        deduction = 750;
    }
    else if(salary >= 25000 && salary <= 29999){
        deduction = 850;
    }
    else if(salary >= 30000 && salary <= 34999){
        deduction = 900;
    }
    else if(salary >= 35000 && salary <= 39999){
        deduction = 950;
    }
    else if(salary >= 40000 && salary <= 44999){
        deduction = 1000;
    }
    else if(salary >= 45000 && salary <= 49999){
        deduction = 1100;
    }
    else if(salary >= 50000 && salary <= 59999){
        deduction = 1200;
    }
    else if(salary >= 60000 && salary <= 69999){
        deduction = 1300;
    }
    else if(salary >= 70000 && salary <= 79999){
        deduction = 1400;
    }
    else if(salary >= 80000 && salary <= 89999){
        deduction = 1500;
    }
    else if(salary >= 90000 && salary <= 99999){
        deduction = 1600;
    }
    else{
        deduction = 1700;
    }

    return deduction;
}


netSalaryCalculator();



