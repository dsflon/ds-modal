# ds-modal ( Don't Need jQuery )


モーダルウィンドウ機能を実装します。

- Target browser : IE9+
- IE9の場合は transition 無しでモーダルウィンドウが表示されます。

___

# Install

```
npm i ds-modal -D
```

___

# Import

```
import DsModal from "./ds-modal"
```

___

# Constructor

```
new DsModal(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|対象要素を指定します。<br>ex) ".modal"|
|option|Object|-|ex)<br> option = {<br> width: 1024,<br> modalSpeed: 200,<br> bgColor: "#FFF",<br> bgOpacity: 0.6,<br> innerBgColor: "#FFF",<br> innerBgPadding: 20,<br> closeBtn: "&lt;img src='close.png'&gt;",<br> addClass: "wrap",<br> fixed: false<br>}|


|Option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|width|Number|768|モーダルウィンドウの横幅を指定できます。|
|modalSpeed|Number|200|モーダルが開くスピードを指定できます。)|
|bgColor|String|"#000"|背景色を指定できます。|
|bgOpacity|Number|0.8|背景色の透過度を指定できます。|
|innerBgColor|String|"none"|背景色を指定できます。|
|innerBgPadding|Number|0|背景のpaddingを指定できます。|
|closeBtn|String|"×"|closeボタンを指定できます。|
|addClass|String|-|一番上の親要素にクラスを追加します。|
|fixed|bool|false|true にした場合、背景が固定されます。|


___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|ReInit()|-|モーダル対象要素が後から追加された時に実行します。|
|Open( element )|String|モーダルを実行したいelementを指定します。<br>( ex: ".default_open" )|
|Close()|-|開いているモーダル画面を閉じます。|
|OpenEnd = function(){};|-|モーダル画面が開いた後に実行されます。|
|CloseEnd = function(){};|-|モーダル画面が閉じた後に実行されます。|


___

# Demo

[https://dsflon.github.io/ds-modal/](https://dsflon.github.io/ds-modal/)

```
import DsModal from "./ds-modal"

let dsModal = new DsModal(".modal");
dsModal.OpenEnd = function( index ){
	console.log(index, "openEnd")
};
dsModal.CloseEnd = function(){
	console.log("closeEnd")
};

//

let dsModal2 = new DsModal(
    ".modal2",
    {
        width: 768,
        modalSpeed: 200,
        bgColor: "#CCC",
        bgOpacity: 0.9,
        innerBgColor: "#CCC",
        innerBgPadding: 40,
        closeBtn: "Close",
        closeCancel: false,
        addClass: "",
        fixed: true
    }
);
```
