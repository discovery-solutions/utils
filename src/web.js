export function hasParentClass(element, className) {
    try {
        do {
            if (element.classList && element.classList.contains(className))
                return true;

            element = element.parentNode;
        } while (element);

        return false;
    } catch(e) {
        console.log(e);
        return false;
    }
}

export function useMousePosition() {
    try {
        const [ mousePosition, setMousePosition ] = useState([null, null]);

        const updateMousePosition = e => setMousePosition([ e.clientX, e.clientY ]);

        useEffect(() => {
            window.addEventListener("mousemove", updateMousePosition);

            return () => window.removeEventListener("mousemove", updateMousePosition);
        }, []);

        return mousePosition;
    } catch (e) {
        return [undefined, undefined];
    }
}
