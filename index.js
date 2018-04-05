fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      // console.log(collection, iteratee)
      for (const el in collection) {
        console.log("el is:", el)
        let indexNum = collection[el]
        console.log("indexNum is:", indexNum)
        // console.log("indexNum is:", indexNum)
        iteratee(el, indexNum, collection)
      }
      return collection
    },

    map: function(collection, iteratee) {
      let newArr = [];
      for (const el in collection) {
        console.log(collection[el])

        newArr.push(iteratee(collection[el]))
      }
      return newArr;
    },

    reduce: function(collection, iteratee, acc) {
      // let answer = acc;

      for (const el in collection) {
        console.log("acc:", acc)
        console.log("el", collection[el])
        console.log("function return value:", iteratee(acc, collection[el], collection))
        acc = iteratee(acc, collection[el], collection)
        // console.log("initval:", acc, "collection[el]:", collection[el], "collection:", collection)
        // console.log("full func:", iteratee(acc, collection[el], collection))
        // console.log("function supplied is: ", iteratee)
        // console.log("after function called, acc = ", acc, "collection[el]: ", collection[el])
      }
      return acc
    },

    find: function(collection, predicate) {
      let answer = null
      for (const el of collection) {
        // console.log("el:", el)
        // console.log("function value:", predicate(el))
        if (predicate(el)) {
          // console.log("equivalent:", predicate(el))
          answer = "bingo!"
          return true
        }
      } if (answer === null) {
        return false
      }
    },

    filter: function(collection, predicate) {
      let newArr = [];
      for (const el of collection) {
        if (predicate(el)) {
          newArr.push(el)
        }
      } return newArr;
    },

    size: function(collection) {
      let counter = 0;
      for (const el in collection) {
        counter++
      }
      return counter
    },

    first: function(collection, n=1) {
      // if (typeof n === "undefined") {
      //   n = 1
      //   console.log(n)
      // }
      if (n === 1) {
        return collection.slice(0, n)[0]
      } else {
        return collection.slice(0, n)
      }
    },

    functions: function() {

    },

    last: function(collection, n) {
      if (typeof n === "undefined") {
        return collection.slice(-1)[0]
      } else {
        return collection.slice(-n)
      }
    },

    compact: function(collection) {
      const predicate = function myFunc(element) {return !!element}
      return fi.filter(collection, predicate)
    },

    sortBy: function(array, iteratee) {
      let newArr = fi.map(array.slice(), iteratee);
      return newArr.sort(function(a,b){return a>b});
    },

    key: function(array, iteratee) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
