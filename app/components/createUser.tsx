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

  const formatRut = (value: string): string => {
    const cleanedValue = value.replace(/[^0-9kK]/g, '').toUpperCase();

    if (cleanedValue.length === 0) return cleanedValue;
    const rutNumbers = cleanedValue.slice(0, -1);
    const dv = cleanedValue.slice(-1);

    let formattedRut = '';
    for (let i = rutNumbers.length - 1, j = 1; i >= 0; i--, j++) {
      formattedRut = rutNumbers[i] + formattedRut;
      if (j % 3 === 0 && i !== 0) {
        formattedRut = '.' + formattedRut;
      }
    }

    return `${formattedRut}-${dv}`;
  }

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
          onChange={(e) => setUser({ ...user, rut: formatRut(e.target.value) })}
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