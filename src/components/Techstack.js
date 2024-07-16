import {DiGit, DiJavascript1, DiPython, DiReact} from "react-icons/di";
import {SiCss3, SiDjango, SiHtml5, SiPostgresql, SiSqlite, SiTelegram} from "react-icons/si";
import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";

const techs = [
    {icon: <DiJavascript1/>, name: 'JavaScript'},
    {icon: <DiPython/>, name: 'Python'},
    {icon: <SiTelegram/>, name: 'Aiogram'},
    {icon: <DiReact/>, name: 'React'},
    {icon: <SiDjango/>, name: 'Django'},
    {icon: <DiGit/>, name: 'Git'},
    {icon: <SiPostgresql/>, name: 'PostgreSQL'},
    {icon: <SiSqlite/>, name: 'SQLite'},
    {icon: <SiHtml5/>, name: 'HTML5'},
    {icon: <SiCss3/>, name: 'CSS3'},
];


const Techstack = () => (
    <Container>
        <Typography variant="h4" align="center" gutterBottom>
            <Box component="span" sx={{color: 'primary.main'}}>Technologies</Box> I Know
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop='1rem'>
            {techs.map((tech, index) => (
                <Grid item xs={4} md={2} key={index} sx={{textAlign: 'center'}}>
                    <Box sx={{fontSize: 40}}>{tech.icon}</Box>
                    <Typography variant="subtitle1">{tech.name}</Typography>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default Techstack;