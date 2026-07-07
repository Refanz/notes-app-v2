import Swal from "sweetalert2";

async function showDeleteNoteAlert() {

    const {value: isDelete} = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    })

    return isDelete || false;
}

function showDeletedNoteAlert() {
    Swal.fire({
        title: "Deleted!",
        text: "Your note has been deleted.",
        icon: "success"
    });
}

export {
    showDeleteNoteAlert,
    showDeletedNoteAlert
}