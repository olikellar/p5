//variables
{
  var nom;

  var mx1 = 0;
  var my1 = 0;
  var mx2 = 0;
  var my2 = 0;

  var vx = 370;
  var vy = 330;

  var colorPicker;
  let col = 0;

  var start = false;
  var contin = false;


}

function setup() {
  createCanvas(900, 900);

  //Colour Picker
  colorPicker = createColorPicker('#FFFFFF');
  colorPicker.position(13, 820);
  col = colorPicker;

  //Background colour
  background(220);

  nom = createInput('Name');
  nom.position(13, 795);

}

function mousePressed() {

  if (start === false) {
    mx1 = mouseX;
    my1 = mouseY;
    mx2 = mouseX;
    my2 = mouseY;
  }

  if (start === true && contin === true) {


    mx1 = mouseX;
    my1 = mouseY;
    print('vertex((' + nom.value() + '_xScale*' + mx1 + ')+' + nom.value() + '_x,(' + nom.value() + '_yScale*' + my1 + ')+' + nom.value() + '_y);');

    //coordinates
    noStroke();
    fill(0, 10);
    text('x: ' + mouseX, mouseX + 20, mouseY);
    text('y: ' + mouseY, mouseX + 20, mouseY + 10);
    stroke(0, 0, 255);
  }
}

function mouseReleased() {
  if (start === true && contin === true) {
    mx2 = mouseX;
    my2 = mouseY;
  }
}

