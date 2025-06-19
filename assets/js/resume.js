// Auto-populates resume sections
fetch('../data/resume.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('resume-profile').innerHTML = `
            <p>${data.profile}</p>
            <div class="skills">
                <h3>Skills</h3>
                <ul>${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>
        `;
        
        // Populate education
        document.getElementById('resume-education').innerHTML = `
            <h3>Education</h3>
            ${data.education.map(edu => `
                <div class="resume-item">
                    <h4>${edu.institution}</h4>
                    <p class="period">${edu.period}</p>
                    <p><em>${edu.degree}</em></p>
                    <p>${edu.details}</p>
                </div>
            `).join('')}
        `;
    });