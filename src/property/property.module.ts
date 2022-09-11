import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { propertyProviders } from './property.providers';

@Module({
    providers: [...propertyProviders, PropertyService],
    controllers: [PropertyController],
})
export class PropertyModule { }