function draw() {
  noStroke();
  fill(220);
  rect(0, 850, 300, 100);

  textSize(16);
  fill(0);
  if (start === false) {
    fill(0);
    text('Press Enter to start and stop drawing', 13, 866);
    fill(220);
    text('Press Right Arrow to finish', 13, 886);
  }
  if (start === true) {
    fill(220);
    text('Press Enter to start and stop drawing', 13, 866);
    fill(0);
    text('Press Right Arrow to finish', 13, 886);
  }
  if (start === false) {
    stroke(255, 0, 0);
    line(mx1, my1, mx2, my2);
    stroke(0);
  }
  if (start === true) {
    stroke(0, 0, 255);
    line(mx1, my1, mx2, my2);
    stroke(0);
  }

  stroke(0);
  //full plant
  {
    fill('green');

    //Leaf1
    {
      beginShape();

      vertex(243 + vx, 228 + vy);
      vertex(227 + vx, 170 + vy);
      vertex(211 + vx, 157 + vy);
      vertex(195 + vx, 156 + vy);
      vertex(174 + vx, 165 + vy);
      vertex(159 + vx, 184 + vy);
      vertex(154 + vx, 209 + vy);
      vertex(154 + vx, 233 + vy);
      vertex(150 + vx, 268 + vy);
      vertex(142 + vx, 287 + vy);
      vertex(133 + vx, 298 + vy);
      vertex(126 + vx, 304 + vy);
      vertex(122 + vx, 304 + vy);
      vertex(118 + vx, 305 + vy);
      vertex(118 + vx, 306 + vy);
      vertex(120 + vx, 307 + vy);
      vertex(125 + vx, 307 + vy);
      vertex(129 + vx, 308 + vy);
      vertex(134 + vx, 308 + vy);
      vertex(138 + vx, 306 + vy);
      vertex(142 + vx, 301 + vy);
      vertex(150 + vx, 297 + vy);
      vertex(162 + vx, 294 + vy);
      vertex(171 + vx, 282 + vy);
      vertex(171 + vx, 268 + vy);
      vertex(171 + vx, 258 + vy);
      vertex(176 + vx, 249 + vy);
      vertex(185 + vx, 236 + vy);
      vertex(182 + vx, 223 + vy);
      vertex(180 + vx, 209 + vy);
      vertex(176 + vx, 192 + vy);
      vertex(181 + vx, 176 + vy);
      vertex(189 + vx, 169 + vy);
      vertex(197 + vx, 161 + vy);
      vertex(203 + vx, 159 + vy);
      vertex(216 + vx, 165 + vy);
      vertex(224 + vx, 171 + vy);
      vertex(228 + vx, 186 + vy);
      vertex(240 + vx, 228 + vy);
      endShape(CLOSE);
    }

    //Leaf2
    {
      beginShape();
      vertex(262 + vx, 257 + vy);
      vertex(268 + vx, 184 + vy);
      vertex(268 + vx, 174 + vy);
      vertex(265 + vx, 172 + vy);
      vertex(262 + vx, 170 + vy);
      vertex(263 + vx, 164 + vy);
      vertex(264 + vx, 160 + vy);
      vertex(264 + vx, 151 + vy);
      vertex(260 + vx, 141 + vy);
      vertex(260 + vx, 129 + vy);
      vertex(263 + vx, 122 + vy);
      vertex(267 + vx, 116 + vy);
      vertex(268 + vx, 108 + vy);
      vertex(271 + vx, 103 + vy);
      vertex(275 + vx, 99 + vy);
      vertex(278 + vx, 93 + vy);
      vertex(283 + vx, 91 + vy);
      vertex(288 + vx, 93 + vy);
      vertex(293 + vx, 92 + vy);
      vertex(295 + vx, 96 + vy);
      vertex(297 + vx, 102 + vy);
      vertex(295 + vx, 105 + vy);
      vertex(297 + vx, 111 + vy);
      vertex(301 + vx, 122 + vy);
      vertex(302 + vx, 131 + vy);
      vertex(300 + vx, 140 + vy);
      vertex(302 + vx, 146 + vy);
      vertex(297 + vx, 157 + vy);
      vertex(295 + vx, 165 + vy);
      vertex(295 + vx, 172 + vy);
      vertex(293 + vx, 180 + vy);
      vertex(284 + vx, 184 + vy);
      vertex(279 + vx, 189 + vy);
      vertex(271 + vx, 191 + vy);
      vertex(265 + vx, 253 + vy);
      endShape(CLOSE);
    }

    //Leaf3
    {
      beginShape();
      vertex(251 + vx, 285 + vy);
      vertex(244 + vx, 203 + vy);
      vertex(243 + vx, 188 + vy);
      vertex(237 + vx, 163 + vy);
      vertex(226 + vx, 147 + vy);
      vertex(212 + vx, 137 + vy);
      vertex(198 + vx, 137 + vy);
      vertex(182 + vx, 136 + vy);
      vertex(170 + vx, 127 + vy);
      vertex(162 + vx, 122 + vy);
      vertex(153 + vx, 122 + vy);
      vertex(146 + vx, 122 + vy);
      vertex(139 + vx, 117 + vy);
      vertex(132 + vx, 114 + vy);
      vertex(126 + vx, 116 + vy);
      vertex(119 + vx, 116 + vy);
      vertex(110 + vx, 110 + vy);
      vertex(104 + vx, 107 + vy);
      vertex(100 + vx, 107 + vy);
      vertex(93 + vx, 105 + vy);
      vertex(90 + vx, 106 + vy);
      vertex(100 + vx, 100 + vy);
      vertex(114 + vx, 101 + vy);
      vertex(123 + vx, 98 + vy);
      vertex(133 + vx, 97 + vy);
      vertex(145 + vx, 98 + vy);
      vertex(153 + vx, 101 + vy);
      vertex(162 + vx, 98 + vy);
      vertex(170 + vx, 97 + vy);
      vertex(179 + vx, 97 + vy);
      vertex(186 + vx, 104 + vy);
      vertex(197 + vx, 105 + vy);
      vertex(206 + vx, 103 + vy);
      vertex(220 + vx, 104 + vy);
      vertex(228 + vx, 112 + vy);
      vertex(233 + vx, 120 + vy);
      vertex(244 + vx, 127 + vy);
      vertex(241 + vx, 138 + vy);
      vertex(240 + vx, 147 + vy);
      vertex(244 + vx, 154 + vy);
      vertex(244 + vx, 163 + vy);
      vertex(244 + vx, 169 + vy);
      vertex(243 + vx, 174 + vy);
      vertex(247 + vx, 187 + vy);
      vertex(248 + vx, 201 + vy);
      vertex(253 + vx, 283 + vy);
      endShape(CLOSE);
    }

    //Leaf4
    {
      beginShape();
      vertex(242 + vx, 262 + vy);
      vertex(227 + vx, 214 + vy);
      vertex(219 + vx, 203 + vy);
      vertex(212 + vx, 203 + vy);
      vertex(207 + vx, 207 + vy);
      vertex(202 + vx, 207 + vy);
      vertex(196 + vx, 208 + vy);
      vertex(195 + vx, 213 + vy);
      vertex(194 + vx, 219 + vy);
      vertex(197 + vx, 223 + vy);
      vertex(199 + vx, 226 + vy);
      vertex(201 + vx, 218 + vy);
      vertex(204 + vx, 212 + vy);
      vertex(210 + vx, 212 + vy);
      vertex(216 + vx, 209 + vy);
      vertex(217 + vx, 206 + vy);
      vertex(224 + vx, 215 + vy);
      vertex(231 + vx, 235 + vy);
      vertex(238 + vx, 260 + vy);
      endShape(CLOSE);
    }

    //Leaf5
    {
      beginShape();
      vertex(271 + vx, 279 + vy);
      vertex(288 + vx, 215 + vy);
      vertex(295 + vx, 205 + vy);
      vertex(305 + vx, 198 + vy);
      vertex(312 + vx, 192 + vy);
      vertex(322 + vx, 190 + vy);
      vertex(331 + vx, 191 + vy);
      vertex(337 + vx, 195 + vy);
      vertex(341 + vx, 199 + vy);
      vertex(343 + vx, 206 + vy);
      vertex(345 + vx, 211 + vy);
      vertex(348 + vx, 213 + vy);
      vertex(353 + vx, 214 + vy);
      vertex(358 + vx, 217 + vy);
      vertex(359 + vx, 221 + vy);
      vertex(357 + vx, 220 + vy);
      vertex(355 + vx, 219 + vy);
      vertex(351 + vx, 219 + vy);
      vertex(341 + vx, 219 + vy);
      vertex(335 + vx, 218 + vy);
      vertex(334 + vx, 213 + vy);
      vertex(330 + vx, 209 + vy);
      vertex(326 + vx, 206 + vy);
      vertex(323 + vx, 201 + vy);
      vertex(316 + vx, 202 + vy);
      vertex(315 + vx, 201 + vy);
      vertex(314 + vx, 198 + vy);
      vertex(312 + vx, 196 + vy);
      vertex(307 + vx, 200 + vy);
      vertex(302 + vx, 204 + vy);
      vertex(298 + vx, 207 + vy);
      vertex(295 + vx, 211 + vy);
      vertex(291 + vx, 217 + vy);
      vertex(288 + vx, 229 + vy);
      vertex(276 + vx, 276 + vy);
      endShape(CLOSE);
    }

    //Leaf7
    {
      beginShape();
      vertex(260 + vx, 301 + vy);
      vertex(269 + vx, 262 + vy);
      vertex(279 + vx, 230 + vy);
      vertex(287 + vx, 201 + vy);
      vertex(293 + vx, 186 + vy);
      vertex(298 + vx, 174 + vy);
      vertex(301 + vx, 165 + vy);
      vertex(308 + vx, 158 + vy);
      vertex(316 + vx, 146 + vy);
      vertex(328 + vx, 130 + vy);
      vertex(339 + vx, 121 + vy);
      vertex(350 + vx, 115 + vy);
      vertex(362 + vx, 119 + vy);
      vertex(369 + vx, 124 + vy);
      vertex(374 + vx, 124 + vy);
      vertex(379 + vx, 133 + vy);
      vertex(377 + vx, 136 + vy);
      vertex(376 + vx, 134 + vy);
      vertex(374 + vx, 130 + vy);
      vertex(371 + vx, 132 + vy);
      vertex(366 + vx, 133 + vy);
      vertex(357 + vx, 130 + vy);
      vertex(351 + vx, 131 + vy);
      vertex(344 + vx, 131 + vy);
      vertex(337 + vx, 146 + vy);
      vertex(331 + vx, 153 + vy);
      vertex(327 + vx, 157 + vy);
      vertex(322 + vx, 169 + vy);
      vertex(322 + vx, 180 + vy);
      vertex(318 + vx, 191 + vy);
      vertex(313 + vx, 195 + vy);
      vertex(302 + vx, 200 + vy);
      vertex(295 + vx, 212 + vy);
      vertex(286 + vx, 214 + vy);
      vertex(277 + vx, 247 + vy);
      vertex(269 + vx, 282 + vy);
      endShape(CLOSE);
    }

    //Leaf8
    {
      beginShape();

      endShape(CLOSE);
    }

    //Leaf9
    {
      beginShape();

      endShape(CLOSE);
    }

    //Pot
    {
      fill('cream')
      beginShape();
      vertex(255 + vx, 225 + vy);
      vertex(303 + vx, 225 + vy);
      vertex(307 + vx, 227 + vy);
      vertex(309 + vx, 231 + vy);
      vertex(308 + vx, 235 + vy);
      vertex(305 + vx, 239 + vy);
      vertex(303 + vx, 248 + vy);
      vertex(303 + vx, 256 + vy);
      vertex(305 + vx, 263 + vy);
      vertex(308 + vx, 273 + vy);
      vertex(318 + vx, 293 + vy);
      vertex(324 + vx, 307 + vy);
      vertex(327 + vx, 323 + vy);
      vertex(328 + vx, 359 + vy);
      vertex(321 + vx, 378 + vy);
      vertex(299 + vx, 403 + vy);
      vertex(273 + vx, 412 + vy);
      vertex(255 + vx, 412 + vy);
      vertex(515 - 255 + vx, 412 + vy);
      vertex(515 - 273 + vx, 412 + vy);
      vertex(515 - 299 + vx, 403 + vy);
      vertex(515 - 321 + vx, 378 + vy);
      vertex(515 - 328 + vx, 359 + vy);
      vertex(515 - 327 + vx, 323 + vy);
      vertex(515 - 324 + vx, 307 + vy);
      vertex(515 - 318 + vx, 293 + vy);
      vertex(515 - 308 + vx, 273 + vy);
      vertex(515 - 305 + vx, 263 + vy);
      vertex(515 - 303 + vx, 256 + vy);
      vertex(515 - 303 + vx, 248 + vy);
      vertex(515 - 305 + vx, 239 + vy);
      vertex(515 - 308 + vx, 235 + vy);
      vertex(515 - 309 + vx, 231 + vy);
      vertex(515 - 307 + vx, 227 + vy);
      vertex(515 - 303 + vx, 225 + vy);
      endShape(CLOSE);
    }

    //Pot
    {
      fill('blue')
      beginShape();
      vertex(255 + vx, 225 + vy);
      vertex(303 + vx, 225 + vy);
      vertex(307 + vx, 227 + vy);
      vertex(309 + vx, 231 + vy);
      vertex(515 - 309 + vx, 231 + vy);
      vertex(515 - 307 + vx, 227 + vy);
      vertex(515 - 303 + vx, 225 + vy);
      endShape(CLOSE);
    }

    fill('green');

    //Leaf6
    {
      beginShape();
      vertex(276 + vx, 287 + vy);
      vertex(276 + vx, 280 + vy);
      vertex(280 + vx, 274 + vy);
      vertex(284 + vx, 268 + vy);
      vertex(286 + vx, 258 + vy);
      vertex(288 + vx, 245 + vy);
      vertex(286 + vx, 240 + vy);
      vertex(284 + vx, 232 + vy);
      vertex(282 + vx, 226 + vy);
      vertex(282 + vx, 220 + vy);
      vertex(283 + vx, 212 + vy);
      vertex(281 + vx, 201 + vy);
      vertex(275 + vx, 196 + vy);
      vertex(273 + vx, 180 + vy);
      vertex(267 + vx, 179 + vy);
      vertex(260 + vx, 180 + vy);
      vertex(253 + vx, 181 + vy);
      vertex(241 + vx, 180 + vy);
      vertex(235 + vx, 183 + vy);
      vertex(233 + vx, 188 + vy);
      vertex(234 + vx, 195 + vy);
      vertex(237 + vx, 200 + vy);
      vertex(243 + vx, 205 + vy);
      vertex(243 + vx, 213 + vy);
      vertex(242 + vx, 220 + vy);
      vertex(244 + vx, 229 + vy);
      vertex(249 + vx, 234 + vy);
      vertex(257 + vx, 240 + vy);
      vertex(260 + vx, 249 + vy);
      vertex(260 + vx, 254 + vy);
      vertex(262 + vx, 259 + vy);
      vertex(265 + vx, 263 + vy);
      vertex(267 + vx, 269 + vy);
      vertex(267 + vx, 273 + vy);
      endShape(CLOSE);
    }
  }
}



