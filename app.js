(function () {
    const exploreBtn = document.getElementById('exploreButton');
    const backgroundDiv = document.getElementById('backgroundDiv');
    const header = document.getElementById('header');
    const mainContent = document.getElementById('mainContent');
    const contentInner = document.getElementById('contentInner');

    let isOpen = false;
    let pendingTransition = false;

    const pages = {
        home: `<h1 class="text-3xl mt-10 font-bold mb-6">Welcome!</h1>
      <p class="mb-1 capitalize text-gray-800 sm:sm:text-xl text-md leading-relaxed p-4 text-md"> Welcome to my <span class="MyOrangetxt">CV</span> website!</p>
      <p class="mb-1 capitalize text-gray-800 sm:text-xl text-md leading-relaxed px-4 py-1 "> QA Automation Engineer with 4 years of
        experience. Here, you can explore my educational background, work experiences, and skills.</p> 
        <p class="mb-1 capitalize text-gray-800 sm:text-xl text-md leading-relaxed px-4 py-1 "> My goal is to provide
        the best services and collaborate with professional teams.</p>
        <h5 class="mt-2 capitalize text-rose-800 sm:text-xl text-md leading-relaxed px-4 py-1 flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
 I hope you enjoy your visit! </h5>
`,

        about: `<h1 class="text-3xl mt-10 font-bold mb-6">About Me</h1>
            <ul class="relative ml-6 mb-4">
                <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="MyOrangetxt size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
 <span class="text-gray-500">Name : </span>Seyed Omid Fatemi</li>
             <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="MyOrangetxt size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>
<span class="text-gray-500">Age : </span> May 1992 - 33 y.o.</li>
             <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="MyOrangetxt size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
<span class="text-gray-500">Marital Status : </span>Unmarried</li>
             <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="MyOrangetxt size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>
<span class="text-gray-500">Military Service Status : </span>Completed</li>
             <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="MyOrangetxt size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
<span class="text-gray-500">Residential area : </span>District 5, Sazman-e-Ab</li>
             <li class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="MyOrangetxt size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<span class="text-gray-500">Expected Salary : </span>40 - 70 Million Tomans </li>

            </ul>
            <p class="capitalize text-gray-800 sm:text-xl text-md leading-relaxed px-4 ">I have 15 years of work experience, with <span class="MyOrangetxt">4.5 years</span> related to Computer Engineering in the areas of support and deployment, software development, and testing. </p>
            <p class="mt-2 capitalize text-gray-800 sm:text-xl text-md leading-relaxed px-4 ">My main interest and expertise lie in <span class="MyOrangetxt">software testing (QA) </span>, both manual and automated.
            I have solid experience in test case writing, user interface testing, and API testing, and I am familiar with the principles of hierarchy and reporting. I possess a strong team spirit and am eager to <span class="MyOrangetxt">collaborate</span> on group projects. I value continuous learning and personal development, always striving to enhance my skills and knowledge.
            Organization, responsibility, and follow-through in project execution are key aspects of my personality, and I am looking for opportunities to engage in challenging and impactful projects.</p>`,

        experience: `<h1 class="text-3xl mt-10 font-bold mb-10">Work Experience</h1>
                <h3 class="sm:text-xl text-md font-bold">QA Automation Engineer <span class="MyOrangetxt">@ <a
                            href="https://padvish.com/en-us/">Amnpardaz Soft Corporation</a></span></h3>
                <p class="italic">Aug 2023 – Aug 2025 <span class="MyOrangetxt">|</span> Alborz, IR</p>
                <ul class="list-disc pl-4 mt-6">
                    <li> Developed and executed <span class="MyOrangetxt">Automated UI</span> tests to enhance software
                        quality and reliability. </li>
                        <li>Created comprehensive <span class="MyOrangetxt">test cases</span> to streamline QA processes,
                        reducing manual testing time by <span class="MyOrangetxt">30%</span>. </li>
                    <li>Collaborated with <span class="MyOrangetxt"> cross-functional</span> teams to identify and resolve
                        software defects, improving overall user experience.</li>

                    <li>Integrated tests into CI pipelines using <span class="MyOrangetxt">GitHub Actions and Slack
                            reporting</span>.</li>
                </ul>
                <h3 class="sm:text-xl text-md font-bold mt-6">Database Support Tech<span class="MyOrangetxt"> @ <a
                            href="http://www.tpazarakhsh.ir/">TarhPardazan Azarakhsh Company</a></span></h3>
                <p class="italic">Aug 2021 – Jun 2023 <span class="MyOrangetxt">|</span> Tehran, IR</p>
                <ul class="list-disc pl-5 mt-6">
                    <li>Deployed <span class="MyOrangetxt">database and payroll software</span>, ensuring seamless
                        installation and configuration for optimal performance. </li>
                    <li>Optimized systems to enhance employee data management and payroll processing efficiency. </li>
                    <li>Collaborated with cross-functional teams to troubleshoot and resolve technical issues, improving
                        system reliability.</li>
                </ul>
                     <h3 class="sm:text-xl text-md font-bold mt-6">Brand Professional Salesman, In-Store Management.</h3>
                <p class="italic">Jan 2012 – Nov 2017 <span class="MyOrangetxt">|</span> Tehran, IR</p>
                <ul class="list-disc pl-5 mt-6">
                    <li>I have 7 years of work experience unrelated to computers.
In this field, I have completed specialized courses in professional sales, sales force training, and sales management at (Carpisa, Ecco, Daniellee, luxineh), which have significantly helped me manage workplace conditions and communicate effectively with my colleagues.</li>`,

        education: `<h1 class="text-3xl mt-10 font-bold mb-6">Education</h1>
                    <ul class="list-disc pl-5">
                      <li><h3 class="text-xl font-bold">B.Sc. in <span class="MyOrangetxt">Computer Software Engineering</span></h3>
                <p class="italic">IAU , Tehran Central Branch <span class="MyOrangetxt">|</span>  2021 – 2023</p></li>
                 <li><h3 class="text-xl mt-6 font-bold">A.S. in <span class="MyOrangetxt">Public Health - Disease Control</span></h3>
                <p class="italic">IAU , Tehran Medical Branch<span class="MyOrangetxt">|</span>  2011 – 2013</p></li>
                    </ul>
                    
                <h1 class="text-3xl mt-10 font-bold mb-6">Certificates & Courses</h1>
                    <ul class="list-disc pl-5">
                      <li><h3 class="text-xl font-bold">SQL Server Development</span></h3><p class="italic">Tehran Technical Complex</p></li>
                      <li><h3 class="text-xl font-bold">PostgreSQL</span></h3><p class="italic">Tosinso</p></li>
                      <li><h3 class="text-xl font-bold">VMware Workstation Expert</span></h3><p class="italic">Tosinso</p></li>
                      <li><h3 class="text-xl font-bold">Linux Essentials</span></h3><p class="italic">Tosinso</p></li>
                      <li><h3 class="text-xl font-bold">Python Programming</span></h3><p class="italic">sematec-co</p></li>
                      <li><a href="https://finca.ir/verify/en/12z5z" class="text-xl font-bold">Introduction C++</span></a><p class="italic">Finca</p></li>
                      <li><a href="https://finca.ir/verify/en/dk8xx" class="text-xl font-bold">Intermediate C++</span></a><p class="italic">Finca</p></li>
                      <li><a href="https://finca.ir/verify/en/v4p5pr" class="text-xl font-bold">Java Programming</span></a><p class="italic">Finca</p></li>

                    </ul>
                    `,

        skills: `
<h1 class="text-3xl mt-10 font-bold mb-6">Skills</h1>
    <div class="grid grid-cols-2 gap-2">
        <div>
            <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>Dynamic PL</h4>
            <ul class="list-disc ml-6">
                <li>Python</li>
                <li>JavaScript</li>
                <li>Vue / React</li>
                <li>Bash / Shell</li>
            </ul>
        </div>
             <div>
            <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>Static PL</h4>
            <ul class="list-disc ml-6">
                <li>C/C++</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>SQL (Query Language)</li>
            </ul>
        </div>
        <div>
            <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                Web UI Automation</h4>
            <ul class="list-disc ml-6">
                <li>Selenium</li>
                <li>Playwright</li>
                <li>Cypress</li>
            </ul>
        </div>
        <div>
            <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                API Testing</h4>
            <ul class="list-disc ml-6">
                <li>Postman</li>
                <li>Newman</li>
                <li>Insomnia</li>
            </ul>
        </div>
        <div>
            <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Performance Testing</h4>
            <ul class="list-disc ml-6">
                <li>JMeter</li>
                <li>Locust</li>
                <li>k6</li>
            </ul>
        </div>

        <div>
            <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>
                CI/CD</h4>
            <ul class="list-disc ml-6">
                <li>Jenkins</li>
                <li>GitLab CI/CD</li>
                <li>GitHub Actions</li>
            </ul>
        </div>
        <div>
            <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
                Testing Frameworks</h4>
            <ul class="list-disc ml-6">
                <li>pytest</li>
                <li>unitTest</li>
                <li>Jest</li>
            </ul>
        </div>
    <div>
        <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            Test Management</h4>
        <ul class="list-disc ml-6">
            <li>Jira</li>
            <li>Zephyr</li>
            <li>TestRails</li>
        </ul>
    </div>
    <div>
    <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
            Methodology </h4>
        <ul class="list-disc ml-6">
            <li>Agile - Scrum</li>
            <li>Agile - Kanban</li>
            <li>WaterFall</li>

        </ul>
    </div>
    <div>
        <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            BDD Frameworks</h4>
        <ul class="list-disc ml-6">
            <li>Behave</li>
            <li>Robot Framework</li>
        </ul>
    </div>
    <div>
        <h4 class="text-md font-bold MyOrangetxt flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            Mobile Automation</h4>
        <ul class="list-disc ml-6">
            <li>Appium (Cross-platform)</li>
            <li>Espresso</li>
        </ul>
    </div>
    `,

        contact: `<h1 class="text-3xl mt-10 font-bold mb-6">Contact</h1>
                         <div class="ml-6 flex flex-col">
                    <span class="flex gap-2 text-xl mt-5"><img class="w-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Android_robot_head.svg" /> Phone:
                        <a class="text-blue-500" href="tell:09198661523">09198661523</a></span>
                    <span class="flex gap-2 text-xl mt-5"><img class="w-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" />
                        Gmail: <a class="text-blue-500" href="mailto:so.fat3mi@gmail.com">so.fat3mi@gmail.com
                            </a></span>
                    <span class="flex gap-2 text-xl mt-5"><img class="w-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" /> Linkedin: <a
                            class="text-blue-500" href="https://www.linkedin.com/in/fat3mi/">in/fat3mi</a></span>
                    <span class="flex gap-2 text-xl mt-5"><img class="w-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                        Github: <a class="text-blue-500" href="https://github.com/Fat3mi">Fat3mi</a></span>
                    <span class="flex gap-2 text-xl mt-5"><img class="w-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" /> Telegram: <a
                            class="text-blue-500" href="https://t.me/Fat3mi">@Fat3miii</a></span>
                </div>
                  `
    };


    function openOverlay(initialPage = 'home') {
        if (isOpen || pendingTransition) return;
        pendingTransition = true;
        backgroundDiv.classList.add('offscreen');
        exploreBtn.classList.add('hidden-like');

        setTimeout(() => {
            header.classList.add('visible');
            setContent(initialPage);
            mainContent.classList.add('visible');
            document.body.style.overflow = 'hidden';
            mainContent.setAttribute('aria-hidden', 'false');
            isOpen = true;
            setTimeout(() => { pendingTransition = false; }, 400);
        }, 320);
    }

    function closeOverlay() {
        if (!isOpen || pendingTransition) return;
        pendingTransition = true;

        header.classList.remove('visible');
        mainContent.classList.remove('visible');
        mainContent.setAttribute('aria-hidden', 'true');

        const onMainTransition = function (e) {
            if (e.propertyName !== 'opacity') return;
            if (mainContent.classList.contains('visible')) return;
            backgroundDiv.classList.remove('offscreen');
            exploreBtn.classList.remove('hidden-like');
            document.body.style.overflow = '';
            mainContent.removeEventListener('transitionend', onMainTransition);
            isOpen = false;
            setTimeout(() => { pendingTransition = false; }, 60);
        };

        mainContent.addEventListener('transitionend', onMainTransition);
    }

    function setContent(pageKey) {
        const html = pages[pageKey] || pages.home;
        contentInner.classList.add('fading-out');
        setTimeout(() => {
            contentInner.innerHTML = html;
            contentInner.classList.remove('fading-out'); t
            mainContent.scrollTop = 0;
        }, 180);
    }

    exploreBtn.addEventListener('click', () => openOverlay('home'));
    header.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') return;
        e.preventDefault();
        const page = (e.target.getAttribute('href') || '#home').replace('#', '');

        if (page === 'home') {
            if (isOpen) closeOverlay();
            return;
        }
        if (!isOpen) {
            openOverlay(page);
            return;
        }
        setContent(page);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) closeOverlay();
    });
    mainContent.classList.remove('visible');
    header.classList.remove('visible');
})();
