function highlightRows() {
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => {
        const stock = parseInt(row.dataset.stock);
        if (stock < 20) {
            row.classList.add('highlight');
        }
    });
}

function filterMedicines() {
    let searchValue = document.getElementById("searchBar").value.toLowerCase();
    let rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
        if (index === 0) return; 
        let medName = row.querySelector(".med-name").textContent.toLowerCase();
        row.style.display = medName.includes(searchValue) ? "" : "none";
    });
}

window.onload = highlightRows;
