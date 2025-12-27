// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

// Yandex.Metrika
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments);};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,k.onerror=function(){console.warn("Yandex.Metrika failed to load")};a.parentNode.insertBefore(k,a);})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
ym(92335692, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true });

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const langButtons = document.querySelectorAll(".lang-btn");
const translations = {
  ru: {
    menu_home: "Главная",
    menu_portfolio: "Портфолио",
    menu_skills: "Навыки",
    menu_education: "Образование",
    menu_certs: "Сертификаты",
    menu_hobbies: "Увлечения",
    name: "Гусев Дмитрий Евгеньевич",
    about_desc: 'Системный администратор с более чем 18-летним опытом в IT, специализирующийся на <a href="#skills">Linux, Zabbix, VMware и сетевом оборудовании</a>.',
    exp1: "Опыт в IT более 18 лет",
    exp1_1: "Специалист технической поддержки",
    exp1_2: "Системный администратор интернет-провайдера",
    exp1_3: "Старший системный администратор интернет-провайдера",
    exp1_4: "Системный администратор дата-центра",
    exp1_5_text: "Технический директор IT-интегратора",
    council_title: "Общественная деятельность",
    founder_text: "Основатель",
    council_text: "Член Высшего совета",
    moscow_head_text: "Глава Московского отделения",
    portfolio_title: "Портфолио",
    portfolio_desc: 'Мои ключевые навыки в системном администрировании, мониторинге и виртуализации. Подробности в <a href="#skills">разделе навыков</a>.',
    portfolio_1: '<i class="bi bi-laptop"></i> Linux (Debian, Ubuntu, CentOS, FreeBSD)',
    portfolio_2: '<i class="bi bi-server"></i> NGINX, Apache',
    portfolio_3: '<i class="bi bi-database"></i> MySQL, MariaDB',
    portfolio_4: '<i class="bi bi-bar-chart-line"></i> Zabbix',
    portfolio_5: '<i class="bi bi-cloud-haze2"></i> VMware, KVM',
    portfolio_6: '<i class="bi bi-terminal"></i> Bash, Shell scripting',
    portfolio_7: '<i class="bi bi-wifi"></i> Администрирование сетевого оборудования Juniper, Cisco, Dlink, Orion, BDCOM, HP Procurve, H3C, SNR, Mikrotik',
    skills_title: "Навыки",
    skills_desc: "Визуализация моих технических навыков в системном администрировании и IT.",
    skills_chart_desc: "Диаграмма показывает уровень владения навыками: Linux - 5, NGINX/Apache - 4, MySQL/MariaDB - 4, Zabbix - 5, VMware/KVM - 4, Bash/Shell scripting - 4, Сетевое оборудование - 5.",
    skill_1: "Linux (Debian, Ubuntu, CentOS, FreeBSD)",
    skill_2: "NGINX, Apache",
    skill_3: "MySQL, MariaDB",
    skill_4: "Zabbix",
    skill_5: "VMware, KVM",
    skill_6: "Bash, Shell scripting",
    skill_7: "Администрирование сетевого оборудования Juniper, Cisco, Dlink, Orion, BDCOM, HP Procurve, H3C, SNR, Mikrotik",
    education_title: "Образование",
    education_desc: "Автономная некоммерческая организация высшего образования Московский гуманитарно-экономический университет (АНО ВО МГЭУ) — экономист.",
    certificates_title: "Сертификаты",
    cert_1: "Mikrotik IP",
    cert_2: "Mikrotik QOS",
    hobbies_title: "Увлечения",
    hobbies_desc: "Мои интересы вне профессиональной деятельности.",
    hobby_1: "Горные лыжи",
    hobby_2: "Ролевые игры",
    hobby_3: "Работа с железом",
    hobby_4: "Свободное ПО и автоматизация",
    hobby_5: "Образование и просвещение в области IT",
    hobby_6: "Огнестрельное оружие",
    hobby_7: "Военная техника",
    personal_city: "<strong>Город:</strong> Москва и Московская область",
    personal_work: "<strong>Варианты работы:</strong> очно или удаленно",
    personal_age: "<strong>Возраст:</strong> 38 лет",
    personal_marital: "<strong>Семейное положение:</strong> женат",
    personal_children: "<strong>Дети:</strong> нет",
    personal_license: "<strong>Водительские права:</strong> категория B (стаж 10+ лет)",
    personal_passport: "<strong>Загранпаспорт:</strong> действующий"
  },
  en: {
    menu_home: "Home",
    menu_portfolio: "Portfolio",
    menu_skills: "Skills",
    menu_education: "Education",
    menu_certs: "Certificates",
    menu_hobbies: "Hobbies",
    name: "Gusev Dmitry Evgenievich",
    about_desc: 'System administrator with over 18 years of IT experience, specializing in <a href="#skills">Linux, Zabbix, VMware, and network equipment</a>.',
    exp1: "Over 18 years of IT experience",
    exp1_1: "Technical support specialist",
    exp1_2: "Internet provider system administrator",
    exp1_3: "Senior system administrator at internet provider",
    exp1_4: "Data center system administrator",
    exp1_5_text: "Technical director of IT integrator",
    council_title: "Public Activities",
    founder_text: "Founder",
    council_text: "Member of the Higher Council",
    moscow_head_text: "Head of the Moscow Branch",
    portfolio_title: "Portfolio",
    portfolio_desc: 'My key skills in system administration, monitoring, and virtualization. Details in the <a href="#skills">skills section</a>.',
    portfolio_1: '<i class="bi bi-laptop"></i> Linux (Debian, Ubuntu, CentOS, FreeBSD)',
    portfolio_2: '<i class="bi bi-server"></i> NGINX, Apache',
    portfolio_3: '<i class="bi bi-database"></i> MySQL, MariaDB',
    portfolio_4: '<i class="bi bi-bar-chart-line"></i> Zabbix',
    portfolio_5: '<i class="bi bi-cloud-haze2"></i> VMware, KVM',
    portfolio_6: '<i class="bi bi-terminal"></i> Bash, Shell scripting',
    portfolio_7: '<i class="bi bi-wifi"></i> Administration of network equipment Juniper, Cisco, Dlink, Orion, BDCOM, HP Procurve, H3C, SNR, Mikrotik',
    skills_title: "Skills",
    skills_desc: "Visualization of my technical skills in system administration and IT.",
    skills_chart_desc: "The chart shows proficiency levels: Linux - 5, NGINX/Apache - 4, MySQL/MariaDB - 4, Zabbix - 5, VMware/KVM - 4, Bash/Shell scripting - 4, Network equipment - 5.",
    skill_1: "Linux (Debian, Ubuntu, CentOS, FreeBSD)",
    skill_2: "NGINX, Apache",
    skill_3: "MySQL, MariaDB",
    skill_4: "Zabbix",
    skill_5: "VMware, KVM",
    skill_6: "Bash, Shell scripting",
    skill_7: "Administration of network equipment Juniper, Cisco, Dlink, Orion, BDCOM, HP Procurve, H3C, SNR, Mikrotik",
    education_title: "Education",
    education_desc: "Autonomous Non-Profit Organization of Higher Education Moscow Humanitarian-Economic University (ANO VO MGEU) — Economist.",
    certificates_title: "Certificates",
    cert_1: "Mikrotik IP",
    cert_2: "Mikrotik QOS",
    hobbies_title: "Hobbies",
    hobbies_desc: "My interests outside of professional activities.",
    hobby_1: "Alpine skiing",
    hobby_2: "Role-playing games",
    hobby_3: "Working with hardware",
    hobby_4: "Open source and automation",
    hobby_5: "Education and IT enlightenment",
    hobby_6: "Firearms",
    hobby_7: "Military equipment",
    personal_city: "<strong>City:</strong> Moscow and Moscow Region",
    personal_work: "<strong>Work options:</strong> On-site or remote",
    personal_age: "<strong>Age:</strong> 38 years",
    personal_marital: "<strong>Marital status:</strong> Married",
    personal_children: "<strong>Children:</strong> None",
    personal_license: "<strong>Driver's license:</strong> Category B (10+ years of experience)",
    personal_passport: "<strong>Passport:</strong> Valid"
  }
};

