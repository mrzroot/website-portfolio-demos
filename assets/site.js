(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- data gathered from the page (before any translation) ---------- */

  const projects = $$('.card[data-project]').map((card) => {
    const link = $('.card-link', card);
    return {
      key: card.dataset.project,
      name: link.textContent.trim(),
      url: link.getAttribute('href'),
      tagline: $('.card-tagline', card).textContent.trim(),
    };
  });

  const sections = [
    { id: 'top', label: 'Top' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Open source' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  const links = {
    github: 'https://github.com/mrzroot',
    linkedin: 'https://www.linkedin.com/in/mrzroot',
    telegram: 'https://t.me/mrzroot',
  };

  /* ---------- small utilities ---------- */

  function goTo(id) {
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (!el) return false;
    if (id === 'top') window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    else el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', id === 'top' ? location.pathname + location.search : '#' + id);
    return true;
  }

  function openUrl(url) {
    window.open(url, '_blank', 'noopener');
  }

  /* ---------- year + clock ---------- */

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  const clockEl = $('[data-clock]');
  if (clockEl) {
    let fmt;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', hour12: false });
    } catch { fmt = null; }
    const tick = () => { if (fmt) clockEl.textContent = fmt.format(new Date()) + ' IRST'; };
    tick();
    setInterval(tick, 15000);
  }

  /* ---------- modifier key label ---------- */

  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  $$('[data-mod-key]').forEach((el) => { el.textContent = isMac ? '⌘ K' : 'Ctrl K'; });

  /* ---------- nav state + progress ---------- */

  const nav = $('.nav');
  const bar = $('.progress span');
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      nav.classList.toggle('scrolled', y > 8);
      bar.style.setProperty('--p', max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
      ticking = false;
    });
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navLinks = $$('.nav-links a');
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        navLinks.forEach((a) => {
          const on = a.getAttribute('href') === '#' + e.target.id;
          a.classList.toggle('active', on);
          if (on) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach((s) => spy.observe(s));
  }

  /* ---------- reveal on scroll ---------- */

  const reveals = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      const batch = entries.filter((e) => e.isIntersecting);
      batch.forEach((e, i) => {
        e.target.style.setProperty('--d', Math.min(i * 0.07, 0.35) + 's');
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- card spotlight ---------- */

  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', e.clientX - r.left + 'px');
        card.style.setProperty('--my', e.clientY - r.top + 'px');
      });
    });
  }

  /* ---------- i18n (English default, optional Persian / RTL) ---------- */

  const FA = {
    'skip': 'رفتن به محتوا',
    'nav.about': 'درباره',
    'nav.work': 'متن‌باز',
    'nav.stack': 'ابزارها',
    'nav.contact': 'تماس',
    'hero.kicker': 'M-R-Z · مشهد، ایران',
    'hero.title': 'ابزارهای کاربردی،<br><span class="grad">با کدی تمیز.</span>',
    'hero.lede': 'من <strong>محمدرضا زارع</strong> هستم؛ توسعه‌دهنده‌ی پایتون و سازنده‌ی ابزارهای خودکارسازی. اسکریپت‌های بک‌اند، داشبوردهای سازمانی و ابزارهای متن‌باز می‌نویسم و تلاش می‌کنم کد ساده، سریع و خوانا بماند.',
    'hero.cta1': 'دیدن پروژه‌ها',
    'about.title': 'درباره من',
    'about.lead': 'مسئله‌هایی را دوست دارم که یک ابزار کوچک و خوش‌ساخت، ساعت‌ها کار تکراری را حذف کند.',
    'about.p1': 'بیشتر وقتم صرف خودکارسازی با پایتون، APIهای بک‌اند و داشبوردهای داخلی‌ای می‌شود که تیم‌ها هر روز با آن‌ها کار می‌کنند: عملیات پیامک، گردش کار بودجه، انبار و پیگیری درخواست‌ها. بسیاری از آن‌ها برنامه‌های فارسی و راست‌به‌چپ هستند؛ برای همین به درستیِ چیدمان RTL، تاریخ و ورود داده اهمیت می‌دهم.',
    'about.p2': 'در کنار آن، ابزارهای متن‌باز منتشر می‌کنم: افزونه‌ی مرورگر، پل چاپ، نمونه‌های CI و ابزار برای ایجنت‌های هوش مصنوعیِ برنامه‌نویسی؛ و یک فهرست گلچین‌شده از منابع برای توسعه‌دهندگان فارسی‌زبان را نگه‌داری می‌کنم.',
    'facts.role': 'نقش',
    'facts.roleV': 'توسعه‌دهنده‌ی پایتون · سازنده‌ی ابزار خودکارسازی',
    'facts.focus': 'تمرکز',
    'facts.focusV': 'خودکارسازی با پایتون، APIهای بک‌اند، ابزارهای متن‌باز',
    'facts.learning': 'در حال یادگیری',
    'facts.learningV': 'ابزارهای بک‌اند و داده',
    'facts.base': 'محل',
    'facts.baseV': 'مشهد، ایران',
    'facts.lang': 'زبان‌ها',
    'facts.langV': 'فارسی، انگلیسی',
    'pr.1': 'ساختن ابزارهای کاربردی برای مسئله‌های روزمره.',
    'pr.2': 'کد تمیز، خوانا و ساده؛ کمتر، بهتر است.',
    'pr.3': 'یادگیری مداوم و به‌اشتراک‌گذاشتن آن با جامعه.',
    'work.title': 'متن‌باز',
    'work.sub': 'مخزن‌های عمومی که می‌سازم و نگه‌داری می‌کنم. توضیحات صادقانه‌اند؛ پروژه‌ی کوچک، کوچک معرفی شده است.',
    'p.apdr.t': 'مرجع گلچین‌شده‌ی منابع توسعه‌دهندگان فارسی‌زبان',
    'p.apdr.d': 'فهرستی فارسی از ابزارهای توسعه، APIهای عمومی ایرانی، پکیج‌های پایتون، فونت‌ها و کیت‌های رابط کاربری فارسی، کتابخانه‌های NLP و هوش مصنوعی و نقشه‌راه‌ها؛ به‌همراه راهکارهای عملی برای سرویس‌های توسعه‌ی تحریم‌شده.',
    'p.uvd.t': 'افزونه‌ی Manifest V3 برای HLS / M3U8 / MP4',
    'p.uvd.d': 'افزونه‌ای برای Chrome و Edge که استریم‌های ویدیویی صفحه‌ی فعلی (پلی‌لیست‌های HLS/M3U8، MP4 و WebM) را شناسایی و با API دانلود مرورگر ذخیره می‌کند. همه‌ی بررسی‌ها داخل خود مرورگر انجام می‌شود.',
    'p.pb.t': 'پل چاپ محلی برای پرینترهای POS و حرارتی',
    'p.pb.d': 'برنامه‌ای کوچک در سینی سیستم که به برنامه‌های وب اجازه می‌دهد PDF و لیبل‌های حرارتی TSPL را بی‌صدا و بدون پنجره‌ی چاپ مرورگر، از طریق یک API محلی چاپ کنند. فورک‌شده از AnouarSbia/printbridge برای کاربردهای POS و لیبل.',
    'p.af.t': 'ابزار مدیریت دستورالعمل‌های ایجنت‌های هوش مصنوعی',
    'p.af.d': 'یک CLI که یک فایل قوانین را بین Cursor، Claude Code، Copilot، Windsurf، Aider و ابزارهای دیگر هم‌گام نگه می‌دارد، کانتکست کد را به اسکلت‌های فشرده‌ی AST تبدیل می‌کند و فایل‌های قوانین را از نظر تناقض و نشت کلیدها بررسی می‌کند.',
    'p.jk.t': 'نمونه‌های پایپ‌لاین CI/CD اعلانی',
    'p.jk.d': 'مجموعه‌ای کوچک از پایپ‌لاین‌های اعلانی Jenkins با Groovy (یک پایپ‌لاین مرحله‌ای و نسخه‌ای با SCM polling) به‌عنوان نقطه‌ی شروعی روشن برای pipeline-as-code.',
    'toc.1': 'ابزارهای رفع تحریم',
    'toc.2': 'APIهای عمومی ایران',
    'toc.3': 'پکیج‌های پایتون',
    'toc.4': 'فونت و رابط کاربری فارسی',
    'toc.5': 'هوش مصنوعی و NLP فارسی',
    'toc.6': 'پرداخت آنلاین و پیامک',
    'toc.7': 'کتاب و نقشه‌راه',
    'card.repo': 'مخزن',
    'card.fork': 'فورک',
    'stack.title': 'ابزارها',
    'stack.sub': 'ابزارهایی که هر روز با آن‌ها کار می‌کنم. نوار مهارت نگذاشته‌ام؛ پروژه‌های بالا گواه‌اند.',
    'contact.title': 'کاری دارید که باید خودش انجام شود؟',
    'contact.sub': 'خوشحال می‌شوم درباره‌ی خودکارسازی، ابزارهای داخلی، داشبوردها و همکاری متن‌باز صحبت کنیم. مطمئن‌ترین راه تماس، تلگرام است.',
    'contact.pref': 'راه ترجیحی · تلگرام',
    'footer.built': 'HTML، CSS و JS ساده · میزبانی روی GitHub Pages',
    'footer.src': 'مشاهده‌ی کد',
  };

  const i18nEls = $$('[data-i18n]');
  i18nEls.forEach((el) => { el.dataset.en = el.innerHTML; });
  const langToggle = $('[data-lang-toggle]');
  const langLabel = $('[data-lang-label]');
  const paletteInput = $('[data-palette-input]');
  const enTitle = document.title;
  let lang = 'en';

  function setLang(next, persist = true) {
    lang = next === 'fa' ? 'fa' : 'en';
    root.lang = lang;
    root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    i18nEls.forEach((el) => {
      const v = lang === 'fa' ? FA[el.dataset.i18n] : null;
      el.innerHTML = v ?? el.dataset.en;
    });
    langLabel.textContent = lang === 'fa' ? 'EN' : 'FA';
    langToggle.setAttribute('aria-label', lang === 'fa' ? 'Switch language to English' : 'Switch language to Persian');
    document.title = lang === 'fa' ? 'محمدرضا زارع · mrzroot — توسعه‌دهنده‌ی پایتون' : enTitle;
    paletteInput.placeholder = lang === 'fa' ? 'پرش به بخش، پروژه یا فرمان…' : 'Jump to a section, project or action…';
    if (persist) { try { localStorage.setItem('mrz-lang', lang); } catch { /* storage unavailable */ } }
  }

  langToggle.addEventListener('click', () => setLang(lang === 'fa' ? 'en' : 'fa'));
  const urlLang = new URLSearchParams(location.search).get('lang');
  let storedLang = null;
  try { storedLang = localStorage.getItem('mrz-lang'); } catch { /* storage unavailable */ }
  if (urlLang === 'fa' || urlLang === 'en') setLang(urlLang, false);
  else if (storedLang === 'fa') setLang('fa', false);

  /* ---------- terminal ---------- */

  const termRoot = $('[data-terminal]');
  const termLog = $('[data-term-log]');
  const termBody = $('[data-term-body]');
  const termForm = $('[data-term-form]');
  const termInput = $('#term-cmd');

  const developerPy = [
    '<span class="t-k">class</span> <span class="t-f">Developer</span>:',
    '    <span class="t-k">def</span> <span class="t-f">__init__</span>(self):',
    '        self.name = <span class="t-s">"M-R-Z"</span>',
    '        self.handle = <span class="t-s">"mrzroot"</span>',
    '        self.interests = [<span class="t-s">"Python Automation"</span>, <span class="t-s">"Backend APIs"</span>, <span class="t-s">"Open Source Tools"</span>]',
    '',
    '    <span class="t-k">def</span> <span class="t-f">current_mission</span>(self) -> <span class="t-f">str</span>:',
    '        <span class="t-k">return</span> <span class="t-s">"Creating lightweight, easy-to-use Python tools for developers!"</span>',
  ];

  function print(html = '') {
    const p = document.createElement('p');
    p.innerHTML = html;
    termLog.appendChild(p);
    termBody.scrollTop = termBody.scrollHeight;
    return p;
  }
  const promptLine = (cmd) => `<span class="p">$</span> ${esc(cmd)}`;
  const pad = (s, n) => s + ' '.repeat(Math.max(1, n - s.length));

  const commands = {
    help() {
      [
        ['whoami', 'who I am'],
        ['about', 'short bio'],
        ['projects', 'open-source repositories'],
        ['open <name>', 'open a repository, e.g. open printbridge'],
        ['stack', 'tools I use'],
        ['contact', 'ways to reach me'],
        ['telegram', 'message me on Telegram (preferred)'],
        ['goto <section>', 'scroll to about | work | stack | contact'],
        ['lang fa|en', 'switch site language'],
        ['cat developer.py', 'the profile class'],
        ['clear', 'clear the screen'],
      ].forEach(([c, d]) => print(`  <span class="p">${esc(pad(c, 18))}</span><span class="t-mut">${esc(d)}</span>`));
      print('<span class="t-dim">  tip: Tab completes, ↑/↓ walks history, Ctrl/⌘ K opens the command palette.</span>');
    },
    whoami() {
      print('mohammadreza zare <span class="t-dim">(M-R-Z · @mrzroot)</span>');
      print('<span class="t-mut">python developer · automation builder · open-source enthusiast · mashhad, iran</span>');
    },
    about() {
      print('<span class="t-mut">I build practical Python tools, backend APIs and internal dashboards —</span>');
      print('<span class="t-mut">many of them Persian, right-to-left business apps — and publish small</span>');
      print('<span class="t-mut">open-source utilities on the side. Simple, fast, readable.</span>');
      print('<span class="t-dim">→ goto about</span>');
    },
    projects() {
      projects.forEach((p) => {
        print(`  <a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>`);
        print(`    <span class="t-dim">${esc(p.tagline)}</span>`);
      });
      print('<span class="t-dim">→ open &lt;name&gt;</span>');
    },
    stack() {
      [
        ['languages', 'Python  TypeScript  JavaScript  PHP  SQL'],
        ['backend', 'Flask  Django  Laravel  REST APIs'],
        ['frontend', 'Vue 3  React  RTL layouts  browser extensions'],
        ['data', 'MySQL  SQLite'],
        ['tooling', 'Git  GitHub  Jenkins  Node.js'],
      ].forEach(([k, v]) => print(`  <span class="t-n">${pad(k, 11)}</span>${esc(v)}`));
    },
    contact() {
      print(`  <span class="t-n">telegram</span> <a href="${links.telegram}" target="_blank" rel="noopener">t.me/mrzroot</a> <span class="t-ok">← preferred</span>`);
      print(`  <span class="t-n">github  </span> <a href="${links.github}" target="_blank" rel="noopener">github.com/mrzroot</a>`);
      print(`  <span class="t-n">linkedin</span> <a href="${links.linkedin}" target="_blank" rel="noopener">linkedin.com/in/mrzroot</a>`);
    },
    telegram() {
      print('<span class="t-ok">→ opening t.me/mrzroot…</span>');
      openUrl(links.telegram);
    },
    open(arg) {
      const q = (arg || '').toLowerCase();
      if (!q) return print('<span class="t-err">usage: open &lt;name&gt;</span> <span class="t-dim">— try: open agentforge</span>');
      const target = findTarget(q);
      if (!target) return print(`<span class="t-err">no project matching "${esc(q)}"</span> <span class="t-dim">— see projects</span>`);
      print(`<span class="t-ok">→ opening ${esc(target.name)}…</span>`);
      openUrl(target.url);
    },
    goto(arg) {
      const q = (arg || '').toLowerCase().replace(/^#/, '');
      const map = { projects: 'work', 'open-source': 'work', home: 'top' };
      const id = map[q] || q;
      if (!sections.some((s) => s.id === id)) return print('<span class="t-err">usage: goto about | work | stack | contact</span>');
      print(`<span class="t-dim">→ #${esc(id)}</span>`);
      goTo(id);
    },
    lang(arg) {
      if (arg !== 'fa' && arg !== 'en') return print('<span class="t-err">usage: lang fa | lang en</span>');
      setLang(arg);
      print(`<span class="t-ok">✓ language set to ${arg === 'fa' ? 'فارسی (RTL)' : 'English'}</span>`);
    },
    cat(arg) {
      if (arg !== 'developer.py') return print(`<span class="t-err">cat: ${esc(arg || '')}: no such file</span> <span class="t-dim">— try: cat developer.py</span>`);
      developerPy.forEach((l) => print(l));
    },
    ls() {
      print('<span class="p">about/  projects/  stack/  contact/</span>  developer.py');
    },
    clear() { termLog.innerHTML = ''; },
    sudo() { print('<span class="t-dim">nice try — this site runs fine without root.</span>'); },
  };
  const aliases = { '?': 'help', 'h': 'help', 'work': 'projects', 'repos': 'projects', 'tg': 'telegram', 'cls': 'clear' };

  function findTarget(q) {
    const pool = projects.map((p) => ({ name: p.name, url: p.url, keys: [p.key, p.name] }));
    return pool.find((t) => t.keys.some((k) => k === q))
      || pool.find((t) => t.keys.some((k) => k.startsWith(q)))
      || pool.find((t) => t.keys.some((k) => k.includes(q)));
  }

  const cmdHistory = [];
  let hIdx = 0;

  async function run(raw) {
    const line = raw.trim();
    print(promptLine(line));
    if (!line) return;
    cmdHistory.push(line);
    hIdx = cmdHistory.length;
    const [first, ...rest] = line.split(/\s+/);
    const name = aliases[first.toLowerCase()] || first.toLowerCase();
    const fn = commands[name];
    if (fn) await fn(rest.join(' '));
    else print(`<span class="t-err">command not found: ${esc(first)}</span> <span class="t-dim">— type help</span>`);
  }

  function complete(value) {
    const parts = value.split(/\s+/);
    if (parts.length === 1) {
      const hits = Object.keys(commands).filter((c) => c.startsWith(parts[0].toLowerCase()));
      if (hits.length === 1) return hits[0] + ' ';
      if (hits.length > 1) print(promptLine(value) + '\n<span class="t-dim">' + hits.join('  ') + '</span>');
      return value;
    }
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();
    const opts = cmd === 'open' ? projects.map((p) => p.name)
      : cmd === 'goto' ? sections.map((s) => s.id)
      : cmd === 'lang' ? ['fa', 'en']
      : cmd === 'cat' ? ['developer.py'] : [];
    const hits = opts.filter((o) => o.startsWith(arg));
    if (hits.length === 1) return `${parts[0]} ${hits[0]}`;
    if (hits.length > 1) print(promptLine(value) + '\n<span class="t-dim">' + hits.join('  ') + '</span>');
    return value;
  }

  termForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = termInput.value;
    termInput.value = '';
    run(v);
  });
  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && termInput.value.trim()) {
      e.preventDefault();
      termInput.value = complete(termInput.value);
    } else if (e.key === 'ArrowUp' && cmdHistory.length) {
      e.preventDefault();
      hIdx = Math.max(0, hIdx - 1);
      termInput.value = cmdHistory[hIdx];
    } else if (e.key === 'ArrowDown' && cmdHistory.length) {
      e.preventDefault();
      hIdx = Math.min(cmdHistory.length, hIdx + 1);
      termInput.value = cmdHistory[hIdx] || '';
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      commands.clear();
    }
  });
  termBody.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    if (!getSelection().toString()) termInput.focus({ preventScroll: true });
  });

  /* boot sequence: types a couple of commands, then hands over the prompt */
  const boot = [
    { cmd: 'whoami' },
    { run: () => commands.whoami() },
    { cmd: 'cat developer.py' },
    { run: () => commands.cat('developer.py') },
    { run: () => print('') },
    { run: () => print('<span class="t-dim">type </span><span class="p">help</span><span class="t-dim"> to explore — or press ' + (isMac ? '⌘' : 'Ctrl') + ' K anywhere.</span>') },
  ];
  let booting = true;
  let skipBoot = false;
  const sleep = (ms) => new Promise((r) => setTimeout(r, skipBoot ? 0 : ms));

  async function typeCmd(cmd) {
    const p = print('<span class="p">$</span> <span data-typed></span><span class="caret"></span>');
    const t = $('[data-typed]', p);
    for (const ch of cmd) {
      if (skipBoot) break;
      t.textContent += ch;
      await sleep(38 + Math.random() * 45);
    }
    t.textContent = cmd;
    await sleep(260);
    $('.caret', p)?.remove();
    t.removeAttribute('data-typed');
  }

  async function runBoot() {
    termForm.classList.add('hidden');
    termLog.innerHTML = '';
    for (const step of boot) {
      if (step.cmd) await typeCmd(step.cmd);
      else { step.run(); await sleep(step === boot[1] ? 380 : 40); }
    }
    booting = false;
    termForm.classList.remove('hidden');
  }

  function finishBootNow() { if (booting) skipBoot = true; }
  termRoot.addEventListener('pointerdown', finishBootNow);
  termRoot.addEventListener('focusin', finishBootNow);

  if (reduceMotion) {
    skipBoot = true;
    runBoot();
  } else if ('IntersectionObserver' in window) {
    const bootObs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        bootObs.disconnect();
        setTimeout(runBoot, 450);
      }
    }, { threshold: 0.3 });
    bootObs.observe(termRoot);
  } else {
    runBoot();
  }

  /* ---------- command palette ---------- */

  const palette = $('[data-palette]');
  const list = $('[data-palette-list]');
  let lastFocus = null;
  let selected = 0;
  let visible = [];

  function paletteItems() {
    const fa = lang === 'fa';
    const sectionLabels = fa
      ? { top: 'بالای صفحه', about: 'درباره', work: 'متن‌باز', stack: 'ابزارها', contact: 'تماس' }
      : null;
    return [
      ...sections.map((s) => ({
        group: fa ? 'پیمایش' : 'Navigate', icon: '#', label: sectionLabels ? sectionLabels[s.id] : s.label,
        hint: s.id === 'top' ? '' : '#' + s.id, run: () => goTo(s.id),
      })),
      ...projects.map((p) => ({
        group: fa ? 'پروژه‌ها' : 'Projects', icon: '↗', label: p.name, hint: 'github',
        run: () => openUrl(p.url),
      })),
      { group: fa ? 'فرمان‌ها' : 'Actions', icon: '✈', label: fa ? 'پیام در تلگرام' : 'Message me on Telegram', hint: 't.me/mrzroot', run: () => openUrl(links.telegram) },
      { group: fa ? 'فرمان‌ها' : 'Actions', icon: 'A', label: fa ? 'Switch to English' : 'نمایش فارسی (Switch to Persian)', hint: fa ? 'EN' : 'FA', run: () => setLang(fa ? 'en' : 'fa') },
      { group: fa ? 'فرمان‌ها' : 'Actions', icon: '>', label: fa ? 'رفتن به ترمینال' : 'Focus the terminal', hint: 'hero', run: () => { goTo('top'); finishBootNow(); setTimeout(() => termInput.focus({ preventScroll: true }), 350); } },
      { group: fa ? 'پروفایل‌ها' : 'Profiles', icon: '↗', label: 'GitHub', hint: '@mrzroot', run: () => openUrl(links.github) },
      { group: fa ? 'پروفایل‌ها' : 'Profiles', icon: '↗', label: 'LinkedIn', hint: 'in/mrzroot', run: () => openUrl(links.linkedin) },
    ];
  }

  function renderPalette() {
    const q = paletteInput.value.trim().toLowerCase();
    visible = paletteItems().filter((it) => !q || (it.label + ' ' + it.hint + ' ' + it.group).toLowerCase().includes(q));
    selected = Math.min(selected, Math.max(0, visible.length - 1));
    if (!visible.length) {
      list.innerHTML = `<li class="palette-empty">${lang === 'fa' ? 'نتیجه‌ای پیدا نشد' : 'No results'}</li>`;
      paletteInput.removeAttribute('aria-activedescendant');
      return;
    }
    let html = '';
    let group = '';
    visible.forEach((it, i) => {
      if (it.group !== group) {
        group = it.group;
        html += `<li class="palette-group" role="presentation">${esc(group)}</li>`;
      }
      html += `<li class="palette-item" role="option" id="pi-${i}" data-i="${i}" aria-selected="${i === selected}"><span class="pi-icon" aria-hidden="true">${esc(it.icon)}</span><span>${esc(it.label)}</span>${it.hint ? `<small>${esc(it.hint)}</small>` : ''}</li>`;
    });
    list.innerHTML = html;
    paletteInput.setAttribute('aria-activedescendant', 'pi-' + selected);
  }

  function select(i) {
    if (!visible.length) return;
    selected = (i + visible.length) % visible.length;
    $$('.palette-item', list).forEach((el) => el.setAttribute('aria-selected', String(+el.dataset.i === selected)));
    paletteInput.setAttribute('aria-activedescendant', 'pi-' + selected);
    $('#pi-' + selected, list)?.scrollIntoView({ block: 'nearest' });
  }

  function openPalette() {
    if (!palette.hidden) return;
    lastFocus = document.activeElement;
    palette.hidden = false;
    paletteInput.value = '';
    selected = 0;
    renderPalette();
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => paletteInput.focus());
  }

  function closePalette(restore = true) {
    if (palette.hidden) return;
    palette.hidden = true;
    document.body.style.overflow = '';
    if (restore && lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  }

  function runSelected(i = selected) {
    const it = visible[i];
    if (!it) return;
    closePalette(false);
    it.run();
  }

  $$('[data-palette-open]').forEach((b) => b.addEventListener('click', openPalette));
  $$('[data-palette-close]').forEach((b) => b.addEventListener('click', () => closePalette()));
  paletteInput.addEventListener('input', () => { selected = 0; renderPalette(); });
  paletteInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); select(selected + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); select(selected - 1); }
    else if (e.key === 'Enter') { e.preventDefault(); runSelected(); }
    else if (e.key === 'Tab') { e.preventDefault(); }
  });
  list.addEventListener('click', (e) => {
    const item = e.target.closest('.palette-item');
    if (item) runSelected(+item.dataset.i);
  });
  list.addEventListener('pointermove', (e) => {
    const item = e.target.closest('.palette-item');
    if (item && +item.dataset.i !== selected) select(+item.dataset.i);
  });

  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      palette.hidden ? openPalette() : closePalette();
    } else if (e.key === 'Escape' && !palette.hidden) {
      e.preventDefault();
      closePalette();
    } else if (e.key === '/' && !typing && palette.hidden) {
      e.preventDefault();
      openPalette();
    }
  });
})();
