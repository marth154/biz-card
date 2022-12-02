import { Grid, Loader } from "@mantine/core";

export default function ProgressSpinner({ minHeight = "80vh" }) {
  return (
    <Grid
      container
      align="center"
      justify="center"
      display="flex"
      sx={{ minHeight }}
    >
      <Loader size="lg"/>
    </Grid>
  );
}
