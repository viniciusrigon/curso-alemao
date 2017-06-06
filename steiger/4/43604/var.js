var NoOffFirstLineMenus=5;			// Number of first level items
	var LowBgColor='#EFEFEF';			// Background color when mouse is not over
	var LowSubBgColor='#EFEFEF';			// Background color when mouse is not over on subs
	var HighBgColor='#DEDEDE';			// Background color when mouse is over
	var HighSubBgColor='#DEDEDE';			// Background color when mouse is over on subs
	var FontLowColor='#000000';			// Font color when mouse is not over
	var FontSubLowColor='#000000';			// Font color subs when mouse is not over
	var FontHighColor='#FF0000';			// Font color when mouse is over
	var FontSubHighColor='#FF0000';			// Font color subs when mouse is over
	var BorderColor='#DEDEDE';			// Border color
	var BorderSubColor='#DEDEDE';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="verdana"
	var FontSize=11;
	var FontBold=0;
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=50;				// Menu offset x coordinate
	var StartLeft=190;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=8;				// Left padding
	var TopPaddng=4;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['pfeil.gif',11,5,'pfeil.gif',11,5,'pfeil.gif',11,5];

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}

//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);

Menu1=new Array("Home","#","",0,22,140);

Menu2=new Array("Thema","","",4);
	Menu2_1=new Array("1.1 Titel","","",1,22,150);	
		Menu2_1_1=new Array("1.1.1 Titel","#","",0,22,180);
	Menu2_2=new Array("1.2 Titel","","",3);
		Menu2_2_1=new Array("1.2.1 Titel","#","",0,22,250);
		Menu2_2_2=new Array("1.2.2 Titel","#","",0);
		Menu2_2_3=new Array("1.2.3 Titel","#","",0);
	Menu2_3=new Array("1.3 Titel","","",4);
		Menu2_3_1=new Array("1.3.1 Titel","#","",0,22,180);
		Menu2_3_2=new Array("1.3.2 Titel","#","",0);
		Menu2_3_3=new Array("1.3.3 Titel","#","",0);
		Menu2_3_4=new Array("1.3.4 Titel","#","",0);
	Menu2_4=new Array("1.4 Titel","","",4);
		Menu2_4_1=new Array("1.4.1 Titel","#","",0,22,200);
		Menu2_4_2=new Array("1.4.2 Titel","#","",0);
		Menu2_4_3=new Array("1.4.3 Titel","#","",0);
		Menu2_4_4=new Array("1.4.4 Titel","#","",0);

Menu3=new Array("Test","","",2);
	Menu3_1=new Array("Test 1","#","",0,22,100);
	Menu3_2=new Array("Test 2","#","",0);

Menu4=new Array("Kontakt","","",3);
	Menu4_1=new Array("Adresse","#","",0,22,100);
	Menu4_2=new Array("Telefon","#","",0);
	Menu4_3=new Array("E-Mail","#","",0);

Menu5=new Array("Copyright","#","",0);