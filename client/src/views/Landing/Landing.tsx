import { Button, Text } from "@radix-ui/themes";
import { Header } from "../../components/Header";

export default function Landing() {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-4  w-full ">
        <h1 className=" text-5xl">Welcome to Metal Works.</h1>
        <p className="max-w-[450px] text-center">
          Metal works is an inventory management system, which keeps tracks of
          your metal, iron or steel products, you can add/remove users
        </p>
        <div className="gap-2 flex ">
          <Button> Sign Up</Button>
          <Button color="red"> Login</Button>
        </div>
      </div>
    </div>
  );
}
