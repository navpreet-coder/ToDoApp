import { ReactElement } from "react";

const BackgroundWrapper = ({ children }: { children: ReactElement }) => {
    return <div className="bg-gray-100 flex h-screen px-4 items-center justify-center">
        {children}
    </div>
}

export default BackgroundWrapper;