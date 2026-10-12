const projectDetails = {
  agent: {
    kicker: '01 / AI APPLICATION & AGENT ENGINEERING',
    title: '璇小玑与作者诊断',
    intro: '2025.06 – 2025.12 · 面向创作者运营的查数、归因分析、平台知识问答与作品审核场景，建设璇玑 AI 助手与业务 Skill。',
    sections: [
      ['业务问题', '<p>运营人员需要跨平台查数、理解指标变化、查询平台规则，并完成大规模作品审核。Agent 的多轮上下文污染、参数幻觉与无依据生成，会直接影响业务使用效果。</p>'],
      ['Agent 工程：把不确定性收进确定性链路', '<ol><li><strong>查询改写与意图路由：</strong>设计独立查询改写节点，采用「规则 → Embedding / Milvus → LLM」三级路由。</li><li><strong>参数流水线：</strong>用「规则改写 → LLM 提取 → 代码校验」控制参数幻觉。</li><li><strong>检索质量：</strong>通过两阶段 RAG、Rerank 与空召回拦截，控制无依据生成。</li></ol>'],
      ['作者诊断：指标依赖与确定性计算', '<p>构建「指标—数据源」倒排索引与指标依赖树，路由 ClickHouse / API 并递归下钻；以 Aviator 配置确定性计算，输出 MCP 图表与 LLM 报告。</p>'],
      ['作品审核：可配置、可恢复的 Skill', '<p>将单次 Workflow 升级为可配置 Skill，抽象话题、时长、类目 / IP 和内容相关性节点。以「确定性规则 → LLM 语义判断 → 万擎视频理解 / IP 库兜底」分层审核，配套并发重试、任务续跑与 Excel 校验，支持业务自主改造复用。</p>']
    ],
    result: '<p><strong>Agent 效果：</strong>真实会话 Badcase 率 2.1%，调用成功率 99.5%。<br><strong>诊断效率：</strong>单次归因分析及报告由 30 分钟缩短至 30 秒，周使用人次 300+。<br><strong>审核规模：</strong>累计有效处理 105 万+ 条作品，整体准确率 92%+，综合节省约 57.6 万元及 2243 人日。</p>',
    stack: 'Multi-Agent / RAG / Tool Calling / MCP / Milvus / Rerank / Agent Skill / ClickHouse'
  },
  delivery: {
    kicker: '02 / AI NATIVE DELIVERY',
    title: '璇玑 AI Native 跨栈交付体系',
    intro: '2026.02 – 至今 · Harness、评测与 FDE 实践。面向璇玑 L3 与跨栈交付规模化，连接研发编排、验证、能力度量和反馈进化。',
    sections: [
      ['业务目标', '<p>通过 Dev / Testing Harness 编排研发与验证，以 A0 Lab 和真实需求 Benchmark 度量能力、定位失败原因，结合 Session / MR 反馈持续进化，支持 PDE 标准交付与 FDE 场景。</p>'],
      ['交付架构：先建立边界，再编排执行', '<ol><li><strong>需求级 SDD / Testing：</strong>建立 Module / Component、Canonical Workspace 与确定性 Harness Router。</li><li><strong>按技术栈路由：</strong>Java 自动路由至 Mina，Vue / KFaaS 由 Polaris 编排。</li><li><strong>跨仓风险控制：</strong>使用 API 契约、依赖门禁与组件级恢复，控制跨仓交付风险。</li></ol>'],
      ['PDE 流程与评测闭环', '<p>基于 Harness 定义 AI Native 跨栈交付流程，贯通 Spec、开发、部署及多端测试。建设 Session / MR 采集、Benchmark 评测与 Badcase 归因闭环，支撑 PDE 规模化落地。</p>']
    ],
    result: '<p><strong>工程整合：</strong>完成 47 个仓库 → 3 个工程，236 个纯 Java 服务 → 40+ 服务。<br><strong>团队应用：</strong>推动 Plugin 团队覆盖率达 100%，支撑 PDE 规模化落地。</p>',
    stack: 'SDD / Agent Harness / Skills / A0 Lab / Benchmark / Mina / Polaris / KTest / Java / Vue / KFaaS'
  },
  backend: {
    kicker: '03 / BACKEND ARCHITECTURE & DATA',
    title: '作者池平台化与高性能数据链路',
    intro: '2025.03 – 2025.09 · 面向 20+ 垂类运营团队，从 Excel、场景定制开发与割裂的数据链路，转向平台化与配置化。',
    sections: [
      ['业务问题', '<p>运营团队长期依赖 Excel；作者池逐场景定制开发；字段、规则、数据源与权限接入分散。约 12 亿行详情数据的稀疏访问、在池判断与批量集合运算，也对核心查询提出了性能要求。</p>'],
      ['领域平台化：以元数据驱动复用', '<p>主导运营架构升级，抽象公海 / 私海、作者在池关系与运营归属。围绕「作者池配置 → 自动入出池 → 分配认领 → 运营动作 → 日志快照」建立领域模型与自动化链路，驱动字段、规则、数据源、权限和运营动作的配置化接入。</p>'],
      ['高性能查询：按数据特征设计链路', '<ol><li><strong>状态索引：</strong>以 Redis ZSET 优化作者在池判断。</li><li><strong>集合传输：</strong>使用 RoaringBitmap 承接批量集合运算。</li><li><strong>搜索与详情：</strong>以 KBus CDC → ES 维护搜索索引，IDP + Kiwi 承接离线详情读取。</li></ol>']
    ],
    result: '<p><strong>平台复用：</strong>支撑 160+ 作者池，新场景节省 10 PD+，每周减少人工维护 36 小时+。<br><strong>查询性能：</strong>核心查询 1–10 ms，QPS 1 万+，位图压缩率 70%–90%。</p>',
    stack: 'Java / Spring Boot / DDD / MySQL / Redis ZSET / RoaringBitmap / KBus / Elasticsearch / ClickHouse / IDP / Kiwi'
  }
};

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '打开导航');
  navigation.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width:601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-category]').forEach(project => { project.hidden = filter !== 'all' && project.dataset.category !== filter; });
  });
});

const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectDetails[button.dataset.project];
    document.querySelector('#dialog-kicker').textContent = project.kicker;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-intro').textContent = project.intro;
    // All markup below is authored locally; no external or user-supplied HTML is inserted.
    document.querySelector('#dialog-content').innerHTML = project.sections.map(([title, body]) => `<section class="detail-section"><h3>${title}</h3>${body}</section>`).join('') + `<section class="detail-section"><h3>项目结果</h3><div class="detail-result">${project.result}</div></section><section class="detail-section"><h3>技术栈</h3><p>${project.stack}</p></section>`;
    closeMenu();
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
  });
});
document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
}
document.querySelector('.copy-email').addEventListener('click', async event => {
  const email = event.currentTarget.dataset.email;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else {
      const input = document.createElement('textarea');
      input.value = email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      if (!copied) throw new Error('Copy failed');
    }
    showToast('邮箱已复制，期待与你交流。');
  } catch {
    showToast(`复制未完成，请手动复制：${email}`);
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navigation.querySelectorAll('a').forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
['home', 'about', 'projects', 'expertise', 'experience', 'recognition', 'contact'].forEach(id => observer.observe(document.getElementById(id)));
document.querySelector('#year').textContent = new Date().getFullYear();
