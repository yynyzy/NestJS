import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getCore(): string {
    return `
    <p style="color: red">Get Core</p>
    `;
  }

  getAllCores(): string {
    return `
    <p style="color: yellow">Get All Cores</p>
    `;
  }
}