function applyTheme(theme) {
  console.log("Applying theme:", theme);
  document.body.className = theme + "-theme";
  themeToggle.innerHTML = theme === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  localStorage.setItem("theme", theme);
  console.log("Theme applied, body class:", document.body.className);
}

themeToggle.addEventListener("click", () => {
  console.log("Theme toggle clicked");
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
});

applyTheme(localStorage.getItem("theme") || "light");

function applyTranslations(lang) {
  console.log("Applying translations for language:", lang);
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
  langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.documentElement.lang = lang;
  if (skillsChart) updateSkillsChart(lang);
  console.log("Translations applied, document lang:", document.documentElement.lang);
}

langButtons.forEach(btn => btn.addEventListener("click", () => {
  console.log("Language button clicked:", btn.dataset.lang);
  const lang = btn.dataset.lang;
  applyTranslations(lang);
  localStorage.setItem("lang", lang);
}));

const skillsData = {
  ru: {
    labels: ["Linux (Debian, Ubuntu, CentOS, FreeBSD)", "NGINX, Apache", "MySQL, MariaDB", "Zabbix", "VMware, KVM", "Bash, Shell scripting", "Сетевое оборудование"],
    values: [5, 4, 4, 5, 4, 4, 5]
  },
  en: {
    labels: ["Linux (Debian, Ubuntu, CentOS, FreeBSD)", "NGINX, Apache", "MySQL, MariaDB", "Zabbix", "VMware, KVM", "Bash, Shell scripting", "Network equipment"],
    values: [5, 4, 4, 5, 4, 4, 5]
  }
};

