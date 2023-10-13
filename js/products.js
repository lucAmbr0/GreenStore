function downloadImage(productName) {
    const TableTD = document.querySelectorAll('td');
    const TableTH = document.querySelectorAll('th');
    const table = document.getElementById('nutriTableID');
    const credit = document.getElementById('nutriTableCredits');
    table.style.borderRadius = "0px";
    table.style.border = "solid 9px rgb(40, 40, 40)";
    table.style.backgroundColor = "rgb(128, 209, 128)";
    credit.style.display = "block";
    credit.style.fontSize = "36px";
    TableTD.forEach(td => {
        td.style.fontSize = "54px";
    });
    TableTH.forEach(th => {
        th.style.fontSize = "66px";
        th.style.border = "6px solid rgb(40, 40, 40)";
    });

    html2canvas(table, {
        scale: 3
    }).then(function (canvas) {
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = 'TabellaNutrizionale' + productName + '.png';
        a.click();
    });
    TableTD.forEach(td => {
        td.style.fontSize = "18px";
    });
    TableTH.forEach(th => {
        th.style.fontSize = "22px";
        th.style.border = "2px solid rgb(40, 40, 40)";
    });
    table.style.scale = "1";
    table.style.backgroundColor = "rgb(128, 209, 128)";
    table.style.borderRadius = "14px 14px 10px 10px";
    table.style.border = "solid 3px rgb(40, 40, 40)";
    credit.style.fontSize = "12px";
    credit.style.display = "none";
}

