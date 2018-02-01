export const login = (username, password) => ({
    type: 'LOGIN',
    user: {
        username,
        password
    }
});

export const logout = () => ({
    type: 'LOGOUT'
});
