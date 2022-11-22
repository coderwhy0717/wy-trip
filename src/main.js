import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import 'normalize.css'
import './assets/base.css'
import 'vant/es/image-preview/style'
import directives from '@/directives'
createApp(App).use(router).use(pinia).use(directives).mount('#app')
let arr = [
  [1, 9, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22],
  [2, 8, 12, 18, 22],
  [3, 7, 12, 13, 14, 15, 16, 18, 22],
  [4, 6, 16, 18, 22],
  [5, 5, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22],
  ];

  function demo(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < 30; j++) {
  if (arr[i].indexOf(j) > -1) {
  str += "█";
  } else {
  str += " ";
  }
  }
  str += "\n";
  }
  return str;
  }
  console.log(demo(arr));


  const abc = {
    'a':'a1',
    'b':'b2',
    'c':'c3'
  }
  const abcEls = Object.keys(abc)
  const valueEls = Object.values(abc)
  console.log(abcEls,"abcEls")
  console.log(valueEls,"valueEls")


