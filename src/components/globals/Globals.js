import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";
import { setFonts } from "../../styles/styles";

const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: ${setFonts.main};
  font-weight: 300;
  line-height: 1.7;
  /* padding: 3rem; */
}
`;

export default Globals;
