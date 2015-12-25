function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().split('').join(' ').replace(/\s+/g, "").replace(/[^\w]|_/g, "");
  
  var revStr = str.toLowerCase().split('').reverse().join(' ').replace(/\s+/g, "").replace(/[^\w]|_/g, "");
  
  if (revStr == str) {
      return str;
  } else {
      return revStr;
  }
    
}

palindrome("My age is 0, 0 si ega ym.");
