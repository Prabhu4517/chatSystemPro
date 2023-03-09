export const basicUrl = '/';

export const auth = 'auth';
export const login = 'login';
export const register = 'register';
export const resetPassword = 'password-reset';
export const resetPasswordConfirm= 'password/reset/confirm/:uid/:token';
export const dashboard = 'dashboard';


export const auth_path = `${basicUrl}${auth}`;
export const login_path = `${auth_path}/${login}`;
export const register_path = `${auth_path}/${register}`;
export const resetPassword_path = `${auth_path}/${resetPassword}`;
export const resetPasswordConfirm_path = `${auth_path}/${resetPasswordConfirm}`;

export const dashboard_path = `${basicUrl}${dashboard}`;

