async function runQuery() {
    document.querySelector("button").classList.add("hidden")
    document.querySelector("#loader").classList.remove("hidden")
    let data = await fetch("https://h2s-t1.onrender.com/api");
    data = await data.json()
    let tbody = document.querySelector("tbody");
    for (let i of data) {
        tbody.innerHTML += `<tr>
        <td>${i["Team Name"]}</td>
        <td>${i["Full Name"]}</td>
        <td>${i["Email"]}</td>
        <td>${i["Number"]}</td>
        <td>${i["City"]}</td>
        <td><a href="${i["URL"]}" target="blank">${i["URL"]}</a></td>
            </tr>`
    }
    document.querySelector("#loader").classList.add("hidden")
    document.querySelector("table").classList.remove("hidden")
}