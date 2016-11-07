// Модуль слайдера
const slider = ( function () {
	const currentPos = 366; // позиция по умолчанию
	const rele = document.getElementsByClassName('js-section-slider__psedo')[0];
	const line = document.getElementsByClassName('js-section-slider__box')[0];
	const block = document.getElementById('range-slider');

	rele.style.left = currentPos + 'px';

	const animation = function ( options ) {
		const start = performance.now();
		requestAnimationFrame( function animate ( time ) {
			// timeFraction от 0 до 1
			let timeFraction = ( time - start ) / options.duration;
			if ( timeFraction > 1 ) {
				timeFraction = 1;
			}

			const progress = options.timing( timeFraction );
			options.draw( progress );
			if ( timeFraction < 1 ) {
				requestAnimationFrame( animate );
			}
		} );
	};
	const setUpListners = function () {
		block.onclick = function ( event ) {
			event.preventDefault();
			event = event || window.event;
			const target = event.target || event.srcElement;
			if ( target.classList.contains( 'section-slider__link' ) ) {
				const pos = rele.offsetLeft; // текущая позиция
				const from = target.parentNode.offsetLeft - 1;
				let to = from - rele.offsetLeft;
				if ( target.classList.contains( 'js-section-slider__link' ) ) {
					to = line.offsetWidth - rele.offsetWidth - rele.offsetLeft;
				}
				animation( {
					duration: 500,
					timing: function ( timeFraction ) {
						return timeFraction;
					},
					draw: function ( progress ) {
						rele.style.left = pos + to * progress + 'px';
					}
				}	);
			}
		};
	};

	const init = function () {
		setUpListners();
	};

	return {
		init: init
	};

} )();

module.exports = slider;
