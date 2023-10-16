// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.



// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let result = [];
    moviesArray.forEach(e => {
        result.push(e.director)
    });
    return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    let spielbergCount = 0;
    moviesArray.forEach(e =>{
        if (e.director === "Steven Spielberg" && e.genre.includes("Drama")){
            spielbergCount += 1
        }
    })
    return spielbergCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0 ){
        return 0;
    }
    let averageSum = 0;
    let averageDiv = moviesArray.length;
    moviesArray.forEach(e => {
        if (!e.score){
            averageSum += 0;
        }
        else{
        averageSum += e.score;  
        }
    })
    let result = averageSum / averageDiv;
    let result2 = result * 100;
    let result3 = Math.round(result2)/100;
    return result3;
}
/* INTENTANT-HO AMB EL REDUCE()

function scoresAverage(moviesArray){
    if (moviesArray.length === 0){
        return 0;
    }
    let solution = moviesArray.reduce((acc,curr) => {
        if ( !curr.score){
            return acc + 0;
        }else{
            return acc + curr.score;
        }
    },0)

    let result = solution / solution.length;
    let result2 = result * 100;
    let result3 = Math.round(result2)/100;
    return result3;
}*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramas = [];
    moviesArray.forEach(e => {
        if (e.genre.includes("Drama")){
            dramas.push(e);
        }
    })
    if (dramas.length === 0){
        return 0;
    }
    let sum = 0;
    dramas.forEach(e =>{
        sum += e.score;
    })
    let avg = sum / dramas.length;
    let result = avg*100;
    let finalResult = Math.round(result)/100;
    return finalResult;


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyList = [...moviesArray];
    copyList.sort((a, b)=>{
        if(a.year < b.year){
            return -1;
        }else if (a.year > b.year){
            return 1;
        }else{
            if( a.title < b.title){
                return -1;
            }
            else if(a.title > b.title){
                return 1;
            }
        }
    })
    return copyList;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sorted = [];
    moviesArray.forEach(e =>{
        sorted.push(e.title);
    })
    sorted.sort();
    /*
    if (moviesArray.length > 20){
        for (let i = 20; i < moviesArray.length; i++){
            sorted.pop();
        }
    }
    */ 
    if (sorted.length > 20){
        sorted.splice(20,sorted.length);
    }
    return sorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  /*-separar array en dos 
  - buscar i eliminar h / buscar i eliminar min 
  - convertir a numeros parseInt()
  - multiplicar x 60 el primer i sumari el segon
  */
    const llistaCorrecta = moviesArray.map(e => {
        let separated = e.duration.split(" ");
        if (separated.length === 1){
            if(separated[length-1] === "h"){ // lo daki dins no va no molesta
                let hourString = separated[0];
                //console.log(hourString)
                let hour = parseInt(hourString.slice(0,hourString.length-1));
                // console.log(hour, typeof(hour),hourString.slice(0,hourString.length-1) )
                let hourToMin = hour * 60 
                //console.log(hourToMin)
                let minString = separated[1].slice(0,separated[1].length-3);
                //console.log(minString)
                let mins = parseInt(minString);
                //console.log(mins)
                let total= hourToMin + mins;
                //console.log(total)
                e.duration = total;
                
                return  e;  
            }else if (separated[length-1] === "min"){
                let minString = separated[0].slice(0,separated[1].length-3);
                e.duration = parseInt(minString);
            }
        }
        //console.log(separated)
        let hourString = separated[0];
        //console.log(hourString)
        let hour = parseInt(hourString.slice(0,hourString.length-1));
        // console.log(hour, typeof(hour),hourString.slice(0,hourString.length-1) )
        let hourToMin = hour * 60 
        //console.log(hourToMin)
        let minString = separated[1].slice(0,separated[1].length-3);
        //console.log(minString)
        let mins = parseInt(minString);
        //console.log(mins)
        let total= hourToMin + mins;
        //console.log(total)
        e.duration = total;
        
        return  e;
    })
    console.log(llistaCorrecta)
    return llistaCorrecta;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0){
        return null;
    }
    const anys = moviesArray.map(e => e.year );
    const anysNoRepetits = [];
    anys.forEach(e=>{
        if(!anysNoRepetits.includes(e)){
            anysNoRepetits.push(e);
        }
    })
    anys.reduce(function(acc, curr)  {
        if(anys.count(acc) > anys.count(curr)){
            return acc;
        }
        else if (anys.count(acc) < anys.count(curr)){
            return curr;
        }
        else{
            if( acc < curr){
                return acc;
            }
            else{
                return curr;
            }
        }
        }
    )
    }

