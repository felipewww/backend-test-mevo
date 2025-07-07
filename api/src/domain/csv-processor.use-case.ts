import {CSVRow} from "@/domain/csv-reader.use-case";

/**
 * ### Validações
 * 1. **Valores Negativos**: Operações com valores negativos são consideradas inválidas.
 * 2. **Operações Duplicadas**: Uma operação é duplicada se existir outra operação no arquivo com os mesmos valores de `to`, `from`, e `amount`. Tais operações são consideradas inválidas.
 * 3. **Valores Suspeitos**: Operações com valores acima de R$50.000,00 são marcadas como suspeitas, mas ainda válidas para inclusão no banco de dados.
 * 4. Os Valores estão em centavos, desta forma 100 = R$1
 */
export class CsvProcessorUseCase {
    constructor(

    ) {

    }

    async handle(
        csvRows: CSVRow[],
    ) {
        const {
            errorNegative,
            errorSuspect,
            success,
        } = this.validateEntries(csvRows);

        this.validateDuplicated(success);;
    }

    private validateEntries(
        csvRows: CSVRow[],
    ) {
        const errorNegative: CSVRow[] = [];
        const errorSuspect: CSVRow[] = [];
        const success: CSVRow[] = [];

        for (const row of csvRows) {
            if (row.amount < 0) {
                errorNegative.push(row);
                continue;
            }

            if (row.amount > 5000000) {
                errorSuspect.push(row);
                continue;
            }

            success.push(row);
            // console.log(row.amount / 100);
        }

        return {
            errorNegative,
            errorSuspect,
            success,
        }
    }

    private validateDuplicated(
        csvRows: CSVRow[],
    ) {

    }
}

