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
	res.render('location-info', {
		title: 'KFC',
		pageHeader: {title: 'KFC'},
		sidebar: {
			context: 'is on Loc8r because it\'s famous for its Chicken Wings, Bucket and other finger licking crisp and smoked chicken items.',
			callToAction: 'If you\'ve been here and you like it - or if you don\'t - please leave a review comment to help people just like you.'
		},
		location: {
			name: 'KFC',
			address: 'Spot 18 Mall, Shivar Chowk, Rahatani, Pimple Saudagar, Pune',
			rating: 3,
			coords: {lat: 18.593465, lng: 73.786001},
			openingTimes: {
				days: 'Monday - Sunday',
				opening: '11:00am',
				closing: '11:00pm',
				closed: false
			},
			contactInfo: '020 30162053',
			averageCost: 'Rs550 for two (approx.)',
			reviews: [{
				author: 'Arindam Majumder',
				rating: 4,
				timestamp: '11 Dec 2016',
				reviewText: 'Ambience is good as it\'s in Spot 18 Mall. We were here at around 7:30 pm and had KFC Chicken Wings and Smokey Chicken which was awesome in taste.'
			},{
				author: 'Yogesh Tandale',
				rating: 3,
				timestamp: '20 Nov 2016',
				reviewText: 'Had takeaway for Hot & Crispy chicken. Overall taste was just OK. It wasn\'t that warm/hot (consider my travel time to be 5-10 min). It wasn\'t even spicy a little bit, so after crisp cover what remains is only boiled chicken.'
			}
			]
		}
	});
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
	res.render('location-review-form', {
		title: 'Review KFC on Loc8r',
		pageHeader: {title: 'Review KFC'}
	})
};