function randomNumbers() {
  return Math.floor(Math.random() * (20 - 1) + 1);
}
const obj = {}
for (let i = 0; i <= 10000; i++) {
  const num = randomNumbers()
  
  obj[num] = (obj[num] || 0 ) + 1
}

console.log(obj)

const valor = true || false // OR
const valor = true && false // AND