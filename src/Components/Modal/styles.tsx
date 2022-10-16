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
    border: 1px solid #e4e7ec;
    color: #667085;
    font-family: "Inter", sans-serif;
    font-family: "Roboto", sans-serif;
  }
  .close-icon {
    color: #e4e7ec;
    transition: 0.1s all ease-out;
    :hover {
      color: #e00000;
    }
  }
  .err-msg {
    color: #e00000;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-family: "Roboto", sans-serif;
  }
  .submit-button {
    padding: 0.5rem;
    width: 45%;
    font-family: "Inter", sans-serif;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    margin: 1rem 0;
    background: #e2993a;
    color: #fff;
    border: 1px solid #e2993a;
    transition: 0.2s all ease-out;
    :hover {
      background: #fff;
      color: #e2993a;
    }
  }
  .optionalText {
    font-size: 0.8rem;
    font-family: sans-serif;
    color: #0b5cd7;
    padding: 0.5rem 1rem;
    background: #ecf2fc;
    display: flex;
    align-items: center;
  }
  .infoIcon {
    margin-right: 0.5rem;
  }
`;
