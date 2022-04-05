
    var rate = 5, initial_balance = 10000;
    var target = 2 * initial_balance;
    var balance = initial_balance;
    var year = 0;
    while (balance < target){
        var interest = balance * rate / 100;
        balance = balance + interest;
        year++; //process towards failure
    }
    console.log("The investment doubled after " + year + " years.")

for( n = 0; n <= 100; n++)
{
    if(n % 2 == 0){
        console.log(n + " is an even number.");
    }
    
}

for(o = 0; o <= 100; o++){
    if(o % 2 != 0){
        console.log(o + " is an odd number.")
    }
}

