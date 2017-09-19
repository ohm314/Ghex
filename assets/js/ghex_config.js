

var ThemeOptions =
{
	show_blog_title : true, // true or false - default : false
	show_blog_description : true, // true or false - default : true

	background_type : 'cover', // cover or repeat - default : cover and Blog Cover file (extra/alaska_cover.jpg)
	background_color : '#f0f0f0', // background color if there is no image at blog's cover - default: #f0f0f0

	hex_background : '#fff', // default background color for non featured hexagons - default : #fff

	disqus: { // Disqus Settings
		enabled : true, // true or false
		shortname : 'ghextheme' //Your Disqus shortname
	},

	staticPages: { // Static Pages Menu
			enabled : false, // true or false - show static pages
			pages :[
	 		   { title: "Static",  url: 'http://www.marblehouse.es' },
	 		   { title: "Pages",  url: 'http://www.marblehouse.es' },
	 		   { title: "Example",  url: 'http://www.marblehouse.es' }

			]
	},

	socialAccounts: { //Social Icons - SEARCH for icon letter at: http://energee.github.io/social_font_face/
		enabled : true, // true or false - show social buttons
		position : 'top', // top or bottom - social buttons position
		accounts :[
 		   { name: "twitter", icon: 'T', url: 'https://twitter.com/yourname' },
 		   { name: "facebook", icon: 'F', url: 'https://www.facebook.com/yourname' }
		]

	}
}
