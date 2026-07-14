const skillData = {
  sysadmin: {
    title: 'System Administration',
    tags: [
      'Deploy on-premise apps', 'Server operations', 'Uptime monitoring',
      'Backup & recovery', 'Performance tuning', 'Security maintenance', 'Issue troubleshooting'
    ],
    highlight: [0, 1, 2]
  },
  dev: {
    title: 'Software Development',
    tags: [
      'PHP', 'JavaScript', 'Laravel', 'Symfony', 'C#', 'ASP.NET',
      'MySQL', 'ProcMIS', 'SRIS', 'RYPIC Portal', 'Production deployment'
    ],
    highlight: [2, 3, 4, 5]
  },
  devops: {
    title: 'DevOps & Infrastructure',
    tags: [
      'Server deployment', 'Application hosting', 'Public system publishing',
      'System monitoring', 'Backup management', 'Production support', 'Infrastructure maintenance'
    ],
    highlight: [0, 2, 4]
  },
  network: {
    title: 'Network Support',
    tags: [
      'Router configuration', 'Switch configuration', 'Internet connectivity',
      'LAN troubleshooting', 'Network diagnostics'
    ],
    highlight: [0, 1, 2]
  },
  support: {
    title: 'Technical Support',
    tags: [
      'RAM troubleshooting', 'Boot failures', 'Workstation issues',
      'Peripheral setup', 'Windows support', 'Software install',
      'User accounts', 'Printer setup', 'Printer connectivity'
    ],
    highlight: [0, 4, 7]
  }
};

function selectSkill(key, el) {
  document.querySelectorAll('.pg-skill-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');

  const d = skillData[key];
  document.getElementById('detailTitle').textContent = d.title;

  const tagsEl = document.getElementById('detailTags');
  tagsEl.innerHTML = d.tags.map((t, i) =>
    `<span class="pg-tag${d.highlight.includes(i) ? ' highlight' : ''}">${t}</span>`
  ).join('');
}

// Init with sysadmin selected
document.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('[data-key="sysadmin"]');
  if (first) selectSkill('sysadmin', first);
});
