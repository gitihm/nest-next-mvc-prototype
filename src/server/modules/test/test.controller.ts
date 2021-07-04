import { Controller, Get, Res, Req, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/api')
export class TestController {
  @Get('/test')
  static(@Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json({ message: 'OK' });
  }
}
