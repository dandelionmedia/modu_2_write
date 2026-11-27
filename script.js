/* =========================================================
   2차시 AI 시 창작 실습 프롬프트 — 동작
   ※ 프롬프트를 고치려면 아래 SECTIONS 안의 text 만 바꾸면 됩니다.
     [보기1/보기2] = 고르기 버튼, [예시말] = 바꿔 쓰는 칸, [ ] = 꼭 써야 하는 칸
   lv: 1 = 🌱 쉬움 / 2 = 🌿 보통 / 3 = 🌳 도전
   ========================================================= */

const SECTIONS = [
  {
    id: 's1', period: '1교시 ①', icon: '👋', title: '지난 시간 복습 · 마음 열기',
    groups: [{
      items: [
        { lv: 1, text: '안녕! 나는 지난주에 AI와 처음 이야기했어. 오늘은 같이 시를 써 보고 싶어. 반갑게 인사해줘.' },
        { lv: 1, text: '시가 뭐야? 아주 쉬운 말로 한 문장으로 알려줘.' },
        { lv: 2, text: '[꽃]에 대한 짧은 시를 예시로 하나 보여줘. 3줄로, 쉬운 말로 써줘.' },
        { lv: 2, text: '오늘 내 기분은 [좋아요/보통이에요/피곤해요]야. 내 기분에 어울리는 따뜻한 한 줄을 써줘.' }
      ]
    }]
  },
  {
    id: 's2', period: '1교시 ②', icon: '✏️', title: '주제를 고르고 첫 시 만들기',
    desc: '마음에 드는 주제 하나를 고르세요. 처음에는 🌱부터 해 보고, 익숙해지면 🌿 🌳에 도전해요.',
    groups: [
      { title: '🌸 계절 · 자연', items: [
        { lv: 1, text: '[가을 단풍]을 주제로 따뜻한 시를 5줄로 만들어줘. 쉬운 말로 써줘.' },
        { lv: 2, text: '나는 [눈 오는 날]을 좋아해. [하얀 눈]과 [차가운 바람]을 넣어서 짧은 시를 만들어줘.' }
      ]},
      { title: '👨‍👩‍👧 가족', items: [
        { lv: 1, text: '[엄마]에게 고마운 마음을 담은 짧은 시를 5줄로 써줘.' },
        { lv: 2, text: '[엄마]는 나에게 [따뜻한 밥]을 해 주셨어. 이 이야기로 짧은 시를 만들어줘.' }
      ]},
      { title: '🤝 친구 · 우리 학교', items: [
        { lv: 1, text: '야간학교에서 친구들과 함께 공부하는 기쁨을 짧은 시로 써줘.' },
        { lv: 2, text: '친구가 나에게 [웃으며 인사해 준 일]이 기억나. 이 이야기로 짧은 시를 써줘.' }
      ]},
      { title: '🍜 좋아하는 음식', items: [
        { lv: 1, text: '나는 [떡볶이]를 좋아해. 맛있는 냄새와 행복한 기분이 느껴지는 짧은 시를 써줘.' },
        { lv: 2, text: '[비 오는 날] 먹는 [따뜻한 라면]을 주제로 4줄 시를 써줘.' }
      ]},
      { title: '🧳 추억 · 여행', items: [
        { lv: 2, text: '나는 [바다에 갔던 날]을 생각하면 행복해. 쉬운 말로 짧은 시를 만들어줘.' },
        { lv: 3, text: '[어릴 때 살던 동네]에서 [친구와 뛰어놀던 일]이 기억나. 그때 들리던 소리와 냄새를 넣어서 6줄 시를 써줘.' }
      ]},
      { title: '🐶 좋아하는 것 · 취미', items: [
        { lv: 1, text: '나는 [강아지]를 좋아해. 귀엽고 다정한 짧은 시를 써줘.' },
        { lv: 2, text: '나는 [노래 듣기]를 좋아해. 이 취미가 나를 행복하게 하는 마음을 짧은 시로 써줘.' }
      ]},
      { title: '🌈 나의 꿈 · 나에게 주는 시', items: [
        { lv: 2, text: '나는 [바리스타]가 되고 싶어. 내 꿈을 응원하는 짧은 시를 써줘.' },
        { lv: 3, text: "오늘도 열심히 공부한 나를 칭찬하는 시를 써줘. '너는 잘하고 있어'라는 말을 꼭 넣어줘." }
      ]},
      { title: '💡 내 말을 그대로 시로', items: [
        { lv: 3, text: '내가 하고 싶은 말은 이거야: [ ]. 이 말을 살려서 짧은 시로 바꿔줘. 내 말은 최대한 그대로 써줘.', note: '[ ] 안에 내가 하고 싶은 말을 그대로 써요.' }
      ]}
    ]
  },
  {
    id: 's3', period: '1교시 ③', icon: '🎙️', title: 'AI가 질문해 주는 인터뷰 시',
    desc: '글쓰기가 어려우면 AI가 하나씩 물어보게 해요. 대답만 하면 시가 완성됩니다. 음성 대화로 하면 더 편해요.',
    groups: [{
      items: [
        { lv: 1, text: '나랑 같이 시를 만들자. 나에게 질문을 한 번에 하나씩, 모두 3개 해줘. 내가 다 대답하면 그걸로 5줄 시를 만들어줘.' },
        { lv: 1, text: '내가 좋아하는 것을 물어봐줘. 예 또는 아니오로 대답할 수 있게 질문해줘. 질문은 하나씩만 해줘.' },
        { lv: 2, text: '보기를 3개 주고 고르게 해줘. 먼저 시의 주제를 꽃, 가족, 음식 중에서 고르게 해줘.' },
        { lv: 2, text: '내가 고른 단어 3개로 시를 만들어줘. 단어는 [햇살], [엄마], [웃음]이야.' }
      ]
    }]
  },
  {
    id: 's4', period: '1교시 ④', icon: '🧩', title: '재미있는 시 모양 놀이',
    groups: [{
      two: true,
      items: [
        { lv: 1, kind: '한 줄 시', text: '[비 오는 날]을 한 줄 시로 써줘. 아주 짧게.' },
        { lv: 2, kind: '삼행시', text: '[봄바람] 세 글자로 삼행시를 써줘. 따뜻하고 쉬운 말로.' },
        { lv: 2, kind: '반복 시', text: "'나는 ~이 좋아요'를 반복하는 4줄 시를 써줘. 주제는 [가을]이야." },
        { lv: 2, kind: '편지 시', text: '[할머니]에게 보내는 편지처럼 짧은 시를 써줘.' },
        { lv: 2, kind: '감각 시', text: '[봄]을 눈에 보이는 것, 귀에 들리는 것, 코로 맡는 냄새로 하나씩 표현해서 3줄 시를 써줘.' },
        { lv: 3, kind: '색깔 시', text: '[노란색]을 보면 떠오르는 것들로 5줄 시를 써줘.' }
      ]
    }]
  },
  {
    id: 's5', period: '2교시 ①', icon: '🪄', title: '내 시를 다듬고 제목 짓기',
    desc: '1교시에 만든 시가 화면에 있는 상태에서 이어서 말해요.',
    groups: [
      { title: '✂️ 쉽게 · 짧게', items: [
        { lv: 1, text: '이 시에서 어려운 말을 빼고 더 쉽게 써줘.' },
        { lv: 1, text: '이 시를 3줄로 줄여줘.' },
        { lv: 1, text: '한 줄에 글자를 적게 해서 읽기 쉽게 다시 써줘.' }
      ]},
      { title: '💗 내 마음 더하기', items: [
        { lv: 2, text: '두 번째 줄에 [엄마 웃음]이라는 말을 넣어줘.' },
        { lv: 2, text: '마지막 줄을 더 희망찬 말로 바꿔줘.' },
        { lv: 3, text: '내가 말한 [ ] 부분은 그대로 두고, 나머지만 다듬어줘.' }
      ]},
      { title: '🎨 느낌 바꾸기', items: [
        { lv: 2, text: '이 시를 더 [밝게/조용하게/재미있게] 바꿔줘.' },
        { lv: 2, text: '노래 가사처럼 리듬이 느껴지게 바꿔줘.' }
      ]},
      { title: '🏷️ 제목 짓기', items: [
        { lv: 1, text: '이 시의 제목을 짧게 2개 추천해줘.' },
        { lv: 2, text: '다섯 글자 안으로 제목을 3개 추천해줘. 이유도 한 문장씩 말해줘.' }
      ]},
      { title: '🔁 비교하고 고르기', items: [
        { lv: 2, text: '이 시를 2가지로 다시 써줘. 1번은 짧게, 2번은 따뜻하게.' },
        { lv: 1, text: '처음 시가 더 좋아. 처음 시를 다시 보여줘.' }
      ]}
    ]
  },
  {
    id: 's6', period: '2교시 ②', icon: '🖼️', title: '시화에 넣을 긴 시 만들기',
    desc: '다음 시간(12월 4일)에는 그림 위에 시를 넣는 <strong>시화</strong>를 만들어요. 시화에 넣기 좋은 시는 <strong>3~4연, 12~16줄</strong>이에요. 한 줄은 짧게 써요!',
    groups: [
      { title: '📏 내 시를 길게 늘리기', items: [
        { lv: 1, text: '이 시를 시화에 넣을 수 있게 길게 늘려줘. 3연으로, 한 연에 4줄씩 써줘. 쉬운 말로 써줘.', note: '1교시에 만든 시가 화면에 있는 상태에서 말해요.' },
        { lv: 2, text: '이 시를 [3연/4연]으로 길게 다시 써줘. 한 줄은 짧게 쓰고, 연과 연 사이는 한 줄 띄어줘.' },
        { lv: 2, text: '이 시를 길게 늘려줘. 1연은 눈에 보이는 것, 2연은 귀에 들리는 소리, 3연은 내 마음을 써줘. 모두 12줄로 써줘.' },
        { lv: 3, text: '내가 처음 한 말은 그대로 두고, 앞과 뒤에 이야기를 더해서 16줄 시로 만들어줘.' }
      ]},
      { title: '🌟 처음부터 긴 시 만들기', items: [
        { lv: 1, text: '[가을]을 주제로 시화에 넣을 긴 시를 써줘. 3연, 12줄로, 쉬운 말로 써줘.' },
        { lv: 2, text: '[엄마]에게 보내는 긴 시를 써줘. 1연은 고마운 마음, 2연은 함께한 추억, 3연은 하고 싶은 말로 써줘.' },
        { lv: 2, text: '처음, 가운데, 끝이 있는 이야기 시를 써줘. 주제는 [바다에 갔던 날]이야. 4연으로 써줘.' }
      ]},
      { title: '🏫 우리 학교 시 — 모두사랑장애인야간학교', items: [
        { lv: 1, kind: '사행시', text: "'모두사랑' 네 글자로 사행시를 써줘. 따뜻하고 쉬운 말로 써줘." },
        { lv: 2, kind: '긴 사행시', text: "'모두사랑' 네 글자로 사행시를 써줘. 시화에 넣을 수 있게 한 글자마다 3줄씩, 모두 12줄로 써줘." },
        { lv: 1, kind: '우리 학교', text: '모두사랑장애인야간학교에서 친구들과 함께 공부하는 기쁨을 긴 시로 써줘. 3연, 12줄로, 쉬운 말로 써줘.' },
        { lv: 2, kind: '밤의 교실', text: '불이 켜진 밤의 우리 교실을 주제로 시를 써줘. 1연은 학교에 오는 길, 2연은 교실 안 친구들, 3연은 집에 가는 밤하늘을 써줘.' },
        { lv: 2, kind: '학교 이름', text: "우리 학교 이름은 '모두사랑'이야. '모두를 사랑한다'는 뜻을 담아서, 우리 학교를 자랑하는 긴 시를 4연으로 써줘." },
        { lv: 2, kind: '배움의 기쁨', text: '나는 야간학교에서 [글씨 쓰기]를 배워서 기뻐. 이 이야기를 넣어서 우리 학교에 고마운 마음을 담은 긴 시를 3연으로 써줘.' },
        { lv: 3, kind: '우리 반 응원', text: "우리 반 [가꿈반/채움반]을 응원하는 긴 시를 써줘. '우리는 함께라서 더 빛나요'라는 말을 꼭 넣고, 4연으로 써줘." },
        { lv: 3, kind: '열한 글자 행시', text: "'모두사랑장애인야간학교' 열한 글자로 행시를 써줘. 한 글자에 한 줄씩, 따뜻하고 희망찬 말로 써줘.", note: '모·두·사·랑·장·애·인·야·간·학·교 — 열한 줄 긴 시가 돼요!' }
      ]},
      { title: '🪄 긴 시가 어려울 때', items: [
        { lv: 1, text: '이 시가 너무 어려워. 길이는 그대로 두고 더 쉬운 말로 바꿔줘.' },
        { lv: 1, text: '한 줄에 글자를 적게 해서, 줄 수를 늘려서 다시 써줘.' }
      ]}
    ]
  },
  {
    id: 's7', period: '2교시 ③', icon: '🎤', title: '저장하고 낭독 · 감상하기',
    groups: [
      { title: '💾 저장하기', items: [
        { lv: 1, text: '완성된 시를 제목과 함께 깔끔하게 정리해서 보여줘. 설명은 빼줘.' },
        { lv: 1, text: '시화에 넣을 긴 시를 제목과 함께 정리해줘. 연과 연 사이는 한 줄 띄우고, 설명은 빼줘.' },
        { tip: "정리된 화면을 <strong>화면 캡처</strong>하거나, 복사해서 <strong>카카오톡 '나와의 채팅'</strong>에 보내 두어요. 다음 시간 시화 만들기에 사용해요.", icon: '📸' }
      ]},
      { title: '🗣️ 낭독 연습', items: [
        { lv: 1, text: '이 시를 소리 내어 읽기 쉽게, 쉬어 읽는 곳에 / 표시를 해줘.' },
        { lv: 1, text: '이 시를 천천히 읽어줘.', note: '🎧 음성 대화로 말해 보세요. 듣고 따라 읽어요.' },
        { lv: 2, text: '이 시는 어떤 목소리로 읽으면 좋을지 한 문장으로 알려줘.' }
      ]},
      { title: '👏 감상하기', items: [
        { lv: 1, text: '내 시에서 좋은 점을 2가지 칭찬해줘.' },
        { lv: 2, text: '이 시를 듣는 사람은 어떤 기분이 들까? 쉬운 말로 알려줘.' },
        { lv: 2, text: '친구의 시를 듣고 하고 싶은 말은 [ ]야. 따뜻한 감상 한 줄로 바꿔줘.' }
      ]},
      { title: '📝 오늘의 소감', items: [
        { lv: 1, text: '오늘 처음 시를 써 봤어. 내 소감은 [재미있었어요/어려웠어요/뿌듯해요]야. 한 문장으로 예쁘게 정리해줘.' }
      ]}
    ],
    next: {
      title: '🎨 다음 시간(12월 4일) 준비 — 시화 그림',
      item: { lv: 2, text: '이 시에 어울리는 그림을 한 문장으로 설명해줘. 색깔과 배경을 꼭 넣어줘.' }
    }
  }
];

