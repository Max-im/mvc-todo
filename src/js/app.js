requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery'
		
	},
	shim: {
		'jquery':{
			exports: "jQuery"
		}

	}
});

require(
	[
	"jquery",
	"tmpl",
	"Model",
	"View",
	"Controller"
	],
	function($, tmpl, Model, View, Controller){
		

		// ajax
			var jsonElem = $.ajax({
				url: "../json/db.json",
				async: false
			});
			var myObj = $.parseJSON(jsonElem.responseText);



			// init
			var firstData = myObj.start;
			var model = new Model(firstData);
			var view = new View(model);
			var controller = new Controller(model, view);
	}
)



