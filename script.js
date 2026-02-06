// Theme toggle: CSS variables + .dark-theme on <body>
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  if (!toggleBtn || !body) return;

  const icon = document.getElementById("theme-toggle-icon") || toggleBtn.querySelector("span");

  function applyTheme(mode) {
    if (mode === "dark") {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      if (icon) icon.textContent = "☀️";
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
      if (icon) icon.textContent = "🌙";
    }
  }

  // 1️⃣ Apply saved theme or system preference on first load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  // 2️⃣ Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-theme");
    applyTheme(isDark ? "light" : "dark");
  });
});



const contentMap = {
    "service-models": `
      <p class="text-sm text-gray-500 mb-2">
         Topics > <span class="text-teal-500"> IaaS, PaaS, SaaS</span>
      </p>
  
      <main id="main-content" class="flex-1 min-w-0 pt-6 pb-6 px-4 lg:px-8  max-w-4xl">
      <!-- Breadcrumb -->
      
      <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style="color: var(--text-color);" >Understanding Cloud Service Models</h1>
      <p class="mb-8 leading-relaxed" style="color: var(--text-color);">Cloud computing is typically offered in three service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Each model represents a different level of abstraction and shared responsibility between you and the cloud provider.</p>

      <!-- Service Cards  -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"  >
        <div class="bg-white/90 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
          </div>
          <h3 class="font-semibold text-lg text-gray-900 mb-2">IaaS</h3>
          <p class="text-sm text-black" >Virtual machines, storage, and networking. Maximum control.</p>
        </div>
        <div class="bg-white/90 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <h3 class="font-semibold text-lg text-gray-900 mb-2">PaaS</h3>
          <p class="text-sm text-black" >Execution environments for building and deploying apps.</p>
        </div>
        <div class="bg-white/90 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          </div>
          <h3 class="font-semibold text-lg text-gray-900 mb-2">SaaS</h3>
          <p class="text-sm text-black" >Ready-to-use software delivered over the Internet.</p>
        </div>
      </div>

      <!-- Responsibility Model Table -->
      <h2 class="text-2xl font-bold text-gray-900 mb-3">The Responsibility Model</h2>
      <p class="mb-4" style="color: var(--text-color);">The table below shows who is responsible for each layer of the stack across deployment and service models.</p>
      <div class="overflow-x-auto border border-gray-200 rounded-lg mb-10">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-500 border-b border-gray-200">
            <tr>
              <th class="px-4 py-3 font-semibold text-gray-900">Stack Component</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">On-Prem</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">IaaS</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">PaaS</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">SaaS</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Applications</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-slate-600">Provider</td></tr>
            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Data</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-slate-600">Provider</td></tr>
            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Runtime / OS</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-slate-600">Provider</td><td class="px-4 py-3 text-center text-slate-600">Provider</td></tr>
            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Virtualization</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-slate-600">Provider</td><td class="px-4 py-3 text-center text-slate-600">Provider</td><td class="px-4 py-3 text-center text-slate-600">Provider</td></tr>
            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Networking &amp; Storage</td><td class="px-4 py-3 text-center text-green-600 font-medium">You</td><td class="px-4 py-3 text-center text-slate-600">Provider</td><td class="px-4 py-3 text-center text-slate-600">Provider</td><td class="px-4 py-3 text-center text-slate-600">Provider</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Pro Tip Info Box -->
      <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-md p-4 mb-10">
        <div class="flex gap-3">
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
          <div>
            <h3 class="font-semibold text-blue-900 mb-1">Pro Tip: Pizza as a Service</h3>
            <p class="text-sm text-blue-800/90">Think of it like pizza: <strong>On-prem</strong> is making it at home; <strong>IaaS</strong> is getting the dough and ingredients delivered; <strong>PaaS</strong> is using a half-baked base; <strong>SaaS</strong> is ordering a full pizza. Each option trades control for convenience.</p>
          </div>
        </div>
      </div>

      <!-- Which one should you choose? -->
      <h2 class="text-2xl font-bold text-gray-900 mb-3" style="color: var(--text-color);" >Which one should you choose?</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-600  pl-1" style="color: var(--text-color);" >
        <li><strong class="text-gray-900" style="color: var(--text-color);" >Choose IaaS</strong> when you need full control over the infrastructure, specific compliance requirements, or to lift-and-shift existing workloads.</li>
        <li><strong class="text-gray-900" style="color: var(--text-color);" >Choose PaaS</strong> when you want to focus on writing code and deploying applications without managing servers or runtimes.</li>
        <li><strong class="text-gray-900" style="color: var(--text-color);" >Choose SaaS</strong> when you need a quick solution for standard business processes (email, CRM, collaboration) with minimal maintenance.</li>
      </ul>
    `,
  
    "what-is-cloud": `
      <p class="text-sm text-gray-500 mb-2">
         Introduction > <span class="text-teal-500">What is Cloud?</span>
      </p>
    <div class="p-3">
      <h1 class="text-3xl font-bold mb-4 lg:text-4xl" >Cloud Computing <h1>
      <p class="text-sm" style="color: var(--text-color);">Built by the Cloud Computing group of the AdroIT Club.
        A documentation-driven platform to understand and explore cloud computing concepts.
        </p>

    

    </div>

    <div class="p-3">
      <h1 class="text-3xl font-bold mb-4">
        What is Cloud Computing?
      </h1>
  
      <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">
        Cloud computing is a modern approach to delivering computing resources such as servers, storage, databases, and applications over the internet. Instead of relying on physical hardware, users can access these resources on demand from anywhere in the world. This model enables organizations to scale their systems easily based on usage and pay only for what they consume. Cloud computing improves reliability through distributed infrastructure and high availability. It also accelerates development by reducing the need for manual setup and maintenance. Today, cloud technology powers everything from mobile apps and streaming platforms to enterprise systems and research environments.
      </p>
  
      <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>No need to manage or maintain physical servers</li>
        <li>Pay only for the resources you actually use</li>
        <li>Built-in scalability and fault tolerance</li>
      </ul>

      <div class="mt-4">
        <h3 class="text-xl font-semibold mb-2 ">Example:</h3>
        <p style="color: var(--text-color);">Services like video streaming, cloud storage, and online collaboration tools rely heavily on cloud infrastructure.</p>

        <div class="mt-6 rounded-lg border-l-4 border-teal-400 bg-teal-50 dark:bg-teal-100 px-4 py-3 text-sm text-teal-900">
             Almost every modern application today runs on some form of cloud infrastructure.
        </div>

      </div>

    </div>
    
     </div>
    </main>
    `,

    "Data-center": `
    <p class="text-sm text-gray-500 mb-2">
         Topics > <span class="text-teal-500">What is Data Center?</span>

      </p>

      <div class="p-3">
        <h1 class="text-xl lg:text-4xl font-bold mb-6">What is Data Center?</h1>
        <p  class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">A data center is a physical facility used to store and manage computing resources such as servers, storage systems, networking equipment, and security devices. It acts as the backbone of cloud computing by providing the infrastructure needed to run applications and store data. Data centers are designed to operate continuously with high reliability, power efficiency, and security. They include redundant power supplies, cooling systems, and network connections to prevent downtime. Cloud service providers operate large-scale data centers across different geographic locations to ensure high availability and fault tolerance. These data centers enable users to access cloud services from anywhere in the world.
        </p>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 ">Key Features of a Data Center</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>Houses servers, storage, and networking hardware</li>
        <li>Equipped with backup power and cooling systems</li>
        <li>Designed for high availability and reliability</li>
        <li>Secure against physical and cyber threats</li>
        <li>Operates 24/7 with minimal downtime</li>
        </ul>

        <h3 class="font-semibold text-xl lg:text-2xl pt-4 pb-2 ">Role of Data Centers in Cloud Computing</h3>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">
        Data centers form the foundation of cloud infrastructure. Cloud providers use multiple data centers worldwide to deliver fast, scalable, and reliable services. If one data center fails, traffic is redirected to another, ensuring uninterrupted service for users.
        </p>

        <h3 class=" font-semibold text-xl lg:text-2xl pb-2">Examples:</h3>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">
        When you store files on cloud storage or stream videos online, your data is processed and delivered from a data center managed by a cloud provider.
        </p>

        <div class="mt-6 rounded-lg border-l-4 border-teal-400 bg-teal-50 dark:bg-teal-100 px-4 py-3 text-sm text-teal-900">
             Every cloud service you use ultimately runs inside a data center.
        </div>
      </div>
    `,
    "virtualization-containers": `
        <p class="text-sm text-gray-500 mb-2">
         Topics > <span class="text-teal-500">Virtualization vs Containers</span>

      </p>

      <div class="p-3">
        <h1 class="text-xl lg:text-4xl font-bold mb-6">Virtualization vs Containers</h1>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Virtualization and containers are technologies used to run applications in isolated environments, but they differ in how they utilize system resources. Virtualization uses a hypervisor to create multiple virtual machines, each with its own operating system, on a single physical server. This approach provides strong isolation but consumes more resources. Containers, on the other hand, package applications along with their dependencies while sharing the host operating system. This makes containers lightweight, faster to start, and more efficient. Both technologies are widely used in cloud environments based on workload requirements.
        </p>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 ">Virtualization</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>Uses a hypervisor (e.g., VMware, Hyper-V)</li>
        <li>Each virtual machine has its own OS</li>
        <li>Higher resource consumption</li>
        <li>Slower startup time</li>
        <li>Strong isolation between environments</li>
        </ul>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-2">Containers</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>Uses container engines (e.g., Docker)</li>
        <li>Shares the host operating system</li>
        <li>Lightweight and resource-efficient</li>
        <li>Faster startup and deployment</li>
        <li>Ideal for microservices and modern applications</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-3 pt-3" style="color: var(--text-color);" >Key Differences</h2>
      
      <div class="overflow-x-auto border border-gray-200 rounded-lg mb-10">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-500 border-b border-gray-200 dark:border-gray-200/50">
            <tr>
              <th class="px-4 py-3 font-semibold text-gray-900">Feature</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">Virtualization</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">Containers</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 ">
            <tr class=" bg-slate-300"><td class="px-4 py-3 text-gray-700">OS</td><td class="px-4 py-3 text-center text-green-600 font-medium">Separate OS per VM</td><td class="px-4 py-3 text-center text-green-600 font-medium">Shared host OS</td></tr>

            <tr class=" bg-slate-300"><td class="px-4 py-3 text-gray-700">Resource Usage</td><td class="px-4 py-3 text-center text-green-600 font-medium">High</td><td class="px-4 py-3 text-center text-green-600 font-medium">Low</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Startup Time</td><td class="px-4 py-3 text-center text-green-600 font-medium">Minutes</td><td class="px-4 py-3 text-center text-green-600 font-medium">Seconds</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Isolation</td><td class="px-4 py-3 text-center text-green-600 font-medium">Strong</td><td class="px-4 py-3 text-center text-green-600 font-medium">Lightweight</td></tr>

            <tr class="bg-slate-300 "><td class="px-4 py-3 text-gray-700">Use Case</td><td class="px-4 py-3 text-center text-green-600 font-medium">Legacy apps,full OS</td><td class="px-4 py-3 text-center text-green-600 font-medium">Microservices, CI/CD </td></tr>
          </tbody>
        </table>
      </div>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-3">When to use What?</h3>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Use Virtual Machines when strong isolation and full OS control are required.
        Use Containers for scalable, fast, and cloud-native application development.
        </p>
      </div>

      <div class="mt-6 rounded-lg border-l-4 border-teal-400 bg-teal-50 dark:bg-teal-100 px-4 py-3 text-sm text-teal-900">
             Containers make applications portable and scalable, while virtualization provides complete system isolation.
        </div>

    `,

    "Region": `
       <p class="text-sm text-gray-500 mb-2">
         Topics > <span class="text-teal-500">Region & Availability Zone</span>

      </p>

      <div class="p-3">
        <h1 class="text-xl lg:text-4xl font-bold mb-6">Region & Availability Zone</h1>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">In cloud computing, Regions and Availability Zones (AZs) are used to design highly available and fault-tolerant systems. A Region is a geographical area where a cloud provider operates its infrastructure, such as data centers, networking, and services. Each region is isolated from others to reduce the impact of large-scale failures. Within a region, there are multiple Availability Zones, which are independent data centers designed to operate separately. These zones are connected through high-speed, low-latency networks. By deploying applications across multiple availability zones, cloud systems can remain operational even if one zone experiences failure.
        </p>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 ">Region</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>A geographical location (e.g., Asia, Europe, North America)</li>
        <li>Contains multiple Availability Zones</li>
        <li>Designed for data residency and latency control</li>
        <li>Failure in one region does not affect others</li>
        </ul>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-2">Availability Zone(AZ)</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>One or more independent data centers within a region</li>
        <li>Has its own power, cooling, and networking</li>
        <li>Connected to other AZs with high-speed links</li>
        <li>Used to achieve high availability and fault tolerance</li>
        
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-3 pt-3" style="color: var(--text-color);" >Key Differences</h2>
      
      <div class="overflow-x-auto border border-gray-200 rounded-lg mb-10">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-500 border-b border-gray-200">
            <tr>
              <th class="px-4 py-3 font-semibold text-gray-900">Feature</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">Region</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">Availability Zone</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Scope</td><td class="px-4 py-3 text-center text-green-600 font-medium">Large Geographic Area</td><td class="px-4 py-3 text-center text-green-600 font-medium">Isolated Data center(s)</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Purpose</td><td class="px-4 py-3 text-center text-green-600 font-medium">Location & compilance</td><td class="px-4 py-3 text-center text-green-600 font-medium">High availability</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Faliure Impact</td><td class="px-4 py-3 text-center text-green-600 font-medium">Affects only that region</td><td class="px-4 py-3 text-center text-green-600 font-medium">Limited to that AZ</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Quality</td><td class="px-4 py-3 text-center text-green-600 font-medium">Fewer</td><td class="px-4 py-3 text-center text-green-600 font-medium">Multiple per region</td></tr>

            
          </tbody>
        </table>
      </div>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-3">Why Regions and AZs Matter</h3>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Using multiple availability zones within a region helps prevent downtime and data loss. Cloud architectures often distribute workloads across AZs to ensure reliability and continuous service availability.
        </p>
      </div>

      <div class="mt-6 rounded-lg border-l-4 border-teal-400 bg-teal-50 px-4 py-3 text-sm text-teal-900">
             High availability in the cloud is achieved by distributing resources across Availability Zones within a Region.
        </div>
    `,

    "vm-serverless":`

       <p class="text-sm text-gray-500 mb-2">
         Topics > <span class="text-teal-500">VM vs Serverless</span>

      </p>

      <div class="p-3">
        <h1 class="text-xl lg:text-4xl font-bold mb-6">VM vs Serverless</h1>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Virtual Machines (VMs) and Serverless computing are two different approaches to running applications in the cloud. Virtual Machines provide full control over the operating system and infrastructure, allowing users to configure servers according to their needs. However, they require manual management such as scaling, patching, and maintenance. Serverless computing removes the need to manage servers entirely, allowing developers to focus only on writing code. In a serverless model, applications automatically scale based on demand and users pay only for actual execution time. Both approaches are used in cloud environments depending on performance, control, and scalability requirements.
        </p>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 ">Virtual Machines(VMs)</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>Full control over operating system and environment</li>
        <li>Requires server setup, configuration, and maintenance</li>
        <li>Scaling must be managed manually or via auto-scaling</li>
        <li>Suitable for long-running applications and legacy systems</li>
        </ul>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-2">Serverless Computing</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>No server management required</li>
        <li>Automatically</li>
        <li>Pay only for execution time</li>
        <li>Ideal for event-driven and short-lived tasks</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-3 pt-3" style="color: var(--text-color);" >Key Differences</h2>
      
      <div class="overflow-x-auto border border-gray-200 rounded-lg mb-10">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-500 border-b border-gray-200">
            <tr>
              <th class="px-4 py-3 font-semibold text-gray-900">Feature</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">Virtual Machines</th>
              <th class="px-4 py-3 font-semibold text-gray-900 text-center">Serverless</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Server Management</td><td class="px-4 py-3 text-center text-green-600 font-medium">Required</td><td class="px-4 py-3 text-center text-green-600 font-medium">Not required</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Scaling</td><td class="px-4 py-3 text-center text-green-600 font-medium">Manual/Auto-scaling</td><td class="px-4 py-3 text-center text-green-600 font-medium">Automatic</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Cost model</td><td class="px-4 py-3 text-center text-green-600 font-medium">Pay for uptime</td><td class="px-4 py-3 text-center text-green-600 font-medium">Pay per Execution</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Startuo Time</td><td class="px-4 py-3 text-center text-green-600 font-medium">Slower</td><td class="px-4 py-3 text-center text-green-600 font-medium">Very Fast</td></tr>

            <tr class="bg-slate-300"><td class="px-4 py-3 text-gray-700">Best For</td><td class="px-4 py-3 text-center text-green-600 font-medium">Slower</td><td class="px-4 py-3 text-center text-green-600 font-medium">Very Fast </td></tr>

            
          </tbody>
        </table>
      </div>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-3">When to use What?</h3>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Use VMs when you need full control over the system or custom configurations.
Use Serverless for scalable, lightweight, and event-driven applications.
        </p>
      </div>

      <div class="mt-6 rounded-lg border-l-4 border-teal-400 bg-teal-50 px-4 py-3 text-sm text-teal-900">
             Serverless shifts focus from infrastructure management to application logic.
        </div>

    `,

    "cloud-storage":`
       <p class="text-sm text-gray-500 mb-2">
         Topics > <span class="text-teal-500">Cloud Storage</span>

      </p>

      <div class="p-3">
        <h1 class="text-xl lg:text-4xl font-bold mb-6">What is Cloud Storage?</h1>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Cloud storage is a service that allows users to store, manage, and access data over the internet instead of on local devices or physical storage systems. The data is stored in remote data centers managed by cloud service providers and can be accessed from anywhere at any time. Cloud storage offers high scalability, meaning storage capacity can be increased or reduced based on requirements. It also provides data durability through replication and backup across multiple locations. Cloud storage eliminates the need for physical hardware maintenance and enables cost-efficient data management. It is widely used for storing files, backups, media content, and application data.
        </p>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 ">Types of Cloud Storage</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>Object Storage – Used for unstructured data like images, videos, and backups</li>
        <li>Block Storage – Used for databases and virtual machine disks</li>
        <li>File Storage – Provides shared file systems in the cloud</li>
        </ul>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-2">Key Benefits</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>Access data from anywhere</li>
        <li>High durability and availability</li>
        <li>Scalable storage capacity</li>
        <li>Reduced hardware and maintenance costs</li>
        </ul>


        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-3">Example:</h3>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Services such as cloud drives, online backups, and media hosting platforms rely on cloud storage to store and retrieve data efficiently.
        </p>
      </div>

      <div class="mt-6 rounded-lg border-l-4 border-teal-400 bg-teal-50 px-4 py-3 text-sm text-teal-900">
             Cloud storage ensures data is always available, secure, and scalable.
        </div>
    `,
    "CDN":`
       <p class="text-sm text-gray-500 mb-2">
         Topics > <span class="text-teal-500">CDN</span>

      </p>

      <div class="p-3">
        <h1 class="text-xl lg:text-4xl font-bold mb-6">Content Delivery Network(CDN)</h1>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">A Content Delivery Network (CDN) is a distributed network of servers designed to deliver content to users quickly and efficiently. Instead of serving content from a single central server, a CDN stores cached copies of data such as images, videos, and web pages across multiple geographically distributed locations. When a user requests content, it is delivered from the nearest CDN server, reducing latency and load time. CDNs improve website performance, reliability, and availability. They also help reduce bandwidth costs and protect applications against traffic spikes and attacks. CDNs are widely used by websites, streaming platforms, and cloud-based applications.
        </p>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 ">How CDN Works</h3>
        <ol class="list-decimal pl-6 space-y-2" style="color: var(--text-color);">
        <li>Content is cached at multiple edge locations</li>
        <li>User requests are routed to the nearest CDN server</li>
        <li>Content is delivered faster with reduced latency</li>
        </ol>

        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-2">Benefits of CDN</h3>
        <ul class="list-disc list-inside space-y-2" style="color: var(--text-color);">
        <li>Faster content delivery</li>
        <li>Reduced server load</li>
        <li>Improved availability and reliability</li>
        <li>Better user experience worldwide</li>
        </ul>


        <h3 class="font-semibold text-xl lg:text-2xl pb-2 pt-3">Example:</h3>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Streaming services, online learning platforms, and e-commerce websites use CDNs to deliver content quickly to users across different regions.
        </p>
      </div>

      <div class="mt-6 rounded-lg border-l-4 border-teal-400 bg-teal-50 px-4 py-3 text-sm text-teal-900">
            CDNs bring content closer to users by delivering it from the nearest location.
        </div>
    `,
    "cloud-providers":`
    <p class="text-sm text-gray-500 mb-2">
          <span class="text-teal-500">Cloud Providers ></span>

      </p>

      <div class="p-3">
        <h1 class="text-xl lg:text-4xl font-bold mb-6">Cloud Providers</h1>
        <p class="mb-6 leading-relaxed text-justify" style="color: var(--text-color);">Cloud providers are companies that offer cloud computing services such as servers, storage, databases, networking, and development tools over the internet. They manage large-scale data centers and provide on-demand infrastructure that users can access globally. Each provider offers similar core services but differs in tools, pricing models, and ecosystems. Understanding major cloud providers helps learners connect theoretical cloud concepts with real-world platforms. 
        </p>
        <div class="flex flex-col items-center border border-teal-200 shadow-sm rounded-xl bg-teal-300/10 p-3">
        <h3 class="font-medium text-sm block mb-3">The most widely used providers today are:</h3>
        <div class="flex flex-col p-2 items-center justify-between gap-3">
        <div class="flex  items-center border border-yellow-200 shadow-sm rounded-xl bg-yellow-300/10 p-5">
        <img src="https://imgs.search.brave.com/XhfSiNExDkOTIuh27CO4DObm9jjxtbNQwGTJpWTeNog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyLzNi/L2JkLzgyM2JiZGEw/YTA4NDE0MzRjYzIw/NzUyODA0ZTM0MTI3/LmpwZw" class="h-10 w-12 rounded-xl">
        <div class="flex flex-col">
        <p class="text-xl font-bold">Google Cloud</p>
        <p class="block font-light ">Clod platform known for performance, data analytics, and AI services.</p>
        </div>
        </div>

        <div class="flex items-center border border-orange-200 shadow-sm rounded-xl bg-orange-300/10 p-3">
        <img src="https://imgs.search.brave.com/ZdfsHdSye7UG1rO9bGaz3IaotfpGfpijNlVeN4rstkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvQXp1/cmUtTG9nby1QTkct/SW1hZ2VzLnBuZw" class="h-10 w-12">
        <div class="flex flex-col">
        <p class="text-xl font-bold">Microsoft Azure</p>
        <p class="block font-light">Enterprise-focused cloud with strong Microsoft integration.</p>
        </div>
        </div>

        <div class="flex items-center border border-blue-200 shadow-sm rounded-xl bg-blue-300/10 p-3">
        <img src="https://imgs.search.brave.com/sxH6W9KCm8zhCMg9XBqHgw3-tSkj4_TETrj7BnK9fWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIxLzgv/TlAvWU4vRE4vMzc3/NTk3OS9hd3MtbG9n/by01MDB4NTAwLnBu/Zw" class="h-10 w-12">
        <div class="flex flex-col">
        <p class="text-xl font-bold">AWS</p>
        <p class="block font-light">Largest cloud provider offering scalable infrastructutre.</p>
        </div>
        </div>

        </div>
    `
  };

  document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("main-content");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
  
    const defaultSection = "what-is-cloud";
  
    // Load default content
    mainContent.innerHTML = contentMap[defaultSection];
  
    // Highlight default link
    sidebarLinks.forEach(link => {
      if (link.dataset.section === defaultSection) {
        link.classList.add(
          "bg-teal-50",
          "border-teal-500",
          "text-gray-800",
          "font-medium"
        );
        link.classList.remove("border-transparent", "text-gray-700");
      }
    });
  
    // Click handling
    sidebarLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const section = this.dataset.section;
        if (!contentMap[section]) return;
  
        mainContent.innerHTML = contentMap[section];
  
        // Update active styles
        sidebarLinks.forEach(l => {
          l.classList.remove(
            "bg-teal-50",
            "border-teal-500",
            "text-gray-800",
            "font-medium"
          );
          l.classList.add("border-transparent", "text-gray-700");
        });
  
        this.classList.add(
          "bg-teal-50",
          "border-teal-500",
          "text-gray-800",
          "font-medium"
        );
        this.classList.remove("border-transparent", "text-gray-700");
      });
    });
  });
  
  

