import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} |  BdAE - Bangladesh Apparel Expo `;
    }, [title])
};

export default useTitle;