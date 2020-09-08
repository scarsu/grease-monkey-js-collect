// ==UserScript==
// @name         全局暗黑
// @namespace    www.scarsu.com
// @version      0.1
// @description  try to take over the world!
// @author       scarsu
// @match        *
// @include      *
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let btn = document.createElement("button")
  let html = document.querySelector('html')
  Object.assign(btn.style,{
      position:'fixed',
      right:0,
      top:0,
      'z-index':99999,
      'background-color': '#000',
      color: '#fff'
  })
  btn.attributes.on = 'N'
  btn.textContent='Dark'
  btn.addEventListener('click',function(e){
      let flag = e.target.attributes.on === 'Y'
      if(flag){
          document.querySelector('html').style.filter=null
          e.target.attributes.on = 'N'
      }else{
          document.querySelector('html').style.filter='invert(80%) hue-rotate(200deg)'
          e.target.attributes.on = 'Y'
      }
  })
  html.prepend(btn)
})();