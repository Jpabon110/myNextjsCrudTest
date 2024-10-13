import { TextField, Box } from '@mui/material';
import Button from '@mui/material/Button';
import "../globals.css";

interface User {
    name: string,
    lastName: string,
    rut: string,
    address: string,
    edit: boolean,
}

interface UserParams {
    user: User,
    setUser(user: User): void,
    createNewUser(): void,
}

const CreateUser = ( params: UserParams  ) => {

    const { user, setUser, createNewUser } = params

    return (
        <>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          label="Name"
        />
        <TextField
          required
          id="outlined-required"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          label="Lastname"
        />
        <TextField
          required
          id="outlined-required"
          value={user.rut}
          onChange={(e) => setUser({ ...user, rut: e.target.value })}
          label="Rut"
        />
        <TextField
          required
          id="outlined-required"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          label="Address"
        />
      </div>
      <br />
      <div className='moveLeft'>
        <Button variant="outlined" onClick={()=> createNewUser()}>
          {
            (user.edit) ? 
              "save"
            : "insert"
          }
        </Button>
      </div>
    </Box>
        </>
    )

}

export default CreateUser;