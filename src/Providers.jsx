import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Switzer-Variable",
  headings: {
    fontFamily: "Panchang-Variable",
    fontWeight: 900,
  },
});

const Providers = ({ children }) => {
  return (
    <>
      <MantineProvider theme={theme} forceColorScheme="dark">
        {children}
      </MantineProvider>
    </>
  );
};

export default Providers;
