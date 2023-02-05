import {Key} from "react";

interface IExpenses
    {
        id: Key;
        title: string;
        amount: number;
        date: Date;
    }

export default IExpenses