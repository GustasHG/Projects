import jwt from 'jsonwebtoken'

let users = []

const SECRET = process.env.JWT_SECRET
function creatToken(user) {
    return jwt.sign({email: user.email, name: user.name})
}
function readtoken(token){
    try{
        return jwt.verify(token,SECRET)
    } catch(err){
        throw new Error('Token invalido')

    }
}

    export function cadastro(body){
        const user = users.find(( {email}) => email === body.email)
        if(user) throw new Error('Usuario já cadastrado')
        users.push(body)
    const token = creatToken(body)

        return token 
   
    }

    export function login (body) {
        const user = users.find(( {email}) => email === body.email)
        if (!user) throw new Error('Usuario não cadastrado')
        if (user.password !== body.password) throw new Error('Senha incorreta')
        return user 

    }
