var s = "hellow world!";
var word = s.substring(s.indexOf(" ") + 1, s.length);
var x = s.split(" ");
console.log(s); //所有对字符串s进行操作的方法都无法改变字符串s本身，只是返回一个新的字符串值给新的字符串。
console.log(x);
console.log(word);

var s = "test"; //（在尝试访问一个字符串的属性时，会调用new String（）的方式来将字符串转换为对象，同时继承字符串的方法。）
s.len = 4; //创建一个临时字符串对象，并给其len属性赋值为4，随即销毁这个对象
var t = s.len; //这里通过原始的s来创建一个新字符串对象，并尝试读取len这个属性
console.log(t); //因为len本身在前面被创建又被销毁，所以访问不到，输出undefined

var o = {
		x: 1
	},
	p = {
		x: 1
	};
console.log(o === p); //两个单独的对象永不相等(这里的相等指的是对象本身)

var a = [],
	b = [];
console.log(a === b); //两个单独的数组永不相等（这里的相等指的是数组本身）

function equalArrays(a, b) { //通常的比较一个数组是比较它的属性，所以可以用这个函数比较两个单独的数组属性是否相等
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; i++)
		if (a[i] !== b[i]) return false;
	return true;
}

console.log(equalArrays(a, b));
console.log(1 + "x"); //因为中间是加号，自动将1变为字符串"1"与"x"相加，得到1x
console.log(1 - "x" + " objects"); //从左往右计算，1-x无法计算，输出NaN。而计算NaN+" objects"，会将NaN转换为字符串"NaN",最后输出NaN objects