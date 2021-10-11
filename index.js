// Logic : get data from form, and generate ul li based on data alpha
// Loop : when the loop reaches Z, it comes back to A
export function callRaid () {
	let row = document.getElementById("row").value;
	let col = document.getElementById("col").value;
	//convert data into string array with one sting by index
	const data = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	if (row == 0 || col == 0)
		document.write("Error, please use valid values");
	else
		raid(row, col, data);
}

// Loop to have one element by box, for columns-1, and one box that concat all the others box from his rows
function raid (row, col, data) {
	let cptAlphabet = 0;
	let parity = col-1;
	var tmpArray = [];
	displayHeader(col);
	let tmpVar ="";
	// First loop, to start a new row
	for (let i = 0; i < row; i++)
	{
		tmpArray = [];
		tmpVar = "";
		// Second loop to add a new content in a box
		for (let j = 0; j < col; j++)
		{
			if (j != parity)
			{
				tmpArray[j] = data[cptAlphabet];
				tmpVar += data[cptAlphabet];
				cptAlphabet = updateCpt(cptAlphabet,data.length);
			}
		}
		// Had to use a tmpVar because of undefined at index 0 for +=
		tmpArray[parity] = tmpVar;
		parity = updateParity(parity, col);
		displayResult(tmpArray);
	}
}

function updateCpt(cpt, dataSize) {
	if (cpt == dataSize-1)
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
