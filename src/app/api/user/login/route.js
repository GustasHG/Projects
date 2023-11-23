import { login } from '@/services/user'
import { NextResponse } from 'next/server'

export const POST = async (req, res)=>{

            const user = login(req.body)          
            NextResponse.json(User, {status: 200}) 
            console.log('loguei')       
      
}