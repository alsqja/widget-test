# Popup Widget (임베디드 테스트용)

외부 웹사이트에서 `<script>` 태그만으로 쉽게 사용할 수 있는 버튼 팝업 위젯입니다.  
버튼을 클릭하면 "임베디드 테스트 입니다" 라는 문구가 포함된 모달이 표시됩니다.

---

## 기본 사용법 (HTML)

```html
<!-- 위젯 스크립트 삽입 -->
<script src="https://web-portfolio-files.s3.ap-northeast-2.amazonaws.com/popup-widget.js"></script>

<!-- 위젯 초기화 -->
<script>
  MyPopupWidget.init({ targetId: "my-popup-button" });
</script>

<!-- 버튼 정의 -->
<button id="my-popup-button">눌러보세요</button>
```

---

## React + TypeScript 환경에서 사용하는 방법

### 1. `public/index.html`에 스크립트 삽입

```html
<!-- public/index.html 내 <head> 또는 <body>에 삽입 -->
<script src="https://web-portfolio-files.s3.ap-northeast-2.amazonaws.com/popup-widget.js"></script>
```

### 2. 컴포넌트에서 위젯 초기화 (`App.tsx` 예시)

```tsx
import { useEffect } from "react";

declare global {
  interface Window {
    MyPopupWidget?: {
      init: (opts: { targetId: string }) => void;
    };
  }
}

function App() {
  useEffect(() => {
    if (window.MyPopupWidget) {
      window.MyPopupWidget.init({ targetId: "my-popup-button" });
    } else {
      const interval = setInterval(() => {
        if (window.MyPopupWidget) {
          window.MyPopupWidget.init({ targetId: "my-popup-button" });
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  return (
    <div style={{ padding: "100px" }}>
      <button id="my-popup-button">눌러보세요 (React)</button>
    </div>
  );
}

export default App;
```

---

## 위젯 동작

- 버튼 클릭 시, 해당 버튼 위로 팝업 모달이 뜹니다.
- 기본 텍스트: `"임베디드 테스트 입니다"`
- 외부 API 연동 또는 챗봇 삽입은 추후 확장 가능
