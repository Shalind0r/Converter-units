import converter from './parametr.json' assert { type: 'json' };
const obj = { distance: { unit: 'mm', value: '' }, convert_to: 'mm' };
// m - meters
// cm - centimeters
// in inches
// ft - foot

const inputIn = document.querySelector('.converter__input-in');
const inputOut = document.querySelector('.converter__input-out');
const convertTo = (obj) => {
	const inUnit = obj.distance.unit;
	const unit = obj.convert_to;
	const inValue = obj.distance.value;

	const sum =
		converter[unit] && converter[unit][inUnit] && converter[unit][inUnit].k
			? +inValue * converter[unit][inUnit].k
			: 0;
	const value = +sum;
	const result = { unit, value };
	inputOut.value = value;
	return result;
};
console.log(convertTo(obj));

inputIn.addEventListener('keyup', (e) => {
	e.preventDefault();
	obj.distance.value = +inputIn.value;
	convertTo(obj);
});
const unitsIn = document.querySelector('.converter__units-in');
const unitsOut = document.querySelector('.converter__units-out');
const unitsItemInput = document.querySelectorAll(
	'.converter__units-item--input',
);
const unitsItemOutput = document.querySelectorAll(
	'.converter__units-item--output',
);
unitsIn.addEventListener('click', (e) => {
	const target = e.target;

	if (target.classList.contains('converter__units-item')) {
		for (let i = 0; i < unitsItemInput.length; i++) {
			unitsItemInput[i].classList.remove('--active');
		}
		target.classList.add('--active');
	}
	if (e.target.classList.contains('--active')) {
		obj.distance.unit = e.target.dataset.unit;
		convertTo(obj);
	}
});
unitsOut.addEventListener('click', (e) => {
	const target = e.target;

	if (target.classList.contains('converter__units-item')) {
		for (let i = 0; i < unitsItemOutput.length; i++) {
			unitsItemOutput[i].classList.remove('--active');
		}
		target.classList.add('--active');
	}
	if (e.target.classList.contains('--active')) {
		obj.convert_to = e.target.dataset.unit;
		convertTo(obj);
	}
});
