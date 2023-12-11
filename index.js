document.addEventListener('DOMContentLoaded', function() {
    // Fetch the visitor count from your API
    fetch('https://kmset5rp04.execute-api.ap-south-1.amazonaws.com/new/get-value')
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with the visitor count
            const visitorCountElement = document.getElementById('visitorCount');
            visitorCountElement.textContent = `Visitor Count : ${data.visitor_count}`;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (e.g., display an error message)
            const visitorCountElement = document.getElementById('visitorCount');
            visitorCountElement.textContent = 'Error fetching visitor count';
        });
});
