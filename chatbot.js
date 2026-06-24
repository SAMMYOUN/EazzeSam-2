// ================= KNOWLEDGE ROUTING DICTIONARY =================
const CHAT_K_BASE = {
    "hours": "Eazzesam Technologies runs technical operations from Monday through Friday, 8:00 AM to 5:00 PM GMT.",
    "location": "Our physical corporate office and development hub is located in Accra, Greater Accra Region, Ghana.",
    "phone": "You can reach our active communications desk by calling +233 54 242 4592.",
    "email": "Official requests can be routed to eazzesamtechnologies@gmail.com.",
    "founder": "Eazzesam Technologies was founded by Mr. Samuel Kojo Appiah, our chief systems architect.",
    "services": "We deliver engineering models across Web App Development, Conversational AI Design, CCTV Network Deployments, and practical IT Competency Training.",
    "whatsapp": "You can chat with us via WhatsApp directly at +233 54 242 4592.",
    "it academy": "The Eazzesam Academy delivers strict hands-on instruction covering 10 engineering domains including programming, subnets, and databases.",
    "enrolling": "To enroll, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "javascript": "JavaScript is a powerful client and server-side programming language used to build interactive features, state changes, and live calculations.",
    "database": "A database is an organized, secure system collection managed on storage drives for rapid lookup queries and data processing.",
    "cybersecurity": "Cybersecurity comprises tactical engineering defenses designed to shield networks, databases, and application fields from unauthorized access.",
    "network": "A network is a structured system of connected devices, routers, and switches that facilitate data transmission across nodes.",
    "firewall": "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks.",
    "api": "An API (Application Programming Interface) is a set of protocols and tools that allows different software applications to communicate with each other, enabling integration and functionality sharing.",
    "cloud": "Cloud computing refers to the delivery of computing services, including servers, storage, databases, networking, software, and analytics, over the internet ('the cloud') to offer faster innovation, flexible resources, and economies of scale.",
    "ai": "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems, enabling them to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.",
    "machine learning": "Machine Learning is a subset of AI that involves the use of algorithms and statistical models to enable systems to improve their performance on a specific task through experience and data, without being explicitly programmed.",
    "deep learning": "Deep Learning is a specialized subset of machine learning that uses neural networks with many layers (deep architectures) to model complex patterns in data, often used for tasks such as image and speech recognition, natural language processing, and autonomous systems.",
    "blockchain": "Blockchain is a decentralized digital ledger that records transactions across multiple computers in a way that ensures the security, transparency, and immutability of the data, often used for cryptocurrencies and other applications requiring trustless record keeping.",
    "courses": "Eazzesam Academy offers comprehensive training in Mathematics, Physics, General Science, Computer Science, Programming, Web Development, Artificial Intelligence, Cybersecurity, Networking, Database Systems, Graphics Design, Video Editing, Microsoft Office Suite, CCTV Installation, and Software Engineering.",
    "subjects": "Our core academic subjects include Mathematics, Physics, General Science, and Computer Science for JHS, SHS, tertiary students, and professionals.",
    "what_courses_do_you_offer": "Eazzesam Academy offers Mathematics, Physics, General Science, Computer Science, Programming, Web Development, Artificial Intelligence, Cybersecurity, Networking, Database Systems, Microsoft Office Suite, Graphics Design, Video Editing, and CCTV Installation.",
    "what_is_html": "HTML is the standard language used to create web pages and structure content on the web.",
    "what_is_css": "CSS is used to style and design web pages including colors, layouts, fonts, and animations.",
    "what_is_javascript": "JavaScript is a programming language used to create interactive and dynamic web applications.",
    "what_is_python": "Python is a versatile programming language used in AI, web development, automation, and data science.",
    "what_is_java": "Java is a programming language widely used for enterprise applications and Android development.",
    "what_is_cplusplus": "C++ is a high-performance programming language used for system software, games, and embedded systems.",
    "what_is_csharp": "C# is a programming language developed by Microsoft used for web apps, games, and desktop software.",
    "what_is_php": "PHP is a server-side scripting language used mainly for web development.",
    "what_is_sql": "SQL is a language used to manage, query, and manipulate relational databases.",
    "what_is_database": "A database is a structured system used to store and retrieve data efficiently.",

    "what_is_frontend": "Frontend development focuses on the user interface and everything users interact with on a website.",
    "what_is_backend": "Backend development handles server logic, authentication, and database operations.",
    "what_is_fullstack": "Fullstack development covers both frontend and backend development.",
    "what_is_api": "An API allows different software systems to communicate and exchange data.",
    "what_is_rest_api": "REST API is a web service architecture used for communication between systems over HTTP.",
    "what_is_json": "JSON is a lightweight data format used for exchanging information between systems.",
    "what_is_xml": "XML is a markup language used to store and transport data.",

    "what_is_git": "Git is a version control system used to track changes in code.",
    "what_is_github": "GitHub is a platform for hosting and collaborating on Git repositories.",
    "what_is_version_control": "Version control is a system that tracks changes in code over time.",

    "what_is_ai": "Artificial Intelligence is the simulation of human intelligence in machines.",
    "what_is_machine_learning": "Machine learning is a subset of AI that allows systems to learn from data.",
    "what_is_deep_learning": "Deep learning is a type of machine learning using neural networks.",
    "what_is_neural_network": "A neural network is a computing system inspired by the human brain.",

    "what_is_cybersecurity": "Cybersecurity is the protection of systems, networks, and data from digital attacks.",
    "what_is_hacking": "Hacking is the act of gaining unauthorized access to systems.",
    "what_is_ethical_hacking": "Ethical hacking is legal testing of systems to find security weaknesses.",
    "what_is_firewall": "A firewall is a security system that monitors and controls network traffic.",
    "what_is_encryption": "Encryption is the process of converting data into a secure coded form.",

    "what_is_cloud_computing": "Cloud computing delivers computing services over the internet.",
    "what_is_aws": "AWS is Amazon Web Services, a cloud computing platform.",
    "what_is_azure": "Microsoft Azure is a cloud computing service for building and managing applications.",
    "what_is_google_cloud": "Google Cloud is a suite of cloud computing services from Google.",

    "what_is_operating_system": "An operating system manages hardware and software resources.",
    "what_is_windows": "Windows is an operating system developed by Microsoft.",
    "what_is_linux": "Linux is an open-source operating system widely used in servers.",
    "what_is_android": "Android is a mobile operating system developed by Google.",
    "what_is_ios": "iOS is Apple's mobile operating system.",

    "what_is_networking": "Networking is the practice of connecting computers to share resources.",
    "what_is_ip_address": "An IP address is a unique identifier for devices on a network.",
    "what_is_dns": "DNS translates domain names into IP addresses.",
    "what_is_http": "HTTP is a protocol used for transferring web data.",
    "what_is_https": "HTTPS is a secure version of HTTP.",

    "what_is_web_hosting": "Web hosting is a service that stores websites on servers.",
    "what_is_domain_name": "A domain name is the address used to access a website.",
    "what_is_ssl": "SSL is a security protocol that encrypts internet connections.",

    "what_is_ui": "UI is the user interface design of an application.",
    "what_is_ux": "UX is user experience, focusing on how users interact with a system.",

    "what_is_agile": "Agile is a software development methodology based on iterative progress.",
    "what_is_scrum": "Scrum is an Agile framework for managing projects.",

    "what_is_debugging": "Debugging is the process of finding and fixing errors in code.",
    "what_is_compiler": "A compiler converts programming code into machine language.",
    "what_is_interpreter": "An interpreter executes code line by line.",

    "what_is_blockchain": "Blockchain is a distributed ledger technology used in cryptocurrencies.",
    "what_is_bitcoin": "Bitcoin is a digital cryptocurrency.",
    "what_is_ethereum": "Ethereum is a blockchain platform for smart contracts.",

    "what_is_iot": "IoT is the Internet of Things, connecting devices to the internet.",
    "what_is_robotics": "Robotics is the field of designing and building robots.",

    "what_is_big_data": "Big Data refers to extremely large datasets that require advanced processing.",
    "what_is_data_science": "Data science involves analyzing data to extract insights.",

    "what_is_machine_code": "Machine code is the lowest-level programming language executed by computers.",
    "what_is_binary": "Binary is a number system using only 0 and 1.",

    "what_is_algorithm": "An algorithm is a step-by-step procedure for solving problems.",
    "what_is_data_structure": "Data structures organize and store data efficiently.",

    "what_is_stack": "A stack is a data structure that follows LIFO principle.",
    "what_is_queue": "A queue is a data structure that follows FIFO principle.",

    "what_is_array": "An array is a collection of elements stored in continuous memory.",
    "what_is_linked_list": "A linked list is a data structure where elements are connected using pointers.",

    "what_is_tree": "A tree is a hierarchical data structure.",
    "what_is_graph": "A graph is a structure made of nodes and edges.",

    "what_is_ai_chatbot": "An AI chatbot is a program that simulates human conversation using artificial intelligence.",
    "what_is_nlp": "NLP is Natural Language Processing, enabling machines to understand human language.",

    "what_is_software_engineering": "Software engineering is the process of designing and building software systems.",
    "what_is_system_design": "System design is the process of defining architecture for software systems.",

    "what_is_programming": "Programming is writing instructions for computers to execute.",
    "what_is_code": "Code is a set of instructions written in a programming language.",

    "what_is_testing": "Software testing is checking applications for bugs and errors.",
    "what_is_unit_testing": "Unit testing checks individual components of software.",

    "what_is_devops": "DevOps combines development and IT operations for faster delivery.",

    "what_is_saas": "SaaS is Software as a Service delivered over the internet.",
    "what_is_paas": "PaaS is Platform as a Service for building applications.",
    "what_is_iaas": "IaaS is Infrastructure as a Service providing cloud computing resources.",

    "courses": "Eazzesam Academy offers comprehensive training in Mathematics (Core Mathematics, Elective Mathematics, and General Mathematics), Physics, General Science, Computer Science, Information Technology (IT), Web Design and Development, Software Development, Python Programming, JavaScript, Java, C++, C#, Database Management (SQL & MySQL), Artificial Intelligence (AI), Machine Learning, Cybersecurity, Networking, Cloud Computing, Mobile App Development, UI/UX Design, Graphic Design, Video Editing, Microsoft Office Suite, Computer Hardware and Maintenance, and CCTV Installation and Configuration. Our AI Tutor provides lessons, explanations, quizzes, assignments, exam preparation, and step-by-step solutions across these subjects and professional courses.",

    "academic_courses": "Eazzesam Academy offers Mathematics (Core Mathematics, Elective Mathematics, and General Mathematics), Physics, General Science, Computer Science, and Information Technology (IT).",
    "professional_courses": "Eazzesam Academy offers Web Design and Development, Software Development, Python Programming, JavaScript, Java, C++, C#, Database Management (SQL & MySQL), Artificial Intelligence (AI), Machine Learning, Cybersecurity, Networking, Cloud Computing, Mobile App Development, UI/UX Design, Graphic Design, Video Editing, Microsoft Office Suite, Computer Hardware and Maintenance, and CCTV Installation and Configuration.",
    "courses_offered": "Eazzesam Academy offers comprehensive training in Mathematics, Physics, General Science, Computer Science, Information Technology (IT), Web Design and Development, Software Development, Python Programming, JavaScript, Java, C++, C#, Database Management (SQL & MySQL), Artificial Intelligence (AI), Machine Learning, Cybersecurity, Networking, Cloud Computing, Mobile App Development, UI/UX Design, Graphic Design, Video Editing, Microsoft Office Suite, Computer Hardware and Maintenance, and CCTV Installation and Configuration.",
    "what_courses_do_you_offer": "Eazzesam Academy offers comprehensive training in Mathematics, Physics, General Science, Computer Science, Information Technology (IT), Web Design and Development, Software Development, Python Programming, JavaScript, Java, C++, C#, Database Management (SQL & MySQL), Artificial Intelligence (AI), Machine Learning, Cybersecurity, Networking, Cloud Computing, Mobile App Development, UI/UX Design, Graphic Design, Video Editing, Microsoft Office Suite, Computer Hardware and Maintenance, and CCTV Installation and Configuration.",

    "Academy": "Eazzesam Academy is a hands-on learning institution that provides comprehensive training in Mathematics, Physics, General Science, Computer Science, Information Technology (IT), Web Design and Development, Software Development, Python Programming, JavaScript, Java, C++, C#, Database Management (SQL & MySQL), Artificial Intelligence (AI), Machine Learning, Cybersecurity, Networking, Cloud Computing, Mobile App Development, UI/UX Design, Graphic Design, Video Editing, Microsoft Office Suite, Computer Hardware and Maintenance, and CCTV Installation and Configuration.",

    "register": "To register, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "registration": "To register, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "registration_form": "To register, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "registration_process": "To register, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "registration_requirements": "To register, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "registration_steps": "To register, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",

    "enroll": "To enroll, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "enrollment": "To enroll, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "enrollment_form": "To enroll, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "enrollment_process": "To enroll, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "enrollment_requirements": "To enroll, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",
    "enrollment_steps": "To enroll, go to our 'Academy Hub' navigation pane, fill out your parameters, and submit the integrated entry form.",

    "professional_courses": "We also offer Web Design, Web Development, Software Development, Python, JavaScript, Java, C++, C#, Database Management, Artificial Intelligence (AI), Machine Learning, Cybersecurity, Networking, Cloud Computing, Mobile App Development, UI/UX Design, Graphic Design, Video Editing, Microsoft Office Suite, Computer Hardware and Maintenance, and CCTV Installation and Configuration.",

    "tutoring": "The Eazzesam Tutor provides personalized learning support, step-by-step explanations, quizzes, assignments, exam preparation, and answers to questions across all academic and professional courses offered by Eazzesam Academy.",
    "tutor": "The Eazzesam Tutor provides personalized learning support, step-by-step explanations, quizzes, assignments, exam preparation, and answers to questions across all academic and professional courses offered by Eazzesam Academy.",
    "faq": "For frequently asked questions, visit our FAQ page or contact our support team for assistance.",
    "support": "For support, visit our Support page or contact our support team for assistance.",
    "help": "For help, visit our Support page or contact our support team for assistance.",
    "whatsapp": "You can chat with us via WhatsApp directly at +233 54 242 4592."



};

