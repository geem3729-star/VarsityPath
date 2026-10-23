document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. DATA ARRAYS
    // ==========================================
    const pathwayData = [
        { name: "University of Cape Town", course: "BCom Accounting", apsRequired: 35, alternative: "Start with a Higher Certificate in Commerce." },
        { name: "University of the Witwatersrand", course: "BSc Computer Science", apsRequired: 40, alternative: "Consider a Diploma in IT and transfer credits." },
        { name: "Tshwane University of Technology", course: "Diploma in IT", apsRequired: 24, alternative: "Enroll in a Higher Certificate in IT (NQF 5)." },
        { name: "Varsity College (Private)", course: "Bachelor of Business", apsRequired: 20, alternative: "Direct Admission available." }
    ];

    const allUniversities = [
        "University of Cape Town (UCT)", "University of the Witwatersrand (Wits)", "Stellenbosch University (SU)",
        "University of Pretoria (UP)", "University of Johannesburg (UJ)", "University of KwaZulu-Natal (UKZN)",
        "Rhodes University", "University of the Western Cape (UWC)", "North-West University (NWU)",
        "University of the Free State (UFS)", "Tshwane University of Technology (TUT)", "Durban University of Technology (DUT)",
        "Cape Peninsula University of Technology (CPUT)", "Central University of Technology (CUT)",
        "Vaal University of Technology (VUT)", "Mangosuthu University of Technology (MUT)",
        "Nelson Mandela University (NMU)", "Sefako Makgatho Health Sciences University (SMU)",
        "University of Limpopo (UL)", "University of Venda (UniVen)", "Walter Sisulu University (WSU)",
        "Sol Plaatje University (SPU)", "University of Mpumalanga (UMP)", "University of Fort Hare (UFH)",
        "University of South Africa (UNISA)", "University of Zululand (UniZulu)"
    ];

    const courseData = [
        { field: "Agriculture & Environmental Sciences", name: "Stellenbosch University", desc: "BSc Agriculture", aps: 34 },
        { field: "Architecture & Built Environment", name: "University of Pretoria", desc: "BSc Architecture", aps: 35 },
        { field: "Arts & Humanities", name: "University of Cape Town", desc: "BA Humanities", aps: 32 },
        { field: "Business & Commerce", name: "University of Johannesburg", desc: "BCom Accounting", aps: 30 },
        { field: "Business & Commerce", name: "Wits University", desc: "BCom Economics", aps: 38 },
        { field: "Computer Science", name: "University of Cape Town", desc: "BSc Computer Science", aps: 38 },
        { field: "Computer Science", name: "Tshwane University of Technology", desc: "Diploma in IT", aps: 24 },
        { field: "Education & Teaching", name: "University of Pretoria", desc: "BEd Foundation Phase", aps: 28 },
        { field: "Engineering", name: "Wits University", desc: "BSc Mechanical Engineering", aps: 42 },
        { field: "Health Sciences & Medicine", name: "University of KwaZulu-Natal", desc: "Bachelor of Medicine (MBChB)", aps: 45 },
        { field: "Law & Legal Studies", name: "University of Cape Town", desc: "LLB Law", aps: 40 },
        { field: "Life Sciences & Biology", name: "Stellenbosch University", desc: "BSc Biological Sciences", aps: 34 },
        { field: "Media & Communication", name: "Rhodes University", desc: "BA Journalism", aps: 30 },
        { field: "Performing & Visual Arts", name: "University of Cape Town", desc: "Diploma in Fine Art", aps: 28 },
        { field: "Physical Sciences & Mathematics", name: "University of the Witwatersrand", desc: "BSc Physics", aps: 38 },
        { field: "Social Sciences & Psychology", name: "University of South Africa", desc: "BA Psychology", aps: 22 },
        { field: "Sport Science & Human Movement", name: "University of Pretoria", desc: "BSc Sport Science", aps: 32 },
        { field: "Tourism & Hospitality", name: "Cape Peninsula University of Technology", desc: "Diploma in Tourism", aps: 24 }
    ];

    const allSAFields = [
        "Agriculture & Environmental Sciences", "Architecture & Built Environment", "Arts & Humanities",
        "Business & Commerce", "Computer Science", "Education & Teaching", "Engineering",
        "Health Sciences & Medicine", "Law & Legal Studies", "Life Sciences & Biology",
        "Media & Communication", "Performing & Visual Arts", "Physical Sciences & Mathematics",
        "Social Sciences & Psychology", "Sport Science & Human Movement", "Tourism & Hospitality"
    ];

    const subjectOptions = [
        "English Home Language", "Afrikaans Home Language", "Mathematics", "Mathematical Literacy", 
        "Life Orientation", "Physical Sciences", "Life Sciences", "Accounting", "Business Studies", 
        "Economics", "Geography", "History", "Information Technology", "Consumer Studies", "Tourism", "Other"
    ];

    const fundingData = [
        { name: "NSFAS Bursary", desc: "Government funding for qualifying students from households earning up to R350,000 per year.", url: "http://www.nsfas.org.za" },
        { name: "FNB Fund", desc: "Bursaries for top academic performers in specific fields of study.", url: "https://www.fnb.co.za" },
        { name: "Cost Planning Guide", desc: "Calculate your expected expenses, including accommodation, textbooks, food, and transport.", url: "#" }
    ];

    const supportData = [
        { name: "Student Wellness & SADAG", desc: "Free counselling and mental health support for students. Call 0800 567 567.", url: "https://www.sadag.org" },
        { name: "Academic Persistence", desc: "Access tutoring, study guides, and time management resources to help you graduate.", url: "#" },
        { name: "Connectivity Resources", desc: "Information on zero-rated educational websites and data support for online learning.", url: "#" }
    ];

    // ==========================================
    // 2. DOM ELEMENTS
    // ==========================================
    const homeView = document.getElementById('heroSection');
    const dashboardView = document.getElementById('appSection');
    const otherToolsView = document.getElementById('otherToolsSection'); // NEW
    const advancedCalcView = document.getElementById('advancedCalcSection');
    const directoryView = document.getElementById('directorySection');
    const courseSearchView = document.getElementById('courseSearchSection');
    const fundingView = document.getElementById('fundingSection');
    const supportView = document.getElementById('supportSection');
    
    const startExploreBtn = document.getElementById('exploreBtn');
    const navAppBtn = document.getElementById('navApp');
    const navHomeBtn = document.getElementById('navHome');
    
    const browseBtn = document.getElementById('browseBtn');
    const searchCourseBtn = document.getElementById('searchCourseBtn');
    const openAdvancedCalcBtn = document.getElementById('openAdvancedCalcBtn');
    const openOtherToolsBtn = document.getElementById('openOtherToolsBtn'); // NEW
    const backFromOtherToolsBtn = document.getElementById('backFromOtherToolsBtn'); // NEW
    
    const backToDashboardBtn = document.getElementById('backToDashboardBtn');
    const backFromDirBtn = document.getElementById('backFromDirBtn');
    const backFromCourseBtn = document.getElementById('backFromCourseBtn');
    const backFromFundingBtn = document.getElementById('backFromFunding');
    const backFromSupportBtn = document.getElementById('backFromSupport');
    
    const simpleApsInput = document.getElementById('simpleApsInput');
    const simpleCalcBtn = document.getElementById('simpleCalcBtn');
    const simpleResultsGrid = document.getElementById('simpleResultsGrid');

    const uniSelect = document.getElementById('uniSelect');
    const subjectList = document.getElementById('subject-list');
    const addSubjectBtn = document.getElementById('addSubjectBtn');
    const advancedCalcBtn = document.getElementById('advancedCalcBtn');
    const advancedResultsGrid = document.getElementById('advancedResultsGrid');

    const fieldSelect = document.getElementById('fieldSelect');
    const courseResultsGrid = document.getElementById('courseResultsGrid');
    
    const navFundingBtn = document.getElementById('navFunding');
    const navSupportBtn = document.getElementById('navSupport');
    const fundingGrid = document.getElementById('fundingGrid');
    const supportGrid = document.getElementById('supportGrid');

    // ==========================================
    // 3. NAVIGATION LOGIC
    // ==========================================
    function hideAllViews() {
        homeView.classList.add('hidden');
        dashboardView.classList.add('hidden');
        otherToolsView.classList.add('hidden'); // Hide other tools
        advancedCalcView.classList.add('hidden');
        directoryView.classList.add('hidden');
        courseSearchView.classList.add('hidden');
        fundingView.classList.add('hidden');
        supportView.classList.add('hidden');
    }

    function showDashboard() { hideAllViews(); dashboardView.classList.remove('hidden'); simpleResultsGrid.innerHTML = ''; simpleApsInput.value = ''; }
    function showOtherTools() { hideAllViews(); otherToolsView.classList.remove('hidden'); } // NEW
    function showAdvancedCalc() { hideAllViews(); advancedCalcView.classList.remove('hidden'); advancedResultsGrid.innerHTML = ''; }
    function showDirectory() { hideAllViews(); directoryView.classList.remove('hidden'); }
    function showCourseSearch() { hideAllViews(); courseSearchView.classList.remove('hidden'); populateDropdown(); }
    function showFunding() { hideAllViews(); fundingView.classList.remove('hidden'); renderFunding(); }
    function showSupport() { hideAllViews(); supportView.classList.remove('hidden'); renderSupport(); }

    startExploreBtn.addEventListener('click', showDashboard);
    navAppBtn.addEventListener('click', (e) => { e.preventDefault(); showDashboard(); });
    navHomeBtn.addEventListener('click', (e) => { e.preventDefault(); hideAllViews(); homeView.classList.remove('hidden'); });
    
    browseBtn.addEventListener('click', showDirectory);
    searchCourseBtn.addEventListener('click', showCourseSearch);
    openAdvancedCalcBtn.addEventListener('click', showAdvancedCalc);
    
    // Link the new buttons
    openOtherToolsBtn.addEventListener('click', showOtherTools);
    backFromOtherToolsBtn.addEventListener('click', showDashboard);
    
    navFundingBtn.addEventListener('click', showFunding);
    navSupportBtn.addEventListener('click', showSupport);
    
    backToDashboardBtn.addEventListener('click', showDashboard);
    backFromDirBtn.addEventListener('click', showDashboard);
    backFromCourseBtn.addEventListener('click', showDashboard);
    backFromFundingBtn.addEventListener('click', showOtherTools); // Goes back to Other Tools menu
    backFromSupportBtn.addEventListener('click', showOtherTools); // Goes back to Other Tools menu

    // ==========================================
    // 4. SIMPLE APS CALCULATOR
    // ==========================================
    simpleCalcBtn.addEventListener('click', () => {
        const userAps = simpleApsInput.value;
        if (!userAps || userAps < 0) { alert("Please enter a valid APS score!"); return; }

        const score = parseInt(userAps);
        simpleResultsGrid.innerHTML = ''; 

        pathwayData.forEach(path => {
            const card = document.createElement('div');
            card.classList.add('card');
            let resultHtml = "";
            
            if (score >= path.apsRequired) {
                card.style.borderTopColor = "#2e7d32"; 
                resultHtml = `<p style="color: #2e7d32; font-weight: bold;">Qualified</p><p>You meet the required APS of ${path.apsRequired}.</p>`;
            } else {
                card.style.borderTopColor = "#d32f2f"; 
                resultHtml = `<p style="color: #d32f2f; font-weight: bold;">Not Qualified</p><div style="background-color: #fff3e0; padding: 1rem; border-radius: 5px; margin-top: 10px;"><p style="color: #e65100; font-weight: bold;">Alternative:</p><p>${path.alternative}</p></div>`;
            }
            card.innerHTML = `<h3>${path.name}</h3><p><strong>Course:</strong> ${path.course}</p><hr>${resultHtml}`;
            simpleResultsGrid.appendChild(card);
        });
    });

    // ==========================================
    // 5. ADVANCED APS CALCULATOR
    // ==========================================
    allUniversities.forEach(uni => {
        const option = document.createElement('option');
        option.value = uni;
        option.textContent = uni;
        uniSelect.appendChild(option);
    });

    function addSubjectRow(defaultSubject = "Other") {
        const row = document.createElement('div');
        row.classList.add('subject-row');

        const select = document.createElement('select');
        select.className = 'subject-select';
        subjectOptions.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            if (subject === defaultSubject) option.selected = true;
            select.appendChild(option);
        });

        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'subject-mark';
        input.placeholder = 'Mark %';
        input.min = '0'; input.max = '100';

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.type = 'button';
        removeBtn.addEventListener('click', () => row.remove());

        row.appendChild(select);
        row.appendChild(input);
        row.appendChild(removeBtn);
        subjectList.appendChild(row);
    }

    addSubjectRow("English Home Language");
    addSubjectRow("Mathematics");
    addSubjectRow("Life Orientation");
    addSubjectRow("Other"); addSubjectRow("Other"); addSubjectRow("Other");
    addSubjectBtn.addEventListener('click', () => addSubjectRow());

    function getApsPoints(percent) {
        if (percent >= 80) return 7;
        if (percent >= 70) return 6;
        if (percent >= 60) return 5;
        if (percent >= 50) return 4;
        if (percent >= 40) return 3;
        if (percent >= 30) return 2;
        return 1;
    }

    advancedCalcBtn.addEventListener('click', () => {
        const rows = document.querySelectorAll('.subject-row');
        let apsArray = [];

        rows.forEach(row => {
            const subjectName = row.querySelector('.subject-select').value;
            const markValue = row.querySelector('.subject-mark').value;

            if (markValue !== "" && markValue !== null && subjectName !== "Life Orientation") {
                apsArray.push({ subject: subjectName, points: getApsPoints(parseInt(markValue)) });
            }
        });

        if (apsArray.length < 6) {
            alert("Please enter marks for at least 6 subjects (excluding Life Orientation).");
            return;
        }

        apsArray.sort((a, b) => b.points - a.points);
        const totalAps = apsArray.slice(0, 6).reduce((sum, item) => sum + item.points, 0);

        advancedResultsGrid.innerHTML = `<h2 style="width:100%; text-align:center; color:#0056b3; margin-bottom: 2rem;">Your Total APS: ${totalAps} <br><span style="font-size:1rem; color:#666; font-weight:normal;">(Based on top 6 subjects)</span></h2>`;

        pathwayData.forEach(path => {
            const card = document.createElement('div');
            card.classList.add('card');
            let resultHtml = "";
            
            if (totalAps >= path.apsRequired) {
                card.style.borderTopColor = "#2e7d32"; 
                resultHtml = `<p style="color: #2e7d32; font-weight: bold;">Qualified</p><p>You meet the required APS of ${path.apsRequired}.</p>`;
            } else {
                card.style.borderTopColor = "#d32f2f"; 
                resultHtml = `<p style="color: #d32f2f; font-weight: bold;">Not Qualified</p><div style="background-color: #fff3e0; padding: 1rem; border-radius: 5px; margin-top: 10px;"><p style="color: #e65100; font-weight: bold;">Alternative:</p><p>${path.alternative}</p></div>`;
            }
            card.innerHTML = `<h3>${path.name}</h3><p><strong>Course:</strong> ${path.course}</p><hr>${resultHtml}`;
            advancedResultsGrid.appendChild(card);
        });
    });

    // ==========================================
    // 6. COURSE SEARCH
    // ==========================================
    function populateDropdown() {
        if (fieldSelect.options.length > 1) return; 
        allSAFields.forEach(field => {
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

        if (filteredCourses.length === 0) {
            courseResultsGrid.innerHTML = `<div class="card" style="border-top-color: #e65100; grid-column: 1 / -1; text-align: center;"><h3>No courses listed yet</h3><p>We are currently building our database for <strong>${selectedField}</strong>.</p></div>`;
            return;
        }

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

    // ==========================================
    // 7. FUNDING & SUPPORT RENDERERS
    // ==========================================
    function renderFunding() {
        fundingGrid.innerHTML = '';
        fundingData.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.borderTopColor = "#2e7d32"; 
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <a href="${item.url}" target="_blank" class="apply-btn">View Details &rarr;</a>
            `;
            fundingGrid.appendChild(card);
        });
    }

    function renderSupport() {
        supportGrid.innerHTML = '';
        supportData.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.borderTopColor = "#e65100"; 
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <a href="${item.url}" target="_blank" class="apply-btn">Access Resource &rarr;</a>
            `;
            supportGrid.appendChild(card);
        });
    }
});