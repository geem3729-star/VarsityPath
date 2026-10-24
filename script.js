console.log("Chatbot Script Loaded successfully.");

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. DATA ARRAYS
    // ==========================================
    const allUniversities = [ "University of Cape Town (UCT)", "University of the Witwatersrand (Wits)", "Stellenbosch University (SU)", "University of Pretoria (UP)", "University of Johannesburg (UJ)", "University of KwaZulu-Natal (UKZN)", "Rhodes University", "University of the Western Cape (UWC)", "North-West University (NWU)", "University of the Free State (UFS)", "Tshwane University of Technology (TUT)", "Durban University of Technology (DUT)", "Cape Peninsula University of Technology (CPUT)", "Central University of Technology (CUT)", "Vaal University of Technology (VUT)", "Mangosuthu University of Technology (MUT)", "Nelson Mandela University (NMU)", "Sefako Makgatho Health Sciences University (SMU)", "University of Limpopo (UL)", "University of Venda (UniVen)", "Walter Sisulu University (WSU)", "Sol Plaatje University (SPU)", "University of Mpumalanga (UMP)", "University of Fort Hare (UFH)", "University of South Africa (UNISA)", "University of Zululand (UniZulu)" ];

    const pathwayData = [
        { name: "University of Cape Town", course: "BCom Accounting", apsRequired: 35, alternative: "Start with a Higher Certificate in Commerce." },
        { name: "University of the Witwatersrand", course: "BSc Computer Science", apsRequired: 40, alternative: "Consider a Diploma in IT and transfer credits." },
        { name: "Tshwane University of Technology", course: "Diploma in IT", apsRequired: 24, alternative: "Enroll in a Higher Certificate in IT (NQF 5)." },
        { name: "Varsity College (Private)", course: "Bachelor of Business", apsRequired: 20, alternative: "Direct Admission available." }
    ];

    const publicUniversities = [
        { name: "University of Cape Town", desc: "Oldest university in South Africa.", url: "https://www.uct.ac.za" }, { name: "University of the Witwatersrand", desc: "Research-intensive university in Johannesburg.", url: "https://www.wits.ac.za" }, { name: "Stellenbosch University", desc: "Leading research university in the Western Cape.", url: "https://www.sun.ac.za" }, { name: "University of Pretoria", desc: "One of the largest research universities in SA.", url: "https://www.up.ac.za" }, { name: "University of Johannesburg", desc: "Dynamic university with multiple campuses.", url: "https://www.uj.ac.za" }, { name: "University of KwaZulu-Natal", desc: "Premier university in KZN.", url: "https://www.ukzn.ac.za" }, { name: "Rhodes University", desc: "Small, prestigious university in Makhanda.", url: "https://www.ru.ac.za" }, { name: "University of the Western Cape", desc: "Historically disadvantaged institution with strong research.", url: "https://www.uwc.ac.za" }, { name: "North-West University", desc: "Multi-campus university with a strong online presence.", url: "https://www.nwu.ac.za" }, { name: "University of the Free State", desc: "Centrally located university in Bloemfontein.", url: "https://www.ufs.ac.za" }, { name: "Tshwane University of Technology", desc: "Largest residential university in SA.", url: "https://www.tut.ac.za" }, { name: "Durban University of Technology", desc: "Focuses on applied sciences and technology.", url: "https://www.dut.ac.za" }, { name: "Cape Peninsula University of Technology", desc: "Largest university of technology in the Western Cape.", url: "https://www.cput.ac.za" }, { name: "Central University of Technology", desc: "Technology-focused university in the Free State.", url: "https://www.cut.ac.za" }, { name: "Vaal University of Technology", desc: "Specializes in engineering and applied sciences.", url: "https://www.vut.ac.za" }, { name: "Mangosuthu University of Technology", desc: "Located in Umlazi, KwaZulu-Natal.", url: "https://www.mut.ac.za" }, { name: "Nelson Mandela University", desc: "Comprehensive university in Port Elizabeth.", url: "https://www.mandela.ac.za" }, { name: "Sefako Makgatho Health Sciences University", desc: "Specializes in health sciences.", url: "https://www.smu.ac.za" }, { name: "University of Limpopo", desc: "Rural-based university in Limpopo.", url: "https://www.ul.ac.za" }, { name: "University of Venda", desc: "Located in Thohoyandou, Limpopo.", url: "https://www.univen.ac.za" }, { name: "Walter Sisulu University", desc: "Multi-campus university in the Eastern Cape.", url: "https://www.wsu.ac.za" }, { name: "Sol Plaatje University", desc: "Newest university in the Northern Cape.", url: "https://www.spu.ac.za" }, { name: "University of Mpumalanga", desc: "New university located in Nelspruit.", url: "https://www.ump.ac.za" }, { name: "University of Fort Hare", desc: "Historic university in the Eastern Cape.", url: "https://www.ufh.ac.za" }, { name: "University of South Africa", desc: "Largest distance-learning university in Africa.", url: "https://www.unisa.ac.za" }, { name: "University of Zululand", desc: "Located in KwaDlangezwa, KZN.", url: "https://www.unizulu.ac.za" }
    ];

    const privateColleges = [ { name: "IIE (Varsity College, Vega, Rosebank)", desc: "The Independent Institute of Education.", url: "https://iie.ac.za" }, { name: "Eduvos", desc: "Multiple SA campuses, IT/Business focus.", url: "https://eduvos.com" }, { name: "STADIO", desc: "Distance and contact learning.", url: "https://stadio.ac.za" }, { name: "AFDA", desc: "Film, television, and performance arts school.", url: "https://afda.co.za" }, { name: "CTI Education Group", desc: "IT, Design, and Business.", url: "https://www.cti.ac.za" }, { name: "Richfield Graduate Institute", desc: "IT and Business qualifications.", url: "https://www.richfield.ac.za" }, { name: "Boston City Campus", desc: "Wide range of distance learning courses.", url: "https://www.boston.co.za" }, { name: "Regent Business School", desc: "Business and management qualifications.", url: "https://www.regent.ac.za" }, { name: "MANCOSA", desc: "Management College of Southern Africa.", url: "https://www.mancosa.co.za" }, { name: "Regenesys Business School", desc: "Business and leadership development.", url: "https://www.regenesys.net" } ];

    const tvetData = { "Eastern Cape": ["Buffalo City", "Eastcape Midlands", "Ikhala", "Ingwe", "King Hintsa", "King Sabata Dalindyebo", "Lovedale", "Port Elizabeth"], "Free State": ["Flavius Mareka", "Goldfields", "Maluti", "Motheo"], "Gauteng": ["Central Johannesburg", "Ekurhuleni East", "Ekurhuleni West", "Sedibeng", "South West Gauteng", "Tshwane North", "Tshwane South", "Western"], "KwaZulu-Natal": ["Coastal", "Elangeni", "Esayidi", "Majuba", "Mnambithi", "Mthashana", "Thekwini", "uMfolozi", "Umfolozi"], "Limpopo": ["Capricorn", "Lephalale", "Letaba", "Mopani", "Sekhukhune", "Vhembe", "Waterberg"], "Mpumalanga": ["Ehlanzeni", "Gert Sibande", "Nkangala"], "North West": ["Orbit", "Taletso", "Vuselela"], "Northern Cape": ["Northern Cape Rural", "Northern Cape Urban"], "Western Cape": ["Boland", "Cape Town", "College of Cape Town", "False Bay", "Northlink", "South Cape", "West Coast"] };

    const uniLinks = { "University of Cape Town": "https://www.uct.ac.za/main/apply/undergraduate", "Wits University": "https://www.wits.ac.za/study-at-wits/apply/", "Stellenbosch University": "https://www.sun.ac.za/english/maties/Pages/default.aspx", "University of Pretoria": "https://www.up.ac.za/apply", "University of Johannesburg": "https://www.uj.ac.za/apply/", "University of KwaZulu-Natal": "https://www.ukzn.ac.za/apply/", "Rhodes University": "https://www.ru.ac.za/apply/", "University of the Western Cape": "https://www.uwc.ac.za/apply/Pages/default.aspx", "North-West University": "https://studies.nwu.ac.za/apply", "University of the Free State": "https://www.ufs.ac.za/apply", "Tshwane University of Technology": "https://www.tut.ac.za/apply", "Durban University of Technology": "https://www.dut.ac.za/apply/", "Cape Peninsula University of Technology": "https://www.cput.ac.za/study/apply", "Central University of Technology": "https://www.cut.ac.za/apply/", "Vaal University of Technology": "https://www.vut.ac.za/apply/", "Mangosuthu University of Technology": "https://www.mut.ac.za/apply/", "Nelson Mandela University": "https://www.mandela.ac.za/Study-at-Mandela/Apply", "Sefako Makgatho": "https://www.smu.ac.za/apply/", "University of Limpopo": "https://www.ul.ac.za/apply/", "University of Venda": "https://www.univen.ac.za/apply/", "Walter Sisulu University": "https://www.wsu.ac.za/apply/", "Sol Plaatje University": "https://www.spu.ac.za/apply/", "University of Mpumalanga": "https://www.ump.ac.za/apply/", "University of Fort Hare": "https://www.ufh.ac.za/apply/", "University of South Africa": "https://www.unisa.ac.za/sites/corporate/default/Apply-for-admission", "University of Zululand": "https://www.unizulu.ac.za/apply/", "Varsity College": "https://iie.ac.za/apply/", "Eduvos": "https://eduvos.com/apply/", "AFDA": "https://afda.co.za/apply/", "TVET College": "https://www.dhet.gov.za/SitePages/TVETColleges.aspx", "MANCOSA": "https://www.mancosa.co.za/apply/" };

    const courseData = [ { field: "Computer Science", name: "University of Cape Town", desc: "BSc Computer Science", aps: 38 }, { field: "Computer Science", name: "Wits University", desc: "BSc Computer Science", aps: 38 }, { field: "Computer Science", name: "Stellenbosch University", desc: "BSc Computer Science", aps: 37 }, { field: "Computer Science", name: "University of Pretoria", desc: "BSc Computer Science", aps: 35 }, { field: "Computer Science", name: "University of Johannesburg", desc: "BSc Computer Science", aps: 32 }, { field: "Computer Science", name: "Tshwane University of Technology", desc: "Diploma in IT", aps: 24 }, { field: "Computer Science", name: "Varsity College", desc: "Bachelor of IT", aps: 26 }, { field: "Computer Science", name: "Eduvos", desc: "BSc Information Technology", aps: 22 }, { field: "Computer Science", name: "TVET College", desc: "NC(V) IT and Computer Science", aps: 15 }, { field: "Engineering", name: "University of Cape Town", desc: "BSc Mechanical Engineering", aps: 42 }, { field: "Engineering", name: "Wits University", desc: "BSc Electrical Engineering", aps: 42 }, { field: "Engineering", name: "Stellenbosch University", desc: "BEng Civil Engineering", aps: 40 }, { field: "Engineering", name: "University of Pretoria", desc: "BEng Chemical Engineering", aps: 38 }, { field: "Engineering", name: "Tshwane University of Technology", desc: "Diploma in Chemical Engineering", aps: 28 }, { field: "Engineering", name: "TVET College", desc: "NC(V) Engineering", aps: 15 }, { field: "Business & Commerce", name: "University of Cape Town", desc: "BCom Accounting", aps: 39 }, { field: "Business & Commerce", name: "Wits University", desc: "BCom Economics", aps: 38 }, { field: "Business & Commerce", name: "Stellenbosch University", desc: "BCom Management Sciences", aps: 36 }, { field: "Business & Commerce", name: "University of Johannesburg", desc: "BCom Accounting", aps: 30 }, { field: "Business & Commerce", name: "TVET College", desc: "NC(V) Business Management", aps: 15 }, { field: "Health Sciences & Medicine", name: "University of KwaZulu-Natal", desc: "Bachelor of Medicine (MBChB)", aps: 45 }, { field: "Health Sciences & Medicine", name: "University of Cape Town", desc: "Bachelor of Medicine (MBChB)", aps: 45 }, { field: "Health Sciences & Medicine", name: "Wits University", desc: "Bachelor of Medicine (MBChB)", aps: 44 }, { field: "Health Sciences & Medicine", name: "TVET College", desc: "NC(V) Health Sciences", aps: 15 }, { field: "Law & Legal Studies", name: "University of Cape Town", desc: "LLB Law", aps: 40 }, { field: "Law & Legal Studies", name: "Wits University", desc: "LLB Law", aps: 39 }, { field: "Law & Legal Studies", name: "Stellenbosch University", desc: "LLB Law", aps: 38 }, { field: "Law & Legal Studies", name: "University of South Africa", desc: "LLB Law (Distance)", aps: 24 }, { field: "Arts & Humanities", name: "University of Cape Town", desc: "BA Humanities", aps: 32 }, { field: "Arts & Humanities", name: "Wits University", desc: "BA English Literature", aps: 34 }, { field: "Arts & Humanities", name: "AFDA", desc: "BA Motion Picture", aps: 25 }, { field: "Agriculture & Environmental Sciences", name: "Stellenbosch University", desc: "BSc Agriculture", aps: 34 }, { field: "Agriculture & Environmental Sciences", name: "University of Pretoria", desc: "BSc Animal Science", aps: 32 }, { field: "Life Sciences & Biology", name: "Stellenbosch University", desc: "BSc Biological Sciences", aps: 34 }, { field: "Life Sciences & Biology", name: "University of Cape Town", desc: "BSc Molecular Biology", aps: 38 }, { field: "Physical Sciences & Mathematics", name: "University of the Witwatersrand", desc: "BSc Physics", aps: 38 }, { field: "Physical Sciences & Mathematics", name: "University of Cape Town", desc: "BSc Chemistry", aps: 37 }, { field: "Education & Teaching", name: "University of Pretoria", desc: "BEd Foundation Phase", aps: 28 }, { field: "Education & Teaching", name: "TVET College", desc: "NC(V) Education and Development", aps: 15 }, { field: "Social Sciences & Psychology", name: "University of South Africa", desc: "BA Psychology", aps: 22 }, { field: "Social Sciences & Psychology", name: "University of Cape Town", desc: "BSocSci Psychology", aps: 36 }, { field: "Media & Communication", name: "Rhodes University", desc: "BA Journalism", aps: 30 }, { field: "Media & Communication", name: "Varsity College", desc: "BA Corporate Communication", aps: 26 }, { field: "Performing & Visual Arts", name: "University of Cape Town", desc: "Diploma in Fine Art", aps: 28 }, { field: "Performing & Visual Arts", name: "AFDA", desc: "BA Live Performance", aps: 25 }, { field: "Sport Science & Human Movement", name: "University of Pretoria", desc: "BSc Sport Science", aps: 32 }, { field: "Sport Science & Human Movement", name: "Stellenbosch University", desc: "BSc Human Movement", aps: 33 }, { field: "Tourism & Hospitality", name: "Cape Peninsula University of Technology", desc: "Diploma in Tourism", aps: 24 }, { field: "Tourism & Hospitality", name: "TVET College", desc: "NC(V) Hospitality", aps: 15 }, { field: "Architecture & Built Environment", name: "University of Pretoria", desc: "BSc Architecture", aps: 35 }, { field: "Architecture & Built Environment", name: "University of Cape Town", desc: "BAS Architecture", aps: 38 } ];

    const allSAFields = [ "Agriculture & Environmental Sciences", "Architecture & Built Environment", "Arts & Humanities", "Business & Commerce", "Computer Science", "Education & Teaching", "Engineering", "Health Sciences & Medicine", "Law & Legal Studies", "Life Sciences & Biology", "Media & Communication", "Performing & Visual Arts", "Physical Sciences & Mathematics", "Social Sciences & Psychology", "Sport Science & Human Movement", "Tourism & Hospitality" ];

    const subjectOptions = [ "English Home Language", "Afrikaans Home Language", "Mathematics", "Mathematical Literacy", "Life Orientation", "Physical Sciences", "Life Sciences", "Accounting", "Business Studies", "Economics", "Geography", "History", "Information Technology", "Consumer Studies", "Tourism", "Other" ];

    const fundingData = [ { name: "NSFAS Bursary", desc: "Government funding for qualifying students from households earning up to R350,000 per year.", url: "http://www.nsfas.org.za" }, { name: "FNB Fund", desc: "Bursaries for top academic performers in specific fields of study.", url: "https://www.fnb.co.za" }, { name: "Cost Planning Guide", desc: "Calculate your expected expenses, including accommodation, textbooks, food, and transport.", url: "https://www.studentroom.co.za/student-budget-calculator/" } ];

    const supportData = [ { name: "Student Wellness & SADAG", desc: "Free counselling and mental health support for students. Call 0800 567 567.", url: "https://www.sadag.org" }, { name: "Academic Persistence", desc: "Access tutoring, study guides, and time management resources to help you graduate.", url: "https://www.unisa.ac.za/sites/corporate/default/Library/Library-services/Study-skills" }, { name: "Connectivity Resources", desc: "Information on zero-rated educational websites and data support for online learning.", url: "https://www.wits.ac.za/students/zero-rated-websites/" }, { name: "Accessible Learning", desc: "Disability support services, inclusive learning materials, and campus accessibility guides.", url: "https://www.uct.ac.za/main/students/disability-service" } ];

    // ==========================================
    // 2. DOM ELEMENTS
    // ==========================================
    const homeView = document.getElementById('heroSection');
    const aboutView = document.getElementById('aboutSection');
    const dashboardView = document.getElementById('appSection');
    const otherToolsView = document.getElementById('otherToolsSection');
    const advancedCalcView = document.getElementById('advancedCalcSection');
    const directoryView = document.getElementById('directorySection');
    const courseSearchView = document.getElementById('courseSearchSection');
    const fundingView = document.getElementById('fundingSection');
    const supportView = document.getElementById('supportSection');
    
    const startExploreBtn = document.getElementById('exploreBtn');
    const navAppBtn = document.getElementById('navApp');
    const navHomeBtn = document.getElementById('navHome');
    const navAboutBtn = document.getElementById('navAbout');
    const backFromAboutBtn = document.getElementById('backFromAboutBtn');
    
    const browseBtn = document.getElementById('browseBtn');
    const searchCourseBtn = document.getElementById('searchCourseBtn');
    const openAdvancedCalcBtn = document.getElementById('openAdvancedCalcBtn');
    const openOtherToolsBtn = document.getElementById('openOtherToolsBtn');
    const backFromOtherToolsBtn = document.getElementById('backFromOtherToolsBtn');
    
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

    const tabPublic = document.getElementById('tabPublic');
    const tabPrivate = document.getElementById('tabPrivate');
    const tabTvet = document.getElementById('tabTvet');
    const privateWarning = document.getElementById('privateWarning');
    const universityGrid = document.getElementById('universityGrid');

    // ==========================================
    // 3. NAVIGATION LOGIC
    // ==========================================
    function hideAllViews() {
        homeView.classList.add('hidden'); 
        aboutView.classList.add('hidden'); 
        dashboardView.classList.add('hidden');
        otherToolsView.classList.add('hidden'); 
        advancedCalcView.classList.add('hidden');
        directoryView.classList.add('hidden'); 
        courseSearchView.classList.add('hidden');
        fundingView.classList.add('hidden'); 
        supportView.classList.add('hidden');
    }

    function showHome() { hideAllViews(); homeView.classList.remove('hidden'); }
    function showAbout() { hideAllViews(); aboutView.classList.remove('hidden'); }
    function showDashboard() { hideAllViews(); dashboardView.classList.remove('hidden'); simpleResultsGrid.innerHTML = ''; simpleApsInput.value = ''; }
    function showOtherTools() { hideAllViews(); otherToolsView.classList.remove('hidden'); }
    function showAdvancedCalc() { hideAllViews(); advancedCalcView.classList.remove('hidden'); advancedResultsGrid.innerHTML = ''; }
    function showDirectory() { hideAllViews(); directoryView.classList.remove('hidden'); switchTab('public'); }
    function showCourseSearch() { hideAllViews(); courseSearchView.classList.remove('hidden'); populateDropdown(); }
    function showFunding() { hideAllViews(); fundingView.classList.remove('hidden'); renderFunding(); }
    function showSupport() { hideAllViews(); supportView.classList.remove('hidden'); renderSupport(); }

    startExploreBtn.addEventListener('click', showDashboard);
    navAppBtn.addEventListener('click', (e) => { e.preventDefault(); showDashboard(); });
    navHomeBtn.addEventListener('click', (e) => { e.preventDefault(); showHome(); });
    navAboutBtn.addEventListener('click', (e) => { e.preventDefault(); showAbout(); }); 
    backFromAboutBtn.addEventListener('click', showDashboard); 
    
    browseBtn.addEventListener('click', showDirectory);
    searchCourseBtn.addEventListener('click', showCourseSearch);
    openAdvancedCalcBtn.addEventListener('click', showAdvancedCalc);
    openOtherToolsBtn.addEventListener('click', showOtherTools);
    backFromOtherToolsBtn.addEventListener('click', showDashboard);
    navFundingBtn.addEventListener('click', showFunding);
    navSupportBtn.addEventListener('click', showSupport);
    backToDashboardBtn.addEventListener('click', showDashboard);
    backFromDirBtn.addEventListener('click', showDashboard);
    backFromCourseBtn.addEventListener('click', showDashboard);
    backFromFundingBtn.addEventListener('click', showOtherTools);
    backFromSupportBtn.addEventListener('click', showOtherTools);

    // ==========================================
    // 4. DIRECTORY TABS
    // ==========================================
    function switchTab(type) {
        universityGrid.innerHTML = '';
        tabPublic.classList.remove('active'); tabPrivate.classList.remove('active'); tabTvet.classList.remove('active');
        privateWarning.classList.add('hidden'); universityGrid.style.display = 'grid'; 

        if (type === 'public') { tabPublic.classList.add('active'); renderCards(publicUniversities); } 
        else if (type === 'private') { tabPrivate.classList.add('active'); privateWarning.classList.remove('hidden'); renderCards(privateColleges); } 
        else if (type === 'tvet') { tabTvet.classList.add('active'); renderTvetPage(); }
    }

    tabPublic.addEventListener('click', () => switchTab('public'));
    tabPrivate.addEventListener('click', () => switchTab('private'));
    tabTvet.addEventListener('click', () => switchTab('tvet'));

    function renderCards(data) {
        data.forEach(inst => {
            const card = document.createElement('div'); card.classList.add('card'); card.style.borderTopColor = "#0056b3"; 
            card.innerHTML = `<h3>${inst.name}</h3><p style="color: #666; margin-bottom: 0.5rem;">${inst.desc}</p><a href="${inst.url}" target="_blank" rel="noopener noreferrer" class="apply-btn">Visit Site &rarr;</a>`;
            universityGrid.appendChild(card);
        });
    }

    function renderTvetPage() {
        universityGrid.style.display = 'block';
        let html = `<div style="text-align: left; margin-bottom: 2rem;"><h3>All Public TVET Colleges</h3><p style="color: #555; margin-top: 0.5rem;">TVET colleges offer practical, job-ready skills.</p></div>`;
        for (const [province, colleges] of Object.entries(tvetData)) {
            html += `<div style="margin-bottom: 2rem; text-align: left;"><h4 style="color: #0056b3; margin-bottom: 1rem;">${province}</h4><div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">`;
            colleges.forEach(college => {
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(college + ' TVET College')}`;
                html += `<div style="background: white; padding: 1rem; border-radius: 5px; border: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;"><span style="font-weight: 500; color: #333;">${college} TVET</span><a href="${searchUrl}" target="_blank" rel="noopener noreferrer" style="color: #0056b3; text-decoration: none; font-size: 0.85rem; font-weight: bold;">Search &rarr;</a></div>`;
            });
            html += `</div></div>`;
        }
        universityGrid.innerHTML = html;
    }

    // ==========================================
    // 5. APS CALCULATORS
    // ==========================================
    simpleCalcBtn.addEventListener('click', () => {
        const userAps = simpleApsInput.value;
        if (!userAps || userAps < 0) { alert("Please enter a valid APS score!"); return; }
        const score = parseInt(userAps);
        simpleResultsGrid.innerHTML = ''; 

        pathwayData.forEach(path => {
            const card = document.createElement('div'); card.classList.add('card');
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

    allUniversities.forEach(uni => {
        const option = document.createElement('option'); option.value = uni; option.textContent = uni; uniSelect.appendChild(option);
    });

    function addSubjectRow(defaultSubject = "Other") {
        const row = document.createElement('div'); row.classList.add('subject-row');
        const select = document.createElement('select'); select.className = 'subject-select';
        subjectOptions.forEach(subject => {
            const option = document.createElement('option'); option.value = subject; option.textContent = subject;
            if (subject === defaultSubject) option.selected = true; select.appendChild(option);
        });
        const input = document.createElement('input'); input.type = 'number'; input.className = 'subject-mark'; input.placeholder = 'Mark %'; input.min = '0'; input.max = '100';
        const removeBtn = document.createElement('button'); removeBtn.className = 'remove-btn'; removeBtn.textContent = 'Remove'; removeBtn.type = 'button';
        removeBtn.addEventListener('click', () => row.remove());
        row.appendChild(select); row.appendChild(input); row.appendChild(removeBtn); subjectList.appendChild(row);
    }

    addSubjectRow("English Home Language"); addSubjectRow("Mathematics"); addSubjectRow("Life Orientation");
    addSubjectRow("Other"); addSubjectRow("Other"); addSubjectRow("Other");
    addSubjectBtn.addEventListener('click', () => addSubjectRow());

    function getApsPoints(percent) {
        if (percent >= 80) return 7; if (percent >= 70) return 6; if (percent >= 60) return 5;
        if (percent >= 50) return 4; if (percent >= 40) return 3; if (percent >= 30) return 2; return 1;
    }

    advancedCalcBtn.addEventListener('click', () => {
        const rows = document.querySelectorAll('.subject-row'); let apsArray = [];
        rows.forEach(row => {
            const subjectName = row.querySelector('.subject-select').value;
            const markValue = row.querySelector('.subject-mark').value;
            if (markValue !== "" && markValue !== null && subjectName !== "Life Orientation") {
                apsArray.push({ subject: subjectName, points: getApsPoints(parseInt(markValue)) });
            }
        });
        if (apsArray.length < 6) { alert("Please enter marks for at least 6 subjects (excluding Life Orientation)."); return; }
        apsArray.sort((a, b) => b.points - a.points);
        const totalAps = apsArray.slice(0, 6).reduce((sum, item) => sum + item.points, 0);
        advancedResultsGrid.innerHTML = `<h2 style="width:100%; text-align:center; color:#0056b3; margin-bottom: 2rem;">Your Total APS: ${totalAps} <br><span style="font-size:1rem; color:#666; font-weight:normal;">(Based on top 6 subjects)</span></h2>`;

        pathwayData.forEach(path => {
            const card = document.createElement('div'); card.classList.add('card');
            let resultHtml = "";
            if (totalAps >= path.apsRequired) {
                card.style.borderTopColor = "#2e7d32"; resultHtml = `<p style="color: #2e7d32; font-weight: bold;">Qualified</p><p>You meet the required APS of ${path.apsRequired}.</p>`;
            } else {
                card.style.borderTopColor = "#d32f2f"; resultHtml = `<p style="color: #d32f2f; font-weight: bold;">Not Qualified</p><div style="background-color: #fff3e0; padding: 1rem; border-radius: 5px; margin-top: 10px;"><p style="color: #e65100; font-weight: bold;">Alternative:</p><p>${path.alternative}</p></div>`;
            }
            card.innerHTML = `<h3>${path.name}</h3><p><strong>Course:</strong> ${path.course}</p><hr>${resultHtml}`; advancedResultsGrid.appendChild(card);
        });
    });

    // ==========================================
    // 6. COURSE SEARCH
    // ==========================================
    function populateDropdown() {
        if (fieldSelect.options.length > 1) return; 
        allSAFields.forEach(field => {
            const option = document.createElement('option'); option.value = field; option.textContent = field; fieldSelect.appendChild(option);
        });
    }

    fieldSelect.addEventListener('change', (e) => {
        const selectedField = e.target.value; courseResultsGrid.innerHTML = '';
        const filteredCourses = courseData.filter(course => course.field === selectedField);
        if (filteredCourses.length === 0) {
            courseResultsGrid.innerHTML = `<div class="card" style="border-top-color: #e65100; grid-column: 1 / -1; text-align: center;"><h3>No courses listed yet</h3><p>We are currently building our database for <strong>${selectedField}</strong>.</p></div>`;
            return;
        }
        filteredCourses.forEach(course => {
            const card = document.createElement('div'); card.classList.add('card'); card.style.borderTopColor = "#0056b3"; 
            const directLink = uniLinks[course.name] || "https://www.google.com/search?q=" + encodeURIComponent(course.name + ' prospectus');
            card.innerHTML = `<h3>${course.name}</h3><p><strong>Course:</strong> ${course.desc}</p><p style="color: #0056b3; font-weight: bold;">Required APS: ${course.aps}</p><a href="${directLink}" target="_blank" rel="noopener noreferrer" class="apply-btn">View Prospectus &rarr;</a>`;
            courseResultsGrid.appendChild(card);
        });
    });

    // ==========================================
    // 7. FUNDING & SUPPORT
    // ==========================================
    function renderFunding() {
        fundingGrid.innerHTML = '';
        fundingData.forEach(item => {
            const card = document.createElement('div'); card.classList.add('card'); card.style.borderTopColor = "#2e7d32"; 
            card.innerHTML = `<h3>${item.name}</h3><p>${item.desc}</p><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="apply-btn">View Details &rarr;</a>`;
            fundingGrid.appendChild(card);
        });
    }

    function renderSupport() {
        supportGrid.innerHTML = '';
        supportData.forEach(item => {
            const card = document.createElement('div'); card.classList.add('card'); card.style.borderTopColor = "#e65100"; 
            card.innerHTML = `<h3>${item.name}</h3><p>${item.desc}</p><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="apply-btn">Access Resource &rarr;</a>`;
            supportGrid.appendChild(card);
        });
    }

    // ==========================================
    // 8. CHATBOT LOGIC & DRAGGABLE FEATURE
    // ==========================================
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // --- DRAGGABLE LOGIC ---
    let isDragging = false;

    function makeDraggable(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown;

        function dragMouseDown(e) {
            // Only left click (button 0) or touch
            if (e.button !== 0 && !e.touches) return;
            // Don't drag if clicking the close button
            if (e.target.id === 'chatbot-close') return;

            isDragging = false;
            let clientX = e.clientX || e.touches[0].clientX;
            let clientY = e.clientY || e.touches[0].clientY;
            pos3 = clientX;
            pos4 = clientY;
            
            document.onmouseup = closeDragElement;
            document.ontouchend = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchmove = elementDrag;
        }

        function elementDrag(e) {
            isDragging = true;
            let clientX = e.clientX || e.touches[0].clientX;
            let clientY = e.clientY || e.touches[0].clientY;
            
            pos1 = pos3 - clientX;
            pos2 = pos4 - clientY;
            pos3 = clientX;
            pos4 = clientY;
            
            // Calculate new position
            let newTop = elmnt.offsetTop - pos2;
            let newLeft = elmnt.offsetLeft - pos1;

            // Keep within screen bounds
            if (newTop < 0) newTop = 0;
            if (newLeft < 0) newLeft = 0;
            if (newTop > window.innerHeight - elmnt.offsetHeight) newTop = window.innerHeight - elmnt.offsetHeight;
            if (newLeft > window.innerWidth - elmnt.offsetWidth) newLeft = window.innerWidth - elmnt.offsetWidth;

            // Apply new position (switch from bottom/right to top/left)
            elmnt.style.bottom = 'auto';
            elmnt.style.right = 'auto';
            elmnt.style.top = newTop + "px";
            elmnt.style.left = newLeft + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.ontouchmove = null;
        }
    }

    // Apply draggable to the FAB button and the Chat Header
    if (chatbotToggle && chatbotWindow) {
        makeDraggable(chatbotToggle);
        makeDraggable(chatbotWindow.querySelector('.chat-header'));

        // Toggle Chatbot Window
        chatbotToggle.addEventListener('click', (e) => { 
            if (isDragging) {
                e.preventDefault();
                return; // Don't open if the user was dragging
            }
            chatbotWindow.classList.toggle('hidden'); 
        });
        
        chatbotClose.addEventListener('click', () => { 
            chatbotWindow.classList.add('hidden'); 
        });

        // --- CHAT MESSAGE LOGIC ---
        function appendMessage(sender, text, actionFn = null, actionText = "") {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
            msgDiv.innerHTML = text; 
            
            if (actionFn && actionText) {
                const btn = document.createElement('button');
                btn.className = 'chat-action-btn';
                btn.textContent = actionText;
                btn.addEventListener('click', () => {
                    actionFn();
                    chatbotWindow.classList.add('hidden'); 
                });
                msgDiv.appendChild(document.createElement('br'));
                msgDiv.appendChild(btn);
            }
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function handleChat() {
            const text = chatInput.value.trim();
            if (!text) return;
            
            appendMessage('user', text);
            chatInput.value = '';

            setTimeout(() => {
                const lowerText = text.toLowerCase();
                let response = "";
                let action = null;
                let actionText = "";

                if (lowerText.includes('aps') || lowerText.includes('score') || lowerText.includes('calculate')) {
                    response = "You can calculate your APS score on the Dashboard. We have a simple calculator and an advanced one that uses your Matric marks.";
                    action = showDashboard; actionText = "Go to Calculator";
                } else if (lowerText.includes('fund') || lowerText.includes('nsfas') || lowerText.includes('money') || lowerText.includes('bursary')) {
                    response = "We have a whole section dedicated to Funding & Cost Planning, including NSFAS information!";
                    action = showFunding; actionText = "View Funding";
                } else if (lowerText.includes('support') || lowerText.includes('mental') || lowerText.includes('wellness') || lowerText.includes('help')) {
                    response = "Your well-being is important. We offer links to SADAG counselling, academic persistence tips, and accessible learning resources.";
                    action = showSupport; actionText = "View Support";
                } else if (lowerText.includes('course') || lowerText.includes('study') || lowerText.includes('search')) {
                    response = "You can search for courses by field of study and see which universities offer them.";
                    action = showCourseSearch; actionText = "Search Courses";
                } else if (lowerText.includes('university') || lowerText.includes('tvet') || lowerText.includes('college') || lowerText.includes('directory')) {
                    response = "Browse all 26 public universities, private colleges, and TVET colleges in our Directory.";
                    action = showDirectory; actionText = "Browse Directory";
                } else if (lowerText.includes('about') || lowerText.includes('who made') || lowerText.includes('hackathon')) {
                    response = "VarsityPath was built for the FNB Hackathon! You can read all about our mission on the About page.";
                    action = showAbout; actionText = "Read About Us";
                } else if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
                    response = "Hello! I'm your VarsityPath assistant. Ask me about calculating your APS, finding funding, or searching for courses.";
                } else {
                    response = "I'm not sure about that one! Try asking about: 'Calculate APS', 'Funding options', 'Find a course', or 'About the app'.";
                }

                appendMessage('bot', response, action, actionText);
            }, 600);
        }

        chatSend.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleChat(); });
    }


});