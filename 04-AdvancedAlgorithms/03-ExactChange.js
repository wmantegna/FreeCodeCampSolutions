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
  obj.total = Math.round(obj.total * 100) / 100;
  
  obj. = function(){};
  
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
    
    if (change > val){
      var quotient = val / multiplier;
      val = quotient * multiplier;
    } else if (change < val) {
      var quotient = val / multiplier;
      val = quotient * multiplier;
    }
    
    returns.push([key.toUpperCase(), val]);
    change -= val;

    if (change === 0){
      return returns;
    }
  }
}

function determineChange(change, amount, multiplier){
  if (amount <= change){
    return amount;
  } else {
    var quotient = amount / multiplier;
    amount = quotient * multiplier;
  }
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
  
  // make change
  


  // Here is your change, ma'am.
  return change;
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
 var price = 19.50;
 var cash = 20.00;
 var cid = [["PENNY", 1.01], 
            ["NICKEL", 2.05], 
            ["DIME", 3.10], 
            ["QUARTER", 4.25], 
            ["ONE", 90.00], 
            ["FIVE", 55.00], 
            ["TEN", 20.00], 
            ["TWENTY", 60.00], 
            ["ONE HUNDRED", 100.00]];

var ans = checkCashRegister(price, cash, cid);
// var ans = CashInDrawertoObject(cid);
console.log(ans);
