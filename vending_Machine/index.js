const coList = document.querySelector(".Cola_list");  //콜라 자판기
const btn_item = document.querySelectorAll(".Cola_list .btn_item"); // 자판기 콜라 버튼
const item_staged_before = document.querySelector(".list .list_item_staged"); //

// 콜라 버튼 이벤트 처리 함수
function clickHandler(e) {
  const elLi = document.createElement("li");
 
  // 이벤트 위임 처리
  let colaBtn = e.target;
  while (!colaBtn.classList.contains("btn_item")) {
    colaBtn = colaBtn.parentNode;
    if (colaBtn.nodeName == "BODY") {
      colaBtn = null;
      return;
    }
  }
  // e.target : coList중 내가 클릭한 애 출력 , currentTarget은 ul이 찍힘

//------------------------------------------------------------------
  // 콜라 버튼의 이미지경로,이름,
  const colaImg = colaBtn.querySelector("img");
  const src = colaImg.getAttribute("src");
  const colaName = colaBtn.querySelector("strong");
  const btn = document.querySelectorAll(".list .list_item_staged button"); // 구매목록에 있는 콜라 목록

//------------------------------------------------------------------
  const listBtn = document.createElement('button');
  listBtn.classList.add('btn_staged');
  listBtn.setAttribute("type", "button");
  const listImg = document.createElement('img');
  listImg.classList.add('mini')
  const listText = document.createElement('strong');
  listText.classList.add('txt_item')
  const listNum = document.createElement('span'); 
  listNum.classList.add('item_num')
  
//------------------------------------------------------------------

  // 획득 목록에 아무 콜라도 없을 경우
  if (btn.length == 0) {
    listImg.setAttribute("src", src);
    listImg.setAttribute("alt",colaName.textContent+" 이미지");
    listText.textContent = colaName.textContent
    listNum.textContent = 1 ; 
    listBtn.append(listImg);
    listBtn.append(listText);
    listBtn.append(listNum);
    elLi.appendChild(listBtn);
    item_staged_before.appendChild(elLi);
  }

  else{
      // 획득 목록에 콜라가 있을 경우
      //같은 콜라를 선택했다면 수량만 증가
      for (i = 0; i < btn.length; i++) {       
        if (btn[i].children[1].textContent == colaName.textContent) {
          btn[i].children[2].textContent =
            Number(btn[i].children[2].textContent) + 1;
          break;
        }
      //마지막까지 비교했을때 없으면 새로운 콜라 목록 추가
        else if (i == btn.length - 1) {
          listImg.setAttribute("src", src);
          listImg.setAttribute("alt",colaName.textContent+" 이미지");
          listText.textContent = colaName.textContent
          listNum.textContent = 1 ; 
          listBtn.append(listImg);
          listBtn.append(listText);
          listBtn.append(listNum);
          elLi.appendChild(listBtn);
          item_staged_before.appendChild(elLi);
        }
      }
    }
  }

coList.addEventListener("click", clickHandler);

// ------------------------------------------

// 획득 btn 이벤트 처리
const getBtn = document.querySelector(".btn_get");

const item_staged_after = document.querySelector(".my_order_list .list_item_staged");
const elLiAfter = document.querySelectorAll(".list .list_item_staged li");
const totalPrice = document.querySelector(".total_price");

getBtn.addEventListener("click", (e) => {
  item_staged_after.innerHTML = null;
  let totalColaNum = 0; // 총 콜라갯수 (금액계산을 위한)

  for (i = 0; i < item_staged_before.children.length; i++) {

    // li만들기
    const elLi = document.createElement("li");
    //button만들기
    const btn = document.createElement("button");
    btn.classList.add("btn_staged");

    //button하위요소 3개

    //이미지
    const img = document.createElement("img");
    img.classList.add("mini");
    //이미지 url가져오기
    const imgURL =
      item_staged_before.children[i].children[0].children[0].getAttribute(
        "src"
      );
    img.setAttribute("src", imgURL);

    const strongTxt = document.createElement("strong");
    // 콜라명 가져오기
    const colaName = item_staged_before.children[i].children[0].children[1].textContent;

    strongTxt.classList.add("txt_item");
    strongTxt.textContent = colaName;
    //콜라갯수
    const spanNum = document.createElement("span");
    const colaNum = item_staged_before.children[i].children[0].children[2].textContent;
    spanNum.classList.add("item_num");
    spanNum.textContent = colaNum;

    totalColaNum += Number(colaNum);

    //버튼하위요소 3개
    btn.appendChild(img);
    btn.appendChild(strongTxt);
    btn.appendChild(spanNum);

    //li하위에 버튼추가
    elLi.appendChild(btn);

    //li를 ul에 추가
    item_staged_after.appendChild(elLi);
  }

  totalPrice.textContent =
    "총금액 : " + (totalColaNum * 1000).toLocaleString("ko-KR") + "원";
});

// 입금액 입력시 소지금에 뿌리기
// ------------------------------------------

const inputDepo = document.querySelector(".deposit");
const DepoBtn = document.querySelector(".deposit_btn");
const priceNow = document.querySelector(".possession_price_now");

DepoBtn.addEventListener("click", (e) => {
  let price = inputDepo.value;
  let price_now = parseInt(priceNow.textContent.replace(",", ""));
  if (price <= 0) {
    alert("금액이 0원 이하입니다. 다시 입력해주세요");
  }
  inputDepo.value = ""; // 임금액 입력후 초기화
  priceNow.textContent =
    (Number(price) + price_now).toLocaleString("ko-KR") + "원";
});

// 숫자 길이 제한함수
function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

// ------------------------------------------

let regex = /[^0-9]/g;
//거스름돈 반환 함수
const returnBtn = document.querySelector(".return_btn");
const balance = document.querySelector(".txt_balance");

returnBtn.addEventListener("click", (e) => {
  const deposit = priceNow.textContent;
  const total = totalPrice.textContent.replace(regex, "");
  const depoPrice = parseInt(deposit.replace(",", ""));

  if (depoPrice === "0원") {
    alert("먼저 돈을 입금하세요!");
  } else if (depoPrice < total) {
    alert("돈이 부족합니다");
  }
  //획득버튼을 누르지 않아 총 금액을 모를경우
  else if (total === "") {
    alert("먼저 획득버튼을 눌러주세요!");
  } else {
    let balCalc = depoPrice - total;
    balance.textContent = balCalc.toLocaleString("ko-KR") + "원";
    alert("맛있게 드세요^^");
  }
});
