Header = React.createClass({
    headStyle: {
	color: 'white',
	fontSize: '36px',
	fontFamily: 'Helvetica',
	fontWeight: '100',
	textAlign: 'center',
	marginBottom: '50'
    },

    render: function() {

	return(
	    <h1 style = {this.headStyle} id = "header">
	      Kepler's Aa
	    </h1>
	);

    }
});
