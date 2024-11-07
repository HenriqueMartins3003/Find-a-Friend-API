import {orgsRepository} from "@/repositories/org-repository";

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
        
        
           // this.orgsRepository.create({name,email,password,tel,role,endereco})

           /*
            const hashedPassword = await bcrypt.hash(password, 6)

      const userAllreadyExists = await prisma.org.findUnique({
        where: {
          email: email,
        },
      })
  
      if (userAllreadyExists) {
       throw new Error("User allready exists")
      }

*/ 
    }
    

}