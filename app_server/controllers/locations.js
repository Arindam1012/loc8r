/* GET 'home' page */
module.exports.homelist = function(req, res){
	res.render('locations-list', {
		title: 'Loc8r - find a restaurant nearby',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find restaurants near you!'
		},
		sidebar: "Looking for restaurants nearby? Loc8r helps you to find restaurants nearby with details of it's opening hours, cuisines, contact info, average cost etc.",
		locations: [{
			name: 'KFC',
			address: 'Spot 18 Mall, Shivar Chowk, Rahatani, Pimple Saudagar, Pune',
			rating: 3,
			cuisines: ['American', 'Fast Food'],
			distance: '4.2km'
		},{
			name: 'Kanaka Durga',
			address: 'Sr No. 167/9/10/12, Shop 12, Edenn Shopping Complex, Near Wakad Flyover, Wakad, Pune',
			rating: 4,
			cuisines: ['Bengali', 'Biryani', 'Multi-cuisine', 'Seafood'],
			distance: '2km'
		},{
			name: 'Preets Punjabi Swad (Wakad)',
			address: '188/5, Near Datta Mandir Road, Wakad, Pune',
			rating: 4,
			cuisines: ['Biryani', 'Chinese', 'North-Indian', 'Punjabi'],
			distance: '1.1km'
		}
		]
	});
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res){
	res.render('location-info', {title: 'Location info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
	res.render('location-review-form', {title: 'Add review' })
};