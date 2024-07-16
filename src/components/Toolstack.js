import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import {
    SiAmazonaws,
    SiMacos,
    SiOracle,
    SiPycharm, SiRender,
    SiUbuntu, SiVercel,
    SiVisualstudiocode,
    SiWebstorm,
    SiWindows10
} from "react-icons/si";


const tools = [
    {icon: <SiUbuntu/>, name: 'Ubutu'},
    {icon: <SiWindows10/>, name: 'Windows'},
    {icon: <SiMacos/>, name: 'MacOS'},
    {icon: <SiVisualstudiocode/>, name: 'Visual Studio Code'},
    {icon: <SiPycharm/>, name: 'PyCharm'},
    {icon: <SiWebstorm/>, name: 'WebStorm'},
    {icon: <SiOracle/>, name: 'OCI'},
    {icon: <SiAmazonaws/>, name: 'AWS'},
    {icon: <SiRender/>, name: 'Render'},
    {icon: <SiVercel/>, name: 'Vercel'},
];

const Toolstack = () => (
    <Container>
        <Typography variant="h4" align="center" gutterBottom>
            <Box component="span" sx={{color: 'primary.main'}}>Tools</Box> I Use
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop='1rem'>
            {tools.map((tool, index) => (
                <Grid item xs={4} md={2} key={index} sx={{textAlign: 'center'}}>
                    <Box sx={{fontSize: 40 }}>{tool.icon}</Box>
                    <Typography variant="subtitle1">{tool.name}</Typography>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default Toolstack;