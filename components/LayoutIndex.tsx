import {PropsWithChildren} from "react";
import HeaderIndex from "./IndexComponents/HeaderIndex";
import Footer from "./Footer";
import {useEffect} from "react";
import TransactionToastProvider from '../providers/TransactionToastProvider'
import StackProvider from '../providers/StacksProvider'

export default function LayoutIndex({children}: PropsWithChildren<{}>) {

    useEffect(() => {

    }, [])

    return (
        <StackProvider>
            <TransactionToastProvider>
                <HeaderIndex></HeaderIndex>
                {children}
                <Footer/>
            </TransactionToastProvider>
        </StackProvider>
    )
}
