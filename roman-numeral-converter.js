var romanArr = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
  if(num === 0){
    return ''
  }
  for(let i = 0; i < romanArr.length; i++){
    var numVal = romanArr[i][0];
    var romanNum = romanArr[i][1]
    if(num >= numVal){
      return romanNum + convertToRoman(num - numVal)
    }
  }
}
