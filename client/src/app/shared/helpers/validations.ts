const validation_messages =  [
    { type: 'required', message: 'مطلوب' },
    { type: 'minlength', message: 'Username must be at least 5 characters long' },
    { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    { type: 'pattern', message: 'Your username must contain only numbers and letters' },
    { type: 'validUsername', message: 'Your username has already been taken' },
    { type: 'areEqual', message: 'Password mismatch' },
  ]
export {validation_messages}
