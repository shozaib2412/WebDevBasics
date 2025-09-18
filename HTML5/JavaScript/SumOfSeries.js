var n , i = 1 , sum = 0;

n = parseInt(prompt("Enter the Value of n : "));

for (i = 1 ; i <= n ; i++ ){
    sum = sum + i ;
}

document.writeln(`<h2>The Sum of series is ${sum} </h2>`);
alert(`The Sum of series is ${sum}`);