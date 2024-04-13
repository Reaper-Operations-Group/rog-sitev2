"use client"
import { Avatar, Button, Container, Modal } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import EditPlayerModal from "./EditPlayerModal";

export default function AdminPage(props: Readonly<{
    users: UserWithRoles[],
    deleteUser: (id: string) => Promise<void>
}>) {
    const [selectedUser, setSelectedUser] = useState<UserWithRoles | null>(null);
    const [open, setOpen] = useState(false);
    const handleOpen = (user: UserWithRoles) => {
        setSelectedUser(user);
        if (selectedUser) {
            setOpen(true);
        }
    }
    const handleClose = () => setOpen(false);


    //@ts-ignore
    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'avatar', headerName: '', width: 50, sortable: false, filterable: false, renderCell: (params) => <Avatar src={params.value} alt="avatar" /> },
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Username', width: 200 },
        { field: 'roles', headerName: 'Roles', width: 400 },
        { field: 'edit', headerName: '', width: 85, sortable: false, filterable: false, renderCell: (params) => <Button onClick={() => handleOpen(params.value)}>Edit</Button> }
    ];

    const rows = []
    for (const user of props.users) {
        rows.push({
            avatar: user.image,
            id: user.id,
            name: user.name,
            roles: user.roles.map((role) => role.role.name).join(" | "),
            edit: user
        })
    }

    return (
        <Container>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Edit User Modal"
                aria-describedby="Edit User Modal"
            >
                <EditPlayerModal user={selectedUser} deleteUser={props.deleteUser} closeModal={handleClose}/>
            </Modal>
        </Container>
    )
}