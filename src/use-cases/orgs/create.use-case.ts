import {orgsRepository} from "@/repositories/org-repository";
import { hash } from "bcrypt";

export enum OrgRole {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export enum EstadoBrasil {
    AC = 'AC',
    AL = 'AL',
    AP = 'AP',
    AM = 'AM',
    BA = 'BA',
    CE = 'CE',
    DF = 'DF',
    ES = 'ES',
    GO = 'GO',
    MA = 'MA',
    MT = 'MT',
    MS = 'MS',
    MG = 'MG',
    PA = 'PA',
    PB = 'PB',
    PR = 'PR',
    SP = 'SP',
    PE = 'PE',
    PI = 'PI',
    RJ = 'RJ',
    RN = 'RN',                            
    RS = 'RS',
    RO = 'RO'
}
 interface CreateOrgUseCaseRequest {
    name: string
    email: string
    password: string
    endereco : {
        rua: string
        numero: number
        complemento: string
        cep: number
        bairro: string
        cidade: string
        estado: EstadoBrasil
    }
    tel: string
    role: OrgRole
    
}

export class CreateOrgUseCase {
        constructor(private orgsRepository: orgsRepository) {
            
    }
    async execute({
        name,
        email,  
        password,   
        tel,
        role,
        endereco,
    }: CreateOrgUseCaseRequest){
      
        const hashedPassword = await hash(password, 6)

        const userAllreadyExists = await this.orgsRepository.findUnique(email)
          
    
        if (userAllreadyExists) {
         throw new Error("User allready exists")
        }
        
    
        const org =await this.orgsRepository.create({
             name,
             email,
             password_hash: hashedPassword,
             tel,
             role,
             endereco: {
                create: {
                    rua: endereco.rua,
                    numero: endereco.numero,
                    complemento: endereco.complemento,
                    cep: endereco.cep,
                    bairro: endereco.bairro,
                    cidade: endereco.cidade,
                    estado: endereco.estado
                },
            }
        })

        return { org} 
    }
    
}