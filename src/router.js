import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/users/homepage";
import Profile from "./pages/users/profile";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <Profile />,
    },
  ];
  // là nơi phần chia path cho từng page
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
  // return trả về 1 router riêng theo key và path thì sẽ trả về đúng theo page được set upo path trên userRouter
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
