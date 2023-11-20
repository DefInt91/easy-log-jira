// 創建 XMLHttpRequest 物件
var xhr = new XMLHttpRequest();

// 設定請求的方法和 URL
xhr.open('GET', 'info_config.json', true);

// 設定請求完成後的回呼函式
xhr.onload = function () {
    if (xhr.status === 200) {
        // 解析 JSON 字串為 JavaScript 物件
        var jsonData = JSON.parse(xhr.responseText);

        // 在控制台印出 JSON 數據
        console.log(jsonData);
    } else {
        console.error('請求失敗。狀態碼：' + xhr.status);
    }
};

// 設定發生錯誤時的回呼函式
xhr.onerror = function () {
    console.error('發生網路錯誤。');
};

// 發送請求
xhr.send();


function copyToClipboard() {
    var statusElement = document.getElementById("status").value;

    var severityElement = document.getElementById("Severity").value;

    var High_Sev_NameElement = document.getElementById("High_Sev_Name").value;

    var Affecting_SElement = document.getElementById("RootCause").value;

    var TierElement = document.getElementById("Tier").value;

    var RootCauseElement = document.getElementById("RootCause").value;

    var RootCauseElement = document.getElementById("RootCause").value;

    var RootCauseElement = document.getElementById("RootCause").value;

    var RootCauseElement = document.getElementById("RootCause").value;

    var RootCauseElement = document.getElementById("RootCause").value;

    var RootCauseElement = document.getElementById("RootCause").value;

    var formattedText = `
        <b>Status: </b> ${statusElement}<br>
        <b>Severity: </b> ${severityElement}<br>
        <b>Name: </b> ${High_Sev_NameElement}<br>`;
    var copyTextDiv = document.getElementById("copyText");
    copyTextDiv.innerHTML = formattedText;
    copyTextDiv.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    alert("已複製到剪貼板")
}

