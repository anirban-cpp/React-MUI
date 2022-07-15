import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Katharine",
    last_name: "Bagott",
    email: "kbagott0@altervista.org",
    gender: "Female",
    ip_address: "7.102.2.166",
  },
  {
    id: 2,
    first_name: "Stanfield",
    last_name: "Frigout",
    email: "sfrigout1@furl.net",
    gender: "Male",
    ip_address: "54.176.91.19",
  },
  {
    id: 3,
    first_name: "Weylin",
    last_name: "Syce",
    email: "wsyce2@google.co.uk",
    gender: "Male",
    ip_address: "57.199.24.79",
  },
  {
    id: 4,
    first_name: "Ardelis",
    last_name: "Anderer",
    email: "aanderer3@ed.gov",
    gender: "Female",
    ip_address: "190.49.211.222",
  },
  {
    id: 5,
    first_name: "Violante",
    last_name: "Canelas",
    email: "vcanelas4@indiatimes.com",
    gender: "Female",
    ip_address: "184.99.72.136",
  },
  {
    id: 6,
    first_name: "Jill",
    last_name: "Down",
    email: "jdown5@amazon.co.jp",
    gender: "Genderqueer",
    ip_address: "8.81.229.244",
  },
  {
    id: 7,
    first_name: "Sharron",
    last_name: "Devons",
    email: "sdevons6@earthlink.net",
    gender: "Female",
    ip_address: "238.82.4.124",
  },
  {
    id: 8,
    first_name: "Ebenezer",
    last_name: "Ivanin",
    email: "eivanin7@slideshare.net",
    gender: "Male",
    ip_address: "198.87.11.31",
  },
  {
    id: 9,
    first_name: "Matthew",
    last_name: "Bullock",
    email: "mbullock8@weather.com",
    gender: "Male",
    ip_address: "255.133.144.150",
  },
  {
    id: 10,
    first_name: "Gideon",
    last_name: "Pilcher",
    email: "gpilcher9@tiny.cc",
    gender: "Male",
    ip_address: "74.187.154.225",
  },
];

const MuiTable = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Table Component
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: "310px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>First name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Last name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MuiTable;
