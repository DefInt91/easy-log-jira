document.addEventListener('DOMContentLoaded', function () {
    fetch('https://github.com/DefInt91/easy-log-jira/blob/main/.github/workflows/credential.yml')
        .then(response => response.text())
        .then(yamlText => {
            const secrets = jsyaml.load(yamlText);

            const secretsList = document.getElementById('secretsList');

            Object.entries(secrets).forEach(([key, value]) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
                secretsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Failed to load YAML file:', error));
});
