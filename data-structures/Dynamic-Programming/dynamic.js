// recursive approach towards solving  fibonacci sequence

function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];

    if(n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// BIG O
//  O(N^2) not good at all

// tabulated version

function fib(n){
    if(n <= 2) return 1;

    var fibNums = [0,1,1];

    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }

    return fibNums[n]
}