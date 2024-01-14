import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { User } from './types/types';
import Link from 'next/link';

export default async function Home() {
  const userResponse = await fetch(`http://localhost:8080/users`, { cache: 'no-store' })
  const users = (await userResponse.json()).data as User[]

  return (
    <TableContainer className='user-table' sx={{ mx: 'auto', width: '75%', height: '65%' }} component={Paper}>
      <div style={{margin: "12px", display: 'flex', justifyContent: "space-between"}} >
        <Typography variant="h4" >
          User List
        </Typography>
        <Link href="/users">
          <Button variant="contained" size="large">Add User</Button>
        </Link>
      </div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
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
              <TableCell align="right">{user.gender}</TableCell>
              <TableCell align="right">
                <Link href={`/users/${user.id}/update`}>
                  <IconButton aria-label="edit" color="primary">
                    <EditIcon />
                  </IconButton>
                </Link>
                <Link href={`/users/${user.id}/delete`}>
                  <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}