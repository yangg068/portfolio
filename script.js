// 프로젝트 데이터 배열
const projects = [
  {
    title: "간단한 메모 웹앱",
    period: "2025.03 ~ 2025.04",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "브라우저 로컬스토리지를 활용하여 메모를 작성·저장·삭제할 수 있는 간단한 웹 애플리케이션입니다.",
    linkUrl: "https://example.com/memo-app"
  },
  {
    title: "환율 정보 대시보드",
    period: "2025.04 ~ 2025.05",
    techStack: ["JavaScript", "API 활용"],
    description: "외부 환율 API를 이용해 주요 통화 환율을 시각적으로 확인할 수 있는 대시보드 페이지입니다.",
    linkUrl: "https://example.com/exchange-dashboard"
  }
];

// 프로젝트 카드 DOM 생성 함수
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  // 기술 스택 배지 생성
  const techBadges = project.techStack.map(tech => 
    `<span class="tech-badge">${tech}</span>`
  ).join('');

  card.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-period">${project.period}</p>
    <div class="project-tech">${techBadges}</div>
    <p class="project-description">${project.description}</p>
    <a href="${project.linkUrl}" target="_blank" rel="noopener noreferrer" class="project-link">자세히 보기</a>
  `;

  return card;
}

// 프로젝트 카드 렌더링
function renderProjects() {
  const container = document.getElementById('projects-container');
  
  projects.forEach(project => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

// 부드러운 스크롤 이동 함수
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Contact 폼 제출 처리
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // 입력값 검증
    if (!name || !email || !message) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    
    // 이메일 형식 간단 검증
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return;
    }
    
    // mailto 링크 생성
    const subject = `포트폴리오 문의 - ${name}`;
    const body = `보낸 사람: ${name} (${email})\n\n${message}`;
    const mailtoLink = `mailto:wkim@bible.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // 메일 클라이언트 열기
    window.location.href = mailtoLink;
  });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initSmoothScroll();
  initContactForm();
});
