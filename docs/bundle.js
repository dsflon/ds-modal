!function(t){var e={};function s(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)s.d(o,l,function(e){return t[e]}.bind(null,l));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}}(s(1));var l=new o.default(".modal");new o.default(".modal2",{width:768,modalSpeed:200,bgColor:"#CCC",bgOpacity:.9,innerBgColor:"#CCC",innerBgPadding:40,closeBtn:"Close",closeCancel:!1,addClass:"",fixed:!0});l.OpenEnd=function(t){console.log(t,"openEnd")},l.CloseEnd=function(){console.log("closeEnd")}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}}();var l=function(){function t(e,s){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e?(this.selector=e,this.dsModalDetail=this.selector.split(".")[1]+"_detail",this.dsModalBox=this.selector.split(".")[1]+"_box",this.dsModalBoxInner=this.selector.split(".")[1]+"_box_inner",this.dsModalWrap=this.selector.split(".")[1]+"_wrap",this.dsModalBoxClose=this.selector.split(".")[1]+"_box_close",this.dsModalBoxBg=this.selector.split(".")[1]+"_bg",this.linkInnerHTML=this.selector.split(".")[1]+"_link_innerHTML",null==s&&(s={}),this.width=s.width?s.width:960,this.modalSpeed=s.modalSpeed?s.modalSpeed:200,this.bgColor=s.bgColor?s.bgColor:"#000",this.bgOpacity=s.bgOpacity?s.bgOpacity:.8,this.innerBgColor=s.innerBgColor?s.innerBgColor:"#FFF",this.innerBgPadding=s.innerBgPadding>=0?s.innerBgPadding:20,this.closeBtn=s.closeBtn||""==s.closeBtn?s.closeBtn:"×",this.closeCancel=!!s.closeCancel&&s.closeCancel,this.trigger=s.trigger?s.trigger:"click",this.addClass=s.addClass?s.addClass:"",this.fixed=!(!s.fixed||!s.fixed)&&s.fixed,this.OpenEnd=function(){},this.CloseEnd=function(){},this.dsModalMovieHeight=this.width/16*9,this.dsModalImg=".gif|.jpg|.jpeg|.png",this.dsModalHtml="//|.html|.php|=",this.dsModalMovie="youtube|youtu",this.target=null,this.index=null,this.tagHTML=document.getElementsByTagName("html")[0],this.Init(),0===this.modal.length?(console.error("'"+this.selector+"' is not found"),!1):void this.CreateModalArea()):(console.error("Please set selector."),!1)}return o(t,[{key:"Init",value:function(){var t=this;if(this.modal=document.querySelectorAll(this.selector),this.Openfunc=function(e){e.preventDefault(),t.target=e.currentTarget,t.Set()},this.modal[0]){this.dsModalDetailElm=document.getElementsByClassName(this.dsModalDetail);for(var e=0;e<this.modal.length;e++)this.modal[e].addEventListener("click",this.Openfunc);for(e=0;e<this.dsModalDetailElm.length;e++)this.dsModalDetailElm[e].style.display="none";for(e=0;e<this.modal.length;e++){this.modal[e].getAttribute("href")||this.AddClass(this.modal[e],this.linkInnerHTML)}}}},{key:"ReInit",value:function(){for(var t=0;t<this.modal.length;t++)this.modal[t].removeEventListener("click",this.Openfunc);this.Init()}},{key:"CreateModalArea",value:function(){var t=this,e='<div id="'+this.dsModalBox+'" class="'+this.addClass+'">';e+='<div id="'+this.dsModalBoxInner+'">',e+='<div id="'+this.dsModalWrap+'"></div>',e+='<p id="'+this.dsModalBoxClose+'">'+this.closeBtn+"</p>",e+="</div>",e+="</div>",e+='<div id="'+this.dsModalBoxBg+'"></div>',this.dsModalBoxCSS="position: "+(this.fixed?"fixed":"absolute")+"; ",this.dsModalBoxCSS+="top: "+(this.fixed?"50%":"0")+"; ",this.dsModalBoxCSS+="left: 50%; ",this.dsModalBoxCSS+="z-index: 10001; ",this.dsModalBoxCSS+="width: 100%; ",this.dsModalBoxCSS+="cursor: pointer; ",this.dsModalBoxCSS+="transform: "+(this.fixed?"translate(-50%,-50%)":"translate(-50%,0)")+"; ",this.dsModalBoxCSS+="-ms-transform: "+(this.fixed?"translate(-50%,-50%)":"translate(-50%,0)")+"; ",this.dsModalBoxCSS+="-webkit-transform: "+(this.fixed?"translate(-50%,-50%)":"translate(-50%,0)")+"; ",this.dsModalBoxCSS+="opacity: 0; ",this.dsModalBoxCSS+="pointer-events: none; ",this.dsModalBoxBgCSS="position: fixed; ",this.dsModalBoxBgCSS+="left: 0; ",this.dsModalBoxBgCSS+="top: 0; ",this.dsModalBoxBgCSS+="width: 100%; ",this.dsModalBoxBgCSS+="height: 200%; ",this.dsModalBoxBgCSS+="background:"+this.bgColor+"; ",this.dsModalBoxBgCSS+="transition: all "+this.modalSpeed/1e3+"s ease; ",this.dsModalBoxBgCSS+="-webkit-transition: all "+this.modalSpeed/1e3+"s ease; ",this.dsModalBoxBgCSS+="z-index: 10000; ",this.dsModalBoxBgCSS+="cursor: pointer; ",this.dsModalBoxBgCSS+="opacity: 0; ",this.dsModalBoxBgCSS+="pointer-events: none; ";var s="position: absolute; ";s+="right: 0; ",s+="top: -50px; ",s+="z-index: 10000; ",s+="cursor: pointer; ",s+="color: #FFF; ",s+="font-size: 40px; ",s+="line-height: 1; ",s+="margin: 0; ",this.dsModalBoxInnerCSS="background: "+this.innerBgColor+"; ",this.dsModalBoxInnerCSS+="padding: "+this.innerBgPadding+"px; ",this.dsModalBoxInnerCSS+="position: relative; ",this.dsModalBoxInnerCSS+="cursor: default; ",this.dsModalBoxImgCSS="padding: 0; ",this.dsModalBoxImgCSS+="background: none; ",this.dsModalImgCSS="height: auto; ",this.dsModalImgCSS+="max-width: 100%; ",this.dsModalImgCSS+="display: block; ",this.dsModalImgCSS+="margin: 0 auto; ",this.dsModalBoxMovieCSS="padding: 0; ",this.dsModalBoxMovieCSS+="background: none; ",this.dsModalBoxMovieCSS+="height: 0; ",this.dsModalBoxMovieCSS+="position: relative; ",this.dsModalBoxMovieCSS+="padding-bottom: 56.25%; ",this.dsModalBoxMovieIframeCSS="display: block; ",this.dsModalBoxMovieIframeCSS+="height: 100%; ",this.dsModalBoxMovieIframeCSS+="position: absolute; ",this.dsModalBoxMovieIframeCSS+="left: 0; ",this.dsModalBoxMovieIframeCSS+="top: 0; ",this.dsModalBoxMovieIframeCSS+="width: 100%; ",this.modal&&(document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",e),this.dsModalBoxElm=document.getElementById(this.dsModalBox),this.dsModalBoxInnerElm=document.getElementById(this.dsModalBoxInner),this.dsModalBoxCloseElm=document.getElementById(this.dsModalBoxClose),this.dsModalBoxBgElm=document.getElementById(this.dsModalBoxBg),this.linkInnerHTMLElm=document.getElementsByClassName(this.linkInnerHTML),this.dsModalBoxElm.style.cssText=this.dsModalBoxCSS,this.dsModalBoxInnerElm.style.cssText=this.dsModalBoxInnerCSS,this.dsModalBoxBgElm.style.cssText=this.dsModalBoxBgCSS,this.dsModalBoxCloseElm.style.cssText=s,this.modal[0].classList||(this.dsModalBoxElm.style.display="none",this.dsModalBoxBgElm.style.display="none"));var o=function(e){e.preventDefault(),t.Close()};this.dsModalBoxCloseElm=document.getElementById(this.dsModalBoxClose),this.dsModalBoxBgElm=document.getElementById(this.dsModalBoxBg),this.dsModalBoxCloseElm.addEventListener("click",o),this.dsModalBoxBgElm.addEventListener("click",o)}},{key:"Open",value:function(t){if(!this.modal[0])return console.error("OpenModal('"+t+"') ERROR  '"+t+"' is not found."),!1;this.target=document.querySelectorAll(t)[0],this.Set()}},{key:"Set",value:function(){var t=this.target.getAttribute("href"),e=new String(t);this.index=Array.prototype.indexOf.call(this.modal,this.target),this.scrollVal=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t?e.match(this.dsModalImg)?this.IfImage(t):e.match(this.dsModalMovie)?this.IfYoutube(t):e.match(this.dsModalHtml)&&this.IfOuterHTML(t):this.IfInnerHTML()}},{key:"IfImage",value:function(t){var e=this,s='<img src="'+t+'" class="j-modal_img">',o=new Image;o.src=t,this.AddClass(this.dsModalBoxInnerElm,"j-modal_img"),this.dsModalBoxInnerElm.style.cssText=this.dsModalBoxImgCSS,this.dsModalWrapElm=this.dsModalBoxInnerElm.querySelectorAll("#"+this.dsModalWrap)[0],this.dsModalWrapElm.innerHTML=s,document.getElementsByClassName("j-modal_img")[0].style.cssText=this.dsModalImgCSS,o.onload=function(){e.Ready()}}},{key:"IfYoutube",value:function(t){var e='<iframe src="https://www.youtube.com/embed/'+t.split("/")[3]+'?autoplay=1&rel=0&playsinline=1" allowfullscreen="true" frameborder="0"></iframe>';this.AddClass(this.dsModalBoxInnerElm,"j-modal_movie"),this.dsModalBoxInnerElm.style.cssText=this.dsModalBoxImgCSS,this.dsModalWrapElm=this.dsModalBoxInnerElm.querySelectorAll("#"+this.dsModalWrap)[0],this.dsModalWrapElm.style.cssText=this.dsModalBoxMovieCSS,this.dsModalWrapElm.innerHTML=e,this.dsModalWrapElm.getElementsByTagName("iframe")[0].style.cssText=this.dsModalBoxMovieIframeCSS,this.Ready()}},{key:"IfOuterHTML",value:function(t){var e=this,s=this.target.getAttribute("data-ModalType");if(s){if("iframe"==s){var o=.8*window.innerHeight,l=this.target.getAttribute("data-modalHeight");l&&(o=l);var i='<iframe src="'+t+'" width="100%" height="'+o+'" frameborder="0"></iframe>';this.dsModalBoxInnerElm.style.cssText=this.dsModalBoxImgCSS,this.dsModalWrapElm=this.dsModalBoxInnerElm.querySelectorAll("#"+this.dsModalWrap)[0],this.dsModalWrapElm.innerHTML=i,this.Ready()}}else{var d=new XMLHttpRequest;d.open("GET",t,!0),d.timeout=3e3,d.onload=function(t){4===d.readyState&&(200===d.status?(e.dsModalBoxInnerElm.style.cssText=e.dsModalBoxInnerCSS,e.dsModalWrapElm=e.dsModalBoxInnerElm.querySelectorAll("#"+e.dsModalWrap)[0],e.dsModalWrapElm.innerHTML=d.responseText,e.Ready()):console.error("This request got an error."))},d.ontimeout=function(e){console.error("The request for "+t+" timed out.")},d.onerror=function(t){console.error("This request got an error.")},d.send(null)}}},{key:"IfInnerHTML",value:function(){var t=Array.prototype.indexOf.call(this.linkInnerHTMLElm,this.target),e=this.dsModalDetailElm[t].innerHTML;this.dsModalBoxInnerElm.style.cssText=this.dsModalBoxInnerCSS,this.dsModalWrapElm=this.dsModalBoxInnerElm.querySelectorAll("#"+this.dsModalWrap)[0],this.dsModalWrapElm.innerHTML=e,this.Ready()}},{key:"Ready",value:function(){var t=this,e=this.target.getAttribute("data-modalWidth"),s=this.target.getAttribute("data-modalHeight");e=e||this.width+"px",s=s||"initial",this.dsModalBoxElm.style.maxWidth=e,this.dsModalBoxElm.style.height=s,this.dsModalBoxElm.style.transition="initial",this.dsModalBoxElm.style.setProperty("-webkit-transition","initial"),setTimeout(function(){t.Show()},10)}},{key:"Show",value:function(){var t=this,e=window.innerHeight,s=this.dsModalBoxElm.scrollHeight,o=(e-s)/2;this.fixed?(this.tagHTML.style.position="fixed",this.tagHTML.style.width="100%",this.tagHTML.style.top=-this.scrollVal+"px"):this.dsModalBoxElm.style.top=e>s?this.scrollVal+o+"px":this.scrollVal+40+"px",setTimeout(function(){if(t.modal[0].classList){t.dsModalBoxElm.style.opacity=1,t.dsModalBoxElm.style.pointerEvents="inherit",t.dsModalBoxElm.style.transition="all "+t.modalSpeed/1e3+"s ease",t.dsModalBoxElm.style.setProperty("-webkit-transition","all "+t.modalSpeed/1e3+"s ease"),t.dsModalBoxBgElm.style.opacity=t.bgOpacity,t.dsModalBoxBgElm.style.pointerEvents="inherit";t.dsModalBoxElm.addEventListener("transitionend",function e(){t.OpenEnd(t.index),t.dsModalBoxElm.removeEventListener("transitionend",e,!1)},!1)}else t.dsModalBoxElm.style.opacity=1,t.dsModalBoxBgElm.style.opacity=1,t.dsModalBoxElm.style.display="block",t.dsModalBoxBgElm.style.display="block"},100)}},{key:"Close",value:function(){var t=this;this.dsModalBoxElm.style.opacity=0,this.dsModalBoxElm.style.pointerEvents="none",this.dsModalBoxBgElm.style.opacity=0,this.dsModalBoxBgElm.style.pointerEvents="none";this.dsModalBoxElm.addEventListener("transitionend",function e(){t.dsModalBoxInnerElm.setAttribute("class",!1),t.dsModalWrapElm.setAttribute("style",!1),t.dsModalWrapElm.innerHTML="",t.CloseEnd(),t.dsModalBoxElm.removeEventListener("transitionend",e,!1)},!1),this.modal[0].classList||(this.dsModalBoxElm.style.display="none",this.dsModalBoxBgElm.style.display="none"),this.fixed&&(this.tagHTML.removeAttribute("style"),window.scroll(0,this.scrollVal))}},{key:"AddClass",value:function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}}]),t}();e.default=l}]);