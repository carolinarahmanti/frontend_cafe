// import library yang dibutuhkan
import React from "react";
import { Text } from "@chakra-ui/react";

// buat komponen TextPoppins
export default function TextPoppins({
    text,
    fontWeight,
    fontSize,
    marginBottom,
    marginTop,
    color,
}) {
    return (
        <Text
            fontFamily={"Poppins"}
            fontWeight={fontWeight}
            fontSize={fontSize}
            mb={marginBottom}
            mt={marginTop}
            color={color}
        >
            {/* {tampilkan text dari props} */}
            {text}
        </Text>
    );
}