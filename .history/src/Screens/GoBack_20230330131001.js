import { useNavigate } from "react-router";

const GoBack = () => {
  const navigate = useNavigate();
  function GoBack() {
    navigate(-1);
  }
  return (GoBack);
};

export default GoBack;
