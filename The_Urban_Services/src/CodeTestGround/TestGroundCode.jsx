import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { toast } from "react-hot-toast";
import { Navbar } from "../Layout/Navbar";

export const TestGroundCode = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
    ]);

    const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });

    const addUser = () => {
        if (!newUser.name || !newUser.email) {
            toast.error("Please fill all fields");
            return;
        }
        setUsers([...users, { id: users.length + 1, ...newUser, status: "Active" }]);
        setNewUser({ name: "", email: "", role: "User" });
        toast.success("User added successfully");
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
        toast.error("User deleted");
    };

    const toggleStatus = (id) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user)));
        toast.success("User status updated");
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Admin User Management</h2>
            <Navbar />
            <Card className="p-4 max-w-md mx-auto mb-6">
                <CardContent>
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        className="mb-2"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        className="mb-2"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={addUser}>
                        Add User
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                        <TableCell>{user.status}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                className="mr-2"
                                                onClick={() => toggleStatus(user.id)}
                                            >
                                                {user.status === "Active" ? "Deactivate" : "Activate"}
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => deleteUser(user.id)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </div>
    );
};