function keyPressed() {

  if (keyCode === ENTER) {
    contin = !contin
  }
  if (keyCode === ENTER && start === false) {

    start = true
    contin = true

    print('//' + nom.value());
    print('{ ');
    print('fill("' + colorPicker.value() + '");');
    print('let ' + nom.value() + '_x = 0;');
    print('let ' + nom.value() + '_y = 0;');
    print('let ' + nom.value() + '_xScale = 1;');
    print('let ' + nom.value() + '_yScale = 1;');
    print('beginShape();');
    print('vertex((' + nom.value() + '_xScale*' + mx1 + ')+' + nom.value() + '_x,(' + nom.value() + '_yScale*' + my1 + ')+' + nom.value() + '_y);');
  }
  if (keyCode === RIGHT_ARROW && start === true) {
    start = false
    print('endShape(CLOSE);');
    print('//END' + nom.value());
    print('} ');
  }
  if (keyCode === 32 && start === true && contin === true) {


    mx1 = mouseX;
    my1 = mouseY;
    print('vertex((' + nom.value() + '_xScale*' + mx1 + ')+' + nom.value() + '_x,(' + nom.value() + '_yScale*' + my1 + ')+' + nom.value() + '_y);');

    //coordinates
    noStroke();
    fill(0, 10);
    text('x: ' + mouseX, mouseX + 20, mouseY);
    text('y: ' + mouseY, mouseX + 20, mouseY + 10);
    stroke(0, 0, 255);
  }

}



function keyReleased() {
  if (keyCode === 32 && start === true && contin === true) {
    mx2 = mouseX;
    my2 = mouseY;
  }
}
