var ul = document.getElementById('numbers')

for(let i = 1; i < 100; i++) {
  let li = '<li>'

  if(i % 3 == 0 && i % 5 == 0) {
    li += 'FIZZ BUZZ'
  } else if(i % 3 == 0 && i % 5 != 0) {
    li += 'FIZZ'
  } else if(i % 5 == 0 && i % 3 != 0) {
    li += 'BUZZ'
  } else {
    li += i
  }

  li += '</li>'

  ul.innerHTML += li
}
