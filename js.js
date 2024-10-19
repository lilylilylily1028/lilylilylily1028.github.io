// 스크롤 이벤트
window.addEventListener('scroll', () => {
  const scrollLeft = window.scrollX;
  const uxui_1 = document.getElementById('uxui-1');
  const uxui_2 = document.getElementById('uxui-2');
  const uxui_3 = document.getElementById('uxui-3');
  const uxui_4 = document.getElementById('uxui-4');
  const uxui_5 = document.getElementById('uxui-5');
  const uxui_6 = document.getElementById('uxui-6');
  const uxui_7 = document.getElementById('uxui-7');
  //uxui 변수 설정
  const text_1 = document.querySelector('.img-1');
  const text_2 = document.querySelector('.img-2');
  const text_3 = document.querySelector('.img-3');
  const text_4 = document.querySelector('.img-4');
  const text_5 = document.querySelector('.img-5');
  const text_6 = document.querySelector('.img-6');
  const text_7 = document.querySelector('.img-7');
  //text 변수 설정

  if(scrollLeft >= 7173) {
      text_2.classList.add('active');
  }
  else if(scrollLeft <= 7173) {
      text_2.classList.remove('active');
  }

  if(scrollLeft >= 8513) {
      text_3.classList.add('active');
  }
  else if(scrollLeft <= 8513) {
      text_3.classList.remove('active');
  }

  if(scrollLeft >= 10315) {
      text_2.classList.remove('active');
      text_3.classList.remove('active');
  }

  if(scrollLeft >= 12557) {
      text_5.classList.add('active');
  }
  else if(scrollLeft <= 12557) {
      text_5.classList.remove('active');
  }

  if(scrollLeft >= 13906) {
      text_6.classList.add('active');
  }
  else if(scrollLeft <= 13906) {
      text_6.classList.remove('active');
  }

  if(scrollLeft >= 15696) {
      text_5.classList.remove('active');
      text_6.classList.remove('active');
  }
  console.log(scrollLeft); // 로그 출력
})