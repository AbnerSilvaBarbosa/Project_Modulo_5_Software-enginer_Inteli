import { Box, Grid, Typography } from "@mui/material";
import { Container, } from "@mui/system";
import { DashboardHeader } from "../../components/dashboardHeader";
import { ContainerLeading } from "../../components/DashboardContainerLeading";
import { ContainerMyProjects } from "../../components/DashboardContainerMyProjects";
import { ContainerRecent } from "../../components/DashboardContainerRecent";
import { ContainerSaved } from "../../components/DashboardContainerSaved";
import { useState, useEffect } from "react"




export function Dashboard() {

    // const [dataProject , setDataProject] = useState([])
    // const [myProjects,setMyProjects] = useState([])

    // const { id } = JSON.parse(sessionStorage.getItem("user"))

    // async function reqProjectbyManager() {

    //     await api.get(`/projectsowner/${idManager}`).then((item) => {
    //         const filter = item.data.filter(item => item.isApproved === true)
    //         setDataProject(filter)
    //     }).catch((e) => {
    //         alert(e)
    //     })

    // }

    // useEffect(() => {
    //     reqProjectbyManager()
    // }, [])

    return (
        <Container >

            <Grid container spacing={2} sx={{ marginLeft: "7%" }}>

                <Box sx={{ marginLeft: "4%", padding: 2 }}>
                    <DashboardHeader />
                </Box>


                <Box sx={{ display: "flex", marginLeft: 8, marginTop: 1, justifyContent: "center", gap: 7 }}>

                    <Grid item lg={6} >
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2">
                                    My Projects
                                </Typography>

                            </Box>
                            <ContainerMyProjects />
                        </Container>

                    </Grid>

                    <Grid item lg={6}>
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2">
                                    Saved Projects
                                </Typography>
                            </Box>
                            <ContainerSaved />
                        </Container>
                    </Grid>

                </Box>



                <Box sx={{ display: "flex", marginLeft: 8, marginTop: 8, justifyContent: "center", gap: 7 }}>

                    <Grid item lg={6} >
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2" sx={{}}>
                                    Recent Applications
                                </Typography>
                            </Box>
                            <ContainerRecent />
                        </Container>

                    </Grid>

                    <Grid item lg={6}>
                        <Container>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 1.2 }}>

                                <Typography variant="title2">
                                    Leading
                                </Typography>
                            </Box>
                            <ContainerLeading />
                        </Container>
                    </Grid>

                </Box>

            </Grid>
        </Container>




    );
}