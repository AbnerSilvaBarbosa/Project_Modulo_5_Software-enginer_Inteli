import { Container } from "@mui/system";
import { Landing } from "../../components/landing";
import { NavbarHome } from "../../components/navbarHome";
import Image from "mui-image"

export function Home() {

    sessionStorage.clear("token")
    sessionStorage.clear("user")

    return (
        <div>
            <NavbarHome />

            <Container sx={{ height: 750, marginTop: 5, display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
                <Landing />

                <Image style={{ borderRadius: 10 }} src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"

                    height="80%"
                    width="134%"
                    shift="right"
                    shiftDuration={1700}
                    distance="100px"
                />

            </Container>
        </div>
    )
}