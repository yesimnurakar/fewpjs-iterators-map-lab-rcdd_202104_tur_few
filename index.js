const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials;
  return tutorials.map((arr) => {
    finalArr = arr.split(' ');
    for(let i = 0; i < finalArrarr.length; i++){
      finalArr[i] = finalArr[i].charAt(0).toUpperCase() + finalArr[i].slice(1);
    }
    finalArr = finalArr.join(' ');
    return finalArr;
  });
}
titleCased(tutorials);
