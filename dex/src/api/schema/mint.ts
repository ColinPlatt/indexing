import Decimal from "decimal.js";
import { Field, ID, ObjectType } from "type-graphql";
import { DecimalScalar } from "./decimalScalar";
import { Pair } from "./pair";
import { Transaction } from "./transaction";

@ObjectType()
export class Mint {
  @Field((type) => ID)
  id: string;

  @Field((type) => Transaction)
  transaction: Transaction; // todo: Ref conversion

  @Field((type) => DecimalScalar)
  timestamp: Decimal;

  @Field((type) => Pair)
  pair: Pair; // todo: Ref conversion

  @Field((type) => DecimalScalar)
  liquidity: Decimal;

  @Field((type) => DecimalScalar)
  amount0: Decimal;

  @Field((type) => DecimalScalar)
  amount1: Decimal;

  @Field((type) => DecimalScalar)
  logIndex: Decimal;

  @Field((type) => DecimalScalar)
  amountUSD: Decimal;

  @Field((type) => DecimalScalar)
  feeLiquidity: Decimal;

  // todo: to, sender, feeTo - Bytes
  @Field((type) => String)
  to: string;

  @Field((type) => String)
  sender: string;

  @Field((type) => String)
  feeTo: string;

  // async getPair(id: string): Promise<Pair> {
  //   const pair = await PairModel.find({ id: id });
  //   return pair[0].toGenerated();
  // }
}