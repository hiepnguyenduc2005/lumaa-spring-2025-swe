const task = { flexGrow: 1, fontFamily: 'Dosis', fontSize: 18 };

const button = { 
    fontFamily: 'Dosis',
    textTransform: 'none',
    textDecoration: 'none',
    backgroundColor: "white", 
    color: "#9c27b0", 
    borderRadius: "10px", 
    padding: "10px",
    '&:hover': {
        color: "white",
        backgroundColor: "#ff6f61",  
    },
};

export { task, button };