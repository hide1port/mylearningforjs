var str = 2;
var str1 = 3;

var then = new Date(2011, 0, 1);
var later = new Date(2011, 0, 1, 17, 10, 30);
var now = new Date(); //得到当前日期和时间
var elapsed = now - then; //计算时间间隔的毫秒数
console.log(now);
console.log(elapsed);
console.log(later.getFullYear()); //得到later的年份
console.log(later.getMonth()); //得到later的月份
console.log(later.getDate()); //得到later的
console.log(later.getDay());
console.log(later.getHours());
console.log(later.getUTCHours());

var a = [];
a.push(1, 2, 3); //push()方法向数组a中添加元素  （函数赋值给对象的属性，称为方法）
a.reverse(); //reverse()方法将数组a中元素反转  

var data = { //定义一个包含两个属性的对象
	trial1: [
		[1, 2],
		[3, 4]
	], //每一个属性都是数组
	trial2: [
		[2, 3],
		[4, 5]
	] //数组的元素也是数组
};

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

points.dist = function() {
	var p1 = this[0]; //this获得对当前数组的引用，即对points的引用
	var p2 = this[1]; //this[n]调用该数组第n个数据的值
	var a = p2.x - p1.x; // 由于points中两个元素均为对象，因此可以用.x,.y来调用各自的属性
	var b = p2.y - p1.y;
	return Math.sqrt(a * a + b * b); //Math为库中的对象，sqrt为其中的函数
};


function abs(n) { //求绝对值的函数
	if (n >= 0) {
		return n;
	} else {
		return -n;
	}
}

function factorial(n) { //while循环求阶乘的函数
	var product = 1;
	while (n > 1) {
		product *= n;
		n--;
	}
	return product;
}

function factorial2(n) { //for循环求阶乘的函数
	var i, product = 1;
	for (i = 2; i <= n; i++)
		product *= i;
	return product;
}

console.log(Math.log(Math.E)); //ln()函数
console.log(points.dist());
console.log(a);
console.log(abs(-10));
console.log(factorial2(5));
console.log(factorial(5));
console.log(str1 / str);