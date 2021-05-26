import { useEffect, useRef } from "react";

export function usePrevious(value) {
	const ref = useRef(value);

	useEffect(() => {
		ref.current = value;
	});

	return ref.current;
}

export function useClickAway(callback, dependencies = []) {
    useEffect(() => {
        try {
            if ("addEventListener" in window.document) {
                window.document.addEventListener("mousedown", callback);

                return () => window.document.removeEventListener("mousedown", callback);
            }
        } catch (e) {
            console.log(e);
        }
    }, dependencies);
}
