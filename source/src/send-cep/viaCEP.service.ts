import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class ViaCEPService {
  constructor(private httpService: HttpService) {}

  private readonly logger = new Logger(ViaCEPService.name)
  http: string = process.env.CPE_BASE_URL;

  async getCep(cpe: string): Promise<Cep.CepResponse> {
    const { data } = await lastValueFrom<{ data: Cep.CepResponse }>(
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
