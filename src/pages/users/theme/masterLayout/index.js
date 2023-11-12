import { memo } from "react";
import Header from "../header";
import Footer from "../footer";
const masterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header></Header>
      {/* <HomePage></HomePage> */}
      {children}
      <Footer></Footer>
    </div>
  );
};
export default memo(masterLayout);
