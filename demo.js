

/*今天看一看ES 6
关于scanf，scanf类似与C语言中输出语句printf,但是在ES 6项目中需要先引入scanf插件，才可以使用，得联网
做ES6 项目，先创建一个文件夹，然后在文件夹中创建一个js文件，你们可以先在我给你们发下去得ES文件中创建一个js文件
1、先将ES 6文件用vscode打开，在ES 6文件中创建一个demo.js文件

2、假设，咱们这个ES 6文件是个只有demo.js的文件夹，其他东西都没有，咱们得先需要对咱们的这个项目（demo.js）进行初始化,
怎样初始化那，需要先打开demo.js文件，然后打开终端，在终端里面输入npm init,回车即可！
因为没有网，所以咱们用我已经给大家下载好的依赖，就可以

3、这样咱们的项目就已经初始化完成，下面我们就可以进行ES 6开发，对了你们知道什么是ES 6吗？

ES 6：简单来说，他其实就是JavaScript，只不过他是最新的JavaScript，就是新一代的JS标准，原名叫JavaScript 2015（不用记，知道就行）
4、下面开始写代码，在写代码之前咱们需要先引入一个东西，就是scanf,如下代码，需要先require一个scanf，这里我们引入以后还不能直接使用，、
因为我们没有下载与之相关的插件，我们需要在命令行中执行npm i scanf(得联网去下载)

5、如果下载依赖成功，就可以使用scanf了，下面你们就可以在这个demo.js文件中，按照我发给你们那个ES6 编程.pdf文件，看着里面代码尝试一下。

6、开始联系吧小伙子们，看给大家发es6编程.pdf文件

7、再说一点，刚才忘了说，你们写完代码需要运行，在终端里面运行一个项目，
比如说项目的文件名叫demo.js，那么终端里面就写node demo/demo.js,demo可以加.js也可以不加
先将scanf给一个变量，然后在输出
注意：console.log(+a+b)输出的不是两个数相加，而是两个数拼接,如果需要写相加的和，应先将console中a+b括起来，看下面
或者给a+b赋一个新的变量c,输出c
*/
const scanf = require('scanf');
/*计算和*/
// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// let c=a+b;
// console.log('拼接a+b='+a+b);
// console.log('a+b=c='+c);
// console.log('a+b='+(a+b));
/**判断大小 */
// console.log('请输入两个数，判断两个数的大小：请按回车继续');
// console.log('请输入a');
// let a=scanf('%d');
// console.log('请输入b');
// let b=scanf('%d');
// if(a>b){
//     console.log('最大值是a:'+a);
// }else if(b>a){
//     console.log('最大值b:'+b);
// }else{
//     console.log('a=b=c'+a);
// }
/*求数组的长 */
// let arr=[1,2,3,4,5];
// console.log('数组的长度是'+arr.length+'\n分别是'+arr);
/**循环 */
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     let a=arr[i];
//     console.log(a);
// }
/**while 循环 */
// console.log('欢迎进入李春燕大脑系统');
// let arr = [];//定义数组
// while (1) {
//     console.log('1---添加一个数组');
//     console.log('2---显示全部数组');
//     console.log('3---删除最后一个数组');
//     console.log('4---退出');
//     let con = scanf('%d');
//     if (con === 1) {
//         console.log('1---添加一个数组');
//         let x = scanf('%d');
//         let y = scanf('%d');
//         let yan = {
//             'x':x,
//             'y':y,
//         }
//         arr.push(yan);
//         console.log(yan);
//         console.log('添加成功');
//     }
//     if (con === 2) {
//         console.log('2---显示全部数组');
//         for (let i = 0; i < arr.length; i++) {
//             let ae = arr[i];
//             // console.log(ae);  
//             console.log(`第${i+1}坐标为(${ae.x},${ae.y})`);
//         }
//         console.log(arr);
//     }
//     if (con === 3) {
//         console.log('3---删除最后一个幸运数字');
//         arr.pop();//删除数组中的最后一个
//         console.log('删除成功');
//     }
//     if (con === 4) {
//         console.log('退出');
//         break;
//     }
// }
/**坐标 */
// let yan = {
//     a: 1,
//     b: 2,
// }
// console.log('横坐标：' + yan.a);
// console.log('纵坐标：' + yan.b);
// console.log('坐标：(' + yan.a + ',' + yan.b + ')');

console.log('欢迎进入李春燕大脑系统');
let arr = [];//定义数组
while (1) {
    console.log('1---添加一个学生成绩');
    console.log('2---显示全部成绩');
    console.log('3---删除最后一个成绩');
    console.log('4---退出');
    let con = scanf('%d');
    if (con === 1) {
        console.log('1---添加一个学生成绩');
        console.log('请输入学生姓名：');
        let name=scanf('%s');
        let yuwen = scanf('%d');
        let shuxue = scanf('%d');
        let yingyu = scanf('%d');
        let yan = {
            'name':name,
            'yuwen':yuwen,
            'shuxue':shuxue,
            'yingyu':yingyu,
        }
        arr.push(yan);
        console.log(yan);
        console.log('添加成功');
    }
    if (con === 2) {
        console.log('2---显示全部成绩');
        for (let i = 0; i < arr.length; i++) {
            let ae = arr[i];
            // console.log(ae);  
            console.log(`学生：${ae.name}\n语文：${ae.yuwen}\n数学：${ae.shuxue}\n英语: ${ae.yingyu}`);
        }
        console.log(arr);
    }
    if (con === 3) {
        console.log('3---删除最后一个学生成绩');
        arr.pop();//删除数组中的最后一个
        console.log('删除成功');
    }
    if (con === 4) {
        console.log('退出');
        break;
    }
}