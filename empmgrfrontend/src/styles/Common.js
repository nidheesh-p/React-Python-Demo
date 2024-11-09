import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f5f7;
  height: 100vh;
  margin-top: 2px;
  padding-top: 2px;
`;

export const Header = styled.div`
  font-size: 32px;
  font-weight: 700;
  border: solid 2px white;
  padding: 16px 0 16px 0;
  background-color: lightgray;
  text-align: center;
`;

export const PageTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  margin: 24px 12px 6px 12px;
`;

export const PageSubText = styled.div`
  font-size: 12px;
  font-weight: 300;
  display: flex;
  margin: 0 12px 24px 12px;
`;

export const BodyWrapper = styled.div`
  margin: 12px;
  background-color: white;
`;

export const ListView = styled.div``;

export const ListItem = styled.div`
  margin-top: 12px;
`;

export const ListRow = styled.div`
  display: flex;
  border: solid 2px #f0f5f7;
  cursor: "pointer";
`;

export const ButtonWrapper = styled.div`
  justify-content: right;
`;

export const InputText = styled.input`
  box-sizing: border-box;
  width: 95%;
  height: 40px;
  line-height: normal;
  border-radius: 2px;
  border: solid 1px;
  text-indent: 12px;
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin: 12px 12px 0 12px;
`;

export const Label = styled.label`
  width: 95%;
  line-height: normal;
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin: 0 12px;
`;

export const Section = styled.div`
  width: 95%;
  margin: 24px 12px 0 12px;
`;

export const ButtonSection = styled(Section)`
  overflow: hidden;
`;

export const Button = styled.div`
  border-radius: 4px;
  cursor: pointer;
  height: 35px;
  width: 100px;
  text-align: center;
  padding-top: 13px;
  border: 2px solid grey;
`;

export const SaveButton = styled(Button)`
  color: white;
  background-color: blue;
  float: right;
`;
