{/* <script defer></script> */}

/* ---------------------------------- 全局变量 ---------------------------------- */
const imgList = document.getElementsByTagName("img");
const dot_list = document.querySelectorAll(".dot_list>ul>li");
const rightBtn = document.getElementsByClassName("slider_control_right")[0];
const leftBtn = document.getElementsByClassName("slider_control_left")[0];
const container = document.getElementsByClassName("container")[0];
const length = imgList.length;
let currentImgId =0;//当前图片下标
let timer = null;


/* -------------------------------------------------------------------------- */
/*                                    原始操作                                    */
/* -------------------------------------------------------------------------- */

/* --------------------------------- 页面和点跳转 --------------------------------- */
const  pageTurn = ()=>{
    imgList[currentImgId].classList.add("img_active");
    dot_list[currentImgId].classList.add("indicators_active")
}
/* --------------------------------- 清除其余页面 --------------------------------- */
const clearPage = ()=>{
    imgList[currentImgId].classList.remove("img_active");
    dot_list[currentImgId].classList.remove("indicators_active")
}
/* ---------------------------------- 状态初始化 --------------------------------- */
const initState = ()=>{
    imgList[0].classList.add("img_active");
    dot_list[0].classList.add("indicators_active");
    currentImgId = 0;
}
/* ---------------------------------- 设置定时器 --------------------------------- */
const setAutoTurn = () =>{
    timer = setInterval(()=>{
        rightBtn.click();
    },2000)
}
/* ---------------------------------- 清除定时器 --------------------------------- */
const clearAutoTurn = ()=>{
    clearInterval(timer);
}


/* -------------------------------------------------------------------------- */
/*                                     功能                                     */
/* -------------------------------------------------------------------------- */
/* --------------------------------- 左右切换按钮 --------------------------------- */
const click_to_pageTurn = ()=>{
    leftBtn.addEventListener("click",()=>{
        clearPage();
        if(currentImgId === 0){
            currentImgId = length;
        }
        currentImgId = currentImgId -1;
        pageTurn();
    })
    rightBtn.addEventListener("click",()=>{
        clearPage();
        currentImgId = (currentImgId+1) % length;
        pageTurn();
    })
}
/* -------------------------------- 底部按钮浮入切换 -------------------------------- */
const mouseover_to_pageTurn = ()=>{
    for(let i=0; i<length; i++ ){
        dot_list[i].addEventListener("mouseover",()=>{
            clearPage();
            currentImgId = i;
            pageTurn();
        })
    }
}
/* ---------------------------------- 定时轮播 ---------------------------------- */
const autoTurn = () => {
    setAutoTurn();
    container.onmouseenter = ()=>{
        clearAutoTurn();
    }
    container.onmouseleave = ()=>{
        setAutoTurn();
    }
}

/* -------------------------------------------------------------------------- */
/*                                    启动函数                                    */
/* -------------------------------------------------------------------------- */
const init = ()=>{
    initState();
    click_to_pageTurn();
    mouseover_to_pageTurn();
    autoTurn();
}

/* -------------------------------------------------------------------------- */
/*                                     执行                                     */
/* -------------------------------------------------------------------------- */
init()
