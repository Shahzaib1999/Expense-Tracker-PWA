import { type } from "os";

export type transType = {
  id: number;
  description: string;
  amount: number;
};

export type transactionType = {
  transactions: transType[];
  balance: number;
};

export type addPayloadType = {
  transaction: transType;
  total: number;
};

export type deletePayloadType = {
  id: number;
  total: number;
};

export type actionType =
  | { type: "ADD_TRANSACTION"; payload: addPayloadType }
  | { type: "DELETE_TRANSACTION"; payload: deletePayloadType };
