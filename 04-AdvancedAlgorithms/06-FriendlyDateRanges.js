/*
  Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
  The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

  Do not display information that is redundant or that can be inferred by the user: 
    if the date range ends in less than a year from when it begins, do not display the ending year.

  Additionally, if the date range begins in the current year (i.e. it is currently the year 2016)
  and ends within one year, the year should not be displayed at the beginning of the friendly range.

  If the range ends in the same month that it begins, do not display the ending year or month.

  Hints:
    String.prototype.split()
    String.prototype.substr()
    parseInt()
*/



function makeFriendlyDates(arr) {
  var obj1 = parseToObj(arr[0]);
  var obj2 = parseToObj(arr[1]);
  
  var obj1dayCount = obj1.dayCount();
  var obj2dayCount = obj2.dayCount();
  var dayDiff = Math.abs(obj1dayCount - obj2dayCount);
  var currentYear = new Date().getFullYear();
  
  var showEndYear = true;
  var showBeginningYear = true;
  if (dayDiff < 365){
    showEndYear = false;
    
    if(obj1.year === currentYear){  
      showBeginningYear = false;
    }
  }
  
  var showEndMonth = true;
  if (dayDiff < daysInMonth(obj1.month, obj1.year)){
    showEndMonth = false;
    showEndYear = false;
  }

  
  // create & push first date
  var retval = [];
  var str1 = obj1.toString(true, showBeginningYear);
  retval.push(str1);
  
  // only display second date if dates are different
  if (obj1.isEqual(obj2) === false){
    var str2 = obj2.toString(showEndMonth, showEndYear);
    retval.push(str2);
  }
  
  return retval;
}

function getMonth(num){
  switch(num){
    case  1: return "January";
    case  2: return "February";
    case  3: return "March";
    case  4: return "April";
    case  5: return "May";
    case  6: return "June";
    case  7: return "July";
    case  8: return "August";
    case  9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
  }

  return undefined;
}

function getOrdinalDay(num){

  var suffix = 'th';
  if (num < 4 || num > 20){
    var n = num % 10;
    switch(n){
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
    }
  }
  
  return num + suffix;
}
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function parseToObj(str){
  var arr = str.split('-');
  return {
    year: parseInt(arr[0]),
    month: parseInt(arr[1]),
    day: parseInt(arr[2]),
    dayCount: function(){
      var years = this.year * 365;
      
      var months = 0;
      for (var i = 1; i <= this.month; i++){
        months += daysInMonth(i, this.year);
      }

      return years + months + this.day;
    },
    isEqual: function(obj){
      return this.year === obj.year &&
        this.month === obj.month &&
        this.day === obj.day;
    },
    toString: function(showMonth, showYear){
      var day = getOrdinalDay(this.day);
  
      var month = '';
      if (showMonth){
        month = getMonth(this.month) + ' ';
      }
  
      var year = '';
      if (showYear){
        year = ', ' + this.year;
      }
  
      return month + day + year;
    }
  };
}


var arr = [["2016-07-01", "2016-07-04"], // ["July 1st","4th"]
           ["2016-12-01", "2017-02-03"], // ["December 1st","February 3rd"]
           ["2017-03-01", "2017-05-05"], // ["March 1st, 2017","May 5th"]
           ["2018-01-13", "2018-01-13"], // ["January 13th, 2018"]
           ["2022-09-05", "2023-09-04"]  // ["September 5th, 2022","September 4th"]
          ]; 

for (var i = 0; i < arr.length; i++){
  var ans = makeFriendlyDates(arr[i]);
  console.log(ans);
}


// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// for (var i = 0; i < arr.length; i++){
//   console.log(getOrdinalDay(arr[i]));
// }