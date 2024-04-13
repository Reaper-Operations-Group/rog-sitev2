"use client"
import { Avatar, Box, Button, Typography } from "@mui/material"

export default function EditPlayerModal(props: Readonly<{
    user: UserWithRoles | null,
    deleteUser: (id: string) => Promise<void>,
    closeModal: () => void
}>) {
    return (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '0.5px solid #000',
            boxShadow: 24,
            p: 4,
        }}>
            <Avatar src={props.user?.image!} alt="Avatar" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.user?.name}
            </Typography>
            <Button variant="contained" color="error" onClick={()=>{
                props.deleteUser(props.user?.id!);
                props.closeModal();
            }}>DELETE</Button>
        </Box>
    )
}