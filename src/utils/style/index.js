import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
    bottom: 0,
    zIndex: 999,
    width: "100%",
    borderTop: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
  },

  groupFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "row",
    },
  },

  header: {
    display: "flex",
    justifyContent: "center",
    borderBottom: 0,
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  container: {
    flexDirection: "row",
    cursor: "pointer",
    scrollbarWidth: "none",
    textDecoration: "underline",
  },
  text: { textOverflow: "ellipsis", overflow: "hidden" },
}));

export default useStyles;
