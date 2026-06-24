        const WHATSAPP_PHONE_NUMBER = "233542424592";

        const coursesData = {
            it: [
                { title: "Introduction to Computing", level: "JHS Track", desc: "Master physical hardware components, typing speeds, vital operating system shorts, and standard filesystem organization arrays.", img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&auto=format&fit=crop&q=80" },
                { title: "Internet Safety & Research", desc: "Differentiate network verification metrics, toggle privacy sandboxes, and maximize modern academic search parameters safely.", level: "JHS Track", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80" },
                { title: "Microsoft Office Essentials", desc: "Structure academic papers in Word, deploy financial math matrix tables in Excel, and design presentation sheets.", level: "JHS Track", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80" },
                { title: "Google Workspace Systems", desc: "Synchronize cloud folders using Drive endpoints, collaborate inside live Document sheets, and interface classroom pipelines.", level: "JHS Track", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80" },
                { title: "PC Diagnostics & Maintenance", desc: "Examine board layouts, identify diagnostic fault codes, resolve registry crashes, and maintain hardware lifecycles properly.", level: "SHS Track", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80" },
                { title: "Foundations of Cyber Security", desc: "Analyze packet cryptography baselines, identify engineering attack methodologies, and protect personal local profiles.", level: "SHS Track", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80" }
            ],
            math: [
                { title: "JHS Core Number Operations", level: "JHS Track", desc: "Govern fractional divisions, percentage matrix expansions, sets structures, and structural numeric properties under NaCCA specifications.", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80" },
                { title: "JHS Expressions & Equations", level: "JHS Track", desc: "Formulate simple linear relations, balance balanced algebraic configurations, and analyze coordinate mapping formulas.", img: "https://images.unsplash.com/photo-1453733190148-c44698c26588?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Core: Sets & Surds", level: "SHS Core Math", desc: "Master three-variable Venn mapping formulas, radical expressions simplification patterns, and rationalization parameters for WASSCE fields.", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Core: Algebraic Processes", level: "SHS Core Math", desc: "Resolve complex concurrent simultaneous functions, determine parabolic roots, and change variables systematically.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Core: Plane Geometry", level: "SHS Core Math", desc: "Evaluate angular circle structures, trigonometry heights, angular displacement calculations, and geometric polygon definitions.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Elective: Coordinate Geometry", level: "SHS Elective Math", desc: "Analyze vector loci parameters, calculate gradient tracking perpendicular lines, and chart absolute circle properties.", img: "https://images.unsplash.com/photo-1596495578065-6e07cf002d31?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Elective: Calculus Foundations", level: "SHS Elective Math", desc: "Trace first-principle differentiation paths, resolve quotient rules, and determine graphical integration spaces.", img: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?w=600&auto=format&fit=crop&q=80" }
            ],
            science: [
                { title: "JHS Integrated Science: Ecosystems", level: "JHS Science", desc: "Examine biological communities, structural food grid webs, nutrient replenishment, and public environmental standard metrics.", img: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=600&auto=format&fit=crop&q=80" },
                { title: "JHS Integrated Science: Chemistry Basics", level: "JHS Science", desc: "Introduction to sorting basic substances, tracking simple color metrics via pH scales, and tracking agricultural properties.", img: "https://images.unsplash.com/photo-1614963326505-843867e2d73a?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Core Science: Carbon Systems", level: "SHS Core Science", desc: "Identify functional hydrocarbon groups, manage fossil distillation parameters, and balance complex organic formulas.", img: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Core Science: Human Genetics", level: "SHS Core Science", desc: "Track hereditary genotype variances, configure mitosis charts, and evaluate physiological mutation curves.", img: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Elective Biology: Cell Structures", level: "SHS Elective Bio", desc: "Isolate cellular diffusion membranes, measure passive transport forces, and chart complex enzymatic conversion models.", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&auto=format&fit=crop&q=80" },
                { title: "SHS Elective Chemistry: Shell Orbitals", level: "SHS Elective Chem", desc: "Map electron shell arrays, map periodic patterns, determine bond hybrid models, and configure element matrix charts.", img: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&auto=format&fit=crop&q=80" }
            ],
            physics: [
                { title: "Introduction to Matter & Metrics", desc: "Study physical constants, convert metric measurements, and chart phase boundaries among solids, liquids, and vapors.", level: "JHS Track", img: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=80" },
                { title: "Basic Energy Conversions", desc: "Calculate mechanical transformations, conversion laws, thermal movements, and basic circuit loops from early grids.", level: "JHS Track", img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80" },
                { title: "Kinematics & Force Dynamics", desc: "Chart displacement curves, apply gravitational constant formulas, and deploy Newton's equations ($F=ma$).", level: "SHS Track", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&auto=format&fit=crop&q=80" },
                { title: "Ohm's Law & Circuit Infrastructures", desc: "Evaluate resistor configuration metrics, internal electrical potentials ($V=IR$), and loop current maps cleanly.", level: "SHS Track", img: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&auto=format&fit=crop&q=80" },
                { title: "Classical Fields & Electrostatics", desc: "Deploy Coulomb fields across point charges, determine dialectic metrics, and construct energy capacitance models.", level: "Pre-University", img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&auto=format&fit=crop&q=80" }
            ],
            cs: [
                { title: "Visual Logic Blocks (Scratch)", desc: "Build structural logical branching paths, loops, arrays, and variables inside graphic game environments.", level: "JHS CS Track", img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=80" },
                { title: "Python Software Engineering", desc: "Develop console tools with structural arrays, manage conditional trees, declare arguments, and manage document endpoints.", level: "SHS CS Track", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80" },
                { title: "Web Architectures (JS/CSS)", desc: "Deploy custom site frames, compile styling configurations, and execute basic local data object operations.", level: "SHS CS Track", img: "https://images.unsplash.com/photo-1621839673705-6837da52401e?w=600&auto=format&fit=crop&q=80" },
                { title: "Object-Oriented Design (Java/C++)", desc: "Master encapsulated classes, inheritance parameters, polymorphism models, and optimize runtime engineering configurations.", level: "Pre-University CS", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80" },
                { title: "Data Structures & Big-O Notation", desc: "Evaluate linked allocation frames, search tree models, and analyze computational complexities ($O(n \\log n)$) perfectly.", level: "Pre-University CS", img: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=600&auto=format&fit=crop&q=80" }
            ],
            professional: [
                { title: "Crisis Triage & Recovery Paths", level: "Systemic Situation", desc: "Organize architecture rollback plans, coordinate major infrastructure failures, and structure status loops cleanly.", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&auto=format&fit=crop&q=80" },
                { title: "Incident Management (ITIL Engine)", level: "Systemic Situation", desc: "Build helpdesk tiers, verify response times, balance operations metrics, and handle organizational changes.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80" },
                { title: "CompTIA A+ Platform Core", level: "Certification Prep", desc: "Complete training track mapping client kernels, configuration steps, registry repairs, and setup models.", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80" },
                { title: "Cisco CCNA Route Configuration", level: "Certification Prep", desc: "Establish terminal control over virtual networks, configure routing protocols, and design firewall rules.", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80" }
            ]
        };

        function renderCourses(category) {
            const grid = document.getElementById('courses-grid');
            grid.innerHTML = ''; 

            coursesData[category].forEach((course) => {
                let badgeStyle = "bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-200 border-green-200 dark:border-green-800";
                if(course.level.includes("SHS") || course.level.includes("Core")) {
                    badgeStyle = "bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-200 border-orange-200 dark:border-orange-800";
                }
                if(course.level.includes("Elective") || course.level.includes("Bio") || course.level.includes("Chem")) {
                    badgeStyle = "bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-200 border-red-200 dark:border-red-800";
                }
                if(course.level.includes("Pre-University")) {
                    badgeStyle = "bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border-purple-200 dark:border-purple-800";
                }
                if(course.level === "Systemic Situation") {
                    badgeStyle = "bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border-blue-200 dark:border-blue-800";
                }
                if(course.level === "Certification Prep") {
                    badgeStyle = "bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800";
                }

                const card = document.createElement('div');
                card.className = "bg-white dark:bg-[#2c2c2e] rounded-3xl overflow-hidden border border-slate-200 dark:border-neutral-800 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300";
                
                card.innerHTML = `
                    <div class="h-48 overflow-hidden relative bg-slate-100 dark:bg-neutral-800">
                        <img src="${course.img}" alt="${course.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600';">
                        <span class="absolute top-4 left-4 text-[11px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md shadow-sm ${badgeStyle}">
                            ✓ ${course.level}
                        </span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div class="mb-6">
                            <h2 class="font-bold text-xl leading-snug mb-2 tracking-tight text-slate-900 dark:text-white">${course.title}</h2>
                            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">${course.desc}</p>
                        </div>
                        <button onclick="openModal('${course.title}', '${course.level}')" class="w-full py-3 px-4 bg-slate-100 dark:bg-neutral-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-slate-900 dark:text-white hover:text-white dark:hover:text-white font-bold text-sm rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 focus:outline-none">
                            Select Track
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function filterCategory(category) {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('text-slate-600', 'dark:text-slate-400');
            });
            
            const activeBtn = document.getElementById(`btn-${category}`);
            activeBtn.classList.add('active');
            activeBtn.classList.remove('text-slate-600', 'dark:text-slate-400');
            
            renderCourses(category);
        }

        function openModal(courseTitle, courseLevel) {
            const modal = document.getElementById('form-modal');
            const content = document.getElementById('modal-content');
            
            document.getElementById('target-course-title').innerText = courseTitle;
            document.getElementById('target-course-level').innerText = `Track: ${courseLevel}`;
            document.getElementById('whatsapp-admission-form').reset();

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('translate-y-full', 'sm:scale-95');
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('form-modal');
            const content = document.getElementById('modal-content');
            
            modal.classList.add('opacity-0');
            content.classList.add('translate-y-full', 'sm:scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function sendWhatsAppRegistration(event) {
            event.preventDefault();
            const selectedCourse = document.getElementById('target-course-title').innerText;
            const courseTrack = document.getElementById('target-course-level').innerText;
            const studentName = document.getElementById('student-name').value;
            const academicStatus = document.getElementById('student-level').value;
            const studentPhone = document.getElementById('student-phone').value;

            const textMessage = `*NEW ADMISSION APPLICATION*\n\n` +
                                `📚 *Course:* ${selectedCourse}\n` +
                                `🏷️ *${courseTrack}*\n\n` +
                                `👤 *Name:* ${studentName}\n` +
                                `🎓 *Level:* ${academicStatus}\n` +
                                `📞 *WhatsApp:* ${studentPhone}\n\n` +
                                `_Sent via Academy Dashboard System._`;

            window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(textMessage)}`, '_blank');
            closeModal();
        }

        function toggleTheme() {
            const doc = document.documentElement;
            const sunIcon = document.getElementById('theme-sun');
            const moonIcon = document.getElementById('theme-moon');
            
            if (doc.classList.contains('dark')) {
                doc.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                doc.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        }

        // Initialize UI states cleanly
        window.addEventListener('DOMContentLoaded', () => {
            renderCourses('it');
            const sunIcon = document.getElementById('theme-sun');
            const moonIcon = document.getElementById('theme-moon');
            if (document.documentElement.classList.contains('dark')) {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        });




        const legalContent = {
            // EXPLORE TRACKS
            it_core: {
                title: "1. IT Literacy Core",
                body: `
                    <p class="font-semibold text-white">Fundamental Digital Workspaces</p>
                    <p>Our foundational computing stream builds functional speed and hardware precision. Students explore filesystem architecture, local system configurations, and advanced keyboard shortcuts.</p>
                    <p>The core curriculum includes in-depth mastery of professional production packages like Microsoft Office Essentials and integrated cloud tools via Google Workspace pipelines.</p>
                `
            },
            math: {
                title: "2. Mathematics Track",
                body: `
                    <p class="font-semibold text-white">Analytical Reasoning & Quant Fundamentals</p>
                    <p>Designed to break down structural obstacles in quantitative learning, our mathematics tracks bridge fundamental operations with complex elective calculus.</p>
                    <p>Students cover operations on sets, fractional arrays, algebraic expressions, plane geometry variables, coordinate grids, and first-principle differentiation frameworks.</p>
                `
            },
            sciences: {
                title: "3. Integrated Sciences Track",
                body: `
                    <p class="font-semibold text-white">Empirical Analysis & Natural Systems</p>
                    <p>This stream tracks physical, organic, and life sciences through structured experimentation. Core concepts guide students through ecosystem layouts, balance vectors in food webs, and elementary chemistry parameters.</p>
                    <p>Advanced modules step up to structural organic systems, carbon hybrids, and cell division tracking matrices.</p>
                `
            },
            physics: {
                title: "4. Physics Advanced Track",
                body: `
                    <p class="font-semibold text-white">Classical Fields, Mechanics & Electronics</p>
                    <p>An intensive track focusing on standard physical variables and laws. Topics run through metric conversions, kinematic properties, and Newton’s equations of motion.</p>
                    <p>Advanced practical sessions introduce Ohm’s law circuit structures, energy capacitance models, and Coulomb field metrics for point-charge parameters.</p>
                `
            },
            cs: {
                title: "5. Computer Science Track",
                body: `
                    <p class="font-semibold text-white">Computational Logic & Software Engineering</p>
                    <p>A rigorous track moving from visual algorithm blocks (Scratch) up to syntax-driven software architectures.</p>
                    <p>Students build data pipelines in Python, deploy frontend Web Architectures, and practice Object-Oriented Principles in Java/C++ alongside runtime asymptotic complexity analysis ($O(n)$ notation).</p>
                `
            },
            certifications: {
                title: "6. Professional Certifications",
                body: `
                    <p class="font-semibold text-white">Industry-Recognized Career Credentials</p>
                    <p>Targeted training tracks built for global enterprise validation. This module preps students for professional vendor exams including the CompTIA A+ hardware pipeline and Cisco Certified Network Associate (CCNA) configurations.</p>
                    <p>Practical focus includes live router terminals, subnet masking arrays, and firewall protection rule setups.</p>
                `
            },

            // PROGRAM LEVELS
            jhs_track: {
                title: "Junior High School Track (JHS)",
                body: `
                    <p class="font-semibold text-white">Foundational Skill Pipelines</p>
                    <p>Tailored directly for early secondary students, this track prioritizes structural understanding and basic logical fluency. Curriculums map directly to contemporary national educational standards, setting clear paths for upcoming standardized BECE milestones.</p>
                `
            },
            shs_track: {
                title: "Senior High School Track (SHS)",
                body: `
                    <p class="font-semibold text-white">Core & Elective WASSCE Specialization</p>
                    <p>An intermediate academic tier optimized for secondary profiles. Modules step into advanced algebraic equations, organic carbon chemistry, elective tracking metrics, and technical diagnostic practices to secure high-performance outcomes.</p>
                `
            },
            pre_uni: {
                title: "Pre-University Prep Track",
                body: `
                    <p class="font-semibold text-white">Advanced University & Engineering Readiness</p>
                    <p>Designed for candidates transitioning into higher education STEM disciplines. Focus areas jump directly into structural database models, complex coordinate geometry, data structures, and classical field physics.</p>
                `
            },
            professional_cohorts: {
                title: "Professional Cohorts",
                body: `
                    <p class="font-semibold text-white">Enterprise Systems & Crisis Operations</p>
                    <p>Built specifically for active workforce profiles and system administrators. Training paths emphasize real-time crisis management triage, corporate ITIL service desks, network engineering, and advanced systems administration.</p>
                `
            },

            // OUR STANDARDS
            validation: {
                title: "Verifiable Digital Credentials",
                body: `
                    <p class="font-semibold text-white">Cryptographic Certificate Validation</p>
                    <p>Every graduate receives a distinct cryptographic registration hash. Employers, corporate partners, and university portals can check student validation marks directly against our active database to verify certificate authenticity.</p>
                `
            },
            nacca: {
                title: "NaCCA Compliance Framework",
                body: `
                    <p class="font-semibold text-white">National Curriculum Standards Alignment</p>
                    <p>All core Junior High and Senior High learning sequences are regularly cross-checked with the National Council for Curriculum and Assessment (NaCCA) directives, ensuring local relevance alongside international standards.</p>
                `
            },
            wassce: {
                title: "WASSCE Curriculum Integration",
                body: `
                    <p class="font-semibold text-white">West African Examinations Council Alignment</p>
                    <p>Our lesson pipelines trace the exact current syllabus parameters of the West African Senior School Certificate Examination. Practical exercises match rigorous exam testing matrices to maximize core score variables.</p>
                `
            },
            practical_assess: {
                title: "Practical Assessment Protocols",
                body: `
                    <p class="font-semibold text-white">Lab Execution & Project Milestones</p>
                    <p>We do not issue certifications based on attendance alone. Candidates must execute standalone project labs, document operational source arrays, troubleshoot live networks, or defend quantitative algorithms to earn passing credentials.</p>
                `
            },

            // DIRECT SUPPORT
            student_portals: {
                title: "Student Portal Registries",
                body: `
                    <p class="font-semibold text-white">Centralized Academic Portals</p>
                    <p>Authorized users can leverage secure student dashboards to access active course materials, check personal project evaluations, download lecture sheets, and preview pending credential metadata milestones.</p>
                `
            },
            admission_timelines: {
                title: "Admission Timelines & Cohorts",
                body: `
                    <p class="font-semibold text-white">Rolling Registration & Start Cycles</p>
                    <p>Applications are compiled via our rapid WhatsApp interface on a rolling basis. Group allocations open at regular intervals quarterly. Confirmed applicants will receive onboarding documentation with precise terminal lab schedules.</p>
                `
            },
            system_parameters: {
                title: "System Parameters & Requirements",
                body: `
                    <p class="font-semibold text-white">Technical Workspace Environments</p>
                    <p>To run development environments smoothly, we recommend machines with at least a dual-core CPU architecture, 4GB RAM capacity, and up-to-date web browsing engines capable of parsing WebSocket protocols and styling structures.</p>
                `
            },

            // ACADEMY VALUES
            digital_inclusion: {
                title: "Digital Inclusion Policy",
                body: `
                    <p class="font-semibold text-white">Democratizing Advanced Technology Systems</p>
                    <p>We work to remove access barriers to modern tech. Our mobile-optimized portals are intentionally designed for low data use, allowing any student across regional nodes to secure high-tier engineering skills regardless of local hardware limits.</p>
                `
            },
            technical_rigor: {
                title: "Technical Rigor Standards",
                body: `
                    <p class="font-semibold text-white">Excellence in Computational & Scientific Paths</p>
                    <p>We champion deep, comprehensive expertise over surface-level overviews. Course pathways explore structural core concepts from scratch, giving students a foundational mastery that easily translates to complex, real-world execution.</p>
                `
            },
            applied_ethics: {
                title: "Applied Digital Ethics Code",
                body: `
                    <p class="font-semibold text-white">Responsible Security and System Practices</p>
                    <p>Every technology track reinforces ethical boundaries. Students learn to navigate cybersecurity principles, open-source compliance frameworks, and AI data systems responsibly, safeguarding integrity across all online networks.</p>
                `
            },

            // MANDATORY FOOTER ANCHORS
            rights: {
                title: "All System Rights Reserved",
                body: `
                    <p class="font-semibold text-white">Intellectual Property & Domain Control</p>
                    <p>All core educational frameworks, source code, visual design schemes, mathematical syllabus modifications, coding lab parameters, and custom graphics displayed across the Advancement Academy system are protected under regional copyright and intellectual property protections.</p>
                    <p>Unauthorized duplication, indexing, layout framing, or mirroring of these structural interfaces without direct, explicit written certification from our administration is strictly prohibited.</p>
                `
            },
            privacy: {
                title: "Privacy Policy",
                body: `
                    <p class="font-semibold text-white">Data Stewardship Principle</p>
                    <p>Advancement Academy respects student digital privacy parameters. Data submitted through our instant application portals is processed locally to generate explicit registration objects. Information is formatted into an encrypted structure and handed directly to standard WhatsApp networking pipelines to reach our administrative office line (+233 54 242 4592).</p>
                `
            },
            admission: {
                title: "Terms of Admission",
                body: `
                    <p class="font-semibold text-white">Student Profile Integrity & Requirements</p>
                    <p>By using the instant registration system, applicants confirm that all self-selected levels are accurate reflections of their true academic profile. Official graduation credentials and certified document handovers depend entirely on completing required lab work.</p>
                `
            },
            sitemap: {
                title: "Portal Sitemap",
                body: `
                    <p class="font-semibold text-white">Structured Index Matrix</p>
                    <p>Our core framework tracks 6 distinct course branches (IT Literacy, Mathematics, Sciences, Physics, Computer Science, and Certifications) optimized across 4 primary levels ranging from Junior High platforms to Professional engineering cohorts.</p>
                `
            }
        };

        function openLegalModal(type) {
            const modal = document.getElementById('legal-modal');
            const content = document.getElementById('legal-modal-content');
            const doc = legalContent[type];

            if (!doc) return;

            document.getElementById('legal-modal-title').innerText = doc.title;
            document.getElementById('legal-modal-body').innerHTML = doc.body;

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('translate-y-full', 'sm:scale-95');
            }, 10);
        }

        function closeLegalModal(event) {
            if (event && event.target !== document.getElementById('legal-modal')) return;

            const modal = document.getElementById('legal-modal');
            const content = document.getElementById('legal-modal-content');
            
            modal.classList.add('opacity-0');
            content.classList.add('translate-y-full', 'sm:scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
 