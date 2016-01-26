	var width = 850;
	var height = 600;

	var svg = d3.select("#keplerMonster")
		.attr("width", width)
		.attr("height", height);

	//centre pentacle
	svg.append("svg:polygon")
	    .attr("id", "pentacleCentre")
	    .attr("visibility", "visible")
	    .attr("points", calculatePentaclePoints(width,height,5, 41,16))
	    .attr("transform", " rotate(54," + width/2 + "," + height/2 + ") scale(0.5,0.5)")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	var g0 = svg.append("g")
		.attr("transform", "translate(-100, 150)");
			    
	var g = g0.append("g")
		.attr("transform", "translate(200, 200) rotate(90, 325, 300) translate(0, 250) scale (0.8,0.8)");
	
	var g1	= g.append("g")
		.attr("transform", "scale(0.5, 0.5)");

	var g2 = g.append("g")
		.attr("transform", "scale(0.5, 0.5) translate(0, 210)");

	var g3 = g0.append("g")
		.attr("transform", "scale(0.5, 0.5) translate(210, 0) scale(0.8, 0.8) rotate(90,200,50) translate(263,-820)");

	var g4 = g0.append("g")
		.attr("transform", "scale(0.5, 0.5) translate(210, 0) scale(0.8, 0.8) rotate(90,200,50) translate(912,-820)");

	
	var point = svg.append("circle")
		.attr("cx", width/2)
		.attr("cy", height/2)
		.attr("r", 2)
		.style("fill", "red");
	
	
	drawKeplerMonster(g1);
	drawKeplerMonster(g2);
	drawKeplerMonster2(g3);
	drawKeplerMonster3(g4);
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

	function drawKeplerMonster(svg) {
	//monster
	svg.append("svg:polygon")
	    .attr("id", "monster")
	    .attr("visibility", "visible")
	    .attr("points", calculateMonsterPoints(355,159.5,50))
	    .attr("fill", "none")
	    .attr("stroke", "black")
	    .attr("stroke-width", "1");

	//decagon1
	svg.append("svg:polygon")
	    .attr("id", "decagon1")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(18,231,200)")
	    .attr("points", calculatePolygonPoints(10,231,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//decagon2
	svg.append("svg:polygon")
	    .attr("id", "decagon2")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(18,479,200)")
	    .attr("points", calculatePolygonPoints(10,479,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon1
	svg.append("svg:polygon")
	    .attr("id", "pentagon1")
	    .attr("visibility", "visible")
	// .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
	    .attr("points", calculatePolygonPoints(5,299.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon2
	svg.append("svg:polygon")
	    .attr("id", "pentagon2")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 410.5, 200)")
	    .attr("points", calculatePolygonPoints(5,410.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon3
	svg.append("svg:polygon")
	    .attr("id", "pentagon3")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(0, 410, 200)")
	    .attr("points", calculatePolygonPoints(5,423.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon4
	svg.append("svg:polygon")
	    .attr("id", "pentagon4")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 286.5, 160)")
	    .attr("points", calculatePolygonPoints(5,286.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon5
	svg.append("svg:polygon")
	    .attr("id", "pentagon5")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 286.5, 240)")
	    .attr("points", calculatePolygonPoints(5,286.5,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

        //pentagon6
	svg.append("svg:polygon")
	    .attr("id", "pentagon6")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(0, 420, 240)")
	    .attr("points", calculatePolygonPoints(5,423.5,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");


	//pentagon7
	svg.append("svg:polygon")
	    .attr("id", "pentagon7")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 411, 120)")
	    .attr("points", calculatePolygonPoints(5,411,120,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon8
	svg.append("svg:polygon")
	    .attr("id", "pentagon8")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 457.5, 135)")
	    .attr("points", calculatePolygonPoints(5,457.5,135,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon9
	svg.append("svg:polygon")
	    .attr("id", "pentagon9")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 277.5, 125)")
	    .attr("points", calculatePolygonPoints(5,299,120,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon10
	svg.append("svg:polygon")
	    .attr("id", "pentagon10")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,252.5,135,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon11
	svg.append("svg:polygon")
	    .attr("id", "pentagon11")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,252.5,265,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon12
	svg.append("svg:polygon")
	    .attr("id", "pentagon12")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,299,280,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon13
	svg.append("svg:polygon")
	    .attr("id", "pentagon13")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 411, 280)")
	    .attr("points", calculatePolygonPoints(5,411,280,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon14
	svg.append("svg:polygon")
	    .attr("id", "pentagon14")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 457.5, 265)")
	    .attr("points", calculatePolygonPoints(5,457.5,265,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon15
	svg.append("svg:polygon")
	    .attr("id", "pentagon15")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 534, 241)")
	    .attr("points", calculatePolygonPoints(5,534,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon16
	svg.append("svg:polygon")
	    .attr("id", "pentagon16")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 534, 241)")
	    .attr("points", calculatePolygonPoints(5,547.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon17
	svg.append("svg:polygon")
	    .attr("id", "pentagon17")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 534.5, 160)")
	    .attr("points", calculatePolygonPoints(5,534.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon18
	svg.append("svg:polygon")
	    .attr("id", "pentagon15")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 134, 240)")
	    .attr("points", calculatePolygonPoints(5,175,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon19
	svg.append("svg:polygon")
	    .attr("id", "pentagon16")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(180, 162.5, 200)")
	    .attr("points", calculatePolygonPoints(5,162.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon20
	svg.append("svg:polygon")
	    .attr("id", "pentagon17")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 134.5, 160)")
	    .attr("points", calculatePolygonPoints(5,175.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentacle
//	svg.append("svg:polygon")
//	    .attr("id", "pentacle")
//	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36,444.5,95.5)")
//	    .attr("points", calculatePentaclePoints(444.5,95.5,5, 41,16))
//	    .attr("fill", "none")
//	    .attr("stroke","black")
//	    .attr("stroke-width", "1");

	//pentacle1
	svg.append("svg:polygon")
	    .attr("id", "pentacle1")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36,120.5,200)")
	    .attr("points", calculatePentaclePoints(120.5,200,5, 41,16))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

		//pentacle2
	svg.append("svg:polygon")
	    .attr("id", "pentacle2")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36,120.5,200)")
	    .attr("points", calculatePentaclePoints(589.5,200,5, 41,16))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	
	//pentagon21
	svg.append("svg:polygon")
	    .attr("id", "pentagon21")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(180, 162.5, 200)")
	    .attr("points", calculatePolygonPoints(5,53,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon22
	svg.append("svg:polygon")
	    .attr("id", "pentagon22")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(180, 657, 200)")
	    .attr("points", calculatePolygonPoints(5,657,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");
	}

	function drawKeplerMonster2(svg) {
	//monster
	svg.append("svg:polygon")
	    .attr("id", "monster")
	    .attr("visibility", "visible")
	    .attr("points", calculateMonsterPoints(355,159.5,50))
	    .attr("fill", "none")
	    .attr("stroke", "black")
	    .attr("stroke-width", "1");

	//decagon1
	svg.append("svg:polygon")
	    .attr("id", "decagon1")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(18,231,200)")
	    .attr("points", calculatePolygonPoints(10,231,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//decagon2
	svg.append("svg:polygon")
	    .attr("id", "decagon2")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(18,479,200)")
	    .attr("points", calculatePolygonPoints(10,479,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon1
	svg.append("svg:polygon")
	    .attr("id", "pentagon1")
	    .attr("visibility", "visible")
	// .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
	    .attr("points", calculatePolygonPoints(5,299.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon2
	svg.append("svg:polygon")
	    .attr("id", "pentagon2")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 410.5, 200)")
	    .attr("points", calculatePolygonPoints(5,410.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon3
	svg.append("svg:polygon")
	    .attr("id", "pentagon3")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(0, 410, 200)")
	    .attr("points", calculatePolygonPoints(5,423.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon4
	svg.append("svg:polygon")
	    .attr("id", "pentagon4")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 286.5, 160)")
	    .attr("points", calculatePolygonPoints(5,286.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon5
	svg.append("svg:polygon")
	    .attr("id", "pentagon5")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 286.5, 240)")
	    .attr("points", calculatePolygonPoints(5,286.5,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

        //pentagon6
	svg.append("svg:polygon")
	    .attr("id", "pentagon6")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(0, 420, 240)")
	    .attr("points", calculatePolygonPoints(5,423.5,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");


	//pentagon7
	svg.append("svg:polygon")
	    .attr("id", "pentagon7")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 411, 120)")
	    .attr("points", calculatePolygonPoints(5,411,120,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon8
	svg.append("svg:polygon")
	    .attr("id", "pentagon8")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 457.5, 135)")
	    .attr("points", calculatePolygonPoints(5,457.5,135,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon9
	svg.append("svg:polygon")
	    .attr("id", "pentagon9")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 277.5, 125)")
	    .attr("points", calculatePolygonPoints(5,299,120,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon10
	svg.append("svg:polygon")
	    .attr("id", "pentagon10")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,252.5,135,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon11
	svg.append("svg:polygon")
	    .attr("id", "pentagon11")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,252.5,265,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon12
	svg.append("svg:polygon")
	    .attr("id", "pentagon12")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,299,280,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon13
	svg.append("svg:polygon")
	    .attr("id", "pentagon13")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 411, 280)")
	    .attr("points", calculatePolygonPoints(5,411,280,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon14
	svg.append("svg:polygon")
	    .attr("id", "pentagon14")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 457.5, 265)")
	    .attr("points", calculatePolygonPoints(5,457.5,265,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon15
	svg.append("svg:polygon")
	    .attr("id", "pentagon15")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 534, 241)")
	    .attr("points", calculatePolygonPoints(5,534,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon16
	svg.append("svg:polygon")
	    .attr("id", "pentagon16")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 534, 241)")
	    .attr("points", calculatePolygonPoints(5,547.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon17
	svg.append("svg:polygon")
	    .attr("id", "pentagon17")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 534.5, 160)")
	    .attr("points", calculatePolygonPoints(5,534.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon18
	svg.append("svg:polygon")
	    .attr("id", "pentagon15")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 134, 240)")
	    .attr("points", calculatePolygonPoints(5,175,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon19
	svg.append("svg:polygon")
	    .attr("id", "pentagon16")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(180, 162.5, 200)")
	    .attr("points", calculatePolygonPoints(5,162.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon20
	svg.append("svg:polygon")
	    .attr("id", "pentagon17")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 134.5, 160)")
	    .attr("points", calculatePolygonPoints(5,175.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentacle
//	svg.append("svg:polygon")
//	    .attr("id", "pentacle")
//	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36,444.5,95.5)")
//	    .attr("points", calculatePentaclePoints(444.5,95.5,5, 41,16))
//	    .attr("fill", "none")
//	    .attr("stroke","black")
//	    .attr("stroke-width", "1");

	//pentacle1
	svg.append("svg:polygon")
	    .attr("id", "pentacle1")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36,120.5,200)")
	    .attr("points", calculatePentaclePoints(120.5,200,5, 41,16))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

		//pentacle2
	svg.append("svg:polygon")
	    .attr("id", "pentacle2")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36,120.5,200)")
	    .attr("points", calculatePentaclePoints(589.5,200,5, 41,16))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	
	//pentagon21
	svg.append("svg:polygon")
	    .attr("id", "pentagon21")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(180, 162.5, 200)")
	    .attr("points", calculatePolygonPoints(5,53,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon22
//	svg.append("svg:polygon")
//	    .attr("id", "pentagon22")
//	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(180, 657, 200)")
//	    .attr("points", calculatePolygonPoints(5,657,200,26))
//	    .attr("fill", "none")
//	    .attr("stroke","black")
//	    .attr("stroke-width", "1");
	}

	function drawKeplerMonster3(svg) {
	//monster
	svg.append("svg:polygon")
	    .attr("id", "monster")
	    .attr("visibility", "visible")
	    .attr("points", calculateMonsterPoints(355,159.5,50))
	    .attr("fill", "none")
	    .attr("stroke", "black")
	    .attr("stroke-width", "1");

	//decagon1
	svg.append("svg:polygon")
	    .attr("id", "decagon1")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(18,231,200)")
	    .attr("points", calculatePolygonPoints(10,231,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//decagon2
	svg.append("svg:polygon")
	    .attr("id", "decagon2")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(18,479,200)")
	    .attr("points", calculatePolygonPoints(10,479,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon1
	svg.append("svg:polygon")
	    .attr("id", "pentagon1")
	    .attr("visibility", "visible")
	// .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
	    .attr("points", calculatePolygonPoints(5,299.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon2
	svg.append("svg:polygon")
	    .attr("id", "pentagon2")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 410.5, 200)")
	    .attr("points", calculatePolygonPoints(5,410.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon3
	svg.append("svg:polygon")
	    .attr("id", "pentagon3")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(0, 410, 200)")
	    .attr("points", calculatePolygonPoints(5,423.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon4
	svg.append("svg:polygon")
	    .attr("id", "pentagon4")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 286.5, 160)")
	    .attr("points", calculatePolygonPoints(5,286.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon5
	svg.append("svg:polygon")
	    .attr("id", "pentagon5")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 286.5, 240)")
	    .attr("points", calculatePolygonPoints(5,286.5,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

        //pentagon6
	svg.append("svg:polygon")
	    .attr("id", "pentagon6")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(0, 420, 240)")
	    .attr("points", calculatePolygonPoints(5,423.5,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");


	//pentagon7
	svg.append("svg:polygon")
	    .attr("id", "pentagon7")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 411, 120)")
	    .attr("points", calculatePolygonPoints(5,411,120,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon8
	svg.append("svg:polygon")
	    .attr("id", "pentagon8")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 457.5, 135)")
	    .attr("points", calculatePolygonPoints(5,457.5,135,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon9
	svg.append("svg:polygon")
	    .attr("id", "pentagon9")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 277.5, 125)")
	    .attr("points", calculatePolygonPoints(5,299,120,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon10
	svg.append("svg:polygon")
	    .attr("id", "pentagon10")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,252.5,135,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon11
	svg.append("svg:polygon")
	    .attr("id", "pentagon11")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,252.5,265,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon12
	svg.append("svg:polygon")
	    .attr("id", "pentagon12")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,299,280,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon13
	svg.append("svg:polygon")
	    .attr("id", "pentagon13")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 411, 280)")
	    .attr("points", calculatePolygonPoints(5,411,280,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon14
	svg.append("svg:polygon")
	    .attr("id", "pentagon14")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 457.5, 265)")
	    .attr("points", calculatePolygonPoints(5,457.5,265,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon15
	svg.append("svg:polygon")
	    .attr("id", "pentagon15")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 534, 241)")
	    .attr("points", calculatePolygonPoints(5,534,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon16
	svg.append("svg:polygon")
	    .attr("id", "pentagon16")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 534, 241)")
	    .attr("points", calculatePolygonPoints(5,547.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon17
	svg.append("svg:polygon")
	    .attr("id", "pentagon17")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36, 534.5, 160)")
	    .attr("points", calculatePolygonPoints(5,534.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon18
	svg.append("svg:polygon")
	    .attr("id", "pentagon15")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 134, 240)")
	    .attr("points", calculatePolygonPoints(5,175,240,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon19
	svg.append("svg:polygon")
	    .attr("id", "pentagon16")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(180, 162.5, 200)")
	    .attr("points", calculatePolygonPoints(5,162.5,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentagon20
	svg.append("svg:polygon")
	    .attr("id", "pentagon17")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 134.5, 160)")
	    .attr("points", calculatePolygonPoints(5,175.5,160,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	//pentacle
//	svg.append("svg:polygon")
//	    .attr("id", "pentacle")
//	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36,444.5,95.5)")
//	    .attr("points", calculatePentaclePoints(444.5,95.5,5, 41,16))
//	    .attr("fill", "none")
//	    .attr("stroke","black")
//	    .attr("stroke-width", "1");

	//pentacle1
	svg.append("svg:polygon")
	    .attr("id", "pentacle1")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36,120.5,200)")
	    .attr("points", calculatePentaclePoints(120.5,200,5, 41,16))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

		//pentacle2
	svg.append("svg:polygon")
	    .attr("id", "pentacle2")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36,120.5,200)")
	    .attr("points", calculatePentaclePoints(589.5,200,5, 41,16))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");

	
	//pentagon21
//	svg.append("svg:polygon")
//	    .attr("id", "pentagon21")
//	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(180, 162.5, 200)")
//	    .attr("points", calculatePolygonPoints(5,53,200,26))
//	    .attr("fill", "none")
//	    .attr("stroke","black")
//	    .attr("stroke-width", "1");

	//pentagon22
	svg.append("svg:polygon")
	    .attr("id", "pentagon22")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(180, 657, 200)")
	    .attr("points", calculatePolygonPoints(5,657,200,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");
	}
