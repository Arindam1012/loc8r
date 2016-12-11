/* GET 'about' page */
module.exports.about = function(req, res){
	res.render('generic-text', {
		title: 'About Loc8r',
		context: 'Loc8r was created to help people find restaurants nearby along with all necessary details.\n\n We show the updated data about any restaurant listed in this site and we ensure that the information is accurate and complete.\n\n\n\n'
	});
};