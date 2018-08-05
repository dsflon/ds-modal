import DsModal from "./ds-modal"

let dsModal = new DsModal(".modal");
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
dsModal.OpenEnd = function( index ){
	console.log(index, "openEnd")
};
dsModal.CloseEnd = function(){
	console.log("closeEnd")
};
