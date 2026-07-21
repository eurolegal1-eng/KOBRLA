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
        'Legal page sections': '법적·개인정보 보호 항목',
        'Effective date:': '시행일:',
        '21 July 2026': '2026년 7월 21일',
        'Korean British Lawyers Association (“KOBRLA”) is an independent, non-profit professional network promoting legal, educational and professional cooperation between the United Kingdom and the Republic of Korea. Contact:': '한영변호사협회(“KOBRLA”)는 영국과 대한민국 간 법률·교육·전문 분야의 협력을 증진하는 독립적인 비영리 전문 네트워크입니다. 문의:',
        'Website material is general information only. It is not legal advice and does not create a solicitor-client, adviser-client or other professional relationship. KOBRLA does not guarantee that general information is complete or suitable for a particular matter. Obtain advice from an appropriately qualified and regulated professional before acting.': '이 웹사이트의 자료는 일반적인 정보 제공만을 목적으로 합니다. 법률자문이 아니며 변호사와 의뢰인, 자문인과 고객 또는 그 밖의 전문적 관계를 형성하지 않습니다. KOBRLA는 일반 정보가 완전하거나 특정 사안에 적합하다고 보장하지 않습니다. 어떤 조치를 취하기 전 적절한 자격과 규제를 받는 전문가의 자문을 받으시기 바랍니다.',
        'KOBRLA is an independent platform and does not give improper preference to any member, law firm or business. Links to external sites are provided for convenience; KOBRLA does not control or endorse their content.': 'KOBRLA는 독립적인 플랫폼이며 특정 회원, 로펌 또는 기업에 부당한 우대를 제공하지 않습니다. 외부 웹사이트 링크는 편의를 위해 제공되며, KOBRLA는 해당 사이트의 내용을 통제하거나 보증하지 않습니다.',
        'By using this website, you agree to use it lawfully and not to interfere with its security, availability or operation; submit unlawful, misleading, defamatory or infringing material; impersonate another person; or attempt unauthorised access.': '이 웹사이트를 이용함으로써 귀하는 이를 적법하게 사용하고, 보안·접근성·운영을 방해하거나, 불법·오해 유발·명예훼손·권리침해 자료를 제출하거나, 타인을 사칭하거나, 무단 접근을 시도하지 않을 것에 동의합니다.',
        'Unless otherwise stated, KOBRLA owns or is licensed to use the website content. You may download or print reasonable extracts for personal, educational and non-commercial use with attribution. Commercial republication, systematic copying or alteration requires prior written permission.': '별도의 표시가 없는 한 웹사이트 콘텐츠는 KOBRLA가 소유하거나 적법한 사용권을 보유합니다. 출처를 표시하는 경우 개인적·교육적·비상업적 목적으로 합리적인 범위의 내용을 내려받거나 인쇄할 수 있습니다. 상업적 재게시, 체계적인 복제 또는 변경에는 사전 서면 허가가 필요합니다.',
        'The website is provided on an “as available” basis. Nothing excludes liability that cannot lawfully be excluded. These terms are governed by the laws of England and Wales, and its courts have jurisdiction, subject to any mandatory consumer rights.': '이 웹사이트는 “제공 가능한 상태”를 기준으로 제공됩니다. 법률상 배제할 수 없는 책임은 어떠한 내용으로도 배제되지 않습니다. 강행적인 소비자 권리를 전제로, 본 약관은 잉글랜드 및 웨일스 법률의 적용을 받으며 해당 법원이 관할합니다.',
        'KOBRLA is the controller of personal data collected through this website. We may collect your name, contact details, organisation, professional information, enquiry or application content, consent choices, event preferences and technical form-submission data.': 'KOBRLA는 이 웹사이트를 통해 수집되는 개인정보의 컨트롤러입니다. 성명, 연락처, 소속기관, 전문 분야 정보, 문의·신청 내용, 동의 선택, 행사 선호 정보 및 양식 제출과 관련된 기술정보를 수집할 수 있습니다.',
        'How and why we use data': '개인정보 이용 목적과 방법',
        'To answer enquiries, administer membership, events and professional activities, and keep appropriate records.': '문의에 답변하고 회원, 행사 및 전문 활동을 운영하며 필요한 기록을 보관하기 위해 이용합니다.',
        'To protect the website, prevent spam and handle complaints or legal obligations.': '웹사이트를 보호하고 스팸을 방지하며 민원 또는 법적 의무를 처리하기 위해 이용합니다.',
        'To send news and event updates only where you have opted in or another lawful basis applies.': '귀하가 수신에 동의했거나 다른 적법한 근거가 있는 경우에만 소식과 행사 정보를 발송합니다.',
        'Our lawful bases may include consent, steps taken at your request, legitimate interests in operating the Association, and compliance with legal obligations. Please avoid submitting unnecessary special-category, criminal-offence or confidential client information. Where such information is necessary, we will apply an appropriate legal condition and safeguards.': '처리의 적법한 근거에는 동의, 귀하의 요청에 따른 사전 조치, 협회 운영에 관한 정당한 이익 및 법적 의무 준수가 포함될 수 있습니다. 불필요한 특별범주 개인정보, 범죄 관련 정보 또는 의뢰인의 비밀정보는 제출하지 마십시오. 이러한 정보가 필요한 경우에는 적절한 법적 요건과 보호조치를 적용합니다.',
        'Sharing, storage and retention': '공유·보관 및 보유기간',
        'Data may be processed by trusted website hosting, form, email and IT providers acting under appropriate safeguards, and by professional advisers or authorities where legally necessary. Website forms are hosted by Netlify. International transfers, if any, will use a lawful UK transfer mechanism. Enquiries are normally retained only as long as reasonably necessary for their purpose and legal or governance requirements; marketing records are kept until you unsubscribe or the data is no longer needed.': '개인정보는 적절한 보호조치 아래 업무를 수행하는 신뢰할 수 있는 웹 호스팅, 양식, 이메일 및 IT 서비스 제공자와, 법적으로 필요한 경우 전문 자문인 또는 관계기관에 의해 처리될 수 있습니다. 웹사이트 양식은 Netlify가 호스팅합니다. 국제 이전이 발생하는 경우 영국법상 적법한 이전 장치를 사용합니다. 문의 기록은 통상 그 목적과 법률·거버넌스 요건에 합리적으로 필요한 기간만 보관하며, 마케팅 기록은 수신을 철회하거나 더 이상 필요하지 않을 때까지 보관합니다.',
        'Your rights': '귀하의 권리',
        'Depending on the circumstances, you may ask for access, correction, deletion, restriction, portability, or object to processing, and may withdraw consent at any time without affecting earlier lawful processing. Email': '상황에 따라 개인정보의 열람, 정정, 삭제, 처리 제한, 이동을 요구하거나 처리에 반대할 수 있으며, 이전의 적법한 처리에 영향을 주지 않고 언제든지 동의를 철회할 수 있습니다. 이메일:',
        'You may also complain to the UK Information Commissioner’s Office at': '또한 영국 정보위원회(ICO)에 민원을 제기할 수 있습니다:',
        'Cookie Notice & Choices': '쿠키 안내 및 선택',
        'This website uses essential browser storage for language, security, form operation and your cookie choice. Essential storage cannot be disabled through our banner because it is needed to provide the service. Analytics or marketing technologies will be activated only after consent if they are introduced.': '이 웹사이트는 언어 설정, 보안, 양식 작동 및 쿠키 선택을 위해 필수 브라우저 저장기술을 사용합니다. 필수 저장기술은 서비스 제공에 필요하므로 배너에서 비활성화할 수 없습니다. 향후 분석 또는 마케팅 기술을 도입하는 경우 동의를 받은 뒤에만 활성화합니다.',
        'You can choose “Essential only” or “Accept all”, change your selection using “Cookie Settings” in the footer, and clear stored choices in your browser. Blocking essential technology may affect site functions.': '“필수 항목만” 또는 “모두 허용”을 선택할 수 있고, 풋터의 “쿠키 설정”에서 선택을 변경하거나 브라우저에서 저장된 선택을 삭제할 수 있습니다. 필수 기술을 차단하면 일부 사이트 기능에 영향을 줄 수 있습니다.',
        'Marketing consent is optional and separate from permission to answer an enquiry. Leaving it unticked does not prevent you from contacting or joining KOBRLA. If selected, KOBRLA may email news, professional updates and event invitations. Every marketing message should offer an unsubscribe method, and you may withdraw consent at any time by emailing': '마케팅 수신 동의는 선택사항이며 문의 답변을 위한 개인정보 처리 동의와 별개입니다. 선택하지 않아도 KOBRLA에 문의하거나 가입하는 데 지장이 없습니다. 동의한 경우 KOBRLA는 소식, 전문 정보 및 행사 초청을 이메일로 보낼 수 있습니다. 모든 마케팅 메시지에는 수신 거부 방법이 제공되며, 다음 이메일로 언제든지 동의를 철회할 수 있습니다:',
        'Enquiry & Self-assessment Forms': '문의 및 자가진단 양식',
        'Before an enquiry or self-assessment form can be submitted, you must confirm that you have read this policy and agree to processing necessary to respond. Marketing consent remains optional and unticked by default. Self-assessment results, if offered, are general guidance only and are not a legal opinion, eligibility decision or professional advice.': '문의 또는 자가진단 양식을 제출하기 전에 본 방침을 읽고 답변에 필요한 개인정보 처리에 동의했음을 확인해야 합니다. 마케팅 동의는 선택사항이며 기본적으로 선택되어 있지 않습니다. 자가진단 결과가 제공되는 경우에도 이는 일반적인 안내일 뿐 법률 의견, 자격 결정 또는 전문 자문이 아닙니다.',
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
