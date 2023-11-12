import { memo } from "react";
import Header from "../header";
import Footer from "../footer";
import "./style.scss";
const masterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default memo(masterLayout);
