function anotherFunction <T, U extends number>(valOne: T, valTwo: U): object{
    return {
        valOne, valTwo
    }
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunctionTwo<T, U extends Database>(valueOneL: T, ): T {
    console.log("Database connected");
    return db;
}

anotherFunction(2, "2"); // Not allowed
anotherFunction(2, 3.4); // Allowed