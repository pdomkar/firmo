export const  VALIDATION_MESSAGE = {
    'email': {
        'required':      'Vyplňte prosím email.',
        'minlength':     'Email by mělo mít alespoň 5 znaky.',
        'maxlength':     'Email by mělo mít maximálně 50 znaky.',
        'pattern':        'Vyplňte prosím validní email.'
    },
    'password': {
        'required':      'Vyplňte prosím heslo.',
        'minlength':     'Heslo by mělo mít alespoň 5 znaky.'
    },
    'passwordConfirm': {
        'minlength':     'Heslo pro potvrzení by mělo mít alespoň 5 znaky.',
        'required':      'Vyplňte prosím heslo pro potvrzení.',
        'validateEqual': 'Heslo pro potvrzení se neshoduje s heslem.'
    }
};
