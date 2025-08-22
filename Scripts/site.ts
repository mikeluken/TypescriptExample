import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', (event) => {
    const btnLaunchModal = document.getElementById('btnLaunchModal');
    if (btnLaunchModal) {
        btnLaunchModal.addEventListener('click', async (event) => {
            launchModal();
        });
    }
});

function launchModal() {
    let myModalElement = document.getElementById('myModal');
    if (myModalElement) {
        let modal = new bootstrap.Modal(myModalElement);
        modal.show();
    }
}