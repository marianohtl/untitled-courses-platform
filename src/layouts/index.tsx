import Header from "./header";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode | ReactNode[]
}

export default function Layout({ children } : Props)
{
    return (
        <>
            <Header />
            {children}
        </>
    );
}