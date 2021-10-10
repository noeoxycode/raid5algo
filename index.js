//logic : get data from form, convert to array with one string by index, 4 block and 1 parity block who is the concat of the 4 others
// for now, parity always on the index 4, the relative value for parity in comment in parser, fonction in coming
// example : array[2]['a', 'b', 'c', 'd', 'abcd']
export function callRaid () {
	let data = document.getElementById("data").value;
	//convert data into string array with one sting by index
	var dataSplitted = data.split("");
	parser(dataSplitted);
}

//split the array data in two part and return an array of 2 array, first half and second half
function parser (data) {
	let parity = 4;
	console.log(data);
	//insitialisation of final array, not rly sure about this
	var raidedData = [];
	var tmpArray = [];
	let cpt = 0;
		for (let cptBis = 0; cptBis<4; cptBis++)
		{
			if (cptBis == parity)
			{
				if (parity == 0)
					parity = 4;
				else
					parity++;
				cptBis++;
			}
			else
			{
				tmpArray.push([data[cpt]]);
				tmpArray[parity] += data[cpt]
			}
			if (cpt%4 == 0)
			{
				raidedData.push(tmpArray);
				console.log(tmpArray);
				tmpArray = [];
			}
			cpt++;
			if (cpt >= data.length)
				break;
		}
	return raidedData;
}