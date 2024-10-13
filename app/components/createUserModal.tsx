import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CreateUser from "./createUser";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface User {
    id: string,
    name: string,
    lastName: string,
    rut: string,
    address: string,
    edit: boolean,
}

interface UserInfoDialogParams {
    open: boolean,
    handleClose(): void,
    user: User,
    setUser(user: User): void,
    createNewUser(): void,
}

const CustomizedDialogs = (params :UserInfoDialogParams) => {
  const { user, setUser, open, handleClose, createNewUser } = params

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {
            (user.edit) ? 
            "Edit User"
            : "Insert User"
          }
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <CreateUser
            user={user}
            setUser={setUser} 
            createNewUser={createNewUser} 
        />
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

export default CustomizedDialogs;
