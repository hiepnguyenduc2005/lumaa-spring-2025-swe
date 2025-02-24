export const cardS = (iscomplete:boolean) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 5,
        borderRadius: 3,
        fontFamily: 'Dosis',
        transition: 'transform 0.3s, background-color 0.3s',
        backgroundColor: iscomplete ? '#d4f8d4' : '#fff',
        '&:hover': { transform: 'scale(1.05)' }
    }
};

export const card_typo = (iscomplete:boolean) => {
    return {
        mb: 1, 
        fontWeight: 'bold', 
        textDecoration: iscomplete ? 'line-through' : 'none',
        color: iscomplete ? 'gray' : 'black',
        fontFamily: 'Dosis',
    }
};

export const card_des = (iscomplete:boolean) => {
    return {
        mb: 2, 
        color: iscomplete ? 'gray' : 'black',
        textDecoration: iscomplete ? 'line-through' : 'none',
        fontFamily: 'Dosis',
    }
}

export const editS = (iscomplete:boolean) => {
    return {
        mr: 1, 
        borderRadius: '8px', 
        textTransform: 'none', 
        visibility: iscomplete ? 'hidden' : 'visible',
        fontFamily: 'Dosis',
    }
}

export const deleteS = (iscomplete:boolean) => {
    return {
        borderRadius: '8px', 
        textTransform: 'none', 
        visibility: iscomplete ? 'hidden' : 'visible',
        fontFamily: 'Dosis',
    }
}