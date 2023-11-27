// 讀取在 github 設定的 token
// 在 Node.js 中讀取環境變量
const jiraToken = process.env.JIRA_TOKEN;
const user = process.env.USER;
const server = process.env.SERVER;
const escalatedBy = process.env.ESCALATED_BY;

// 現在，你可以在代碼中使用 jiraToken 了
console.log('Jira Token:', jiraToken);
console.log('User:', user);
console.log('Server:', server);
console.log('Escalated By:', escalatedBy);

// if (typeof document !== 'undefined') {
//     document.addEventListener('DOMContentLoaded', function () {
//         // 現在這裡呼叫 loadOptions 函數
//         loadOptions();
//     });
// }


function copyToClipboard() {
    var statusElement = document.getElementById("status").value;
    var severityElement = document.getElementById("Severity").value;
    var High_Sev_NameElement = document.getElementById("High_Sev_Name").value;
    var Affecting_SElement = document.getElementById("RootCause").value;
    var TierElement = document.getElementById("Tier").value;
    var RootCauseElement = document.getElementById("RootCause").value;
    var SummaryElement = document.getElementById("Summary").value;

    // 添加條件判斷，如果滿足條件則執行複製到剪貼板的操作
    var formattedText = `
    <b>Server: ${server}</b>
        <b>Status: </b> ${statusElement}<br>
        <b>Severity: </b> ${severityElement}<br>
        <b>Name: </b> ${High_Sev_NameElement}<br>
        <b>Root Cause: </b> ${RootCauseElement}<br>
        <b>Tier: </b> ${TierElement}<br>
        <b>Summary: </b> ${SummaryElement}<br>
        <b>Provider: </b> ${radioSFG}<br>`;
    var copyTextDiv = document.getElementById("copyText");
    copyTextDiv.innerHTML = formattedText;
    copyTextDiv.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    alert("已複製到剪貼板");
}