let isTypingActive = false;

function scaleTerminalBoundaries(scaleMode) {
    const terminalElement = document.getElementById('immersiveChatCanvas');
    const consoleBox = document.getElementById('dedicatedConsole');
    if (scaleMode === 'compact') {
        terminalElement.style.height = '45vh';
        consoleBox.style.fontSize = '11px';
    } else if (scaleMode === 'standard') {
        terminalElement.style.height = '70vh';
        consoleBox.style.fontSize = '12px';
    } else if (scaleMode === 'pro') {
        terminalElement.style.height = '85vh';
        consoleBox.style.fontSize = '15px';
    }
}

function clearDedicatedChat() {
    document.getElementById('dedicatedConsole').innerHTML = `
                <div class="flex flex-col space-y-1 max-w-[75%] animate__animated animate__fadeIn">
                    <div class="bg-gray-200 dark:bg-white/[0.05] p-4 rounded-2xl rounded-tl-none leading-relaxed border border-gray-300 dark:border-transparent text-xs">
                        Console purged. State registers cleared. Ready for inbound intent variables.
                    </div>
                    <span class="text-[9px] text-appleGray px-1">Eazzesam System Desk</span>
                </div>`;
}

function injectPresetKnowledgeString(presetKey) {
    document.getElementById('dedicatedUserInput').value = presetKey;
    compileUserChatIntent();
}