(function () {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebar-overlay');
    var toggle = document.getElementById('sidebar-toggle');
    var dismissBanner = document.getElementById('dismiss-banner');
    var topBanner = document.getElementById('top-banner');

    // Mobile sidebar toggle
    function openSidebar() {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
    if (toggle) toggle.addEventListener('click', function () { sidebar.classList.contains('-translate-x-full') ? openSidebar() : closeSidebar(); });
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Dismiss top banner and adjust sidebar position
    if (dismissBanner && topBanner) {
      dismissBanner.addEventListener('click', function () {
        topBanner.classList.add('hidden');
        if (sidebar) {
          sidebar.style.top = '3.5rem';
          sidebar.style.height = 'calc(100vh - 3.5rem)';
        }
      });
    }

    // Active link highlighting: set active state on sidebar links (optional: sync from URL hash)
    var links = document.querySelectorAll('.sidebar-link');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        links.forEach(function (l) {
          l.classList.remove('active', 'border-teal-500', 'bg-teal-50', 'text-gray-800', 'font-medium');
          l.classList.add('border-transparent', 'text-gray-700');
        });
        this.classList.add('active', 'border-teal-500', 'bg-teal-50', 'text-gray-800', 'font-medium');
        this.classList.remove('border-transparent', 'text-gray-700');
        if (window.matchMedia('(max-width: 1023px)').matches) closeSidebar();
      });
    });
  })();