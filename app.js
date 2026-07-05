const course = [
  {
    day: 1,
    title: "What Is Product Management?",
    duration: "25 min",
    file: "content/days/day-1.md"
  },
  {
    day: 2,
    title: "Product Manager vs Product Owner vs Project Manager",
    duration: "30 min",
    file: "content/days/day-2.md"
  },
  {
    day: 3,
    title: "Product Development Lifecycle",
    duration: "35 min",
    file: "content/days/day-3.md"
  },
  {
    day: 4,
    title: "Types of Products",
    duration: "30 min",
    file: "content/days/day-4.md"
  },
  {
    day: 5,
    title: "Product Thinking vs Feature Thinking",
    duration: "35 min",
    file: "content/days/day-5.md"
  },
  {
    day: 6,
    title: "Understanding Business Model",
    duration: "40 min",
    file: "content/days/day-6.md"
  },
  {
    day: 7,
    title: "Product Strategy Fundamentals",
    duration: "35 min",
    file: "content/days/day-7.md"
  }
];

const aboutFile = "content/about.md";
const aboutProfile = {
  name: "Alireza Sadeghi-Nasab",
  title: "Product Manager | PhD in Software Engineering",
  location: "Tehran, Iran",
  photo: "assets/profile.png",
  contacts: [
    { id: "website", label: "Website", value: "alirezasn.ir", href: "https://alirezasn.ir/" },
    { id: "personal-email", label: "Personal Email", value: "sadeghinasab.alireza@gmail.com", href: "mailto:sadeghinasab.alireza@gmail.com" },
    { id: "work-email", label: "Work Email", value: "alireza.sadeghinasab@gandom.co", href: "mailto:alireza.sadeghinasab@gandom.co" },
    { id: "x", label: "Twitter / X", value: "@SN_Alireza", href: "https://x.com/SN_Alireza" },
    { id: "linkedin", label: "LinkedIn", value: "@alireza-sn", href: "https://www.linkedin.com/in/alireza-sn/" },
    { id: "instagram", label: "Instagram", value: "@_.alireza._sn", href: "https://www.instagram.com/_.alireza._sn/" },
    { id: "github", label: "GitHub", value: "@AlirezaSN", href: "https://github.com/AlirezaSN/" },
    { id: "telegram", label: "Telegram", value: "@alireza_sn", href: "https://t.me/alireza_sn" },
    { id: "scholar", label: "Google Scholar", value: "👨🏻‍🎓", href: "https://scholar.google.com/citations?user=w6jQ-tQAAAAJ&hl=en" }
  ]
};
const progressKey = "pm-course-progress";
const state = {
  selectedIndex: Number(localStorage.getItem("pm-course-day") || 0),
  route: "course",
  progress: loadProgress()
};

const dayList = document.querySelector("#dayList");
const dayCount = document.querySelector("#dayCount");
const content = document.querySelector("#content");
const contentStatus = document.querySelector("#contentStatus");
const aboutContent = document.querySelector("#aboutContent");
const aboutStatus = document.querySelector("#aboutStatus");
const currentDayLabel = document.querySelector("#currentDayLabel");
const progressFill = document.querySelector("#progressFill");
const prevDay = document.querySelector("#prevDay");
const nextDay = document.querySelector("#nextDay");
const courseView = document.querySelector("#courseView");
const aboutView = document.querySelector("#aboutView");
const tabs = document.querySelectorAll(".tab");
const completedCount = document.querySelector("#completedCount");
const completionPercent = document.querySelector("#completionPercent");
const startedCount = document.querySelector("#startedCount");
const lastActivity = document.querySelector("#lastActivity");
const resetProgress = document.querySelector("#resetProgress");
const completeDay = document.querySelector("#completeDay");
const lessonStatus = document.querySelector("#lessonStatus");
const lessonTrackingText = document.querySelector("#lessonTrackingText");
const lessonNote = document.querySelector("#lessonNote");
const noteSaved = document.querySelector("#noteSaved");
const profilePhoto = document.querySelector("#profilePhoto");
const profileName = document.querySelector("#profileName");
const profileTitle = document.querySelector("#profileTitle");
const profileLocation = document.querySelector("#profileLocation");
const contactGrid = document.querySelector("#contactGrid");

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey));
    if (saved && typeof saved === "object") return saved;
  } catch (error) {
    console.warn("Progress data could not be read.", error);
  }
  return { days: {} };
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(state.progress));
}

function getDayKey(index = state.selectedIndex) {
  return `day-${course[index].day}`;
}

function getDayProgress(index = state.selectedIndex) {
  const key = getDayKey(index);
  if (!state.progress.days[key]) {
    state.progress.days[key] = {
      openedAt: "",
      lastOpenedAt: "",
      completedAt: "",
      note: ""
    };
  }
  return state.progress.days[key];
}

function formatDate(value) {
  if (!value) return "Not yet";
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(new Date(value));
}

