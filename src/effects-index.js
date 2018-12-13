
$(document).ready(function(){

	$('#slogan').hide()
	$('#presentacion').hide()
	$('#tresFotos').hide()
	$('#enlaces').hide()
	$('#footer').hide()

	setTimeout(function()
	{
		$('#slogan').fadeIn(1000)

		setTimeout(function()
		{
			$('#fotoTren').css('opacity', '1')

			setTimeout(function()
			{
				$('#presentacion').fadeIn(1000)

				setTimeout(function()
				{
					$('#tresFotos').fadeIn(1000)
					$('#tresFotos').css({transform: 'translate(0,0)'})

					setTimeout(function()
					{
						$('#enlaces').fadeIn(1000)
						$('#footer').fadeIn(1000)
					}, 500)
				}, 500)
			}, 1000)
		}, 1500)
	}, 1000)
});