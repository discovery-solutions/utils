export function hasParentClass(element, className) {
    try {
        do {
            if (element.classList)
                console.log(element.classList);

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
