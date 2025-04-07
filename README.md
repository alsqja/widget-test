# Popup Widget (임베디드 테스트용)

외부 웹사이트에서 `<script>` 태그만으로 쉽게 사용할 수 있는 버튼 팝업 위젯입니다.

## 사용 방법

```html
<script src="https://web-portfolio-files.s3.ap-northeast-2.amazonaws.com/popup-widget.js"></script>
<script>
  MyPopupWidget.init({ targetId: "my-popup-button" });
</script>

<button id="my-popup-button">눌러보세요</button>
```

버튼을 클릭하면 **"임베디드 테스트 입니다"**라는 모달이 나타납니다.
