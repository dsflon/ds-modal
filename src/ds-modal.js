/*

ds-modal

GitHub: https://github.com/dsflon/
License: dsflon All Rights Reserved.

*/

export default class DsModal {

    constructor(selector, option) {

        if(!selector) {
            console.error( "Please set selector." );
            return false;
        };

        this.selector = selector;

        this.dsModalDetail = this.selector.split(".")[1] + "_detail";
        this.dsModalBox = this.selector.split(".")[1] + "_box";
        this.dsModalBoxInner = this.selector.split(".")[1] + "_box_inner";
        this.dsModalWrap = this.selector.split(".")[1] + "_wrap";
        this.dsModalBoxClose = this.selector.split(".")[1] + "_box_close";
        this.dsModalBoxBg = this.selector.split(".")[1] + "_bg";
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

        this.dsModalMovieHeight = (this.width / 16) * 9; //動画縦幅 16:9
        this.dsModalImg = ".gif|.jpg|.jpeg|.png"; //画像を判別
        this.dsModalHtml = "//|.html|.php|="; //外部HTML or PHPを判別
        this.dsModalMovie = "youtube|youtu"; //動画を判別

        this.target = null;
        this.index = null;

        this.tagHTML = document.getElementsByTagName('html')[0];

        this.Init();

        if(this.modal.length === 0) {
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
    Init() {

        this.modal = document.querySelectorAll( this.selector );

        this.Openfunc = (e) => {

            e.preventDefault();

            this.target = e.currentTarget;
            this.Set();

        }

        if( this.modal[0] ) {

            this.dsModalDetailElm = document.getElementsByClassName(this.dsModalDetail);

            for (var i = 0; i < this.modal.length; i++) {
                this.modal[i].addEventListener( "click", this.Openfunc);
            }

            for (var i = 0; i < this.dsModalDetailElm.length; i++) {
                this.dsModalDetailElm[i].style.display = "none";
            }

            for (var i = 0; i < this.modal.length; i++) {
                const THIS_DATA = this.modal[i].getAttribute("href");
                if(!THIS_DATA) this.AddClass( this.modal[i], this.linkInnerHTML );
            }

        }
    }

    ReInit() {

        for (var i = 0; i < this.modal.length; i++) {

            this.modal[i].removeEventListener( "click", this.Openfunc);

        }

        this.Init();

    }


    CreateModalArea() {

        let modalAppendHTML  = '<div id="'+ this.dsModalBox +'" class="'+ this.addClass +'">';
            modalAppendHTML += '<div id="'+ this.dsModalBoxInner +'">';
            modalAppendHTML += '<div id="'+ this.dsModalWrap +'"></div>';
            modalAppendHTML += '<p id="'+ this.dsModalBoxClose +'">'+ this.closeBtn +'</p>';
            modalAppendHTML += '</div>';
            modalAppendHTML += '</div>';
            modalAppendHTML += '<div id="'+ this.dsModalBoxBg +'"></div>';

        this.dsModalBoxCSS =  "position: " + ( this.fixed ? "fixed" : "absolute" ) + "; ";
        this.dsModalBoxCSS += "top: " + ( this.fixed ? "50%" : "0" ) + "; ";
        this.dsModalBoxCSS += "left: 50%; ";
        this.dsModalBoxCSS += "z-index: 10001; ";
        this.dsModalBoxCSS += "width: 100%; ";
        this.dsModalBoxCSS += "cursor: pointer; ";
        this.dsModalBoxCSS += "transform: " + ( this.fixed ? "translate(-50%,-50%)" : "translate(-50%,0)" ) + "; ";
        this.dsModalBoxCSS += "-ms-transform: " + ( this.fixed ? "translate(-50%,-50%)" : "translate(-50%,0)" ) + "; ";
        this.dsModalBoxCSS += "-webkit-transform: " + ( this.fixed ? "translate(-50%,-50%)" : "translate(-50%,0)" ) + "; ";
        this.dsModalBoxCSS += "opacity: 0; ";
        this.dsModalBoxCSS += "pointer-events: none; "

        this.dsModalBoxBgCSS = "position: fixed; ";
        this.dsModalBoxBgCSS += "left: 0; ";
        this.dsModalBoxBgCSS += "top: 0; " ;
        this.dsModalBoxBgCSS += "width: 100%; ";
        this.dsModalBoxBgCSS += "height: 200%; ";
        this.dsModalBoxBgCSS += "background:" + this.bgColor + "; ";
        this.dsModalBoxBgCSS += "transition: all "+ this.modalSpeed/1000 +"s ease; ";
        this.dsModalBoxBgCSS += "-webkit-transition: all "+ this.modalSpeed/1000 +"s ease; ";
        this.dsModalBoxBgCSS += "z-index: 10000; ";
        this.dsModalBoxBgCSS += "cursor: pointer; ";
        this.dsModalBoxBgCSS += "opacity: 0; ";
        this.dsModalBoxBgCSS += "pointer-events: none; ";

        let dsModalBoxCloseCSS =  "position: absolute; ";
            dsModalBoxCloseCSS += "right: 0; ";
            dsModalBoxCloseCSS += "top: -50px; ";
            dsModalBoxCloseCSS += "z-index: 10000; ";
            dsModalBoxCloseCSS += "cursor: pointer; ";
            dsModalBoxCloseCSS += "color: #FFF; ";
            dsModalBoxCloseCSS += "font-size: 40px; ";
            dsModalBoxCloseCSS += "line-height: 1; ";
            dsModalBoxCloseCSS += "margin: 0; ";

        this.dsModalBoxInnerCSS =  "background: " + this.innerBgColor + "; ";
        this.dsModalBoxInnerCSS += "padding: " + this.innerBgPadding + "px; ";
        this.dsModalBoxInnerCSS += "position: relative; ";
        this.dsModalBoxInnerCSS += "cursor: default; ";

        this.dsModalBoxImgCSS = "padding: 0; "
        this.dsModalBoxImgCSS += "background: none; "

        this.dsModalImgCSS =  "height: auto; ";
        this.dsModalImgCSS += "max-width: 100%; ";
        this.dsModalImgCSS += "display: block; ";
        this.dsModalImgCSS += "margin: 0 auto; "

        this.dsModalBoxMovieCSS =  "padding: 0; ";
        this.dsModalBoxMovieCSS += "background: none; ";
        this.dsModalBoxMovieCSS += "height: 0; ";
        this.dsModalBoxMovieCSS += "position: relative; ";
        this.dsModalBoxMovieCSS += "padding-bottom: 56.25%; "

        this.dsModalBoxMovieIframeCSS =  "display: block; ";
        this.dsModalBoxMovieIframeCSS += "height: 100%; ";
        this.dsModalBoxMovieIframeCSS += "position: absolute; ";
        this.dsModalBoxMovieIframeCSS += "left: 0; ";
        this.dsModalBoxMovieIframeCSS += "top: 0; ";
        this.dsModalBoxMovieIframeCSS += "width: 100%; "

        if( this.modal ) {

            document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",modalAppendHTML);

            this.dsModalBoxElm = document.getElementById(this.dsModalBox);
            this.dsModalBoxInnerElm = document.getElementById(this.dsModalBoxInner);
            this.dsModalBoxCloseElm = document.getElementById(this.dsModalBoxClose);
            this.dsModalBoxBgElm = document.getElementById(this.dsModalBoxBg);
            this.linkInnerHTMLElm = document.getElementsByClassName(this.linkInnerHTML);

            this.dsModalBoxElm.style.cssText = this.dsModalBoxCSS;
            this.dsModalBoxInnerElm.style.cssText = this.dsModalBoxInnerCSS;
            this.dsModalBoxBgElm.style.cssText = this.dsModalBoxBgCSS;
            this.dsModalBoxCloseElm.style.cssText = dsModalBoxCloseCSS;

            if( !this.modal[0].classList ) { //IE9
                this.dsModalBoxElm.style.display = "none";
                this.dsModalBoxBgElm.style.display = "none";
            }

        }


        const CloseFunc = (e) => {
            e.preventDefault();
            this.Close();
        }

        this.dsModalBoxCloseElm = document.getElementById(this.dsModalBoxClose);
        this.dsModalBoxBgElm = document.getElementById(this.dsModalBoxBg);

        this.dsModalBoxCloseElm.addEventListener("click", CloseFunc);
        this.dsModalBoxBgElm.addEventListener("click", CloseFunc);

    }
    //CreateModalArea

    Open( elm ) {

        if( this.modal[0] ) {

             this.target = document.querySelectorAll( elm )[0];
             this.Set();

        } else {

            console.error( "OpenModal('" + elm + "') ERROR  '" + elm + "' is not found." );
            return false;

        }

    }

    Set() {

        const THIS_DATA = this.target.getAttribute("href");
        const THIS_DATA_STRING = new String( THIS_DATA );
        this.index = Array.prototype.indexOf.call(this.modal, this.target);

        this.scrollVal = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if( THIS_DATA ) {

            if( THIS_DATA_STRING.match( this.dsModalImg ) ) {//hrefが画像の場合

                this.IfImage( THIS_DATA );

            } else if( THIS_DATA_STRING.match( this.dsModalMovie ) ) {//hrefがyoutubeの場合

                this.IfYoutube( THIS_DATA );

            } else if( THIS_DATA_STRING.match( this.dsModalHtml)  ) {//hrefが外部HTMLの場合

                this.IfOuterHTML( THIS_DATA );

            }

        } else {

            this.IfInnerHTML();

        }

    }
    //Set

    IfImage(thisData) {


        let modalAppendHTML  = '<img src="'+ thisData +'" class="j-modal_img">';

        const IMG = new Image();
        IMG.src = thisData;

        this.AddClass( this.dsModalBoxInnerElm, "j-modal_img" );
        this.dsModalBoxInnerElm.style.cssText = this.dsModalBoxImgCSS;

        this.dsModalWrapElm = this.dsModalBoxInnerElm.querySelectorAll("#" + this.dsModalWrap)[0];
        this.dsModalWrapElm.innerHTML = modalAppendHTML;

        document.getElementsByClassName("j-modal_img")[0].style.cssText = this.dsModalImgCSS;

        IMG.onload = () => {
            this.Ready();
        };

    }
    //IfImage
    IfYoutube(thisData) {

        const THIS_ID = thisData.split("/")[3];
        let modalAppendHTML  = '<iframe src="https://www.youtube.com/embed/'+ THIS_ID +'?autoplay=1&rel=0&playsinline=1" allowfullscreen="true" frameborder="0"></iframe>';

        this.AddClass( this.dsModalBoxInnerElm, "j-modal_movie" );
        this.dsModalBoxInnerElm.style.cssText = this.dsModalBoxImgCSS;

        this.dsModalWrapElm = this.dsModalBoxInnerElm.querySelectorAll("#" + this.dsModalWrap)[0];
        this.dsModalWrapElm.style.cssText = this.dsModalBoxMovieCSS;
        this.dsModalWrapElm.innerHTML = modalAppendHTML;

        this.dsModalWrapElm.getElementsByTagName("iframe")[0].style.cssText = this.dsModalBoxMovieIframeCSS;

        this.Ready();

    }
    //IfYoutube
    IfOuterHTML(thisData) {

        const TYPE = this.target.getAttribute("data-ModalType");

        if(!TYPE) {

            const REQUEST = new XMLHttpRequest();
            REQUEST.open("GET", thisData, true);
            REQUEST.timeout = 3000;

            REQUEST.onload = (event) => {

                if (REQUEST.readyState === 4) {
                    if (REQUEST.status === 200) {

                        this.dsModalBoxInnerElm.style.cssText = this.dsModalBoxInnerCSS;

                        this.dsModalWrapElm = this.dsModalBoxInnerElm.querySelectorAll("#" + this.dsModalWrap)[0];
                        this.dsModalWrapElm.innerHTML = REQUEST.responseText;

                        this.Ready();

                    } else {
                        console.error("This request got an error.");
                    }
                }

            };
            REQUEST.ontimeout = (event) => {
                console.error("The request for " + thisData + " timed out.");
            };
            REQUEST.onerror = (event) => {
                console.error("This request got an error.");
            };
            REQUEST.send(null);

        } else if (TYPE == "iframe") {

            let height = window.innerHeight * 0.8;
            let modalHeight = this.target.getAttribute("data-modalHeight")
            if( modalHeight ) height = modalHeight;

            let modalAppendHTML  = '<iframe src="'+ thisData +'" width="100%" height="'+ height +'" frameborder="0"></iframe>';

            this.dsModalBoxInnerElm.style.cssText = this.dsModalBoxImgCSS;

            this.dsModalWrapElm = this.dsModalBoxInnerElm.querySelectorAll("#" + this.dsModalWrap)[0];
            this.dsModalWrapElm.innerHTML = modalAppendHTML;

            this.Ready();

        }

    }
    //IfOuterHTML
    IfInnerHTML() {

        const INDEX = Array.prototype.indexOf.call(this.linkInnerHTMLElm, this.target);
        const THIS_HTML = this.dsModalDetailElm[ INDEX ].innerHTML;

        this.dsModalBoxInnerElm.style.cssText = this.dsModalBoxInnerCSS;

        this.dsModalWrapElm = this.dsModalBoxInnerElm.querySelectorAll("#" + this.dsModalWrap)[0];
        this.dsModalWrapElm.innerHTML = THIS_HTML;

        this.Ready();

    }
    //IfInnerHTML

    /**
    **
    ** Ready
    **
    **/
    Ready() {

        let width = this.target.getAttribute("data-modalWidth");
        let height = this.target.getAttribute("data-modalHeight");

        width = width ? width : this.width + "px";
        height = height ? height : "initial";

        this.dsModalBoxElm.style.maxWidth = width;
        this.dsModalBoxElm.style.height = height;
        this.dsModalBoxElm.style.transition = "initial";
        this.dsModalBoxElm.style.setProperty("-webkit-transition", "initial");

        setTimeout( () => {
            this.Show();
        }, 10 );

    }
    //Ready


    /**
    **
    ** Show
    **
    **/
    Show() {

        const WIN_HEIGHT = window.innerHeight;
        const THIS_HEIGHT = this.dsModalBoxElm.scrollHeight;
        const FIX = (WIN_HEIGHT - THIS_HEIGHT) / 2;

        if( !this.fixed ) { //absolute の場合 : モーダル表示位置計算

            this.dsModalBoxElm.style.top = WIN_HEIGHT > THIS_HEIGHT ? (this.scrollVal + FIX) + "px" : (this.scrollVal + 40) + "px";

        } else { //fixed の場合

            this.tagHTML.style.position = "fixed";
            this.tagHTML.style.width = "100%";
            this.tagHTML.style.top = -this.scrollVal + "px";

        }

        setTimeout( () => {

            if( !this.modal[0].classList ) { //IE9

                this.dsModalBoxElm.style.opacity = 1;
                this.dsModalBoxBgElm.style.opacity = 1;
                this.dsModalBoxElm.style.display = "block";
                this.dsModalBoxBgElm.style.display = "block";

            } else {

                this.dsModalBoxElm.style.opacity = 1;
                this.dsModalBoxElm.style.pointerEvents = "inherit";
                this.dsModalBoxElm.style.transition = "all " + this.modalSpeed / 1000 + "s ease";
                this.dsModalBoxElm.style.setProperty("-webkit-transition", "all " + this.modalSpeed / 1000 + "s ease");

                this.dsModalBoxBgElm.style.opacity = this.bgOpacity;
                this.dsModalBoxBgElm.style.pointerEvents = "inherit";

                const EndFunc = () => {
                    this.OpenEnd( this.index );
                    this.dsModalBoxElm.removeEventListener("transitionend", EndFunc, false);
                };

                this.dsModalBoxElm.addEventListener("transitionend", EndFunc, false);

            }

        },100);

    }


    /**
    **
    ** Close
    **
    **/
    Close() {

        this.dsModalBoxElm.style.opacity = 0;
        this.dsModalBoxElm.style.pointerEvents = "none";

        this.dsModalBoxBgElm.style.opacity = 0;
        this.dsModalBoxBgElm.style.pointerEvents = "none";

        const EndFunc = () => {

            this.dsModalBoxInnerElm.setAttribute("class", false);
            this.dsModalWrapElm.setAttribute("style", false)
            this.dsModalWrapElm.innerHTML = "";

            this.CloseEnd();

            this.dsModalBoxElm.removeEventListener("transitionend", EndFunc, false);

        };

        this.dsModalBoxElm.addEventListener("transitionend", EndFunc, false);

        //

        if( !this.modal[0].classList ) { //IE9
            this.dsModalBoxElm.style.display = "none";
            this.dsModalBoxBgElm.style.display = "none";
        }

        if( this.fixed ) { //fixed の場合

            this.tagHTML.removeAttribute("style");

            window.scroll( 0, this.scrollVal );

        }
    }

    AddClass( element, _className ){

        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }

    }

}
