import { hideErrorMessage } from './errors.js';

export function formSubmitted(result: unknown): void {
    hideErrorMessage();
}

function formSubmitting(): void {
    console.log("form submitting...");

    let button = document.getElementById('btnSubmit') as HTMLButtonElement;
    button.disabled = true;
}

window.addEventListener('pagehide', () => {
    const form = document.getElementById("f1") as HTMLFormElement;
    if (form) {
        console.log("removing submit event listener");
        form.removeEventListener('submit', async (event) => { });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById("f1") as HTMLFormElement;

    if (form) {

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            formSubmitting();
            hideErrorMessage();

            if (form.checkValidity()) {
                const formData = new FormData(form as HTMLFormElement);

                const response = await fetch('/index', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    const resultData = await response.json();
                    console.log(resultData);
                } else {
                    const errorData = await response.json();
                    console.error('Form submission failed:', errorData);
                }
            } else {
                let button = document.getElementById('btnSubmit') as HTMLButtonElement;
                button.disabled = false;
            }
        });
    }
});

