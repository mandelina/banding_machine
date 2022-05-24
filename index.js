const coList = document.querySelector(".Cola_list");

const btn_item = document.querySelectorAll(".Cola_list .btn_item");

const item_staged_before = document.querySelector(".list .list_item_staged");

// 콜라 버튼 이벤트 처리 함수
function clickHandler(e) {
  const elLi = document.createElement("li");
  let elem = e.target;
  while (!elem.classList.contains("btn_item")) {
    elem = elem.parentNode;
    if (elem.nodeName == "BODY") {
      elem = null;
      return;
    }
  }

  console.log(e.target); //coList중 내가 클릭한 애 출력 , currentTarget은 ul이 찍힘
  const src = elem.children[0].getAttribute("src"); //이미지
  const name = elem.children[1].textContent; // 콜라명
  const btn = document.querySelectorAll(".list .list_item_staged button"); // 구매목록에 있는 콜라 목록

  console.log(src);
  console.log(name);
  console.log(btn.length);

  // 획득 목록에 아무 콜라도 없을 경우
  if (btn.length == 0) {
    console.log("아무것도 없음");
    elLi.innerHTML = `
    <button type="button" class="btn_staged purchase">
    <img class="mini" src=${src} alt="" />
    <strong class="txt_item">${name}</strong>
    <span class="item_num">1</span>
  </button>
        `;
    item_staged_before.appendChild(elLi);
  }

  // 획득 목록에 콜라가 있을 경우
  for (i = 0; i < btn.length; i++) {
    //같은 콜라를 선택했다면 수량만 증가
    if (btn[i].children[1].textContent == name) {
      console.log("있음");
      btn[i].children[2].textContent =
        Number(btn[i].children[2].textContent) + 1;
      break;
    }

    //마지막까지 돌았는데도 없으면 새로운 콜라 목록 추가
    else if (i == btn.length - 1) {
      console.log("없음");
      //  box에 클릭한 콜라 li추가
      elLi.innerHTML = `
      <button type="button" class="btn_staged purchase">
      <img class="mini" src=${src} alt="" />
      <strong class="txt_item">${name}</strong>
      <span class="item_num">1</span>
    </button>
          `;
      //  박스를 부모로 연결하기
      item_staged_before.appendChild(elLi);
    }
  }
}

coList.addEventListener("click", clickHandler);

// ------------------------------------------

// 획득 btn 이벤트 처리
const getBtn = document.querySelector(".btn_get");

//ul
const item_staged_after = document.querySelector(
  ".my_order_list .list_item_staged"
);

const elLiAfter = document.querySelectorAll(".list .list_item_staged li");

getBtn.addEventListener("click", (e) => {
  for (i = 5; i < item_staged_before.childNodes.length; i++) {
    console.log(item_staged_before.childNodes[i]);
    item_staged_after.innerHTML = ` `;
  }
});

// ------------------------------------------
