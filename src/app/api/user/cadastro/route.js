
import { cadastro } from '@/services/user'
import { NextResponse } from 'next/server'

export const POST = async (req, res)=>{

            const newUser = cadastro(req.body)
            
            NextResponse.json( newUser, {status: 201})
    
  
           
           
      
}