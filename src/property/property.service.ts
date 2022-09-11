import { Inject, Injectable } from '@nestjs/common';
import { PropertyDto } from './dto/property.dto';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { propertyTypeDto } from './dto/propertyType.dto';
import { PropertyType } from './entities/propertyType.entity';



@Injectable()
export class PropertyService {

    constructor(
        @Inject('PROPERTY_REPOSITORY')
        private propertyRepository: Repository<Property>,
        @Inject('PROPERTY_TYPE_REPOSITORY')
        private propertyTypeRepository: Repository<PropertyType>) { }


    //create property
    async create(data: PropertyDto): Promise<Property> {
        const newProperty = this.propertyRepository.save({ ...data })

        return {
            ok: true,
            message: 'Property created Successfully',
            ...newProperty
        }
    }
    async getAll(): Promise<{ ok: boolean, message: string, properties: Property[] }> {
        const properties = await this.propertyRepository.find();
        console.log(properties)
        return {
            ok: true,
            message: "Properties Found",
            properties: [...properties]
        }
    }

    //create property type
    async createType(data: propertyTypeDto): Promise<propertyTypeDto> {
        const newPropertyType = this.propertyTypeRepository.save({ ...data })

        return {
            ok: true,
            message: 'Property Type created Successfully',
            ...newPropertyType
        }
    }

    async getAllTypes(): Promise<{ ok: boolean, message: string, types: PropertyType[] }> {
        const types = await this.propertyTypeRepository.find();

        return {
            ok: true,
            message: 'Property Types List',
            types: [...types]
        }
    }
}
