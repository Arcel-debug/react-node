import React from "react";

const useHandleForm = (item, onSave) => {
    const [validated, setValidated] = React.useState(false);

    const onFinishAll = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.target;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());
        setValidated(true);
        let submitValues = {
            id: item?.id,
            ...formDataObject,
        };

        onSave(submitValues);
    };

    return {
        validated,
        onFinishAll,
    };
};

export default useHandleForm;
