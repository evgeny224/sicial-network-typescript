


export const objectHelper = (state, userId, object) => {
    return state.map(users => {
        if(users.id === userId){
            return{
                ...users, followed: object
            }
        }
        return users
    })
}