import toast from "react-hot-toast";

function showToast({message, type, position = "top-right"}) {
    if (type === 'success') {
        toast.success(message, {
            position: position,
        });

        return;
    }

    if (type === 'error') {
        toast.error(message, {
            position: position,
        });
    }
}

export default showToast;