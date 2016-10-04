$( function () {
	$('#second-task').click(function (e) {
		$( ".wrapper" ).remove();
		showSecondTask();
	});


});
var showSecondTask = function () {
	var html = $('#tmpl-script').html();
	console.log(html);
	var user = 	{
		name: 'Зазимко Александр Александрович',
		img: 'https://cdn2-5.cdn.schoology.com/system/files/imagecache/profile_reg/pictures/picture-9414953e9959cb4db12e0729d9182d54_57616e26e3553.jpg?1466003050',
		description: 'Учасник курса GoFrontend',
		answers: ['Фронтенд это интересно', 'Дополнительный заработок не помешает', 'и еще что-то'],
		phone: '+380679116737',
		facebook: 'https://www.facebook.com/oleksandr.zazymko',
		feedback: 'Спасибо Япония!'
	};

	var content = tmpl(html, {data: user});

	$('body').append(content);
}