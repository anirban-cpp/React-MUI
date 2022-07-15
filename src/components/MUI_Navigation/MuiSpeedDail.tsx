import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const MuiSpeedDail = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      // specifying the openIcon will make that icon as the icon when the speed dial is opened
    >
      <SpeedDialAction
        icon={<ContentCopyOutlinedIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      {/* tooltipOpen = true means that tooltip is visible even if we don't hover over the element. otherwise it will be visible only if we hover over the element */}
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MuiSpeedDail;
