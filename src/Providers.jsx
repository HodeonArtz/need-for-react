import { Theme } from "@radix-ui/themes";

const Providers = ({ children }) => {
  return <Theme appearance="dark">{children}</Theme>;
};

export default Providers;
