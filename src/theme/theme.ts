import { createMuiTheme } from "@material-ui/core/styles";

import palette from "./palette";
import typography from "./typography";

const theme = createMuiTheme({
  palette: palette,
  typography: typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
