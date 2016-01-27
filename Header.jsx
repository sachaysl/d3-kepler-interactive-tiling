Header = React.createClass({
    headStyle: {
	color: 'white',
	fontSize: '36px',
	fontFamily: 'Palatino',
	fontWeight: '100',
	textAlign: 'center',
	marginBottom: '50'
    },

    render: function() {

	return(
	    <h1 style = {this.headStyle} id = "header">
	      Kepler Aa
	    </h1>
	);

    }
});
