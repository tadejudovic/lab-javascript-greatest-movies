// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies){ 
    return movies.map(function(movies){
        return movies.director
    })
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    const steven = movies.filter(
            function (element){
        if (element.director.includes('Steven Spielberg') && element.genre.includes('Drama')) {
            return true
        } else { return 0;
        }
    })
    return steven.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array){ 
    if (array.length === 0){ 
        return 0;
    } else { 
        const sum = array.reduce (function (acc, value){ 
            return acc + value.rate
        },0)
        let average = sum / array.length; 
        return Number(average.toFixed(2))
    }

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    if (array.genre != `Drama`){ 
        return 0;
    } else { 
    
    if (array.genre === `Drama`){ 
        const sum = array.reduce (function (acc, value){ 
            return acc + value.rate
        },0)
        let average1 = sum1 / array.length; 
        return Number(average1.toFixed(2))

    } else { 
        if (array.genre=undefined){ 
            return Number(average1);
        }
    }

    }

} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(array){
    if (array === [])
      return []
    const yearOrder = array.slice().sort(function(a,b){
      if (a.year === b.year){
        if (a.title >b.title){
          return 1;
        } else if (a.title<b.title){
          return -1;
        } else {
          return 0;
        }
      } else {
        return a.year-b.year;
      }
    });
    return yearOrder
  }
  
  orderByYear(movies)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (moviesArray){
    const moviesCopy = [...moviesArray]
    const moviesCopyTitle = moviesCopy.map(element => { 
        return element.title})
        
    return moviesCopyTitle.sort().slice(0, 20)
}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
