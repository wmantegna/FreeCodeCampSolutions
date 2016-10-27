// Convert the given number into a roman numeral.

function convertToRoman(num) {
  //console.log('num='+num);
  
  // base cases
  if (num === 1) {return 'I';}
  if (num < 1) {return '';}
  
  // recursive cases
  if (num / 1000 >= 1) {return 'M' + convertToRoman(num-1000);}
  if (num / 900 >= 1) {return 'CM' + convertToRoman(num-900);}
  if (num / 500 >= 1) {return 'D' + convertToRoman(num-500);}
  if (num / 400 >= 1) {return 'CD' + convertToRoman(num-400);}
  if (num / 100 >= 1) {return 'C' + convertToRoman(num-100);}
  if (num / 90 >= 1) {return 'XC' + convertToRoman(num-90);}
  if (num / 50 >= 1) {return 'L' + convertToRoman(num-50);}
  if (num / 40 >= 1) {return 'XL' + convertToRoman(num-40);}
  if (num / 10 >= 1) {return 'X' + convertToRoman(num-10);}
  if (num / 9 >= 1) {return 'IX' + convertToRoman(num-9);}
  if (num / 5 >= 1) {return 'V' + convertToRoman(num-5);}
  if (num / 4 >= 1) {return 'IV' + convertToRoman(num-4);}
  if (num > 1) { return convertToRoman(num-1) + 'I';}
}

//var arr = [1,2,3,4,5,6,7,8,9,10,11];
//var arr = [12, 16, 29, 44, 45, 68, 83, 97, 99];
var arr = [97, 99]; // 97=XCVII, 99=XCIX

for(var i = 0; i < arr.length; i++){
  var ans = convertToRoman(arr[i]);
  console.log(arr[i]+'='+ans);
  //var quot = arr[i]/5;
  //var mod = arr[i]%5;
  //console.log(arr[i] + '|| quot='+quot+' | mod='+mod);
}
