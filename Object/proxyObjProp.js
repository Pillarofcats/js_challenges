//Q. Create an object with a property 'marks' which cannot be set to a value less than 0

const o = {
	marks: 0
}

Object.defineProperty(o, "marks", {
	set(v) {
  	if(v < 0) throw new Error('Value must be greater than or equal to zero')
    
    marks = v
  },
  get() {
  	return marks
  }
})

o.marks = 1
console.log(o)
o.marks = -1

//OR

const obj = {
  _marks: 0,

  set marks(value) {
    if (value < 0) throw new Error("Marks cant be less than zero");
    this._marks = value;
  },

  get marks() {
    return this._marks;
  },
};