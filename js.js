// 페이지 온로드 네비게이션
const nav = document.getElementById('menu')
window.addEventListener('load', () => {
  nav.classList.add('load');
});


// 가로 스크롤 제어(마우스 휠) @@@불완전@@@ 구현중...
// window.addEventListener('wheel', horizontalScroll, { passive: false });
// const body = document.querySelector('body');
//         let scrollPosition = 0;
//         let lastScrollX = window.scrollX;
//         const currentScrollX = window.scrollX;

//         function horizontalScroll(event) {
//             event.preventDefault();
//             scrollPosition -= event.deltaY;
//             scrollPosition += event.deltaX;

//             if (scrollPosition < 0) scrollPosition = 0;
//             if (scrollPosition > container.scrollWidth - window.innerWidth) {
//                 scrollPosition = container.scrollWidth - window.innerWidth;
//             }
        
//             window.scrollTo({
//                 left: scrollPosition
//             });
//             lastScrollX = currentScrollX;
//         }


// 네비게이션 메뉴 이벤트
const menu = document.querySelectorAll('.scroll_link')
menu.forEach((item) => {
  item.addEventListener('click', (event) => {
      if(event.target.classList.contains('link_1')) {
          window.scrollTo({
            left: 2047,
            behavior: 'smooth'
          });
      }
      else if(event.target.classList.contains('link_2')) {
          window.scrollTo({
            left: 4097, 
            behavior: 'smooth'
          });
      }
      else if(event.target.classList.contains('link_3')) {
          window.scrollTo({
            left: 23484, 
            behavior: 'smooth'
          });
      }
      else if(event.target.classList.contains('link_4')) {
        window.scrollTo({
          left: 25528, 
          behavior: 'smooth'
        });
      }
      else if(event.target.classList.contains('link_5')) {
        window.scrollTo({
          left: 27576, 
          behavior: 'smooth'
        });
      }
  })
})

// 스크롤 이벤트
window.addEventListener('scroll', () => {
  const scrollLeft = window.scrollX;

  // img 변수 선언
  const img_1 = document.querySelector('.img-1');

  // introduce 변수 선언
  const i1 = document.querySelector('.Ellipse')
  const i2 = document.querySelectorAll('#introduce p')
  const i3 = document.querySelector('#introduce h2')

  // uxui/text 섹션 변수 선언
  const text_sub = document.querySelector('#uxui-1 .content');
  const text_1 = document.querySelector('.text-1');
  const text_2 = document.querySelector('.text-2');
  const text_3 = document.querySelector('.text-3');
  const text_4 = document.querySelector('.text-4');
  const text_5 = document.querySelector('.text-5');
  const text_6 = document.querySelector('.text-6');
  const text_7 = document.querySelector('.text-7');
  const text_8 = document.querySelector('.text-8');
  const text_9 = document.querySelector('.text-9');

  const uxui_9 = document.getElementById('uxui-9');
  const transition = document.getElementById('transition');
  // if(scrollLeft > 0) {
  //   let currentSection = 0;  // 현재 섹션을 추적하는 변수
  //       const sections = document.querySelectorAll('.s1');
  //       const totalSections = sections.length;
  //       let scrollAccumulator = 0;  // 휠 이동 누적 변수
  //       const scrollThreshold = 50;  // 이동을 트리거하는 스크롤 범위 설정

  //       function scrollToSection(event) {
  //           scrollAccumulator += event.deltaY;
  //           scrollAccumulator += event.deltaX;

  //           // 스크롤 범위가 특정 값 이상일 때만 섹션 이동
  //           if (Math.abs(scrollAccumulator) >= scrollThreshold) {
  //               const direction = scrollAccumulator > 0 ? 1 : -1;
  //               scrollAccumulator = 0;  // 누적 초기화
  //               currentSection -= direction;

  //               // 현재 섹션의 인덱스를 0과 마지막 섹션 사이로 제한
  //               if (currentSection < 0) currentSection = 0;
  //               if (currentSection >= totalSections) currentSection = totalSections - 1;

  //               // 해당 섹션으로 스크롤 이동
  //               sections[currentSection].scrollIntoView({ behavior: 'smooth' });
  //               window.removeEventListener('wheel', scrollToSection);
  //           }
  //       }
  //       // 스크롤 이벤트 리스너 추가
  //       window.addEventListener('wheel', scrollToSection);;
  // }


  // Introduce 인터렉션
  if(scrollLeft >= 1832) {
    i1.classList.add('ani_1');
    i2.forEach((item) => {
      item.classList.add('ani_2')
    })
    i3.classList.add('ani_3');
  }

  // text_1 인터렉션
  if(scrollLeft >= 2644) {
    text_1.style.opacity = '1';
    img_1.style.opacity = '1';
  }
  else if(scrollLeft < 2644) {
    text_1.style.opacity = '0';
    img_1.style.opacity = '0';
  }

  if(scrollLeft >= 4100) {
    text_1.classList.add('active');
  }
  else if(scrollLeft < 4100) {
    text_1.classList.remove('active');
  }

  if(scrollLeft >= 5515) {
    text_sub.style.opacity = '0';
  }
  else if(scrollLeft < 5515) {
    text_sub.style.opacity = '1';
  }

  // text_2 인터렉션
  if(scrollLeft >= 6149) {
    text_1.classList.add('active');
    text_2.classList.add('active');
    text_2.style.opacity = '1';
  }
  else if(scrollLeft < 6149) {
    text_2.classList.remove('active');
    text_2.style.opacity = '0';
  }

  if(scrollLeft > 7566) {
    text_2.style.opacity = '0';
  }

  // text_3 인터렉션
  if(scrollLeft >= 8200) {
    text_2.classList.remove('active');
    text_3.classList.add('active');
    text_3.style.opacity = '1';
  }
  else if(scrollLeft < 8200) {
    text_3.classList.remove('active');
    text_3.style.opacity = '0';
  }
  
  if(scrollLeft > 9617) {
    text_3.style.opacity = '0';
  }

  // text_4 인터렉션
  if(scrollLeft >= 10251) {
    text_3.classList.remove('active');
    text_4.classList.add('active');
    text_4.style.opacity = '1';
  }
  else if(scrollLeft < 10251) {
    text_4.classList.remove('active');
    text_4.style.opacity = '0';
  }

  if(scrollLeft > 11668) {
    text_4.style.opacity = '0';
  }


  // text_5 인터렉션
  if(scrollLeft >= 12302) {
    text_4.classList.remove('active');
    text_5.classList.add('active');
    text_5.style.opacity = '1';
  }
  else if(scrollLeft < 12302) {
    text_5.classList.remove('active');
    text_5.style.opacity = '0';
  }

  if(scrollLeft > 13719) {
    text_5.style.opacity = '0';
  }

  // text_6 인터렉션
  if(scrollLeft >= 14353) {
    text_5.classList.remove('active');
    text_6.classList.add('active');
    text_6.style.opacity = '1';
  }
  else if(scrollLeft < 14353) {
    text_6.classList.remove('active');
    text_6.style.opacity = '0';
  }

  if(scrollLeft > 15770) {
    text_6.style.opacity = '0';
  }

  // text_7 인터렉션
  if(scrollLeft >= 16404) {
    text_6.classList.remove('active');
    text_7.classList.add('active');
    text_7.style.opacity = '1';
  }
  else if(scrollLeft < 16404) {
    text_7.classList.remove('active');
    text_7.style.opacity = '0';
  }

  if(scrollLeft > 17821) {
    text_7.style.opacity = '0';
  }

  // text_8 인터렉션
  if(scrollLeft >= 18455) {
    text_7.classList.remove('active');
    text_8.classList.add('active');
    text_8.style.opacity = '1';
  }
  else if(scrollLeft < 18455) {
    text_8.classList.remove('active');
    text_8.style.opacity = '0';
  }

  if(scrollLeft > 19872) {
    text_8.style.opacity = '0';
    text_1.classList.remove('active');
  }

  // text_9 인터렉션 + uxui_9 고정
  if(scrollLeft >= 20506) {
    text_8.classList.remove('active');
    uxui_9.classList.add('active');
    text_9.style.opacity = '1';
    // 섹션 마진 값 변경
    const section = document.querySelector('#transition');
    section.style.marginLeft = '3000px' 
  }
  else if(scrollLeft < 20506) {
    uxui_9.classList.remove('active');
    text_9.style.opacity = '0';
  }  

  // 트렌지션 섹션 고정(예정)
  if(scrollLeft >= 23499) {
    transition.classList.add('active');
  }
  else if(scrollLeft < 23499) {
    transition.classList.remove('active');
  }  
  console.log(scrollLeft); // 로그 출력
})

