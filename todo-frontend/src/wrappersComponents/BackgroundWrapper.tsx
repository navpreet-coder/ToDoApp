import { ReactElement } from "react";

const BackgroundWrapper = ({ children }: { children: ReactElement }) => {
    return <div className="bg-gray-300 flex h-screen items-center justify-center">
        {children}
    </div>
}

export default BackgroundWrapper;