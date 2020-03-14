/**
 * 跟 js 函数定义与使用有以下区别：
 * 1、参数支持类型定义
 * 2、函数参数必须都传，如果需要可传可不传的参数需要用问号,且必须位于最后。ecmascript里如果不传，默认都是 undefined
 * 2、返回值支持类型定义
 */

 /**
  * 写法一
  * @param type 
  * @param params 
  * @param isDone 
  * @returns number类型数据。 一般情况下会省略，ts 会自动推算出返回类型
  */
 function doSomething(type:string, params:Array<any>, isDone:boolean):number {

  if (isDone) {

    return 0
  } else {
    return -1
  }
 }

 /**
  * 写法二
  * @param type 
  * @param params 
  * @param isDone 
  */
 let doSomething2 = function(type:string, params:Array<any>, isDone:boolean):number {
  if (isDone) {

    return 0
  } else {
    return -1
  }
 }

 /**
  * 写法三、最符合 ts 风格的完整写法
  * @param type 
  * @param params 
  * @param isDone 是可选参数，函数调用时可传可不传，必须位于参数列表最后。另外两个参数必须传
  * function 里的参数类型可以省略，ts 会自动根据类型定义进行推断
  */
 let doSomething3:(type1:string, params1:Array<any>, isDone1?:boolean)=> number 
  = function(type:string, params:Array<any>, isDone:boolean){
    if (isDone) {
      return 0
    } else {
      return -1
    }
  }

  /**
   * 函数默认参数
   * 参数 isDone是默认值为 fasle 的参数，默认参数不限制位置
   * 注意跟 es6有所差别: es6的默认参数定义是在函数声明时直接用=号为参数赋值，如 function (a,b=2)；ts 是 用冒号
   * 
   */
  let funcArgDefault:(type1:string, params1:Array<any>, isDone: false)=> number 
  = function(type:string, params:Array<any>, isDone:boolean){
    if (isDone) {
      return 0
    } else {
      return -1
    }
  }

  /**
   * 不定参数 跟 es6一致
   * 参数 res 会接收函数调用时传入
   */
  let funcRestArg:(type1:string, params1:Array<any>, ...rest:any)=> number 
  = function(type, params, ...rest){
    console.log(rest);
    return 1
  }

  // funcRestArg('llz',[1,2],4,'5')

  /**
   * 函数重载
   * 为同一方法名定义不同参数（不同个数或类型），不同返回值，都属于重载
   * 可能会觉得 ts 的重载定义方式有些多此一举
   */
  function funcDo(a:string):void
  function funcDo(a:Array<any>,b:string):number
  function funcDo(params:any):any {
    console.log(typeof params);
    if (typeof params === 'string') {
      console.log(params);
    }
    if (typeof params === 'object') {
      console.log(params);
    }
  }
  // funcDo('string params')
  funcDo([1,2],'string')