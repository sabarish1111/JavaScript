const timeoutobj=setTimeout(()=>{
    clearInterval(intervalobj);
    console.log("official\'s name is:JS");
},11000);
const
immediateobj=setImmediate(()=>{console.log("the name of the official will be displayed soon:")});
var i=10;
const
intervalobj=setInterval(()=>{console.log('wait for'+i+'sec');i--;
},1000);




