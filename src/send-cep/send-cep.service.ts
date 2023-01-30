import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class SendCepService {
  constructor(private httpService: HttpService) {}

  http: string = process.env.CPE_BASE_URL;
  async getCep(cpe: string): Promise<Cpe.CpeResponse> {
    const { data } = await lastValueFrom<{ data: Cpe.CpeResponse }>(
      this.httpService.get(`${this.http}/${cpe}/json`).pipe(
        catchError((error: AxiosError) => {
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );
    console.log(data);
    return data;
  }
}
