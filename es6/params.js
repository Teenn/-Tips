//es6默认参数
function check() {
	throw new Error('can not be empty');
}
function f(x=check(),y=7,z=42) {
	return x+y+z;
}
console.log(f(1));
try {
	f()
} catch (e) {
	console.log(e)
} finally {

}


//es5可变参数
function f(){
	var a = Array.prototype.slice.call(arguments);
	var sum = 0;
	a.forEach((item) => {
		sum+=item*1;
	})
	a.forEach(function(item){
		sum+=item*1;
	})
	return sum
}
console.log(f(1,2,3,6));

//es6可变参数
function f(...a){
	var sum=0;
	a.forEach(item=>{
		sum+=item*1
	});
	return sum
}
console.log(f(1,2,3,6));

//es5合并数组
var params = ['hello', true, 7];
var other = [1, 2].concat(params);
console.log(other);

//es6利用拓展运算符合并数组
var params = ['hello', true, 7];
var other = [
	1, 2, ...params
];
console.log(other);