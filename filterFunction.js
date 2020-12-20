function filterByInput(inputId, columnIndex) {

    const input = document.getElementById(inputId);
    const filterInput = input.value.toUpperCase();
    const table = document.getElementById("movieTable");
    const tableRows = table.getElementsByTagName("tr");

    for (let i = 0; i < tableRows.length; i++) {
        let tableCell = tableRows[i].getElementsByTagName("td")[columnIndex];
        if (tableCell) {
            let txtValue = tableCell.textContent || tableCell.innerText;
            if (txtValue.toUpperCase().indexOf(filterInput) > -1) {
                tableRows[i].style.display = "";
            } else {
                tableRows[i].style.display = "none";
            }
        }
    }
}


