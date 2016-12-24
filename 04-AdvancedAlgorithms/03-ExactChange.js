/*

Design a cash register drawer function checkCashRegister()
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), 
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

*/

function round2(num){
  return Math.round(num * 100) / 100;
}


// translate cid to an object
function CashInDrawertoObject(cid){
  var obj = {total: 0};

  // translate cid to object
  for(var i = 0; i < cid.length; i++){
    var item = cid[i];
    var key = item[0].toLowerCase();
    var val = item[1];
    obj[key] = val;
    obj.total += val;
  }
  
  // round total to avoid awkward JS precision
  obj.total = round2(obj.total);
  
  //obj. = function(){};
  
  return obj;
}

function getMultiplier(key){
  switch(key){
    case "penny":         return 0.01;
    case "nickel":        return 0.05;
    case "dime":          return 0.1;
    case "quarter":       return 0.25;
    case "one":           return 1;
    case "five":          return 5;
    case "ten":           return 10;
    case "twenty":        return 20;
    case "one hundred":   return 100;
  }
  
  return 0;
}

// make change from a given drawer
function makeChange(change, drawer){  
  var denominations = ["one hundred","twenty","ten","five","one","quarter","dime","nickel","penny"];
  var returns = [];

  for (var i = 0; i < denominations.length; i++){
    var key = denominations[i];
    var val = drawer[key];
    var multiplier = getMultiplier(key);
    
    var valToGiveBack = determineChange(change, val, multiplier);
    if (valToGiveBack > 0){
//       console.log('val=' + val + ' | mult='+multiplier + ' | change=' + change);
      returns.push([key.toUpperCase(), valToGiveBack]);
      change = round2((change - valToGiveBack));
//       console.log('valToGiveBack='+valToGiveBack + ' |change(new)='+change);
    }
    
    if (change === 0){
      break;
    }
  }
  
  if (change === 0){
    return returns;
  } else {
    return "Insufficient Funds";
  }
}

function determineChange(change, amountInDrawer, multiplier){
  var retval = 0;
  
  if (change < multiplier){
    return retval;
  }
  if (change > amountInDrawer){
    return amountInDrawer;
  }
  
  // get integer number of a denomination to return
  var quotient = change / multiplier;
  quotient = Math.floor(quotient);
  retval = quotient * multiplier;
//   console.log('change=' + change + ' |inDrawer='+ amountInDrawer+ ' |mult=' + multiplier + ' |quot='+quotient + ' |retval='+retval);
  return retval;
}

function checkCashRegister(price, cash, cid) {
  
  var change = cash - price;
  var drawer = CashInDrawertoObject(cid);
  var leftInDrawer = drawer.total - change;
  
  // fail cases
  if (leftInDrawer < 0){
    return "Insufficient Funds";
  } else if (leftInDrawer === 0){
    return "Closed";
  }
  
  var changeToReturn = makeChange(change, drawer);
  return changeToReturn;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]


 // [["QUARTER", 0.50]]
//  var price = 19.50;
//  var cash = 20.00;
//  var cid = [["PENNY", 1.01], 
//             ["NICKEL", 2.05], 
//             ["DIME", 3.10], 
//             ["QUARTER", 4.25], 
//             ["ONE", 90.00], 
//             ["FIVE", 55.00], 
//             ["TEN", 20.00], 
//             ["TWENTY", 60.00], 
//             ["ONE HUNDRED", 100.00]];

// [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
// var price = 3.26;
// var cash = 100.00;
// var cid = [["PENNY", 1.01], 
//            ["NICKEL", 2.05], 
//            ["DIME", 3.10], 
//            ["QUARTER", 4.25], 
//            ["ONE", 90.00], 
//            ["FIVE", 55.00], 
//            ["TEN", 20.00], 
//            ["TWENTY", 60.00], 
//            ["ONE HUNDRED", 100.00]];

// "Insufficient Funds"
var price = 19.50;
var cash = 20.00;
var cid =[["PENNY", 0.01], 
          ["NICKEL", 0], 
          ["DIME", 0], 
          ["QUARTER", 0], 
          ["ONE", 1.00], 
          ["FIVE", 0], 
          ["TEN", 0], 
          ["TWENTY", 0], 
          ["ONE HUNDRED", 0]];


// function CashInDrawertoObject(cid){
// var ans = CashInDrawertoObject(cid);

// function determineChange(change, amountInDrawer, multiplier){
// var ans = determineChange(0.27, 0.50, 0.25);
// var ans = determineChange(0.25, 0.25, 0.25);
// var ans = determineChange(0.24, 0.25, 0.25);

var ans = checkCashRegister(price, cash, cid);
console.log(ans);