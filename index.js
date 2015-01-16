#!/usr/bin/env node --use_strict

var i = 1;
var n = 1;


//Challenge 1: write a function that generates the next number 
//each time it's called:

// var mySequence = function() {
//  	n++;
//     //console.log('n: ',n);
//     return n;
// };

// for (i;i<=10;i++){
//      mySequence();
//  };
//end of Challenge 1


//Challenge 2: Write a function, counter, that returns 
//your sequence generator:
//var sequence = counter();

// var counter = function() {
//     var x = 1;
//     var sequence = function() {
//         x++;
//         console.log('next : ',x);
//         return x;
//     };  
//     return sequence;
// };

// var sequence1 = counter();
// var sequence2 = counter();


// sequence2();
// sequence2();
// sequence1();
// sequence2();
// sequence1();

//end of Challenge 2

//Challenge 3: Allow your counter to start at any number, for instance, counter(5).
// var start = 5;
// var counter = function(start) {
//     var x = start;
//     var sequence = function() {
//         x++;
//         console.log('next : ',x);
//         return x;
//     };  
//     return sequence;
// };

 //var sequence1 = counter(start);
// var sequence2 = counter(start);


// sequence2();
// sequence2();
// sequence1();
// sequence2();
// sequence1();

// end of Challenge 3

//Challenge 4: Allow your counter to be reset

var counter = function(start) {
    var x = start;
    var sequence = function() {
        x++;
        console.log('next : ',x);



        return x;


    };  
    return sequence;
};

var sequence1 = counter();
var sequence2 = counter();
sequence1.next(); //=> 0
sequence1.next(); //=> 1
sequence2.next(); //=> 0
sequence1.next(); //=> 2
sequence1.reset(); //=> void
sequence1.next(); //=> 0
sequence2.next(); //=> 1
sequence1.reset(5); //=> void
sequence1.next(); //=> 5




