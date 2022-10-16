import { styled, Dialog } from "@mui/material";

export const CustomDialogModal = styled(Dialog)`
  .wrapper {
    width: 100%;
    height: 80vh;
    display: flex;
    padding: 1rem;
  }
  .input-form {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  .textField {
    margin: 0.3rem 0rem;
    padding: 0.5rem;
    font-family: Inter, sans-serif;
    border: 1px solid #bcbebd;
  }
  .err-msg {
    color: red;
    font-family: inter, sans-serif;
    font-size: 0.725rem;
  }
  .submit-button {
    padding: 0.5rem;
    background: #1f003b;
    color: #fff;
    font-family: Inter, sans-serif;
    font-weight: 700;
    margin: 1rem 0;
    border: 1px solid #1f003b;
    transition: 0.2s all ease-in-out;
    :hover {
      background: #fff;
      color: #1f003b;
    }
  }
  .optionalText {
    font-size: 0.8rem;
    font-family: sans-serif;
    color: #2e60ea;
  }
`;
