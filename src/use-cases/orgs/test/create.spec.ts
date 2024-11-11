import {expect,describe,it,beforeEach} from "vitest"
import { CreateOrgUseCase } from "../create.use-case"
import {InMemoryOrgRepository} from "../../../repositories/in-memory/in-memory-org-repository"

let orgRepository: InMemoryOrgRepository
let sut: CreateOrgUseCase

import { OrgRole } from "../create.use-case"
import { EstadoBrasil } from "../create.use-case"

describe('Create Org Use Case', () => {
    beforeEach(() => {
        orgRepository = new InMemoryOrgRepository()
        sut = new CreateOrgUseCase(orgRepository)
    })

    it('Should be able to create an org', async () => {
        
        
        const {org} = await sut.execute({
            name: 'org1',
            email: 'org1@org1',
            password: '123456',
            tel: '123456789',
            role: OrgRole.USER,
            endereco: {
                rua: 'rua1',
                numero: 1,
                complemento: 'complemento1',
                bairro: 'bairro1',
                cidade: 'cidade1',
                estado: EstadoBrasil.AC,
                cep: 123456
            }
        })

        expect(org.id).toEqual(expect.any(String))
    })

})

