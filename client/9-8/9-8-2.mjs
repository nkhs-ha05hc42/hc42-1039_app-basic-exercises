let viewRecords98 = []
const loadRecords = async () => {
const fetchResult = await fetch("http://localhost:3000/api/sample2", {
method: "GET",
headers: {
"Content-Type": "application/json",
},
})
const responsce = await fetchResult.json()
if (responsce.status !== "success") {
alert("Error!")
return
}
viewRecords98 = responsce.list
}
const viewTable = () => {
const q9_8Body = document.getElementById("q9_8-body")
q9_8Body.innerHTML = ""
for (const record of viewRecords98) {
const tr = document.createElement("tr")
q9_8Body.appendChild(tr)
const idTd = document.createElement("td")
idTd.appendChild(document.createTextNode(record.id))
tr.appendChild(idTd)
const nameTd = document.createElement("td")
nameTd.appendChild(document.createTextNode(record.name))
tr.appendChild(nameTd)
const ageTd = document.createElement("td")
ageTd.appendChild(document.createTextNode(record.age))
tr.appendChild(ageTd)
const PostcodeTd = document.createElement("td")
PostcodeTd.appendChild(document.createTextNode(record.Postcode))
tr.appendChild(PostcodeTd)
const AddressTd = document.createElement("td")
AddressTd.appendChild(document.createTextNode(record.Address))
tr.appendChild(AddressTd)
const AverageScoreTd = document.createElement("td")
AverageScoreTd.appendChild(document.createTextNode(record.AverageScore))
tr.appendChild(AverageScoreTd)
}
}
/**
* ウィンドウ読み込み時の処理
*/
window.onload = () => {
    const loadButtonElement = document.getElementById("load-button")
    loadButtonElement.addEventListener(
    "click",
    async () => {
    await loadRecords()
    viewTable()
    },
    false,
    )
    viewTable()
}