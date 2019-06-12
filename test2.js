var a = 0;
var b = "0";
console.log(a == b); //"=="在做判断时将"0"转换为数字0
console.log(a === b); //"==="在做判断时未做任何转换，即严格意义上的判断相等
console.log(Boolean(a));
console.log(!!a); //!!x等价于Boolean(x)
var points = [ //定义一个数组points,含有两个元素
	{
		x: 0,
		y: 0
	}, //每一个元素都是一个对象
	{
		x: 1,
		y: 1
	}
];


console.log(points.toString());
console.log(points.valueOf());

var scope = "global scope";

function checkscope() {
	var scope = "local scope";

	function nested() {
		var scope = "nested scope";
		return scope;
	}
	return nested();
}
console.log(checkscope()); //在输出调用该函数时，scope其值被嵌套在最里面的scope所覆盖

function f() {
	console.log(scope); //这里函数内的变量声明"提前"至函数体顶部，即在这之前，执行了"var scope;"该语句。再执行该语句，因为scope还未被赋值，因此输出undefined。
	var scope = "local"; //执行到这里才定义变量初始化，赋值"local"
	console.log(scope);
}

f();