//transition 클릭 이벤트
  const radio = document.querySelectorAll('input[type="radio"]')
  const list1 = document.querySelector('.list1');
  const list2 = document.querySelector('.list2');
  const list3 = document.querySelector('.list3');
  const list4 = document.querySelector('.list4');
  const Original = document.querySelector('.Original')
  const Emirates = document.querySelector('.Emirates')
  const Jeju = document.querySelector('.Jeju')
  const KoreanAir = document.querySelector('.KoreanAir')

  radio.forEach(radio => {
    radio.addEventListener('change', (event) => {
        let value = event.target.value;

        switch(value) {
          case 'original' :
            Original.style.opacity = '1';
            Emirates.style.opacity = '0';
            Jeju.style.opacity = '0';
            KoreanAir.style.opacity = '0';

            list1.style.color = '#fff';
            list2.style.color = '#777';
            list3.style.color = '#777';
            list4.style.color = '#777';
          break;
          case 'emirates' : 
            Original.style.opacity = '0';
            Emirates.style.opacity = '1';
            Jeju.style.opacity = '0';
            KoreanAir.style.opacity = '0';

            list1.style.color = '#777';
            list2.style.color = '#fff';
            list3.style.color = '#777';
            list4.style.color = '#777';
          break;
          case 'jeju_air' : 
            Original.style.opacity = '0';
            Emirates.style.opacity = '0';
            Jeju.style.opacity = '1';
            KoreanAir.style.opacity = '0';

            list1.style.color = '#777';
            list2.style.color = '#777';
            list3.style.color = '#fff';
            list4.style.color = '#777';
          break;
          case 'korean_air' : 
            Original.style.opacity = '0';
            Emirates.style.opacity = '0';
            Jeju.style.opacity = '0';
            KoreanAir.style.opacity = '1';

            list1.style.color = '#777';
            list2.style.color = '#777';
            list3.style.color = '#777';
            list4.style.color = '#fff';
          break;
       }
    });
});

// 타이포 애니메이션 구현
new TypeIt("#tp", { 
  waitUntilVisible: true,
  startDelete: true,
  lifeLike: false,
  speed: 0,
  cursorSpeed: 1300
})
.type("A")
.pause(200)
.type("l")
.pause(170)
.type("l")
.pause(400)
.type("'")
.pause(800)
.type("l")
.pause(180)
.type("i")
.pause(150)
.type("g")
.pause(140)
.type("h")
.pause(120)
.type("t")
.go();