/* ---------- 카카오톡 등 앱 안 브라우저 → 크롬·사파리로 ---------- */
const UA = navigator.userAgent || '';
const IS_ANDROID = /Android/i.test(UA);
const IS_IOS = /iPhone|iPad|iPod/i.test(UA) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const INAPP = [
  [/KAKAOTALK/i, '카카오톡'], [/NAVER\(inapp/i, '네이버 앱'], [/Instagram/i, '인스타그램'],
  [/FBAN|FBAV|FB_IAB/i, '페이스북'], [/BAND\//i, '밴드'], [/Line\//i, '라인'], [/DaumApps/i, '다음 앱'], [/everytimeApp/i, '에브리타임']
].find(([re]) => re.test(UA));
function openExternal() {
  const url = location.href;
  if (/KAKAOTALK/i.test(UA)) { location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(url); return true; }
  if (IS_ANDROID) {
    location.href = 'intent://' + url.replace(/^https?:\/\//, '') + '#Intent;scheme=https;package=com.android.chrome;end';
    return true;
  }
  return false;
}

/* ---------- AI 앱 열기 주소 (안드로이드는 설치된 앱으로) ---------- */
const AI_APPS = {
  gpt: { web: 'https://chatgpt.com/', pkg: 'com.openai.chatgpt' },
  gem: { web: 'https://gemini.google.com/app', pkg: 'com.google.android.apps.bard' }
};
function aiLink(k) {
  const a = AI_APPS[k];
  if (IS_ANDROID && !INAPP) {
    const u = new URL(a.web);
    return { href: `intent://${u.host}${u.pathname}#Intent;scheme=https;package=${a.pkg};S.browser_fallback_url=${encodeURIComponent(a.web)};end`, target: '_self' };
  }
  return { href: a.web, target: '_blank' };
}

const LV = {
  1: { emoji: '🌱', name: '쉬움' },
  2: { emoji: '🌿', name: '보통' },
  3: { emoji: '🌳', name: '도전' }
};

const COPY_LABEL = '프롬프트 복사하기';
const DONE_LABEL = '프롬프트 복사완료';

/* ---------- 빈칸 처리 ----------
   [좋아요/보통이에요]  → 보기 버튼으로 고르기
   [꽃]                → 입력칸 (처음엔 '꽃'이 들어 있음)
   [ ]                 → 입력칸 (꼭 써야 함)
   빈칸 뒤 조사(을/를, 이/가 …)는 바뀐 말에 맞게 자동으로 고쳐요. */
function escapeHTML(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function parseTemplate(text) {
  const parts = text.split(/\[([^\]]*)\]/);
  const segs = [];
  parts.forEach((p, i) => {
    if (i % 2 === 0) { segs.push({ t: 'text', v: p }); return; }
    const inner = p.trim();
    if (inner.includes('/')) segs.push({ t: 'choice', options: inner.split('/').map(o => o.trim()) });
    else segs.push({ t: 'input', example: inner, required: inner === '' });
  });
  return segs;
}

// 받침 확인: true(받침 있음) / false(없음) / null(한글 아님)
function batchim(word) {
  const w = (word || '').trim();
  if (!w) return null;
  const code = w.charCodeAt(w.length - 1);
  if (code < 0xAC00 || code > 0xD7A3) return null;
  return (code - 0xAC00) % 28;
}
const JOSA = [['이라는', '라는'], ['이에요', '예요'], ['이야', '야'], ['으로', '로'], ['을', '를'], ['은', '는'], ['과', '와'], ['이', '가']];
function fixJosa(value, following) {
  const jong = batchim(value);
  if (jong === null) return following;
  for (const [withB, noB] of JOSA) {
    const hit = following.startsWith(withB) ? withB : following.startsWith(noB) ? noB : null;
    if (!hit) continue;
    let right = jong > 0 ? withB : noB;
    if (withB === '으로' && jong === 8) right = '로'; // ㄹ 받침은 '로'
    return right + following.slice(hit.length);
  }
  return following;
}

function build(card) {
  let plain = '', html = '', bi = 0, prev = null;
  card.segs.forEach(seg => {
    if (seg.t === 'text') {
      const txt = prev !== null ? fixJosa(prev, seg.v) : seg.v;
      plain += txt; html += escapeHTML(txt); prev = null;
    } else {
      const v = card.values[bi++];
      if (v) { plain += v; html += `<mark>${escapeHTML(v)}</mark>`; prev = v; }
      else { plain += '[ ]'; html += '<mark class="empty">[ 빈칸 ]</mark>'; prev = null; }
    }
  });
  return { plain, html };
}

let cardId = 0;
const CARDS = {};

function blankBoxHTML(card) {
  const blanks = card.segs.filter(s => s.t !== 'text');
  if (!blanks.length) return '';
  const choices = [], inputs = [];
  blanks.forEach((s, i) => {
    if (s.t === 'choice') {
      choices.push(`<div class="chips" role="group" aria-label="보기 고르기">${s.options.map((o, k) =>
        `<button type="button" class="chip" data-b="${i}" data-v="${escapeHTML(o)}" aria-pressed="${k === 0}">${escapeHTML(o)}</button>`).join('')}</div>`);
    } else {
      inputs.push(`<input class="blank-input" type="text" data-b="${i}" value="${escapeHTML(s.example)}"
        placeholder="${s.required ? '여기에 내 말을 써요' : escapeHTML(s.example)}" aria-label="빈칸에 내 말 쓰기" enterkeyhint="done">`);
    }
  });
  return `<div class="blank-box">
      ${choices.length ? `<p class="blank-label">👆 마음에 드는 말을 하나 눌러요</p>${choices.join('')}` : ''}
      ${inputs.length ? `<p class="blank-label">✏️ ${blanks.some(b => b.t === 'input' && b.required) ? '빈칸에 내 말을 써요' : '노란 글자를 내 말로 바꿔도 돼요'}</p><div class="blank-inputs">${inputs.join('')}</div>` : ''}
    </div>`;
}

function cardHTML(item) {
  if (item.tip) {
    return `<div class="tip reveal"><span class="ico">${item.icon || '💡'}</span><p>${item.tip}</p></div>`;
  }
  const id = 'p' + (++cardId);
  const segs = parseTemplate(item.text);
  const values = segs.filter(s => s.t !== 'text').map(s => s.t === 'choice' ? s.options[0] : s.example);
  const card = CARDS[id] = { item, segs, values };
  const lv = LV[item.lv];
  return `
    <article class="card lv-${item.lv} reveal" id="${id}">
      <div class="card-top">
        <span class="lv-chip">${lv.emoji} ${lv.name}</span>
        ${item.kind ? `<span class="kind-chip">${item.kind}</span>` : ''}
        <button class="speak-btn" type="button" aria-label="문장 읽어주기"><span aria-hidden="true">🔈</span> <span class="sp-label">읽어주기</span></button>
      </div>
      <p class="prompt-text">${build(card).html}</p>
      ${item.note ? `<p class="card-note">${item.note}</p>` : ''}
      ${blankBoxHTML(card)}
      <button class="copy-btn" type="button">
        <span class="ico" aria-hidden="true">📋</span><span class="label">${COPY_LABEL}</span>
      </button>
      <div class="ai-links" hidden>
        <p class="ai-hint">👇 AI를 열고 입력창을 꾹 눌러 <b>붙여넣기</b> 해요</p>
        <a class="ai-link gpt" href="${aiLink('gpt').href}" target="${aiLink('gpt').target}" rel="noopener">💬 ChatGPT 열기</a>
        <a class="ai-link gem" href="${aiLink('gem').href}" target="${aiLink('gem').target}" rel="noopener">✨ Gemini 열기</a>
      </div>
    </article>`;
}

function render() {
  const area = document.getElementById('promptArea');
  area.innerHTML = SECTIONS.map(sec => {
    const groups = sec.groups.map((g, gi) => `
      ${g.title ? `<h3 class="group-title reveal" id="${sec.id}-g${gi}">${g.title}</h3>` : ''}
      <div class="cards ${g.two ? 'two' : ''}">${g.items.map(cardHTML).join('')}</div>
    `).join('');
    const next = sec.next ? `
      <div class="next-box reveal">
        <h3>${sec.next.title}</h3>
        <div class="cards">${cardHTML(sec.next.item)}</div>
      </div>` : '';
    return `
      <section class="prompt-sec" id="${sec.id}">
        <span class="period-tag reveal">${sec.period}</span>
        <h2 class="sec-title reveal"><span>${sec.icon}</span>${sec.title}</h2>
        ${sec.desc ? `<p class="sec-desc reveal">${sec.desc}</p>` : ''}
        ${groups}
        ${next}
      </section>`;
  }).join('');
}

/* ---------- 읽어주기 (휴대폰 음성) ----------
   목소리 느낌은 높낮이(pitch)와 빠르기(rate)로 만들어요.
   실제 목소리 종류는 기기에 설치된 한국어 목소리에 따라 달라요. */
const VOICE_PRESETS = [
  // pitch: 높낮이(0~2) · rate: 빠르기 · split: 끊어 읽기(숫자 = 몇 단어마다 쉬기) · gender: 기기에 있으면 고를 목소리
  { id: 'basic',  em: '🌸', name: '기본 목소리', desc: '또박또박',    pitch: 1.0,  rate: 0.9,  split: 'sentence', gender: 'f',
    hello: '안녕하세요! 또박또박 기본 목소리로 읽어 드릴게요.' },
  { id: 'slow',   em: '🐢', name: '아주 천천히', desc: '느긋하게',    pitch: 1.0,  rate: 0.55, split: 2,          gender: 'f',
    hello: '안녕하세요. 아주 천천히, 또박또박 읽어 드릴게요.' },
  { id: 'bright', em: '🎈', name: '밝고 신나게', desc: '통통 튀는',   pitch: 1.5,  rate: 1.15, split: 'sentence', gender: 'f',
    hello: '안녕하세요! 오늘도 신나게 시를 만들어 봐요!' },
  { id: 'calm',   em: '🌙', name: '차분하게',    desc: '시 낭독처럼', pitch: 0.85, rate: 0.72, split: 4,          gender: 'f',
    hello: '고요한 밤, 별빛 아래에서, 조용히 시를 읽어 드릴게요.' },
  { id: 'low',    em: '🐻', name: '낮고 굵게',   desc: '듬직한',      pitch: 0.45, rate: 0.82, split: 'sentence', gender: 'm',
    hello: '안녕하세요. 듬직한 곰 목소리로 읽어 드릴게요.' },
  { id: 'kid',    em: '🐥', name: '귀여운 아이', desc: '높고 맑은',   pitch: 1.95, rate: 1.1,  split: 'sentence', gender: 'f',
    hello: '안녕! 나는 귀여운 병아리 목소리야! 같이 시 만들자!' }
];
const MALE_RE = /injoon|hyunsu|bongjin|gookmin|minsu|jinho|male|남성|남자/i;
const FEMALE_RE = /heami|sunhi|yuna|jimin|seohyeon|soonbok|yujin|sora|female|여성|여자/i;
const canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let speakingBtn = null;
let voicePreset = 'basic';
let voiceURI = ''; // '' = 자동(목소리 느낌에 맞게)
let speakSession = 0;
let liveUtters = []; // 크롬에서 중간에 끊기지 않도록 붙잡아 두기
try { voicePreset = localStorage.getItem('poem-voice') || 'basic'; voiceURI = localStorage.getItem('poem-voice-uri') || ''; } catch (e) {}

function koVoices() {
  if (!canSpeak) return [];
  return window.speechSynthesis.getVoices().filter(v => /^ko/i.test(v.lang));
}
function preset() { return VOICE_PRESETS.find(p => p.id === voicePreset) || VOICE_PRESETS[0]; }
function pickVoice(p = preset()) {
  const vs = koVoices();
  if (!vs.length) return null;
  if (voiceURI) { const chosen = vs.find(v => v.voiceURI === voiceURI); if (chosen) return chosen; }
  if (p.gender === 'm') { const m = vs.find(v => MALE_RE.test(v.name)); if (m) return m; }
  const f = vs.find(v => FEMALE_RE.test(v.name) && !MALE_RE.test(v.name));
  return f || vs.find(v => !MALE_RE.test(v.name)) || vs[0];
}

// 목소리 느낌에 맞게 문장을 잘게 나누기 (쉬는 곳이 생겨요)
function chunkText(text, split) {
  const sentences = text.split(/(?<=[.!?])\s+/).map(t => t.trim()).filter(Boolean);
  if (split === 'sentence') return sentences;
  const out = [];
  sentences.forEach(sen => {
    sen.split(/(?<=,)\s*/).forEach(part => {
      const words = part.split(/\s+/).filter(Boolean);
      for (let i = 0; i < words.length; i += split) out.push(words.slice(i, i + split).join(' '));
    });
  });
  return out;
}

function makeUtter(text, p, voice) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR';
  u.rate = p.rate;
  // 실제 남자 목소리를 찾았으면 너무 낮지 않게
  u.pitch = (p.gender === 'm' && voice && MALE_RE.test(voice.name)) ? 0.85 : p.pitch;
  if (voice) { try { u.voice = voice; } catch (e) {} }
  return u;
}

function resetSpeakUI() {
  document.querySelectorAll('.vp-preset.playing').forEach(b => b.classList.remove('playing'));
  if (speakingBtn) {
    speakingBtn.classList.remove('speaking');
    speakingBtn.querySelector('.sp-label').textContent = '읽어주기';
    speakingBtn.firstElementChild.textContent = '🔈';
    speakingBtn = null;
  }
}
function stopSpeak() {
  if (!canSpeak) return;
  speakSession++;
  window.speechSynthesis.cancel();
  liveUtters = [];
  resetSpeakUI();
}

// 문장 조각을 차례대로 읽기 (모두 한 번에 줄 세워서 휴대폰에서도 잘 되게)
function speakText(text, p, onDone) {
  const session = ++speakSession;
  const voice = pickVoice(p);
  const chunks = chunkText(text, p.split);
  liveUtters = chunks.map(c => makeUtter(c, p, voice));
  const finish = () => { if (session === speakSession) { liveUtters = []; onDone && onDone(); } };
  if (!liveUtters.length) { finish(); return; }
  liveUtters[liveUtters.length - 1].onend = finish;
  liveUtters.forEach(u => { u.onerror = e => { if (e.error !== 'interrupted' && e.error !== 'canceled') finish(); }; });
  liveUtters.forEach(u => window.speechSynthesis.speak(u));
  if (window.speechSynthesis.paused) window.speechSynthesis.resume();
}

function speak(btn, text) {
  const again = speakingBtn === btn;
  stopSpeak();
  if (again) return; // 읽는 중에 다시 누르면 멈춤
  speakingBtn = btn;
  btn.classList.add('speaking');
  btn.querySelector('.sp-label').textContent = '그만 읽기';
  btn.firstElementChild.textContent = '🔊';
  speakText(text.replace(/\[ \]/g, '빈칸'), preset(), resetSpeakUI);
}
function previewVoice(btn) {
  stopSpeak();
  const p = preset();
  if (btn) btn.classList.add('playing');
  speakText(p.hello, p, resetSpeakUI);
}

function setupVoicePanel() {
  const panel = document.getElementById('voicePanel');
  const openBtn = document.getElementById('voiceBtn');
  const box = document.getElementById('voicePresets');
  const sel = document.getElementById('voiceSelect');
  const devBox = document.getElementById('voiceDeviceBox');

  box.innerHTML = VOICE_PRESETS.map(p => `
    <button type="button" class="vp-preset" data-id="${p.id}" aria-pressed="${p.id === voicePreset}">
      <span class="em" aria-hidden="true">${p.em}</span>${p.name}<small>${p.desc}</small>
    </button>`).join('');

  const fillDevices = () => {
    const vs = koVoices();
    if (vs.length < 2) { devBox.hidden = true; return; }
    devBox.hidden = false;
    if (voiceURI && !vs.some(v => v.voiceURI === voiceURI)) voiceURI = '';
    sel.innerHTML = `<option value="" ${voiceURI ? '' : 'selected'}>✨ 자동 (목소리 느낌에 맞게)</option>` + vs.map((v, i) => `<option value="${escapeHTML(v.voiceURI)}" ${v.voiceURI === voiceURI ? 'selected' : ''}>목소리 ${i + 1} · ${escapeHTML(v.name.replace(/Microsoft |Google |\(.*?\)/g, '').replace(/\s+/g, ' ').trim() || v.name)}</option>`).join('');
  };
  fillDevices();
  if (canSpeak && 'onvoiceschanged' in window.speechSynthesis) window.speechSynthesis.addEventListener('voiceschanged', fillDevices);

  const open = () => { panel.hidden = false; openBtn.setAttribute('aria-expanded', 'true'); fillDevices(); };
  const close = (stop = true) => { panel.hidden = true; openBtn.setAttribute('aria-expanded', 'false'); if (stop) stopSpeak(); };
  openBtn.addEventListener('click', () => { play('click'); panel.hidden ? open() : close(); });
  document.getElementById('voiceClose').addEventListener('click', () => { play('click'); close(); });
  document.getElementById('voiceDone').addEventListener('click', () => {
    play('click'); close();
    const p = preset();
    toast(`${p.em} '${p.name}'로 읽어 줄게요`);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) close(); });
  document.addEventListener('click', e => {
    if (!panel.hidden && !panel.contains(e.target) && !openBtn.contains(e.target)) close(false);
  });

  box.addEventListener('click', e => {
    const b = e.target.closest('.vp-preset');
    if (!b) return;
    voicePreset = b.dataset.id;
    try { localStorage.setItem('poem-voice', voicePreset); } catch (err) {}
    box.querySelectorAll('.vp-preset').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    previewVoice(b);
  });
  sel.addEventListener('change', () => {
    voiceURI = sel.value;
    try { localStorage.setItem('poem-voice-uri', voiceURI); } catch (err) {}
    previewVoice(box.querySelector('.vp-preset[aria-pressed="true"]'));
  });
}

/* ---------- 목차 (PC 왼쪽 / 태블릿·모바일 펼치기) ---------- */
function buildTOC() {
  const count = sec => sec.groups.reduce((n, g) => n + g.items.filter(i => !i.tip).length, 0) + (sec.next ? 1 : 0);
  let lastPeriod = '';
  const rows = [`<li class="toc-li"><a class="toc-item" href="#how" data-sec="how"><span class="ti-title">📖 이렇게 사용해요</span></a></li>`];
  SECTIONS.forEach(sec => {
    const period = sec.period.slice(0, 3); // '1교시' / '2교시'
    if (period !== lastPeriod) {
      rows.push(`<li class="toc-period">${period === '1교시' ? '🕐 1교시 · 첫 시 만들기' : '🕑 2교시 · 다듬고 완성하기'}</li>`);
      lastPeriod = period;
    }
    const subs = sec.groups.map((g, gi) => g.title ? `<li><a href="#${sec.id}-g${gi}" data-sub="${sec.id}-g${gi}">${g.title}</a></li>` : '').join('');
    rows.push(`<li class="toc-li" data-li="${sec.id}">
      <a class="toc-item" href="#${sec.id}" data-sec="${sec.id}">
        <span class="ti-tag">${sec.period}</span>
        <span class="ti-title">${sec.icon} ${sec.title}</span>
        <span class="ti-count" data-count="${sec.id}"><b>0</b>/${count(sec)}</span>
      </a>
      ${subs ? `<ul class="toc-sub">${subs}</ul>` : ''}
    </li>`);
  });
  rows.push(`<li class="toc-li"><a class="toc-item" href="#mypoem" data-sec="mypoem"><span class="ti-tag">2교시 ④</span><span class="ti-title">📜 내 시 크게 보기</span></a></li>`);
  rows.push(`<li class="toc-li"><a class="toc-item" href="#finish" data-sec="finish"><span class="ti-title">🎉 오늘의 마무리</span></a></li>`);
  document.querySelectorAll('.toc-list').forEach(n => { n.innerHTML = `<ol>${rows.join('')}</ol>`; });
}

function updateProgress() {
  const total = document.querySelectorAll('#promptArea .card').length;
  const done = document.querySelectorAll('#promptArea .card.copied').length;
  document.querySelectorAll('.toc-progress').forEach(n => {
    n.innerHTML = `<p class="tp-text"><span>✅ 복사한 문장</span><span><b>${done}</b> / ${total}</span></p><div class="tp-bar"><i style="width:${total ? done / total * 100 : 0}%"></i></div>`;
  });
  SECTIONS.forEach(sec => {
    const el = document.getElementById(sec.id);
    const n = el.querySelectorAll('.card.copied').length;
    const all = el.querySelectorAll('.card').length;
    document.querySelectorAll(`[data-count="${sec.id}"]`).forEach(c => {
      c.innerHTML = `<b>${n}</b>/${all}`;
      c.classList.toggle('full', n === all && all > 0);
    });
  });
}

function setupTOC() {
  buildTOC();
  updateProgress();
  const ids = ['how', ...SECTIONS.map(s => s.id), 'mypoem', 'finish'];
  const subIds = [];
  SECTIONS.forEach(sec => sec.groups.forEach((g, gi) => { if (g.title) subIds.push(`${sec.id}-g${gi}`); }));
  const miniNow = document.getElementById('miniNow');
  const side = document.getElementById('sideToc');
  let current = '', currentSub = '';

  const spy = () => {
    const line = (document.getElementById('toolbar').offsetHeight || 80) + 60;
    let now = 'how';
    ids.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= line) now = id; });
    let sub = '';
    subIds.forEach(id => {
      if (!id.startsWith(now + '-')) return;
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line + 40) sub = id;
    });
    if (now !== current) {
      current = now;
      document.querySelectorAll('.toc-item').forEach(a => a.classList.toggle('active', a.dataset.sec === now));
      document.querySelectorAll('.toc-li[data-li]').forEach(li => li.classList.toggle('open', li.dataset.li === now));
      const a = document.querySelector(`.toc-item[data-sec="${now}"]`);
      const sec = SECTIONS.find(s => s.id === now);
      miniNow.textContent = sec ? `${sec.period} ${sec.icon} ${sec.title}` : (a ? (a.querySelector('.ti-tag') ? a.querySelector('.ti-tag').textContent + ' ' : '') + a.querySelector('.ti-title').textContent : '');
      const act = side.querySelector('.toc-item.active');
      if (act && getComputedStyle(side).display !== 'none') {
        const top = act.offsetTop - side.clientHeight / 3;
        side.scrollTo({ top, behavior: 'smooth' });
      }
    }
    if (sub !== currentSub) {
      currentSub = sub;
      document.querySelectorAll('.toc-sub a').forEach(a => a.classList.toggle('active', a.dataset.sub === sub));
    }
  };
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { spy(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', spy);
  spy();

  // 펼치는 목차 (태블릿·모바일)
  const drawer = document.getElementById('tocDrawer');
  const mini = document.getElementById('miniToc');
  const openD = () => {
    drawer.hidden = false; mini.setAttribute('aria-expanded', 'true'); document.body.classList.add('no-scroll');
    const sheet = drawer.querySelector('.td-sheet');
    const act = drawer.querySelector('.toc-item.active');
    sheet.scrollTop = act ? Math.max(0, act.offsetTop - sheet.clientHeight / 3) : 0;
  };
  const closeD = () => { drawer.hidden = true; mini.setAttribute('aria-expanded', 'false'); document.body.classList.remove('no-scroll'); };
  mini.addEventListener('click', () => { play('click'); openD(); });
  drawer.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) { play('click'); closeD(); return; }
    if (e.target.closest('a')) { play('click'); closeD(); }
  });
  side.addEventListener('click', e => { if (e.target.closest('a')) play('click'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) closeD(); });
}

