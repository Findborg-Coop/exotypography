var Vue = require('vue')
require('./base/et.styl');
//Load Exotypography
var Ethvbox = require('./layout/hvbox.vue');
var Etlayout = require('./layout/layout.vue')
var Etheader = require('./layout/header.vue');
var EtGrid = require('./grid/grid.vue');
var Etbutton = require('./buttons/buttons.vue');
var Etcontrolbutton = require('./buttons/control-button.vue');
var Eticard = require('./icard/icard.vue');
var Etbadge = require('./badge/badge.vue')
var Ettoolbar = require('./toolbar/toolbar.vue');
var Etspacer = require('./spacers/spacer.vue');
var Etshelf = require('./layout/shelf.vue');
var Etmdfooter = require('./layout/md-footer.vue');
var Etdialog = require('./dialog/Dialog.vue');
var Etsimplelist = require('./lists/simple-list.vue');
var Etcontentlist = require('./lists/content-list.vue');
var Etsimplelistitem = require('./lists/simple-list-item.vue');
var Eticonlistitem = require('./lists/icon-list-item.vue');
var Etsecondaryactionlistitem = require('./lists/secondary-action-list.vue');
var Ettwolinelistitem = require('./lists/two-line-list.vue');
var Etthreelinelistitem = require('./lists/three-line-list.vue');
//var Etresponsiveswiper = require('./swiper/responsiveswiper.vue');
//var Etscrollpane = require('./swiper/scroll-pane.vue');
var Etdropdown = require('./dropdown/dropdown.vue');
var Etmenu = require('./menu/menu.vue');
//var Etimgloader = require('./images/image-loader.vue');
//var Etcollapse = require('./collapse/collapse.vue');
var Etaside = require('./aside/aside.vue');
var Etasidelink = require('./aside/asidelink.vue');
//var Ettoggles = require('./toggles/toggle.vue');
//var Etmodals = require('./modals/modal.vue');
//var Etsidebar = require('./et/sidebar/sidebar.vue')
//var Etactionsheet = require('./action-sheets/action-sheet.vue');
var Etpanelload = require('./panel/panelload.vue');
var Etpanel = require('./panel/panel.vue');
new Vue({
  el: 'body',

  components: {
    EtLayout:  Etlayout,
    EtHeader: Etheader,
    EtGrid: EtGrid,
    EtList: Etsimplelist,
    EtContentList: Etcontentlist,
    EtListItem: Etsimplelistitem,
    EtIconListItem: Eticonlistitem,
    EtSecondaryActionListItem:  Etsecondaryactionlistitem,
    EtTwoLineListItem:  Ettwolinelistitem,
    //EtImgLoader:     Etimgloader,
    EtThreeLineListItem:  Etthreelinelistitem,
    EtButton: Etbutton,
    EtControlButton: Etcontrolbutton,
    EtIcard: Eticard,
    EtBadge: Etbadge,
    EtToolbar: Ettoolbar,
    EtSpacer: Etspacer,
    EtShelf:  Etshelf,
    EtMdfooter:  Etmdfooter,
    EtDialog:  Etdialog,
    //Etresponsiveswiper,
    //Etscrollpane,
    EtDropdown:  Etdropdown,
    //Etcollapse,
    EtAside:  Etaside,
    EtAsidelink:  Etasidelink,
    EtMenu:  Etmenu, 
    //Ettoggles,
    //Etmodals,
    //Etsidebar,
    //Etactionsheet,
    EtPanel:  Etpanel,
    EtPanelLoad:  Etpanelload

}
});   

  
  
  
   





