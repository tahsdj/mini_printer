(function(){
	let x = 5
	let abs_x = 5
	let y = 57
	let dx = 13
	let abs_dx = 13
	const dy = 35
	const cols = 35
	let rows = 0
	let tmp_row = 0
	let order = 0
	let content_array = []
	$('#print').click(()=>{
		const content = $('#content').val()
		content_array = content.split('')
		rows = Math.floor(content_array.length/cols) + 1
		for(let i = content_array.length+1 ; i < cols*rows ; i++ ){
			console.log(content_array.length+'  / ' +(cols*rows))
			content_array.push('&nbsp;&nbsp;')
		}
		const t = setInterval(move,100)
	})
	function move(){
		if( order < content_array.length ){
			abs_x += abs_dx
			x += dx
			current_row = Math.floor(order/cols)
			let gap = current_row - tmp_row
			y += gap*dy
			$('#robot').css({
				'left': x,
				'top': y
			})
			if( (current_row + 1)%2 == 0 ){
				dx = -13
				let tmp_order = cols*(current_row+1) - (order%cols) -1
				if( order%cols == 0 && order != 0 ){
					$('#output').append('<br>&#x202e;')
				}
				$('#robot').css({
					'border-radius': '30px 0px 0px 30px',
				})
					$('#output').css({
						'text-align-last': 'right'
					})
				$('#output').append(content_array[tmp_order])
				console.log(content_array[tmp_order])

			}else{
				dx = 13
				if( order%cols == 0 && order != 0 )
					$('#output').append('&#x202d;')
				$('#robot').css({
					'border-radius': '0px 30px 30px 0px',
				})
				$('#output').css({
					'text-align-last': 'left'
				})
				$('#output').append(content_array[order])
			} 
			tmp_row = current_row
			order++
		}else{
			if( order < (rows*cols+30)){
				y += 5
				$('#robot').css({
					'top': y,
					'border-radius': '0px 0px 30px 30px',
				})
				order++
			}else{
				clearInterval(move)
			}
		}
		
	}
})()