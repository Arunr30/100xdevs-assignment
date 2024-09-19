// we need to use whenever we want to transform.

const players = ['Dhoni', 'rutu', 'conway', 'bravo']

// const ans = players.map((player) => player + '- CSK')
// console.log(ans)

const ans = players.filter((player) => player === 'Dhoni' || player === 'rutu')

console.log(ans)

const points = [1, 2, 3, 4]

const result = points.reduce((sum, points) => sum + points, 0)
console.log(result)
