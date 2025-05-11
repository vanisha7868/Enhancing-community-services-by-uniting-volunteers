function navigateToApp() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('appPage').style.display = 'block';
}

function navigateToHome() {
    document.getElementById('appPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

// District Problems Functionality
const problems = {
    Ariyalur: ['Blood Donation', 'Education', 'water pollution from industrial activities'],
    Chengalpattue: ['Education', 'Waste Management', 'Health'],
    Chennai: ['Education', 'Waste Management', 'Health'],
    Coimbatore: ['Flood Relief', 'Education', 'Blood Donation'],
    Cuddalore: ['Health', 'Disaster Relief'],
    Dharmapuri: ['Blood Donation', 'Education'],
    Dindigul: ['Blood Donation', 'Education', 'Disaster Relief'],
    Erode: ['Education', 'Waste Management', 'Health'],
    Kallakurichi: ['Flood Relief', 'Education', 'Blood Donation'],
    Kancheepuram: ['Health', 'Disaster Relief'],
    Kanyakumari: ['Blood Donation', 'Education'],
    Karur: ['Blood Donation', 'Education', 'Disaster Relief'],
    Krishnagiri: ['Education', 'Waste Management', 'Health'],
    Madurai: ['Flood Relief', 'Education', 'Blood Donation'],
    Mayiladuthurai: ['Health', 'Disaster Relief'],
    Namakkal: ['Blood Donation', 'Education'],
    Nilgirisai: ['Blood Donation', 'Education', 'Disaster Relief'],
    Perambalure: ['Education', 'Waste Management', 'Health'],
    Pudukkottai: ['Flood Relief', 'Education', 'Blood Donation'],
    Ramanathapuram: ['Health', 'Disaster Relief'],
    Ranipet: ['Blood Donation', 'Education'],
    Salem: ['Blood Donation', 'Education', 'Disaster Relief'],
    Sivaganga: ['Education', 'Waste Management', 'Health'],
    Tenkasiai: ['Flood Relief', 'Education', 'Blood Donation'],
    Thanjavur: ['Health', 'Disaster Relief'],
    Theni: ['Blood Donation', 'Education'],
    Thoothukudi: ['Flood Relief', 'Education', 'Blood Donation'],
    Tiruchirappalliy: ['Health', 'Disaster Relief'],
    Tirunelveli: ['Blood Donation', 'Education'],
    Tirupathur: ['Blood Donation', 'Education', 'Disaster Relief'],
    Tiruppurre: ['Education', 'Waste Management', 'Health'],
    Tiruvalluri: ['Flood Relief', 'Education', 'Blood Donation'],
    Tiruvannamalai: ['Health', 'Disaster Relief'],
    Tiruvarur: ['Blood Donation', 'Education'],
    Vellore: ['Flood Relief', 'Education', 'Blood Donation'],
    Viluppuram: ['Flood Relief', 'Education', 'Blood Donation'],
    Virudhunagar: ['Flood Relief', 'Education', 'Blood ']
    // Add other districts here
};

function loadDistrictProblems() {
    const district = document.getElementById('districtSelect').value;
    const problemsDiv = document.getElementById('districtProblems');
    
    problemsDiv.innerHTML = '';

    if (district && problems[district]) {
        let content = `<h2>Problem Statements in ${district}</h2>`;
        
        problems[district].forEach(problem => {
            content += `
                <div class="problem">
                    <h3>${problem}</h3>
                    <button onclick="becomeLeader('${problem}')">Become Leader</button>
                </div>
            `;
        });

        content += `<button onclick="suggestProblem()">Suggest Problem Statement</button>`;
        problemsDiv.innerHTML = content;
    }
}

function becomeLeader(problem) {
    const googleFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSePVGci5IPcR938QKR5emYJVp4Bg8wACwk8tB0pEpTwWDW5aQ/viewform?usp=header`; 
    alert(`You are now applying to become a leader for "${problem}".\nPlease submit your proof via this link: ${googleFormLink}`);
    window.open(googleFormLink, '_blank');
}

function suggestProblem() {
    const googleFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSce6I_9LmUEw6OZyCteJeFcBH6aSTAf2V2l_Iwgggc0ecK1tA/viewform?usp=header`; 
    alert(`Please suggest a new problem statement via this link: ${googleFormLink}`);
    window.open(googleFormLink, '_blank');
}