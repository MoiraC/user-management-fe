import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { User } from './types/types';

export default async function Home() {
  const userResponse = await fetch(`http://localhost:8080/users`, { cache: 'no-store' })
  const users = (await userResponse.json()).data as User[]

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
          {users.map((user: User) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.surname}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.birthday}</TableCell>
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