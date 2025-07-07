import * as fs from "node:fs";
import { parse } from "csv-parse";

export type CSVRow = {
    from: string;
    to: string;
    amount: number;
}

export class CsvReaderUseCase {
    async handle(
        path: string,
        cols: string[],
    ): Promise<CSVRow[]> {
        return new Promise((resolve, reject) => {
            const csvData: CSVRow[] = [];

            fs.createReadStream(path)
                .pipe(parse({
                    delimiter: ';',
                    from: 2,
                }))
                .on('data', function(csvrow: string[]) {
                    csvData.push({
                        from: csvrow[0],
                        to: csvrow[1],
                        amount: parseFloat(csvrow[2])
                    });
                })
                .on('end',function() {
                    resolve(csvData)
                })
                .on('error', reject)
        })
    }
}
