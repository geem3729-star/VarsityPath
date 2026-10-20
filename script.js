document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. DATA ARRAYS
    // ==========================================
    const pathwayData = [
        { name: "University of Cape Town", course: "BCom Accounting", apsRequired: 35, alternative: "Start with a Higher Certificate in Commerce, then articulate into the degree." },
        { name: "Tshwane University of Technology", course: "Diploma in IT", apsRequired: 24, alternative: "Enroll in a Higher Certificate in IT (NQF 5) and transfer credits." },
        { name: "Varsity College (Private)", course: "Bachelor of Business", apsRequired: 20, alternative: "Direct Admission available." }
    ];

    const publicUniversities = [
        { name: "CAO (KZN Universities)", desc: "Apply to UKZN, DUT, MUT, UNIZULU in one place.", url: "https://www.cao.ac.za" },
        { name: "University of Cape Town", desc: "Official UCT online application portal.", url: "https://www.uct.ac.za" },
        { name: "University of the Witwatersrand", desc: "Wits Johannesburg online application.", url: "https://www.wits.ac.za" },
        { name: "Stellenbosch University", desc: "SU online application system.", url: "https://www.sun.ac.za" },
        { name: "University of Pretoria", desc: "UP online application.", url: "https://www.up.ac.za" },
        { name: "University of Johannesburg", desc: "UJ Gauteng application portal.", url: "https://www.uj.ac.za" }
        // ... (You can add the rest of the 26 universities back here later)
    ];

    const privateColleges = [
        { name: "IIE (Varsity College, Vega, Rosebank, MSA)", desc: "The Independent Institute of Education — largest registered private provider.", url: "https://iie.ac.za" },
        { name: "Eduvos", desc: "Multiple SA campuses, IT/Business/Law focus.", url: "https://eduvos.com" },
        { name: "STADIO", desc: "Distance and contact learning, several faculties.", url: "https://stadio.ac.za" }
    ];

    const tvetData = {
        "Eastern Cape": ["Buffalo City", "Eastcape Midlands", "Ikhala", "Ingwe", "King Hintsa", "King Sabata Dalindyebo", "Lovedale", "Port Elizabeth"],
        "Free State": ["Flavius Mareka", "Goldfields", "Maluti", "Motheo"],
        "Gauteng": ["Central Johannesburg", "Ekurhuleni East", "Ekurhuleni West", "Sedibeng", "South West Gauteng", "Tshwane North", "Tshwane South", "Western"]
    };

    const courseData = [
        { field: "Information Technology (IT)", name: "University of Cape Town", desc: "BSc in Computer Science", aps: 38 },
        { field: "Information Technology (IT)", name: "Tshwane University of Technology", desc: "Diploma in IT", aps: 24 },
        { field: "Information Technology (IT)", name: "Varsity College", desc: "Bachelor of IT", aps: 26 },
        { field: "Engineering", name: "University of the Witwatersrand", desc: "BSc Engineering", aps: 42 },
        { field: "Engineering", name: "Cape Peninsula University of Technology", desc: "Diploma in Civil Engineering", aps: 28 },
        { field: "Business & Commerce", name: "Stellenbosch University", desc: "BCom Management Sciences", aps: 36 },
        { field: "Business & Commerce", name: "University of Johannesburg", desc: "BCom Accounting", aps: 30 }
    ];

    // ==========================================
    // 2. DOM ELEMENTS
    // ==========================================
    const homeView = document.getElementById('heroSection');
    const dashboardView = document.getElementById('appSection');
    const directoryView = document.getElementById('directorySection');
    const courseSearchView = document.getElementById('courseSearchSection');
    
    // Navigation
    const startExploreBtn = document.getElementById('exploreBtn');
    const navAppBtn = document.getElementById('navApp');
    const navHomeBtn = document.getElementById('navHome');
    const backHomeBtn = document.getElementById('backBtn');
    const backDashboardBtn = document.getElementById('backToDashboardBtn');
    const backFromCourseBtn = document.getElementById('backFromCourseBtn');
    
    // Actions
    const openDirectoryBtn = document.getElementById('browseBtn');
    const calcApsBtn = document.getElementById('checkBtn');
    const searchCourseBtn = document.getElementById('searchCourseBtn');
    
    // Containers
    const apsResultsContainer = document.getElementById('resultsGrid');
    const directoryGrid = document.getElementById('universityGrid');
    const courseResultsGrid = document.getElementById('courseResultsGrid');
    const fieldSelect = document.getElementById('fieldSelect');
    
    // Tabs
    const tabPublic = document.getElementById('tabPublic');
    const tabPrivate = document.getElementById('tabPrivate');
    const tabTvet = document.getElementById('tabTvet');
    const privateWarning = document.getElementById('privateWarning');

    // ==========================================
    // 3. NAVIGATION LOGIC
    // ==========================================
    function hideAllViews() {
        homeView.classList.add('hidden');
        dashboardView.classList.add('hidden');
        directoryView.classList.add('hidden');
        courseSearchView.classList.add('hidden');
    }

    function showHome() {
        hideAllViews();
        homeView.classList.remove('hidden');
        apsResultsContainer.innerHTML = ''; 
        document.getElementById('apsInput').value = ''; 
    }

    function showDashboard() {
        hideAllViews();
        dashboardView.classList.remove('hidden');
    }

    function showDirectory() {
        hideAllViews();
        directoryView.classList.remove('hidden');
        switchTab('public'); 
    }

    function showCourseSearch() {
        hideAllViews();
        courseSearchView.classList.remove('hidden');
        populateDropdown();
    }

    // Event Listeners
    startExploreBtn.addEventListener('click', showDashboard);
    navAppBtn.addEventListener('click', (e) => { e.preventDefault(); showDashboard(); });
    navHomeBtn.addEventListener('click', (e) => { e.preventDefault(); showHome(); });
    backHomeBtn.addEventListener('click', showHome);
    backDashboardBtn.addEventListener('click', showDashboard);
    backFromCourseBtn.addEventListener('click', showDashboard);
    openDirectoryBtn.addEventListener('click', showDirectory);
    searchCourseBtn.addEventListener('click', showCourseSearch);

    // ==========================================
    // 4. DIRECTORY (TABS)
    // ==========================================
    function switchTab(type) {
        directoryGrid.innerHTML = '';
        tabPublic.classList.remove('active');
        tabPrivate.classList.remove('active');
        tabTvet.classList.remove('active');
        privateWarning.classList.add('hidden');
        directoryGrid.style.display = ''; // Reset display

        if (type === 'public') {
            tabPublic.classList.add('active');
            renderCards(publicUniversities);
        } else if (type === 'private') {
            tabPrivate.classList.add('active');
            privateWarning.classList.remove('hidden'); 
            renderCards(privateColleges);
        } else if (type === 'tvet') {
            tabTvet.classList.add('active');
            renderTvetPage();
        }
    }

    tabPublic.addEventListener('click', () => switchTab('public'));
    tabPrivate.addEventListener('click', () => switchTab('private'));
    tabTvet.addEventListener('click', () => switchTab('tvet'));

    function renderCards(data) {
        data.forEach(inst => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.borderTopColor = "#0056b3"; 
            card.innerHTML = `
                <h3>${inst.name}</h3>
                <p style="color: #666; margin-bottom: 0.5rem;">${inst.desc}</p>
                <a href="${inst.url}" target="_blank" class="apply-btn">Visit Site &rarr;</a>
            `;
            directoryGrid.appendChild(card);
        });
    }

    function renderTvetPage() {
        directoryGrid.style.display = 'block';
        let html = `
            <div class="tvet-header">
                <h1>TVET Colleges, Explained</h1>
                <p class="tvet-intro">Technical and Vocational Education and Training (TVET) colleges offer practical, job-ready skills.</p>
            </div>
            <h2 class="tvet-subhead">All 50 Public TVET Colleges</h2>
        `;
        for (const [province, colleges] of Object.entries(tvetData)) {
            html += `<div class="province-section"><h3 class="province-title">${province} <span class="province-badge">${colleges.length} colleges</span></h3><div class="college-list">`;
            colleges.forEach(college => {
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(college + ' TVET College')}`;
                html += `<div class="college-item"><span>${college} TVET College</span><a href="${searchUrl}" target="_blank">Visit site &rarr;</a></div>`;
            });
            html += `</div></div>`;
        }
        directoryGrid.innerHTML = html;
    }

    // ==========================================
    // 5. APS CALCULATOR
    // ==========================================
    calcApsBtn.addEventListener('click', () => {
        const userAps = document.getElementById('apsInput').value;
        if (!userAps || userAps < 0) { alert("Please enter a valid APS score!"); return; }

        const score = parseInt(userAps);
        apsResultsContainer.innerHTML = ''; 

        pathwayData.forEach(path => {
            const card = document.createElement('div');
            card.classList.add('card');
            let resultHtml = "";
            let cardBorderColor = "";

            if (score >= path.apsRequired) {
                cardBorderColor = "#2e7d32"; 
                resultHtml = `<p style="color: #2e7d32; font-weight: bold; font-size: 1.1rem;">✅ You Qualify!</p><p>You meet the required APS of ${path.apsRequired}.</p>`;
            } else {
                cardBorderColor = "#d32f2f"; 
                resultHtml = `<p style="color: #d32f2f; font-weight: bold; font-size: 1.1rem;">❌ You do not meet the APS of ${path.apsRequired}.</p><div style="background-color: #fff3e0; padding: 1rem; border-radius: 5px; margin-top: 10px;"><p style="color: #e65100; font-weight: bold;">💡 VarsityPath Alternative:</p><p>${path.alternative}</p></div>`;
            }

            card.innerHTML = `<h3>${path.name}</h3><p><strong>Course:</strong> ${path.course}</p><hr>${resultHtml}`;
            card.style.borderTopColor = cardBorderColor;
            apsResultsContainer.appendChild(card);
        });
    });

    // ==========================================
    // 6. COURSE SEARCH
    // ==========================================
    function populateDropdown() {
        if (fieldSelect.options.length > 1) return; 
        const uniqueFields = [...new Set(courseData.map(item => item.field))];
        uniqueFields.forEach(field => {
            const option = document.createElement('option');
            option.value = field;
            option.textContent = field;
            fieldSelect.appendChild(option);
        });
    }

    fieldSelect.addEventListener('change', (e) => {
        const selectedField = e.target.value;
        courseResultsGrid.innerHTML = '';
        const filteredCourses = courseData.filter(course => course.field === selectedField);

        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.borderTopColor = "#0056b3"; 
            card.innerHTML = `
                <h3>${course.name}</h3>
                <p><strong>Course:</strong> ${course.desc}</p>
                <p style="color: #0056b3; font-weight: bold;">Required APS: ${course.aps}</p>
                <a href="https://www.google.com/search?q=${encodeURIComponent(course.name + ' ' + course.desc)}" target="_blank" class="apply-btn">View Requirements &rarr;</a>
            `;
            courseResultsGrid.appendChild(card);
        });
    });
});