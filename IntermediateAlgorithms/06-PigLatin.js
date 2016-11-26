/*
  Translate the provided string to pig latin.
  Pig Latin takes the first consonant (or consonant cluster) of an English word, 
  moves it to the end of the word and suffixes an "ay".

  If a word begins with a vowel you just add "way" to the end.
  
  Input strings are guaranteed to be English words in all lowercase.

  Hints:
    Array.prototype.indexOf()
    Array.prototype.push()
    Array.prototype.join()
    String.prototype.substr()
    String.prototype.split()
*/


function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  for (var i=0; i < str.length; i++){
    
    // find first vowel
    if (vowels.indexOf(str.charAt(i)) !== -1){
        
      if (i === 0) {
        return str + 'way';
      } else {
        // slice string at first vowel
        var prefix = str.slice(0,i);
        var suffix = str.slice(i);
        return suffix + prefix + 'ay';
      }
    }
  }
  
  // no vowels, return string
  return str;
}

translatePigLatin("consonant");
