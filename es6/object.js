//es3数据保护
var Person = function() {
	var data = {
		name: 'es5',
		sex: 'male',
		age: 15
	}
	this.get = function(key) {
		return data[key]
	}
	this.set = function(key, value) {
		if (key !== 'sex') {
			data[key] = value
		};
	}
}
//声明一个实例
var person = new Person();
//读取
console.table({
	name: person.get('name'),
	sex: person.get('sex'),
	age: person.get('age')
})
//修改
person.set('name','es3');
console.table({
	name: person.get('name'),
	sex: person.get('sex'),
	age: person.get('age')
})

//es5数据保护
var Person = {
	name: 'es5',
	age: 15
};
Object.defineProperty(Person,'sex',{
	writable:false,
	value:'male'
});
Object.defineProperty(window,'PI',{
	writable:false,
	value:3.1415926
});
console.table({
	name: Person.name,
	age: Person.age,
	sex: Person.sex
});
Person.sex = 'female';
console.table({
	name: Person.name,
	age: Person.age,
	sex: Person.sex
});

//es6数据保护代理
let Person = {
	name: 'es6',
	sex: 'male',
	age: 15
}
let person = new Proxy(Person, {
	get(target, key) {
		return target[key]
	},
	set(target, key, value){
		if (key !== 'sex') {
			target[key] = value;
		};
	}
})

console.table({
	name: person.name,
	age: person.age,
	sex: person.sex
});

person.sex = 'female';
console.table({
	name: person.name,
	age: person.age,
	sex: person.sex
});