function compileUserChatIntent() {
    const userInputField = document.getElementById('dedicatedUserInput');
    const rawQueryString = userInputField.value.trim();
    if (!rawQueryString || isTypingActive) return;

    userInputField.value = "";
    const consoleBox = document.getElementById('dedicatedConsole');

    // Render user bubble alignment markup
    const userBlock = document.createElement('div');
    userBlock.className = "flex flex-col items-end space-y-1 justify-end max-w-[75%] ml-auto animate__animated animate__fadeInUp";
    userBlock.innerHTML = `
                <div class="bg-techBlue text-white p-3.5 rounded-2xl rounded-tr-none text-xs leading-relaxed font-medium shadow-sm">${rawQueryString}</div>
                <span class="text-[9px] text-appleGray px-1">You</span>`;
    consoleBox.appendChild(userBlock);
    consoleBox.scrollTop = consoleBox.scrollHeight;

    triggerSystemWordStream(rawQueryString);
}

async function triggerSystemWordStream(userQuery) {
    isTypingActive = true;
    const loader = document.getElementById('chatSystemLoader');
    loader.classList.remove('hidden');
    loader.classList.add('flex');

    const cleanQuery = userQuery.toLowerCase();
    let matchedFeedback = "Hey there! I've just polished up my knowledge directories to make things super clean. To get live generative answers, You can test things out by searching for topics like location, academy, hours, javascript, cybersecurity and more. What would you like to dive into first?";

    for (const lookupKey in CHAT_K_BASE) {
        if (cleanQuery.includes(lookupKey)) {
            matchedFeedback = CHAT_K_BASE[lookupKey];
            break;
        }
    }

    await new Promise(resolve => setTimeout(resolve, 550));
    loader.classList.remove('flex');
    loader.classList.add('hidden');

    const consoleBox = document.getElementById('dedicatedConsole');
    const systemBlock = document.createElement('div');
    systemBlock.className = "flex flex-col space-y-1 max-w-[75%] text-left";
    systemBlock.innerHTML = `
                <div class="bg-gray-200 dark:bg-white/[0.05] p-4 rounded-2xl rounded-tl-none leading-relaxed border border-gray-300 dark:border-transparent text-xs font-mono">
                    <span class="typing-target-span"></span><span class="animate-pulse text-techBlue font-bold">|</span>
                </div>
                <span class="text-[9px] text-appleGray px-1">Eazzesam AI</span>`;
    consoleBox.appendChild(systemBlock);
    consoleBox.scrollTop = consoleBox.scrollHeight;

    const textTargetSpan = systemBlock.querySelector('.typing-target-span');
    const wordTokensArray = matchedFeedback.split(" ");
    let tokenIndex = 0;

    const wordStreamerInterval = setInterval(() => {
        if (tokenIndex < wordTokensArray.length) {
            textTargetSpan.innerText += (tokenIndex === 0 ? "" : " ") + wordTokensArray[tokenIndex];
            tokenIndex++;
            consoleBox.scrollTop = consoleBox.scrollHeight;
        } else {
            clearInterval(wordStreamerInterval);
            // Drop active blinkers once stream is resolved
            systemBlock.querySelector('.animate-pulse').remove();
            isTypingActive = false;
        }
    }, 35);
}
