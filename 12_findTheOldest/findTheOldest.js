const findTheOldest = function (people) {
  const peopleAges = people.map((person) => {
    const ageAtDeath =
      (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth
    return { name: person.name, age: ageAtDeath }
  })
  const oldestPerson = peopleAges.reduce((acc, cur) =>
    acc.age > cur.age ? acc : (acc = cur)
  )
  return oldestPerson
}

const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest
