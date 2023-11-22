document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.getElementById('copyButton');

    copyButton.addEventListener('click', function () {
        // 获取 SERVER Secret 内容
        var serverSecret = process.env.SERVER; // 如果是在 Node.js 环境下

        // 复制到剪贴板的逻辑，可以使用你喜欢的库或编写自己的逻辑
        // 下面的代码是使用 document.execCommand 的简单示例
        var copyText = document.createElement('textarea');
        copyText.value = serverSecret;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand('copy');
        document.body.removeChild(copyText);

        // 提示用户已成功复制
        alert('已成功复制 SERVER Secret');
    });
});
