function countLetters(phrase){
  const stripped = phrase.replace(/ /g, '');

  let results = {}

  for (let c in stripped){
    if(!results[stripped[c]]){
      results[stripped[c]] = [c];
    }
    else {
      results[stripped[c]].push(c)
    }
  }
  return results
}

// Tests

console.log(countLetters('hello there'));
console.log(countLetters('general kenobi!'));