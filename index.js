
export function callRaid () {
	let data = document.getElementById("data").value;
	console.log(data);
	let parsedData = parser(data);
	console.log(parsedData);
}


function parser (data) {
	var dataSplited = toString(data).split("");
	console.log(data);
	let parity = 4;
	var raidedData = [1][1];
	for (let cpt = 0; cpt < dataSplited.length; cpt++)
	{
		for (let cptBis = 0; cptBis<4; cptBis++)
		{
			/*if (cptBis == parity)
			{

				if (parity == 0)
					parity = 4;
				else
					parity++;
				cptBis++;
			}*/
			raidedData[cpt][cptBis] = dataSplited[cpt];
			raidedData[cpt][parity] += dataSplited[cpt]
			cpt++;
			if (cpt >= dataSplited.length)
				break;
		}
		cpt++;

	}
	return raidedData;
}