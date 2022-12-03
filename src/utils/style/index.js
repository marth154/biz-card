import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
    display: "flex",
    position: "absolute",
    bottom: 0,
    zIndex: 999,
    width: "100%",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
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
    textDecoration: "underline",
  },
  text: { textOverflow: "ellipsis", overflow: "hidden" },
}));

export default useStyles;
