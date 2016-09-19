export const light = (color) => {

	let rgbColor = hexToRGB(color);
	let luma = 0.2126 * rgbColor[0] + 0.7152 * rgbColor[1] + 0.0722 * rgbColor[2]; // per ITU-R BT.709

	return luma > 40;
}

export const hexToRGB = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

export const RGBToHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).length === 1 ? '0' + x.toString(16) : x.toString(16)).join('')

export const mixColors = (color1 = '#000000',color2='#ffffff', percentage=0.5) => {
    // check input
    color1 = color1;
    color2 = color2;
    percentage = percentage;

    // 1: validate input, make sure we have provided a valid hex
    if (color1.length != 4 && color1.length != 7)
        throw new error('colors must be provided as hexes');

    if (color2.length != 4 && color2.length != 7)
        throw new error('colors must be provided as hexes');    

    if (percentage > 1 || percentage < 0)
        throw new error('percentage must be between 0 and 1');


    // 2: check to see if we need to convert 3 char hex to 6 char hex, else slice off hash
    //      the three character hex is just a representation of the 6 hex where each character is repeated
    //      ie: #060 => #006600 (green)
    if (color1.length == 4)
        color1 = color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
    else
        color1 = color1.substring(1);
    if (color2.length == 4)
        color2 = color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
    else
        color2 = color2.substring(1);   

    console.log('valid: c1 => ' + color1 + ', c2 => ' + color2);

    // 3: we have valid input, convert colors to rgb
    color1 = [parseInt(color1[0] + color1[1], 16), parseInt(color1[2] + color1[3], 16), parseInt(color1[4] + color1[5], 16)];
    color2 = [parseInt(color2[0] + color2[1], 16), parseInt(color2[2] + color2[3], 16), parseInt(color2[4] + color2[5], 16)];

    console.log('hex -> rgba: c1 => [' + color1.join(', ') + '], c2 => [' + color2.join(', ') + ']');

    // 4: blend
    var color3 = [ 
        parseInt((1 - percentage) * color1[0] + percentage * color2[0]), 
        parseInt((1 - percentage) * color1[1] + percentage * color2[1]), 
        parseInt((1 - percentage) * color1[2] + percentage * color2[2])
    ];

    console.log('c3 => [' + color3.join(', ') + ']');

    // 5: convert to hex
    color3 = RGBToHex(color3[0],color3[1],color3[2]);

    console.log(color3);

    // return hex
    return color3;
}


export const findOne = (haystack, arr) => {
	return arr.some(function (v) {
        return haystack.indexOf(v) !== -1;
    })
}
 

export const compareArrays = (array1,array2) =>{
	return (array1.length == array2.length) && array1.every(function(element, index) {
    	return element === array2[index]; 
	});
}