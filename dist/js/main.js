(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let m;const i=()=>{let e=(()=>{let e=(new Date("23 december 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();if(e.timeRemaining<=0)clearInterval(m);else{for(let t in e)"timeRemaining"!==e[t]&&e[t]<10&&e[t]>=0&&(e[t]="0"+e[t]);t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds}};i(),m=setInterval(i,1e3)})(),console.log("two.js")})();