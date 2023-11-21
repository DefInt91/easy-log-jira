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

// 載入 info_config.json
function loadOptions() {
    fetch('info_config.json')
        .then(response => response.json())
        .then(data => {
            console.log('成功載入 JSON 檔案:', data);  // 檢查 data 的實際內容

            // 使用迴圈動態生成選項組
            selectGroups.forEach(group => {
                var containerElement = document.getElementById(group.containerId);
                var selectElement = document.getElementById(group.selectId);

                // 檢查是否有指定的屬性
                if (data && Array.isArray(data[group.dataKey])) {
                    // 添加標籤
                    containerElement.querySelector('label').textContent = group.label;

                    // 生成選項
                    data[group.dataKey].forEach(item => {
                        var option = document.createElement('option');
                        option.value = item;
                        option.text = item;
                        selectElement.appendChild(option);
                    });
                } else {
                    console.error(`JSON 檔案格式錯誤：缺少 ${group.dataKey} 屬性或不是陣列`);
                }
            });
        })
        .catch(error => console.error('載入 info_config.json 失敗：', error));
}

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