/* ---------- 내 시 크게 보기 ---------- */
function cleanPoem(raw) {
  return raw.replace(/\r/g, '').split('\n')
    .map(l => l.replace(/^\s*(#{1,6}\s*|>\s*|[-*•]\s+)/, '').replace(/\*\*|__/g, '').replace(/\s+$/, ''))
    .join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
// 첫 줄이 제목처럼 생겼으면 제목으로 떼어내기 (**제목**, 「제목」, 제목: …)
function splitTitle(raw) {
  const lines = raw.replace(/\r/g, '').split('\n');
  const i = lines.findIndex(l => l.trim());
  if (i < 0) return { title: '', body: '' };
  const first = lines[i].trim();
  const m = first.match(/^(?:#{1,6}\s*)?(?:\*\*(.+?)\*\*|[「『《<〈"“](.+?)[」』》>〉"”]|제목\s*[:：]\s*(.+))$/);
  if (m && lines.slice(i + 1).some(l => l.trim())) {
    const t = (m[1] || m[2] || m[3] || '').replace(/^[「『《<〈"“]|[」』》>〉"”]$/g, '').trim();
    return { title: t, body: lines.slice(i + 1).join('\n') };
  }
  return { title: '', body: raw };
}

function setupMyPoem() {
  const $ = id => document.getElementById(id);
  const title = $('mpTitle'), body = $('mpBody'), name = $('mpName'), saved = $('mpSaved');
  const view = $('poemView'), paper = $('pvPaper');
  let theme = 'autumn', k = 1, saveTimer;

  try {
    const d = JSON.parse(localStorage.getItem('poem-mine') || '{}');
    title.value = d.title || ''; body.value = d.body || ''; name.value = d.name || '';
    theme = d.theme || 'autumn';
    if (d.body) saved.textContent = '💾 이 휴대폰에 저장된 시를 불러왔어요';
  } catch (e) {}

  const save = () => {
    try {
      localStorage.setItem('poem-mine', JSON.stringify({ title: title.value, body: body.value, name: name.value, theme }));
      saved.textContent = body.value.trim() ? '💾 이 휴대폰에 저장했어요' : '';
    } catch (e) {}
  };
  [title, body, name].forEach(el => el.addEventListener('input', () => { clearTimeout(saveTimer); saveTimer = setTimeout(save, 400); }));

  const fill = raw => {
    const sp = splitTitle(raw);
    if (sp.title && !title.value.trim()) title.value = cleanPoem(sp.title);
    body.value = cleanPoem(sp.title ? sp.body : raw);
    save();
  };
  $('mpPaste').addEventListener('click', async () => {
    play('click');
    try {
      const t = await navigator.clipboard.readText();
      if (!t || !t.trim()) throw new Error('empty');
      fill(t);
      toast('📋 시를 붙여넣었어요!');
    } catch (e) {
      body.focus();
      toast('✍️ 시 칸을 꾹 눌러 붙여넣기 해 주세요');
    }
  });
  body.addEventListener('paste', () => setTimeout(() => {
    if (!title.value.trim()) { const sp = splitTitle(body.value); if (sp.title) { title.value = cleanPoem(sp.title); body.value = cleanPoem(sp.body); save(); } }
  }, 0));

  $('mpClear').addEventListener('click', () => {
    play('click');
    if (!body.value && !title.value && !name.value) return;
    if (!confirm('내 시를 모두 지울까요?')) return;
    title.value = body.value = name.value = '';
    save(); saved.textContent = '🗑️ 지웠어요';
  });

  const applyTheme = () => {
    paper.className = 'pv-paper theme-' + theme;
    view.querySelectorAll('.pv-theme').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.theme === theme)));
  };
  const render = () => {
    const text = cleanPoem(body.value);
    const lines = text.split('\n');
    const count = lines.filter(l => l.trim()).length;
    const base = count <= 6 ? 'clamp(1.5rem, 5.4vw, 2.3rem)' : count <= 10 ? 'clamp(1.35rem, 4.8vw, 2rem)' : count <= 16 ? 'clamp(1.2rem, 4.2vw, 1.7rem)' : 'clamp(1.05rem, 3.6vw, 1.45rem)';
    paper.style.setProperty('--pvfs', base);
    $('pvTitle').textContent = title.value.trim() || '나의 시';
    $('pvBody').innerHTML = lines.map(l => l.trim() ? `<p>${escapeHTML(l.trim())}</p>` : '<div class="gap"></div>').join('');
    $('pvName').textContent = name.value.trim() ? '— ' + name.value.trim() : '';
  };
  const open = () => {
    if (!body.value.trim()) { play('click'); body.focus(); toast('✍️ 먼저 내 시를 붙여넣어 주세요'); return; }
    play('copy');
    render(); applyTheme();
    view.style.setProperty('--pvk', k);
    view.hidden = false; document.body.classList.add('no-scroll');
    view.querySelector('.pv-stage').scrollTop = 0;
    $('pvClose').focus();
  };
  const close = () => { stopSpeak(); view.hidden = true; document.body.classList.remove('no-scroll'); $('mpShow').focus(); };
  $('mpShow').addEventListener('click', open);
  $('pvClose').addEventListener('click', () => { play('click'); close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !view.hidden) close(); });
  view.querySelectorAll('.pv-theme').forEach(b => b.addEventListener('click', () => { play('click'); theme = b.dataset.theme; applyTheme(); save(); }));
  $('pvUp').addEventListener('click', () => { play('click'); k = Math.min(1.6, +(k + 0.1).toFixed(2)); view.style.setProperty('--pvk', k); });
  $('pvDown').addEventListener('click', () => { play('click'); k = Math.max(0.7, +(k - 0.1).toFixed(2)); view.style.setProperty('--pvk', k); });
  $('pvSpeak').addEventListener('click', e => {
    play('click');
    const lines = cleanPoem(body.value).split('\n').map(l => l.trim()).filter(Boolean).map(l => /[.!?…]$/.test(l) ? l : l + '.');
    const t = title.value.trim();
    speak(e.currentTarget, (t ? t + '. ' : '') + lines.join(' '));
  });
}

/* ---------- QR코드 · 앱 안 안내 ---------- */
function setupQRAndInApp() {
  const qv = document.getElementById('qrView');
  const openQ = () => { play('click'); qv.hidden = false; document.getElementById('qrClose').focus(); };
  const closeQ = () => { play('click'); qv.hidden = true; };
  document.getElementById('qrOpen').addEventListener('click', openQ);
  document.getElementById('qrClose').addEventListener('click', closeQ);
  qv.addEventListener('click', e => { if (e.target === qv) closeQ(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !qv.hidden) closeQ(); });

  if (!INAPP) return;
  const bn = document.getElementById('inappBanner');
  let closed = false;
  try { closed = sessionStorage.getItem('poem-inapp-closed') === '1'; } catch (e) {}
  if (closed) return;
  document.getElementById('inappName').textContent = INAPP[1];
  const canOpen = /KAKAOTALK/i.test(UA) || IS_ANDROID;
  if (!canOpen) {
    document.getElementById('inappOpen').hidden = true;
    document.getElementById('inappTip').textContent = IS_IOS ? '오른쪽 아래 ··· 또는 공유 버튼을 눌러 “Safari로 열기”를 골라 주세요.' : '메뉴에서 “다른 브라우저로 열기”를 골라 주세요.';
  }
  bn.hidden = false;
  // 카카오톡이면 화면을 먼저 보여 준 뒤, 한 번만 자동으로 바깥 브라우저로 열기
  if (/KAKAOTALK/i.test(UA)) {
    let tried = false;
    try { tried = sessionStorage.getItem('poem-escape') === '1'; sessionStorage.setItem('poem-escape', '1'); } catch (e) {}
    if (!tried) setTimeout(openExternal, 600);
  }
  document.getElementById('inappOpen').addEventListener('click', () => { play('click'); openExternal(); });
  document.getElementById('inappClose').addEventListener('click', () => {
    play('click'); bn.hidden = true;
    try { sessionStorage.setItem('poem-inapp-closed', '1'); } catch (e) {}
  });
}

/* ---------- 효과음 (Web Audio, 파일 없이 재생) ---------- */
let audioCtx = null;
let soundOn = true;
try { soundOn = localStorage.getItem('poem-sound') !== 'off'; } catch (e) {}

function ctx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
function tone(freq, start, dur, type = 'sine', vol = 0.22) {
  const c = ctx(); if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, c.currentTime + start);
  g.gain.setValueAtTime(0.0001, c.currentTime + start);
  g.gain.exponentialRampToValueAtTime(vol, c.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
  o.connect(g).connect(c.destination);
  o.start(c.currentTime + start);
  o.stop(c.currentTime + start + dur + 0.05);
}
const SFX = {
  copy() { // 도-미-솔-도 반짝 소리
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.08, 0.35, 'triangle', 0.2));
    tone(1568, 0.34, 0.5, 'sine', 0.08);
  },
  click() { tone(660, 0, 0.12, 'sine', 0.18); tone(990, 0.05, 0.12, 'sine', 0.12); },
  top() { // 위로 올라가는 소리
    const c = ctx(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(300, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.35);
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, c.currentTime + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.4);
    o.connect(g).connect(c.destination);
    o.start(); o.stop(c.currentTime + 0.45);
  }
};
function play(name) { if (soundOn) { try { SFX[name](); } catch (e) {} } }

