import styled from "styled-components";

export type TypeLink = {
  typeLink: "add" | "remove";
};

export const LinkButtonContainer = styled.div<TypeLink>`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 26px;
  margin-bottom: ${(props) => (props.typeLink === "remove" ? "26px" : "112px")};
  text-align: center;

  .button {
    background-color: cornflowerblue;
    color: #ffffff;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
