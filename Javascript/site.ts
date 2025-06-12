import { hideErrorMessage } from './errors';

export function formSubmitted(result: object): void {
    console.log("This gets hit");
    hideErrorMessage();
    console.log("This does not get hit");
}

export function formSubmitting(): void {
    console.log("hitting form submitting");
}