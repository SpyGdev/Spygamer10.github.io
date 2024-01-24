function loadHtml() {
    const url = document.getElementById('html-input').value;

    if (!url) {
        alert('Please enter a valid URL');
        return;
    }

    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('html-output').textContent = html;
        })
        .catch(error => {
            console.error('Error fetching HTML:', error);
            alert('Error fetching HTML. Please check the URL and try again.');
        });
}
