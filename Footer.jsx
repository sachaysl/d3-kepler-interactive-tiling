Footer = React.createClass({
    headStyle: {
	color: 'white',
	fontSize: '24px',
	fontFamily: 'Helvetica',
	fontWeight: '100',
	textAlign: 'center',
	marginLeft: '450'
    },
    svgStyle: {
	margin: 'auto',
	display: 'block',
	float: 'right',
	marginTop: '7',
	marginBottom: '35'
	
    },


    render: function() {

	return(
	    <h1 style = {this.headStyle} id = "header">
	      Drag and drop colours into shapes on the left
	    </h1>
	);

    }
});
