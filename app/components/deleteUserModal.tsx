import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface UserInfoDialogParams {
    openDelete: boolean,
    handleCloseDelete(): void,
    confirmDeleteUser(): void,
}

const DeleteDialogs = (params :UserInfoDialogParams) => {
  const { openDelete, handleCloseDelete, confirmDeleteUser } = params

  return (
    <>
      <BootstrapDialog
        onClose={handleCloseDelete}
        aria-labelledby="customized-dialog-title"
        open={openDelete}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Delete user
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseDelete}
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
            Are you sure want to delete this user?
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={confirmDeleteUser}>
            confirmar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default DeleteDialogs;
