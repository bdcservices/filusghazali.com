!function(e){skel.init({reset:"full",breakpoints:{global:{range:"*",href:"/css/style.css",containers:1400,grid:{gutters:50}},wide:{range:"-1680",href:"/css/style-wide.css",containers:1200,grid:{gutters:40}},normal:{range:"-1280",href:"/css/style-normal.css",containers:960,viewport:{scalable:!1}},narrow:{range:"-980",href:"/css/style-narrow.css",containers:"95%",grid:{gutters:30}},narrower:{range:"-840",href:"/css/style-narrower.css",grid:{collapse:1}},mobile:{range:"-736",href:"/css/style-mobile.css",containers:"100%",grid:{gutters:15,collapse:2}}},plugins:{layers:{config:{transformTest:function(){return skel.vars.isMobile}},topPanel:{states:"/global/wide/normal/narrow/narrower/mobile",position:"top-center",side:"top",hidden:!0,animation:"pushY",width:"100%",height:275,html:'<nav data-action="navList" data-args="nav"></nav>',clickToHide:!0,swipeToHide:!1,orientation:"vertical"},topButton:{states:"/global/wide/normal/narrow/narrower/mobile",position:"top-center",width:120,height:50,html:'<span class="toggle" data-action="toggleLayer" data-args="topPanel"></span>'},sidePanel:{states:"/global/wide/normal/narrow/narrower",position:"top-left",side:"left",hidden:!0,animation:"revealX",width:250,height:"100%",html:'<nav data-action="navList" data-args="nav"></nav>',clickToHide:!0,orientation:"vertical"},sideButton:{states:"/global/wide/normal/narrow/narrower",position:"top-left",width:100,height:60,html:'<span class="toggle" data-action="toggleLayer" data-args="sidePanel"></span>'}}}}),e(function(){var a=e(window),t=e("body"),r=e("#header"),n=e("#banner");t.addClass("is-loading"),a.on("load",function(){t.removeClass("is-loading")}),skel.vars.IEVersion<9&&e(":last-child").addClass("last-child");var i=e("form");i.length>0&&skel.vars.IEVersion<10&&(e.fn.n33_formerize=function(){var a=new Array,t=e(this);return t.find("input[type=text],textarea").each(function(){var a=e(this);(""==a.val()||a.val()==a.attr("placeholder"))&&(a.addClass("formerize-placeholder"),a.val(a.attr("placeholder")))}).blur(function(){var a=e(this);a.attr("name").match(/_fakeformerizefield$/)||""==a.val()&&(a.addClass("formerize-placeholder"),a.val(a.attr("placeholder")))}).focus(function(){var a=e(this);a.attr("name").match(/_fakeformerizefield$/)||a.val()==a.attr("placeholder")&&(a.removeClass("formerize-placeholder"),a.val(""))}),t.find("input[type=password]").each(function(){var a=e(this),t=e(e("<div>").append(a.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=a.attr("id")&&t.attr("id",a.attr("id")+"_fakeformerizefield"),""!=a.attr("name")&&t.attr("name",a.attr("name")+"_fakeformerizefield"),t.addClass("formerize-placeholder").val(t.attr("placeholder")).insertAfter(a),""==a.val()?a.hide():t.hide(),a.blur(function(a){a.preventDefault();var t=e(this),r=t.parent().find("input[name="+t.attr("name")+"_fakeformerizefield]");""==t.val()&&(t.hide(),r.show())}),t.focus(function(a){a.preventDefault();var t=e(this),r=t.parent().find("input[name="+t.attr("name").replace("_fakeformerizefield","")+"]");t.hide(),r.show().focus()}),t.keypress(function(e){e.preventDefault(),t.val("")})}),t.submit(function(){e(this).find("input[type=text],input[type=password],textarea").each(function(a){var t=e(this);t.attr("name").match(/_fakeformerizefield$/)&&t.attr("name",""),t.val()==t.attr("placeholder")&&(t.removeClass("formerize-placeholder"),t.val(""))})}).bind("reset",function(t){t.preventDefault(),e(this).find("select").val(e("option:first").val()),e(this).find("input,textarea").each(function(){var a,t=e(this);switch(t.removeClass("formerize-placeholder"),this.type){case"submit":case"reset":break;case"password":t.val(t.attr("defaultValue")),a=t.parent().find("input[name="+t.attr("name")+"_fakeformerizefield]"),""==t.val()?(t.hide(),a.show()):(t.show(),a.hide());break;case"checkbox":case"radio":t.attr("checked",t.attr("defaultValue"));break;case"text":case"textarea":t.val(t.attr("defaultValue")),""==t.val()&&(t.addClass("formerize-placeholder"),t.val(t.attr("placeholder")));break;default:t.val(t.attr("defaultValue"))}}),window.setTimeout(function(){for(x in a)a[x].trigger("formerize_sync")},10)}),t},i.n33_formerize()),e(".scrolly").scrolly(1e3,-10),e("#nav > ul").dropotron({mode:"fade",noOpenerFade:!0,expandMode:skel.vars.isTouch?"click":"hover"}),!skel.vars.isMobile&&r.hasClass("alt")&&n.length>0&&a.on("load",function(){n.scrollwatch({delay:0,range:1,anchor:"top",on:function(){r.addClass("alt reveal")},off:function(){r.removeClass("alt")}})})})}(jQuery);