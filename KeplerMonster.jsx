KeplerMonster = React.createClass({

    drawKeplerMonster: function() {

	var svg = d3.select("#keplerMonster")
		.attr("width", 800)
		.attr("height", 500);

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

	//pentacle
	svg.append("svg:polygon")
	    .attr("id", "pentacle")
	    .attr("visibility", "visible")
	    .attr("transform", "rotate(36,444.5,95.5)")
	    .attr("points", calculatePentaclePoints(444.5,95.5,5, 41,16))
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
	    .attr("id", "pentagon11")
	    .attr("visibility", "visible")
//	    .attr("transform", "rotate(36, 285, 135)")
	    .attr("points", calculatePolygonPoints(5,299,280,26))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1");


    },
    

    componentDidMount: function() {
	this.drawKeplerMonster();
    },

    svgStyle: {
	margin: 'auto',
	display: 'block'
    },

    render: function() {

	return(
	    <div>
	      <div textAlign = "center" >
	      <svg id="keplerMonster" style = {this.svgStyle}>
	      </svg>
	    </div>

	    </div>
	    
	);

    }
});
