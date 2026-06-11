import { Validator } from './js/app';

const userInput = prompt('Введите никнейм:');
if (Validator.validateUsername(userInput)) {
    console.log('Никнейм принят!');
} else {
    console.error('Некорректный никнейм.');
}