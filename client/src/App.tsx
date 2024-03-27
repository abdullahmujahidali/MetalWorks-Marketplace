import { Flex } from "@radix-ui/themes";
import { Header } from "./components/Header";
import { Landing } from "./views/Landing";

export default function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Header />
      <Landing />
    </Flex>
  );
}
