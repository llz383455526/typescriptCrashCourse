/**
 * 数据类型
 * 基本数据类型： 布尔（boolean)，数值(number)，字符串(string)，数组（array)，元组（Tuple),枚举(enum)
 * 引用数据类型：object
 * */

/**
 * boolean
 */
let isDone:boolean = true
console.log("boolean:"+isDone)
 /**
  * number
  * 
  */
let count:number = 2
console.log("number:"+count);
  /**
   * string
   */
let firstName:string = 'name'
let fullName:string = `${firstName} llz`
console.log("fullname:"+fullName);

/**
 * 数组：Array
 */
let score:Array<number> = [1,2,3]
console.log("array:"+score);


/**
 * 元组：Tuple
 * 表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */
let t:[string,number]
t = ["string",2]
// t[2] = 'llz' // 不能越界赋值和访问
t[0] = "llz"
t[1] = 3
console.log("Tuple:"+t);

/**
 * 枚举：enum
 * 枚举是一个被命名的整型常数的集合，默认从0开始计数，当枚举中的某个成员赋值后，其后的成员按依次加 1的规则确定其值
 * 1、数字枚举具有自增长的能力，而字符串枚举虽然没有自增长的行为，但是可以很好的序列化
 * 2、枚举具有方向映射功能
 */
enum week { Monday, Tuesday=3, Wednesday, Thursday,Friday,Saturday,Sunday}
let day:number = week.Saturday
console.log("enum result:"+day);  //7

console.log("反向映射:"+ week[3]); //'Tuesday'

/**
 * Any
 * 
 */
let notSure:any = false
notSure = 4 // 可以对 any 类型数据任意赋值
notSure.toFixed() // 可以对 any 类型数据调用多种 Object 上没有的方法
let anyArr:Array<any>=[1,'2',false]
console.log("any array:"+anyArr);

/**
 * object
 */
// declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

for(let i=0;i<10;i++) {
  setTimeout(function(){
    console.log(i);
  },i*10)
}

/**
 * Symbol 基本数据类型(不能 new Symbol())，表示独一无二的值
 */
const symbol1 = Symbol('1')
const symbol2 = Symbol('1')
// console.log(symbol1 === symbol2);