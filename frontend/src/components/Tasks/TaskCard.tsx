import React from 'react';
import { card_des, card_typo, cardS, deleteS, editS } from './Style';
import { Button, Card, CardContent, Typography, IconButton, CircularProgress } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from '@mui/icons-material';

interface Task {
    id: number;
    title: string;
    description: string;
    iscomplete: boolean;
}

interface TaskProp {
    id: number;
    title: string;
    description: string;
    iscomplete: boolean;
    handleDeleteTask: (id: number) => void;
    handleToggleComplete: (id: number) => void;
    handleEditTask: (task: Task) => void;
    loading: boolean;
}

const TaskCard: React.FC<TaskProp> = ({
    id,
    title,
    description,
    iscomplete,
    handleEditTask,
    handleDeleteTask,
    handleToggleComplete,
    loading,
}) => {
    return (
        <Card sx={cardS(iscomplete)}>
            <CardContent>
                <Typography variant="h6" sx={card_typo(iscomplete)}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={card_des(iscomplete)}>
                    {description}
                </Typography>

                <div>
                    <Button
                        color="primary"
                        variant="outlined"
                        sx={editS(iscomplete)}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <EditIcon />}
                        onClick={() => handleEditTask({ id, title, description, iscomplete })}
                        disabled={loading}
                    >
                        {loading ? 'Editing...' : 'Edit'}
                    </Button>

                    <Button
                        color="error"
                        variant="outlined"
                        sx={deleteS(iscomplete)}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DeleteIcon />}
                        onClick={() => handleDeleteTask(id)}
                        disabled={loading}
                    >
                        {loading ? 'Deleting...' : 'Delete'}
                    </Button>

                    <IconButton
                        color={iscomplete ? 'secondary' : 'primary'}
                        onClick={() => handleToggleComplete(id)}
                        sx={{ ml: 1 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={20} color="inherit" /> : iscomplete ? <CancelIcon /> : <CheckCircleIcon />}
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
