function shortcut(s1, s2) {
  // Check if either of the input strings is empty
  if (s1 === '' || s2 === '') {
    return '';
  }
  
  // Extract the initial letters of both strings
  const initialS1 = s1.charAt(0);
  const initialS2 = s2.charAt(0);
  
  // Concatenate the initial letters and return
  return initialS1 + initialS2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
