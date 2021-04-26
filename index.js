
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
numToRoman = (num) => {
    if (num <= 0) {
        return 'The Romans had no representation for 0 and below';
    }
    if (num>3999) {
        return 'The Roman representation of numbers above 3999 was imperfect';
    }
    let result = '';
    arabic.forEach((value, index) => {
        while (num >= value) {
            result += roman[index];
            num -= value;
        }
    });
    return result;


}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
module.exports = { numToRoman };
}
else{
window.numToRoman = numToRoman;
}