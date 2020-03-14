/**
 * TypeScript里的类跟 java一样，具有继承
 */
class Demo {
  static instance:Demo = new Demo();
}
console.log(Demo.instance===Demo.instance);
export= Demo