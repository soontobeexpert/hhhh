// Function to show the patient data section and hide the robot status
document.getElementById("patients-sidebar").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".monitoring-panel").style.display = "none"; // Hide Robot Status
    document.getElementById("patient-data-section").style.display = "block"; // Show Patient Data
    document.getElementById("ai-insights-section").style.display = "none"; // hide ai
    document.getElementById("settings-section").style.display = "none"; // hide setting

});

document.getElementById("robot-status-sidebar").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".monitoring-panel").style.display = "block"; // Show Robot Status
    document.getElementById("patient-data-section").style.display = "none"; // Hide Patient Data
    document.getElementById("ai-insights-section").style.display = "none"; // hide ai
    document.getElementById("settings-section").style.display = "none"; // hide setting
 
});

document.getElementById("ai-insights-sidebar").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".monitoring-panel").style.display = "none"; // Hide Robot Status
    document.getElementById("patient-data-section").style.display = "none"; // Hide Patient Data
    document.getElementById("ai-insights-section").style.display = "block"; // show ai
    document.getElementById("settings-section").style.display = "none"; // hide setting

});
document.getElementById("setting-sidebar").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".monitoring-panel").style.display = "none"; // Hide Robot Status
    document.getElementById("patient-data-section").style.display = "none"; // Hide Patient Data
    document.getElementById("ai-insights-section").style.display = "none"; // show ai
    document.getElementById("settings-section").style.display = "block"; // show setting

});

// Function to show the details of a specific patient
function showPatientDetails(patientId) {
    const patientDetails = document.getElementById("patient-details");

    // Update the patient details based on which patient was clicked
    if (patientId === 'patient1') {
        patientDetails.innerHTML = `
            <h4>Patient Details</h4>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Pulse:</strong> 72 bpm</p>
            <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
            <p><strong>Temperature:</strong> 98.6°F</p>
            <p><strong>Status:</strong> Normal</p>
        `;
    } else if (patientId === 'patient2') {
        patientDetails.innerHTML = `
            <h4>Patient Details</h4>
            <p><strong>Name:</strong> Jane Smith</p>
            <p><strong>Pulse:</strong> 120 bpm</p>
            <p><strong>Blood Pressure:</strong> 140/90 mmHg</p>
            <p><strong>Temperature:</strong> 101°F</p>
            <p><strong>Status:</strong> Critical</p>
        `;
    }
}
document.getElementById('save-settings').addEventListener('click', function() {
    // Get values from the form
    const taskFrequency = document.getElementById('task-frequency').value;
    const batteryThreshold = document.getElementById('low-battery-threshold').value;
    const aiUpdateFrequency = document.getElementById('ai-update-frequency').value;
    const aiConfidenceThreshold = document.getElementById('ai-confidence-threshold').value;
    const pulseThreshold = document.getElementById('pulse-threshold').value;
    const temperatureThreshold = document.getElementById('temperature-threshold').value;

    // Save settings to localStorage (or send to server via an API)
    localStorage.setItem('taskFrequency', taskFrequency);
    localStorage.setItem('batteryThreshold', batteryThreshold);
    localStorage.setItem('aiUpdateFrequency', aiUpdateFrequency);
    localStorage.setItem('aiConfidenceThreshold', aiConfidenceThreshold);
    localStorage.setItem('pulseThreshold', pulseThreshold);
    localStorage.setItem('temperatureThreshold', temperatureThreshold);

    alert('Settings saved successfully!');
});
// Example: Simulate new notifications being received
let notificationCount = 3;

// Function to update notification count
function updateNotifications(count) {
    const notificationElement = document.getElementById('notification-count');
    
    if (count > 0) {
        notificationElement.textContent = count;
        notificationElement.style.display = 'block';
    } else {
        notificationElement.style.display = 'none';
    }
}

// Call the function when a new notification is received
setTimeout(() => {
    notificationCount += 1; // Simulate receiving a new notification
    updateNotifications(notificationCount);
}, 5000); // Update after 5 seconds for demo purposes

// Reset notifications when clicked
document.querySelector('.notifications').addEventListener('click', () => {
    notificationCount = 0;
    updateNotifications(notificationCount);
});
