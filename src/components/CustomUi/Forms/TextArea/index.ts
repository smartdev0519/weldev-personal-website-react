import { styled } from "@mui/system";

export const StyledTextareaElement = styled("textarea", {
  shouldForwardProp: (prop) =>
    !["ownerState", "minRows", "maxRows"].includes(prop.toString()),
})(
  ({ theme }) => `
  width: -webkit-fill-available;
  height: 110px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 20px;
  border-radius: 12px;
  color: white;
  background: #222;
  border: none;
  &:hover {
  }
  &:focus {
    background: #222;
    color: white;
    outline: none;
  }
`
);
