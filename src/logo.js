
$(document).ready(function(){

	function colores()
	{
		setTimeout(function ()
		{
			$('#logo__R').css('color', 'green')
			$('#logo__G').css('color', 'blue')
			$('#logo__B').css('color', 'red')

			setTimeout(function ()
			{
				$('#logo__R').css('color', 'blue')
				$('#logo__G').css('color', 'red')
				$('#logo__B').css('color', 'green')

				setTimeout(function ()
				{
					$('#logo__R').css('color', 'red')
					$('#logo__G').css('color', 'green')
					$('#logo__B').css('color', 'blue')

					colores()
					
				},500)
			}, 500)
		}, 500)
	} 
	colores()
});