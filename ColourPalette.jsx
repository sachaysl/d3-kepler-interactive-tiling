ColourPalette = React.createClass({

    updateDesign: function(props) {
	    var colorbrewer = {
    //BLUES
    Periwinkle: "rgb(204,204,255)",
    PowderBlue: "rgb(176,224,230)",
    BabyBlue: "rgb(137,207,240)",
        CeruleanCrayola: "rgb(29,172,214)",
        MunsellBlue: "rgb(0,147,175)",
    CrayolaBlue: "rgb(31,117,254)",
//    NCSBlue: "rgb(0,135,189)",
		   SpanishBlue: "rgb(0,112,184)",
	//Liberty: "rgb(84,90,167)",
    CeruleanBlue: "rgb(42,82,190)",
                   CeruleanRGB: "rgb(0,63,255)",
                   Ultramarine: "rgb(63,0,255)",
		   EgyptianBlue: "rgb(16,52,166)",
		   NavyBlue: "rgb(0,0,128)",
  //                 MidnightBlue: "rgb(25,25,112)",
    //CYANS
    //LightCyan: "rgb(224,255,255)",
    Celeste: "rgb(178,255,255)",
    Aquamarine: "rgb(127,255,212)",
    Cyan: "rgb(0,255,255)",
    ElectricBlue: "rgb(125,249,255)",
   // CrayolaSkyBlue: "rgb(128,218,235)",
    Turquoise: "rgb(64,224,208)",
		    //BlueGreen: "rgb(13,152,186)",
		    // Keppel: "rgb(58,176,158)",
    //		    LightSeaGreen: "rgb(32,178,170)",
    RobinEggBlue: "rgb(0,204,204)",
    ProcessCyan: "rgb(0,183,235)",
    TiffanyBlue: "rgb(10,186,181)",

		    
                    PaoloVeroneseGreen: "rgb(0,155,125)",
    		    Cerulean: "rgb(0,123,167)",		    
    GreenBlue: "rgb(17,100,180)",
    		    Teal: "rgb(0,128,128)",
//                    Verdigris: "rgb(26,70,68)",

    //GREENS

                       MintGreen: "rgb(150,250,150)",
                   SpringGreen: "rgb(0,255,127)",
//		   MediumSpringGreen: "rgb(0,250,154)",
	//	   ShamrockGreen: "rgb(0,158,96)",
	//	   BrightestGreen: "rgb(0,255,0)",
	//	   PigmentGreen: "rgb(72,202,113)",
	//	   NCSGreen: "rgb(0,159,107)",
	//	   PantoneGreen: "rgb(0,173,131)",
	//	   CrayolaGreen: "rgb(28,172,120)",
		//   BrightGreen: "rgb(102,255,0)",
		//   BottleGreen: "rgb(0,106,78)",
	//	   Celadon: "rgb(172,225,175)",
      //	   CeladonGreen: "rgb(47,132,124)",
                   Harlequin: "rgb(63,255,0)",
                   Malachite: "rgb(11,218,81)",
    	           CaribbeanGreen: "rgb(0,204,153)",
    DarkPastelGreen: "rgb(3,192,60)",
	//	   Emerald: "rgb(77,93,83)",
		//   GOGreen: "rgb(0,171,102)",
		//   HunterGreen: "rgb(53,94,59)",
		//   IndiaGreen: "rgb(19,136,8)",
		 //  IslamicGreen: "rgb(0,153,0)",
		   Jade: "rgb(76,187,23)",
		 //  NeonGreen: "rgb(39,255,20)",
		 //  ParisGreen: "rgb(80,200,120)",
		  // ScreamingGreen: "rgb(118,255,122)",
	//	   SeaGreen: "rgb(46,139,87)",
	//	   CambridgeBlue: "rgb(163,193,173)",
	//	   MountainMeadow: "rgb(48,186,143)",
	//	   MintLeaf: "rgb(62,180,137)",
//                   MediumSeaGreen: "rgb(60,179,113)",
    		   MunsellGreen: "rgb(0,168,119)",
    // Zomp: "rgb(57,167,173)",
                   PersianGreen: "rgb(0,166,147)",
  //                 PineGreen: "rgb(1,121,111)",
                   Forest: "rgb(34,139,34)",
    //	           SpanishGreen: "rgb(0,145,80)",
                   DarkSpringGreen: "rgb(23,114,69)",
    PineGreen: "rgb(1,121,111)",


    //YELLOWS
//        Cream: "rgb(255,255,204)",
    LemonChiffon: "rgb(255,250,205)",
  //  CrayolaYellow: "rgb(252,232,131)",
    UnmellowYellow: "rgb(255,255,102)",
    Daffadil: "rgb(255,255,49)",
    X11Yellow: "rgb(255,255,0)",
    CanaryYellow: "rgb(255,239,0)",
    LeadTin: "rgb(255,230,74)",
  //  PantoneYellow: "rgb(254,223,0)",
  //  NCSYellow: "rgb(255,211,0)",
    Gold: "rgb(255,215,0)",
    NaplesYellow: "rgb(250,218,94)",
    ArylideYellow: "rgb(233,214,107)",
    Saffron: "rgb(244,196,48)",
    IndianYellow: "rgb(227,168,87)",
    Gamboge: "rgb(228,155,15)",

        //ORANGES
     PapayaWhip: "rgb(255,238,213)",
		    Apricot: "rgb(251,206,177)",
		    Peach: "rgb(255,229,180)",
 		    AtomicTangerine: "rgb(255,153,102)",
//		    PersianOrange: "rgb(217,144,88)",
		    //HSVOrange: "rgb(255,127,0)",
		    //WebOrange: "rgb(255,165,0)",
//		    DarkOrange: "rgb(255,140,0)",
		    // Brown: "rgb(150,75,0)",
//		    CrayolaOrange: "rgb(255,117,56)",
		    PantoneOrange: "rgb(255,88,0)",
		    
		   // OrangePeel: "rgb(255,159,0)",
		   // CarrotOrange: "rgb(237,145,33)",
		   // PrincetonOrange: "rgb(245,128,37)",
//		    SpanishOrange: "rgb(232,97,0)",
//		    Pumpkin: "rgb(255,117,24)",
 //		    GiantsOrange: "rgb(254,90,29)",
		    Persimmon: "rgb(236,88,0)",
		    MediumVermilion: "rgb(217,96,59)",
//		    CadmiumOrange: "rgb(237,135,45)",
		    //AlloyOrange: "rgb(196,98,16)",
		   // Vermilion: "rgb(227,66,52)",
		    //Melon: "rgb(253,188,180)",
		    TeaRose: "rgb(248,131,121)",
		    Bittersweet: "rgb(254,111,94)",
		    Tomato: "rgb(255,99,71)",
		    RedOrange: "rgb(255,83,73)",
		    OrangeRed: "rgb(255,69,0)",


    //REDS
    Salmon: "rgb(250,128,114)",
  //  TerraCotta: "rgb(226,114,91)",
    AmericanRose: "rgb(255,3,62)",
    Scarlet: "rgb(255,36,0)",
    Coquelicot: "rgb(255,56,0)",
    MunsellRed: "rgb(242,0,60)",
    ImperialRed: "rgb(237,41,57)",
 //   SpanishRed: "rgb(230,0,38)",
    Vermilion: "rgb(227,66,52)",
    AlazarinCrimson: "rgb(227,38,54)",
    Ruby: "rgb(224,17,95)",
    RossoCorsa: "rgb(204,0,0)",
    VenetianRed: "rgb(200,8,21)",
    Cardinal: "rgb(196,30,58)",
  //  Maroon: "rgb(128,0,0)",


    //MAGENTAS
    
    Fuchsia: "rgb(255,0,255)",
    UltraPink: "rgb(255,111,255)",
    //  PurplePizzazz: "rgb(254,78,218)",
    //    SkyMagenta: "rgb(207,113,175)",
    CrayolaMagenta: "rgb(246,83,166)",
    HotMagenta: "rgb(255,29,206)",
    ShockingPink: "rgb(252,15,192)",
    ProcessMagenta: "rgb(255,0,144)",
   //  PantoneMagenta: "rgb(208,65,126)",
    //    Orchid: "rgb(218,112,214)",
   // SteelPink: "rgb(204,51,204)",
    FuchsiaRose: "rgb(199,67,117)",
    TeleMagenta: "rgb(207,52,118)",
    MagentaDye: "rgb(202,31,123)",
        RoseRed: "rgb(194,30,86)",
   // 		   MagentaHaze:"rgb(159,69,118)",
    Plum: "rgb(142,69,133)",

		   QuinacridoneMagenta: "rgb(142,59,89)",

//		   DarkMagenta: "rgb(139,0,139)",

    //PURPLES
     //   Thistle: "rgb(216,191,216)",
        Heliotrope: "rgb(223,115,255)",
    Orchid: "rgb(218,112,214)",
     //   LiseranPurple: "rgb(223,111,161)",
    PurplePizzazz: "rgb(254,78,218)",
        Phlox: "rgb(223,0,255)",
        Mulberry: "rgb(197,75,140)",
    RedViolet: "rgb(199,21,133)",
  //  Veronica: "rgb(160,32,240)",
    //PearlyPurple: "rgb(183,104,162)",
        MediumPurple: "rgb(147,112,219)",
   // Purpureus: "rgb(154,78,174)",
 //   MardiGras: "rgb(136,0,137)",
    //   Eminence: "rgb(108,48,130)"
    MunsellPurple: "rgb(159,0,197)",
    RoyalPurple: "rgb(120,81,169)",
    Patriarch: "rgb(128,0,128)",
    Byzantium: "rgb(112,41,99)",
     TyrianPurple: "rgb(102,2,60)",
   // PansyPurple: "rgb(120,24,74)",
//    DarkPurple: "rgb(48,25,52)",


// Violets
        Mauve: "rgb(224,176,255)",

    Lavender: "rgb(181,126,220)",
    AfricanViolet: "rgb(178,132,190)",
        		   WebViolet: "rgb(238,130,238)",
    VividViolet: "rgb(159,0,255)",
		   ElectricViolet: "rgb(143,0,255)",
                   HSVViolet: "rgb(127,0,255)",
		   DarkViolet: "rgb(148,0,211)",
		   FrenchViolet: "rgb(136,6,206)",
    Grape: "rgb(111,45,168)",
    		   SpanishViolet: "rgb(76,40,130)",
//    		   ChineseViolet: "rgb(133,96,136)",
//		   EnglishViolet: "rgb(86,60,92)",
		   JapaneseViolet: "rgb(91,50,86)",
  //  RussianViolet: "rgb(50,23,77)",

    
    Pink: "rgb(255,192,203)",
  //  OrchidPink: "rgb(242,189,205)",
    LavenderPink: "rgb(252,180,213)",
    CherryBlossomPink: "rgb(255,183,197)",
  //  HotPinkLight: "rgb(255,179,222)",
    //    CottonCandy: "rgb(255,166,201)",
    BakerMillerPink: "rgb(255,145,175)",
    //TickleMePink: "rgb(252,137,172)",
    AmaranthPink: "rgb(241,156,187)",
        PersianPink: "rgb(247,127,190)",
//    PiggyPink: "rgb(253,221,230)",
    DeepPinkLight: "rgb(255,92,205)",
   // LightPink: "rgb(255,182,193)",
      HotPink: "rgb(255,105,180)",
    Rosebonbon: "rgb(249,66,158)",
    PersianRose: "rgb(254,40,162)",
    ShockingPink: "rgb(252,15,192)",
    DeepPink: "rgb(255,20,147)",
    BarbiePink: "rgb(224,33,138)",

    
    Ivory: "rgb(255,255,240)",
    Seashell: "rgb(255,245,238)",
  //  Cornsilk: "rgb(255,248,220)",
    Cream: "rgb(255,253,208)",
    Champagne: "rgb(247,231,206)",
    Eggshell: "rgb(240,234,214)",
    DutchWhite: "rgb(239,223,187)",
    
   

   // PinkLace: "rgb(255,221,244)",
    MimiPink: "rgb(255,218,233)",
    QueenPink: "rgb(232,204,215)",
    PinkLavender: "rgb(219,178,209)",
    ChampagnePink: "rgb(241,221,207)",
    NavajoWhite: "rgb(255,222,173)",
    Rosa: "rgb(247,191,150)",
  //  PalePink: "rgb(249,204,202)",
    BabyPink: "rgb(244,194,194)",
    
// TangoPink: "rgb(228,113,122)",
 // FandangoPink: "rgb(222,82,133)",
   // ParadisePink: "rgb(230,62,98)",
   // BrinkPink: "rgb(251,96,127)",
   // FrenchPink: "rgb(253,108,158)",

  
//    Vanilla: "rgb(243,229,171)",
  //  Flax: "rgb(238,220,130)",
    //Ecru: "rgb(194,178,128)",
    White: "rgb(255,255,255)",
      Bone: "rgb(227,218,201)",

    Beige: "rgb(245,245,220)",
    DesertSand: "rgb(237,201,175)",
              Silver: "rgb(192,192,192)",
    Buff: "rgb(240,220,130)",

    SandyBrown: "rgb(244,164,96)",  
//		   Peru: "rgb(205,133,63)",
//		   RosyBrown:"rgb(188,143,143)",

  //  		   Tan: "rgb(210,180,140)",
//		   WoodBrown: "rgb(193,154,107)",

                   
//		   BurntUmber: "rgb(138,51,36)",

    RoseQuartz: "rgb(170,152,169)",
    BlueGray: "rgb(102,153,204)",
    Glaucous: "rgb(96,130,182)",
    SlateGray: "rgb(112,128,144)",
    RedBrown: "rgb(165,42,42)",
    Chestnut: "rgb(149,69,53)",
        Charcoal: "rgb(54,69,79)",
    Black: "rgb(0,0,0)",
    
    
//		   SmokeyTopaz: "rgb(131,42,34)",

    


    //PantonePink: "rgb(215,72,154)",
    //NewYorkPink: "rgb(215,131,128)",
   // CongoPink: "rgb(248,131,121)",

    
    
   
  //  CameoPink: "rgb(239,187,204)",
    

    //AmaranthPink: "rgb(241,156,187)",
    //CharmPink: "rgb(230,143,172)",
    //ChinaPink: "rgb(222,111,161)",
    //PastelPink: "rgb(222,165,164)",
    //SilverPink: "rgb(196,174,173)",
   // MountbattenPink: "rgb(153,122,141)",
		//SolidPink: "rgb(137,56,67)",

	    }

	function drag() {
	    var svg = d3.select("#paletteSvg");
	    var circle = d3.select("#mycircle");
	    var startingx;   
	    var startingy;   
	    var colour;     
	    var id;
	    var rect;

	    return d3.behavior.drag()
	        .on('dragstart', function() {
		    console.log(this.id);
		    id = this.id;
		    rect = d3.select("#" + id);
		    startingx = rect.attr("x");
		    startingy = rect.attr("y");
		    colour = rect.style("fill");

		    d3.selectAll(".safe").attr("opacity", 0.2);
		    rect.attr("opacity", 1);

		    rect.attr('width', width).attr('height', height); })
		.on('drag', function() {  
		    rect.attr('x', d3.event.x)
			.attr('y', d3.event.y); })
		.on('dragend', function() {
		    var currentx = rect.attr("x");
		    var currenty = rect.attr("y");

		   // console.log(currentx);

		    rect.remove();
		    svg.append("rect").attr("x", startingx).attr("y", startingy).attr("width", width).attr("height", height)
			.style("fill", colour).attr("id", id).attr("class", "safe").call(drag());

		    d3.selectAll(".safe").attr("opacity", 1);

		    //if rectangle is within pentagon
		    if (currentx > 112 && currentx < 178 && currenty > 414 && currenty < 474 ) { 
			d3.select("#mypentagon").style("fill", colour);
			d3.selectAll(".pentagon").style("fill", colour);
	
		    }

		    //if rectangle is within decagon
		    if (currentx > 210 && currentx < 270 && currenty > 414 && currenty < 474 ) { 
			d3.select("#mydecagon").style("fill", colour);
			d3.selectAll(".decagon").style("fill", colour);
		    }

		    //if rectangle is within star
		    if (currentx > 15 && currentx < 90 && currenty > 414 && currenty < 474 ) { 
			d3.select("#mypentacle").style("fill", colour);
			d3.selectAll(".pentacle").style("fill", colour);
		    }

		    //if rectangle is within monster
		    if (currentx > 300 && currentx < 375 && currenty > 380 && currenty < 484 ) { 
			d3.select("#mymonster").style("fill", colour);
			d3.selectAll(".monster").style("fill", colour);
		    }

		});
	};

	var svg = d3.select("#paletteSvg").attr("width", 400).attr("height", 500).style("background", "white");
	var marginLeft = 5;
	
	var star = svg.append("svg:polygon")
		.attr("id", "mypentacle")
		.attr("class", "shapes")
	        .attr("visibility", "visible")
	        .attr("points", calculatePentaclePoints(marginLeft + 50,450,5, 30,12))
	        .attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
		.style("fill", "white")
		.on("mouseover", function() { return d3.select("#mycircle").style("opacity", 0.5); })
		.on("mouseout",  function() { return d3.select("#mycircle").style("opacity", 1); });

	var pentagon = 	svg.append("svg:polygon")
		.attr("id", "mypentagon")
		.attr("class", "shapes")
		.attr("visibility", "visible")
    //	    .attr("transform", "rotate(180, 162.5, 200)")
		.attr("points", calculatePolygonPoints(5,marginLeft + 145,450,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
		.style("fill", "white")
		.on("mouseover", function() { return d3.select("#mycircle").style("opacity", 0.5); })
		.on("mouseout",  function() { return d3.select("#mycircle").style("opacity", 1); });

	
	var decagon = svg.append("svg:polygon")
		.attr("id", "mydecagon")
		.attr("class", "shapes")
		.attr("visibility", "visible")
	//	.attr("transform", "rotate(18,479,200)")
		.attr("points", calculatePolygonPoints(10,marginLeft + 240,450,26))
		.attr("fill", "none")
		.attr("stroke","black")
		.attr("stroke-width", "1")
		.style("fill", "white")
		.on("mouseover", function() { return d3.select("#mycircle").style("opacity", 0.5); })
		.on("mouseout",  function() { return d3.select("#mycircle").style("opacity", 1); });

	var monster = svg.append("svg:polygon")
		.attr("id", "mymonster")
		.attr("class", "shapes")
		.attr("visibility", "visible")
		.attr("points", calculateMonsterPoints(marginLeft + 335,410,26))
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("stroke-width", "1")
		.style("fill", "white")
		.on("mouseover", function() { return d3.select("#mycircle").style("opacity", 0.5); })
		.on("mouseout",  function() { return d3.select("#mycircle").style("opacity", 1); });


	var width = 26;
	var xgap = 31;
	var height = 25;
	var ygap = 30;
	var ident = 0;
	var startx = 16;
	var starty = -10;
	var counter1 = 1;
	var counter2 = 1;
	
	svg.selectAll("rect").data(d3.entries(colorbrewer))
	    .enter().append("rect")
	    .attr("class", "safe")
	    .attr("id", function() {console.log(ident); ident = ident + 1; return "myrect" + ident; }) 
	    .attr("x", function() {
		if (counter1%12 == 1) {
		    startx = 16;
		}
		else {
		    startx = startx + xgap;
		}
		counter1 = counter1 + 1;
		return startx; })
	    .attr("y", function() {
		if (counter2%12 == 1) {
		    starty = starty + ygap;
		}
		counter2 = counter2 + 1;
		return starty;})
	    .attr("width", width)
	    .attr("height", height)
	    .style("fill", function(d) {return d.value;})
	    .call(drag());

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

	
    },
    

    componentDidMount: function() {
	//this is invoked once when the component is first rendered
	var el = this.getDOMNode(); //this is the svg we are rendering
	//var svg = d3.select(el)
	//	.append("svg")
	//	.attr("width", this.props.width)
	//	.attr("height", this.props.height);

	this.updateDesign(this.props);
    },

    componentWillUpdate: function(nextProps) {
	//this is invoked every time the props change
//	this.updateChart(nextProps);
    },

    getDefaultProps: function() {
	//this is a protection for the case that not all props are passed
	return {
	    width: 640,
	    height: 480
	}
    },

    svgStyle: {
	margin: 'auto',
	display: 'block',
	float: 'left',
	marginTop: '7'
    },

    render: function() {
	return (
	    <svg id="paletteSvg" style = {this.svgStyle}>
            </svg>

	);
    }
});
