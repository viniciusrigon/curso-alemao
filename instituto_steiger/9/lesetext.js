function verifyCompatibleBrowser(){ 
    this.ver=navigator.appVersion 
    this.dom=document.getElementById?1:0 
    this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0; 
    this.ie4=(document.all && !this.dom)?1:0; 
    this.ns5=(this.dom && parseInt(this.ver) >= 5) ?1:0; 
    this.ns4=(document.layers && !this.dom)?1:0; 
    this.bw=(this.ie5 || this.ie4 || this.ns4 || this.ns5) 
    return this 
} 
bw=new verifyCompatibleBrowser() 
 
var speed=50 
 
var loop, timer 
 
function ConstructObject(obj,nest){ 
    nest=(!nest) ? '':'document.'+nest+'.' 
    this.el=bw.dom?document.getElementById(obj):bw.ie4?document.all[obj]:bw.ns4?eval(nest+'document.'+obj):0; 
    this.css=bw.dom?document.getElementById(obj).style:bw.ie4?document.all[obj].style:bw.ns4?eval(nest+'document.'+obj):0; 
    this.scrollHeight=bw.ns4?this.css.document.height:this.el.offsetHeight 
    this.clipHeight=bw.ns4?this.css.clip.height:this.el.offsetHeight 
    this.up=MoveAreaUp;this.down=MoveAreaDown; 
    this.MoveArea=MoveArea; this.x; this.y; 
    this.obj = obj + "Object" 
    eval(this.obj + "=this") 
    return this 
} 
function MoveArea(x,y){ 
    this.x=x;this.y=y 
    this.css.left=this.x 
    this.css.top=this.y 
} 
 
function MoveAreaDown(move){ 
	if(this.y>-this.scrollHeight+objContainer.clipHeight){ 
    this.MoveArea(0,this.y-move) 
    if(loop) setTimeout(this.obj+".down("+move+")",speed) 
	} 
} 
function MoveAreaUp(move){ 
	if(this.y<0){ 
    this.MoveArea(0,this.y-move) 
    if(loop) setTimeout(this.obj+".up("+move+")",speed) 
	} 
} 
 
function PerformScroll(speed){ 
	if(initialised){ 
		loop=true; 
		if(speed>0) objScroller.down(speed) 
		else objScroller.up(speed) 
	} 
} 
 
function CeaseScroll(){ 
    loop=false 
    if(timer) clearTimeout(timer) 
} 
var initialised; 

function InitialiseScrollableArea(){ 
    objContainer=new ConstructObject('container') 
    objScroller=new ConstructObject('content','container') 
    objScroller.MoveArea(0,0) 
    objContainer.css.visibility='visible' 
    initialised=true; 
}  

var ie4 = (document.all) ? true : false;
var ns4 = (document.layers) ? true : false;
var ns6 = (document.getElementById && !document.all) ? true : false;

function hidelayer(lay) {
if (ie4) {document.all[lay].style.visibility = "hidden";}
if (ns4) {document.layers[lay].visibility = "hide";}
if (ns6) {document.getElementById([lay]).style.display = "none";}
}
function showlayer(lay) {
if (ie4) {document.all[lay].style.visibility = "visible";}
if (ns4) {document.layers[lay].visibility = "show";}
if (ns6) {document.getElementById([lay]).style.display = "block";}
}
function writetolayer(lay,txt) {
if (ie4) {
document.all[lay].innerHTML = txt;
}
if (ns4) {
document[lay].document.write(txt);
document[lay].document.close();
}
if (ns6) {
over = document.getElementById([lay]);
range = document.createRange();
range.setStartBefore(over);
domfrag = range.createContextualFragment(txt);
while (over.hasChildNodes()) {
over.removeChild(over.lastChild);
}
over.appendChild(domfrag);
   }
}