import { hideErrorMessage } from './errors';

export function formSubmitted(result: unknown): void {
    hideErrorMessage();
}

export function formSubmitting(): void {
    console.log("hitting form submitting");
}