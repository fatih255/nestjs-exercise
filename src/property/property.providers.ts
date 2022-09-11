import { DataSource } from 'typeorm';
import { Property } from './entities/property.entity';
import { PropertyType } from './entities/propertyType.entity';

export const propertyProviders = [
    {
        provide: 'PROPERTY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Property),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'PROPERTY_TYPE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PropertyType),
        inject: ['DATA_SOURCE'],
    }
];