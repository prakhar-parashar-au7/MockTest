

export const registerAction = {
    create: (userDetails) => {
        console.log(userDetails)
        return { type:'RegisterUser', payload:userDetails }
    },
    
}

export default registerAction