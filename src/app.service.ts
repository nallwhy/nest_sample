import { Injectable } from '@nestjs/common';
import { render } from './template';

@Injectable()
export class AppService {
  getHello(): string {
    return render();
  }
}
