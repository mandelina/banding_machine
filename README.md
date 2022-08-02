# 콜라 자판기

#### URL : https://mandelina.github.io/vending_machine/vending_machine.html

#### [PRIVIEW]


#### [브라우저]
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/83548784/182409889-08ca95bf-7093-49de-b65b-88c8f8fd5c0a.gif)
<br>

#### [모바일]
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/83548784/182409897-dab18159-a450-4d6a-8725-c2429c8423c1.gif)






## 💻 사용한 스택
- `HTML` , `CSS`
- `JavaScript`

<br>


## 💻 프로젝트 설명
- 콜라를 클릭하여 선택후, 계산하여 획득할 수 있는 자판기

<br>

## 💻 메인 기능

- 각 콜라버튼을 클릭 시, 콜라 추가
- 획득 버튼을 클릭 시, 획득한 음료에 내가 선택한 콜라리스트가 나타나고 총금액이 계산된다.
- 입금액을 입력하고 거스름돈반환 버튼을 누르면 잔액이 뜬다.
- 입금액이 부족하거나 입력하지 않았으면 `alert`창으로 알려준다.


<br>

## 💻 고려한점

- 금액입력시 숫자만 입력할 수 있도록 처리하였다. 
- 각 레이아웃마다 heading태그를 주고 , .ir로 숨김처리하였다. (접근성을 위함)
- 재활용 할 수 있는 class들은 최대한 재활용 하였다.
- class명은 스네이크 표기법으로 하였다.
- 웹 width가 줄어들었을경우 UI도 고려하였다.
- 미디어쿼리로 핸드폰 UI도 고려하였다.

<br>

## 💻 프로젝트를 통해 배운점
- 컴포넌트의 재사용성을 고려하여 마크업하기
- `querySelector`사용시, 최적화를 생각하며 사용하기
- `innerHTLM` 를 지양하기 
  -  XSS공격에 취약
  - 기존의 하위노드들의 노드트리가 삭제되고 재구성되는 과정이 추가되어 상대적으로 실행시간이 느림

