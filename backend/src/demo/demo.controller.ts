import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('demo')
export class DemoController {

    @Get()
    Index(){
        return "Demo Index"
    }

    @Post()
    create(){
        return "Create"
    }

    @Post('demo/:id')
    byId(@Param('id') id: number){
        console.log("demo id is"+id)
        return "Demo = "+id;

    }
    
}
