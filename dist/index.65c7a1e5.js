let html = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `
/*你好，我是clx
 *接下来我要展示我的前端功底
 *首先我要加一个div
 */
#div1{
    border:1px solid red;
    width:400px;
    height:400px;
}
/*接下来我把div变成一个八卦图
 *注意看好了
 *首先把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5)
    border:none;
}
/*八卦图是阴阳合成的
 *一黑一白
 */
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个圆圈
 */
#div1::before{
    width:200px;
    height:200px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:200px;
    height:200px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%,rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}   

`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp;";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        console.log(html.innerHTML);
        window.scrollTo(0, 9999); /*滚动条一直在最底部*/ 
        demo.scrollTo(0, 9999);
        if (n < string.length - 1) {
            //如果n不是最后一个，就继续
            n = n + 1;
            step();
        }
    }, 35);
};
step(); /* 
 style.innerHTML=`
body{
    color:red;
}
` 
 */ 

//# sourceMappingURL=index.65c7a1e5.js.map
