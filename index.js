//logic : get data from form, convert to array with one string by index, 4 block and 1 parity block who is the concat of the 4 others
// for now, parity always on the index 4, the relative value for parity in comment in parser, fonction in coming
// example : array[2]['a', 'b', 'c', 'd', 'abcd']
export function callRaid () {
	let row = document.getElementById("row").value;
	let col = document.getElementById("col").value;
	//convert data into string array with one sting by index
	const data = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	let raidedData = [];
	if (row == 0 || col == 0)
		document.write("Erreur de saisie, aucune valeure ne doit être nulle");
	else
		raidedData = raid(row, col, data);
	console.log(raidedData);
}

//split the array data in two part and return an array of 2 array, first half and second half
function raid (row, col, data) {
	let cptAlphabet = 0;
	let parity = col-1;
	var raidedData = [];
	var tmpArray = [];
	for (let i = 0; i < row; i++)
	{
		const ul = document.createElement("ul");

		tmpArray = [];
		for (let j = 0; j < col; j++)
		{
			if (j != parity)
			{

				tmpArray[j] = data[cptAlphabet];
				tmpArray[parity] += data[cptAlphabet];
				cptAlphabet = updateCpt(cptAlphabet);
			}
		}
		parity = updateParity(parity, col);
		raidedData[i] = tmpArray;
	}
	return raidedData;
}

function updateCpt(cpt) {

	if (cpt == 26)
		return 0;
	else{
		cpt++;
		return cpt;
	}

}

function updateParity(parity, col)
{
	if (parity == 0)
		return col-1;
	else
	{
		parity--;
		return parity;
	}
}
