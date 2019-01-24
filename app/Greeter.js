var config = require('./config.json');
// 混用import和module.exports会报错，所以这里先用require了，

import styles from  './Greeter.css';
export default function greeter(){
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    greet.className=styles.root; //使用cssModule添加类名的方法
    return greet;
}

