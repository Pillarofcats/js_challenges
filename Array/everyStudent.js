//Q. Check if all the students have passed or not (40 is the pass marks)

function studentsPassed(students) {
	
  return students.every((s) => s.score >= 40)
}

const studArr = [
	{
  	id: 0,
    score: 40
  },
  {
  	id: 1,
    score: 41
  },
  	{
  	id: 2,
    score: 50
  },
  	{
  	id: 3,
    score: 70
  },
  	{
  	id: 4,
    score: 90
  },
]

console.log('All students passed?', studentsPassed(studArr))