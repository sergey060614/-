import Validator from "../app";

const validator = new Validator();

const usernameTestCases = [
  ["Валидное имя с буквами, цифрами, _ и -", "a123_adc-b", true],

  ["Число в начале строки", "1abc", false],
  ["Число в конце строки", "abc1", false],
  ["_ в начале строки", "_abc", false],
  ["_ в конце строки", "abc_", false],
  ["- в начале строки", "-abc", false],
  ["- в конце строки", "abc-", false],
  ["Четыре цифры в строке", "a1234c", false],
  ["Недопустимый символ !", "a134jk!jc", false],
  ["Недопустимый символ кириллицы", "a12ц34c", false]
];

test.each(usernameTestCases)(
  '%s: для имени "%s" результат должен быть %s',
  (description, name, expectedResult) => {
    const validateNameStatus = validator.validateUsername(name);
    expect(validateNameStatus).toBe(expectedResult);
  }
);
