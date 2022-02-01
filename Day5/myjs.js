

function isPrime(a)
{
    var i=1;
    while(i<=a/2)
    {
        i++;
        if(a%i===0)
        {return false;}
    }
    return true;
}
var isPrime1=function (a)
{
    var i=1;
    while(i<=a/2)
    {
        i++;
        if(a%i==0)
        {return false;}
    }
    return true;
}

console.log(isPrime(10));
console.log(isPrime1(11))