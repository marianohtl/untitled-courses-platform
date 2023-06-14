import Header from "./header";
import React, { ReactNode } from "react";
import Footer from "./footer";

type ILayoutProps = {
    children: ReactNode | ReactNode[]
}

export default function Layout({ children } : ILayoutProps)
{
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}