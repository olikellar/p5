let blue = ([50, 120, 165]);
let silver = ([220, 220, 230]);
let black = ([40, 40, 40]);
let bulb = ([255, 255, 120]);
let lit = ([255, 255, 170]);



function setup() {
  createCanvas(800, 800);



}

function draw() {
  background(10,175,140);
  stroke(0);
  strokeWeight(1.4);

  let mapx = map(mouseX,0,800, -1, 1);
  let randn = random(0,0)
  var x1 = (400-mouseX) * (18*sin(mapx))
  var y1 = (400-(mouseY)) * 20*sin(mapx)

//14 BASE
{
fill(blue);
let a14x = 200 + x1;
let a14y = -120 + y1;
beginShape();
vertex(257+a14x,742+a14y);
vertex(272+a14x,747+a14y);
vertex(274+a14x,752+a14y);
vertex(274+a14x,759+a14y);
vertex(264+a14x,766+a14y);
vertex(241+a14x,770+a14y);
vertex(219+a14x,770+a14y);
vertex(189+a14x,769+a14y);
vertex(167+a14x,767+a14y);
vertex(148+a14x,761+a14y);
vertex(146+a14x,752+a14y);
vertex(158+a14x,743+a14y);
vertex(164+a14x,740+a14y);
vertex(176+a14x,738+a14y);
vertex(198+a14x,737+a14y);
vertex(205+a14x,737+a14y);
vertex(212+a14x,737+a14y);
vertex(217+a14x,737+a14y);
vertex(249+a14x,740+a14y);
vertex(256+a14x,741+a14y);
endShape(CLOSE);
//END14
}
//15 BASE
{
fill(blue);
let a15x = 200 + x1;
let a15y = -120 + x1;
beginShape();
vertex(150+a15x,747+a15y);
vertex(173+a15x,753+a15y);
vertex(179+a15x,755+a15y);
vertex(193+a15x,757+a15y);
vertex(210+a15x,758+a15y);
vertex(220+a15x,758+a15y);
vertex(231+a15x,758+a15y);
vertex(247+a15x,757+a15y);
vertex(256+a15x,755+a15y);
vertex(263+a15x,752+a15y);
vertex(264+a15x,750+a15y);
vertex(264+a15x,748+a15y);
vertex(261+a15x,745+a15y);
vertex(254+a15x,743+a15y);
vertex(248+a15x,741+a15y);
vertex(238+a15x,740+a15y);
vertex(214+a15x,738+a15y);
vertex(206+a15x,738+a15y);
vertex(189+a15x,737+a15y);
vertex(171+a15x,737+a15y);
vertex(163+a15x,738+a15y);
vertex(157+a15x,740+a15y);
vertex(152+a15x,744+a15y);
vertex(151+a15x,746+a15y);
endShape(CLOSE);
//END14
}



//2  DISH OUTSID
{
fill(blue);
let a2x = 200  + y1;
let a2y = -120 - y1;
beginShape();
vertex(164+a2x,310+a2y);
vertex(157+a2x,323+a2y);
vertex(157+a2x,330+a2y);
vertex(155+a2x,344+a2y);
vertex(161+a2x,357+a2y);
vertex(168+a2x,365+a2y);
vertex(186+a2x,373+a2y);
vertex(196+a2x,375+a2y);
vertex(209+a2x,375+a2y);
vertex(214+a2x,374+a2y);
vertex(220+a2x,371+a2y);
vertex(224+a2x,366+a2y);
vertex(230+a2x,362+a2y);
vertex(235+a2x,355+a2y);
vertex(240+a2x,349+a2y);
endShape(CLOSE);
//END2
}
//1  DISH INSIDE
{
fill(lit);
let a1x = 200  + y1;
let a1y = -120  + x1;
beginShape();
vertex(206+a1x,298+a1y);
vertex(190+a1x,297+a1y);
vertex(176+a1x,300+a1y);
vertex(169+a1x,304+a1y);
vertex(165+a1x,312+a1y);
vertex(166+a1x,325+a1y);
vertex(181+a1x,341+a1y);
vertex(208+a1x,353+a1y);
vertex(231+a1x,353+a1y);
vertex(240+a1x,349+a1y);
vertex(243+a1x,345+a1y);
vertex(246+a1x,341+a1y);
vertex(248+a1x,335+a1y);
vertex(248+a1x,328+a1y);
vertex(247+a1x,324+a1y);
vertex(239+a1x,315+a1y);
vertex(236+a1x,312+a1y);
vertex(228+a1x,308+a1y);
vertex(209+a1x,301+a1y);
endShape(CLOSE);
//ENDName
}

//5  BULB
{
fill(bulb);
let a5x = 200 - x1;
let a5y = -120 -y1;
beginShape();
vertex(239+a5x,349+a5y);
vertex(230+a5x,337+a5y);
vertex(225+a5x,334+a5y);
vertex(217+a5x,330+a5y);
vertex(208+a5x,327+a5y);
vertex(197+a5x,326+a5y);
vertex(188+a5x,326+a5y);
vertex(181+a5x,326+a5y);
vertex(179+a5x,329+a5y);
vertex(179+a5x,333+a5y);
vertex(183+a5x,340+a5y);
vertex(186+a5x,342+a5y);
vertex(188+a5x,344+a5y);
vertex(205+a5x,352+a5y);
vertex(219+a5x,353+a5y);
vertex(231+a5x,353+a5y);
vertex(237+a5x,351+a5y);
endShape(CLOSE);
//END5
}

//3  CONECT DISH1
{
fill(blue);
let a3x = 200 +y1;
let a3y = -120 +y1;
beginShape();
vertex(218+a3x,373+a3y);
vertex(232+a3x,379+a3y);
vertex(239+a3x,377+a3y);
vertex(241+a3x,374+a3y);
vertex(245+a3x,370+a3y);
vertex(246+a3x,365+a3y);
vertex(247+a3x,362+a3y);
vertex(234+a3x,355+a3y);
endShape(CLOSE);
//END3
}
//4  CONECT DISH2
{
fill(blue);
let a4x = 200 + x1 -y1;
let a4y = -120 -x1;
beginShape();
vertex(236+a4x,380+a4y);
vertex(233+a4x,382+a4y);
vertex(237+a4x,384+a4y);
vertex(240+a4x,383+a4y);
vertex(251+a4x,388+a4y);
vertex(254+a4x,388+a4y);
vertex(256+a4x,386+a4y);
vertex(262+a4x,370+a4y);
vertex(262+a4x,368+a4y);
vertex(259+a4x,367+a4y);
vertex(253+a4x,364+a4y);
vertex(252+a4x,360+a4y);
vertex(249+a4x,359+a4y);
vertex(248+a4x,362+a4y);
vertex(235+a4x,378+a4y);
endShape(CLOSE);
//END4
}
//6  SHINY U BIT
{
fill(silver);
let a6x = 200-y1;
let a6y = -120+y1+y1;
beginShape();
vertex(239+a6x,379+a6y);
vertex(236+a6x,382+a6y);
vertex(236+a6x,384+a6y);
vertex(237+a6x,385+a6y);
vertex(239+a6x,385+a6y);
vertex(256+a6x,397+a6y);
vertex(264+a6x,400+a6y);
vertex(270+a6x,397+a6y);
vertex(273+a6x,393+a6y);
vertex(275+a6x,389+a6y);
vertex(276+a6x,386+a6y);
vertex(276+a6x,383+a6y);
vertex(275+a6x,380+a6y);
vertex(275+a6x,379+a6y);
vertex(272+a6x,374+a6y);
vertex(271+a6x,372+a6y);
vertex(269+a6x,371+a6y);
vertex(266+a6x,368+a6y);
vertex(264+a6x,367+a6y);
vertex(260+a6x,366+a6y);
vertex(258+a6x,364+a6y);
vertex(255+a6x,363+a6y);
vertex(254+a6x,359+a6y);
vertex(252+a6x,356+a6y);
vertex(249+a6x,358+a6y);
vertex(249+a6x,359+a6y);
vertex(250+a6x,366+a6y);
vertex(254+a6x,367+a6y);
vertex(258+a6x,369+a6y);
vertex(260+a6x,370+a6y);
vertex(262+a6x,371+a6y);
vertex(268+a6x,375+a6y);
vertex(268+a6x,376+a6y);
vertex(270+a6x,380+a6y);
vertex(271+a6x,383+a6y);
vertex(271+a6x,385+a6y);
vertex(270+a6x,386+a6y);
vertex(269+a6x,389+a6y);
vertex(268+a6x,390+a6y);
vertex(267+a6x,391+a6y);
vertex(265+a6x,393+a6y);
vertex(264+a6x,393+a6y);
vertex(263+a6x,393+a6y);
vertex(261+a6x,394+a6y);
vertex(260+a6x,394+a6y);
vertex(257+a6x,392+a6y);
vertex(255+a6x,391+a6y);
vertex(253+a6x,390+a6y);
vertex(250+a6x,388+a6y);
vertex(249+a6x,387+a6y);
vertex(247+a6x,386+a6y);
vertex(246+a6x,386+a6y);
vertex(244+a6x,384+a6y);
vertex(243+a6x,383+a6y);
vertex(243+a6x,380+a6y);
vertex(242+a6x,379+a6y);
vertex(239+a6x,379+a6y);
vertex(236+a6x,380+a6y);
endShape(CLOSE);
//END6
}
//7  CONECT DISH3
{
fill(black);
let a7x = 200-y1-y1;
let a7y = -120-x1-x1;
beginShape();
vertex(256+a7x,384+a7y);
vertex(264+a7x,388+a7y);
vertex(267+a7x,387+a7y);
vertex(268+a7x,387+a7y);
vertex(270+a7x,384+a7y);
vertex(267+a7x,382+a7y);
vertex(267+a7x,380+a7y);
vertex(260+a7x,376+a7y);
vertex(256+a7x,383+a7y);
endShape(CLOSE);
//END7
}
//8  CONECT DISH3
{
fill(silver);
let a8x = 200-x1-y1;
let a8y = -120+y1+x1;
beginShape();
vertex(274+a8x,395+a8y);
vertex(280+a8x,400+a8y);
vertex(283+a8x,403+a8y);
vertex(287+a8x,405+a8y);
vertex(291+a8x,405+a8y);
vertex(292+a8x,403+a8y);
vertex(293+a8x,402+a8y);
vertex(291+a8x,401+a8y);
vertex(287+a8x,397+a8y);
vertex(286+a8x,392+a8y);
vertex(285+a8x,390+a8y);
vertex(283+a8x,390+a8y);
vertex(280+a8x,391+a8y);
vertex(279+a8x,392+a8y);
vertex(276+a8x,391+a8y);
vertex(275+a8x,390+a8y);
vertex(270+a8x,393+a8y);
endShape(CLOSE);
//END8
}

//18 ARIAL
{
fill(silver);
let a18x = 200+x1+y1;
let a18y = -120-x1;
beginShape();
vertex(239+a18x,362+a18y);
vertex(242+a18x,364+a18y);
vertex(240+a18x,365+a18y);
vertex(239+a18x,365+a18y);
vertex(236+a18x,365+a18y);
vertex(236+a18x,364+a18y);
vertex(237+a18x,363+a18y);
vertex(238+a18x,362+a18y);
vertex(258+a18x,325+a18y);
vertex(258+a18x,322+a18y);
vertex(259+a18x,322+a18y);
vertex(261+a18x,323+a18y);
vertex(261+a18x,323+a18y);
vertex(263+a18x,324+a18y);
vertex(263+a18x,325+a18y);
vertex(262+a18x,325+a18y);
vertex(261+a18x,325+a18y);
vertex(260+a18x,325+a18y);
vertex(240+a18x,363+a18y);
endShape(CLOSE);
//END18
}

//12 BOT ARM BACK
{
fill(blue);
let a12x = 200+x1+x1-y1;
let a12y = -120-x1-y1;
beginShape();
vertex(314+a12x,531+a12y);
vertex(208+a12x,720+a12y);
vertex(210+a12x,724+a12y);
vertex(320+a12x,535+a12y);
endShape(CLOSE);
//END11
}
//19 MID CNCT BCK
{
fill(silver);
let a19x = 200+x1+y1;
let a19y = -120-y1-y1;
beginShape();
vertex(315+a19x,536+a19y);
vertex(312+a19x,535+a19y);
vertex(311+a19x,535+a19y);
vertex(311+a19x,530+a19y);
vertex(314+a19x,528+a19y);
vertex(316+a19x,527+a19y);
endShape(CLOSE);
//END19
}
//16 BOT CNCT BCK
{
fill(silver);
let a16x = 200+y1+y1;
let a16y = -120-y1-y1;
beginShape();
vertex(208+a16x,721+a16y);
vertex(207+a16x,723+a16y);
vertex(209+a16x,725+a16y);
vertex(213+a16x,728+a16y);
vertex(215+a16x,728+a16y);
vertex(214+a16x,724+a16y);
vertex(212+a16x,722+a16y);
vertex(210+a16x,722+a16y);
endShape(CLOSE);
//END16
}

//9  TOP ARM RIGHT
{
fill(blue);
let a9x = 200-x1-x1-y1;
let a9y = -120-x1+y1;
beginShape();
vertex(282+a9x,391+a9y);
vertex(295+a9x,379+a9y);
vertex(301+a9x,380+a9y);
vertex(304+a9x,384+a9y);
vertex(305+a9x,389+a9y);
vertex(305+a9x,393+a9y);
vertex(305+a9x,396+a9y);
vertex(331+a9x,518+a9y);
vertex(338+a9x,521+a9y);
vertex(339+a9x,522+a9y);
vertex(343+a9x,523+a9y);
vertex(345+a9x,525+a9y);
vertex(345+a9x,525+a9y);
vertex(345+a9x,528+a9y);
vertex(345+a9x,530+a9y);
vertex(340+a9x,533+a9y);
vertex(336+a9x,536+a9y);
vertex(332+a9x,538+a9y);
vertex(227+a9x,718+a9y);
vertex(226+a9x,732+a9y);
vertex(208+a9x,732+a9y);
vertex(215+a9x,721+a9y);
vertex(210+a9x,711+a9y);
vertex(213+a9x,708+a9y);
vertex(216+a9x,710+a9y);
vertex(220+a9x,711+a9y);
vertex(223+a9x,712+a9y);
vertex(322+a9x,536+a9y);
vertex(326+a9x,528+a9y);
vertex(324+a9x,520+a9y);
vertex(295+a9x,392+a9y);
vertex(290+a9x,394+a9y);
vertex(292+a9x,399+a9y);
vertex(288+a9x,400+a9y);
endShape(CLOSE);
//END9
}
//10 TOP ARM LEFT
{
fill(blue);
let a10x = 200-x1;
let a10y = -120-x1-y1;
beginShape();
vertex(288+a10x,397+a10y);
vertex(292+a10x,394+a10y);
vertex(294+a10x,397+a10y);
vertex(322+a10x,530+a10y);
vertex(324+a10x,538+a10y);
vertex(318+a10x,539+a10y);
vertex(287+a10x,400+a10y);
vertex(291+a10x,397+a10y);
endShape(CLOSE);
//END10
}

//13 BASE CONNECT
{
fill(silver);
let a13x = 200-y1-y1;
let a13y = -120+x1+x1;
beginShape();
vertex(223+a13x,728+a13y);
vertex(220+a13x,743+a13y);
vertex(219+a13x,749+a13y);
vertex(229+a13x,751+a13y);
vertex(234+a13x,745+a13y);
vertex(234+a13x,739+a13y);
vertex(230+a13x,738+a13y);
vertex(229+a13x,725+a13y);
endShape(CLOSE);
//END11
}
//16 BOT CNCT FRNT
{
fill(silver);
let a16x = 200+x1-y1;
let a16y = -120+x1+x1;
beginShape();
vertex(219+a16x,728+a16y);
vertex(228+a16x,734+a16y);
vertex(232+a16x,735+a16y);
vertex(234+a16x,734+a16y);
vertex(234+a16x,732+a16y);
vertex(233+a16x,729+a16y);
vertex(231+a16x,729+a16y);
vertex(229+a16x,728+a16y);
vertex(226+a16x,726+a16y);
vertex(225+a16x,726+a16y);
vertex(222+a16x,724+a16y);
vertex(220+a16x,724+a16y);
vertex(219+a16x,725+a16y);
vertex(218+a16x,726+a16y);
vertex(220+a16x,728+a16y);
endShape(CLOSE);
//END16
}
//11 BOT ARM FRONT
{
fill(blue);
let a11x = 200+y1+y1;
let a11y = -120+y1-y1-x1;
beginShape();
vertex(328+a11x,536+a11y);
vertex(332+a11x,537+a11y);
vertex(234+a11x,736+a11y);
vertex(226+a11x,733+a11y);
vertex(322+a11x,535+a11y);
endShape(CLOSE);
//END11
}

//20 MID CNCT FRNT
{
fill(silver);
let a20x = 200 -y1-y1;
let a20y = -120 +x1;
beginShape();
vertex(321+a20x,536+a20y);
vertex(321+a20x,539+a20y);
vertex(322+a20x,540+a20y);
vertex(324+a20x,540+a20y);
vertex(326+a20x,540+a20y);
vertex(329+a20x,539+a20y);
vertex(330+a20x,537+a20y);
vertex(330+a20x,534+a20y);
vertex(329+a20x,532+a20y);
vertex(328+a20x,531+a20y);
vertex(326+a20x,532+a20y);
vertex(324+a20x,533+a20y);
vertex(322+a20x,534+a20y);
vertex(322+a20x,536+a20y);
endShape(CLOSE);
//END20
}





//21 SPRING MID FRNT
{
fill(silver);
let a21x = 200+x1+x1+y1;
let a21y = -120-y1-y1-y1;
beginShape();
vertex(333+a21x,519+a21y);
vertex(329+a21x,521+a21y);
vertex(304+a21x,473+a21y);
vertex(308+a21x,470+a21y);
vertex(333+a21x,517+a21y);
endShape(CLOSE);
//END21
}
//21 SPRING MID BCK
{
fill(silver);
let a21x = 200+y1+y1+x1;
let a21y = -120+x1-y1-y1;
beginShape();
vertex(303+a21x,472+a21y);
vertex(300+a21x,474+a21y);
vertex(309+a21x,502+a21y);
endShape(CLOSE);
//END21
}
//21 SPRING
{
fill(silver);
let a21x = 200-x1;
let a21y = -120+x1-y1-y1;
beginShape();
vertex(214+a21x,710+a21y);
vertex(254+a21x,667+a21y);
vertex(251+a21x,665+a21y);
vertex(209+a21x,707+a21y);
vertex(213+a21x,711+a21y);
endShape(CLOSE);
//END21
}
//21 SPRING
{
fill(silver);
let a21x = 200+x1-y1-y1;
let a21y = -120-y1;
beginShape();
vertex(223+a21x,714+a21y);
vertex(218+a21x,712+a21y);
vertex(254+a21x,668+a21y);
vertex(257+a21x,668+a21y);
vertex(223+a21x,714+a21y);
endShape(CLOSE);
//END21
}


}
