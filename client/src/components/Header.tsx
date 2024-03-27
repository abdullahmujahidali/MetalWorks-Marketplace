import { Button } from "@radix-ui/themes";

export const Header = () => {
  return (
    <div className="flex  py-3 mx-3  items-center justify-between  border-black border-b">
      <div className="flex gap-4 w-full">
        <h2 className="font-bold">Metal Works</h2>
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
      <Button>Login</Button>
    </div>
  );
};
