import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from '@mui/material'
import Link from 'next/link'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const rows = [
  {
    id: 1,
    name: "Nannie",
    surname: "Steuber",
    birthday: "1948-05-18T17:43:31.739Z",
    email: "Meta"
  },
  {
    id: 2,
    name: "Neuberie",
    surname: "Sniber",
    birthday: "1948-05-18T17:43:31.739Z",
    email: "Amazon"
  }, {
    id: 3,
    name: "Natiet",
    surname: "Stier",
    birthday: "1948-05-18T17:43:31.739Z",
    email: "Google"
  },
];

export default async function Home() {
  // const staticData = await fetch(`https://63b49a269f50390584b53ecf.mockapi.io/users`, { cache: 'force-cache' })

  return (
    <TableContainer className='user-table' sx={{ mx: 'auto', width: '75%', height: '65%' }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.birthday}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit" color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}