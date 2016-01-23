KeplerMonster = React.createClass({

    drawKeplerMonster: function() {

	var svg = d3.select("#keplerMonster")
		.attr("width", 800)
		.attr("height", 500);

	function calculateDecagonPoints(centerX, centerY, radius) {

	    var results = "";
	    var angle = Math.PI / 10;
	    var r = radius;

	    for (var i = 0; i < 10; i++) {
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

	svg.append("svg:polygon")
	    .attr("id", "decagon")
	    .attr("visibility", "visible")
	// .attr("transform", "rotate(90," + star1[0] + "," + star1[1] + ")")
	    .attr("points", calculateDecagonPoints(200,200,50))
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
