//Write an algorithm which searches through a 2D array, and whenever it 
//finds a zero should set the entire row and column to zero.
//

//O(n^2)

const zeroes = (array) => {
	var row = [];
	var col = [];

	for(var i = 0; i < array.length; i++) {
		for(var j = 0; j < array.length; j++) {
			if (array[i][j] === 0) {
				row.push(i);
				col.push(j);
			}
		}
	}

	for(var i = 0; i < row.length; i++) {
		array[row[i]].fill(0);
	}

	for(var j = 0; j < col.length; j++) {
		array.forEach(row => {
			row[col[j]] = 0;
		})
	}

	return array;
}

console.log(zeroes([[0,1,2],[1,2,4],[1,3,0]]));

//You are given an array containing positive and negative integers. 
//Write an algorithm which will find the largest sum in a continuous sequence.
//
//Write an algorithm which will sum two numbers stored in linked lists, where 
//each node contains a single digit of the number.