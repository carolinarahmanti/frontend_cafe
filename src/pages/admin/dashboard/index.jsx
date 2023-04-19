// import library yang dibutuhkan
import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import HeadingDashboard from "../../../components/text/HeadingDashboard";
import Container from "../../../components/container/Container";
import { getLocalStorage } from "../../../utils/helper/localStorage";
import { LOCAL_STORAGE_USER } from "../../../utils/constants";

export default function index(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getLocalStorage(LOCAL_STORAGE_USER);
        setUser(user);
    }, []);

    return (
        <Container>
            {/* tampilkan heading, text, dan user dari komponen yang sudah diimport */}
            <Box
                textAlign={"center"}
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                gap={5}
                w={"full"}
                position={"absolute"}
                top={"50%"}
                left={"50%"}
                transform={"translate(-50%, -50%)"}
            >
                {/* tampilkan heading dan text dari komponen yang sudah diimport */}
                <HeadingDashboard text="Welcome to Admin Dashboard" />
                <Text fontWeight={500} fontSize={"xl"}>
                    {/* tampilkan user dari state user */}
                    You login for : {user?.nama_user}
                </Text>
            </Box>
        </Container>
    );
}