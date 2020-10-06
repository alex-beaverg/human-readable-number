module.exports = function toReadable (number) {
    let result = '';
    let num;
    const sw = function(number) {
      switch (number) {
          case 0:
              num = 'zero';
              break;
          case 1:
              num = 'one';
              break;
          case 2:
              num = 'two';
              break;
          case 3:
              num = 'three';
              break;
          case 4:
              num = 'four';
              break;
          case 5:
              num = 'five';
              break;
          case 6:
              num = 'six';
              break;
          case 7:
              num = 'seven';
              break;
          case 8:
              num = 'eight';
              break;
          case 9:
              num = 'nine';
              break;
          case 10:
              num = 'ten';
              break;
          case 11:
              num = 'eleven';
              break;
          case 12:
              num = 'twelve';
              break;
          case 13:
              num = 'thirteen';
              break;
          case 14:
              num = 'fourteen';
              break;
          case 15:
              num = 'fifteen';
              break;
          case 16:
              num = 'sixteen';
              break;
          case 17:
              num = 'seventeen';
              break;
          case 18:
              num = 'eighteen';
              break;
          case 19:
              num = 'nineteen';
              break;
          case 20:
              num = 'twenty'; 
              break;
          case 30:
              num = 'thirty';
              break;
          case 40:
              num = 'forty';
              break;
          case 50:
              num = 'fifty';
              break;
          case 60:
              num = 'sixty';
              break;
          case 70:
              num = 'seventy';
              break;
          case 80:
              num = 'eighty';
              break;
          case 90:
              num = 'ninety';
              break;      
      }
    return num;
    }
    const sw2 = function (number) {
      if (number >= 0 && number <= 20) result = sw(number);
      if (number > 20 && number < 100) {
          if (number % 10 === 0) result = sw(number);
          else result = sw(Number(String(number).charAt(0)) * 10) + ' ' + sw(Number(String(number).charAt(1)));          
      }
      return result;
    }
      if (number >= 0 && number <= 20) result = sw(number);
      if (number > 20 && number < 100) {
          if (number % 10 === 0) result = sw(number);
          else result = sw(Number(String(number).charAt(0)) * 10) + ' ' + sw(Number(String(number).charAt(1)));          
      }
      if (number >= 100 && number < 1000) {
          if (number % 100 === 0) result = sw(Number(String(number).charAt(0))) + ' hundred';
          else {
            let nums1 = sw(Number(String(number).charAt(0))) + ' hundred';
            let nums2 = sw2(Number(String(number).charAt(1) + String(number).charAt(2)));            
            result = nums1 + ' ' + nums2
          }
      }
      return result;
}