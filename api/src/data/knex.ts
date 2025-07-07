import knex, {Knex} from "knex";

export function knexConnectionOpen(connection: Knex.MySqlConnectionConfig,) {
    return knex({
        client: 'mysql2',
        connection,
    });
}
