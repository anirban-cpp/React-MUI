import { colors, Typography } from "@mui/material";
import "./App.css";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiButton from "./components/MuiButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiAvatar from "./components/MUIDataDisplay/MuiAvatar";
import MuiBadge from "./components/MUIDataDisplay/MuiBadge";
import MuiChip from "./components/MUIDataDisplay/MuiChip";
import MuiList from "./components/MUIDataDisplay/MuiList";
import MuiTable from "./components/MUIDataDisplay/MuiTable";
import MuiRadio from "./components/MuiRadio";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextFields from "./components/MuiTextFields";
import MuiTypography from "./components/MuiTypography";
import MuiResponsiveness from "./components/MUI_custom/MuiResponsiveness";
import MuiAlert from "./components/MUI_Feedback/MuiAlert";
import MuiDialog from "./components/MUI_Feedback/MuiDialog";
import MuiProgress from "./components/MUI_Feedback/MuiProgress";
import MuiSkeleton from "./components/MUI_Feedback/MuiSkeleton";
import MuiSnackbar from "./components/MUI_Feedback/MuiSnackbar";
import MuiLoadingButton from "./components/MUI_Lab.tsx/MuiLoadingButton";
import MuiMasonry from "./components/MUI_Lab.tsx/MuiMasonry";
import MuiTabs from "./components/MUI_Lab.tsx/MuiTabs";
import MuiTimeline from "./components/MUI_Lab.tsx/MuiTimeline";
import MuiLayout from "./components/MUI_Layout/MuiLayout";
import MuiBottomNavigation from "./components/MUI_Navigation/MuiBottomNavigation";
import MuiBreadcrumbs from "./components/MUI_Navigation/MuiBreadcrumbs";
import MuiDrawer from "./components/MUI_Navigation/MuiDrawer";
import MuiLink from "./components/MUI_Navigation/MuiLink";
import MuiNavbar from "./components/MUI_Navigation/MuiNavbar";
import MuiSpeedDail from "./components/MUI_Navigation/MuiSpeedDail";
import MuiAcordian from "./components/MUI_Surfaces/MuiAcordian";
import MuiCard from "./components/MUI_Surfaces/MuiCard";
import MuiImageList from "./components/MUI_Surfaces/MuiImageList";

// Mui customization
import { createTheme, ThemeProvider } from "@mui/material";
import MuiCustomization from "./components/MUI_custom/Mui_customization";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Navigation Components */}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Navigation Components
        </Typography>
        <MuiNavbar />
        <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
          Link
        </Typography>
        <MuiLink />
        <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
          BreadCrumbs
        </Typography>
        <MuiBreadcrumbs />
        <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
          Drawer
        </Typography>
        <MuiDrawer />
        <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
          Speed Dial
        </Typography>
        <MuiSpeedDail />
        <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
          Bottom Navigation
        </Typography>
        <MuiBottomNavigation />
        {/* Input Components */}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Input/Basic Components
        </Typography>
        <MuiTypography />
        <MuiButton />
        <MuiTextFields />
        <MuiSelect />
        <MuiRadio />
        <MuiCheckbox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutoComplete />
        {/* Layout Components*/}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Layout Components
        </Typography>
        <MuiLayout />
        {/* Surface components */}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Surface Components
        </Typography>
        <MuiCard />
        <MuiAcordian />
        <MuiImageList />
        {/* Data Display Components */}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Data Display Components
        </Typography>
        <MuiAvatar />
        <MuiBadge />
        <MuiList />
        <MuiChip />
        <MuiTable />
        {/* Feedback Components */}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Feedback Components
        </Typography>
        <MuiAlert />
        <MuiSnackbar />
        <MuiDialog />
        <MuiProgress />
        <MuiSkeleton />
        {/* Mui Lab Components */}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Mui Lab Components
        </Typography>
        <MuiLoadingButton />
        <MuiTabs />
        <MuiTimeline />
        <MuiMasonry />
        {/* Mui Responsiveness & Customization */}
        <Typography variant="h1" marginTop="3rem" marginBottom="3rem">
          Mui Responsiveness & Customization
        </Typography>
        <MuiResponsiveness />
        <MuiCustomization />
      </div>
    </ThemeProvider>
  );
}

export default App;
