import {Key} from "react";

type Expenses =
    {
        id: Key;
        title: string;
        amount: number;
        date: Date;
    }

export default Expenses