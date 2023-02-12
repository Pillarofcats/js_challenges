//Q. Get the average of all the salaries which is greater than 10000 from the department of "IT" from the array of objects)

const employees = [
	{
  	id: 0,
    salary: 8000,
    dept: 'IT'
  },
  {
  	id: 1,
    salary: 11000,
    dept: 'IT'
  },
  {
  	id: 2,
    salary: 12000,
    dept: 'IT'
  },
  {
  	id: 3,
    salary: 7000,
    dept: 'IT'
  },
  {
  	id: 4,
    salary: 13000,
    dept: 'IT'
  },
  	{
  	id: 5,
    salary: 16000,
    dept: 'A'
  },
  	{
  	id: 6,
    salary: 19000,
    dept: 'B'
  },
]

function avgSalaryIT(arr) {
	const empITArr = arr.filter((e) => e.dept === 'IT' && e.salary > 10000)
	return empITArr.reduce((a, v) => a + v.salary ,0) / empITArr.length
}

console.log('AVG salary of IT dept employees: ', avgSalaryIT(employees))