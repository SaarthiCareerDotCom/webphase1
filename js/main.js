$(document).ready(function () {

	$(document).foundation();

	// $('.first-carousel').slick({
	// 	autoplay: true,
	// 	autoplaySpeed: 2000
	// });

	$('.sliders').slick({
		autoplay: false,
		arrows: true,
		dots: true,
		autoplaySpeed: 8000
	});

	$('.revs').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 8000
	});

	$('.batch').on('click', function() {
		var name = $(this).attr('id');
		if( dataVar[ name + '_active']) {
			if( dataVar[ name + '_paymentURL' ] ) {
				window.location = dataVar[ name + '_paymentURL' ];
			}	else {
				registerUserModal({
					batchName : name,
					courseName : $('#courseName').text()
				});
			}
		}	else	{
			registerUserModal({
				batchName : name,
				courseName : $('#courseName').text()
			});
		}
	});
	
	$('.course-know a').on('click', function (e) {
		if($(this).attr('href') == '#') {
			e.preventDefault();
			registerUserModal({
				batchName : 'def',
				courseName : $(this).parents('.course-info').find('.course-title').text().trim()
			});
		}
	})

	function matchHeights(elements){
		if(Array.isArray(elements) && elements.length === 0) {
			return;
		}
		var max = 0;
		for(var i=0,j=elements.length,height=0; i<j; i++) {
			height = parseFloat(elements.eq(i).css('height'));
			if(height > max) {
				max = height;
			}
		}
		elements.css('height',max+'px');
	}

	matchHeights($('.trainer'));
	matchHeights($('.course-info .course-description'));
	matchHeights($('.icons .column-block > .row'));
});

var registerUserModal = (function(){

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCzZadP-90PJzNIfjUfesek8V-Q1OBucPs",
		authDomain: "saarthi-career.firebaseapp.com",
		databaseURL: "https://saarthi-career.firebaseio.com",
		projectId: "saarthi-career",
		storageBucket: "saarthi-career.appspot.com",
		messagingSenderId: "525172349655"
	};
	firebase.initializeApp(config);
	var database = firebase.database();
	var newPostRef = firebase.database().ref('interestedPeople').push();


	var popup = new Foundation.Reveal($('#signUpModal'));
	var batchSelected = '';
	var data = {};

	$('#signUpModal .submit').on('click', function () {
		data = {
			"name" : $('#signUpModal #name').val(),
			"email" : $('#signUpModal #email').val(),
			"phone" : $('#signUpModal #phone').val(),
			"college" : $('#signUpModal #college').val(),
			"stream" : $('#signUpModal #stream').val(),
			"batch" : batchSelected
		};
		newPostRef.set(data);
		$('.form-show').css('visibility','hidden');
		$('.form-success').show();
	});
	
	var init = function (names) {
		popup.open();
		batchSelected = names.batchName;
		$('#signUpModal input').val('');
		$('#signUpModal .message>span').text(names.courseName);
		$('#signUpModal').removeClass('submitted');
	}

	return init;
})();