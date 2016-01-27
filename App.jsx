App = React.createClass({


    divStyle: {
	margin: '0 auto',
	maxWidth: '850px',
    },


    render() {

	return(
	    <div style = {this.divStyle}>
	      <ColourPalette />
	      <KeplerMonster />
	    </div>
	);

    }
});
