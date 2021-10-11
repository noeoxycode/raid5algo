// Logic : get data from form, convert to array with one string by index, 4 block and 1 parity block who is the concat of the 4 others
// For now, parity always on the index 4, the relative value for parity in comment in parser, fonction in coming
// Example : array[2]['a', 'b', 'c', 'd', 'abcd']
export function callRaid () {
	let row = document.getElementById("row").value;
	let col = document.getElementById("col").value;
	//convert data into string array with one sting by index
	const data = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	let raidedData = [];
	if (row == 0 || col == 0)
		document.write("Erreur de saisie, aucune valeure ne doit être nulle");
	else
		raid(row, col, data);
}

//split the array data in two part and return an array of 2 array, first half and second half
function raid (row, col, data) {
	let cptAlphabet = 0;
	let parity = col-1;
	var tmpArray = [];
	displayHeader(col);
	let tmpVar ="";
	for (let i = 0; i < row; i++)
	{
		tmpArray = [];
		tmpVar = "";

		for (let j = 0; j < col; j++)
		{
			if (j != parity)
			{
				tmpArray[j] = data[cptAlphabet];
				tmpVar += data[cptAlphabet];
				cptAlphabet = updateCpt(cptAlphabet);
			}
		}
		// Had to use a tmpVar because of undefined at index 0 for +=
		tmpArray[parity] = tmpVar;
		parity = updateParity(parity, col);
		displayResult(tmpArray);
	}
}

function updateCpt(cpt) {
	if (cpt == 25)
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
// Display header for each column
function displayHeader(col)
{
	const container = document.createElement('div');
	const list = document.createElement('ul');
	const size = col;
	document.getElementsByTagName('body')[0].appendChild(container);
	container.appendChild(list);
	for (let i = 0; i < col; ++i) {
		let listItem = document.createElement('li');
		listItem.innerHTML = "Disk " + i;
		list.appendChild(listItem);
	}
}

function displayResult(raidedData) {
	// Establish the array which acts as a data source for the list
	// Make a container element for the list
	const container = document.createElement('div');
		// Make the list
		const list = document.createElement('ul');
		// Set up a loop that goes through the items in list one at a time
		const size = raidedData.length;
	// Add it to the page
	document.getElementsByTagName('body')[0].appendChild(container);
	container.appendChild(list);
	for (let i = 0; i < size; ++i) {
		let listItem = document.createElement('li');
		listItem.innerHTML = raidedData[i];
		list.appendChild(listItem);
	}
}
