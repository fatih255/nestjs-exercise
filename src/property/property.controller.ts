import { Controller, Request, Post, Req, UploadedFile, UseInterceptors, Body, Get } from '@nestjs/common';
import { PropertyDto } from './dto/property.dto';
import { PropertyService } from './property.service';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path'
import { propertyTypeDto } from './dto/propertyType.dto';
import { PropertyType } from './entities/propertyType.entity';


@Controller('properties')
export class PropertyController {

    constructor(private propertyService: PropertyService) { }


    //create property
    @Post('/')
    @UseInterceptors(FileInterceptor('thumbnail_image', {
        storage: diskStorage({
            destination: 'public/uploads',
            filename: (req, file, cb) => {
                req.body
                // Generating a 32 random chars long string
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${extname(file.originalname)}`)
            },
        })
    }))
    create(@UploadedFile() file: Express.Multer.File, @Request() req: Request) {
        const data = { ...req.body } as PropertyDto
        return this.propertyService.create({
            purpose: data.purpose,
            type_id: Number(data.type_id),
            price: data.price,
            address: data.address,
            bathroom_size: Number(data.bathroom_size),
            bedroom_size: Number(data.bedroom_size),
            square_meters: Number(data.square_meters),
            thumbnail_image: `${process.env.SERVER_BASE_URL}/uploads/${file.filename}`
        })
    }

    @Get("/")
    all() {
        return this.propertyService.getAll();
    }

    //create property type
    @Post('/types')
    createPropertyType(@Body() data: propertyTypeDto): Promise<propertyTypeDto> {
        return this.propertyService.createType(data)
    }
    //get all property types
    @Get('/types')
    allTypes() {
        return this.propertyService.getAllTypes();
    }


}
