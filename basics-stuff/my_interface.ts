interface User {
    email: string;
    userId: number;
    startTrail: () => string;
}

const adib: User = {
    email: "adib@adib.com",
    userId: 1,
    startTrail: () => {
        return "Trail started";
    }
};