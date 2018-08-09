/*

ds-modal

GitHub: https://github.com/dsflon/
License: dsflon All Rights Reserved.

*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.DsModal = factory();
    }
}(this, function() {

    function DsModal(selector, option) {

        this.selector = selector;

        this.DsModalDetail = "j-modal_detail";
        this.DsModalBox = this.selector.split(".")[1] + "_box";
        this.DsModalBoxInner = this.selector.split(".")[1] + "_box_inner";
        this.DsModalWrap = this.selector.split(".")[1] + "_wrap";
        this.DsModalBoxClose = this.selector.split(".")[1] + "_box_close";
        this.DsModalBoxBg = this.selector.split(".")[1] +"_bg";
        this.linkInnerHTML = this.selector.split(".")[1] + "_link_innerHTML";

        //option
        if(option == null) option = {};
        this.width = option.width ? option.width : 960;
        this.modalSpeed = option.modalSpeed ? option.modalSpeed : 200;
        this.bgColor = option.bgColor ? option.bgColor : "#000";
        this.bgOpacity = option.bgOpacity ? option.bgOpacity : 0.8;
        this.innerBgColor = option.innerBgColor ? option.innerBgColor : "#FFF";
        this.innerBgPadding = option.innerBgPadding>=0 ? option.innerBgPadding : 20;
        this.closeBtn = option.closeBtn || option.closeBtn=="" ? option.closeBtn : "×";
        this.closeCancel = option.closeCancel ? option.closeCancel : false;
        this.trigger = option.trigger ? option.trigger : "click";
        this.addClass = option.addClass ? option.addClass : "";
        this.fixed = option.fixed && option.fixed ? option.fixed : false;

        this.OpenEnd = function(){};
        this.CloseEnd = function(){};

        this.DsModalMovieHeight = (this.width / 16) * 9; //動画縦幅 16:9
        this.DsModalImg = ".gif|.jpg|.jpeg|.png"; //画像を判別
        this.DsModalHtml = "//|.html|.php|="; //外部HTML or PHPを判別
        this.DsModalMovie = "youtube|youtu"; //動画を判別

        this.target = null;
        this.index = null;

        this.tagHTML = document.getElementsByTagName('html')[0];

        this.Init();

        if(this.modal.length == 0) {
            console.error( "'" + this.selector + "' is not found" );
            return false;
        } else {
            this.CreateModalArea();
        };


    }


    /**
    **
    ** Init
    **
    **/
    DsModal.prototype.Init = function() {

        var THAT = this;

        this.modal = document.querySelectorAll( this.selector );

        this.Openfunc = function(e) {

            e.preventDefault();

            THAT.target = e.currentTarget;
            THAT.Set();

        }

        if( this.modal[0] ) {

            this.DsModalDetailElm = document.getElementsByClassName("j-modal_detail");

            for (var i = 0; i < this.modal.length; i++) {

                this.modal[i].addEventListener( "click", this.Openfunc);

            }

        }

    }

    DsModal.prototype.ReInit = function() {

        for (var i = 0; i < this.modal.length; i++) {

            this.modal[i].removeEventListener( "click", this.Openfunc);

        }

        this.Init();

    }


    DsModal.prototype.CreateModalArea = function() {

        var THAT  = this;

        var modalAppendHTML  = '<div id="'+ this.DsModalBox +'" class="'+ this.addClass +'">';
            modalAppendHTML += '<div id="'+ this.DsModalBoxInner +'">';
            modalAppendHTML += '<div id="'+ this.DsModalWrap +'"></div>';
            modalAppendHTML += '<p id="'+ this.DsModalBoxClose +'">'+ this.closeBtn +'</p>';
            modalAppendHTML += '</div>';
            modalAppendHTML += '</div>';
            modalAppendHTML += '<div id="'+ this.DsModalBoxBg +'"></div>';

        this.DsModalBoxCSS =  "position: " + ( this.fixed ? "fixed" : "absolute" ) + "; ";
        this.DsModalBoxCSS += "top: " + ( this.fixed ? "50%" : "0" ) + "; ";
        this.DsModalBoxCSS += "left: 0; ";
        this.DsModalBoxCSS += "right: 0; ";
        this.DsModalBoxCSS += "margin: auto; ";
        this.DsModalBoxCSS += "z-index: 10001; ";
        this.DsModalBoxCSS += "width: 100%; ";
        this.DsModalBoxCSS += "cursor: pointer; ";
        this.DsModalBoxCSS += "transform: " + ( this.fixed ? "translate(0,-50%)" : "translate(0,0)" ) + "; ";
        this.DsModalBoxCSS += "-ms-transform: " + ( this.fixed ? "translate(0,-50%)" : "translate(0,0)" ) + "; ";
        this.DsModalBoxCSS += "-webkit-transform: " + ( this.fixed ? "translate(0,-50%)" : "translate(0,0)" ) + "; ";
        this.DsModalBoxCSS += "opacity: 0; ";
        this.DsModalBoxCSS += "pointer-events: none; "

        this.DsModalBoxBgCSS = "position: fixed; ";
        this.DsModalBoxBgCSS += "left: 0; ";
        this.DsModalBoxBgCSS += "top: 0; " ;
        this.DsModalBoxBgCSS += "width: 100%; ";
        this.DsModalBoxBgCSS += "height: 200%; ";
        this.DsModalBoxBgCSS += "background:" + this.bgColor + "; ";
        this.DsModalBoxBgCSS += "transition: all "+ this.modalSpeed/1000 +"s ease; ";
        this.DsModalBoxBgCSS += "-webkit-transition: all "+ this.modalSpeed/1000 +"s ease; ";
        this.DsModalBoxBgCSS += "z-index: 10000; ";
        this.DsModalBoxBgCSS += "cursor: pointer; ";
        this.DsModalBoxBgCSS += "opacity: 0; ";
        this.DsModalBoxBgCSS += "pointer-events: none; ";

        var DsModalBoxCloseCSS =  "position: absolute; ";
            DsModalBoxCloseCSS += "right: 0; ";
            DsModalBoxCloseCSS += "top: -50px; ";
            DsModalBoxCloseCSS += "z-index: 10000; ";
            DsModalBoxCloseCSS += "cursor: pointer; ";
            DsModalBoxCloseCSS += "color: #FFF; ";
            DsModalBoxCloseCSS += "font-size: 40px; ";
            DsModalBoxCloseCSS += "line-height: 1; ";
            DsModalBoxCloseCSS += "margin: 0; ";

        this.DsModalBoxInnerCSS =  "background: " + this.innerBgColor + "; ";
        this.DsModalBoxInnerCSS += "padding: " + this.innerBgPadding + "px; ";
        this.DsModalBoxInnerCSS += "position: relative; ";
        this.DsModalBoxInnerCSS += "cursor: default; ";

        this.DsModalBoxImgCSS = "padding: 0; "
        this.DsModalBoxImgCSS += "background: none; "

        this.DsModalImgCSS =  "height: auto; ";
        this.DsModalImgCSS += "max-width: 100%; ";
        this.DsModalImgCSS += "display: block; ";
        this.DsModalImgCSS += "margin: 0 auto; "

        this.DsModalBoxMovieCSS =  "padding: 0; ";
        this.DsModalBoxMovieCSS += "background: none; ";
        this.DsModalBoxMovieCSS += "height: 0; ";
        this.DsModalBoxMovieCSS += "position: relative; ";
        this.DsModalBoxMovieCSS += "padding-bottom: 56.25%; "

        this.DsModalBoxMovieIframeCSS =  "display: block; ";
        this.DsModalBoxMovieIframeCSS += "height: 100%; ";
        this.DsModalBoxMovieIframeCSS += "position: absolute; ";
        this.DsModalBoxMovieIframeCSS += "left: 0; ";
        this.DsModalBoxMovieIframeCSS += "top: 0; ";
        this.DsModalBoxMovieIframeCSS += "width: 100%; "

        if( this.modal ) {

            document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",modalAppendHTML);

            this.DsModalBoxElm = document.getElementById(this.DsModalBox);
            this.DsModalBoxInnerElm = document.getElementById(this.DsModalBoxInner);
            this.DsModalBoxCloseElm = document.getElementById(this.DsModalBoxClose);
            this.DsModalBoxBgElm = document.getElementById(this.DsModalBoxBg);
            this.linkInnerHTMLElm = document.getElementsByClassName(this.linkInnerHTML);

            this.DsModalBoxElm.style.cssText = this.DsModalBoxCSS;
            this.DsModalBoxInnerElm.style.cssText = this.DsModalBoxInnerCSS;
            this.DsModalBoxBgElm.style.cssText = this.DsModalBoxBgCSS;
            this.DsModalBoxCloseElm.style.cssText = DsModalBoxCloseCSS;

            for (var i = 0; i < this.DsModalDetailElm.length; i++) {
                this.DsModalDetailElm[i].style.display = "none";
            }

            for (var i = 0; i < this.modal.length; i++) {
                var THIS_DATA = this.modal[i].getAttribute("href");
                if(!THIS_DATA) this.AddClass(this.modal[i],this.linkInnerHTML);
            }

            if( !this.modal[0].classList ) { //IE9
                this.DsModalBoxElm.style.display = "none";
                this.DsModalBoxBgElm.style.display = "none";
            }

        }


        var CloseFunc = function(e) {
            e.preventDefault();
            THAT.Close();
        }

        this.DsModalBoxCloseElm = document.getElementById(this.DsModalBoxClose);
        this.DsModalBoxBgElm = document.getElementById(this.DsModalBoxBg);

        this.DsModalBoxCloseElm.addEventListener("click", CloseFunc);
        this.DsModalBoxBgElm.addEventListener("click", CloseFunc);


    }
    //CreateModalArea

    DsModal.prototype.Open = function( elm ) {

        if( this.modal[0] ) {

             this.target = document.querySelectorAll( elm )[0];
             this.Set();

        } else {

            console.error( "OpenModal('" + elm + "') ERROR  '" + elm + "' is not found." );
            return false;

        }

    }

    DsModal.prototype.Set = function() {

        var THIS_DATA = this.target.getAttribute("href");
        var THIS_DATA_STRING = new String( THIS_DATA );
        this.index = Array.prototype.indexOf.call(this.modal, this.target);

        this.scrollVal = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if( THIS_DATA ) {

            if( THIS_DATA_STRING.match( this.DsModalImg ) ) {//hrefが画像の場合

                this.IfImage( THIS_DATA );

            } else if( THIS_DATA_STRING.match( this.DsModalMovie ) ) {//hrefがyoutubeの場合

                this.IfYoutube( THIS_DATA );

            } else if( THIS_DATA_STRING.match( this.DsModalHtml)  ) {//hrefが外部HTMLの場合

                this.IfOuterHTML( THIS_DATA );

            }

        } else {

            this.IfInnerHTML();

        }

    }
    //Set

    DsModal.prototype.IfImage = function(thisData) {

        var THAT = this;

        var modalAppendHTML  = '<img src="'+ thisData +'" class="j-modal_img">';

        var IMG = new Image();
        IMG.src = thisData;

        this.AddClass(this.DsModalBoxInnerElm,"j-modal_img");
        this.DsModalBoxInnerElm.style.cssText = this.DsModalBoxImgCSS;

        this.DsModalWrapElm = this.DsModalBoxInnerElm.querySelectorAll("#" + this.DsModalWrap)[0];
        this.DsModalWrapElm.innerHTML = modalAppendHTML;

        document.getElementsByClassName("j-modal_img")[0].style.cssText = this.DsModalImgCSS;

        IMG.onload = function() {
            THAT.Ready();
        };

    }
    //IfImage
    DsModal.prototype.IfYoutube = function(thisData) {

        var THIS_ID = thisData.split("/")[3];
        var modalAppendHTML  = '<iframe src="https://www.youtube.com/embed/'+ THIS_ID +'?autoplay=1&rel=0&playsinline=1" allowfullscreen="true" frameborder="0"></iframe>';

        this.AddClass(this.DsModalBoxInnerElm,"j-modal_movie");
        this.DsModalBoxInnerElm.style.cssText = this.DsModalBoxImgCSS;

        this.DsModalWrapElm = this.DsModalBoxInnerElm.querySelectorAll("#" + this.DsModalWrap)[0];
        this.DsModalWrapElm.style.cssText = this.DsModalBoxMovieCSS;
        this.DsModalWrapElm.innerHTML = modalAppendHTML;

        this.DsModalWrapElm.getElementsByTagName("iframe")[0].style.cssText = this.DsModalBoxMovieIframeCSS;

        this.Ready();

    }
    //IfYoutube
    DsModal.prototype.IfOuterHTML = function(thisData) {

        var THAT = this;

        var TYPE = this.target.getAttribute("data-ModalType");

        if(!TYPE) {

            var REQUEST = new XMLHttpRequest();
            REQUEST.open("GET", thisData, true);
            REQUEST.timeout = 3000;

            REQUEST.onload = function(event) {

                if (REQUEST.readyState === 4) {
                    if (REQUEST.status === 200) {

                        THAT.DsModalBoxInnerElm.style.cssText = THAT.DsModalBoxInnerCSS;

                        THAT.DsModalWrapElm = THAT.DsModalBoxInnerElm.querySelectorAll("#" + THAT.DsModalWrap)[0];
                        THAT.DsModalWrapElm.innerHTML = REQUEST.responseText;

                        THAT.Ready();

                    } else {
                        console.error("This request got an error.");
                    }
                }

            };
            REQUEST.ontimeout = function(event) {
                alert("The request for " + thisData + " timed out.");
            };
            REQUEST.onerror = function(event) {
                console.error("This request got an error.");
            };
            REQUEST.send(null);

        } else if (TYPE == "iframe") {

            var height = window.innerHeight * 0.8;
            var modalHeight = this.target.getAttribute("data-modalHeight")
            if( modalHeight ) height = modalHeight;

            var modalAppendHTML  = '<iframe src="'+ thisData +'" width="100%" height="'+ height +'" frameborder="0"></iframe>';

            this.DsModalBoxInnerElm.style.cssText = this.DsModalBoxImgCSS;

            this.DsModalWrapElm = this.DsModalBoxInnerElm.querySelectorAll("#" + this.DsModalWrap)[0];
            this.DsModalWrapElm.innerHTML = modalAppendHTML;

            this.Ready();

        }

    }
    //IfOuterHTML
    DsModal.prototype.IfInnerHTML = function() {

        var INDEX = Array.prototype.indexOf.call(this.linkInnerHTMLElm, this.target);
        var THIS_HTML = this.DsModalDetailElm[ INDEX ].innerHTML;

        this.DsModalBoxInnerElm.style.cssText = this.DsModalBoxInnerCSS;

        this.DsModalWrapElm = this.DsModalBoxInnerElm.querySelectorAll("#" + this.DsModalWrap)[0];
        this.DsModalWrapElm.innerHTML = THIS_HTML;

        this.Ready();

    }
    //IfInnerHTML

    /**
    **
    ** Ready
    **
    **/
    DsModal.prototype.Ready = function() {

        var THAT = this;

        var width = this.target.getAttribute("data-modalWidth");
        var height = this.target.getAttribute("data-modalHeight");

        width = width ? width : this.width + "px";
        height = height ? height : "inherit";

        this.DsModalBoxElm.style.maxWidth = width;
        this.DsModalBoxElm.style.height = height;
        this.DsModalBoxElm.style.transition = "inherit";
        this.DsModalBoxElm.style.setProperty("-webkit-transition", "inherit");

        setTimeout( function() {
            THAT.Show();
        }, 10 );

    }
    //Ready


    /**
    **
    ** Show
    **
    **/
    DsModal.prototype.Show = function() {

        var THAT = this;

        var WIN_HEIGHT = window.innerHeight;
        var THIS_HEIGHT = this.DsModalBoxElm.scrollHeight;
        var FIX = (WIN_HEIGHT - THIS_HEIGHT) / 2;

        if( !this.fixed ) { //absolute の場合 : モーダル表示位置計算

            this.DsModalBoxElm.style.top = WIN_HEIGHT > THIS_HEIGHT ? (this.scrollVal + FIX) + "px" : (this.scrollVal + 40) + "px";

        } else { //fixed の場合

            this.tagHTML.style.position = "fixed";
            this.tagHTML.style.width = "100%";
            this.tagHTML.style.top = -this.scrollVal + "px";
        }

        setTimeout( function() {

            if( !THAT.modal[0].classList ) { //IE9

                THAT.DsModalBoxElm.style.opacity = 1;
                THAT.DsModalBoxBgElm.style.opacity = 1;
                THAT.DsModalBoxElm.style.display = "block";
                THAT.DsModalBoxBgElm.style.display = "block";

            } else {

                THAT.DsModalBoxElm.style.opacity = 1;
                THAT.DsModalBoxElm.style.pointerEvents = "inherit";
                THAT.DsModalBoxElm.style.transition = "all " + THAT.modalSpeed / 1000 + "s ease";
                THAT.DsModalBoxElm.style.setProperty("-webkit-transition", "all " + THAT.modalSpeed / 1000 + "s ease");

                THAT.DsModalBoxBgElm.style.opacity = THAT.bgOpacity;
                THAT.DsModalBoxBgElm.style.pointerEvents = "inherit";

                var EndFunc = function() {
                    THAT.OpenEnd( THAT.index );
                    THAT.DsModalBoxElm.removeEventListener("transitionend", EndFunc, false);
                };

                THAT.DsModalBoxElm.addEventListener("transitionend", EndFunc, false);

            }

        },100);

    }


    /**
    **
    ** Close
    **
    **/
    DsModal.prototype.Close = function() {

        var THAT = this;

        this.DsModalBoxElm.style.opacity = 0;
        this.DsModalBoxElm.style.pointerEvents = "none";

        this.DsModalBoxBgElm.style.opacity = 0;
        this.DsModalBoxBgElm.style.pointerEvents = "none";

        var EndFunc = function() {

            THAT.DsModalBoxInnerElm.setAttribute("class", false);
            THAT.DsModalWrapElm.setAttribute("style", false)
            THAT.DsModalWrapElm.innerHTML = "";

            THAT.CloseEnd();

            THAT.DsModalBoxElm.removeEventListener("transitionend", EndFunc, false);

        };

        this.DsModalBoxElm.addEventListener("transitionend", EndFunc, false);

        //

        if( !this.modal[0].classList ) { //IE9
            this.DsModalBoxElm.style.display = "none";
            this.DsModalBoxBgElm.style.display = "none";
        }

        if( this.fixed ) { //fixed の場合

            this.tagHTML.removeAttribute("style");

            window.scroll( 0, this.scrollVal );

        }

    }

    DsModal.prototype.AddClass = function( element, _className ) {

        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }

    }

    return DsModal;

}));
