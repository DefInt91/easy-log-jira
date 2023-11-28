// 定義 selectGroups
var selectGroups = [
    { containerId: 'Summary_container', selectId: 'Summary', dataKey: 'Summary', label: 'Summary' },
    // 根據需要添加其他選擇組
];

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
loadOptions()