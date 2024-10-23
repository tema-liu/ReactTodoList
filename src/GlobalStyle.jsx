import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  font-family: "Noto Sans TC", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #ffd370;
}
a {
  text-decoration: none; /* 移除下劃線 */
  color: inherit; /* 繼承父元素的顏色，移除預設顏色 */
  outline: none; /* 移除焦點時的輪廓 */
}
input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
input {
  outline: none;
}

.none {
  display: none;
}`;

export default GlobalStyle;
