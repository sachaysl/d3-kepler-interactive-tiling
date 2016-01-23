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


	//decagon
	svg.append("svg:polygon")
	    .attr("id", "decagon")
	    .attr("visibility", "visible")
	// .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
	    .attr("points", calculatePolygonPoints(10,200,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "2");

	//pentagon
	svg.append("svg:polygon")
	    .attr("id", "pentagon")
	    .attr("visibility", "visible")
	// .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
	    .attr("points", calculatePolygonPoints(5,400,200,50))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "2");

	//pentacle

	svg.append("svg:polygon")
	    .attr("id", "pentacle")
	    .attr("visibility", "visible")
	// .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
	    .attr("points", calculatePentaclePoints(600,200,5, 50,20))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "2");

	
	


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
