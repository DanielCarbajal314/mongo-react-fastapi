import { PropsWithChildren } from "react";
import { Spin } from "antd";

export function Loader({children, isLoading}:PropsWithChildren<{isLoading:boolean}>){
    return <div className="w-100 h-100">
        { isLoading ? <Spin className="pt-5"/> : children }
    </div>
}