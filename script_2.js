let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(number)
{
    if (number === 0)
{
    return 1;
}

    return number * fact(number-1);
}
console.log("le résultat est =" + fact(number));