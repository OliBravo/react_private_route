export const authHeader = user => ({
    "x-access-token": user.token
})