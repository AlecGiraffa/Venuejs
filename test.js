/* convert = function(s, numRows) {
    if (s === '' || numRows === null) {
        return s;
    }
    if (s.length === 1) {
        return s;
    }
    if(numRows === 1) {
        return s;
    }
    var zig = []; //store the answer
    var zigArr = []; // store the answer of each row
    var left = (numRows - 1) * 2;
    var right = 0;
    var t = 0;
    while(t < numRows) {
        var index = t;
        while (s.charAt(index) !== '') {
            console.log("left : " + left);
            console.log("right : " + right);

            if (left !== 0) {
                if(s.charAt(index) !== '') {
                    zigArr.push(s.charAt(index));
                    console.log(index);
                    console.log(zigArr);
                    index = index + left;
                }

            }

            if (right !== 0) {
                if (s.charAt(index) !== '') {
                    zigArr.push(s.charAt(index));
                    console.log(index);
                    console.log(zigArr);
                    index = index + right;

                }
            }
        }
        console.log("zigArr : "+ zigArr);
        zig.push(zigArr.join(''));


        t++;
        left = left - 2;

        right = right + 2;
        zigArr = [];
    }
    return zig.join('');

};


console.log(convert('PAYPALISHIRING', 4));
*/

console.log(4 ^ 4 ^ 6 ^ 5 ^ 6 );