let skillsChart = null;

function updateSkillsChart(lang) {
  try {
    console.log("Updating skills chart for language:", lang);
    skillsChart.data.labels = skillsData[lang].labels;
    skillsChart.data.datasets[0].label = lang === "ru" ? "Уровень владения" : "Proficiency Level";
    skillsChart.options.scales.x.title.text = lang === "ru" ? "Уровень (1-5)" : "Level (1-5)";
    skillsChart.update();
    console.log("Skills chart updated");
  } catch (error) {
    console.error("Failed to update skills chart:", error);
  }
}

window.onload = function() {
  console.log("Window loaded, initializing chart");
  if (!window.Chart) {
    console.error("Chart.js not loaded");
    return;
  }
  try {
    const ctx = document.getElementById("skills-chart").getContext("2d");
    skillsChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: skillsData.ru.labels,
        datasets: [{
          label: "Уровень владения",
          data: skillsData.ru.values,
          backgroundColor: "rgba(13, 110, 253, 0.6)",
          borderColor: "rgba(13, 110, 253, 1)",
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            max: 5,
            title: {
              display: true,
              text: "Уровень (1-5)",
              font: { size: 12 }
            },
            ticks: { font: { size: 10 } }
          },
          y: {
            ticks: { font: { size: 10 } }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { bodyFont: { size: 10 } }
        },
        animation: {
          duration: 1000,
          easing: "easeOutQuart"
        }
      }
    });
    const lang = localStorage.getItem("lang") || "ru";
    applyTranslations(lang);
    updateSkillsChart(lang);
    console.log("Chart initialized, language:", lang);
  } catch (error) {
    console.error("Failed to initialize skills chart:", error);
  }
};

document.getElementById("download-cv").addEventListener("click", () => {
  console.log("Download CV button clicked");
  window.open("/files/DGusev_CV.pdf", "_blank");
});

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  console.log("Navbar toggler clicked");
  const toggler = document.querySelector(".navbar-toggler");
  const expanded = toggler.getAttribute("aria-expanded") === "true";
  toggler.setAttribute("aria-expanded", !expanded);
});

const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  console.log("Scroll to top button clicked");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
