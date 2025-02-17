const viewRecords98 = [
    {
        id: 1,
        name: "山田",
        age: 23,
        Postcode: "0620055",
        Address: "北海道札幌市",
        AverageScore: 81.5,
    },
    {
        id: 2,
        name: "田中",
        age: 18,
        Postcode: "0590465",
        Address: "北海道登別市",
        AverageScore: 71.,
    },
    ]
    /**
    * ウィンドウ読み込み時の処理
    */
    window.onload = () => {
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