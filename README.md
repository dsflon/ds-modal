# ds-modal
モーダルウィンドウ機能を実装します。

-Target browser : IE9+
-IE9の場合は transition 無しでモーダルウィンドウが表示されます。

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
|element|String|-(Required)|対象要素を指定します。<br>ex) ".j-modal"|
|option|Object|-|ex)<br> option = {<br> width: 1024,<br> modalSpeed: 200,<br> bgColor: "#FFF",<br> bgOpacity: 0.6,<br> innerBgColor: "#FFF",<br> innerBgPadding: 20,<br> closeBtn: "<img src='close.png'>",<br> addClass: "wrap",<br> fixed: false<br>}|

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