function formatDateTime(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|mailto:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

const contactIcons = {
  website: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21"></path></svg>',
  "personal-email": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>',
  "work-email": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="12" rx="2"></rect><path d="M8 7V5.8C8 4.8 8.8 4 9.8 4h4.4c1 0 1.8.8 1.8 1.8V7M3 11h18"></path></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4 4 20"></path></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 10v8M6.5 7.2v.1M11 18v-8M11 13.5c0-2.1 1.3-3.7 3.4-3.7 2 0 3.1 1.3 3.1 3.7V18"></path></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"></rect><circle cx="12" cy="12" r="3.5"></circle><path d="M17.5 6.8v.1"></path></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.5v-2c-2.4.5-2.9-1-2.9-1-.4-.9-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.3 2 1 2.5.8.1-.6.3-1 .6-1.2-1.9-.2-3.9-.9-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.4.9a8.1 8.1 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.4.3.7.9.7 1.8v2.4c0 .3.2.6.7.5A8.5 8.5 0 0 0 12 3.5Z"></path></svg>',
  telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 4-4 16-5.3-4.4L8 19l.8-5.7L3 11.2 21 4Z"></path><path d="m8.8 13.3 7.9-5.1"></path></svg>',
  scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 12 5l8 5.5-8 5.5-8-5.5Z"></path><path d="M7 13v4c1.4 1.2 3 1.8 5 1.8s3.6-.6 5-1.8v-4"></path></svg>'
};

function renderAboutProfile() {
  profileName.textContent = aboutProfile.name;
  profileTitle.textContent = aboutProfile.title;
  profileLocation.textContent = aboutProfile.location;
  profilePhoto.src = aboutProfile.photo;

  contactGrid.innerHTML = aboutProfile.contacts
    .map((contact) => {
      const icon = contactIcons[contact.id] || contactIcons.website;
      const classes = contact.href ? "contact-link" : "contact-link is-empty";
      const href = contact.href || "#";
      const target = contact.href && !contact.href.startsWith("mailto:") ? ' target="_blank" rel="noreferrer"' : "";
      return `
        <a class="${classes}" href="${escapeHtml(href)}"${target} aria-label="${escapeHtml(contact.label)}">
          <span class="contact-icon">${icon}</span>
          <span>
            <strong>${escapeHtml(contact.label)}</strong>
            <small>${escapeHtml(contact.value)}</small>
          </span>
        </a>
      `;
    })
    .join("");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let listType = null;
  let quoteLines = [];

  function closeList() {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  }

  function closeQuote() {
    if (quoteLines.length) {
      html.push(`<blockquote><p>${inlineMarkdown(quoteLines.join(" "))}</p></blockquote>`);
      quoteLines = [];
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      closeList();
      closeQuote();
      continue;
    }

    if (line.startsWith(">")) {
      closeList();
      quoteLines.push(line.replace(/^>\s?/, ""));
      continue;
    }

    closeQuote();

    if (line.startsWith("### ")) {
      closeList();
      html.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      closeList();
      html.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith("# ")) {
      closeList();
      html.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`);
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)/);
    if (ordered) {
      if (listType !== "ol") {
        closeList();
        html.push("<ol>");
        listType = "ol";
      }
      html.push(`<li>${inlineMarkdown(ordered[1])}</li>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)/);
    if (unordered) {
      if (listType !== "ul") {
        closeList();
        html.push("<ul>");
        listType = "ul";
      }
      html.push(`<li>${inlineMarkdown(unordered[1])}</li>`);
      continue;
    }

    closeList();
    html.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  closeList();
  closeQuote();
  return html.join("");
}

async function loadMarkdown(file, target, status) {
  status.textContent = "Loading...";
  target.innerHTML = "";

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Could not load ${file}`);
    const markdown = await response.text();
    target.innerHTML = renderMarkdown(markdown);
    status.textContent = "";
  } catch (error) {
    status.textContent = "This content could not be loaded. Start the site from a local web server so Markdown files can be fetched.";
    console.error(error);
  }
}

function renderDayList() {
  dayCount.textContent = `${course.length} days`;
  dayList.innerHTML = course
    .map((lesson, index) => `
      <button class="day-button" data-index="${index}" type="button">
        <span class="day-number">${lesson.day}</span>
        <span>
          <span class="day-title">${lesson.title}</span>
          <span class="day-meta">
            <span>${lesson.duration}</span>
            <span class="status-pill" data-status-for="${index}">Not started</span>
          </span>
        </span>
      </button>
    `)
    .join("");

  dayList.addEventListener("click", (event) => {
    const button = event.target.closest(".day-button");
    if (!button) return;
    selectDay(Number(button.dataset.index));
  });
}

function updateProgressSummary() {
  const records = course.map((_, index) => getDayProgress(index));
  const completed = records.filter((record) => record.completedAt).length;
  const started = records.filter((record) => record.openedAt).length;
  const percent = Math.round((completed / course.length) * 100);
  const latestActivity = records
    .map((record) => record.completedAt || record.lastOpenedAt || record.openedAt)
    .filter(Boolean)
    .sort();
  const latestActivityDate = latestActivity[latestActivity.length - 1];

  completedCount.textContent = `${completed} / ${course.length} days`;
  completionPercent.textContent = `${percent}%`;
  completionPercent.parentElement.style.background = `conic-gradient(var(--accent) ${percent * 3.6}deg, var(--faint) 0deg)`;
  startedCount.textContent = String(started);
  lastActivity.textContent = formatDate(latestActivityDate);
}

function updateDayStatuses() {
  course.forEach((_, index) => {
    const record = getDayProgress(index);
    const status = document.querySelector(`[data-status-for="${index}"]`);
    if (!status) return;

    status.classList.remove("is-started", "is-complete");
    if (record.completedAt) {
      status.textContent = "Complete";
      status.classList.add("is-complete");
    } else if (record.openedAt) {
      status.textContent = "Started";
      status.classList.add("is-started");
    } else {
      status.textContent = "Not started";
    }
  });
}

function updateLessonTracking() {
  const record = getDayProgress();

  if (record.completedAt) {
    lessonStatus.textContent = "Complete";
    lessonTrackingText.textContent = `Completed ${formatDateTime(record.completedAt)}.`;
    completeDay.textContent = "Mark incomplete";
    completeDay.classList.add("is-complete");
  } else if (record.openedAt) {
    lessonStatus.textContent = "In progress";
    lessonTrackingText.textContent = `Started ${formatDateTime(record.openedAt)}.`;
    completeDay.textContent = "Mark complete";
    completeDay.classList.remove("is-complete");
  } else {
    lessonStatus.textContent = "Not started";
    lessonTrackingText.textContent = "Open this lesson to start tracking.";
    completeDay.textContent = "Mark complete";
    completeDay.classList.remove("is-complete");
  }

  lessonNote.value = record.note || "";
  noteSaved.textContent = record.note ? "Saved locally in this browser" : "No note yet";
}

function refreshProgressUi() {
  updateProgressSummary();
  updateDayStatuses();
  updateLessonTracking();
}

function updateCourseControls() {
  const lesson = course[state.selectedIndex];
  document.querySelectorAll(".day-button").forEach((button, index) => {
    button.classList.toggle("is-active", index === state.selectedIndex);
  });

  currentDayLabel.textContent = `Day ${lesson.day} of ${course.length}`;
  progressFill.style.width = `${((state.selectedIndex + 1) / course.length) * 100}%`;
  prevDay.disabled = state.selectedIndex === 0;
  nextDay.disabled = state.selectedIndex === course.length - 1;
  refreshProgressUi();
}

function selectDay(index) {
  state.selectedIndex = Math.max(0, Math.min(index, course.length - 1));
  localStorage.setItem("pm-course-day", String(state.selectedIndex));
  const record = getDayProgress();
  const now = new Date().toISOString();
  record.openedAt ||= now;
  record.lastOpenedAt = now;
  saveProgress();
  updateCourseControls();
  loadMarkdown(course[state.selectedIndex].file, content, contentStatus);
}

function toggleCurrentDayCompletion() {
  const record = getDayProgress();
  record.completedAt = record.completedAt ? "" : new Date().toISOString();
  record.lastOpenedAt = new Date().toISOString();
  saveProgress();
  refreshProgressUi();
}

function saveCurrentNote() {
  const record = getDayProgress();
  record.note = lessonNote.value.trim();
  record.lastOpenedAt = new Date().toISOString();
  saveProgress();
  noteSaved.textContent = record.note ? "Saved locally in this browser" : "No note yet";
  updateProgressSummary();
}

function clearProgress() {
  const confirmed = window.confirm("Reset all local progress and notes for this course?");
  if (!confirmed) return;
  state.progress = { days: {} };
  saveProgress();
  refreshProgressUi();
}

function setRoute(route) {
  const routeChanged = state.route !== route;
  state.route = route;
  const isAbout = route === "about";
  courseView.hidden = isAbout;
  aboutView.hidden = !isAbout;
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.route === route));
  if (isAbout && !aboutContent.innerHTML) {
    loadMarkdown(aboutFile, aboutContent, aboutStatus);
  }
  if (routeChanged) {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

prevDay.addEventListener("click", () => selectDay(state.selectedIndex - 1));
nextDay.addEventListener("click", () => selectDay(state.selectedIndex + 1));
tabs.forEach((tab) => tab.addEventListener("click", () => setRoute(tab.dataset.route)));
completeDay.addEventListener("click", toggleCurrentDayCompletion);
lessonNote.addEventListener("input", saveCurrentNote);
resetProgress.addEventListener("click", clearProgress);
profilePhoto.addEventListener("error", () => {
  profilePhoto.hidden = true;
});
contactGrid.addEventListener("click", (event) => {
  const emptyLink = event.target.closest(".contact-link.is-empty");
  if (emptyLink) event.preventDefault();
});

renderAboutProfile();
renderDayList();
selectDay(Number.isNaN(state.selectedIndex) ? 0 : state.selectedIndex);
setRoute("course");
