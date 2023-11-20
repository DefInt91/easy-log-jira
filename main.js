// 以對象形式描述每個選項組
var selectGroups = [
    { containerId: 'Summary_container', selectId: 'Summary', dataKey: 'Summary', label: 'Summary' },
    { containerId: 'comms_manager_container', selectId: 'comms_manager', dataKey: 'comms_manager', label: 'Comms Manager' },
    { containerId: 'severity_container', selectId: 'severity', dataKey: 'severity', label: 'Severity' },
    { containerId: 'tier_container', selectId: 'tier', dataKey: 'tier', label: 'Tier' },
    { containerId: 'RC_container', selectId: 'root_cause', dataKey: 'root_cause', label: 'Root Cause' }
    // 添加其他選項組的描述...
];

// 載入 info_config.json
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
