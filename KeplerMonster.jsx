KeplerMonster = React.createClass({

    drawKeplerMonster: function() {

	var width = 400;
	var height = 400;
	var monsterColour = "rgb(254, 111, 94)";
	var decagonColour = "rgb(176,224,230)";
	var pentagonColour = "rgb(102,153,204)";
	var pentacleColour = "rgb(255,3,62)";

	var svg = d3.select("#keplerMonster")
		.attr("width", width)
		.attr("height", height)
		.style("background", pentagonColour);


//    	var centrePoint = svg.append("circle")
//		.attr("cx", width/2)
//		.attr("cy", height/2)
//		.attr("r", 2)
//              .style("fill", "red");

        //centre pentacle
	svg.append("svg:polygon")
	    .attr("id", "pentacleCentre")
	    .attr("visibility", "visible")
	    .attr("points", calculatePentaclePoints(850,600,5, 41,16))
	    .attr("transform", " rotate(54," + 850/2.4 + "," + 600/2.4 + ") scale(0.4,0.4) translate(240,-45)")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	    .style("fill", pentacleColour);

	var masterg = svg.append("g").attr("id", "masterg");

	

	drawTiling();
	
	function drawTiling() {

	    drawFlower(masterg);
	    drawIntermediatePetal(36, masterg);
	    drawIntermediatePetal(108, masterg);
	    drawIntermediatePetal(180, masterg);
	    drawIntermediatePetal(252, masterg);
	    drawIntermediatePetal(324, masterg);
	    fillInGaps(masterg);

	}
	

	function drawFlower(masterg) {
	      drawPetal(0, masterg);
	      drawPetal(72, masterg);
	      drawPetal(144, masterg);
	      drawPetal(216, masterg);
	      drawPetal(288, masterg);

	    }

	d3.select("#masterg").attr("transform", "scale(1,1)");
    //	var pentacleCentre = d3.select("#pentacleCentre");

    //	var t0 = masterg1.transition().delay(0).duration(5000);
    //	var t1 = pentacleCentre.transition().delay(0).duration(5000);

    //	t0.attr("transform", " rotate(" + 180 + "," + (width/2) + "," + (height/2)  +  ")" );
	    //	t1.attr("transform", " rotate(" + 180 + "," + (width/2) + "," + (height/2)  +  ")" );


	function fillInGaps(masterg) {

	     var g0 = masterg.append("g")
			    .attr("transform", "translate(-28, 278) rotate(" + 0 + "," + (850/2 + 28) + "," + (600/2 - 278)  +  ")" );

	     var g = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(90, 325, 300) translate(58, 208) scale(0.4, 0.4)");

	    var g00 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(90, 325, 300) translate(58, 376) scale(0.4, 0.4)");

	    var g01 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(54, 325, 300) translate(-599, -87) scale(0.4, 0.4)");

	    var g02 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-54, 325, 300) translate(880.5, -203.5) scale(0.4, 0.4)");

	    var g03 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-54, 325, 300) translate(880.5, -35) scale(0.4, 0.4)");

	    var g04 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(54, 325, 300) translate(-599, 81.5) scale(0.4, 0.4)");

	    var g05 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(198, 425, 0) translate(148.5, 120.5) scale(0.4, 0.4)");

	    var g06 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-198, 425, 0) translate(744.5, 226.5) scale(0.4, 0.4)");

	    var g07 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(18, 425, 0) translate(417.5, -112) scale(0.4, 0.4)");

	    var g08 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-18, 425, 0) translate(-178.5, -218.5) scale(0.4, 0.4)");

	    var g09 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-54, 0, 0) translate(-273.8, -64.2) scale(0.4, 0.4)");

	    var g10 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(54, 0, 0) translate(287.5, -473.5) scale(0.4, 0.4)");

	    var g11 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(526, -201.3) scale(0.4, 0.4)");

	    var g12 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(526.5, -285.5) scale(0.4, 0.4)");

	    var g13 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(526.5, -369.7) scale(0.4, 0.4)");

	    var g14 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-18, 0, 0) translate(578, -255.2) scale(0.4, 0.4)");

	    var g15 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-18, 0, 0) translate(578, -87) scale(0.4, 0.4)");

	    var g16 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(-381, -243.2) scale(0.4, 0.4)");

	    var g17 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(526, -454) scale(0.4, 0.4)");

 	   var g18 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-54, 0, 0) translate(633.2, 146.2) scale(0.4, 0.4)");

	    var g19 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-18, 0, 0) translate(707.5, -297.5) scale(0.4, 0.4)");

	    var g20 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-18, 0, 0) translate(-329.2, -129.3) scale(0.4, 0.4)");

	    var g21 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-18, 0, 0) translate(-329.2, -213.2) scale(0.4, 0.4)");

	    var g22 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(-18, 0, 0) translate(-329.1, -45) scale(0.4, 0.4)");

	    var g23 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(-381, -411.5) scale(0.4, 0.4)");

	    var g24 = g0.append("g")
	    .attr("transform", "translate(200, 200) rotate(54, 0, 0) translate(-619.5, -263) scale(0.4, 0.4)");

	    var g25 = g0.append("g")
		    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(-510.5, -453.5) scale(0.4, 0.4)");

	    var g26 = g0.append("g")
		    .attr("transform", "translate(200, 200) rotate(18, 0, 0) translate(-510.5, -369.5) scale(0.4, 0.4)");

	    var g27 = g0.append("g")
		    .attr("transform", "translate(200, 200) rotate(-18, 0, 0) translate(-329.2, -297.3) scale(0.4, 0.4)");

	    var g28 = g0.append("g")
		    .attr("transform", "translate(200, 200) rotate(54, 0, 0) translate(-620.2, -347.2) scale(0.4, 0.4)");



	    drawKeplerMonster(g,2);
	    drawKeplerMonster(g00,2);
	    drawKeplerMonster(g01,1);
	    drawKeplerMonster(g02,2);
	    drawKeplerMonster(g03,2);
	    drawKeplerMonster(g04,2);
	    drawKeplerMonster(g05,1);
	    drawKeplerMonster(g06,2);
	    drawKeplerMonster(g07,2);
	    drawKeplerMonster(g08,1);
	    drawKeplerMonster(g09,1);
	    drawKeplerMonster(g10,2);
	    drawKeplerMonster(g11,2);
	    drawKeplerMonster(g12,2);
	    drawKeplerMonster(g13,2);
	    drawKeplerMonster(g14,2);
	    drawKeplerMonster(g15,2);
	    drawKeplerMonster(g16,1);
	    drawKeplerMonster(g17,2);
	    drawKeplerMonster(g18,2);
	    drawKeplerMonster(g19,2);
	    drawKeplerMonster(g20,1);
	    drawKeplerMonster(g21,1);
	    drawKeplerMonster(g22,1);
	    drawKeplerMonster(g23,1);
	    drawKeplerMonster(g24,1);
	    drawKeplerMonster(g25,1);
	    drawKeplerMonster(g26,1);
	    drawKeplerMonster(g27,1);
	    drawKeplerMonster(g28,1);
	    
	    

	}

	function drawIntermediatePetal(degrees, masterg) {
	    var g0 = masterg.append("g")
		    .attr("transform", "translate(-28, 278) rotate(" + degrees + "," + (850/2 + 28) + "," + (600/2 - 278)  +  ")" );

	    var g = g0.append("g")
		    .attr("transform", "translate(200, 200) rotate(90, 325, 300) translate(0, 250) scale(0.8, 0.8)");

	    var g1	= g.append("g")
		    .attr("transform", "scale(0.5, 0.5)");

	    var g2 = g.append("g")
		    .attr("transform", "scale(0.5, 0.5) translate(0, 210)");

	    var g3 = g0.append("g")
		    .attr("transform", "scale(0.5, 0.5) translate(210, 0) scale(0.8, 0.8) rotate(90,200,50) translate(263,-820)");

	    var g4 = g0.append("g")
		    .attr("transform", "scale(0.5, 0.5) translate(210, 0) scale(0.8, 0.8) rotate(90,200,50) translate(912,-820)");

	    drawKeplerMonster(g1);
	    drawKeplerMonster(g2);
	    drawKeplerMonster(g3,2);
	    drawKeplerMonster(g4,2);
	} 

	
    
    
    function drawPetal(degrees, masterg) {
    //bottom of star 
    	var g0 = masterg.append("g")
		.attr("transform", "translate(-28, 206.5) rotate(" + degrees + "," + (850/2 + 28) + "," + (600/2 - 206.5)  +  ")" );
			    
	var g = g0.append("g")
		.attr("transform", "translate(200, 200) rotate(90, 325, 300) translate(0, 250) scale(0.8, 0.8)");
	
	var g1	= g.append("g")
		.attr("transform", "scale(0.5, 0.5)");

	var g2 = g.append("g")
		.attr("transform", "scale(0.5, 0.5) translate(0, 210)");

	var g3 = g0.append("g")
		.attr("transform", "scale(0.5, 0.5) translate(210, 0) scale(0.8, 0.8) rotate(90,200,50) translate(263,-820)");

	var g4 = g0.append("g")
		.attr("transform", "scale(0.5, 0.5) translate(210, 0) scale(0.8, 0.8) rotate(90,200,50) translate(912,-820)");
    	
	drawKeplerMonster(g1);
	drawKeplerMonster(g2);
	drawKeplerMonster(g3,2);
        drawKeplerMonster(g4,2);
    }

	function calculatePolygonPoints(sides, centerX, centerY, radius) {

	    var results = "";
	    var angle = Math.PI / sides;
	    var r = radius;

	    for (var i = 0; i < sides; i++) {
		var currX = centerX + Math.cos(i * 2 * angle) * r;
		var currY = centerY + Math.sin(i * 2 * angle) *  r;

				// Our first time we simply append the coordinates
		// subsequent times we append a ", " to distinguish
		// each coordinate pair.

		if (i == 0)
		{
		    results = currX + "," + currY;
		}
		else
		{
		    results += "," + currX + "," + currY;
		}
	    }

	    return results;
	}

	function calculatePentaclePoints(centerX, centerY, arms, outerRadius, innerRadius) {
	    	    var results = "";
	    var angle = Math.PI / arms;

	    for (var i = 0; i < 2 * arms; i++) {

		//use outer or inner radius depending on which iteration we are in.

		var r = (i & 1) == 0 ? outerRadius : innerRadius;

		var currX = centerX + Math.cos(i * angle) * r;
		var currY = centerY + Math.sin(i * angle) * r;

		// Our first time we simply append the coordinates
		// subsequent times we append a ", " to distinguish
		// each coordinate pair.

		if (i == 0)
		{
		    results = currX + "," + currY;
		}
		else
		{
		    results += "," + currX + "," + currY;
		}
	    }

	    return results;
	}

	function calculateMonsterPoints(centerX, centerY, radius) {
	    var results = "";
	    var angle = Math.PI / 10;
	    var r = radius;

	    var centerX2 = centerX;
	    var centerY2 = centerY + (1.6181 * r);
	
	    for (var i = 0; i < 9; i++) {
		var currX = centerX + Math.cos(7 * angle + i * 2 * angle) * r;
		var currY = centerY + Math.sin(7 * angle + i * 2 * angle) *  r;

				// Our first time we simply append the coordinates
		// subsequent times we append a ", " to distinguish
		// each coordinate pair.

		if (i == 0)
		{
		    results = currX + "," + currY;
		}
		else
		{
		    results += "," + currX + "," + currY;
		}
	    }

	    for (var k = 0; k < 9; k++) {
		var currX2 = centerX + Math.cos(-3 * angle + k * 2 * angle) * r;
		var currY2 = centerY2 + Math.sin(-3 * angle + k * 2 * angle) *  r;

		    results += "," + currX2 + "," + currY2;
	
	    }

	    return results;
	}

	function drawKeplerMonster(svg, type) {

	    //monster
	    svg.append("svg:polygon")
		.attr("id", "monster")
		.attr("class", "monster")
		.attr("visibility", "visible")
		.attr("points", calculateMonsterPoints(355,159.5,50))
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("stroke-width", "1")
		.style("fill", monsterColour);
	    
	    //decagon1
	    svg.append("svg:polygon")
		.attr("id", "decagon1")
		.attr("class", "decagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(18,231,200)")
		.attr("points", calculatePolygonPoints(10,231,200,50))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", decagonColour);
	    

	    //decagon2
	    svg.append("svg:polygon")
		.attr("id", "decagon2")
	    	.attr("class", "decagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(18,479,200)")
		.attr("points", calculatePolygonPoints(10,479,200,50))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", decagonColour);
	    

	    //pentagon1
	    svg.append("svg:polygon")
		.attr("id", "pentagon1")
		.attr("class", "pentagon")
		.attr("visibility", "visible")
	    // .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
		.attr("points", calculatePolygonPoints(5,299.5,200,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);
	    

	    //pentagon2
	    svg.append("svg:polygon")
		.attr("id", "pentagon2")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 410.5, 200)")
		.attr("points", calculatePolygonPoints(5,410.5,200,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon3
	    svg.append("svg:polygon")
		.attr("id", "pentagon3")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(0, 410, 200)")
		.attr("points", calculatePolygonPoints(5,423.5,160,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon4
	    svg.append("svg:polygon")
		.attr("id", "pentagon4")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 286.5, 160)")
		.attr("points", calculatePolygonPoints(5,286.5,160,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon5
	    svg.append("svg:polygon")
		.attr("id", "pentagon5")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 286.5, 240)")
		.attr("points", calculatePolygonPoints(5,286.5,240,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon6
	    svg.append("svg:polygon")
		.attr("id", "pentagon6")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(0, 420, 240)")
		.attr("points", calculatePolygonPoints(5,423.5,240,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);


	    //pentagon7
	    svg.append("svg:polygon")
		.attr("id", "pentagon7")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 411, 120)")
		.attr("points", calculatePolygonPoints(5,411,120,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon8
	    svg.append("svg:polygon")
		.attr("id", "pentagon8")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 457.5, 135)")
		.attr("points", calculatePolygonPoints(5,457.5,135,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon9
	    svg.append("svg:polygon")
		.attr("id", "pentagon9")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36, 277.5, 125)")
		.attr("points", calculatePolygonPoints(5,299,120,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon10
	    svg.append("svg:polygon")
		.attr("id", "pentagon10")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36, 285, 135)")
		.attr("points", calculatePolygonPoints(5,252.5,135,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon11
	    svg.append("svg:polygon")
		.attr("id", "pentagon11")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36, 285, 135)")
		.attr("points", calculatePolygonPoints(5,252.5,265,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);;

	    //pentagon12
	    svg.append("svg:polygon")
		.attr("id", "pentagon12")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36, 285, 135)")
		.attr("points", calculatePolygonPoints(5,299,280,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon13
	    svg.append("svg:polygon")
		.attr("id", "pentagon13")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 411, 280)")
		.attr("points", calculatePolygonPoints(5,411,280,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon14
	    svg.append("svg:polygon")
		.attr("id", "pentagon14")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 457.5, 265)")
		.attr("points", calculatePolygonPoints(5,457.5,265,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon15
	    svg.append("svg:polygon")
		.attr("id", "pentagon15")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 534, 241)")
		.attr("points", calculatePolygonPoints(5,534,240,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon16
	    svg.append("svg:polygon")
		.attr("id", "pentagon16")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36, 534, 241)")
		.attr("points", calculatePolygonPoints(5,547.5,200,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon17
	    svg.append("svg:polygon")
		.attr("id", "pentagon17")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36, 534.5, 160)")
		.attr("points", calculatePolygonPoints(5,534.5,160,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon18
	    svg.append("svg:polygon")
		.attr("id", "pentagon18")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36, 134, 240)")
		.attr("points", calculatePolygonPoints(5,175,240,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon19
	    svg.append("svg:polygon")
		.attr("id", "pentagon19")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(180, 162.5, 200)")
		.attr("points", calculatePolygonPoints(5,162.5,200,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentagon20
	    svg.append("svg:polygon")
		.attr("id", "pentagon17")
	    	.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36, 134.5, 160)")
		.attr("points", calculatePolygonPoints(5,175.5,160,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentagonColour);

	    //pentacle1
	    svg.append("svg:polygon")
		.attr("id", "pentacle1")
	    	.attr("class", "pentacle")
		.attr("visibility", "visible")
		.attr("transform", "rotate(36,120.5,200)")
		.attr("points", calculatePentaclePoints(120.5,200,5, 41,16))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentacleColour);

		    //pentacle2
	    svg.append("svg:polygon")
		.attr("id", "pentacle2")
	    	.attr("class", "pentacle")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(36,120.5,200)")
		.attr("points", calculatePentaclePoints(589.5,200,5, 41,16))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
	    	.style("fill", pentacleColour);

	 //   if (type != 1) {
		//pentagon21
	    svg.append("svg:polygon")
		.attr("id", "pentagon21")
		.attr("class", "pentagon")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(180, 162.5, 200)")
		.attr("points", calculatePolygonPoints(5,53,200,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
		.style("fill", pentagonColour);
       // }
	    
	  //  if (type != 2) {
	    //pentagon22
	    svg.append("svg:polygon")
		.attr("id", "pentagon22")
		.attr("class", "pentagon")
		.attr("visibility", "visible")
		.attr("transform", "rotate(180, 657, 200)")
		.attr("points", calculatePolygonPoints(5,657,200,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
		.style("fill", pentagonColour);
      //  }
	}

    },
    

    componentDidMount: function() {
	this.drawKeplerMonster();
    },

    svgStyle: {
	margin: 'auto',
	display: 'block',
	float: 'right',
	marginTop: '7',
	marginBottom: '25'
    },


    render: function() {

	return(
	      <svg id="keplerMonster" style = {this.svgStyle}>
	      </svg>
	    
	);

    }
});
