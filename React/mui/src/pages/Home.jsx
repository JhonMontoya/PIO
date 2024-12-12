import { Container, Typography } from "@mui/material";

function Home(){
    return(
        <Container>
            <Typography variant="h3" gutterBottom>
                Bienvenidos a la página principal
            </Typography>
            <Typography variant="body1">
                Aquí Encontrarás información de mi App en React
            </Typography>
        </Container>
    );
};

export default Home;