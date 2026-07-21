document.addEventListener('DOMContentLoaded', () => {
    const originalTitle = document.title;
    const translations = {
        'Home': '홈',
        'About': '협회소개',
        'Membership': '회원가입',
        'Activities': '주요사업',
        'Resources': '자료실',
        'Contact': '문의',
        'Korean British Lawyers Association': '한영변호사협회',
        'Bridging Legal Excellence': '법률 전문성으로 한국과 영국을 잇습니다',
        'Join KOBRLA': 'KOBRLA 가입하기',
        'Learn More': '자세히 보기',
        'Welcome to KOBRLA': 'KOBRLA에 오신 것을 환영합니다',
        'KOBRLA is dedicated to fostering collaboration and professional growth between legal communities in the UK and Korea. We protect our members\' rights, share legal knowledge, and promote diversity and inclusion.': 'KOBRLA는 영국과 한국의 법률 공동체 간 협력과 전문적 성장을 촉진합니다. 회원의 권익을 보호하고 법률 지식을 공유하며 다양성과 포용성을 증진합니다.',
        'About Us': '협회 소개',
        'Learn about our mission, history, and organizational structure.': '협회의 사명, 비전과 조직 체계를 소개합니다.',
        'Explore membership tiers, benefits, and join our network.': '회원 유형과 혜택을 살펴보고 전문 네트워크에 참여하세요.',
        'Discover our seminars, networking events, and pro bono work.': '세미나, 네트워킹, 지역사회 법률교육 활동을 확인하세요.',
        'Latest News': '최근 소식',
        'Coming Soon': '준비 중',
        'Website Launch': '공식 홈페이지 개설',
        'Welcome to the new official website of the Korean British Lawyers Association.': '한영변호사협회 공식 홈페이지에 오신 것을 환영합니다.',
        'About KOBRLA': '한영변호사 협회 소개',
        'Our Mission & Vision': '사명과 비전',
        'Guided by our motto "Collaboratio et Pax per Legem", KOBRLA is established to achieve the following objectives (Article 4 of Articles of Association):': 'KOBRLA는 “법을 통한 협력과 평화”라는 기치 아래 다음 목적을 실현하기 위해 설립되었습니다.',
        'Facilitate exchange and networking among members.': '회원 간 교류와 전문 네트워크를 촉진합니다.',
        'Protect members\' professional legal rights and promote welfare.': '회원의 전문적 권익을 보호하고 복지를 증진합니다.',
        'Share knowledge on UK-Korea legal practices and systems.': '영국과 한국의 법률제도 및 실무 지식을 공유합니다.',
        'Provide education to enhance legal expertise.': '법률 전문성을 높이기 위한 교육을 제공합니다.',
        'Promote diversity, inclusion, and non-discrimination.': '다양성, 포용성과 차별금지를 증진합니다.',
        'Support the Korean community through pro bono activities.': '공익활동과 법률교육을 통해 한인사회를 지원합니다.',
        'Organization': '조직',
        'President': '회장',
        'Vice-Presidents': '부회장',
        'Auditors': '감사',
        'Directors': '이사',
        'Committees': '위원회',
        'Education Committee': '교육위원회',
        'Developing seminars and CPD programs.': '세미나와 전문교육 프로그램을 기획합니다.',
        'Fellowship Committee': '회원교류위원회',
        'Organizing networking and cultural events.': '네트워킹과 문화교류 행사를 운영합니다.',
        'Rights Protection Committee': '권익보호위원회',
        'Handling grievances and providing legal counsel for members.': '회원의 고충을 접수하고 권익 보호를 지원합니다.',
        'Ethics Committee': '윤리위원회',
        'Overseeing ethical compliance and disciplinary matters.': '윤리 준수와 관련 절차를 감독합니다.',
        "Int'l Cooperation Committee": '국제협력위원회',
        'Partnering with global legal organizations.': '국내외 법률·학술기관과 협력합니다.',
        'Ethics & Conduct': '윤리와 행동규범',
        'KOBRLA members are bound by a strict Code of Ethics. We uphold professionalism, integrity, and mutual respect.': 'KOBRLA 회원은 전문성, 청렴성 및 상호 존중의 원칙을 준수합니다.',
        'View Full Code of Ethics': '윤리규정 보기',
        'Join our network of legal professionals': '한영 법률 전문가 네트워크에 함께하세요',
        'Membership Types': '회원 유형',
        'Full Member (정회원)': '정회원',
        'Associate Member (준회원)': '준회원',
        'Student Member (학생회원)': '학생회원',
        'Institutional Member (기관회원)': '기관회원',
        'Korean Attorneys (Byeonhosa)': '대한민국 변호사',
        'UK Solicitors & Barristers': '영국 사무변호사 및 법정변호사',
        'CILEX Fellows': 'CILEX 회원',
        'Dual Qualified Lawyers': '복수 자격 변호사',
        'Foreign Lawyers (involved in UK-Korea work)': '한영 업무에 참여하는 외국 변호사',
        'Patent Attorneys, Accountants': '변리사 및 회계사',
        'Translators/Interpreters in legal field': '법률 전문 번역·통역인',
        'UK Law Students (LLB, BA Law)': '영국 법학과 학생',
        'GDL, LPC, BPTC, SQE Candidates': '법조자격 준비생',
        'Korean Law School Students': '한국 법학전문대학원생',
        'Trainee Solicitors & Pupil Barristers': '수습 사무변호사 및 법정변호사',
        'Law Firms': '법률사무소 및 로펌',
        'Legal Institutions': '법률·학술기관',
        'Related Organizations': '관련 기업 및 단체',
        'Member Welfare & Rights': '회원 권익과 지원',
        'Grievance System': '고충처리제도',
        'Our Rights Protection Committee handles grievances regarding discrimination, harassment, or unfair treatment. All reports are confidential and protected from retaliation.': '권익보호위원회는 차별, 괴롭힘 또는 부당한 대우에 관한 고충을 처리합니다. 모든 신고는 비밀로 관리되며 불이익으로부터 보호됩니다.',
        'Report a Grievance →': '고충 신고하기 →',
        'Ready to Join?': '함께하시겠습니까?',
        'Apply for membership today and be part of the community.': '지금 회원으로 가입하여 한영 법률 전문가 공동체에 참여하세요.',
        'Apply Now': '가입 신청',
        'Education, Networking, and Community Service': '교육, 전문교류와 지역사회 기여',
        'Education & CPD': '법률교육 및 전문연수',
        'Regular Seminars': '정기 세미나',
        'Analysis of latest legal trends in UK and Korea. Specialized deep-dive sessions.': '영국과 한국의 최신 법률·규제 동향을 분석하고 분야별 심화 세션을 개최합니다.',
        'Continuing Professional Development': '지속적 전문역량 개발',
        'Practical workshops and online courses to maintain and enhance professional competence.': '실무 워크숍과 온라인 교육으로 회원의 전문역량을 강화합니다.',
        'Networking': '전문 네트워킹',
        'Monthly Networking Dinners: Casual gatherings for members.': '월례 네트워킹: 회원 간 교류를 위한 정기 모임입니다.',
        "Annual Gala: A formal evening celebrating the year's achievements.": '연례행사: 한 해의 성과와 협력을 함께 기념합니다.',
        'Cultural Events: Golf outings and cultural experiences for families.': '문화교류: 회원과 가족이 함께하는 다양한 교류 행사를 진행합니다.',
        'Public Interest & Pro Bono': '공익 및 지역사회 법률교육',
        'KOBRLA is committed to giving back to the community.': 'KOBRLA는 전문성을 바탕으로 지역사회에 기여합니다.',
        'Legal Clinics': '법률정보 세미나',
        'Free legal consultation sessions for the Korean community.': '한인사회를 위한 이중언어 법률정보 세미나와 안내자료를 제공합니다.',
        'Social Support': '지역사회 지원',
        'Supporting the underprivileged and promoting social justice.': '취약계층을 지원하고 공정한 법률 접근성을 증진합니다.',
        'Project Pro Bono': '공익 협력사업',
        'Collaborative pro bono projects with partner organizations.': '파트너 기관과 공익 목적의 공동 프로젝트를 추진합니다.',
        'Career Centre, Publications, and Governance': '진로지원, 간행물과 협회 운영자료',
        'Career Centre': '진로지원센터',
        'For Job Seekers': '구직자 지원',
        'Law Firm Positions': '로펌 채용정보',
        'In-house Counsel Roles': '사내변호사 채용정보',
        'Training Contracts': '트레이닝 컨트랙트 정보',
        'Student Support': '학생·청년법조인 지원',
        'SQE & Bar Course Info': 'SQE 및 Bar 과정 안내',
        'CV Writing Workshops': 'CV 및 면접 워크숍',
        'Mentoring Programs': '멘토링 프로그램',
        'Governance Documents': '협회 운영자료',
        'Articles of Association': '정관',
        'Download the full KOBRLA Constitution.': 'KOBRLA 정관을 확인하세요.',
        'Code of Ethics': '윤리규정',
        'Standards of professional conduct for members.': '회원이 준수해야 할 전문직 행동기준입니다.',
        'Download': '다운로드',
        'Privacy & Data Protection': '개인정보 및 데이터 보호',
        'KOBRLA respects your privacy. We collect data for membership management and association activities strictly in accordance with our Articles (Chapter 7).': 'KOBRLA는 개인정보를 존중하며 회원관리와 협회활동에 필요한 정보만 관련 법령과 내부 규정에 따라 처리합니다.',
        'Right to access personal data': '개인정보 열람권',
        'Right to rectification': '정정 요구권',
        'No third-party data sharing without consent': '동의 없는 제3자 제공 금지',
        'Contact Us': '문의하기',
        'Get in touch with KOBRLA': 'KOBRLA에 연락해 주세요',
        'Get in Touch': '연락처',
        'Have questions about membership, events, or our organization? Reach out to us.': '회원가입, 행사 또는 협회와의 협력에 관한 문의를 보내주세요.',
        'Email': '이메일',
        'Website': '웹사이트',
        'Social Media': '소셜미디어',
        'Send us a Message': '메시지 보내기',
        'Name': '이름',
        'Subject': '문의 유형',
        'General Inquiry': '일반 문의',
        'Membership Application': '회원가입 문의',
        'Grievance Report (Confidential)': '고충 신고(비공개)',
        'Partnership Proposal': '협력 제안',
        'Message': '메시지',
        'Send Message': '보내기',
        'Privacy choices': '개인정보 동의 선택',
        'Required:': '필수:',
        'I have read the': '다음 문서를 확인했습니다:',
        'Privacy Policy': '개인정보처리방침',
        'and agree that KOBRLA may use my information to respond to this enquiry.': '문의에 답변하기 위해 KOBRLA가 제 정보를 처리하는 데 동의합니다.',
        'Optional:': '선택:',
        'I would like to receive KOBRLA news, event invitations and professional updates. I can unsubscribe at any time.': 'KOBRLA 소식, 행사 초청 및 전문 정보를 이메일로 받겠습니다. 언제든지 수신을 철회할 수 있습니다.',
        'Please do not include unnecessary sensitive or confidential information. Submitting this form does not create a solicitor-client relationship.': '불필요한 민감정보나 비밀정보는 입력하지 마십시오. 이 양식을 제출해도 변호사와 의뢰인의 관계가 성립하지 않습니다.',
        'Legal & Privacy': '법적 고지 및 개인정보 보호',
        'Important information about using this website and your data': '웹사이트 이용 및 개인정보 처리에 관한 중요 안내',
        'Legal Notice': '법적 고지',
        'Terms of Use': '이용약관',
        'Cookie Notice': '쿠키 안내',
        'Cookie Settings': '쿠키 설정',
        'Marketing Consent': '마케팅 수신 동의',
        'Forms & Self-assessment': '문의·자가진단 양식',
        'Open Cookie Settings': '쿠키 설정 열기',
        'Benefits:': '혜택:',
        'Voting rights, eligibility for office, full access to events.': '의결권, 임원 선임자격 및 전체 행사 참여권',
        'Access to seminars and networking events.': '세미나와 네트워킹 행사 참여',
        'Mentoring, career support, discounted fees.': '멘토링, 진로지원 및 참가비 할인',
        'Monthly Networking Dinners': '월례 네트워킹 모임',
        ': Casual gatherings for members.': ': 회원 간 교류를 위한 정기 모임입니다.',
        'Annual Gala': '연례행사',
        ": A formal evening celebrating the year's achievements.": ': 한 해의 성과와 협력을 함께 기념합니다.',
        'Cultural Events': '문화교류 행사',
        ': Golf outings and cultural experiences for families.': ': 회원과 가족이 함께하는 다양한 교류 행사를 진행합니다.',
        'All rights reserved.': '모든 권리 보유.',
        '© 2026 Korean British Lawyers Association. All rights reserved.': '© 2026 한영변호사협회. 모든 권리 보유.'
    };

    const normalize = value => value.replace(/\s+/g, ' ').trim();
    const textNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName) || !normalize(node.nodeValue)) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    while (walker.nextNode()) {
        const node = walker.currentNode;
        textNodes.push({ node, original: normalize(node.nodeValue) });
    }

    const nav = document.querySelector('.nav');
    let switcher = document.querySelector('.lang-switch');
    if (!switcher && nav) {
        switcher = document.createElement('div');
        switcher.className = 'lang-switch';
        switcher.setAttribute('role', 'group');
        switcher.setAttribute('aria-label', 'Language selection');
        switcher.innerHTML = '<button class="lang-btn" type="button" data-lang="ko">한국어</button><span class="divider" aria-hidden="true">|</span><button class="lang-btn" type="button" data-lang="en">EN</button>';
        nav.appendChild(switcher);
    } else if (switcher) {
        const buttons = switcher.querySelectorAll('.lang-btn');
        if (buttons[0]) { buttons[0].dataset.lang = 'ko'; buttons[0].textContent = '한국어'; }
        if (buttons[1]) { buttons[1].dataset.lang = 'en'; buttons[1].textContent = 'EN'; }
        switcher.setAttribute('role', 'group');
        switcher.setAttribute('aria-label', 'Language selection');
    }

    const setLanguage = language => {
        document.documentElement.lang = language;
        document.body.classList.toggle('lang-ko', language === 'ko');
        textNodes.forEach(({ node, original }) => {
            if (language === 'ko' && translations[original]) node.nodeValue = translations[original];
            else node.nodeValue = original;
        });
        document.querySelectorAll('.lang-btn').forEach(button => {
            const active = button.dataset.lang === language;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        document.title = language === 'ko' ? '한영변호사협회 | KOBRLA' : originalTitle;
        localStorage.setItem('kobrla-language', language);
    };

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    setLanguage(localStorage.getItem('kobrla-language') || 'ko');

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const closeMobileMenu = () => {
        if (!mobileBtn || !nav) return;
        nav.classList.remove('nav-active');
        mobileBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    };

    if (mobileBtn && nav) {
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            mobileBtn.setAttribute('aria-expanded', String(nav.classList.contains('nav-active')));
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !nav.classList.contains('nav-active'));
                icon.classList.toggle('fa-times', nav.classList.contains('nav-active'));
            }
        });

        nav.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            event.preventDefault();
            closeMobileMenu();
            document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const contactForm = document.querySelector('.contact-form');
    const successMessage = contactForm?.querySelector('.form-success');
    if (successMessage && new URLSearchParams(window.location.search).get('success') === 'true') {
        successMessage.textContent = document.documentElement.lang === 'ko'
            ? '문의가 정상적으로 접수되었습니다. 빠른 시일 내에 회신드리겠습니다.'
            : 'Your message has been received. We will respond as soon as possible.';
        successMessage.hidden = false;
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    const cookieKey = 'kobrla-cookie-preferences';
    const cookieText = () => document.documentElement.lang === 'ko' ? {
        title: '쿠키 설정', message: '사이트 운영에 필요한 필수 저장기술을 사용합니다. 선택적 분석 쿠키는 동의한 경우에만 사용합니다.',
        essential: '필수만 허용', accept: '모두 허용', settings: '설정', save: '선택 저장', analytics: '선택적 분석 쿠키 허용', close: '닫기'
    } : {
        title: 'Cookie choices', message: 'We use essential storage to operate this site. Optional analytics cookies are used only with your consent.',
        essential: 'Essential only', accept: 'Accept all', settings: 'Settings', save: 'Save choices', analytics: 'Allow optional analytics cookies', close: 'Close'
    };
    const saveCookieChoice = analytics => {
        localStorage.setItem(cookieKey, JSON.stringify({ essential: true, analytics, updated: new Date().toISOString() }));
        document.querySelector('.cookie-consent')?.remove();
        document.querySelector('.cookie-modal')?.remove();
    };
    const openCookieSettings = () => {
        document.querySelector('.cookie-modal')?.remove();
        const text = cookieText();
        const saved = JSON.parse(localStorage.getItem(cookieKey) || 'null');
        const modal = document.createElement('div');
        modal.className = 'cookie-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'cookie-modal-title');
        modal.innerHTML = `<div class="cookie-modal-card"><button type="button" class="cookie-close" aria-label="${text.close}">&times;</button><h2 id="cookie-modal-title">${text.title}</h2><p>${text.message}</p><label class="cookie-toggle"><input type="checkbox" disabled checked> <span>${document.documentElement.lang === 'ko' ? '필수 쿠키 및 저장기술 (항상 사용)' : 'Essential cookies and storage (always active)'}</span></label><label class="cookie-toggle"><input id="cookie-analytics" type="checkbox" ${saved?.analytics ? 'checked' : ''}> <span>${text.analytics}</span></label><div class="cookie-actions"><button type="button" class="btn btn-secondary cookie-essential">${text.essential}</button><button type="button" class="btn btn-primary cookie-save">${text.save}</button></div></div>`;
        document.body.appendChild(modal);
        modal.querySelector('.cookie-close').addEventListener('click', () => modal.remove());
        modal.querySelector('.cookie-essential').addEventListener('click', () => saveCookieChoice(false));
        modal.querySelector('.cookie-save').addEventListener('click', () => saveCookieChoice(modal.querySelector('#cookie-analytics').checked));
        modal.querySelector('.cookie-close').focus();
    };
    const showCookieBanner = () => {
        if (localStorage.getItem(cookieKey) || document.querySelector('.cookie-consent')) return;
        const text = cookieText();
        const banner = document.createElement('aside');
        banner.className = 'cookie-consent';
        banner.setAttribute('aria-label', text.title);
        banner.innerHTML = `<div><strong>${text.title}</strong><p>${text.message} <a href="legal.html#cookies">${document.documentElement.lang === 'ko' ? '자세히 보기' : 'Learn more'}</a></p></div><div class="cookie-actions"><button type="button" class="btn btn-secondary cookie-essential">${text.essential}</button><button type="button" class="btn btn-secondary cookie-open-settings">${text.settings}</button><button type="button" class="btn btn-primary cookie-accept">${text.accept}</button></div>`;
        document.body.appendChild(banner);
        banner.querySelector('.cookie-essential').addEventListener('click', () => saveCookieChoice(false));
        banner.querySelector('.cookie-accept').addEventListener('click', () => saveCookieChoice(true));
        banner.querySelector('.cookie-open-settings').addEventListener('click', openCookieSettings);
    };
    document.querySelectorAll('[data-cookie-settings]').forEach(button => button.addEventListener('click', openCookieSettings));
    showCookieBanner();
});
