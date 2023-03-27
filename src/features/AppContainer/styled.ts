import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-areas: 
  "header header header header"
  "main main main sideMenu"
  "footer footer footer footer"; 
  grid-template-rows: auto 1fr auto;
`;
