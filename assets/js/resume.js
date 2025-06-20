// Auto-populates resume sections
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/resume.json')
        .then(response => response.json())
        .then(data => {
            // Profile
            document.getElementById('resume-profile').innerHTML = `<p>${data.profile}</p>`;

            // Education
            document.getElementById('resume-education').innerHTML = `
                <h3>Education</h3>
                ${data.education.map(edu => `
                    <div class="resume-item">
                        <h4>${edu.institution}</h4>
                        <div class="period">${edu.period}</div>
                        <div>${edu.degree}</div>
                        <div>${edu.details}</div>
                    </div>
                `).join('')}
            `;

            // Experience if you add it later
            // document.getElementById('resume-experience').innerHTML = `

            // Skills
            if (data.skills) {
                document.getElementById('resume-profile').innerHTML += `
                    <div class="skills">
                        <h4>Skills</h4>
                        <ul>
                            ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            // Languages
            if (data.languages) {
                document.getElementById('resume-profile').innerHTML += `
                    <div class="skills languages">
                        <h4>Languages</h4>
                        <ul>
                            ${data.languages.map(lang => `<li>${lang.name} (${lang.level})</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
        });
});