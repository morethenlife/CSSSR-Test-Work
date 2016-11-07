import svg4everybody from 'svg4everybody';
import $ from 'jquery';

const slider = require('../blocks/section-slider/section-slider.js');

$(() => {

	svg4everybody();
	slider.init();

});
