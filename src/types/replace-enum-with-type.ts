type LoginMode = 'device' | 'email' | 'social';
enum LoginModeEnum  {
  device  = 'device',
  email = 'email',
  social = 'social'
}

function initateLogin(loginMode: LoginMode) {
  // ...
}

function initateLoginEnum(loginMode: LoginModeEnum) {
  // ...
}

initateLoginEnum(LoginModeEnum.device)
initateLogin('device')
// initateLoginEnum('device') 
// 1. Error, must be import
// 2. Need to declare a value to avoid break down system if anyone adding a new enum no in order
// @link refer: https://dev.to/dvddpl/whats-the-problem-with-typescript-enums-2okj