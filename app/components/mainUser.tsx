import ListUsers from "./listUsers";
import { createUser, getAllUsers, updateUser, deleteUser } from "../reducers/users.actions";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { allUsers, loadingAllUsers } from "../reducers/users.selectors";
import { User } from "../interfaces/user.interface";
import CustomizedDialogs from "./createUserModal";
import DeleteDialogs from "./deleteUserModal";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const MainUser = () => {
    const dispatch: AppDispatch = useDispatch();
    const allUsersCreated = useSelector(allUsers);
    const loadingUsers = useSelector(loadingAllUsers);
    const [ userList, setUserList ] = useState<User[]>([])
    const [ user, setUser ] = useState<User>({ id: '', name: '', lastName: '', rut:'', address:'', edit: false });

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setUser({id: '', name: '', lastName: '', rut:'', address:'', edit: false });
      setOpen(false);
    };

    const handleClickOpenDelete = () => {
        setOpenDelete(true);
      };
      const handleCloseDelete = () => {
        setUser({id: '', name: '', lastName: '', rut:'', address:'', edit: false });
        setOpenDelete(false);
      };

    useEffect(() => {
        dispatch(getAllUsers());

    }, [dispatch])

    const createNewUser = async  () => {
        if (user.name && user.lastName && user.rut && user.address) {
            if(!user.edit){
                handleClose();
                await dispatch(createUser(user));
                setUser({id: '', name: '', lastName: '', rut:'', address:'', edit: false });
               await  dispatch(getAllUsers());
            } else {
                handleClose(); 
               await dispatch(updateUser(user));
                setUser({id: '', name: '', lastName: '', rut:'', address:'', edit: false });
               await dispatch(getAllUsers());
            }

        } else {
            console.log("all fields are required");
        }
    };

    const confirmDeleteUser = async () => {
        if (user.id) {
            handleCloseDelete();
            await dispatch(deleteUser(user));
            setUser({id: '', name: '', lastName: '', rut:'', address:'', edit: false });
            await dispatch(getAllUsers());
        } else {
            console.log("all fields are required");
        }
    };

    const updateUserOn = (user: User) => {
        setUser({ ...user, edit: true });
        handleClickOpen();
    }

    const deleteUserOn = (user: User) => {
        setUser({ ...user, edit: true });
        handleClickOpenDelete();
    }

    return (
        <>
        <Button variant="outlined" onClick={handleClickOpen}>
        Create User +
      </Button>
      <CustomizedDialogs
        open={open}
        handleClose={handleClose}
        user={user}
        setUser={setUser} 
        createNewUser={createNewUser} 
      />
      <DeleteDialogs
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        confirmDeleteUser={confirmDeleteUser}
      />
     {
        (loadingUsers) ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress size={140} />
        </Box>
        ) : (
            <ListUsers
            allUsersCreated={allUsersCreated}
            updateUserOn={updateUserOn}
            deleteUserOn={deleteUserOn}
        />
        )
      }
        </>
    )
}

export default MainUser;