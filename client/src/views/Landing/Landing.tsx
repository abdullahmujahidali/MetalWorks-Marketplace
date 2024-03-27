import { useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import { Header } from "../../components/Header";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-4  w-full ">
        <h1 className=" text-5xl">Welcome to Metal Works</h1>
        <p className="max-w-[450px] text-center">
          Metal works is an inventory management system, which keeps tracks of
          your metal, iron or steel products, you can add/remove users
        </p>
        <div className="gap-2 flex ">
          <Button onClick={() => navigate("register")}> Sign Up</Button>
          <Button color="iris"> Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
