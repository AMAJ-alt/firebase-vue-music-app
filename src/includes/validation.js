import {
  Form as veeForm,
  Field as veeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  numeric,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('veeForm', veeForm);
    app.component('veeField', veeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('numeric', numeric);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const msg = {
          required: ` ${ctx.field} is required. `,
          min: ` ${ctx.field} is too short . `,
          max: ` ${ctx.field} is too big . `,
          alpha_spaces: ` ${ctx.field} might contain sapce or alpha . `,
          email: ` ${ctx.field} must be an email . `,
          min_value: ` ${ctx.field} is too low . `,
          max_value: ` ${ctx.field} is too high . `,
          excluded: ` ${ctx.field} cant use this value . `,
          confirmed: 'the password dont match . ',
        };
        const message = msg[ctx.rule.name]
          ? msg[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
