import { styled } from "precise-ui";

export const CardContainer = styled.div`
  text-align: center;
  justify-content: center;
  background: #edf5e1;
  padding-top:5%;
  border-radius: 5px;
  height: 100px;
  margin: auto;
  margin-top: 12px;
  margin-left:12px; 
  margin-bottom: 1rem;
  margin-right: 1rem;
  display: inline-flex;
  width: 250px;
  color: #05386b;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.12), 0 3px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);
  }
`;

export const IconContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 4px;
`;