/* ---------- 복사 ---------- */
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) {}
  }
  // 예전 브라우저용 대체 방법
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;font-size:16px;';
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
  return ok;
}

let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

function ripple(btn, e) {
  const r = btn.getBoundingClientRect();
  const s = document.createElement('span');
  const size = Math.max(r.width, r.height);
  s.className = 'ripple';
  s.style.width = s.style.height = size + 'px';
  const x = (e.clientX || r.left + r.width / 2) - r.left - size / 2;
  const y = (e.clientY || r.top + r.height / 2) - r.top - size / 2;
  s.style.left = x + 'px'; s.style.top = y + 'px';
  btn.appendChild(s);
  setTimeout(() => s.remove(), 650);
}

function sparkle(x, y) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const icons = ['✨', '⭐', '🌸', '🍁', '💖'];
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.textContent = icons[i % icons.length];
    const ang = (Math.PI * 2 * i) / 8;
    s.style.left = x + 'px'; s.style.top = y + 'px';
    s.style.setProperty('--dx', Math.cos(ang) * 90 + 'px');
    s.style.setProperty('--dy', Math.sin(ang) * 90 + 'px');
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 850);
  }
}

/* ---------- 시작 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupTOC();
  setupMyPoem();
  setupQRAndInApp();
  const area = document.getElementById('promptArea');
  if (!canSpeak) document.body.classList.add('no-speak');
  else { window.speechSynthesis.getVoices(); setupVoicePanel(); } // 목소리 미리 불러오기

  const cardOf = el => { const a = el.closest('.card'); return a ? [a, CARDS[a.id]] : [null, null]; };
  const refresh = (art, card) => { art.querySelector('.prompt-text').innerHTML = build(card).html; };
  const resetCopy = art => { // 빈칸을 바꾸면 다시 복사하도록 녹색으로 되돌림
    if (!art.classList.contains('copied')) return;
    art.classList.remove('copied');
    const btn = art.querySelector('.copy-btn');
    btn.classList.remove('done');
    btn.querySelector('.label').textContent = COPY_LABEL;
    btn.querySelector('.ico').textContent = '📋';
    art.querySelector('.ai-links').hidden = true;
    updateProgress();
  };

  area.addEventListener('click', async e => {
    // 보기 고르기
    const chip = e.target.closest('.chip');
    if (chip) {
      const [art, card] = cardOf(chip);
      card.values[+chip.dataset.b] = chip.dataset.v;
      chip.parentElement.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
      refresh(art, card); resetCopy(art); play('click');
      return;
    }
    // 읽어주기
    const sp = e.target.closest('.speak-btn');
    if (sp) {
      const [, card] = cardOf(sp);
      play('click');
      speak(sp, build(card).plain);
      return;
    }
    // AI 열기
    if (e.target.closest('.ai-link')) { play('click'); return; }
    // 복사
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const [art, card] = cardOf(btn);
    ripple(btn, e);
    const empty = [...art.querySelectorAll('.blank-input')].find(i => !i.value.trim());
    if (empty) {
      play('click');
      empty.classList.remove('need'); void empty.offsetWidth; empty.classList.add('need');
      empty.focus();
      toast('✏️ 빈칸에 내 말을 먼저 써 주세요');
      return;
    }
    const ok = await copyText(build(card).plain);
    if (ok) {
      play('copy');
      btn.classList.add('done');
      btn.querySelector('.label').textContent = DONE_LABEL;
      btn.querySelector('.ico').textContent = '✅';
      art.classList.add('copied');
      art.querySelector('.ai-links').hidden = false;
      updateProgress();
      const r = btn.getBoundingClientRect();
      sparkle(r.left + r.width / 2, r.top + r.height / 2);
      toast('📋 복사했어요! 아래 버튼으로 AI를 열어요');
    } else {
      play('click');
      toast('😢 복사가 안 됐어요. 글자를 꾹 눌러 직접 복사해 주세요');
    }
  });

  // 빈칸에 글자 쓰기
  area.addEventListener('input', e => {
    const inp = e.target.closest('.blank-input');
    if (!inp) return;
    const [art, card] = cardOf(inp);
    card.values[+inp.dataset.b] = inp.value.trim();
    inp.classList.remove('need');
    refresh(art, card); resetCopy(art);
  });
  // 입력칸을 누르면 글자 전체 선택 → 바로 새로 쓰기 쉽게
  area.addEventListener('focusin', e => {
    const inp = e.target.closest('.blank-input');
    if (inp) setTimeout(() => inp.select(), 0);
  });
  area.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.closest('.blank-input')) e.target.blur();
  });

  // 일반 버튼·링크 효과음
  document.querySelectorAll('.quicknav a, .cta, .tool-btn').forEach(el => {
    el.addEventListener('click', () => play('click'));
  });

  // 효과음 켜기/끄기
  const sBtn = document.getElementById('soundToggle');
  const syncSound = () => {
    sBtn.setAttribute('aria-pressed', String(soundOn));
    sBtn.firstChild.textContent = soundOn ? '🔊' : '🔇';
    sBtn.setAttribute('aria-label', soundOn ? '효과음 끄기' : '효과음 켜기');
  };
  syncSound();
  sBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    try { localStorage.setItem('poem-sound', soundOn ? 'on' : 'off'); } catch (e) {}
    syncSound();
    toast(soundOn ? '🔊 효과음을 켰어요' : '🔇 효과음을 껐어요');
    play('click');
  });

  // 글자 크기 조절
  let fs = 1;
  try { fs = parseFloat(localStorage.getItem('poem-fs')) || 1; } catch (e) {}
  const applyFs = () => {
    document.documentElement.style.setProperty('--fs', fs);
    try { localStorage.setItem('poem-fs', fs); } catch (e) {}
  };
  applyFs();
  document.getElementById('fontUp').addEventListener('click', () => { fs = Math.min(1.4, +(fs + 0.1).toFixed(2)); applyFs(); toast('글자를 크게 했어요 🔍'); });
  document.getElementById('fontDown').addEventListener('click', () => { fs = Math.max(0.85, +(fs - 0.1).toFixed(2)); applyFs(); toast('글자를 작게 했어요'); });

  // 맨위 버튼
  const top = document.getElementById('toTop');
  const onScroll = () => top.classList.toggle('show', window.scrollY > 500);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  top.addEventListener('click', () => {
    play('top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 스크롤 등장 효과
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  // 떨어지는 잎사귀
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    const box = document.getElementById('falling');
    const leaves = ['🍁', '🍂', '🌸', '✨', '🍃'];
    const count = window.innerWidth < 600 ? 8 : 14;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.textContent = leaves[i % leaves.length];
      s.style.left = Math.random() * 100 + 'vw';
      s.style.fontSize = (16 + Math.random() * 18) + 'px';
      s.style.animationDuration = (12 + Math.random() * 14) + 's';
      s.style.animationDelay = (-Math.random() * 20) + 's';
      box.appendChild(s);
    }
  }

  // 히어로 시 타자 효과
  const poem = '노란 햇살이\n내 창문을 두드려요\n“오늘도 잘하고 있어”\n바람이 속삭이면\n나는 활짝 웃어요';
  const el = document.getElementById('typePoem');
  if (reduce) { el.textContent = poem; }
  else {
    let i = 0;
    const type = () => {
      if (i <= poem.length) { el.textContent = poem.slice(0, i++); setTimeout(type, poem[i - 1] === '\n' ? 380 : 90); }
      else { setTimeout(() => { i = 0; type(); }, 4000); }
    };
    setTimeout(type, 700);
  }

  // 시 종이 3D 기울기 (PC 마우스)
  const paper = document.getElementById('tiltPaper');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
    const art = paper.parentElement;
    art.addEventListener('mousemove', e => {
      const r = art.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      paper.style.transform = `rotateY(${x * 24}deg) rotateX(${-y * 18}deg)`;
    });
    art.addEventListener('mouseleave', () => { paper.style.transform = ''; });
  }
});
