import { Controller, Get, Body, Param, Put, Post, HttpCode, Query } from '@nestjs/common';
import { GaresService } from '../gares.service';
import { Gare } from './Gare';
import { SimpleGare } from './SimpleGare';
import { GareDto } from './Gare.dto';

@Controller('gares')
export class GaresController {
  constructor(private readonly garesService: GaresService) {}


  @Get()
  findAll(): SimpleGare[] {
    return this.garesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.garesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return this.garesService.update(+id);
  }

  @Post('search')
  @HttpCode(200)
  public searchByAuthorAndTitle(
    @Body() query: { term: string },
  ): Gare[] {
    return this.garesService.searchByAuthorAndTitle(query.term);
  }

}
