
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model document_title_lists
 * 
 */
export type document_title_lists = $Result.DefaultSelection<Prisma.$document_title_listsPayload>
/**
 * Model documents
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type documents = $Result.DefaultSelection<Prisma.$documentsPayload>
/**
 * Model ledger_land_logs
 * 
 */
export type ledger_land_logs = $Result.DefaultSelection<Prisma.$ledger_land_logsPayload>
/**
 * Model loan
 * 
 */
export type loan = $Result.DefaultSelection<Prisma.$loanPayload>
/**
 * Model loan_customer
 * 
 */
export type loan_customer = $Result.DefaultSelection<Prisma.$loan_customerPayload>
/**
 * Model loan_payment
 * 
 */
export type loan_payment = $Result.DefaultSelection<Prisma.$loan_paymentPayload>
/**
 * Model loan_running
 * 
 */
export type loan_running = $Result.DefaultSelection<Prisma.$loan_runningPayload>
/**
 * Model overdue_status
 * 
 */
export type overdue_status = $Result.DefaultSelection<Prisma.$overdue_statusPayload>
/**
 * Model picture_loan_other
 * 
 */
export type picture_loan_other = $Result.DefaultSelection<Prisma.$picture_loan_otherPayload>
/**
 * Model real_investment
 * 
 */
export type real_investment = $Result.DefaultSelection<Prisma.$real_investmentPayload>
/**
 * Model setting_land
 * 
 */
export type setting_land = $Result.DefaultSelection<Prisma.$setting_landPayload>
/**
 * Model setting_land_logs
 * 
 */
export type setting_land_logs = $Result.DefaultSelection<Prisma.$setting_land_logsPayload>
/**
 * Model setting_land_report
 * 
 */
export type setting_land_report = $Result.DefaultSelection<Prisma.$setting_land_reportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DocumentTitleListsDocType: {
  RECEIPT: 'RECEIPT',
  PAYMENT_VOUCHER: 'PAYMENT_VOUCHER'
};

export type DocumentTitleListsDocType = (typeof DocumentTitleListsDocType)[keyof typeof DocumentTitleListsDocType]


export const DocumentsDocType: {
  RECEIPT: 'RECEIPT',
  PAYMENT_VOUCHER: 'PAYMENT_VOUCHER',
  DISCOUNT_NOTE: 'DISCOUNT_NOTE',
  EXPENSE: 'EXPENSE'
};

export type DocumentsDocType = (typeof DocumentsDocType)[keyof typeof DocumentsDocType]


export const CustomerGender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  DIVERSE: 'DIVERSE'
};

export type CustomerGender = (typeof CustomerGender)[keyof typeof CustomerGender]


export const LoanType: {
  CASH: 'CASH',
  HIRE_PURCHASE: 'HIRE_PURCHASE'
};

export type LoanType = (typeof LoanType)[keyof typeof LoanType]

}

export type DocumentTitleListsDocType = $Enums.DocumentTitleListsDocType

export const DocumentTitleListsDocType: typeof $Enums.DocumentTitleListsDocType

export type DocumentsDocType = $Enums.DocumentsDocType

export const DocumentsDocType: typeof $Enums.DocumentsDocType

export type CustomerGender = $Enums.CustomerGender

export const CustomerGender: typeof $Enums.CustomerGender

export type LoanType = $Enums.LoanType

export const LoanType: typeof $Enums.LoanType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Document_title_lists
 * const document_title_lists = await prisma.document_title_lists.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Document_title_lists
   * const document_title_lists = await prisma.document_title_lists.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.document_title_lists`: Exposes CRUD operations for the **document_title_lists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_title_lists
    * const document_title_lists = await prisma.document_title_lists.findMany()
    * ```
    */
  get document_title_lists(): Prisma.document_title_listsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.documentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledger_land_logs`: Exposes CRUD operations for the **ledger_land_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ledger_land_logs
    * const ledger_land_logs = await prisma.ledger_land_logs.findMany()
    * ```
    */
  get ledger_land_logs(): Prisma.ledger_land_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.loanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan_customer`: Exposes CRUD operations for the **loan_customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loan_customers
    * const loan_customers = await prisma.loan_customer.findMany()
    * ```
    */
  get loan_customer(): Prisma.loan_customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan_payment`: Exposes CRUD operations for the **loan_payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loan_payments
    * const loan_payments = await prisma.loan_payment.findMany()
    * ```
    */
  get loan_payment(): Prisma.loan_paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan_running`: Exposes CRUD operations for the **loan_running** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loan_runnings
    * const loan_runnings = await prisma.loan_running.findMany()
    * ```
    */
  get loan_running(): Prisma.loan_runningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.overdue_status`: Exposes CRUD operations for the **overdue_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Overdue_statuses
    * const overdue_statuses = await prisma.overdue_status.findMany()
    * ```
    */
  get overdue_status(): Prisma.overdue_statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture_loan_other`: Exposes CRUD operations for the **picture_loan_other** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Picture_loan_others
    * const picture_loan_others = await prisma.picture_loan_other.findMany()
    * ```
    */
  get picture_loan_other(): Prisma.picture_loan_otherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.real_investment`: Exposes CRUD operations for the **real_investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Real_investments
    * const real_investments = await prisma.real_investment.findMany()
    * ```
    */
  get real_investment(): Prisma.real_investmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting_land`: Exposes CRUD operations for the **setting_land** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setting_lands
    * const setting_lands = await prisma.setting_land.findMany()
    * ```
    */
  get setting_land(): Prisma.setting_landDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting_land_logs`: Exposes CRUD operations for the **setting_land_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setting_land_logs
    * const setting_land_logs = await prisma.setting_land_logs.findMany()
    * ```
    */
  get setting_land_logs(): Prisma.setting_land_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting_land_report`: Exposes CRUD operations for the **setting_land_report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setting_land_reports
    * const setting_land_reports = await prisma.setting_land_report.findMany()
    * ```
    */
  get setting_land_report(): Prisma.setting_land_reportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    document_title_lists: 'document_title_lists',
    documents: 'documents',
    ledger_land_logs: 'ledger_land_logs',
    loan: 'loan',
    loan_customer: 'loan_customer',
    loan_payment: 'loan_payment',
    loan_running: 'loan_running',
    overdue_status: 'overdue_status',
    picture_loan_other: 'picture_loan_other',
    real_investment: 'real_investment',
    setting_land: 'setting_land',
    setting_land_logs: 'setting_land_logs',
    setting_land_report: 'setting_land_report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "document_title_lists" | "documents" | "ledger_land_logs" | "loan" | "loan_customer" | "loan_payment" | "loan_running" | "overdue_status" | "picture_loan_other" | "real_investment" | "setting_land" | "setting_land_logs" | "setting_land_report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      document_title_lists: {
        payload: Prisma.$document_title_listsPayload<ExtArgs>
        fields: Prisma.document_title_listsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.document_title_listsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.document_title_listsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload>
          }
          findFirst: {
            args: Prisma.document_title_listsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.document_title_listsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload>
          }
          findMany: {
            args: Prisma.document_title_listsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload>[]
          }
          create: {
            args: Prisma.document_title_listsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload>
          }
          createMany: {
            args: Prisma.document_title_listsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.document_title_listsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload>
          }
          update: {
            args: Prisma.document_title_listsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload>
          }
          deleteMany: {
            args: Prisma.document_title_listsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.document_title_listsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.document_title_listsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_title_listsPayload>
          }
          aggregate: {
            args: Prisma.Document_title_listsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_title_lists>
          }
          groupBy: {
            args: Prisma.document_title_listsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_title_listsGroupByOutputType>[]
          }
          count: {
            args: Prisma.document_title_listsCountArgs<ExtArgs>
            result: $Utils.Optional<Document_title_listsCountAggregateOutputType> | number
          }
        }
      }
      documents: {
        payload: Prisma.$documentsPayload<ExtArgs>
        fields: Prisma.documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findFirst: {
            args: Prisma.documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findMany: {
            args: Prisma.documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          create: {
            args: Prisma.documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          createMany: {
            args: Prisma.documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          update: {
            args: Prisma.documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          deleteMany: {
            args: Prisma.documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      ledger_land_logs: {
        payload: Prisma.$ledger_land_logsPayload<ExtArgs>
        fields: Prisma.ledger_land_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ledger_land_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ledger_land_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload>
          }
          findFirst: {
            args: Prisma.ledger_land_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ledger_land_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload>
          }
          findMany: {
            args: Prisma.ledger_land_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload>[]
          }
          create: {
            args: Prisma.ledger_land_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload>
          }
          createMany: {
            args: Prisma.ledger_land_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ledger_land_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload>
          }
          update: {
            args: Prisma.ledger_land_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload>
          }
          deleteMany: {
            args: Prisma.ledger_land_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ledger_land_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ledger_land_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ledger_land_logsPayload>
          }
          aggregate: {
            args: Prisma.Ledger_land_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedger_land_logs>
          }
          groupBy: {
            args: Prisma.ledger_land_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ledger_land_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ledger_land_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Ledger_land_logsCountAggregateOutputType> | number
          }
        }
      }
      loan: {
        payload: Prisma.$loanPayload<ExtArgs>
        fields: Prisma.loanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          findFirst: {
            args: Prisma.loanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          findMany: {
            args: Prisma.loanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[]
          }
          create: {
            args: Prisma.loanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          createMany: {
            args: Prisma.loanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.loanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          update: {
            args: Prisma.loanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          deleteMany: {
            args: Prisma.loanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.loanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.loanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.loanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
      loan_customer: {
        payload: Prisma.$loan_customerPayload<ExtArgs>
        fields: Prisma.loan_customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loan_customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loan_customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload>
          }
          findFirst: {
            args: Prisma.loan_customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loan_customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload>
          }
          findMany: {
            args: Prisma.loan_customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload>[]
          }
          create: {
            args: Prisma.loan_customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload>
          }
          createMany: {
            args: Prisma.loan_customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.loan_customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload>
          }
          update: {
            args: Prisma.loan_customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload>
          }
          deleteMany: {
            args: Prisma.loan_customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loan_customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.loan_customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_customerPayload>
          }
          aggregate: {
            args: Prisma.Loan_customerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan_customer>
          }
          groupBy: {
            args: Prisma.loan_customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loan_customerGroupByOutputType>[]
          }
          count: {
            args: Prisma.loan_customerCountArgs<ExtArgs>
            result: $Utils.Optional<Loan_customerCountAggregateOutputType> | number
          }
        }
      }
      loan_payment: {
        payload: Prisma.$loan_paymentPayload<ExtArgs>
        fields: Prisma.loan_paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loan_paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loan_paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload>
          }
          findFirst: {
            args: Prisma.loan_paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loan_paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload>
          }
          findMany: {
            args: Prisma.loan_paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload>[]
          }
          create: {
            args: Prisma.loan_paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload>
          }
          createMany: {
            args: Prisma.loan_paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.loan_paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload>
          }
          update: {
            args: Prisma.loan_paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload>
          }
          deleteMany: {
            args: Prisma.loan_paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loan_paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.loan_paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentPayload>
          }
          aggregate: {
            args: Prisma.Loan_paymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan_payment>
          }
          groupBy: {
            args: Prisma.loan_paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loan_paymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.loan_paymentCountArgs<ExtArgs>
            result: $Utils.Optional<Loan_paymentCountAggregateOutputType> | number
          }
        }
      }
      loan_running: {
        payload: Prisma.$loan_runningPayload<ExtArgs>
        fields: Prisma.loan_runningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loan_runningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loan_runningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload>
          }
          findFirst: {
            args: Prisma.loan_runningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loan_runningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload>
          }
          findMany: {
            args: Prisma.loan_runningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload>[]
          }
          create: {
            args: Prisma.loan_runningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload>
          }
          createMany: {
            args: Prisma.loan_runningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.loan_runningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload>
          }
          update: {
            args: Prisma.loan_runningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload>
          }
          deleteMany: {
            args: Prisma.loan_runningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loan_runningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.loan_runningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_runningPayload>
          }
          aggregate: {
            args: Prisma.Loan_runningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan_running>
          }
          groupBy: {
            args: Prisma.loan_runningGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loan_runningGroupByOutputType>[]
          }
          count: {
            args: Prisma.loan_runningCountArgs<ExtArgs>
            result: $Utils.Optional<Loan_runningCountAggregateOutputType> | number
          }
        }
      }
      overdue_status: {
        payload: Prisma.$overdue_statusPayload<ExtArgs>
        fields: Prisma.overdue_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.overdue_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.overdue_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload>
          }
          findFirst: {
            args: Prisma.overdue_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.overdue_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload>
          }
          findMany: {
            args: Prisma.overdue_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload>[]
          }
          create: {
            args: Prisma.overdue_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload>
          }
          createMany: {
            args: Prisma.overdue_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.overdue_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload>
          }
          update: {
            args: Prisma.overdue_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload>
          }
          deleteMany: {
            args: Prisma.overdue_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.overdue_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.overdue_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$overdue_statusPayload>
          }
          aggregate: {
            args: Prisma.Overdue_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOverdue_status>
          }
          groupBy: {
            args: Prisma.overdue_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Overdue_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.overdue_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Overdue_statusCountAggregateOutputType> | number
          }
        }
      }
      picture_loan_other: {
        payload: Prisma.$picture_loan_otherPayload<ExtArgs>
        fields: Prisma.picture_loan_otherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.picture_loan_otherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.picture_loan_otherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload>
          }
          findFirst: {
            args: Prisma.picture_loan_otherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.picture_loan_otherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload>
          }
          findMany: {
            args: Prisma.picture_loan_otherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload>[]
          }
          create: {
            args: Prisma.picture_loan_otherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload>
          }
          createMany: {
            args: Prisma.picture_loan_otherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.picture_loan_otherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload>
          }
          update: {
            args: Prisma.picture_loan_otherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload>
          }
          deleteMany: {
            args: Prisma.picture_loan_otherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.picture_loan_otherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.picture_loan_otherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$picture_loan_otherPayload>
          }
          aggregate: {
            args: Prisma.Picture_loan_otherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePicture_loan_other>
          }
          groupBy: {
            args: Prisma.picture_loan_otherGroupByArgs<ExtArgs>
            result: $Utils.Optional<Picture_loan_otherGroupByOutputType>[]
          }
          count: {
            args: Prisma.picture_loan_otherCountArgs<ExtArgs>
            result: $Utils.Optional<Picture_loan_otherCountAggregateOutputType> | number
          }
        }
      }
      real_investment: {
        payload: Prisma.$real_investmentPayload<ExtArgs>
        fields: Prisma.real_investmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.real_investmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.real_investmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload>
          }
          findFirst: {
            args: Prisma.real_investmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.real_investmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload>
          }
          findMany: {
            args: Prisma.real_investmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload>[]
          }
          create: {
            args: Prisma.real_investmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload>
          }
          createMany: {
            args: Prisma.real_investmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.real_investmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload>
          }
          update: {
            args: Prisma.real_investmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload>
          }
          deleteMany: {
            args: Prisma.real_investmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.real_investmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.real_investmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$real_investmentPayload>
          }
          aggregate: {
            args: Prisma.Real_investmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReal_investment>
          }
          groupBy: {
            args: Prisma.real_investmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Real_investmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.real_investmentCountArgs<ExtArgs>
            result: $Utils.Optional<Real_investmentCountAggregateOutputType> | number
          }
        }
      }
      setting_land: {
        payload: Prisma.$setting_landPayload<ExtArgs>
        fields: Prisma.setting_landFieldRefs
        operations: {
          findUnique: {
            args: Prisma.setting_landFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.setting_landFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload>
          }
          findFirst: {
            args: Prisma.setting_landFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.setting_landFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload>
          }
          findMany: {
            args: Prisma.setting_landFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload>[]
          }
          create: {
            args: Prisma.setting_landCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload>
          }
          createMany: {
            args: Prisma.setting_landCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.setting_landDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload>
          }
          update: {
            args: Prisma.setting_landUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload>
          }
          deleteMany: {
            args: Prisma.setting_landDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.setting_landUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.setting_landUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_landPayload>
          }
          aggregate: {
            args: Prisma.Setting_landAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting_land>
          }
          groupBy: {
            args: Prisma.setting_landGroupByArgs<ExtArgs>
            result: $Utils.Optional<Setting_landGroupByOutputType>[]
          }
          count: {
            args: Prisma.setting_landCountArgs<ExtArgs>
            result: $Utils.Optional<Setting_landCountAggregateOutputType> | number
          }
        }
      }
      setting_land_logs: {
        payload: Prisma.$setting_land_logsPayload<ExtArgs>
        fields: Prisma.setting_land_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.setting_land_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.setting_land_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload>
          }
          findFirst: {
            args: Prisma.setting_land_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.setting_land_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload>
          }
          findMany: {
            args: Prisma.setting_land_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload>[]
          }
          create: {
            args: Prisma.setting_land_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload>
          }
          createMany: {
            args: Prisma.setting_land_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.setting_land_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload>
          }
          update: {
            args: Prisma.setting_land_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload>
          }
          deleteMany: {
            args: Prisma.setting_land_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.setting_land_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.setting_land_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_logsPayload>
          }
          aggregate: {
            args: Prisma.Setting_land_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting_land_logs>
          }
          groupBy: {
            args: Prisma.setting_land_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Setting_land_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.setting_land_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Setting_land_logsCountAggregateOutputType> | number
          }
        }
      }
      setting_land_report: {
        payload: Prisma.$setting_land_reportPayload<ExtArgs>
        fields: Prisma.setting_land_reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.setting_land_reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.setting_land_reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload>
          }
          findFirst: {
            args: Prisma.setting_land_reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.setting_land_reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload>
          }
          findMany: {
            args: Prisma.setting_land_reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload>[]
          }
          create: {
            args: Prisma.setting_land_reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload>
          }
          createMany: {
            args: Prisma.setting_land_reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.setting_land_reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload>
          }
          update: {
            args: Prisma.setting_land_reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload>
          }
          deleteMany: {
            args: Prisma.setting_land_reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.setting_land_reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.setting_land_reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setting_land_reportPayload>
          }
          aggregate: {
            args: Prisma.Setting_land_reportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting_land_report>
          }
          groupBy: {
            args: Prisma.setting_land_reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<Setting_land_reportGroupByOutputType>[]
          }
          count: {
            args: Prisma.setting_land_reportCountArgs<ExtArgs>
            result: $Utils.Optional<Setting_land_reportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    document_title_lists?: document_title_listsOmit
    documents?: documentsOmit
    ledger_land_logs?: ledger_land_logsOmit
    loan?: loanOmit
    loan_customer?: loan_customerOmit
    loan_payment?: loan_paymentOmit
    loan_running?: loan_runningOmit
    overdue_status?: overdue_statusOmit
    picture_loan_other?: picture_loan_otherOmit
    real_investment?: real_investmentOmit
    setting_land?: setting_landOmit
    setting_land_logs?: setting_land_logsOmit
    setting_land_report?: setting_land_reportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model document_title_lists
   */

  export type AggregateDocument_title_lists = {
    _count: Document_title_listsCountAggregateOutputType | null
    _avg: Document_title_listsAvgAggregateOutputType | null
    _sum: Document_title_listsSumAggregateOutputType | null
    _min: Document_title_listsMinAggregateOutputType | null
    _max: Document_title_listsMaxAggregateOutputType | null
  }

  export type Document_title_listsAvgAggregateOutputType = {
    id: number | null
  }

  export type Document_title_listsSumAggregateOutputType = {
    id: number | null
  }

  export type Document_title_listsMinAggregateOutputType = {
    id: number | null
    doc_type: $Enums.DocumentTitleListsDocType | null
    title: string | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Document_title_listsMaxAggregateOutputType = {
    id: number | null
    doc_type: $Enums.DocumentTitleListsDocType | null
    title: string | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Document_title_listsCountAggregateOutputType = {
    id: number
    doc_type: number
    title: number
    note: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Document_title_listsAvgAggregateInputType = {
    id?: true
  }

  export type Document_title_listsSumAggregateInputType = {
    id?: true
  }

  export type Document_title_listsMinAggregateInputType = {
    id?: true
    doc_type?: true
    title?: true
    note?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Document_title_listsMaxAggregateInputType = {
    id?: true
    doc_type?: true
    title?: true
    note?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Document_title_listsCountAggregateInputType = {
    id?: true
    doc_type?: true
    title?: true
    note?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Document_title_listsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_title_lists to aggregate.
     */
    where?: document_title_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_title_lists to fetch.
     */
    orderBy?: document_title_listsOrderByWithRelationInput | document_title_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: document_title_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_title_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_title_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned document_title_lists
    **/
    _count?: true | Document_title_listsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Document_title_listsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Document_title_listsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_title_listsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_title_listsMaxAggregateInputType
  }

  export type GetDocument_title_listsAggregateType<T extends Document_title_listsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_title_lists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_title_lists[P]>
      : GetScalarType<T[P], AggregateDocument_title_lists[P]>
  }




  export type document_title_listsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_title_listsWhereInput
    orderBy?: document_title_listsOrderByWithAggregationInput | document_title_listsOrderByWithAggregationInput[]
    by: Document_title_listsScalarFieldEnum[] | Document_title_listsScalarFieldEnum
    having?: document_title_listsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_title_listsCountAggregateInputType | true
    _avg?: Document_title_listsAvgAggregateInputType
    _sum?: Document_title_listsSumAggregateInputType
    _min?: Document_title_listsMinAggregateInputType
    _max?: Document_title_listsMaxAggregateInputType
  }

  export type Document_title_listsGroupByOutputType = {
    id: number
    doc_type: $Enums.DocumentTitleListsDocType
    title: string
    note: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Document_title_listsCountAggregateOutputType | null
    _avg: Document_title_listsAvgAggregateOutputType | null
    _sum: Document_title_listsSumAggregateOutputType | null
    _min: Document_title_listsMinAggregateOutputType | null
    _max: Document_title_listsMaxAggregateOutputType | null
  }

  type GetDocument_title_listsGroupByPayload<T extends document_title_listsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_title_listsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_title_listsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_title_listsGroupByOutputType[P]>
            : GetScalarType<T[P], Document_title_listsGroupByOutputType[P]>
        }
      >
    >


  export type document_title_listsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doc_type?: boolean
    title?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["document_title_lists"]>



  export type document_title_listsSelectScalar = {
    id?: boolean
    doc_type?: boolean
    title?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type document_title_listsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doc_type" | "title" | "note" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["document_title_lists"]>

  export type $document_title_listsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document_title_lists"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      doc_type: $Enums.DocumentTitleListsDocType
      title: string
      note: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["document_title_lists"]>
    composites: {}
  }

  type document_title_listsGetPayload<S extends boolean | null | undefined | document_title_listsDefaultArgs> = $Result.GetResult<Prisma.$document_title_listsPayload, S>

  type document_title_listsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<document_title_listsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Document_title_listsCountAggregateInputType | true
    }

  export interface document_title_listsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document_title_lists'], meta: { name: 'document_title_lists' } }
    /**
     * Find zero or one Document_title_lists that matches the filter.
     * @param {document_title_listsFindUniqueArgs} args - Arguments to find a Document_title_lists
     * @example
     * // Get one Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends document_title_listsFindUniqueArgs>(args: SelectSubset<T, document_title_listsFindUniqueArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document_title_lists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {document_title_listsFindUniqueOrThrowArgs} args - Arguments to find a Document_title_lists
     * @example
     * // Get one Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends document_title_listsFindUniqueOrThrowArgs>(args: SelectSubset<T, document_title_listsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_title_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_title_listsFindFirstArgs} args - Arguments to find a Document_title_lists
     * @example
     * // Get one Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends document_title_listsFindFirstArgs>(args?: SelectSubset<T, document_title_listsFindFirstArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_title_lists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_title_listsFindFirstOrThrowArgs} args - Arguments to find a Document_title_lists
     * @example
     * // Get one Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends document_title_listsFindFirstOrThrowArgs>(args?: SelectSubset<T, document_title_listsFindFirstOrThrowArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Document_title_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_title_listsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.findMany()
     * 
     * // Get first 10 Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const document_title_listsWithIdOnly = await prisma.document_title_lists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends document_title_listsFindManyArgs>(args?: SelectSubset<T, document_title_listsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document_title_lists.
     * @param {document_title_listsCreateArgs} args - Arguments to create a Document_title_lists.
     * @example
     * // Create one Document_title_lists
     * const Document_title_lists = await prisma.document_title_lists.create({
     *   data: {
     *     // ... data to create a Document_title_lists
     *   }
     * })
     * 
     */
    create<T extends document_title_listsCreateArgs>(args: SelectSubset<T, document_title_listsCreateArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Document_title_lists.
     * @param {document_title_listsCreateManyArgs} args - Arguments to create many Document_title_lists.
     * @example
     * // Create many Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends document_title_listsCreateManyArgs>(args?: SelectSubset<T, document_title_listsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document_title_lists.
     * @param {document_title_listsDeleteArgs} args - Arguments to delete one Document_title_lists.
     * @example
     * // Delete one Document_title_lists
     * const Document_title_lists = await prisma.document_title_lists.delete({
     *   where: {
     *     // ... filter to delete one Document_title_lists
     *   }
     * })
     * 
     */
    delete<T extends document_title_listsDeleteArgs>(args: SelectSubset<T, document_title_listsDeleteArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document_title_lists.
     * @param {document_title_listsUpdateArgs} args - Arguments to update one Document_title_lists.
     * @example
     * // Update one Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends document_title_listsUpdateArgs>(args: SelectSubset<T, document_title_listsUpdateArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Document_title_lists.
     * @param {document_title_listsDeleteManyArgs} args - Arguments to filter Document_title_lists to delete.
     * @example
     * // Delete a few Document_title_lists
     * const { count } = await prisma.document_title_lists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends document_title_listsDeleteManyArgs>(args?: SelectSubset<T, document_title_listsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_title_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_title_listsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends document_title_listsUpdateManyArgs>(args: SelectSubset<T, document_title_listsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document_title_lists.
     * @param {document_title_listsUpsertArgs} args - Arguments to update or create a Document_title_lists.
     * @example
     * // Update or create a Document_title_lists
     * const document_title_lists = await prisma.document_title_lists.upsert({
     *   create: {
     *     // ... data to create a Document_title_lists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_title_lists we want to update
     *   }
     * })
     */
    upsert<T extends document_title_listsUpsertArgs>(args: SelectSubset<T, document_title_listsUpsertArgs<ExtArgs>>): Prisma__document_title_listsClient<$Result.GetResult<Prisma.$document_title_listsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Document_title_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_title_listsCountArgs} args - Arguments to filter Document_title_lists to count.
     * @example
     * // Count the number of Document_title_lists
     * const count = await prisma.document_title_lists.count({
     *   where: {
     *     // ... the filter for the Document_title_lists we want to count
     *   }
     * })
    **/
    count<T extends document_title_listsCountArgs>(
      args?: Subset<T, document_title_listsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_title_listsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_title_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_title_listsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Document_title_listsAggregateArgs>(args: Subset<T, Document_title_listsAggregateArgs>): Prisma.PrismaPromise<GetDocument_title_listsAggregateType<T>>

    /**
     * Group by Document_title_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_title_listsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends document_title_listsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: document_title_listsGroupByArgs['orderBy'] }
        : { orderBy?: document_title_listsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, document_title_listsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_title_listsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document_title_lists model
   */
  readonly fields: document_title_listsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document_title_lists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__document_title_listsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the document_title_lists model
   */
  interface document_title_listsFieldRefs {
    readonly id: FieldRef<"document_title_lists", 'Int'>
    readonly doc_type: FieldRef<"document_title_lists", 'DocumentTitleListsDocType'>
    readonly title: FieldRef<"document_title_lists", 'String'>
    readonly note: FieldRef<"document_title_lists", 'String'>
    readonly created_at: FieldRef<"document_title_lists", 'DateTime'>
    readonly updated_at: FieldRef<"document_title_lists", 'DateTime'>
    readonly deleted_at: FieldRef<"document_title_lists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * document_title_lists findUnique
   */
  export type document_title_listsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * Filter, which document_title_lists to fetch.
     */
    where: document_title_listsWhereUniqueInput
  }

  /**
   * document_title_lists findUniqueOrThrow
   */
  export type document_title_listsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * Filter, which document_title_lists to fetch.
     */
    where: document_title_listsWhereUniqueInput
  }

  /**
   * document_title_lists findFirst
   */
  export type document_title_listsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * Filter, which document_title_lists to fetch.
     */
    where?: document_title_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_title_lists to fetch.
     */
    orderBy?: document_title_listsOrderByWithRelationInput | document_title_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_title_lists.
     */
    cursor?: document_title_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_title_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_title_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_title_lists.
     */
    distinct?: Document_title_listsScalarFieldEnum | Document_title_listsScalarFieldEnum[]
  }

  /**
   * document_title_lists findFirstOrThrow
   */
  export type document_title_listsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * Filter, which document_title_lists to fetch.
     */
    where?: document_title_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_title_lists to fetch.
     */
    orderBy?: document_title_listsOrderByWithRelationInput | document_title_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_title_lists.
     */
    cursor?: document_title_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_title_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_title_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_title_lists.
     */
    distinct?: Document_title_listsScalarFieldEnum | Document_title_listsScalarFieldEnum[]
  }

  /**
   * document_title_lists findMany
   */
  export type document_title_listsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * Filter, which document_title_lists to fetch.
     */
    where?: document_title_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_title_lists to fetch.
     */
    orderBy?: document_title_listsOrderByWithRelationInput | document_title_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing document_title_lists.
     */
    cursor?: document_title_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_title_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_title_lists.
     */
    skip?: number
    distinct?: Document_title_listsScalarFieldEnum | Document_title_listsScalarFieldEnum[]
  }

  /**
   * document_title_lists create
   */
  export type document_title_listsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * The data needed to create a document_title_lists.
     */
    data: XOR<document_title_listsCreateInput, document_title_listsUncheckedCreateInput>
  }

  /**
   * document_title_lists createMany
   */
  export type document_title_listsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many document_title_lists.
     */
    data: document_title_listsCreateManyInput | document_title_listsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * document_title_lists update
   */
  export type document_title_listsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * The data needed to update a document_title_lists.
     */
    data: XOR<document_title_listsUpdateInput, document_title_listsUncheckedUpdateInput>
    /**
     * Choose, which document_title_lists to update.
     */
    where: document_title_listsWhereUniqueInput
  }

  /**
   * document_title_lists updateMany
   */
  export type document_title_listsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update document_title_lists.
     */
    data: XOR<document_title_listsUpdateManyMutationInput, document_title_listsUncheckedUpdateManyInput>
    /**
     * Filter which document_title_lists to update
     */
    where?: document_title_listsWhereInput
    /**
     * Limit how many document_title_lists to update.
     */
    limit?: number
  }

  /**
   * document_title_lists upsert
   */
  export type document_title_listsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * The filter to search for the document_title_lists to update in case it exists.
     */
    where: document_title_listsWhereUniqueInput
    /**
     * In case the document_title_lists found by the `where` argument doesn't exist, create a new document_title_lists with this data.
     */
    create: XOR<document_title_listsCreateInput, document_title_listsUncheckedCreateInput>
    /**
     * In case the document_title_lists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<document_title_listsUpdateInput, document_title_listsUncheckedUpdateInput>
  }

  /**
   * document_title_lists delete
   */
  export type document_title_listsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
    /**
     * Filter which document_title_lists to delete.
     */
    where: document_title_listsWhereUniqueInput
  }

  /**
   * document_title_lists deleteMany
   */
  export type document_title_listsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_title_lists to delete
     */
    where?: document_title_listsWhereInput
    /**
     * Limit how many document_title_lists to delete.
     */
    limit?: number
  }

  /**
   * document_title_lists without action
   */
  export type document_title_listsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_title_lists
     */
    select?: document_title_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_title_lists
     */
    omit?: document_title_listsOmit<ExtArgs> | null
  }


  /**
   * Model documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    employee_id: number | null
    doc_file_price: Decimal | null
  }

  export type DocumentsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    employee_id: number | null
    doc_file_price: Decimal | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: number | null
    doc_type: $Enums.DocumentsDocType | null
    doc_number: string | null
    doc_date: Date | null
    title: string | null
    price: Decimal | null
    cash_flow_name: string | null
    employee_id: number | null
    username: string | null
    doc_file: string | null
    doc_file_date: Date | null
    doc_file_time: Date | null
    doc_file_price: Decimal | null
    filePath: string | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: number | null
    doc_type: $Enums.DocumentsDocType | null
    doc_number: string | null
    doc_date: Date | null
    title: string | null
    price: Decimal | null
    cash_flow_name: string | null
    employee_id: number | null
    username: string | null
    doc_file: string | null
    doc_file_date: Date | null
    doc_file_time: Date | null
    doc_file_price: Decimal | null
    filePath: string | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    doc_type: number
    doc_number: number
    doc_date: number
    title: number
    price: number
    cash_flow_name: number
    employee_id: number
    username: number
    doc_file: number
    doc_file_date: number
    doc_file_time: number
    doc_file_price: number
    filePath: number
    note: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    id?: true
    price?: true
    employee_id?: true
    doc_file_price?: true
  }

  export type DocumentsSumAggregateInputType = {
    id?: true
    price?: true
    employee_id?: true
    doc_file_price?: true
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    doc_type?: true
    doc_number?: true
    doc_date?: true
    title?: true
    price?: true
    cash_flow_name?: true
    employee_id?: true
    username?: true
    doc_file?: true
    doc_file_date?: true
    doc_file_time?: true
    doc_file_price?: true
    filePath?: true
    note?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    doc_type?: true
    doc_number?: true
    doc_date?: true
    title?: true
    price?: true
    cash_flow_name?: true
    employee_id?: true
    username?: true
    doc_file?: true
    doc_file_date?: true
    doc_file_time?: true
    doc_file_price?: true
    filePath?: true
    note?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    doc_type?: true
    doc_number?: true
    doc_date?: true
    title?: true
    price?: true
    cash_flow_name?: true
    employee_id?: true
    username?: true
    doc_file?: true
    doc_file_date?: true
    doc_file_time?: true
    doc_file_price?: true
    filePath?: true
    note?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to aggregate.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithAggregationInput | documentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: number
    doc_type: $Enums.DocumentsDocType
    doc_number: string
    doc_date: Date
    title: string
    price: Decimal
    cash_flow_name: string
    employee_id: number
    username: string | null
    doc_file: string | null
    doc_file_date: Date | null
    doc_file_time: Date | null
    doc_file_price: Decimal | null
    filePath: string | null
    note: string | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doc_type?: boolean
    doc_number?: boolean
    doc_date?: boolean
    title?: boolean
    price?: boolean
    cash_flow_name?: boolean
    employee_id?: boolean
    username?: boolean
    doc_file?: boolean
    doc_file_date?: boolean
    doc_file_time?: boolean
    doc_file_price?: boolean
    filePath?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["documents"]>



  export type documentsSelectScalar = {
    id?: boolean
    doc_type?: boolean
    doc_number?: boolean
    doc_date?: boolean
    title?: boolean
    price?: boolean
    cash_flow_name?: boolean
    employee_id?: boolean
    username?: boolean
    doc_file?: boolean
    doc_file_date?: boolean
    doc_file_time?: boolean
    doc_file_price?: boolean
    filePath?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type documentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doc_type" | "doc_number" | "doc_date" | "title" | "price" | "cash_flow_name" | "employee_id" | "username" | "doc_file" | "doc_file_date" | "doc_file_time" | "doc_file_price" | "filePath" | "note" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["documents"]>

  export type $documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      doc_type: $Enums.DocumentsDocType
      doc_number: string
      doc_date: Date
      title: string
      price: Prisma.Decimal
      cash_flow_name: string
      employee_id: number
      username: string | null
      doc_file: string | null
      doc_file_date: Date | null
      doc_file_time: Date | null
      doc_file_price: Prisma.Decimal | null
      filePath: string | null
      note: string | null
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type documentsGetPayload<S extends boolean | null | undefined | documentsDefaultArgs> = $Result.GetResult<Prisma.$documentsPayload, S>

  type documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documents'], meta: { name: 'documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {documentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentsFindUniqueArgs>(args: SelectSubset<T, documentsFindUniqueArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentsFindFirstArgs>(args?: SelectSubset<T, documentsFindFirstArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documentsFindManyArgs>(args?: SelectSubset<T, documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {documentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends documentsCreateArgs>(args: SelectSubset<T, documentsCreateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {documentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentsCreateManyArgs>(args?: SelectSubset<T, documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documents.
     * @param {documentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends documentsDeleteArgs>(args: SelectSubset<T, documentsDeleteArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {documentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentsUpdateArgs>(args: SelectSubset<T, documentsUpdateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {documentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentsDeleteManyArgs>(args?: SelectSubset<T, documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentsUpdateManyArgs>(args: SelectSubset<T, documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documents.
     * @param {documentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends documentsUpsertArgs>(args: SelectSubset<T, documentsUpsertArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentsCountArgs>(
      args?: Subset<T, documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentsGroupByArgs['orderBy'] }
        : { orderBy?: documentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documents model
   */
  readonly fields: documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the documents model
   */
  interface documentsFieldRefs {
    readonly id: FieldRef<"documents", 'Int'>
    readonly doc_type: FieldRef<"documents", 'DocumentsDocType'>
    readonly doc_number: FieldRef<"documents", 'String'>
    readonly doc_date: FieldRef<"documents", 'DateTime'>
    readonly title: FieldRef<"documents", 'String'>
    readonly price: FieldRef<"documents", 'Decimal'>
    readonly cash_flow_name: FieldRef<"documents", 'String'>
    readonly employee_id: FieldRef<"documents", 'Int'>
    readonly username: FieldRef<"documents", 'String'>
    readonly doc_file: FieldRef<"documents", 'String'>
    readonly doc_file_date: FieldRef<"documents", 'DateTime'>
    readonly doc_file_time: FieldRef<"documents", 'DateTime'>
    readonly doc_file_price: FieldRef<"documents", 'Decimal'>
    readonly filePath: FieldRef<"documents", 'String'>
    readonly note: FieldRef<"documents", 'String'>
    readonly created_at: FieldRef<"documents", 'DateTime'>
    readonly updated_at: FieldRef<"documents", 'DateTime'>
    readonly deleted_at: FieldRef<"documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * documents findUnique
   */
  export type documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findUniqueOrThrow
   */
  export type documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findFirst
   */
  export type documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findFirstOrThrow
   */
  export type documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findMany
   */
  export type documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents create
   */
  export type documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * The data needed to create a documents.
     */
    data: XOR<documentsCreateInput, documentsUncheckedCreateInput>
  }

  /**
   * documents createMany
   */
  export type documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents update
   */
  export type documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * The data needed to update a documents.
     */
    data: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
    /**
     * Choose, which documents to update.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents updateMany
   */
  export type documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
  }

  /**
   * documents upsert
   */
  export type documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * The filter to search for the documents to update in case it exists.
     */
    where: documentsWhereUniqueInput
    /**
     * In case the documents found by the `where` argument doesn't exist, create a new documents with this data.
     */
    create: XOR<documentsCreateInput, documentsUncheckedCreateInput>
    /**
     * In case the documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
  }

  /**
   * documents delete
   */
  export type documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Filter which documents to delete.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents deleteMany
   */
  export type documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to delete.
     */
    limit?: number
  }

  /**
   * documents without action
   */
  export type documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
  }


  /**
   * Model ledger_land_logs
   */

  export type AggregateLedger_land_logs = {
    _count: Ledger_land_logsCountAggregateOutputType | null
    _avg: Ledger_land_logsAvgAggregateOutputType | null
    _sum: Ledger_land_logsSumAggregateOutputType | null
    _min: Ledger_land_logsMinAggregateOutputType | null
    _max: Ledger_land_logsMaxAggregateOutputType | null
  }

  export type Ledger_land_logsAvgAggregateOutputType = {
    id: number | null
    land_logs_loan_amount: Decimal | null
    land_logs_cash_flow: Decimal | null
    land_logs_interest: Decimal | null
    land_logs_summary_net: Decimal | null
  }

  export type Ledger_land_logsSumAggregateOutputType = {
    id: number | null
    land_logs_loan_amount: Decimal | null
    land_logs_cash_flow: Decimal | null
    land_logs_interest: Decimal | null
    land_logs_summary_net: Decimal | null
  }

  export type Ledger_land_logsMinAggregateOutputType = {
    id: number | null
    land_logs_loan_amount: Decimal | null
    land_logs_cash_flow: Decimal | null
    land_logs_interest: Decimal | null
    land_logs_summary_net: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ledger_land_logsMaxAggregateOutputType = {
    id: number | null
    land_logs_loan_amount: Decimal | null
    land_logs_cash_flow: Decimal | null
    land_logs_interest: Decimal | null
    land_logs_summary_net: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ledger_land_logsCountAggregateOutputType = {
    id: number
    land_logs_loan_amount: number
    land_logs_cash_flow: number
    land_logs_interest: number
    land_logs_summary_net: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Ledger_land_logsAvgAggregateInputType = {
    id?: true
    land_logs_loan_amount?: true
    land_logs_cash_flow?: true
    land_logs_interest?: true
    land_logs_summary_net?: true
  }

  export type Ledger_land_logsSumAggregateInputType = {
    id?: true
    land_logs_loan_amount?: true
    land_logs_cash_flow?: true
    land_logs_interest?: true
    land_logs_summary_net?: true
  }

  export type Ledger_land_logsMinAggregateInputType = {
    id?: true
    land_logs_loan_amount?: true
    land_logs_cash_flow?: true
    land_logs_interest?: true
    land_logs_summary_net?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ledger_land_logsMaxAggregateInputType = {
    id?: true
    land_logs_loan_amount?: true
    land_logs_cash_flow?: true
    land_logs_interest?: true
    land_logs_summary_net?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ledger_land_logsCountAggregateInputType = {
    id?: true
    land_logs_loan_amount?: true
    land_logs_cash_flow?: true
    land_logs_interest?: true
    land_logs_summary_net?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Ledger_land_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ledger_land_logs to aggregate.
     */
    where?: ledger_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ledger_land_logs to fetch.
     */
    orderBy?: ledger_land_logsOrderByWithRelationInput | ledger_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ledger_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ledger_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ledger_land_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ledger_land_logs
    **/
    _count?: true | Ledger_land_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ledger_land_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ledger_land_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ledger_land_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ledger_land_logsMaxAggregateInputType
  }

  export type GetLedger_land_logsAggregateType<T extends Ledger_land_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateLedger_land_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedger_land_logs[P]>
      : GetScalarType<T[P], AggregateLedger_land_logs[P]>
  }




  export type ledger_land_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ledger_land_logsWhereInput
    orderBy?: ledger_land_logsOrderByWithAggregationInput | ledger_land_logsOrderByWithAggregationInput[]
    by: Ledger_land_logsScalarFieldEnum[] | Ledger_land_logsScalarFieldEnum
    having?: ledger_land_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ledger_land_logsCountAggregateInputType | true
    _avg?: Ledger_land_logsAvgAggregateInputType
    _sum?: Ledger_land_logsSumAggregateInputType
    _min?: Ledger_land_logsMinAggregateInputType
    _max?: Ledger_land_logsMaxAggregateInputType
  }

  export type Ledger_land_logsGroupByOutputType = {
    id: number
    land_logs_loan_amount: Decimal
    land_logs_cash_flow: Decimal
    land_logs_interest: Decimal
    land_logs_summary_net: Decimal
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Ledger_land_logsCountAggregateOutputType | null
    _avg: Ledger_land_logsAvgAggregateOutputType | null
    _sum: Ledger_land_logsSumAggregateOutputType | null
    _min: Ledger_land_logsMinAggregateOutputType | null
    _max: Ledger_land_logsMaxAggregateOutputType | null
  }

  type GetLedger_land_logsGroupByPayload<T extends ledger_land_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ledger_land_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ledger_land_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ledger_land_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Ledger_land_logsGroupByOutputType[P]>
        }
      >
    >


  export type ledger_land_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    land_logs_loan_amount?: boolean
    land_logs_cash_flow?: boolean
    land_logs_interest?: boolean
    land_logs_summary_net?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["ledger_land_logs"]>



  export type ledger_land_logsSelectScalar = {
    id?: boolean
    land_logs_loan_amount?: boolean
    land_logs_cash_flow?: boolean
    land_logs_interest?: boolean
    land_logs_summary_net?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ledger_land_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "land_logs_loan_amount" | "land_logs_cash_flow" | "land_logs_interest" | "land_logs_summary_net" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["ledger_land_logs"]>

  export type $ledger_land_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ledger_land_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      land_logs_loan_amount: Prisma.Decimal
      land_logs_cash_flow: Prisma.Decimal
      land_logs_interest: Prisma.Decimal
      land_logs_summary_net: Prisma.Decimal
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["ledger_land_logs"]>
    composites: {}
  }

  type ledger_land_logsGetPayload<S extends boolean | null | undefined | ledger_land_logsDefaultArgs> = $Result.GetResult<Prisma.$ledger_land_logsPayload, S>

  type ledger_land_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ledger_land_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ledger_land_logsCountAggregateInputType | true
    }

  export interface ledger_land_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ledger_land_logs'], meta: { name: 'ledger_land_logs' } }
    /**
     * Find zero or one Ledger_land_logs that matches the filter.
     * @param {ledger_land_logsFindUniqueArgs} args - Arguments to find a Ledger_land_logs
     * @example
     * // Get one Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ledger_land_logsFindUniqueArgs>(args: SelectSubset<T, ledger_land_logsFindUniqueArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ledger_land_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ledger_land_logsFindUniqueOrThrowArgs} args - Arguments to find a Ledger_land_logs
     * @example
     * // Get one Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ledger_land_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, ledger_land_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger_land_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ledger_land_logsFindFirstArgs} args - Arguments to find a Ledger_land_logs
     * @example
     * // Get one Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ledger_land_logsFindFirstArgs>(args?: SelectSubset<T, ledger_land_logsFindFirstArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger_land_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ledger_land_logsFindFirstOrThrowArgs} args - Arguments to find a Ledger_land_logs
     * @example
     * // Get one Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ledger_land_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, ledger_land_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ledger_land_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ledger_land_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.findMany()
     * 
     * // Get first 10 Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledger_land_logsWithIdOnly = await prisma.ledger_land_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ledger_land_logsFindManyArgs>(args?: SelectSubset<T, ledger_land_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ledger_land_logs.
     * @param {ledger_land_logsCreateArgs} args - Arguments to create a Ledger_land_logs.
     * @example
     * // Create one Ledger_land_logs
     * const Ledger_land_logs = await prisma.ledger_land_logs.create({
     *   data: {
     *     // ... data to create a Ledger_land_logs
     *   }
     * })
     * 
     */
    create<T extends ledger_land_logsCreateArgs>(args: SelectSubset<T, ledger_land_logsCreateArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ledger_land_logs.
     * @param {ledger_land_logsCreateManyArgs} args - Arguments to create many Ledger_land_logs.
     * @example
     * // Create many Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ledger_land_logsCreateManyArgs>(args?: SelectSubset<T, ledger_land_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ledger_land_logs.
     * @param {ledger_land_logsDeleteArgs} args - Arguments to delete one Ledger_land_logs.
     * @example
     * // Delete one Ledger_land_logs
     * const Ledger_land_logs = await prisma.ledger_land_logs.delete({
     *   where: {
     *     // ... filter to delete one Ledger_land_logs
     *   }
     * })
     * 
     */
    delete<T extends ledger_land_logsDeleteArgs>(args: SelectSubset<T, ledger_land_logsDeleteArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ledger_land_logs.
     * @param {ledger_land_logsUpdateArgs} args - Arguments to update one Ledger_land_logs.
     * @example
     * // Update one Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ledger_land_logsUpdateArgs>(args: SelectSubset<T, ledger_land_logsUpdateArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ledger_land_logs.
     * @param {ledger_land_logsDeleteManyArgs} args - Arguments to filter Ledger_land_logs to delete.
     * @example
     * // Delete a few Ledger_land_logs
     * const { count } = await prisma.ledger_land_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ledger_land_logsDeleteManyArgs>(args?: SelectSubset<T, ledger_land_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ledger_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ledger_land_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ledger_land_logsUpdateManyArgs>(args: SelectSubset<T, ledger_land_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ledger_land_logs.
     * @param {ledger_land_logsUpsertArgs} args - Arguments to update or create a Ledger_land_logs.
     * @example
     * // Update or create a Ledger_land_logs
     * const ledger_land_logs = await prisma.ledger_land_logs.upsert({
     *   create: {
     *     // ... data to create a Ledger_land_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ledger_land_logs we want to update
     *   }
     * })
     */
    upsert<T extends ledger_land_logsUpsertArgs>(args: SelectSubset<T, ledger_land_logsUpsertArgs<ExtArgs>>): Prisma__ledger_land_logsClient<$Result.GetResult<Prisma.$ledger_land_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ledger_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ledger_land_logsCountArgs} args - Arguments to filter Ledger_land_logs to count.
     * @example
     * // Count the number of Ledger_land_logs
     * const count = await prisma.ledger_land_logs.count({
     *   where: {
     *     // ... the filter for the Ledger_land_logs we want to count
     *   }
     * })
    **/
    count<T extends ledger_land_logsCountArgs>(
      args?: Subset<T, ledger_land_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ledger_land_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ledger_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ledger_land_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ledger_land_logsAggregateArgs>(args: Subset<T, Ledger_land_logsAggregateArgs>): Prisma.PrismaPromise<GetLedger_land_logsAggregateType<T>>

    /**
     * Group by Ledger_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ledger_land_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ledger_land_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ledger_land_logsGroupByArgs['orderBy'] }
        : { orderBy?: ledger_land_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ledger_land_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedger_land_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ledger_land_logs model
   */
  readonly fields: ledger_land_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ledger_land_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ledger_land_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ledger_land_logs model
   */
  interface ledger_land_logsFieldRefs {
    readonly id: FieldRef<"ledger_land_logs", 'Int'>
    readonly land_logs_loan_amount: FieldRef<"ledger_land_logs", 'Decimal'>
    readonly land_logs_cash_flow: FieldRef<"ledger_land_logs", 'Decimal'>
    readonly land_logs_interest: FieldRef<"ledger_land_logs", 'Decimal'>
    readonly land_logs_summary_net: FieldRef<"ledger_land_logs", 'Decimal'>
    readonly created_at: FieldRef<"ledger_land_logs", 'DateTime'>
    readonly updated_at: FieldRef<"ledger_land_logs", 'DateTime'>
    readonly deleted_at: FieldRef<"ledger_land_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ledger_land_logs findUnique
   */
  export type ledger_land_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which ledger_land_logs to fetch.
     */
    where: ledger_land_logsWhereUniqueInput
  }

  /**
   * ledger_land_logs findUniqueOrThrow
   */
  export type ledger_land_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which ledger_land_logs to fetch.
     */
    where: ledger_land_logsWhereUniqueInput
  }

  /**
   * ledger_land_logs findFirst
   */
  export type ledger_land_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which ledger_land_logs to fetch.
     */
    where?: ledger_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ledger_land_logs to fetch.
     */
    orderBy?: ledger_land_logsOrderByWithRelationInput | ledger_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ledger_land_logs.
     */
    cursor?: ledger_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ledger_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ledger_land_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ledger_land_logs.
     */
    distinct?: Ledger_land_logsScalarFieldEnum | Ledger_land_logsScalarFieldEnum[]
  }

  /**
   * ledger_land_logs findFirstOrThrow
   */
  export type ledger_land_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which ledger_land_logs to fetch.
     */
    where?: ledger_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ledger_land_logs to fetch.
     */
    orderBy?: ledger_land_logsOrderByWithRelationInput | ledger_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ledger_land_logs.
     */
    cursor?: ledger_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ledger_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ledger_land_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ledger_land_logs.
     */
    distinct?: Ledger_land_logsScalarFieldEnum | Ledger_land_logsScalarFieldEnum[]
  }

  /**
   * ledger_land_logs findMany
   */
  export type ledger_land_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which ledger_land_logs to fetch.
     */
    where?: ledger_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ledger_land_logs to fetch.
     */
    orderBy?: ledger_land_logsOrderByWithRelationInput | ledger_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ledger_land_logs.
     */
    cursor?: ledger_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ledger_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ledger_land_logs.
     */
    skip?: number
    distinct?: Ledger_land_logsScalarFieldEnum | Ledger_land_logsScalarFieldEnum[]
  }

  /**
   * ledger_land_logs create
   */
  export type ledger_land_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a ledger_land_logs.
     */
    data?: XOR<ledger_land_logsCreateInput, ledger_land_logsUncheckedCreateInput>
  }

  /**
   * ledger_land_logs createMany
   */
  export type ledger_land_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ledger_land_logs.
     */
    data: ledger_land_logsCreateManyInput | ledger_land_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ledger_land_logs update
   */
  export type ledger_land_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a ledger_land_logs.
     */
    data: XOR<ledger_land_logsUpdateInput, ledger_land_logsUncheckedUpdateInput>
    /**
     * Choose, which ledger_land_logs to update.
     */
    where: ledger_land_logsWhereUniqueInput
  }

  /**
   * ledger_land_logs updateMany
   */
  export type ledger_land_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ledger_land_logs.
     */
    data: XOR<ledger_land_logsUpdateManyMutationInput, ledger_land_logsUncheckedUpdateManyInput>
    /**
     * Filter which ledger_land_logs to update
     */
    where?: ledger_land_logsWhereInput
    /**
     * Limit how many ledger_land_logs to update.
     */
    limit?: number
  }

  /**
   * ledger_land_logs upsert
   */
  export type ledger_land_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the ledger_land_logs to update in case it exists.
     */
    where: ledger_land_logsWhereUniqueInput
    /**
     * In case the ledger_land_logs found by the `where` argument doesn't exist, create a new ledger_land_logs with this data.
     */
    create: XOR<ledger_land_logsCreateInput, ledger_land_logsUncheckedCreateInput>
    /**
     * In case the ledger_land_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ledger_land_logsUpdateInput, ledger_land_logsUncheckedUpdateInput>
  }

  /**
   * ledger_land_logs delete
   */
  export type ledger_land_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
    /**
     * Filter which ledger_land_logs to delete.
     */
    where: ledger_land_logsWhereUniqueInput
  }

  /**
   * ledger_land_logs deleteMany
   */
  export type ledger_land_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ledger_land_logs to delete
     */
    where?: ledger_land_logsWhereInput
    /**
     * Limit how many ledger_land_logs to delete.
     */
    limit?: number
  }

  /**
   * ledger_land_logs without action
   */
  export type ledger_land_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ledger_land_logs
     */
    select?: ledger_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ledger_land_logs
     */
    omit?: ledger_land_logsOmit<ExtArgs> | null
  }


  /**
   * Model loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    id: number | null
    loan_summary_no_vat: Decimal | null
    loan_payment_sum_installment: Decimal | null
    loan_sum_interest: Decimal | null
    loan_payment_year_counter: number | null
    loan_payment_interest: Decimal | null
    loan_summary_all: Decimal | null
    loan_payment_month: Decimal | null
    loan_payment_process: Decimal | null
    loan_tranfer: Decimal | null
    loan_payment_other: Decimal | null
    land_deed_status: number | null
    loan_really_pay: Decimal | null
    loan_close_payment: Decimal | null
    land_account_id: number | null
  }

  export type LoanSumAggregateOutputType = {
    id: number | null
    loan_summary_no_vat: Decimal | null
    loan_payment_sum_installment: Decimal | null
    loan_sum_interest: Decimal | null
    loan_payment_year_counter: number | null
    loan_payment_interest: Decimal | null
    loan_summary_all: Decimal | null
    loan_payment_month: Decimal | null
    loan_payment_process: Decimal | null
    loan_tranfer: Decimal | null
    loan_payment_other: Decimal | null
    land_deed_status: number | null
    loan_really_pay: Decimal | null
    loan_close_payment: Decimal | null
    land_account_id: number | null
  }

  export type LoanMinAggregateOutputType = {
    id: number | null
    loan_code: string | null
    loan_customer: string | null
    loan_address: string | null
    loan_number: string | null
    loan_area: string | null
    loan_employee: string | null
    loan_date_promise: Date | null
    loan_installment_date: Date | null
    loan_summary_no_vat: Decimal | null
    loan_payment_sum_installment: Decimal | null
    loan_sum_interest: Decimal | null
    loan_payment_year_counter: number | null
    loan_payment_interest: Decimal | null
    loan_summary_all: Decimal | null
    loan_payment_month: Decimal | null
    loan_payment_process: Decimal | null
    loan_type: $Enums.LoanType | null
    loan_tranfer: Decimal | null
    loan_payment_other: Decimal | null
    land_deed_status: number | null
    loan_status: string | null
    loan_remnark: string | null
    loan_really_pay: Decimal | null
    loan_close_payment: Decimal | null
    link_map: string | null
    land_account_id: number | null
    land_account_name: string | null
    loan_date_close: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type LoanMaxAggregateOutputType = {
    id: number | null
    loan_code: string | null
    loan_customer: string | null
    loan_address: string | null
    loan_number: string | null
    loan_area: string | null
    loan_employee: string | null
    loan_date_promise: Date | null
    loan_installment_date: Date | null
    loan_summary_no_vat: Decimal | null
    loan_payment_sum_installment: Decimal | null
    loan_sum_interest: Decimal | null
    loan_payment_year_counter: number | null
    loan_payment_interest: Decimal | null
    loan_summary_all: Decimal | null
    loan_payment_month: Decimal | null
    loan_payment_process: Decimal | null
    loan_type: $Enums.LoanType | null
    loan_tranfer: Decimal | null
    loan_payment_other: Decimal | null
    land_deed_status: number | null
    loan_status: string | null
    loan_remnark: string | null
    loan_really_pay: Decimal | null
    loan_close_payment: Decimal | null
    link_map: string | null
    land_account_id: number | null
    land_account_name: string | null
    loan_date_close: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type LoanCountAggregateOutputType = {
    id: number
    loan_code: number
    loan_customer: number
    loan_address: number
    loan_number: number
    loan_area: number
    loan_employee: number
    loan_date_promise: number
    loan_installment_date: number
    loan_summary_no_vat: number
    loan_payment_sum_installment: number
    loan_sum_interest: number
    loan_payment_year_counter: number
    loan_payment_interest: number
    loan_summary_all: number
    loan_payment_month: number
    loan_payment_process: number
    loan_type: number
    loan_tranfer: number
    loan_payment_other: number
    land_deed_status: number
    loan_status: number
    loan_remnark: number
    loan_really_pay: number
    loan_close_payment: number
    link_map: number
    land_account_id: number
    land_account_name: number
    loan_date_close: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    id?: true
    loan_summary_no_vat?: true
    loan_payment_sum_installment?: true
    loan_sum_interest?: true
    loan_payment_year_counter?: true
    loan_payment_interest?: true
    loan_summary_all?: true
    loan_payment_month?: true
    loan_payment_process?: true
    loan_tranfer?: true
    loan_payment_other?: true
    land_deed_status?: true
    loan_really_pay?: true
    loan_close_payment?: true
    land_account_id?: true
  }

  export type LoanSumAggregateInputType = {
    id?: true
    loan_summary_no_vat?: true
    loan_payment_sum_installment?: true
    loan_sum_interest?: true
    loan_payment_year_counter?: true
    loan_payment_interest?: true
    loan_summary_all?: true
    loan_payment_month?: true
    loan_payment_process?: true
    loan_tranfer?: true
    loan_payment_other?: true
    land_deed_status?: true
    loan_really_pay?: true
    loan_close_payment?: true
    land_account_id?: true
  }

  export type LoanMinAggregateInputType = {
    id?: true
    loan_code?: true
    loan_customer?: true
    loan_address?: true
    loan_number?: true
    loan_area?: true
    loan_employee?: true
    loan_date_promise?: true
    loan_installment_date?: true
    loan_summary_no_vat?: true
    loan_payment_sum_installment?: true
    loan_sum_interest?: true
    loan_payment_year_counter?: true
    loan_payment_interest?: true
    loan_summary_all?: true
    loan_payment_month?: true
    loan_payment_process?: true
    loan_type?: true
    loan_tranfer?: true
    loan_payment_other?: true
    land_deed_status?: true
    loan_status?: true
    loan_remnark?: true
    loan_really_pay?: true
    loan_close_payment?: true
    link_map?: true
    land_account_id?: true
    land_account_name?: true
    loan_date_close?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type LoanMaxAggregateInputType = {
    id?: true
    loan_code?: true
    loan_customer?: true
    loan_address?: true
    loan_number?: true
    loan_area?: true
    loan_employee?: true
    loan_date_promise?: true
    loan_installment_date?: true
    loan_summary_no_vat?: true
    loan_payment_sum_installment?: true
    loan_sum_interest?: true
    loan_payment_year_counter?: true
    loan_payment_interest?: true
    loan_summary_all?: true
    loan_payment_month?: true
    loan_payment_process?: true
    loan_type?: true
    loan_tranfer?: true
    loan_payment_other?: true
    land_deed_status?: true
    loan_status?: true
    loan_remnark?: true
    loan_really_pay?: true
    loan_close_payment?: true
    link_map?: true
    land_account_id?: true
    land_account_name?: true
    loan_date_close?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type LoanCountAggregateInputType = {
    id?: true
    loan_code?: true
    loan_customer?: true
    loan_address?: true
    loan_number?: true
    loan_area?: true
    loan_employee?: true
    loan_date_promise?: true
    loan_installment_date?: true
    loan_summary_no_vat?: true
    loan_payment_sum_installment?: true
    loan_sum_interest?: true
    loan_payment_year_counter?: true
    loan_payment_interest?: true
    loan_summary_all?: true
    loan_payment_month?: true
    loan_payment_process?: true
    loan_type?: true
    loan_tranfer?: true
    loan_payment_other?: true
    land_deed_status?: true
    loan_status?: true
    loan_remnark?: true
    loan_really_pay?: true
    loan_close_payment?: true
    link_map?: true
    land_account_id?: true
    land_account_name?: true
    loan_date_close?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan to aggregate.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type loanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
    orderBy?: loanOrderByWithAggregationInput | loanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: loanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    id: number
    loan_code: string | null
    loan_customer: string | null
    loan_address: string | null
    loan_number: string | null
    loan_area: string | null
    loan_employee: string | null
    loan_date_promise: Date | null
    loan_installment_date: Date | null
    loan_summary_no_vat: Decimal
    loan_payment_sum_installment: Decimal
    loan_sum_interest: Decimal
    loan_payment_year_counter: number | null
    loan_payment_interest: Decimal
    loan_summary_all: Decimal
    loan_payment_month: Decimal
    loan_payment_process: Decimal
    loan_type: $Enums.LoanType
    loan_tranfer: Decimal
    loan_payment_other: Decimal
    land_deed_status: number
    loan_status: string | null
    loan_remnark: string | null
    loan_really_pay: Decimal | null
    loan_close_payment: Decimal
    link_map: string | null
    land_account_id: number | null
    land_account_name: string | null
    loan_date_close: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends loanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type loanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loan_code?: boolean
    loan_customer?: boolean
    loan_address?: boolean
    loan_number?: boolean
    loan_area?: boolean
    loan_employee?: boolean
    loan_date_promise?: boolean
    loan_installment_date?: boolean
    loan_summary_no_vat?: boolean
    loan_payment_sum_installment?: boolean
    loan_sum_interest?: boolean
    loan_payment_year_counter?: boolean
    loan_payment_interest?: boolean
    loan_summary_all?: boolean
    loan_payment_month?: boolean
    loan_payment_process?: boolean
    loan_type?: boolean
    loan_tranfer?: boolean
    loan_payment_other?: boolean
    land_deed_status?: boolean
    loan_status?: boolean
    loan_remnark?: boolean
    loan_really_pay?: boolean
    loan_close_payment?: boolean
    link_map?: boolean
    land_account_id?: boolean
    land_account_name?: boolean
    loan_date_close?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["loan"]>



  export type loanSelectScalar = {
    id?: boolean
    loan_code?: boolean
    loan_customer?: boolean
    loan_address?: boolean
    loan_number?: boolean
    loan_area?: boolean
    loan_employee?: boolean
    loan_date_promise?: boolean
    loan_installment_date?: boolean
    loan_summary_no_vat?: boolean
    loan_payment_sum_installment?: boolean
    loan_sum_interest?: boolean
    loan_payment_year_counter?: boolean
    loan_payment_interest?: boolean
    loan_summary_all?: boolean
    loan_payment_month?: boolean
    loan_payment_process?: boolean
    loan_type?: boolean
    loan_tranfer?: boolean
    loan_payment_other?: boolean
    land_deed_status?: boolean
    loan_status?: boolean
    loan_remnark?: boolean
    loan_really_pay?: boolean
    loan_close_payment?: boolean
    link_map?: boolean
    land_account_id?: boolean
    land_account_name?: boolean
    loan_date_close?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type loanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loan_code" | "loan_customer" | "loan_address" | "loan_number" | "loan_area" | "loan_employee" | "loan_date_promise" | "loan_installment_date" | "loan_summary_no_vat" | "loan_payment_sum_installment" | "loan_sum_interest" | "loan_payment_year_counter" | "loan_payment_interest" | "loan_summary_all" | "loan_payment_month" | "loan_payment_process" | "loan_type" | "loan_tranfer" | "loan_payment_other" | "land_deed_status" | "loan_status" | "loan_remnark" | "loan_really_pay" | "loan_close_payment" | "link_map" | "land_account_id" | "land_account_name" | "loan_date_close" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["loan"]>

  export type $loanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loan_code: string | null
      loan_customer: string | null
      loan_address: string | null
      loan_number: string | null
      loan_area: string | null
      loan_employee: string | null
      loan_date_promise: Date | null
      loan_installment_date: Date | null
      loan_summary_no_vat: Prisma.Decimal
      loan_payment_sum_installment: Prisma.Decimal
      loan_sum_interest: Prisma.Decimal
      loan_payment_year_counter: number | null
      loan_payment_interest: Prisma.Decimal
      loan_summary_all: Prisma.Decimal
      loan_payment_month: Prisma.Decimal
      loan_payment_process: Prisma.Decimal
      loan_type: $Enums.LoanType
      loan_tranfer: Prisma.Decimal
      loan_payment_other: Prisma.Decimal
      land_deed_status: number
      loan_status: string | null
      loan_remnark: string | null
      loan_really_pay: Prisma.Decimal | null
      loan_close_payment: Prisma.Decimal
      link_map: string | null
      land_account_id: number | null
      land_account_name: string | null
      loan_date_close: Date | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type loanGetPayload<S extends boolean | null | undefined | loanDefaultArgs> = $Result.GetResult<Prisma.$loanPayload, S>

  type loanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface loanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan'], meta: { name: 'loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {loanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loanFindUniqueArgs>(args: SelectSubset<T, loanFindUniqueArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loanFindUniqueOrThrowArgs>(args: SelectSubset<T, loanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loanFindFirstArgs>(args?: SelectSubset<T, loanFindFirstArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loanFindFirstOrThrowArgs>(args?: SelectSubset<T, loanFindFirstOrThrowArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends loanFindManyArgs>(args?: SelectSubset<T, loanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan.
     * @param {loanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends loanCreateArgs>(args: SelectSubset<T, loanCreateArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loans.
     * @param {loanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loanCreateManyArgs>(args?: SelectSubset<T, loanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Loan.
     * @param {loanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends loanDeleteArgs>(args: SelectSubset<T, loanDeleteArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan.
     * @param {loanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loanUpdateArgs>(args: SelectSubset<T, loanUpdateArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loans.
     * @param {loanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loanDeleteManyArgs>(args?: SelectSubset<T, loanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loanUpdateManyArgs>(args: SelectSubset<T, loanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loan.
     * @param {loanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends loanUpsertArgs>(args: SelectSubset<T, loanUpsertArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends loanCountArgs>(
      args?: Subset<T, loanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loanGroupByArgs['orderBy'] }
        : { orderBy?: loanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loan model
   */
  readonly fields: loanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loan model
   */
  interface loanFieldRefs {
    readonly id: FieldRef<"loan", 'Int'>
    readonly loan_code: FieldRef<"loan", 'String'>
    readonly loan_customer: FieldRef<"loan", 'String'>
    readonly loan_address: FieldRef<"loan", 'String'>
    readonly loan_number: FieldRef<"loan", 'String'>
    readonly loan_area: FieldRef<"loan", 'String'>
    readonly loan_employee: FieldRef<"loan", 'String'>
    readonly loan_date_promise: FieldRef<"loan", 'DateTime'>
    readonly loan_installment_date: FieldRef<"loan", 'DateTime'>
    readonly loan_summary_no_vat: FieldRef<"loan", 'Decimal'>
    readonly loan_payment_sum_installment: FieldRef<"loan", 'Decimal'>
    readonly loan_sum_interest: FieldRef<"loan", 'Decimal'>
    readonly loan_payment_year_counter: FieldRef<"loan", 'Int'>
    readonly loan_payment_interest: FieldRef<"loan", 'Decimal'>
    readonly loan_summary_all: FieldRef<"loan", 'Decimal'>
    readonly loan_payment_month: FieldRef<"loan", 'Decimal'>
    readonly loan_payment_process: FieldRef<"loan", 'Decimal'>
    readonly loan_type: FieldRef<"loan", 'LoanType'>
    readonly loan_tranfer: FieldRef<"loan", 'Decimal'>
    readonly loan_payment_other: FieldRef<"loan", 'Decimal'>
    readonly land_deed_status: FieldRef<"loan", 'Int'>
    readonly loan_status: FieldRef<"loan", 'String'>
    readonly loan_remnark: FieldRef<"loan", 'String'>
    readonly loan_really_pay: FieldRef<"loan", 'Decimal'>
    readonly loan_close_payment: FieldRef<"loan", 'Decimal'>
    readonly link_map: FieldRef<"loan", 'String'>
    readonly land_account_id: FieldRef<"loan", 'Int'>
    readonly land_account_name: FieldRef<"loan", 'String'>
    readonly loan_date_close: FieldRef<"loan", 'DateTime'>
    readonly created_at: FieldRef<"loan", 'DateTime'>
    readonly updated_at: FieldRef<"loan", 'DateTime'>
    readonly deleted_at: FieldRef<"loan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loan findUnique
   */
  export type loanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan findUniqueOrThrow
   */
  export type loanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan findFirst
   */
  export type loanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan findFirstOrThrow
   */
  export type loanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan findMany
   */
  export type loanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan create
   */
  export type loanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * The data needed to create a loan.
     */
    data: XOR<loanCreateInput, loanUncheckedCreateInput>
  }

  /**
   * loan createMany
   */
  export type loanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loan update
   */
  export type loanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * The data needed to update a loan.
     */
    data: XOR<loanUpdateInput, loanUncheckedUpdateInput>
    /**
     * Choose, which loan to update.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan updateMany
   */
  export type loanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to update.
     */
    limit?: number
  }

  /**
   * loan upsert
   */
  export type loanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * The filter to search for the loan to update in case it exists.
     */
    where: loanWhereUniqueInput
    /**
     * In case the loan found by the `where` argument doesn't exist, create a new loan with this data.
     */
    create: XOR<loanCreateInput, loanUncheckedCreateInput>
    /**
     * In case the loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loanUpdateInput, loanUncheckedUpdateInput>
  }

  /**
   * loan delete
   */
  export type loanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Filter which loan to delete.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan deleteMany
   */
  export type loanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to delete
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to delete.
     */
    limit?: number
  }

  /**
   * loan without action
   */
  export type loanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
  }


  /**
   * Model loan_customer
   */

  export type AggregateLoan_customer = {
    _count: Loan_customerCountAggregateOutputType | null
    _avg: Loan_customerAvgAggregateOutputType | null
    _sum: Loan_customerSumAggregateOutputType | null
    _min: Loan_customerMinAggregateOutputType | null
    _max: Loan_customerMaxAggregateOutputType | null
  }

  export type Loan_customerAvgAggregateOutputType = {
    id: number | null
  }

  export type Loan_customerSumAggregateOutputType = {
    id: number | null
  }

  export type Loan_customerMinAggregateOutputType = {
    id: number | null
    loan_code: string | null
    customer_fullname: string | null
    customer_phone: string | null
    customer_birthday: Date | null
    customer_card_id: string | null
    customer_email: string | null
    customer_gender: $Enums.CustomerGender | null
    customer_address: string | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Loan_customerMaxAggregateOutputType = {
    id: number | null
    loan_code: string | null
    customer_fullname: string | null
    customer_phone: string | null
    customer_birthday: Date | null
    customer_card_id: string | null
    customer_email: string | null
    customer_gender: $Enums.CustomerGender | null
    customer_address: string | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Loan_customerCountAggregateOutputType = {
    id: number
    loan_code: number
    customer_fullname: number
    customer_phone: number
    customer_birthday: number
    customer_card_id: number
    customer_email: number
    customer_gender: number
    customer_address: number
    img: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Loan_customerAvgAggregateInputType = {
    id?: true
  }

  export type Loan_customerSumAggregateInputType = {
    id?: true
  }

  export type Loan_customerMinAggregateInputType = {
    id?: true
    loan_code?: true
    customer_fullname?: true
    customer_phone?: true
    customer_birthday?: true
    customer_card_id?: true
    customer_email?: true
    customer_gender?: true
    customer_address?: true
    img?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Loan_customerMaxAggregateInputType = {
    id?: true
    loan_code?: true
    customer_fullname?: true
    customer_phone?: true
    customer_birthday?: true
    customer_card_id?: true
    customer_email?: true
    customer_gender?: true
    customer_address?: true
    img?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Loan_customerCountAggregateInputType = {
    id?: true
    loan_code?: true
    customer_fullname?: true
    customer_phone?: true
    customer_birthday?: true
    customer_card_id?: true
    customer_email?: true
    customer_gender?: true
    customer_address?: true
    img?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Loan_customerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_customer to aggregate.
     */
    where?: loan_customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_customers to fetch.
     */
    orderBy?: loan_customerOrderByWithRelationInput | loan_customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loan_customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loan_customers
    **/
    _count?: true | Loan_customerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loan_customerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loan_customerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loan_customerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loan_customerMaxAggregateInputType
  }

  export type GetLoan_customerAggregateType<T extends Loan_customerAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan_customer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan_customer[P]>
      : GetScalarType<T[P], AggregateLoan_customer[P]>
  }




  export type loan_customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_customerWhereInput
    orderBy?: loan_customerOrderByWithAggregationInput | loan_customerOrderByWithAggregationInput[]
    by: Loan_customerScalarFieldEnum[] | Loan_customerScalarFieldEnum
    having?: loan_customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loan_customerCountAggregateInputType | true
    _avg?: Loan_customerAvgAggregateInputType
    _sum?: Loan_customerSumAggregateInputType
    _min?: Loan_customerMinAggregateInputType
    _max?: Loan_customerMaxAggregateInputType
  }

  export type Loan_customerGroupByOutputType = {
    id: number
    loan_code: string
    customer_fullname: string | null
    customer_phone: string | null
    customer_birthday: Date | null
    customer_card_id: string | null
    customer_email: string | null
    customer_gender: $Enums.CustomerGender | null
    customer_address: string | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Loan_customerCountAggregateOutputType | null
    _avg: Loan_customerAvgAggregateOutputType | null
    _sum: Loan_customerSumAggregateOutputType | null
    _min: Loan_customerMinAggregateOutputType | null
    _max: Loan_customerMaxAggregateOutputType | null
  }

  type GetLoan_customerGroupByPayload<T extends loan_customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loan_customerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loan_customerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loan_customerGroupByOutputType[P]>
            : GetScalarType<T[P], Loan_customerGroupByOutputType[P]>
        }
      >
    >


  export type loan_customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loan_code?: boolean
    customer_fullname?: boolean
    customer_phone?: boolean
    customer_birthday?: boolean
    customer_card_id?: boolean
    customer_email?: boolean
    customer_gender?: boolean
    customer_address?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["loan_customer"]>



  export type loan_customerSelectScalar = {
    id?: boolean
    loan_code?: boolean
    customer_fullname?: boolean
    customer_phone?: boolean
    customer_birthday?: boolean
    customer_card_id?: boolean
    customer_email?: boolean
    customer_gender?: boolean
    customer_address?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type loan_customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loan_code" | "customer_fullname" | "customer_phone" | "customer_birthday" | "customer_card_id" | "customer_email" | "customer_gender" | "customer_address" | "img" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["loan_customer"]>

  export type $loan_customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loan_customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loan_code: string
      customer_fullname: string | null
      customer_phone: string | null
      customer_birthday: Date | null
      customer_card_id: string | null
      customer_email: string | null
      customer_gender: $Enums.CustomerGender | null
      customer_address: string | null
      img: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["loan_customer"]>
    composites: {}
  }

  type loan_customerGetPayload<S extends boolean | null | undefined | loan_customerDefaultArgs> = $Result.GetResult<Prisma.$loan_customerPayload, S>

  type loan_customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loan_customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loan_customerCountAggregateInputType | true
    }

  export interface loan_customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan_customer'], meta: { name: 'loan_customer' } }
    /**
     * Find zero or one Loan_customer that matches the filter.
     * @param {loan_customerFindUniqueArgs} args - Arguments to find a Loan_customer
     * @example
     * // Get one Loan_customer
     * const loan_customer = await prisma.loan_customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loan_customerFindUniqueArgs>(args: SelectSubset<T, loan_customerFindUniqueArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan_customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loan_customerFindUniqueOrThrowArgs} args - Arguments to find a Loan_customer
     * @example
     * // Get one Loan_customer
     * const loan_customer = await prisma.loan_customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loan_customerFindUniqueOrThrowArgs>(args: SelectSubset<T, loan_customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_customerFindFirstArgs} args - Arguments to find a Loan_customer
     * @example
     * // Get one Loan_customer
     * const loan_customer = await prisma.loan_customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loan_customerFindFirstArgs>(args?: SelectSubset<T, loan_customerFindFirstArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_customerFindFirstOrThrowArgs} args - Arguments to find a Loan_customer
     * @example
     * // Get one Loan_customer
     * const loan_customer = await prisma.loan_customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loan_customerFindFirstOrThrowArgs>(args?: SelectSubset<T, loan_customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loan_customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loan_customers
     * const loan_customers = await prisma.loan_customer.findMany()
     * 
     * // Get first 10 Loan_customers
     * const loan_customers = await prisma.loan_customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loan_customerWithIdOnly = await prisma.loan_customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends loan_customerFindManyArgs>(args?: SelectSubset<T, loan_customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan_customer.
     * @param {loan_customerCreateArgs} args - Arguments to create a Loan_customer.
     * @example
     * // Create one Loan_customer
     * const Loan_customer = await prisma.loan_customer.create({
     *   data: {
     *     // ... data to create a Loan_customer
     *   }
     * })
     * 
     */
    create<T extends loan_customerCreateArgs>(args: SelectSubset<T, loan_customerCreateArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loan_customers.
     * @param {loan_customerCreateManyArgs} args - Arguments to create many Loan_customers.
     * @example
     * // Create many Loan_customers
     * const loan_customer = await prisma.loan_customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loan_customerCreateManyArgs>(args?: SelectSubset<T, loan_customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Loan_customer.
     * @param {loan_customerDeleteArgs} args - Arguments to delete one Loan_customer.
     * @example
     * // Delete one Loan_customer
     * const Loan_customer = await prisma.loan_customer.delete({
     *   where: {
     *     // ... filter to delete one Loan_customer
     *   }
     * })
     * 
     */
    delete<T extends loan_customerDeleteArgs>(args: SelectSubset<T, loan_customerDeleteArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan_customer.
     * @param {loan_customerUpdateArgs} args - Arguments to update one Loan_customer.
     * @example
     * // Update one Loan_customer
     * const loan_customer = await prisma.loan_customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loan_customerUpdateArgs>(args: SelectSubset<T, loan_customerUpdateArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loan_customers.
     * @param {loan_customerDeleteManyArgs} args - Arguments to filter Loan_customers to delete.
     * @example
     * // Delete a few Loan_customers
     * const { count } = await prisma.loan_customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loan_customerDeleteManyArgs>(args?: SelectSubset<T, loan_customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loan_customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loan_customers
     * const loan_customer = await prisma.loan_customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loan_customerUpdateManyArgs>(args: SelectSubset<T, loan_customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loan_customer.
     * @param {loan_customerUpsertArgs} args - Arguments to update or create a Loan_customer.
     * @example
     * // Update or create a Loan_customer
     * const loan_customer = await prisma.loan_customer.upsert({
     *   create: {
     *     // ... data to create a Loan_customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan_customer we want to update
     *   }
     * })
     */
    upsert<T extends loan_customerUpsertArgs>(args: SelectSubset<T, loan_customerUpsertArgs<ExtArgs>>): Prisma__loan_customerClient<$Result.GetResult<Prisma.$loan_customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loan_customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_customerCountArgs} args - Arguments to filter Loan_customers to count.
     * @example
     * // Count the number of Loan_customers
     * const count = await prisma.loan_customer.count({
     *   where: {
     *     // ... the filter for the Loan_customers we want to count
     *   }
     * })
    **/
    count<T extends loan_customerCountArgs>(
      args?: Subset<T, loan_customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loan_customerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan_customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loan_customerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Loan_customerAggregateArgs>(args: Subset<T, Loan_customerAggregateArgs>): Prisma.PrismaPromise<GetLoan_customerAggregateType<T>>

    /**
     * Group by Loan_customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loan_customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loan_customerGroupByArgs['orderBy'] }
        : { orderBy?: loan_customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loan_customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoan_customerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loan_customer model
   */
  readonly fields: loan_customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan_customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loan_customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loan_customer model
   */
  interface loan_customerFieldRefs {
    readonly id: FieldRef<"loan_customer", 'Int'>
    readonly loan_code: FieldRef<"loan_customer", 'String'>
    readonly customer_fullname: FieldRef<"loan_customer", 'String'>
    readonly customer_phone: FieldRef<"loan_customer", 'String'>
    readonly customer_birthday: FieldRef<"loan_customer", 'DateTime'>
    readonly customer_card_id: FieldRef<"loan_customer", 'String'>
    readonly customer_email: FieldRef<"loan_customer", 'String'>
    readonly customer_gender: FieldRef<"loan_customer", 'CustomerGender'>
    readonly customer_address: FieldRef<"loan_customer", 'String'>
    readonly img: FieldRef<"loan_customer", 'String'>
    readonly created_at: FieldRef<"loan_customer", 'DateTime'>
    readonly updated_at: FieldRef<"loan_customer", 'DateTime'>
    readonly deleted_at: FieldRef<"loan_customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loan_customer findUnique
   */
  export type loan_customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * Filter, which loan_customer to fetch.
     */
    where: loan_customerWhereUniqueInput
  }

  /**
   * loan_customer findUniqueOrThrow
   */
  export type loan_customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * Filter, which loan_customer to fetch.
     */
    where: loan_customerWhereUniqueInput
  }

  /**
   * loan_customer findFirst
   */
  export type loan_customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * Filter, which loan_customer to fetch.
     */
    where?: loan_customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_customers to fetch.
     */
    orderBy?: loan_customerOrderByWithRelationInput | loan_customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_customers.
     */
    cursor?: loan_customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_customers.
     */
    distinct?: Loan_customerScalarFieldEnum | Loan_customerScalarFieldEnum[]
  }

  /**
   * loan_customer findFirstOrThrow
   */
  export type loan_customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * Filter, which loan_customer to fetch.
     */
    where?: loan_customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_customers to fetch.
     */
    orderBy?: loan_customerOrderByWithRelationInput | loan_customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_customers.
     */
    cursor?: loan_customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_customers.
     */
    distinct?: Loan_customerScalarFieldEnum | Loan_customerScalarFieldEnum[]
  }

  /**
   * loan_customer findMany
   */
  export type loan_customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * Filter, which loan_customers to fetch.
     */
    where?: loan_customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_customers to fetch.
     */
    orderBy?: loan_customerOrderByWithRelationInput | loan_customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loan_customers.
     */
    cursor?: loan_customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_customers.
     */
    skip?: number
    distinct?: Loan_customerScalarFieldEnum | Loan_customerScalarFieldEnum[]
  }

  /**
   * loan_customer create
   */
  export type loan_customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * The data needed to create a loan_customer.
     */
    data: XOR<loan_customerCreateInput, loan_customerUncheckedCreateInput>
  }

  /**
   * loan_customer createMany
   */
  export type loan_customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loan_customers.
     */
    data: loan_customerCreateManyInput | loan_customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loan_customer update
   */
  export type loan_customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * The data needed to update a loan_customer.
     */
    data: XOR<loan_customerUpdateInput, loan_customerUncheckedUpdateInput>
    /**
     * Choose, which loan_customer to update.
     */
    where: loan_customerWhereUniqueInput
  }

  /**
   * loan_customer updateMany
   */
  export type loan_customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loan_customers.
     */
    data: XOR<loan_customerUpdateManyMutationInput, loan_customerUncheckedUpdateManyInput>
    /**
     * Filter which loan_customers to update
     */
    where?: loan_customerWhereInput
    /**
     * Limit how many loan_customers to update.
     */
    limit?: number
  }

  /**
   * loan_customer upsert
   */
  export type loan_customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * The filter to search for the loan_customer to update in case it exists.
     */
    where: loan_customerWhereUniqueInput
    /**
     * In case the loan_customer found by the `where` argument doesn't exist, create a new loan_customer with this data.
     */
    create: XOR<loan_customerCreateInput, loan_customerUncheckedCreateInput>
    /**
     * In case the loan_customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loan_customerUpdateInput, loan_customerUncheckedUpdateInput>
  }

  /**
   * loan_customer delete
   */
  export type loan_customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
    /**
     * Filter which loan_customer to delete.
     */
    where: loan_customerWhereUniqueInput
  }

  /**
   * loan_customer deleteMany
   */
  export type loan_customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_customers to delete
     */
    where?: loan_customerWhereInput
    /**
     * Limit how many loan_customers to delete.
     */
    limit?: number
  }

  /**
   * loan_customer without action
   */
  export type loan_customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_customer
     */
    select?: loan_customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_customer
     */
    omit?: loan_customerOmit<ExtArgs> | null
  }


  /**
   * Model loan_payment
   */

  export type AggregateLoan_payment = {
    _count: Loan_paymentCountAggregateOutputType | null
    _avg: Loan_paymentAvgAggregateOutputType | null
    _sum: Loan_paymentSumAggregateOutputType | null
    _min: Loan_paymentMinAggregateOutputType | null
    _max: Loan_paymentMaxAggregateOutputType | null
  }

  export type Loan_paymentAvgAggregateOutputType = {
    id: number | null
    loan_payment_amount: Decimal | null
    loan_change: Decimal | null
    loan_interest: Decimal | null
    payment_file_price: Decimal | null
    land_account_id: number | null
    loan_balance: Decimal | null
  }

  export type Loan_paymentSumAggregateOutputType = {
    id: number | null
    loan_payment_amount: Decimal | null
    loan_change: Decimal | null
    loan_interest: Decimal | null
    payment_file_price: Decimal | null
    land_account_id: number | null
    loan_balance: Decimal | null
  }

  export type Loan_paymentMinAggregateOutputType = {
    id: number | null
    loan_code: string | null
    loan_payment_amount: Decimal | null
    loan_change: Decimal | null
    loan_interest: Decimal | null
    loan_employee: string | null
    loan_payment_type: string | null
    loan_payment_pay_type: string | null
    loan_payment_installment: string | null
    loan_payment_customer: string | null
    loan_payment_src: string | null
    payment_file_date: Date | null
    payment_file_time: Date | null
    payment_file_ref_no: string | null
    payment_file_price: Decimal | null
    land_account_id: number | null
    land_account_name: string | null
    loan_payment_date_fix: Date | null
    loan_payment_date: Date | null
    loan_balance: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Loan_paymentMaxAggregateOutputType = {
    id: number | null
    loan_code: string | null
    loan_payment_amount: Decimal | null
    loan_change: Decimal | null
    loan_interest: Decimal | null
    loan_employee: string | null
    loan_payment_type: string | null
    loan_payment_pay_type: string | null
    loan_payment_installment: string | null
    loan_payment_customer: string | null
    loan_payment_src: string | null
    payment_file_date: Date | null
    payment_file_time: Date | null
    payment_file_ref_no: string | null
    payment_file_price: Decimal | null
    land_account_id: number | null
    land_account_name: string | null
    loan_payment_date_fix: Date | null
    loan_payment_date: Date | null
    loan_balance: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Loan_paymentCountAggregateOutputType = {
    id: number
    loan_code: number
    loan_payment_amount: number
    loan_change: number
    loan_interest: number
    loan_employee: number
    loan_payment_type: number
    loan_payment_pay_type: number
    loan_payment_installment: number
    loan_payment_customer: number
    loan_payment_src: number
    payment_file_date: number
    payment_file_time: number
    payment_file_ref_no: number
    payment_file_price: number
    land_account_id: number
    land_account_name: number
    loan_payment_date_fix: number
    loan_payment_date: number
    loan_balance: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Loan_paymentAvgAggregateInputType = {
    id?: true
    loan_payment_amount?: true
    loan_change?: true
    loan_interest?: true
    payment_file_price?: true
    land_account_id?: true
    loan_balance?: true
  }

  export type Loan_paymentSumAggregateInputType = {
    id?: true
    loan_payment_amount?: true
    loan_change?: true
    loan_interest?: true
    payment_file_price?: true
    land_account_id?: true
    loan_balance?: true
  }

  export type Loan_paymentMinAggregateInputType = {
    id?: true
    loan_code?: true
    loan_payment_amount?: true
    loan_change?: true
    loan_interest?: true
    loan_employee?: true
    loan_payment_type?: true
    loan_payment_pay_type?: true
    loan_payment_installment?: true
    loan_payment_customer?: true
    loan_payment_src?: true
    payment_file_date?: true
    payment_file_time?: true
    payment_file_ref_no?: true
    payment_file_price?: true
    land_account_id?: true
    land_account_name?: true
    loan_payment_date_fix?: true
    loan_payment_date?: true
    loan_balance?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Loan_paymentMaxAggregateInputType = {
    id?: true
    loan_code?: true
    loan_payment_amount?: true
    loan_change?: true
    loan_interest?: true
    loan_employee?: true
    loan_payment_type?: true
    loan_payment_pay_type?: true
    loan_payment_installment?: true
    loan_payment_customer?: true
    loan_payment_src?: true
    payment_file_date?: true
    payment_file_time?: true
    payment_file_ref_no?: true
    payment_file_price?: true
    land_account_id?: true
    land_account_name?: true
    loan_payment_date_fix?: true
    loan_payment_date?: true
    loan_balance?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Loan_paymentCountAggregateInputType = {
    id?: true
    loan_code?: true
    loan_payment_amount?: true
    loan_change?: true
    loan_interest?: true
    loan_employee?: true
    loan_payment_type?: true
    loan_payment_pay_type?: true
    loan_payment_installment?: true
    loan_payment_customer?: true
    loan_payment_src?: true
    payment_file_date?: true
    payment_file_time?: true
    payment_file_ref_no?: true
    payment_file_price?: true
    land_account_id?: true
    land_account_name?: true
    loan_payment_date_fix?: true
    loan_payment_date?: true
    loan_balance?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Loan_paymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_payment to aggregate.
     */
    where?: loan_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentOrderByWithRelationInput | loan_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loan_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loan_payments
    **/
    _count?: true | Loan_paymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loan_paymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loan_paymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loan_paymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loan_paymentMaxAggregateInputType
  }

  export type GetLoan_paymentAggregateType<T extends Loan_paymentAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan_payment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan_payment[P]>
      : GetScalarType<T[P], AggregateLoan_payment[P]>
  }




  export type loan_paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_paymentWhereInput
    orderBy?: loan_paymentOrderByWithAggregationInput | loan_paymentOrderByWithAggregationInput[]
    by: Loan_paymentScalarFieldEnum[] | Loan_paymentScalarFieldEnum
    having?: loan_paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loan_paymentCountAggregateInputType | true
    _avg?: Loan_paymentAvgAggregateInputType
    _sum?: Loan_paymentSumAggregateInputType
    _min?: Loan_paymentMinAggregateInputType
    _max?: Loan_paymentMaxAggregateInputType
  }

  export type Loan_paymentGroupByOutputType = {
    id: number
    loan_code: string | null
    loan_payment_amount: Decimal
    loan_change: Decimal
    loan_interest: Decimal
    loan_employee: string | null
    loan_payment_type: string | null
    loan_payment_pay_type: string | null
    loan_payment_installment: string | null
    loan_payment_customer: string | null
    loan_payment_src: string | null
    payment_file_date: Date | null
    payment_file_time: Date | null
    payment_file_ref_no: string | null
    payment_file_price: Decimal | null
    land_account_id: number | null
    land_account_name: string | null
    loan_payment_date_fix: Date | null
    loan_payment_date: Date | null
    loan_balance: Decimal
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Loan_paymentCountAggregateOutputType | null
    _avg: Loan_paymentAvgAggregateOutputType | null
    _sum: Loan_paymentSumAggregateOutputType | null
    _min: Loan_paymentMinAggregateOutputType | null
    _max: Loan_paymentMaxAggregateOutputType | null
  }

  type GetLoan_paymentGroupByPayload<T extends loan_paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loan_paymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loan_paymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loan_paymentGroupByOutputType[P]>
            : GetScalarType<T[P], Loan_paymentGroupByOutputType[P]>
        }
      >
    >


  export type loan_paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loan_code?: boolean
    loan_payment_amount?: boolean
    loan_change?: boolean
    loan_interest?: boolean
    loan_employee?: boolean
    loan_payment_type?: boolean
    loan_payment_pay_type?: boolean
    loan_payment_installment?: boolean
    loan_payment_customer?: boolean
    loan_payment_src?: boolean
    payment_file_date?: boolean
    payment_file_time?: boolean
    payment_file_ref_no?: boolean
    payment_file_price?: boolean
    land_account_id?: boolean
    land_account_name?: boolean
    loan_payment_date_fix?: boolean
    loan_payment_date?: boolean
    loan_balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["loan_payment"]>



  export type loan_paymentSelectScalar = {
    id?: boolean
    loan_code?: boolean
    loan_payment_amount?: boolean
    loan_change?: boolean
    loan_interest?: boolean
    loan_employee?: boolean
    loan_payment_type?: boolean
    loan_payment_pay_type?: boolean
    loan_payment_installment?: boolean
    loan_payment_customer?: boolean
    loan_payment_src?: boolean
    payment_file_date?: boolean
    payment_file_time?: boolean
    payment_file_ref_no?: boolean
    payment_file_price?: boolean
    land_account_id?: boolean
    land_account_name?: boolean
    loan_payment_date_fix?: boolean
    loan_payment_date?: boolean
    loan_balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type loan_paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loan_code" | "loan_payment_amount" | "loan_change" | "loan_interest" | "loan_employee" | "loan_payment_type" | "loan_payment_pay_type" | "loan_payment_installment" | "loan_payment_customer" | "loan_payment_src" | "payment_file_date" | "payment_file_time" | "payment_file_ref_no" | "payment_file_price" | "land_account_id" | "land_account_name" | "loan_payment_date_fix" | "loan_payment_date" | "loan_balance" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["loan_payment"]>

  export type $loan_paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loan_payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loan_code: string | null
      loan_payment_amount: Prisma.Decimal
      loan_change: Prisma.Decimal
      loan_interest: Prisma.Decimal
      loan_employee: string | null
      loan_payment_type: string | null
      loan_payment_pay_type: string | null
      loan_payment_installment: string | null
      loan_payment_customer: string | null
      loan_payment_src: string | null
      payment_file_date: Date | null
      payment_file_time: Date | null
      payment_file_ref_no: string | null
      payment_file_price: Prisma.Decimal | null
      land_account_id: number | null
      land_account_name: string | null
      loan_payment_date_fix: Date | null
      loan_payment_date: Date | null
      loan_balance: Prisma.Decimal
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["loan_payment"]>
    composites: {}
  }

  type loan_paymentGetPayload<S extends boolean | null | undefined | loan_paymentDefaultArgs> = $Result.GetResult<Prisma.$loan_paymentPayload, S>

  type loan_paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loan_paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loan_paymentCountAggregateInputType | true
    }

  export interface loan_paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan_payment'], meta: { name: 'loan_payment' } }
    /**
     * Find zero or one Loan_payment that matches the filter.
     * @param {loan_paymentFindUniqueArgs} args - Arguments to find a Loan_payment
     * @example
     * // Get one Loan_payment
     * const loan_payment = await prisma.loan_payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loan_paymentFindUniqueArgs>(args: SelectSubset<T, loan_paymentFindUniqueArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan_payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loan_paymentFindUniqueOrThrowArgs} args - Arguments to find a Loan_payment
     * @example
     * // Get one Loan_payment
     * const loan_payment = await prisma.loan_payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loan_paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, loan_paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentFindFirstArgs} args - Arguments to find a Loan_payment
     * @example
     * // Get one Loan_payment
     * const loan_payment = await prisma.loan_payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loan_paymentFindFirstArgs>(args?: SelectSubset<T, loan_paymentFindFirstArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentFindFirstOrThrowArgs} args - Arguments to find a Loan_payment
     * @example
     * // Get one Loan_payment
     * const loan_payment = await prisma.loan_payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loan_paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, loan_paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loan_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loan_payments
     * const loan_payments = await prisma.loan_payment.findMany()
     * 
     * // Get first 10 Loan_payments
     * const loan_payments = await prisma.loan_payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loan_paymentWithIdOnly = await prisma.loan_payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends loan_paymentFindManyArgs>(args?: SelectSubset<T, loan_paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan_payment.
     * @param {loan_paymentCreateArgs} args - Arguments to create a Loan_payment.
     * @example
     * // Create one Loan_payment
     * const Loan_payment = await prisma.loan_payment.create({
     *   data: {
     *     // ... data to create a Loan_payment
     *   }
     * })
     * 
     */
    create<T extends loan_paymentCreateArgs>(args: SelectSubset<T, loan_paymentCreateArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loan_payments.
     * @param {loan_paymentCreateManyArgs} args - Arguments to create many Loan_payments.
     * @example
     * // Create many Loan_payments
     * const loan_payment = await prisma.loan_payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loan_paymentCreateManyArgs>(args?: SelectSubset<T, loan_paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Loan_payment.
     * @param {loan_paymentDeleteArgs} args - Arguments to delete one Loan_payment.
     * @example
     * // Delete one Loan_payment
     * const Loan_payment = await prisma.loan_payment.delete({
     *   where: {
     *     // ... filter to delete one Loan_payment
     *   }
     * })
     * 
     */
    delete<T extends loan_paymentDeleteArgs>(args: SelectSubset<T, loan_paymentDeleteArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan_payment.
     * @param {loan_paymentUpdateArgs} args - Arguments to update one Loan_payment.
     * @example
     * // Update one Loan_payment
     * const loan_payment = await prisma.loan_payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loan_paymentUpdateArgs>(args: SelectSubset<T, loan_paymentUpdateArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loan_payments.
     * @param {loan_paymentDeleteManyArgs} args - Arguments to filter Loan_payments to delete.
     * @example
     * // Delete a few Loan_payments
     * const { count } = await prisma.loan_payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loan_paymentDeleteManyArgs>(args?: SelectSubset<T, loan_paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loan_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loan_payments
     * const loan_payment = await prisma.loan_payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loan_paymentUpdateManyArgs>(args: SelectSubset<T, loan_paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loan_payment.
     * @param {loan_paymentUpsertArgs} args - Arguments to update or create a Loan_payment.
     * @example
     * // Update or create a Loan_payment
     * const loan_payment = await prisma.loan_payment.upsert({
     *   create: {
     *     // ... data to create a Loan_payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan_payment we want to update
     *   }
     * })
     */
    upsert<T extends loan_paymentUpsertArgs>(args: SelectSubset<T, loan_paymentUpsertArgs<ExtArgs>>): Prisma__loan_paymentClient<$Result.GetResult<Prisma.$loan_paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loan_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentCountArgs} args - Arguments to filter Loan_payments to count.
     * @example
     * // Count the number of Loan_payments
     * const count = await prisma.loan_payment.count({
     *   where: {
     *     // ... the filter for the Loan_payments we want to count
     *   }
     * })
    **/
    count<T extends loan_paymentCountArgs>(
      args?: Subset<T, loan_paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loan_paymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loan_paymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Loan_paymentAggregateArgs>(args: Subset<T, Loan_paymentAggregateArgs>): Prisma.PrismaPromise<GetLoan_paymentAggregateType<T>>

    /**
     * Group by Loan_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loan_paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loan_paymentGroupByArgs['orderBy'] }
        : { orderBy?: loan_paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loan_paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoan_paymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loan_payment model
   */
  readonly fields: loan_paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan_payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loan_paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loan_payment model
   */
  interface loan_paymentFieldRefs {
    readonly id: FieldRef<"loan_payment", 'Int'>
    readonly loan_code: FieldRef<"loan_payment", 'String'>
    readonly loan_payment_amount: FieldRef<"loan_payment", 'Decimal'>
    readonly loan_change: FieldRef<"loan_payment", 'Decimal'>
    readonly loan_interest: FieldRef<"loan_payment", 'Decimal'>
    readonly loan_employee: FieldRef<"loan_payment", 'String'>
    readonly loan_payment_type: FieldRef<"loan_payment", 'String'>
    readonly loan_payment_pay_type: FieldRef<"loan_payment", 'String'>
    readonly loan_payment_installment: FieldRef<"loan_payment", 'String'>
    readonly loan_payment_customer: FieldRef<"loan_payment", 'String'>
    readonly loan_payment_src: FieldRef<"loan_payment", 'String'>
    readonly payment_file_date: FieldRef<"loan_payment", 'DateTime'>
    readonly payment_file_time: FieldRef<"loan_payment", 'DateTime'>
    readonly payment_file_ref_no: FieldRef<"loan_payment", 'String'>
    readonly payment_file_price: FieldRef<"loan_payment", 'Decimal'>
    readonly land_account_id: FieldRef<"loan_payment", 'Int'>
    readonly land_account_name: FieldRef<"loan_payment", 'String'>
    readonly loan_payment_date_fix: FieldRef<"loan_payment", 'DateTime'>
    readonly loan_payment_date: FieldRef<"loan_payment", 'DateTime'>
    readonly loan_balance: FieldRef<"loan_payment", 'Decimal'>
    readonly created_at: FieldRef<"loan_payment", 'DateTime'>
    readonly updated_at: FieldRef<"loan_payment", 'DateTime'>
    readonly deleted_at: FieldRef<"loan_payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loan_payment findUnique
   */
  export type loan_paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * Filter, which loan_payment to fetch.
     */
    where: loan_paymentWhereUniqueInput
  }

  /**
   * loan_payment findUniqueOrThrow
   */
  export type loan_paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * Filter, which loan_payment to fetch.
     */
    where: loan_paymentWhereUniqueInput
  }

  /**
   * loan_payment findFirst
   */
  export type loan_paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * Filter, which loan_payment to fetch.
     */
    where?: loan_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentOrderByWithRelationInput | loan_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_payments.
     */
    cursor?: loan_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_payments.
     */
    distinct?: Loan_paymentScalarFieldEnum | Loan_paymentScalarFieldEnum[]
  }

  /**
   * loan_payment findFirstOrThrow
   */
  export type loan_paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * Filter, which loan_payment to fetch.
     */
    where?: loan_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentOrderByWithRelationInput | loan_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_payments.
     */
    cursor?: loan_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_payments.
     */
    distinct?: Loan_paymentScalarFieldEnum | Loan_paymentScalarFieldEnum[]
  }

  /**
   * loan_payment findMany
   */
  export type loan_paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * Filter, which loan_payments to fetch.
     */
    where?: loan_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentOrderByWithRelationInput | loan_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loan_payments.
     */
    cursor?: loan_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    distinct?: Loan_paymentScalarFieldEnum | Loan_paymentScalarFieldEnum[]
  }

  /**
   * loan_payment create
   */
  export type loan_paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * The data needed to create a loan_payment.
     */
    data?: XOR<loan_paymentCreateInput, loan_paymentUncheckedCreateInput>
  }

  /**
   * loan_payment createMany
   */
  export type loan_paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loan_payments.
     */
    data: loan_paymentCreateManyInput | loan_paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loan_payment update
   */
  export type loan_paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * The data needed to update a loan_payment.
     */
    data: XOR<loan_paymentUpdateInput, loan_paymentUncheckedUpdateInput>
    /**
     * Choose, which loan_payment to update.
     */
    where: loan_paymentWhereUniqueInput
  }

  /**
   * loan_payment updateMany
   */
  export type loan_paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loan_payments.
     */
    data: XOR<loan_paymentUpdateManyMutationInput, loan_paymentUncheckedUpdateManyInput>
    /**
     * Filter which loan_payments to update
     */
    where?: loan_paymentWhereInput
    /**
     * Limit how many loan_payments to update.
     */
    limit?: number
  }

  /**
   * loan_payment upsert
   */
  export type loan_paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * The filter to search for the loan_payment to update in case it exists.
     */
    where: loan_paymentWhereUniqueInput
    /**
     * In case the loan_payment found by the `where` argument doesn't exist, create a new loan_payment with this data.
     */
    create: XOR<loan_paymentCreateInput, loan_paymentUncheckedCreateInput>
    /**
     * In case the loan_payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loan_paymentUpdateInput, loan_paymentUncheckedUpdateInput>
  }

  /**
   * loan_payment delete
   */
  export type loan_paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
    /**
     * Filter which loan_payment to delete.
     */
    where: loan_paymentWhereUniqueInput
  }

  /**
   * loan_payment deleteMany
   */
  export type loan_paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_payments to delete
     */
    where?: loan_paymentWhereInput
    /**
     * Limit how many loan_payments to delete.
     */
    limit?: number
  }

  /**
   * loan_payment without action
   */
  export type loan_paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payment
     */
    select?: loan_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payment
     */
    omit?: loan_paymentOmit<ExtArgs> | null
  }


  /**
   * Model loan_running
   */

  export type AggregateLoan_running = {
    _count: Loan_runningCountAggregateOutputType | null
    _avg: Loan_runningAvgAggregateOutputType | null
    _sum: Loan_runningSumAggregateOutputType | null
    _min: Loan_runningMinAggregateOutputType | null
    _max: Loan_runningMaxAggregateOutputType | null
  }

  export type Loan_runningAvgAggregateOutputType = {
    id: number | null
  }

  export type Loan_runningSumAggregateOutputType = {
    id: number | null
  }

  export type Loan_runningMinAggregateOutputType = {
    id: number | null
    loan_running_code: string | null
  }

  export type Loan_runningMaxAggregateOutputType = {
    id: number | null
    loan_running_code: string | null
  }

  export type Loan_runningCountAggregateOutputType = {
    id: number
    loan_running_code: number
    _all: number
  }


  export type Loan_runningAvgAggregateInputType = {
    id?: true
  }

  export type Loan_runningSumAggregateInputType = {
    id?: true
  }

  export type Loan_runningMinAggregateInputType = {
    id?: true
    loan_running_code?: true
  }

  export type Loan_runningMaxAggregateInputType = {
    id?: true
    loan_running_code?: true
  }

  export type Loan_runningCountAggregateInputType = {
    id?: true
    loan_running_code?: true
    _all?: true
  }

  export type Loan_runningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_running to aggregate.
     */
    where?: loan_runningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_runnings to fetch.
     */
    orderBy?: loan_runningOrderByWithRelationInput | loan_runningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loan_runningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_runnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_runnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loan_runnings
    **/
    _count?: true | Loan_runningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loan_runningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loan_runningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loan_runningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loan_runningMaxAggregateInputType
  }

  export type GetLoan_runningAggregateType<T extends Loan_runningAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan_running]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan_running[P]>
      : GetScalarType<T[P], AggregateLoan_running[P]>
  }




  export type loan_runningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_runningWhereInput
    orderBy?: loan_runningOrderByWithAggregationInput | loan_runningOrderByWithAggregationInput[]
    by: Loan_runningScalarFieldEnum[] | Loan_runningScalarFieldEnum
    having?: loan_runningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loan_runningCountAggregateInputType | true
    _avg?: Loan_runningAvgAggregateInputType
    _sum?: Loan_runningSumAggregateInputType
    _min?: Loan_runningMinAggregateInputType
    _max?: Loan_runningMaxAggregateInputType
  }

  export type Loan_runningGroupByOutputType = {
    id: number
    loan_running_code: string | null
    _count: Loan_runningCountAggregateOutputType | null
    _avg: Loan_runningAvgAggregateOutputType | null
    _sum: Loan_runningSumAggregateOutputType | null
    _min: Loan_runningMinAggregateOutputType | null
    _max: Loan_runningMaxAggregateOutputType | null
  }

  type GetLoan_runningGroupByPayload<T extends loan_runningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loan_runningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loan_runningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loan_runningGroupByOutputType[P]>
            : GetScalarType<T[P], Loan_runningGroupByOutputType[P]>
        }
      >
    >


  export type loan_runningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loan_running_code?: boolean
  }, ExtArgs["result"]["loan_running"]>



  export type loan_runningSelectScalar = {
    id?: boolean
    loan_running_code?: boolean
  }

  export type loan_runningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loan_running_code", ExtArgs["result"]["loan_running"]>

  export type $loan_runningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loan_running"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loan_running_code: string | null
    }, ExtArgs["result"]["loan_running"]>
    composites: {}
  }

  type loan_runningGetPayload<S extends boolean | null | undefined | loan_runningDefaultArgs> = $Result.GetResult<Prisma.$loan_runningPayload, S>

  type loan_runningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loan_runningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loan_runningCountAggregateInputType | true
    }

  export interface loan_runningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan_running'], meta: { name: 'loan_running' } }
    /**
     * Find zero or one Loan_running that matches the filter.
     * @param {loan_runningFindUniqueArgs} args - Arguments to find a Loan_running
     * @example
     * // Get one Loan_running
     * const loan_running = await prisma.loan_running.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loan_runningFindUniqueArgs>(args: SelectSubset<T, loan_runningFindUniqueArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan_running that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loan_runningFindUniqueOrThrowArgs} args - Arguments to find a Loan_running
     * @example
     * // Get one Loan_running
     * const loan_running = await prisma.loan_running.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loan_runningFindUniqueOrThrowArgs>(args: SelectSubset<T, loan_runningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_running that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_runningFindFirstArgs} args - Arguments to find a Loan_running
     * @example
     * // Get one Loan_running
     * const loan_running = await prisma.loan_running.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loan_runningFindFirstArgs>(args?: SelectSubset<T, loan_runningFindFirstArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_running that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_runningFindFirstOrThrowArgs} args - Arguments to find a Loan_running
     * @example
     * // Get one Loan_running
     * const loan_running = await prisma.loan_running.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loan_runningFindFirstOrThrowArgs>(args?: SelectSubset<T, loan_runningFindFirstOrThrowArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loan_runnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_runningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loan_runnings
     * const loan_runnings = await prisma.loan_running.findMany()
     * 
     * // Get first 10 Loan_runnings
     * const loan_runnings = await prisma.loan_running.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loan_runningWithIdOnly = await prisma.loan_running.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends loan_runningFindManyArgs>(args?: SelectSubset<T, loan_runningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan_running.
     * @param {loan_runningCreateArgs} args - Arguments to create a Loan_running.
     * @example
     * // Create one Loan_running
     * const Loan_running = await prisma.loan_running.create({
     *   data: {
     *     // ... data to create a Loan_running
     *   }
     * })
     * 
     */
    create<T extends loan_runningCreateArgs>(args: SelectSubset<T, loan_runningCreateArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loan_runnings.
     * @param {loan_runningCreateManyArgs} args - Arguments to create many Loan_runnings.
     * @example
     * // Create many Loan_runnings
     * const loan_running = await prisma.loan_running.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loan_runningCreateManyArgs>(args?: SelectSubset<T, loan_runningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Loan_running.
     * @param {loan_runningDeleteArgs} args - Arguments to delete one Loan_running.
     * @example
     * // Delete one Loan_running
     * const Loan_running = await prisma.loan_running.delete({
     *   where: {
     *     // ... filter to delete one Loan_running
     *   }
     * })
     * 
     */
    delete<T extends loan_runningDeleteArgs>(args: SelectSubset<T, loan_runningDeleteArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan_running.
     * @param {loan_runningUpdateArgs} args - Arguments to update one Loan_running.
     * @example
     * // Update one Loan_running
     * const loan_running = await prisma.loan_running.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loan_runningUpdateArgs>(args: SelectSubset<T, loan_runningUpdateArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loan_runnings.
     * @param {loan_runningDeleteManyArgs} args - Arguments to filter Loan_runnings to delete.
     * @example
     * // Delete a few Loan_runnings
     * const { count } = await prisma.loan_running.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loan_runningDeleteManyArgs>(args?: SelectSubset<T, loan_runningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loan_runnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_runningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loan_runnings
     * const loan_running = await prisma.loan_running.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loan_runningUpdateManyArgs>(args: SelectSubset<T, loan_runningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loan_running.
     * @param {loan_runningUpsertArgs} args - Arguments to update or create a Loan_running.
     * @example
     * // Update or create a Loan_running
     * const loan_running = await prisma.loan_running.upsert({
     *   create: {
     *     // ... data to create a Loan_running
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan_running we want to update
     *   }
     * })
     */
    upsert<T extends loan_runningUpsertArgs>(args: SelectSubset<T, loan_runningUpsertArgs<ExtArgs>>): Prisma__loan_runningClient<$Result.GetResult<Prisma.$loan_runningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loan_runnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_runningCountArgs} args - Arguments to filter Loan_runnings to count.
     * @example
     * // Count the number of Loan_runnings
     * const count = await prisma.loan_running.count({
     *   where: {
     *     // ... the filter for the Loan_runnings we want to count
     *   }
     * })
    **/
    count<T extends loan_runningCountArgs>(
      args?: Subset<T, loan_runningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loan_runningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan_running.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loan_runningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Loan_runningAggregateArgs>(args: Subset<T, Loan_runningAggregateArgs>): Prisma.PrismaPromise<GetLoan_runningAggregateType<T>>

    /**
     * Group by Loan_running.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_runningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loan_runningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loan_runningGroupByArgs['orderBy'] }
        : { orderBy?: loan_runningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loan_runningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoan_runningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loan_running model
   */
  readonly fields: loan_runningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan_running.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loan_runningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loan_running model
   */
  interface loan_runningFieldRefs {
    readonly id: FieldRef<"loan_running", 'Int'>
    readonly loan_running_code: FieldRef<"loan_running", 'String'>
  }
    

  // Custom InputTypes
  /**
   * loan_running findUnique
   */
  export type loan_runningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * Filter, which loan_running to fetch.
     */
    where: loan_runningWhereUniqueInput
  }

  /**
   * loan_running findUniqueOrThrow
   */
  export type loan_runningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * Filter, which loan_running to fetch.
     */
    where: loan_runningWhereUniqueInput
  }

  /**
   * loan_running findFirst
   */
  export type loan_runningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * Filter, which loan_running to fetch.
     */
    where?: loan_runningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_runnings to fetch.
     */
    orderBy?: loan_runningOrderByWithRelationInput | loan_runningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_runnings.
     */
    cursor?: loan_runningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_runnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_runnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_runnings.
     */
    distinct?: Loan_runningScalarFieldEnum | Loan_runningScalarFieldEnum[]
  }

  /**
   * loan_running findFirstOrThrow
   */
  export type loan_runningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * Filter, which loan_running to fetch.
     */
    where?: loan_runningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_runnings to fetch.
     */
    orderBy?: loan_runningOrderByWithRelationInput | loan_runningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_runnings.
     */
    cursor?: loan_runningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_runnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_runnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_runnings.
     */
    distinct?: Loan_runningScalarFieldEnum | Loan_runningScalarFieldEnum[]
  }

  /**
   * loan_running findMany
   */
  export type loan_runningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * Filter, which loan_runnings to fetch.
     */
    where?: loan_runningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_runnings to fetch.
     */
    orderBy?: loan_runningOrderByWithRelationInput | loan_runningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loan_runnings.
     */
    cursor?: loan_runningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_runnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_runnings.
     */
    skip?: number
    distinct?: Loan_runningScalarFieldEnum | Loan_runningScalarFieldEnum[]
  }

  /**
   * loan_running create
   */
  export type loan_runningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * The data needed to create a loan_running.
     */
    data?: XOR<loan_runningCreateInput, loan_runningUncheckedCreateInput>
  }

  /**
   * loan_running createMany
   */
  export type loan_runningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loan_runnings.
     */
    data: loan_runningCreateManyInput | loan_runningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loan_running update
   */
  export type loan_runningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * The data needed to update a loan_running.
     */
    data: XOR<loan_runningUpdateInput, loan_runningUncheckedUpdateInput>
    /**
     * Choose, which loan_running to update.
     */
    where: loan_runningWhereUniqueInput
  }

  /**
   * loan_running updateMany
   */
  export type loan_runningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loan_runnings.
     */
    data: XOR<loan_runningUpdateManyMutationInput, loan_runningUncheckedUpdateManyInput>
    /**
     * Filter which loan_runnings to update
     */
    where?: loan_runningWhereInput
    /**
     * Limit how many loan_runnings to update.
     */
    limit?: number
  }

  /**
   * loan_running upsert
   */
  export type loan_runningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * The filter to search for the loan_running to update in case it exists.
     */
    where: loan_runningWhereUniqueInput
    /**
     * In case the loan_running found by the `where` argument doesn't exist, create a new loan_running with this data.
     */
    create: XOR<loan_runningCreateInput, loan_runningUncheckedCreateInput>
    /**
     * In case the loan_running was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loan_runningUpdateInput, loan_runningUncheckedUpdateInput>
  }

  /**
   * loan_running delete
   */
  export type loan_runningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
    /**
     * Filter which loan_running to delete.
     */
    where: loan_runningWhereUniqueInput
  }

  /**
   * loan_running deleteMany
   */
  export type loan_runningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_runnings to delete
     */
    where?: loan_runningWhereInput
    /**
     * Limit how many loan_runnings to delete.
     */
    limit?: number
  }

  /**
   * loan_running without action
   */
  export type loan_runningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_running
     */
    select?: loan_runningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_running
     */
    omit?: loan_runningOmit<ExtArgs> | null
  }


  /**
   * Model overdue_status
   */

  export type AggregateOverdue_status = {
    _count: Overdue_statusCountAggregateOutputType | null
    _avg: Overdue_statusAvgAggregateOutputType | null
    _sum: Overdue_statusSumAggregateOutputType | null
    _min: Overdue_statusMinAggregateOutputType | null
    _max: Overdue_statusMaxAggregateOutputType | null
  }

  export type Overdue_statusAvgAggregateOutputType = {
    id: number | null
    token_overdue_loan: number | null
    token_loan_status: number | null
  }

  export type Overdue_statusSumAggregateOutputType = {
    id: number | null
    token_overdue_loan: number | null
    token_loan_status: number | null
  }

  export type Overdue_statusMinAggregateOutputType = {
    id: number | null
    token_loan: string | null
    token_overdue_loan: number | null
    token_loan_status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Overdue_statusMaxAggregateOutputType = {
    id: number | null
    token_loan: string | null
    token_overdue_loan: number | null
    token_loan_status: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Overdue_statusCountAggregateOutputType = {
    id: number
    token_loan: number
    token_overdue_loan: number
    token_loan_status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Overdue_statusAvgAggregateInputType = {
    id?: true
    token_overdue_loan?: true
    token_loan_status?: true
  }

  export type Overdue_statusSumAggregateInputType = {
    id?: true
    token_overdue_loan?: true
    token_loan_status?: true
  }

  export type Overdue_statusMinAggregateInputType = {
    id?: true
    token_loan?: true
    token_overdue_loan?: true
    token_loan_status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Overdue_statusMaxAggregateInputType = {
    id?: true
    token_loan?: true
    token_overdue_loan?: true
    token_loan_status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Overdue_statusCountAggregateInputType = {
    id?: true
    token_loan?: true
    token_overdue_loan?: true
    token_loan_status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Overdue_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which overdue_status to aggregate.
     */
    where?: overdue_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of overdue_statuses to fetch.
     */
    orderBy?: overdue_statusOrderByWithRelationInput | overdue_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: overdue_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` overdue_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` overdue_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned overdue_statuses
    **/
    _count?: true | Overdue_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Overdue_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Overdue_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Overdue_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Overdue_statusMaxAggregateInputType
  }

  export type GetOverdue_statusAggregateType<T extends Overdue_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateOverdue_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOverdue_status[P]>
      : GetScalarType<T[P], AggregateOverdue_status[P]>
  }




  export type overdue_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: overdue_statusWhereInput
    orderBy?: overdue_statusOrderByWithAggregationInput | overdue_statusOrderByWithAggregationInput[]
    by: Overdue_statusScalarFieldEnum[] | Overdue_statusScalarFieldEnum
    having?: overdue_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Overdue_statusCountAggregateInputType | true
    _avg?: Overdue_statusAvgAggregateInputType
    _sum?: Overdue_statusSumAggregateInputType
    _min?: Overdue_statusMinAggregateInputType
    _max?: Overdue_statusMaxAggregateInputType
  }

  export type Overdue_statusGroupByOutputType = {
    id: number
    token_loan: string | null
    token_overdue_loan: number
    token_loan_status: number
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Overdue_statusCountAggregateOutputType | null
    _avg: Overdue_statusAvgAggregateOutputType | null
    _sum: Overdue_statusSumAggregateOutputType | null
    _min: Overdue_statusMinAggregateOutputType | null
    _max: Overdue_statusMaxAggregateOutputType | null
  }

  type GetOverdue_statusGroupByPayload<T extends overdue_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Overdue_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Overdue_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Overdue_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Overdue_statusGroupByOutputType[P]>
        }
      >
    >


  export type overdue_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token_loan?: boolean
    token_overdue_loan?: boolean
    token_loan_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["overdue_status"]>



  export type overdue_statusSelectScalar = {
    id?: boolean
    token_loan?: boolean
    token_overdue_loan?: boolean
    token_loan_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type overdue_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token_loan" | "token_overdue_loan" | "token_loan_status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["overdue_status"]>

  export type $overdue_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "overdue_status"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token_loan: string | null
      token_overdue_loan: number
      token_loan_status: number
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["overdue_status"]>
    composites: {}
  }

  type overdue_statusGetPayload<S extends boolean | null | undefined | overdue_statusDefaultArgs> = $Result.GetResult<Prisma.$overdue_statusPayload, S>

  type overdue_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<overdue_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Overdue_statusCountAggregateInputType | true
    }

  export interface overdue_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['overdue_status'], meta: { name: 'overdue_status' } }
    /**
     * Find zero or one Overdue_status that matches the filter.
     * @param {overdue_statusFindUniqueArgs} args - Arguments to find a Overdue_status
     * @example
     * // Get one Overdue_status
     * const overdue_status = await prisma.overdue_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends overdue_statusFindUniqueArgs>(args: SelectSubset<T, overdue_statusFindUniqueArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Overdue_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {overdue_statusFindUniqueOrThrowArgs} args - Arguments to find a Overdue_status
     * @example
     * // Get one Overdue_status
     * const overdue_status = await prisma.overdue_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends overdue_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, overdue_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Overdue_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overdue_statusFindFirstArgs} args - Arguments to find a Overdue_status
     * @example
     * // Get one Overdue_status
     * const overdue_status = await prisma.overdue_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends overdue_statusFindFirstArgs>(args?: SelectSubset<T, overdue_statusFindFirstArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Overdue_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overdue_statusFindFirstOrThrowArgs} args - Arguments to find a Overdue_status
     * @example
     * // Get one Overdue_status
     * const overdue_status = await prisma.overdue_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends overdue_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, overdue_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Overdue_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overdue_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Overdue_statuses
     * const overdue_statuses = await prisma.overdue_status.findMany()
     * 
     * // Get first 10 Overdue_statuses
     * const overdue_statuses = await prisma.overdue_status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const overdue_statusWithIdOnly = await prisma.overdue_status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends overdue_statusFindManyArgs>(args?: SelectSubset<T, overdue_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Overdue_status.
     * @param {overdue_statusCreateArgs} args - Arguments to create a Overdue_status.
     * @example
     * // Create one Overdue_status
     * const Overdue_status = await prisma.overdue_status.create({
     *   data: {
     *     // ... data to create a Overdue_status
     *   }
     * })
     * 
     */
    create<T extends overdue_statusCreateArgs>(args: SelectSubset<T, overdue_statusCreateArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Overdue_statuses.
     * @param {overdue_statusCreateManyArgs} args - Arguments to create many Overdue_statuses.
     * @example
     * // Create many Overdue_statuses
     * const overdue_status = await prisma.overdue_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends overdue_statusCreateManyArgs>(args?: SelectSubset<T, overdue_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Overdue_status.
     * @param {overdue_statusDeleteArgs} args - Arguments to delete one Overdue_status.
     * @example
     * // Delete one Overdue_status
     * const Overdue_status = await prisma.overdue_status.delete({
     *   where: {
     *     // ... filter to delete one Overdue_status
     *   }
     * })
     * 
     */
    delete<T extends overdue_statusDeleteArgs>(args: SelectSubset<T, overdue_statusDeleteArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Overdue_status.
     * @param {overdue_statusUpdateArgs} args - Arguments to update one Overdue_status.
     * @example
     * // Update one Overdue_status
     * const overdue_status = await prisma.overdue_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends overdue_statusUpdateArgs>(args: SelectSubset<T, overdue_statusUpdateArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Overdue_statuses.
     * @param {overdue_statusDeleteManyArgs} args - Arguments to filter Overdue_statuses to delete.
     * @example
     * // Delete a few Overdue_statuses
     * const { count } = await prisma.overdue_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends overdue_statusDeleteManyArgs>(args?: SelectSubset<T, overdue_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Overdue_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overdue_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Overdue_statuses
     * const overdue_status = await prisma.overdue_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends overdue_statusUpdateManyArgs>(args: SelectSubset<T, overdue_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Overdue_status.
     * @param {overdue_statusUpsertArgs} args - Arguments to update or create a Overdue_status.
     * @example
     * // Update or create a Overdue_status
     * const overdue_status = await prisma.overdue_status.upsert({
     *   create: {
     *     // ... data to create a Overdue_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Overdue_status we want to update
     *   }
     * })
     */
    upsert<T extends overdue_statusUpsertArgs>(args: SelectSubset<T, overdue_statusUpsertArgs<ExtArgs>>): Prisma__overdue_statusClient<$Result.GetResult<Prisma.$overdue_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Overdue_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overdue_statusCountArgs} args - Arguments to filter Overdue_statuses to count.
     * @example
     * // Count the number of Overdue_statuses
     * const count = await prisma.overdue_status.count({
     *   where: {
     *     // ... the filter for the Overdue_statuses we want to count
     *   }
     * })
    **/
    count<T extends overdue_statusCountArgs>(
      args?: Subset<T, overdue_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Overdue_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Overdue_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Overdue_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Overdue_statusAggregateArgs>(args: Subset<T, Overdue_statusAggregateArgs>): Prisma.PrismaPromise<GetOverdue_statusAggregateType<T>>

    /**
     * Group by Overdue_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overdue_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends overdue_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: overdue_statusGroupByArgs['orderBy'] }
        : { orderBy?: overdue_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, overdue_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOverdue_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the overdue_status model
   */
  readonly fields: overdue_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for overdue_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__overdue_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the overdue_status model
   */
  interface overdue_statusFieldRefs {
    readonly id: FieldRef<"overdue_status", 'Int'>
    readonly token_loan: FieldRef<"overdue_status", 'String'>
    readonly token_overdue_loan: FieldRef<"overdue_status", 'Int'>
    readonly token_loan_status: FieldRef<"overdue_status", 'Int'>
    readonly created_at: FieldRef<"overdue_status", 'DateTime'>
    readonly updated_at: FieldRef<"overdue_status", 'DateTime'>
    readonly deleted_at: FieldRef<"overdue_status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * overdue_status findUnique
   */
  export type overdue_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * Filter, which overdue_status to fetch.
     */
    where: overdue_statusWhereUniqueInput
  }

  /**
   * overdue_status findUniqueOrThrow
   */
  export type overdue_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * Filter, which overdue_status to fetch.
     */
    where: overdue_statusWhereUniqueInput
  }

  /**
   * overdue_status findFirst
   */
  export type overdue_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * Filter, which overdue_status to fetch.
     */
    where?: overdue_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of overdue_statuses to fetch.
     */
    orderBy?: overdue_statusOrderByWithRelationInput | overdue_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for overdue_statuses.
     */
    cursor?: overdue_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` overdue_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` overdue_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of overdue_statuses.
     */
    distinct?: Overdue_statusScalarFieldEnum | Overdue_statusScalarFieldEnum[]
  }

  /**
   * overdue_status findFirstOrThrow
   */
  export type overdue_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * Filter, which overdue_status to fetch.
     */
    where?: overdue_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of overdue_statuses to fetch.
     */
    orderBy?: overdue_statusOrderByWithRelationInput | overdue_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for overdue_statuses.
     */
    cursor?: overdue_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` overdue_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` overdue_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of overdue_statuses.
     */
    distinct?: Overdue_statusScalarFieldEnum | Overdue_statusScalarFieldEnum[]
  }

  /**
   * overdue_status findMany
   */
  export type overdue_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * Filter, which overdue_statuses to fetch.
     */
    where?: overdue_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of overdue_statuses to fetch.
     */
    orderBy?: overdue_statusOrderByWithRelationInput | overdue_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing overdue_statuses.
     */
    cursor?: overdue_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` overdue_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` overdue_statuses.
     */
    skip?: number
    distinct?: Overdue_statusScalarFieldEnum | Overdue_statusScalarFieldEnum[]
  }

  /**
   * overdue_status create
   */
  export type overdue_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * The data needed to create a overdue_status.
     */
    data: XOR<overdue_statusCreateInput, overdue_statusUncheckedCreateInput>
  }

  /**
   * overdue_status createMany
   */
  export type overdue_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many overdue_statuses.
     */
    data: overdue_statusCreateManyInput | overdue_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * overdue_status update
   */
  export type overdue_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * The data needed to update a overdue_status.
     */
    data: XOR<overdue_statusUpdateInput, overdue_statusUncheckedUpdateInput>
    /**
     * Choose, which overdue_status to update.
     */
    where: overdue_statusWhereUniqueInput
  }

  /**
   * overdue_status updateMany
   */
  export type overdue_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update overdue_statuses.
     */
    data: XOR<overdue_statusUpdateManyMutationInput, overdue_statusUncheckedUpdateManyInput>
    /**
     * Filter which overdue_statuses to update
     */
    where?: overdue_statusWhereInput
    /**
     * Limit how many overdue_statuses to update.
     */
    limit?: number
  }

  /**
   * overdue_status upsert
   */
  export type overdue_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * The filter to search for the overdue_status to update in case it exists.
     */
    where: overdue_statusWhereUniqueInput
    /**
     * In case the overdue_status found by the `where` argument doesn't exist, create a new overdue_status with this data.
     */
    create: XOR<overdue_statusCreateInput, overdue_statusUncheckedCreateInput>
    /**
     * In case the overdue_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<overdue_statusUpdateInput, overdue_statusUncheckedUpdateInput>
  }

  /**
   * overdue_status delete
   */
  export type overdue_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
    /**
     * Filter which overdue_status to delete.
     */
    where: overdue_statusWhereUniqueInput
  }

  /**
   * overdue_status deleteMany
   */
  export type overdue_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which overdue_statuses to delete
     */
    where?: overdue_statusWhereInput
    /**
     * Limit how many overdue_statuses to delete.
     */
    limit?: number
  }

  /**
   * overdue_status without action
   */
  export type overdue_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the overdue_status
     */
    select?: overdue_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the overdue_status
     */
    omit?: overdue_statusOmit<ExtArgs> | null
  }


  /**
   * Model picture_loan_other
   */

  export type AggregatePicture_loan_other = {
    _count: Picture_loan_otherCountAggregateOutputType | null
    _avg: Picture_loan_otherAvgAggregateOutputType | null
    _sum: Picture_loan_otherSumAggregateOutputType | null
    _min: Picture_loan_otherMinAggregateOutputType | null
    _max: Picture_loan_otherMaxAggregateOutputType | null
  }

  export type Picture_loan_otherAvgAggregateOutputType = {
    id: number | null
  }

  export type Picture_loan_otherSumAggregateOutputType = {
    id: number | null
  }

  export type Picture_loan_otherMinAggregateOutputType = {
    id: number | null
    loan_code: string | null
    picture_loan_src: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Picture_loan_otherMaxAggregateOutputType = {
    id: number | null
    loan_code: string | null
    picture_loan_src: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Picture_loan_otherCountAggregateOutputType = {
    id: number
    loan_code: number
    picture_loan_src: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Picture_loan_otherAvgAggregateInputType = {
    id?: true
  }

  export type Picture_loan_otherSumAggregateInputType = {
    id?: true
  }

  export type Picture_loan_otherMinAggregateInputType = {
    id?: true
    loan_code?: true
    picture_loan_src?: true
    created_at?: true
    updated_at?: true
  }

  export type Picture_loan_otherMaxAggregateInputType = {
    id?: true
    loan_code?: true
    picture_loan_src?: true
    created_at?: true
    updated_at?: true
  }

  export type Picture_loan_otherCountAggregateInputType = {
    id?: true
    loan_code?: true
    picture_loan_src?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Picture_loan_otherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which picture_loan_other to aggregate.
     */
    where?: picture_loan_otherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of picture_loan_others to fetch.
     */
    orderBy?: picture_loan_otherOrderByWithRelationInput | picture_loan_otherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: picture_loan_otherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` picture_loan_others from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` picture_loan_others.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned picture_loan_others
    **/
    _count?: true | Picture_loan_otherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Picture_loan_otherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Picture_loan_otherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Picture_loan_otherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Picture_loan_otherMaxAggregateInputType
  }

  export type GetPicture_loan_otherAggregateType<T extends Picture_loan_otherAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture_loan_other]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture_loan_other[P]>
      : GetScalarType<T[P], AggregatePicture_loan_other[P]>
  }




  export type picture_loan_otherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: picture_loan_otherWhereInput
    orderBy?: picture_loan_otherOrderByWithAggregationInput | picture_loan_otherOrderByWithAggregationInput[]
    by: Picture_loan_otherScalarFieldEnum[] | Picture_loan_otherScalarFieldEnum
    having?: picture_loan_otherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Picture_loan_otherCountAggregateInputType | true
    _avg?: Picture_loan_otherAvgAggregateInputType
    _sum?: Picture_loan_otherSumAggregateInputType
    _min?: Picture_loan_otherMinAggregateInputType
    _max?: Picture_loan_otherMaxAggregateInputType
  }

  export type Picture_loan_otherGroupByOutputType = {
    id: number
    loan_code: string | null
    picture_loan_src: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Picture_loan_otherCountAggregateOutputType | null
    _avg: Picture_loan_otherAvgAggregateOutputType | null
    _sum: Picture_loan_otherSumAggregateOutputType | null
    _min: Picture_loan_otherMinAggregateOutputType | null
    _max: Picture_loan_otherMaxAggregateOutputType | null
  }

  type GetPicture_loan_otherGroupByPayload<T extends picture_loan_otherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Picture_loan_otherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Picture_loan_otherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Picture_loan_otherGroupByOutputType[P]>
            : GetScalarType<T[P], Picture_loan_otherGroupByOutputType[P]>
        }
      >
    >


  export type picture_loan_otherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loan_code?: boolean
    picture_loan_src?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["picture_loan_other"]>



  export type picture_loan_otherSelectScalar = {
    id?: boolean
    loan_code?: boolean
    picture_loan_src?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type picture_loan_otherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loan_code" | "picture_loan_src" | "created_at" | "updated_at", ExtArgs["result"]["picture_loan_other"]>

  export type $picture_loan_otherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "picture_loan_other"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loan_code: string | null
      picture_loan_src: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["picture_loan_other"]>
    composites: {}
  }

  type picture_loan_otherGetPayload<S extends boolean | null | undefined | picture_loan_otherDefaultArgs> = $Result.GetResult<Prisma.$picture_loan_otherPayload, S>

  type picture_loan_otherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<picture_loan_otherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Picture_loan_otherCountAggregateInputType | true
    }

  export interface picture_loan_otherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['picture_loan_other'], meta: { name: 'picture_loan_other' } }
    /**
     * Find zero or one Picture_loan_other that matches the filter.
     * @param {picture_loan_otherFindUniqueArgs} args - Arguments to find a Picture_loan_other
     * @example
     * // Get one Picture_loan_other
     * const picture_loan_other = await prisma.picture_loan_other.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends picture_loan_otherFindUniqueArgs>(args: SelectSubset<T, picture_loan_otherFindUniqueArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Picture_loan_other that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {picture_loan_otherFindUniqueOrThrowArgs} args - Arguments to find a Picture_loan_other
     * @example
     * // Get one Picture_loan_other
     * const picture_loan_other = await prisma.picture_loan_other.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends picture_loan_otherFindUniqueOrThrowArgs>(args: SelectSubset<T, picture_loan_otherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture_loan_other that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {picture_loan_otherFindFirstArgs} args - Arguments to find a Picture_loan_other
     * @example
     * // Get one Picture_loan_other
     * const picture_loan_other = await prisma.picture_loan_other.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends picture_loan_otherFindFirstArgs>(args?: SelectSubset<T, picture_loan_otherFindFirstArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture_loan_other that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {picture_loan_otherFindFirstOrThrowArgs} args - Arguments to find a Picture_loan_other
     * @example
     * // Get one Picture_loan_other
     * const picture_loan_other = await prisma.picture_loan_other.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends picture_loan_otherFindFirstOrThrowArgs>(args?: SelectSubset<T, picture_loan_otherFindFirstOrThrowArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Picture_loan_others that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {picture_loan_otherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Picture_loan_others
     * const picture_loan_others = await prisma.picture_loan_other.findMany()
     * 
     * // Get first 10 Picture_loan_others
     * const picture_loan_others = await prisma.picture_loan_other.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const picture_loan_otherWithIdOnly = await prisma.picture_loan_other.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends picture_loan_otherFindManyArgs>(args?: SelectSubset<T, picture_loan_otherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Picture_loan_other.
     * @param {picture_loan_otherCreateArgs} args - Arguments to create a Picture_loan_other.
     * @example
     * // Create one Picture_loan_other
     * const Picture_loan_other = await prisma.picture_loan_other.create({
     *   data: {
     *     // ... data to create a Picture_loan_other
     *   }
     * })
     * 
     */
    create<T extends picture_loan_otherCreateArgs>(args: SelectSubset<T, picture_loan_otherCreateArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Picture_loan_others.
     * @param {picture_loan_otherCreateManyArgs} args - Arguments to create many Picture_loan_others.
     * @example
     * // Create many Picture_loan_others
     * const picture_loan_other = await prisma.picture_loan_other.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends picture_loan_otherCreateManyArgs>(args?: SelectSubset<T, picture_loan_otherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Picture_loan_other.
     * @param {picture_loan_otherDeleteArgs} args - Arguments to delete one Picture_loan_other.
     * @example
     * // Delete one Picture_loan_other
     * const Picture_loan_other = await prisma.picture_loan_other.delete({
     *   where: {
     *     // ... filter to delete one Picture_loan_other
     *   }
     * })
     * 
     */
    delete<T extends picture_loan_otherDeleteArgs>(args: SelectSubset<T, picture_loan_otherDeleteArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Picture_loan_other.
     * @param {picture_loan_otherUpdateArgs} args - Arguments to update one Picture_loan_other.
     * @example
     * // Update one Picture_loan_other
     * const picture_loan_other = await prisma.picture_loan_other.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends picture_loan_otherUpdateArgs>(args: SelectSubset<T, picture_loan_otherUpdateArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Picture_loan_others.
     * @param {picture_loan_otherDeleteManyArgs} args - Arguments to filter Picture_loan_others to delete.
     * @example
     * // Delete a few Picture_loan_others
     * const { count } = await prisma.picture_loan_other.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends picture_loan_otherDeleteManyArgs>(args?: SelectSubset<T, picture_loan_otherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Picture_loan_others.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {picture_loan_otherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Picture_loan_others
     * const picture_loan_other = await prisma.picture_loan_other.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends picture_loan_otherUpdateManyArgs>(args: SelectSubset<T, picture_loan_otherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Picture_loan_other.
     * @param {picture_loan_otherUpsertArgs} args - Arguments to update or create a Picture_loan_other.
     * @example
     * // Update or create a Picture_loan_other
     * const picture_loan_other = await prisma.picture_loan_other.upsert({
     *   create: {
     *     // ... data to create a Picture_loan_other
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture_loan_other we want to update
     *   }
     * })
     */
    upsert<T extends picture_loan_otherUpsertArgs>(args: SelectSubset<T, picture_loan_otherUpsertArgs<ExtArgs>>): Prisma__picture_loan_otherClient<$Result.GetResult<Prisma.$picture_loan_otherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Picture_loan_others.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {picture_loan_otherCountArgs} args - Arguments to filter Picture_loan_others to count.
     * @example
     * // Count the number of Picture_loan_others
     * const count = await prisma.picture_loan_other.count({
     *   where: {
     *     // ... the filter for the Picture_loan_others we want to count
     *   }
     * })
    **/
    count<T extends picture_loan_otherCountArgs>(
      args?: Subset<T, picture_loan_otherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Picture_loan_otherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture_loan_other.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Picture_loan_otherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Picture_loan_otherAggregateArgs>(args: Subset<T, Picture_loan_otherAggregateArgs>): Prisma.PrismaPromise<GetPicture_loan_otherAggregateType<T>>

    /**
     * Group by Picture_loan_other.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {picture_loan_otherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends picture_loan_otherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: picture_loan_otherGroupByArgs['orderBy'] }
        : { orderBy?: picture_loan_otherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, picture_loan_otherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPicture_loan_otherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the picture_loan_other model
   */
  readonly fields: picture_loan_otherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for picture_loan_other.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__picture_loan_otherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the picture_loan_other model
   */
  interface picture_loan_otherFieldRefs {
    readonly id: FieldRef<"picture_loan_other", 'Int'>
    readonly loan_code: FieldRef<"picture_loan_other", 'String'>
    readonly picture_loan_src: FieldRef<"picture_loan_other", 'String'>
    readonly created_at: FieldRef<"picture_loan_other", 'DateTime'>
    readonly updated_at: FieldRef<"picture_loan_other", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * picture_loan_other findUnique
   */
  export type picture_loan_otherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * Filter, which picture_loan_other to fetch.
     */
    where: picture_loan_otherWhereUniqueInput
  }

  /**
   * picture_loan_other findUniqueOrThrow
   */
  export type picture_loan_otherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * Filter, which picture_loan_other to fetch.
     */
    where: picture_loan_otherWhereUniqueInput
  }

  /**
   * picture_loan_other findFirst
   */
  export type picture_loan_otherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * Filter, which picture_loan_other to fetch.
     */
    where?: picture_loan_otherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of picture_loan_others to fetch.
     */
    orderBy?: picture_loan_otherOrderByWithRelationInput | picture_loan_otherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for picture_loan_others.
     */
    cursor?: picture_loan_otherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` picture_loan_others from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` picture_loan_others.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of picture_loan_others.
     */
    distinct?: Picture_loan_otherScalarFieldEnum | Picture_loan_otherScalarFieldEnum[]
  }

  /**
   * picture_loan_other findFirstOrThrow
   */
  export type picture_loan_otherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * Filter, which picture_loan_other to fetch.
     */
    where?: picture_loan_otherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of picture_loan_others to fetch.
     */
    orderBy?: picture_loan_otherOrderByWithRelationInput | picture_loan_otherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for picture_loan_others.
     */
    cursor?: picture_loan_otherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` picture_loan_others from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` picture_loan_others.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of picture_loan_others.
     */
    distinct?: Picture_loan_otherScalarFieldEnum | Picture_loan_otherScalarFieldEnum[]
  }

  /**
   * picture_loan_other findMany
   */
  export type picture_loan_otherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * Filter, which picture_loan_others to fetch.
     */
    where?: picture_loan_otherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of picture_loan_others to fetch.
     */
    orderBy?: picture_loan_otherOrderByWithRelationInput | picture_loan_otherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing picture_loan_others.
     */
    cursor?: picture_loan_otherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` picture_loan_others from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` picture_loan_others.
     */
    skip?: number
    distinct?: Picture_loan_otherScalarFieldEnum | Picture_loan_otherScalarFieldEnum[]
  }

  /**
   * picture_loan_other create
   */
  export type picture_loan_otherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * The data needed to create a picture_loan_other.
     */
    data?: XOR<picture_loan_otherCreateInput, picture_loan_otherUncheckedCreateInput>
  }

  /**
   * picture_loan_other createMany
   */
  export type picture_loan_otherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many picture_loan_others.
     */
    data: picture_loan_otherCreateManyInput | picture_loan_otherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * picture_loan_other update
   */
  export type picture_loan_otherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * The data needed to update a picture_loan_other.
     */
    data: XOR<picture_loan_otherUpdateInput, picture_loan_otherUncheckedUpdateInput>
    /**
     * Choose, which picture_loan_other to update.
     */
    where: picture_loan_otherWhereUniqueInput
  }

  /**
   * picture_loan_other updateMany
   */
  export type picture_loan_otherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update picture_loan_others.
     */
    data: XOR<picture_loan_otherUpdateManyMutationInput, picture_loan_otherUncheckedUpdateManyInput>
    /**
     * Filter which picture_loan_others to update
     */
    where?: picture_loan_otherWhereInput
    /**
     * Limit how many picture_loan_others to update.
     */
    limit?: number
  }

  /**
   * picture_loan_other upsert
   */
  export type picture_loan_otherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * The filter to search for the picture_loan_other to update in case it exists.
     */
    where: picture_loan_otherWhereUniqueInput
    /**
     * In case the picture_loan_other found by the `where` argument doesn't exist, create a new picture_loan_other with this data.
     */
    create: XOR<picture_loan_otherCreateInput, picture_loan_otherUncheckedCreateInput>
    /**
     * In case the picture_loan_other was found with the provided `where` argument, update it with this data.
     */
    update: XOR<picture_loan_otherUpdateInput, picture_loan_otherUncheckedUpdateInput>
  }

  /**
   * picture_loan_other delete
   */
  export type picture_loan_otherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
    /**
     * Filter which picture_loan_other to delete.
     */
    where: picture_loan_otherWhereUniqueInput
  }

  /**
   * picture_loan_other deleteMany
   */
  export type picture_loan_otherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which picture_loan_others to delete
     */
    where?: picture_loan_otherWhereInput
    /**
     * Limit how many picture_loan_others to delete.
     */
    limit?: number
  }

  /**
   * picture_loan_other without action
   */
  export type picture_loan_otherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the picture_loan_other
     */
    select?: picture_loan_otherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the picture_loan_other
     */
    omit?: picture_loan_otherOmit<ExtArgs> | null
  }


  /**
   * Model real_investment
   */

  export type AggregateReal_investment = {
    _count: Real_investmentCountAggregateOutputType | null
    _avg: Real_investmentAvgAggregateOutputType | null
    _sum: Real_investmentSumAggregateOutputType | null
    _min: Real_investmentMinAggregateOutputType | null
    _max: Real_investmentMaxAggregateOutputType | null
  }

  export type Real_investmentAvgAggregateOutputType = {
    id: number | null
    investment: number | null
  }

  export type Real_investmentSumAggregateOutputType = {
    id: number | null
    investment: number | null
  }

  export type Real_investmentMinAggregateOutputType = {
    id: number | null
    investment: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Real_investmentMaxAggregateOutputType = {
    id: number | null
    investment: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Real_investmentCountAggregateOutputType = {
    id: number
    investment: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Real_investmentAvgAggregateInputType = {
    id?: true
    investment?: true
  }

  export type Real_investmentSumAggregateInputType = {
    id?: true
    investment?: true
  }

  export type Real_investmentMinAggregateInputType = {
    id?: true
    investment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Real_investmentMaxAggregateInputType = {
    id?: true
    investment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Real_investmentCountAggregateInputType = {
    id?: true
    investment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Real_investmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which real_investment to aggregate.
     */
    where?: real_investmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of real_investments to fetch.
     */
    orderBy?: real_investmentOrderByWithRelationInput | real_investmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: real_investmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` real_investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` real_investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned real_investments
    **/
    _count?: true | Real_investmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Real_investmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Real_investmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Real_investmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Real_investmentMaxAggregateInputType
  }

  export type GetReal_investmentAggregateType<T extends Real_investmentAggregateArgs> = {
        [P in keyof T & keyof AggregateReal_investment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReal_investment[P]>
      : GetScalarType<T[P], AggregateReal_investment[P]>
  }




  export type real_investmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: real_investmentWhereInput
    orderBy?: real_investmentOrderByWithAggregationInput | real_investmentOrderByWithAggregationInput[]
    by: Real_investmentScalarFieldEnum[] | Real_investmentScalarFieldEnum
    having?: real_investmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Real_investmentCountAggregateInputType | true
    _avg?: Real_investmentAvgAggregateInputType
    _sum?: Real_investmentSumAggregateInputType
    _min?: Real_investmentMinAggregateInputType
    _max?: Real_investmentMaxAggregateInputType
  }

  export type Real_investmentGroupByOutputType = {
    id: number
    investment: number
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Real_investmentCountAggregateOutputType | null
    _avg: Real_investmentAvgAggregateOutputType | null
    _sum: Real_investmentSumAggregateOutputType | null
    _min: Real_investmentMinAggregateOutputType | null
    _max: Real_investmentMaxAggregateOutputType | null
  }

  type GetReal_investmentGroupByPayload<T extends real_investmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Real_investmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Real_investmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Real_investmentGroupByOutputType[P]>
            : GetScalarType<T[P], Real_investmentGroupByOutputType[P]>
        }
      >
    >


  export type real_investmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["real_investment"]>



  export type real_investmentSelectScalar = {
    id?: boolean
    investment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type real_investmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "investment" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["real_investment"]>

  export type $real_investmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "real_investment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      investment: number
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["real_investment"]>
    composites: {}
  }

  type real_investmentGetPayload<S extends boolean | null | undefined | real_investmentDefaultArgs> = $Result.GetResult<Prisma.$real_investmentPayload, S>

  type real_investmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<real_investmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Real_investmentCountAggregateInputType | true
    }

  export interface real_investmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['real_investment'], meta: { name: 'real_investment' } }
    /**
     * Find zero or one Real_investment that matches the filter.
     * @param {real_investmentFindUniqueArgs} args - Arguments to find a Real_investment
     * @example
     * // Get one Real_investment
     * const real_investment = await prisma.real_investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends real_investmentFindUniqueArgs>(args: SelectSubset<T, real_investmentFindUniqueArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Real_investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {real_investmentFindUniqueOrThrowArgs} args - Arguments to find a Real_investment
     * @example
     * // Get one Real_investment
     * const real_investment = await prisma.real_investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends real_investmentFindUniqueOrThrowArgs>(args: SelectSubset<T, real_investmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Real_investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {real_investmentFindFirstArgs} args - Arguments to find a Real_investment
     * @example
     * // Get one Real_investment
     * const real_investment = await prisma.real_investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends real_investmentFindFirstArgs>(args?: SelectSubset<T, real_investmentFindFirstArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Real_investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {real_investmentFindFirstOrThrowArgs} args - Arguments to find a Real_investment
     * @example
     * // Get one Real_investment
     * const real_investment = await prisma.real_investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends real_investmentFindFirstOrThrowArgs>(args?: SelectSubset<T, real_investmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Real_investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {real_investmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Real_investments
     * const real_investments = await prisma.real_investment.findMany()
     * 
     * // Get first 10 Real_investments
     * const real_investments = await prisma.real_investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const real_investmentWithIdOnly = await prisma.real_investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends real_investmentFindManyArgs>(args?: SelectSubset<T, real_investmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Real_investment.
     * @param {real_investmentCreateArgs} args - Arguments to create a Real_investment.
     * @example
     * // Create one Real_investment
     * const Real_investment = await prisma.real_investment.create({
     *   data: {
     *     // ... data to create a Real_investment
     *   }
     * })
     * 
     */
    create<T extends real_investmentCreateArgs>(args: SelectSubset<T, real_investmentCreateArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Real_investments.
     * @param {real_investmentCreateManyArgs} args - Arguments to create many Real_investments.
     * @example
     * // Create many Real_investments
     * const real_investment = await prisma.real_investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends real_investmentCreateManyArgs>(args?: SelectSubset<T, real_investmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Real_investment.
     * @param {real_investmentDeleteArgs} args - Arguments to delete one Real_investment.
     * @example
     * // Delete one Real_investment
     * const Real_investment = await prisma.real_investment.delete({
     *   where: {
     *     // ... filter to delete one Real_investment
     *   }
     * })
     * 
     */
    delete<T extends real_investmentDeleteArgs>(args: SelectSubset<T, real_investmentDeleteArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Real_investment.
     * @param {real_investmentUpdateArgs} args - Arguments to update one Real_investment.
     * @example
     * // Update one Real_investment
     * const real_investment = await prisma.real_investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends real_investmentUpdateArgs>(args: SelectSubset<T, real_investmentUpdateArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Real_investments.
     * @param {real_investmentDeleteManyArgs} args - Arguments to filter Real_investments to delete.
     * @example
     * // Delete a few Real_investments
     * const { count } = await prisma.real_investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends real_investmentDeleteManyArgs>(args?: SelectSubset<T, real_investmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Real_investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {real_investmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Real_investments
     * const real_investment = await prisma.real_investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends real_investmentUpdateManyArgs>(args: SelectSubset<T, real_investmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Real_investment.
     * @param {real_investmentUpsertArgs} args - Arguments to update or create a Real_investment.
     * @example
     * // Update or create a Real_investment
     * const real_investment = await prisma.real_investment.upsert({
     *   create: {
     *     // ... data to create a Real_investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Real_investment we want to update
     *   }
     * })
     */
    upsert<T extends real_investmentUpsertArgs>(args: SelectSubset<T, real_investmentUpsertArgs<ExtArgs>>): Prisma__real_investmentClient<$Result.GetResult<Prisma.$real_investmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Real_investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {real_investmentCountArgs} args - Arguments to filter Real_investments to count.
     * @example
     * // Count the number of Real_investments
     * const count = await prisma.real_investment.count({
     *   where: {
     *     // ... the filter for the Real_investments we want to count
     *   }
     * })
    **/
    count<T extends real_investmentCountArgs>(
      args?: Subset<T, real_investmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Real_investmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Real_investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Real_investmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Real_investmentAggregateArgs>(args: Subset<T, Real_investmentAggregateArgs>): Prisma.PrismaPromise<GetReal_investmentAggregateType<T>>

    /**
     * Group by Real_investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {real_investmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends real_investmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: real_investmentGroupByArgs['orderBy'] }
        : { orderBy?: real_investmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, real_investmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReal_investmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the real_investment model
   */
  readonly fields: real_investmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for real_investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__real_investmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the real_investment model
   */
  interface real_investmentFieldRefs {
    readonly id: FieldRef<"real_investment", 'Int'>
    readonly investment: FieldRef<"real_investment", 'Int'>
    readonly created_at: FieldRef<"real_investment", 'DateTime'>
    readonly updated_at: FieldRef<"real_investment", 'DateTime'>
    readonly deleted_at: FieldRef<"real_investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * real_investment findUnique
   */
  export type real_investmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * Filter, which real_investment to fetch.
     */
    where: real_investmentWhereUniqueInput
  }

  /**
   * real_investment findUniqueOrThrow
   */
  export type real_investmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * Filter, which real_investment to fetch.
     */
    where: real_investmentWhereUniqueInput
  }

  /**
   * real_investment findFirst
   */
  export type real_investmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * Filter, which real_investment to fetch.
     */
    where?: real_investmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of real_investments to fetch.
     */
    orderBy?: real_investmentOrderByWithRelationInput | real_investmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for real_investments.
     */
    cursor?: real_investmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` real_investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` real_investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of real_investments.
     */
    distinct?: Real_investmentScalarFieldEnum | Real_investmentScalarFieldEnum[]
  }

  /**
   * real_investment findFirstOrThrow
   */
  export type real_investmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * Filter, which real_investment to fetch.
     */
    where?: real_investmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of real_investments to fetch.
     */
    orderBy?: real_investmentOrderByWithRelationInput | real_investmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for real_investments.
     */
    cursor?: real_investmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` real_investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` real_investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of real_investments.
     */
    distinct?: Real_investmentScalarFieldEnum | Real_investmentScalarFieldEnum[]
  }

  /**
   * real_investment findMany
   */
  export type real_investmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * Filter, which real_investments to fetch.
     */
    where?: real_investmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of real_investments to fetch.
     */
    orderBy?: real_investmentOrderByWithRelationInput | real_investmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing real_investments.
     */
    cursor?: real_investmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` real_investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` real_investments.
     */
    skip?: number
    distinct?: Real_investmentScalarFieldEnum | Real_investmentScalarFieldEnum[]
  }

  /**
   * real_investment create
   */
  export type real_investmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * The data needed to create a real_investment.
     */
    data: XOR<real_investmentCreateInput, real_investmentUncheckedCreateInput>
  }

  /**
   * real_investment createMany
   */
  export type real_investmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many real_investments.
     */
    data: real_investmentCreateManyInput | real_investmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * real_investment update
   */
  export type real_investmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * The data needed to update a real_investment.
     */
    data: XOR<real_investmentUpdateInput, real_investmentUncheckedUpdateInput>
    /**
     * Choose, which real_investment to update.
     */
    where: real_investmentWhereUniqueInput
  }

  /**
   * real_investment updateMany
   */
  export type real_investmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update real_investments.
     */
    data: XOR<real_investmentUpdateManyMutationInput, real_investmentUncheckedUpdateManyInput>
    /**
     * Filter which real_investments to update
     */
    where?: real_investmentWhereInput
    /**
     * Limit how many real_investments to update.
     */
    limit?: number
  }

  /**
   * real_investment upsert
   */
  export type real_investmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * The filter to search for the real_investment to update in case it exists.
     */
    where: real_investmentWhereUniqueInput
    /**
     * In case the real_investment found by the `where` argument doesn't exist, create a new real_investment with this data.
     */
    create: XOR<real_investmentCreateInput, real_investmentUncheckedCreateInput>
    /**
     * In case the real_investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<real_investmentUpdateInput, real_investmentUncheckedUpdateInput>
  }

  /**
   * real_investment delete
   */
  export type real_investmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
    /**
     * Filter which real_investment to delete.
     */
    where: real_investmentWhereUniqueInput
  }

  /**
   * real_investment deleteMany
   */
  export type real_investmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which real_investments to delete
     */
    where?: real_investmentWhereInput
    /**
     * Limit how many real_investments to delete.
     */
    limit?: number
  }

  /**
   * real_investment without action
   */
  export type real_investmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the real_investment
     */
    select?: real_investmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the real_investment
     */
    omit?: real_investmentOmit<ExtArgs> | null
  }


  /**
   * Model setting_land
   */

  export type AggregateSetting_land = {
    _count: Setting_landCountAggregateOutputType | null
    _avg: Setting_landAvgAggregateOutputType | null
    _sum: Setting_landSumAggregateOutputType | null
    _min: Setting_landMinAggregateOutputType | null
    _max: Setting_landMaxAggregateOutputType | null
  }

  export type Setting_landAvgAggregateOutputType = {
    id: number | null
    land_account_cash: Decimal | null
  }

  export type Setting_landSumAggregateOutputType = {
    id: number | null
    land_account_cash: Decimal | null
  }

  export type Setting_landMinAggregateOutputType = {
    id: number | null
    land_account_name: string | null
    land_account_cash: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Setting_landMaxAggregateOutputType = {
    id: number | null
    land_account_name: string | null
    land_account_cash: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Setting_landCountAggregateOutputType = {
    id: number
    land_account_name: number
    land_account_cash: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Setting_landAvgAggregateInputType = {
    id?: true
    land_account_cash?: true
  }

  export type Setting_landSumAggregateInputType = {
    id?: true
    land_account_cash?: true
  }

  export type Setting_landMinAggregateInputType = {
    id?: true
    land_account_name?: true
    land_account_cash?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Setting_landMaxAggregateInputType = {
    id?: true
    land_account_name?: true
    land_account_cash?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Setting_landCountAggregateInputType = {
    id?: true
    land_account_name?: true
    land_account_cash?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Setting_landAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting_land to aggregate.
     */
    where?: setting_landWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_lands to fetch.
     */
    orderBy?: setting_landOrderByWithRelationInput | setting_landOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: setting_landWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned setting_lands
    **/
    _count?: true | Setting_landCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Setting_landAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Setting_landSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Setting_landMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Setting_landMaxAggregateInputType
  }

  export type GetSetting_landAggregateType<T extends Setting_landAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting_land]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting_land[P]>
      : GetScalarType<T[P], AggregateSetting_land[P]>
  }




  export type setting_landGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setting_landWhereInput
    orderBy?: setting_landOrderByWithAggregationInput | setting_landOrderByWithAggregationInput[]
    by: Setting_landScalarFieldEnum[] | Setting_landScalarFieldEnum
    having?: setting_landScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Setting_landCountAggregateInputType | true
    _avg?: Setting_landAvgAggregateInputType
    _sum?: Setting_landSumAggregateInputType
    _min?: Setting_landMinAggregateInputType
    _max?: Setting_landMaxAggregateInputType
  }

  export type Setting_landGroupByOutputType = {
    id: number
    land_account_name: string
    land_account_cash: Decimal
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Setting_landCountAggregateOutputType | null
    _avg: Setting_landAvgAggregateOutputType | null
    _sum: Setting_landSumAggregateOutputType | null
    _min: Setting_landMinAggregateOutputType | null
    _max: Setting_landMaxAggregateOutputType | null
  }

  type GetSetting_landGroupByPayload<T extends setting_landGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Setting_landGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Setting_landGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Setting_landGroupByOutputType[P]>
            : GetScalarType<T[P], Setting_landGroupByOutputType[P]>
        }
      >
    >


  export type setting_landSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    land_account_name?: boolean
    land_account_cash?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["setting_land"]>



  export type setting_landSelectScalar = {
    id?: boolean
    land_account_name?: boolean
    land_account_cash?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type setting_landOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "land_account_name" | "land_account_cash" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["setting_land"]>

  export type $setting_landPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "setting_land"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      land_account_name: string
      land_account_cash: Prisma.Decimal
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["setting_land"]>
    composites: {}
  }

  type setting_landGetPayload<S extends boolean | null | undefined | setting_landDefaultArgs> = $Result.GetResult<Prisma.$setting_landPayload, S>

  type setting_landCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<setting_landFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Setting_landCountAggregateInputType | true
    }

  export interface setting_landDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['setting_land'], meta: { name: 'setting_land' } }
    /**
     * Find zero or one Setting_land that matches the filter.
     * @param {setting_landFindUniqueArgs} args - Arguments to find a Setting_land
     * @example
     * // Get one Setting_land
     * const setting_land = await prisma.setting_land.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends setting_landFindUniqueArgs>(args: SelectSubset<T, setting_landFindUniqueArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting_land that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {setting_landFindUniqueOrThrowArgs} args - Arguments to find a Setting_land
     * @example
     * // Get one Setting_land
     * const setting_land = await prisma.setting_land.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends setting_landFindUniqueOrThrowArgs>(args: SelectSubset<T, setting_landFindUniqueOrThrowArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting_land that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_landFindFirstArgs} args - Arguments to find a Setting_land
     * @example
     * // Get one Setting_land
     * const setting_land = await prisma.setting_land.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends setting_landFindFirstArgs>(args?: SelectSubset<T, setting_landFindFirstArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting_land that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_landFindFirstOrThrowArgs} args - Arguments to find a Setting_land
     * @example
     * // Get one Setting_land
     * const setting_land = await prisma.setting_land.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends setting_landFindFirstOrThrowArgs>(args?: SelectSubset<T, setting_landFindFirstOrThrowArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setting_lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_landFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setting_lands
     * const setting_lands = await prisma.setting_land.findMany()
     * 
     * // Get first 10 Setting_lands
     * const setting_lands = await prisma.setting_land.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setting_landWithIdOnly = await prisma.setting_land.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends setting_landFindManyArgs>(args?: SelectSubset<T, setting_landFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting_land.
     * @param {setting_landCreateArgs} args - Arguments to create a Setting_land.
     * @example
     * // Create one Setting_land
     * const Setting_land = await prisma.setting_land.create({
     *   data: {
     *     // ... data to create a Setting_land
     *   }
     * })
     * 
     */
    create<T extends setting_landCreateArgs>(args: SelectSubset<T, setting_landCreateArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setting_lands.
     * @param {setting_landCreateManyArgs} args - Arguments to create many Setting_lands.
     * @example
     * // Create many Setting_lands
     * const setting_land = await prisma.setting_land.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends setting_landCreateManyArgs>(args?: SelectSubset<T, setting_landCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting_land.
     * @param {setting_landDeleteArgs} args - Arguments to delete one Setting_land.
     * @example
     * // Delete one Setting_land
     * const Setting_land = await prisma.setting_land.delete({
     *   where: {
     *     // ... filter to delete one Setting_land
     *   }
     * })
     * 
     */
    delete<T extends setting_landDeleteArgs>(args: SelectSubset<T, setting_landDeleteArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting_land.
     * @param {setting_landUpdateArgs} args - Arguments to update one Setting_land.
     * @example
     * // Update one Setting_land
     * const setting_land = await prisma.setting_land.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends setting_landUpdateArgs>(args: SelectSubset<T, setting_landUpdateArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setting_lands.
     * @param {setting_landDeleteManyArgs} args - Arguments to filter Setting_lands to delete.
     * @example
     * // Delete a few Setting_lands
     * const { count } = await prisma.setting_land.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends setting_landDeleteManyArgs>(args?: SelectSubset<T, setting_landDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setting_lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_landUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setting_lands
     * const setting_land = await prisma.setting_land.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends setting_landUpdateManyArgs>(args: SelectSubset<T, setting_landUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting_land.
     * @param {setting_landUpsertArgs} args - Arguments to update or create a Setting_land.
     * @example
     * // Update or create a Setting_land
     * const setting_land = await prisma.setting_land.upsert({
     *   create: {
     *     // ... data to create a Setting_land
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting_land we want to update
     *   }
     * })
     */
    upsert<T extends setting_landUpsertArgs>(args: SelectSubset<T, setting_landUpsertArgs<ExtArgs>>): Prisma__setting_landClient<$Result.GetResult<Prisma.$setting_landPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setting_lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_landCountArgs} args - Arguments to filter Setting_lands to count.
     * @example
     * // Count the number of Setting_lands
     * const count = await prisma.setting_land.count({
     *   where: {
     *     // ... the filter for the Setting_lands we want to count
     *   }
     * })
    **/
    count<T extends setting_landCountArgs>(
      args?: Subset<T, setting_landCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Setting_landCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting_land.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Setting_landAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Setting_landAggregateArgs>(args: Subset<T, Setting_landAggregateArgs>): Prisma.PrismaPromise<GetSetting_landAggregateType<T>>

    /**
     * Group by Setting_land.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_landGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends setting_landGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: setting_landGroupByArgs['orderBy'] }
        : { orderBy?: setting_landGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, setting_landGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetting_landGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the setting_land model
   */
  readonly fields: setting_landFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for setting_land.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__setting_landClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the setting_land model
   */
  interface setting_landFieldRefs {
    readonly id: FieldRef<"setting_land", 'Int'>
    readonly land_account_name: FieldRef<"setting_land", 'String'>
    readonly land_account_cash: FieldRef<"setting_land", 'Decimal'>
    readonly created_at: FieldRef<"setting_land", 'DateTime'>
    readonly updated_at: FieldRef<"setting_land", 'DateTime'>
    readonly deleted_at: FieldRef<"setting_land", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * setting_land findUnique
   */
  export type setting_landFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * Filter, which setting_land to fetch.
     */
    where: setting_landWhereUniqueInput
  }

  /**
   * setting_land findUniqueOrThrow
   */
  export type setting_landFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * Filter, which setting_land to fetch.
     */
    where: setting_landWhereUniqueInput
  }

  /**
   * setting_land findFirst
   */
  export type setting_landFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * Filter, which setting_land to fetch.
     */
    where?: setting_landWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_lands to fetch.
     */
    orderBy?: setting_landOrderByWithRelationInput | setting_landOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setting_lands.
     */
    cursor?: setting_landWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setting_lands.
     */
    distinct?: Setting_landScalarFieldEnum | Setting_landScalarFieldEnum[]
  }

  /**
   * setting_land findFirstOrThrow
   */
  export type setting_landFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * Filter, which setting_land to fetch.
     */
    where?: setting_landWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_lands to fetch.
     */
    orderBy?: setting_landOrderByWithRelationInput | setting_landOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setting_lands.
     */
    cursor?: setting_landWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setting_lands.
     */
    distinct?: Setting_landScalarFieldEnum | Setting_landScalarFieldEnum[]
  }

  /**
   * setting_land findMany
   */
  export type setting_landFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * Filter, which setting_lands to fetch.
     */
    where?: setting_landWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_lands to fetch.
     */
    orderBy?: setting_landOrderByWithRelationInput | setting_landOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing setting_lands.
     */
    cursor?: setting_landWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_lands.
     */
    skip?: number
    distinct?: Setting_landScalarFieldEnum | Setting_landScalarFieldEnum[]
  }

  /**
   * setting_land create
   */
  export type setting_landCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * The data needed to create a setting_land.
     */
    data: XOR<setting_landCreateInput, setting_landUncheckedCreateInput>
  }

  /**
   * setting_land createMany
   */
  export type setting_landCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many setting_lands.
     */
    data: setting_landCreateManyInput | setting_landCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * setting_land update
   */
  export type setting_landUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * The data needed to update a setting_land.
     */
    data: XOR<setting_landUpdateInput, setting_landUncheckedUpdateInput>
    /**
     * Choose, which setting_land to update.
     */
    where: setting_landWhereUniqueInput
  }

  /**
   * setting_land updateMany
   */
  export type setting_landUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update setting_lands.
     */
    data: XOR<setting_landUpdateManyMutationInput, setting_landUncheckedUpdateManyInput>
    /**
     * Filter which setting_lands to update
     */
    where?: setting_landWhereInput
    /**
     * Limit how many setting_lands to update.
     */
    limit?: number
  }

  /**
   * setting_land upsert
   */
  export type setting_landUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * The filter to search for the setting_land to update in case it exists.
     */
    where: setting_landWhereUniqueInput
    /**
     * In case the setting_land found by the `where` argument doesn't exist, create a new setting_land with this data.
     */
    create: XOR<setting_landCreateInput, setting_landUncheckedCreateInput>
    /**
     * In case the setting_land was found with the provided `where` argument, update it with this data.
     */
    update: XOR<setting_landUpdateInput, setting_landUncheckedUpdateInput>
  }

  /**
   * setting_land delete
   */
  export type setting_landDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
    /**
     * Filter which setting_land to delete.
     */
    where: setting_landWhereUniqueInput
  }

  /**
   * setting_land deleteMany
   */
  export type setting_landDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting_lands to delete
     */
    where?: setting_landWhereInput
    /**
     * Limit how many setting_lands to delete.
     */
    limit?: number
  }

  /**
   * setting_land without action
   */
  export type setting_landDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land
     */
    select?: setting_landSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land
     */
    omit?: setting_landOmit<ExtArgs> | null
  }


  /**
   * Model setting_land_logs
   */

  export type AggregateSetting_land_logs = {
    _count: Setting_land_logsCountAggregateOutputType | null
    _avg: Setting_land_logsAvgAggregateOutputType | null
    _sum: Setting_land_logsSumAggregateOutputType | null
    _min: Setting_land_logsMinAggregateOutputType | null
    _max: Setting_land_logsMaxAggregateOutputType | null
  }

  export type Setting_land_logsAvgAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_money: Decimal | null
    employee_id: number | null
  }

  export type Setting_land_logsSumAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_money: Decimal | null
    employee_id: number | null
  }

  export type Setting_land_logsMinAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_detail: string | null
    setting_land_money: Decimal | null
    setting_land_note: string | null
    employee_id: number | null
    employee_name: string | null
    created_at_logs: Date | null
    updated_at_logs: Date | null
    deleted_at_logs: Date | null
  }

  export type Setting_land_logsMaxAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_detail: string | null
    setting_land_money: Decimal | null
    setting_land_note: string | null
    employee_id: number | null
    employee_name: string | null
    created_at_logs: Date | null
    updated_at_logs: Date | null
    deleted_at_logs: Date | null
  }

  export type Setting_land_logsCountAggregateOutputType = {
    id: number
    setting_land_id: number
    setting_land_detail: number
    setting_land_money: number
    setting_land_note: number
    employee_id: number
    employee_name: number
    created_at_logs: number
    updated_at_logs: number
    deleted_at_logs: number
    _all: number
  }


  export type Setting_land_logsAvgAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_money?: true
    employee_id?: true
  }

  export type Setting_land_logsSumAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_money?: true
    employee_id?: true
  }

  export type Setting_land_logsMinAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_detail?: true
    setting_land_money?: true
    setting_land_note?: true
    employee_id?: true
    employee_name?: true
    created_at_logs?: true
    updated_at_logs?: true
    deleted_at_logs?: true
  }

  export type Setting_land_logsMaxAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_detail?: true
    setting_land_money?: true
    setting_land_note?: true
    employee_id?: true
    employee_name?: true
    created_at_logs?: true
    updated_at_logs?: true
    deleted_at_logs?: true
  }

  export type Setting_land_logsCountAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_detail?: true
    setting_land_money?: true
    setting_land_note?: true
    employee_id?: true
    employee_name?: true
    created_at_logs?: true
    updated_at_logs?: true
    deleted_at_logs?: true
    _all?: true
  }

  export type Setting_land_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting_land_logs to aggregate.
     */
    where?: setting_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_logs to fetch.
     */
    orderBy?: setting_land_logsOrderByWithRelationInput | setting_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: setting_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned setting_land_logs
    **/
    _count?: true | Setting_land_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Setting_land_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Setting_land_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Setting_land_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Setting_land_logsMaxAggregateInputType
  }

  export type GetSetting_land_logsAggregateType<T extends Setting_land_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting_land_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting_land_logs[P]>
      : GetScalarType<T[P], AggregateSetting_land_logs[P]>
  }




  export type setting_land_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setting_land_logsWhereInput
    orderBy?: setting_land_logsOrderByWithAggregationInput | setting_land_logsOrderByWithAggregationInput[]
    by: Setting_land_logsScalarFieldEnum[] | Setting_land_logsScalarFieldEnum
    having?: setting_land_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Setting_land_logsCountAggregateInputType | true
    _avg?: Setting_land_logsAvgAggregateInputType
    _sum?: Setting_land_logsSumAggregateInputType
    _min?: Setting_land_logsMinAggregateInputType
    _max?: Setting_land_logsMaxAggregateInputType
  }

  export type Setting_land_logsGroupByOutputType = {
    id: number
    setting_land_id: number
    setting_land_detail: string
    setting_land_money: Decimal
    setting_land_note: string | null
    employee_id: number
    employee_name: string | null
    created_at_logs: Date | null
    updated_at_logs: Date | null
    deleted_at_logs: Date | null
    _count: Setting_land_logsCountAggregateOutputType | null
    _avg: Setting_land_logsAvgAggregateOutputType | null
    _sum: Setting_land_logsSumAggregateOutputType | null
    _min: Setting_land_logsMinAggregateOutputType | null
    _max: Setting_land_logsMaxAggregateOutputType | null
  }

  type GetSetting_land_logsGroupByPayload<T extends setting_land_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Setting_land_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Setting_land_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Setting_land_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Setting_land_logsGroupByOutputType[P]>
        }
      >
    >


  export type setting_land_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setting_land_id?: boolean
    setting_land_detail?: boolean
    setting_land_money?: boolean
    setting_land_note?: boolean
    employee_id?: boolean
    employee_name?: boolean
    created_at_logs?: boolean
    updated_at_logs?: boolean
    deleted_at_logs?: boolean
  }, ExtArgs["result"]["setting_land_logs"]>



  export type setting_land_logsSelectScalar = {
    id?: boolean
    setting_land_id?: boolean
    setting_land_detail?: boolean
    setting_land_money?: boolean
    setting_land_note?: boolean
    employee_id?: boolean
    employee_name?: boolean
    created_at_logs?: boolean
    updated_at_logs?: boolean
    deleted_at_logs?: boolean
  }

  export type setting_land_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "setting_land_id" | "setting_land_detail" | "setting_land_money" | "setting_land_note" | "employee_id" | "employee_name" | "created_at_logs" | "updated_at_logs" | "deleted_at_logs", ExtArgs["result"]["setting_land_logs"]>

  export type $setting_land_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "setting_land_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      setting_land_id: number
      setting_land_detail: string
      setting_land_money: Prisma.Decimal
      setting_land_note: string | null
      employee_id: number
      employee_name: string | null
      created_at_logs: Date | null
      updated_at_logs: Date | null
      deleted_at_logs: Date | null
    }, ExtArgs["result"]["setting_land_logs"]>
    composites: {}
  }

  type setting_land_logsGetPayload<S extends boolean | null | undefined | setting_land_logsDefaultArgs> = $Result.GetResult<Prisma.$setting_land_logsPayload, S>

  type setting_land_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<setting_land_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Setting_land_logsCountAggregateInputType | true
    }

  export interface setting_land_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['setting_land_logs'], meta: { name: 'setting_land_logs' } }
    /**
     * Find zero or one Setting_land_logs that matches the filter.
     * @param {setting_land_logsFindUniqueArgs} args - Arguments to find a Setting_land_logs
     * @example
     * // Get one Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends setting_land_logsFindUniqueArgs>(args: SelectSubset<T, setting_land_logsFindUniqueArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting_land_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {setting_land_logsFindUniqueOrThrowArgs} args - Arguments to find a Setting_land_logs
     * @example
     * // Get one Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends setting_land_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, setting_land_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting_land_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_logsFindFirstArgs} args - Arguments to find a Setting_land_logs
     * @example
     * // Get one Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends setting_land_logsFindFirstArgs>(args?: SelectSubset<T, setting_land_logsFindFirstArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting_land_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_logsFindFirstOrThrowArgs} args - Arguments to find a Setting_land_logs
     * @example
     * // Get one Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends setting_land_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, setting_land_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setting_land_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.findMany()
     * 
     * // Get first 10 Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setting_land_logsWithIdOnly = await prisma.setting_land_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends setting_land_logsFindManyArgs>(args?: SelectSubset<T, setting_land_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting_land_logs.
     * @param {setting_land_logsCreateArgs} args - Arguments to create a Setting_land_logs.
     * @example
     * // Create one Setting_land_logs
     * const Setting_land_logs = await prisma.setting_land_logs.create({
     *   data: {
     *     // ... data to create a Setting_land_logs
     *   }
     * })
     * 
     */
    create<T extends setting_land_logsCreateArgs>(args: SelectSubset<T, setting_land_logsCreateArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setting_land_logs.
     * @param {setting_land_logsCreateManyArgs} args - Arguments to create many Setting_land_logs.
     * @example
     * // Create many Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends setting_land_logsCreateManyArgs>(args?: SelectSubset<T, setting_land_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting_land_logs.
     * @param {setting_land_logsDeleteArgs} args - Arguments to delete one Setting_land_logs.
     * @example
     * // Delete one Setting_land_logs
     * const Setting_land_logs = await prisma.setting_land_logs.delete({
     *   where: {
     *     // ... filter to delete one Setting_land_logs
     *   }
     * })
     * 
     */
    delete<T extends setting_land_logsDeleteArgs>(args: SelectSubset<T, setting_land_logsDeleteArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting_land_logs.
     * @param {setting_land_logsUpdateArgs} args - Arguments to update one Setting_land_logs.
     * @example
     * // Update one Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends setting_land_logsUpdateArgs>(args: SelectSubset<T, setting_land_logsUpdateArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setting_land_logs.
     * @param {setting_land_logsDeleteManyArgs} args - Arguments to filter Setting_land_logs to delete.
     * @example
     * // Delete a few Setting_land_logs
     * const { count } = await prisma.setting_land_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends setting_land_logsDeleteManyArgs>(args?: SelectSubset<T, setting_land_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setting_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends setting_land_logsUpdateManyArgs>(args: SelectSubset<T, setting_land_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting_land_logs.
     * @param {setting_land_logsUpsertArgs} args - Arguments to update or create a Setting_land_logs.
     * @example
     * // Update or create a Setting_land_logs
     * const setting_land_logs = await prisma.setting_land_logs.upsert({
     *   create: {
     *     // ... data to create a Setting_land_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting_land_logs we want to update
     *   }
     * })
     */
    upsert<T extends setting_land_logsUpsertArgs>(args: SelectSubset<T, setting_land_logsUpsertArgs<ExtArgs>>): Prisma__setting_land_logsClient<$Result.GetResult<Prisma.$setting_land_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setting_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_logsCountArgs} args - Arguments to filter Setting_land_logs to count.
     * @example
     * // Count the number of Setting_land_logs
     * const count = await prisma.setting_land_logs.count({
     *   where: {
     *     // ... the filter for the Setting_land_logs we want to count
     *   }
     * })
    **/
    count<T extends setting_land_logsCountArgs>(
      args?: Subset<T, setting_land_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Setting_land_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Setting_land_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Setting_land_logsAggregateArgs>(args: Subset<T, Setting_land_logsAggregateArgs>): Prisma.PrismaPromise<GetSetting_land_logsAggregateType<T>>

    /**
     * Group by Setting_land_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends setting_land_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: setting_land_logsGroupByArgs['orderBy'] }
        : { orderBy?: setting_land_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, setting_land_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetting_land_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the setting_land_logs model
   */
  readonly fields: setting_land_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for setting_land_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__setting_land_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the setting_land_logs model
   */
  interface setting_land_logsFieldRefs {
    readonly id: FieldRef<"setting_land_logs", 'Int'>
    readonly setting_land_id: FieldRef<"setting_land_logs", 'Int'>
    readonly setting_land_detail: FieldRef<"setting_land_logs", 'String'>
    readonly setting_land_money: FieldRef<"setting_land_logs", 'Decimal'>
    readonly setting_land_note: FieldRef<"setting_land_logs", 'String'>
    readonly employee_id: FieldRef<"setting_land_logs", 'Int'>
    readonly employee_name: FieldRef<"setting_land_logs", 'String'>
    readonly created_at_logs: FieldRef<"setting_land_logs", 'DateTime'>
    readonly updated_at_logs: FieldRef<"setting_land_logs", 'DateTime'>
    readonly deleted_at_logs: FieldRef<"setting_land_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * setting_land_logs findUnique
   */
  export type setting_land_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_logs to fetch.
     */
    where: setting_land_logsWhereUniqueInput
  }

  /**
   * setting_land_logs findUniqueOrThrow
   */
  export type setting_land_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_logs to fetch.
     */
    where: setting_land_logsWhereUniqueInput
  }

  /**
   * setting_land_logs findFirst
   */
  export type setting_land_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_logs to fetch.
     */
    where?: setting_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_logs to fetch.
     */
    orderBy?: setting_land_logsOrderByWithRelationInput | setting_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setting_land_logs.
     */
    cursor?: setting_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setting_land_logs.
     */
    distinct?: Setting_land_logsScalarFieldEnum | Setting_land_logsScalarFieldEnum[]
  }

  /**
   * setting_land_logs findFirstOrThrow
   */
  export type setting_land_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_logs to fetch.
     */
    where?: setting_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_logs to fetch.
     */
    orderBy?: setting_land_logsOrderByWithRelationInput | setting_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setting_land_logs.
     */
    cursor?: setting_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setting_land_logs.
     */
    distinct?: Setting_land_logsScalarFieldEnum | Setting_land_logsScalarFieldEnum[]
  }

  /**
   * setting_land_logs findMany
   */
  export type setting_land_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_logs to fetch.
     */
    where?: setting_land_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_logs to fetch.
     */
    orderBy?: setting_land_logsOrderByWithRelationInput | setting_land_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing setting_land_logs.
     */
    cursor?: setting_land_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_logs.
     */
    skip?: number
    distinct?: Setting_land_logsScalarFieldEnum | Setting_land_logsScalarFieldEnum[]
  }

  /**
   * setting_land_logs create
   */
  export type setting_land_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a setting_land_logs.
     */
    data: XOR<setting_land_logsCreateInput, setting_land_logsUncheckedCreateInput>
  }

  /**
   * setting_land_logs createMany
   */
  export type setting_land_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many setting_land_logs.
     */
    data: setting_land_logsCreateManyInput | setting_land_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * setting_land_logs update
   */
  export type setting_land_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a setting_land_logs.
     */
    data: XOR<setting_land_logsUpdateInput, setting_land_logsUncheckedUpdateInput>
    /**
     * Choose, which setting_land_logs to update.
     */
    where: setting_land_logsWhereUniqueInput
  }

  /**
   * setting_land_logs updateMany
   */
  export type setting_land_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update setting_land_logs.
     */
    data: XOR<setting_land_logsUpdateManyMutationInput, setting_land_logsUncheckedUpdateManyInput>
    /**
     * Filter which setting_land_logs to update
     */
    where?: setting_land_logsWhereInput
    /**
     * Limit how many setting_land_logs to update.
     */
    limit?: number
  }

  /**
   * setting_land_logs upsert
   */
  export type setting_land_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the setting_land_logs to update in case it exists.
     */
    where: setting_land_logsWhereUniqueInput
    /**
     * In case the setting_land_logs found by the `where` argument doesn't exist, create a new setting_land_logs with this data.
     */
    create: XOR<setting_land_logsCreateInput, setting_land_logsUncheckedCreateInput>
    /**
     * In case the setting_land_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<setting_land_logsUpdateInput, setting_land_logsUncheckedUpdateInput>
  }

  /**
   * setting_land_logs delete
   */
  export type setting_land_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
    /**
     * Filter which setting_land_logs to delete.
     */
    where: setting_land_logsWhereUniqueInput
  }

  /**
   * setting_land_logs deleteMany
   */
  export type setting_land_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting_land_logs to delete
     */
    where?: setting_land_logsWhereInput
    /**
     * Limit how many setting_land_logs to delete.
     */
    limit?: number
  }

  /**
   * setting_land_logs without action
   */
  export type setting_land_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_logs
     */
    select?: setting_land_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_logs
     */
    omit?: setting_land_logsOmit<ExtArgs> | null
  }


  /**
   * Model setting_land_report
   */

  export type AggregateSetting_land_report = {
    _count: Setting_land_reportCountAggregateOutputType | null
    _avg: Setting_land_reportAvgAggregateOutputType | null
    _sum: Setting_land_reportSumAggregateOutputType | null
    _min: Setting_land_reportMinAggregateOutputType | null
    _max: Setting_land_reportMaxAggregateOutputType | null
  }

  export type Setting_land_reportAvgAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_report_money: Decimal | null
    setting_land_report_account_balance: Decimal | null
    employee_id: number | null
  }

  export type Setting_land_reportSumAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_report_money: Decimal | null
    setting_land_report_account_balance: Decimal | null
    employee_id: number | null
  }

  export type Setting_land_reportMinAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_report_detail: string | null
    setting_land_report_money: Decimal | null
    setting_land_report_note: string | null
    setting_land_report_account_balance: Decimal | null
    employee_id: number | null
    employee_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Setting_land_reportMaxAggregateOutputType = {
    id: number | null
    setting_land_id: number | null
    setting_land_report_detail: string | null
    setting_land_report_money: Decimal | null
    setting_land_report_note: string | null
    setting_land_report_account_balance: Decimal | null
    employee_id: number | null
    employee_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Setting_land_reportCountAggregateOutputType = {
    id: number
    setting_land_id: number
    setting_land_report_detail: number
    setting_land_report_money: number
    setting_land_report_note: number
    setting_land_report_account_balance: number
    employee_id: number
    employee_name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Setting_land_reportAvgAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_report_money?: true
    setting_land_report_account_balance?: true
    employee_id?: true
  }

  export type Setting_land_reportSumAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_report_money?: true
    setting_land_report_account_balance?: true
    employee_id?: true
  }

  export type Setting_land_reportMinAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_report_detail?: true
    setting_land_report_money?: true
    setting_land_report_note?: true
    setting_land_report_account_balance?: true
    employee_id?: true
    employee_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Setting_land_reportMaxAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_report_detail?: true
    setting_land_report_money?: true
    setting_land_report_note?: true
    setting_land_report_account_balance?: true
    employee_id?: true
    employee_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Setting_land_reportCountAggregateInputType = {
    id?: true
    setting_land_id?: true
    setting_land_report_detail?: true
    setting_land_report_money?: true
    setting_land_report_note?: true
    setting_land_report_account_balance?: true
    employee_id?: true
    employee_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Setting_land_reportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting_land_report to aggregate.
     */
    where?: setting_land_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_reports to fetch.
     */
    orderBy?: setting_land_reportOrderByWithRelationInput | setting_land_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: setting_land_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned setting_land_reports
    **/
    _count?: true | Setting_land_reportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Setting_land_reportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Setting_land_reportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Setting_land_reportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Setting_land_reportMaxAggregateInputType
  }

  export type GetSetting_land_reportAggregateType<T extends Setting_land_reportAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting_land_report]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting_land_report[P]>
      : GetScalarType<T[P], AggregateSetting_land_report[P]>
  }




  export type setting_land_reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setting_land_reportWhereInput
    orderBy?: setting_land_reportOrderByWithAggregationInput | setting_land_reportOrderByWithAggregationInput[]
    by: Setting_land_reportScalarFieldEnum[] | Setting_land_reportScalarFieldEnum
    having?: setting_land_reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Setting_land_reportCountAggregateInputType | true
    _avg?: Setting_land_reportAvgAggregateInputType
    _sum?: Setting_land_reportSumAggregateInputType
    _min?: Setting_land_reportMinAggregateInputType
    _max?: Setting_land_reportMaxAggregateInputType
  }

  export type Setting_land_reportGroupByOutputType = {
    id: number
    setting_land_id: number
    setting_land_report_detail: string
    setting_land_report_money: Decimal
    setting_land_report_note: string | null
    setting_land_report_account_balance: Decimal | null
    employee_id: number
    employee_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Setting_land_reportCountAggregateOutputType | null
    _avg: Setting_land_reportAvgAggregateOutputType | null
    _sum: Setting_land_reportSumAggregateOutputType | null
    _min: Setting_land_reportMinAggregateOutputType | null
    _max: Setting_land_reportMaxAggregateOutputType | null
  }

  type GetSetting_land_reportGroupByPayload<T extends setting_land_reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Setting_land_reportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Setting_land_reportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Setting_land_reportGroupByOutputType[P]>
            : GetScalarType<T[P], Setting_land_reportGroupByOutputType[P]>
        }
      >
    >


  export type setting_land_reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setting_land_id?: boolean
    setting_land_report_detail?: boolean
    setting_land_report_money?: boolean
    setting_land_report_note?: boolean
    setting_land_report_account_balance?: boolean
    employee_id?: boolean
    employee_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["setting_land_report"]>



  export type setting_land_reportSelectScalar = {
    id?: boolean
    setting_land_id?: boolean
    setting_land_report_detail?: boolean
    setting_land_report_money?: boolean
    setting_land_report_note?: boolean
    setting_land_report_account_balance?: boolean
    employee_id?: boolean
    employee_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type setting_land_reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "setting_land_id" | "setting_land_report_detail" | "setting_land_report_money" | "setting_land_report_note" | "setting_land_report_account_balance" | "employee_id" | "employee_name" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["setting_land_report"]>

  export type $setting_land_reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "setting_land_report"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      setting_land_id: number
      setting_land_report_detail: string
      setting_land_report_money: Prisma.Decimal
      setting_land_report_note: string | null
      setting_land_report_account_balance: Prisma.Decimal | null
      employee_id: number
      employee_name: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["setting_land_report"]>
    composites: {}
  }

  type setting_land_reportGetPayload<S extends boolean | null | undefined | setting_land_reportDefaultArgs> = $Result.GetResult<Prisma.$setting_land_reportPayload, S>

  type setting_land_reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<setting_land_reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Setting_land_reportCountAggregateInputType | true
    }

  export interface setting_land_reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['setting_land_report'], meta: { name: 'setting_land_report' } }
    /**
     * Find zero or one Setting_land_report that matches the filter.
     * @param {setting_land_reportFindUniqueArgs} args - Arguments to find a Setting_land_report
     * @example
     * // Get one Setting_land_report
     * const setting_land_report = await prisma.setting_land_report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends setting_land_reportFindUniqueArgs>(args: SelectSubset<T, setting_land_reportFindUniqueArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting_land_report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {setting_land_reportFindUniqueOrThrowArgs} args - Arguments to find a Setting_land_report
     * @example
     * // Get one Setting_land_report
     * const setting_land_report = await prisma.setting_land_report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends setting_land_reportFindUniqueOrThrowArgs>(args: SelectSubset<T, setting_land_reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting_land_report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_reportFindFirstArgs} args - Arguments to find a Setting_land_report
     * @example
     * // Get one Setting_land_report
     * const setting_land_report = await prisma.setting_land_report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends setting_land_reportFindFirstArgs>(args?: SelectSubset<T, setting_land_reportFindFirstArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting_land_report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_reportFindFirstOrThrowArgs} args - Arguments to find a Setting_land_report
     * @example
     * // Get one Setting_land_report
     * const setting_land_report = await prisma.setting_land_report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends setting_land_reportFindFirstOrThrowArgs>(args?: SelectSubset<T, setting_land_reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setting_land_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setting_land_reports
     * const setting_land_reports = await prisma.setting_land_report.findMany()
     * 
     * // Get first 10 Setting_land_reports
     * const setting_land_reports = await prisma.setting_land_report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setting_land_reportWithIdOnly = await prisma.setting_land_report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends setting_land_reportFindManyArgs>(args?: SelectSubset<T, setting_land_reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting_land_report.
     * @param {setting_land_reportCreateArgs} args - Arguments to create a Setting_land_report.
     * @example
     * // Create one Setting_land_report
     * const Setting_land_report = await prisma.setting_land_report.create({
     *   data: {
     *     // ... data to create a Setting_land_report
     *   }
     * })
     * 
     */
    create<T extends setting_land_reportCreateArgs>(args: SelectSubset<T, setting_land_reportCreateArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setting_land_reports.
     * @param {setting_land_reportCreateManyArgs} args - Arguments to create many Setting_land_reports.
     * @example
     * // Create many Setting_land_reports
     * const setting_land_report = await prisma.setting_land_report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends setting_land_reportCreateManyArgs>(args?: SelectSubset<T, setting_land_reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting_land_report.
     * @param {setting_land_reportDeleteArgs} args - Arguments to delete one Setting_land_report.
     * @example
     * // Delete one Setting_land_report
     * const Setting_land_report = await prisma.setting_land_report.delete({
     *   where: {
     *     // ... filter to delete one Setting_land_report
     *   }
     * })
     * 
     */
    delete<T extends setting_land_reportDeleteArgs>(args: SelectSubset<T, setting_land_reportDeleteArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting_land_report.
     * @param {setting_land_reportUpdateArgs} args - Arguments to update one Setting_land_report.
     * @example
     * // Update one Setting_land_report
     * const setting_land_report = await prisma.setting_land_report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends setting_land_reportUpdateArgs>(args: SelectSubset<T, setting_land_reportUpdateArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setting_land_reports.
     * @param {setting_land_reportDeleteManyArgs} args - Arguments to filter Setting_land_reports to delete.
     * @example
     * // Delete a few Setting_land_reports
     * const { count } = await prisma.setting_land_report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends setting_land_reportDeleteManyArgs>(args?: SelectSubset<T, setting_land_reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setting_land_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setting_land_reports
     * const setting_land_report = await prisma.setting_land_report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends setting_land_reportUpdateManyArgs>(args: SelectSubset<T, setting_land_reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting_land_report.
     * @param {setting_land_reportUpsertArgs} args - Arguments to update or create a Setting_land_report.
     * @example
     * // Update or create a Setting_land_report
     * const setting_land_report = await prisma.setting_land_report.upsert({
     *   create: {
     *     // ... data to create a Setting_land_report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting_land_report we want to update
     *   }
     * })
     */
    upsert<T extends setting_land_reportUpsertArgs>(args: SelectSubset<T, setting_land_reportUpsertArgs<ExtArgs>>): Prisma__setting_land_reportClient<$Result.GetResult<Prisma.$setting_land_reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setting_land_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_reportCountArgs} args - Arguments to filter Setting_land_reports to count.
     * @example
     * // Count the number of Setting_land_reports
     * const count = await prisma.setting_land_report.count({
     *   where: {
     *     // ... the filter for the Setting_land_reports we want to count
     *   }
     * })
    **/
    count<T extends setting_land_reportCountArgs>(
      args?: Subset<T, setting_land_reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Setting_land_reportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting_land_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Setting_land_reportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Setting_land_reportAggregateArgs>(args: Subset<T, Setting_land_reportAggregateArgs>): Prisma.PrismaPromise<GetSetting_land_reportAggregateType<T>>

    /**
     * Group by Setting_land_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setting_land_reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends setting_land_reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: setting_land_reportGroupByArgs['orderBy'] }
        : { orderBy?: setting_land_reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, setting_land_reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetting_land_reportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the setting_land_report model
   */
  readonly fields: setting_land_reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for setting_land_report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__setting_land_reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the setting_land_report model
   */
  interface setting_land_reportFieldRefs {
    readonly id: FieldRef<"setting_land_report", 'Int'>
    readonly setting_land_id: FieldRef<"setting_land_report", 'Int'>
    readonly setting_land_report_detail: FieldRef<"setting_land_report", 'String'>
    readonly setting_land_report_money: FieldRef<"setting_land_report", 'Decimal'>
    readonly setting_land_report_note: FieldRef<"setting_land_report", 'String'>
    readonly setting_land_report_account_balance: FieldRef<"setting_land_report", 'Decimal'>
    readonly employee_id: FieldRef<"setting_land_report", 'Int'>
    readonly employee_name: FieldRef<"setting_land_report", 'String'>
    readonly created_at: FieldRef<"setting_land_report", 'DateTime'>
    readonly updated_at: FieldRef<"setting_land_report", 'DateTime'>
    readonly deleted_at: FieldRef<"setting_land_report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * setting_land_report findUnique
   */
  export type setting_land_reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_report to fetch.
     */
    where: setting_land_reportWhereUniqueInput
  }

  /**
   * setting_land_report findUniqueOrThrow
   */
  export type setting_land_reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_report to fetch.
     */
    where: setting_land_reportWhereUniqueInput
  }

  /**
   * setting_land_report findFirst
   */
  export type setting_land_reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_report to fetch.
     */
    where?: setting_land_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_reports to fetch.
     */
    orderBy?: setting_land_reportOrderByWithRelationInput | setting_land_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setting_land_reports.
     */
    cursor?: setting_land_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setting_land_reports.
     */
    distinct?: Setting_land_reportScalarFieldEnum | Setting_land_reportScalarFieldEnum[]
  }

  /**
   * setting_land_report findFirstOrThrow
   */
  export type setting_land_reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_report to fetch.
     */
    where?: setting_land_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_reports to fetch.
     */
    orderBy?: setting_land_reportOrderByWithRelationInput | setting_land_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setting_land_reports.
     */
    cursor?: setting_land_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setting_land_reports.
     */
    distinct?: Setting_land_reportScalarFieldEnum | Setting_land_reportScalarFieldEnum[]
  }

  /**
   * setting_land_report findMany
   */
  export type setting_land_reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * Filter, which setting_land_reports to fetch.
     */
    where?: setting_land_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setting_land_reports to fetch.
     */
    orderBy?: setting_land_reportOrderByWithRelationInput | setting_land_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing setting_land_reports.
     */
    cursor?: setting_land_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setting_land_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setting_land_reports.
     */
    skip?: number
    distinct?: Setting_land_reportScalarFieldEnum | Setting_land_reportScalarFieldEnum[]
  }

  /**
   * setting_land_report create
   */
  export type setting_land_reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * The data needed to create a setting_land_report.
     */
    data: XOR<setting_land_reportCreateInput, setting_land_reportUncheckedCreateInput>
  }

  /**
   * setting_land_report createMany
   */
  export type setting_land_reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many setting_land_reports.
     */
    data: setting_land_reportCreateManyInput | setting_land_reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * setting_land_report update
   */
  export type setting_land_reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * The data needed to update a setting_land_report.
     */
    data: XOR<setting_land_reportUpdateInput, setting_land_reportUncheckedUpdateInput>
    /**
     * Choose, which setting_land_report to update.
     */
    where: setting_land_reportWhereUniqueInput
  }

  /**
   * setting_land_report updateMany
   */
  export type setting_land_reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update setting_land_reports.
     */
    data: XOR<setting_land_reportUpdateManyMutationInput, setting_land_reportUncheckedUpdateManyInput>
    /**
     * Filter which setting_land_reports to update
     */
    where?: setting_land_reportWhereInput
    /**
     * Limit how many setting_land_reports to update.
     */
    limit?: number
  }

  /**
   * setting_land_report upsert
   */
  export type setting_land_reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * The filter to search for the setting_land_report to update in case it exists.
     */
    where: setting_land_reportWhereUniqueInput
    /**
     * In case the setting_land_report found by the `where` argument doesn't exist, create a new setting_land_report with this data.
     */
    create: XOR<setting_land_reportCreateInput, setting_land_reportUncheckedCreateInput>
    /**
     * In case the setting_land_report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<setting_land_reportUpdateInput, setting_land_reportUncheckedUpdateInput>
  }

  /**
   * setting_land_report delete
   */
  export type setting_land_reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
    /**
     * Filter which setting_land_report to delete.
     */
    where: setting_land_reportWhereUniqueInput
  }

  /**
   * setting_land_report deleteMany
   */
  export type setting_land_reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting_land_reports to delete
     */
    where?: setting_land_reportWhereInput
    /**
     * Limit how many setting_land_reports to delete.
     */
    limit?: number
  }

  /**
   * setting_land_report without action
   */
  export type setting_land_reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting_land_report
     */
    select?: setting_land_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting_land_report
     */
    omit?: setting_land_reportOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Document_title_listsScalarFieldEnum: {
    id: 'id',
    doc_type: 'doc_type',
    title: 'title',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Document_title_listsScalarFieldEnum = (typeof Document_title_listsScalarFieldEnum)[keyof typeof Document_title_listsScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    doc_type: 'doc_type',
    doc_number: 'doc_number',
    doc_date: 'doc_date',
    title: 'title',
    price: 'price',
    cash_flow_name: 'cash_flow_name',
    employee_id: 'employee_id',
    username: 'username',
    doc_file: 'doc_file',
    doc_file_date: 'doc_file_date',
    doc_file_time: 'doc_file_time',
    doc_file_price: 'doc_file_price',
    filePath: 'filePath',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const Ledger_land_logsScalarFieldEnum: {
    id: 'id',
    land_logs_loan_amount: 'land_logs_loan_amount',
    land_logs_cash_flow: 'land_logs_cash_flow',
    land_logs_interest: 'land_logs_interest',
    land_logs_summary_net: 'land_logs_summary_net',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Ledger_land_logsScalarFieldEnum = (typeof Ledger_land_logsScalarFieldEnum)[keyof typeof Ledger_land_logsScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    id: 'id',
    loan_code: 'loan_code',
    loan_customer: 'loan_customer',
    loan_address: 'loan_address',
    loan_number: 'loan_number',
    loan_area: 'loan_area',
    loan_employee: 'loan_employee',
    loan_date_promise: 'loan_date_promise',
    loan_installment_date: 'loan_installment_date',
    loan_summary_no_vat: 'loan_summary_no_vat',
    loan_payment_sum_installment: 'loan_payment_sum_installment',
    loan_sum_interest: 'loan_sum_interest',
    loan_payment_year_counter: 'loan_payment_year_counter',
    loan_payment_interest: 'loan_payment_interest',
    loan_summary_all: 'loan_summary_all',
    loan_payment_month: 'loan_payment_month',
    loan_payment_process: 'loan_payment_process',
    loan_type: 'loan_type',
    loan_tranfer: 'loan_tranfer',
    loan_payment_other: 'loan_payment_other',
    land_deed_status: 'land_deed_status',
    loan_status: 'loan_status',
    loan_remnark: 'loan_remnark',
    loan_really_pay: 'loan_really_pay',
    loan_close_payment: 'loan_close_payment',
    link_map: 'link_map',
    land_account_id: 'land_account_id',
    land_account_name: 'land_account_name',
    loan_date_close: 'loan_date_close',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const Loan_customerScalarFieldEnum: {
    id: 'id',
    loan_code: 'loan_code',
    customer_fullname: 'customer_fullname',
    customer_phone: 'customer_phone',
    customer_birthday: 'customer_birthday',
    customer_card_id: 'customer_card_id',
    customer_email: 'customer_email',
    customer_gender: 'customer_gender',
    customer_address: 'customer_address',
    img: 'img',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Loan_customerScalarFieldEnum = (typeof Loan_customerScalarFieldEnum)[keyof typeof Loan_customerScalarFieldEnum]


  export const Loan_paymentScalarFieldEnum: {
    id: 'id',
    loan_code: 'loan_code',
    loan_payment_amount: 'loan_payment_amount',
    loan_change: 'loan_change',
    loan_interest: 'loan_interest',
    loan_employee: 'loan_employee',
    loan_payment_type: 'loan_payment_type',
    loan_payment_pay_type: 'loan_payment_pay_type',
    loan_payment_installment: 'loan_payment_installment',
    loan_payment_customer: 'loan_payment_customer',
    loan_payment_src: 'loan_payment_src',
    payment_file_date: 'payment_file_date',
    payment_file_time: 'payment_file_time',
    payment_file_ref_no: 'payment_file_ref_no',
    payment_file_price: 'payment_file_price',
    land_account_id: 'land_account_id',
    land_account_name: 'land_account_name',
    loan_payment_date_fix: 'loan_payment_date_fix',
    loan_payment_date: 'loan_payment_date',
    loan_balance: 'loan_balance',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Loan_paymentScalarFieldEnum = (typeof Loan_paymentScalarFieldEnum)[keyof typeof Loan_paymentScalarFieldEnum]


  export const Loan_runningScalarFieldEnum: {
    id: 'id',
    loan_running_code: 'loan_running_code'
  };

  export type Loan_runningScalarFieldEnum = (typeof Loan_runningScalarFieldEnum)[keyof typeof Loan_runningScalarFieldEnum]


  export const Overdue_statusScalarFieldEnum: {
    id: 'id',
    token_loan: 'token_loan',
    token_overdue_loan: 'token_overdue_loan',
    token_loan_status: 'token_loan_status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Overdue_statusScalarFieldEnum = (typeof Overdue_statusScalarFieldEnum)[keyof typeof Overdue_statusScalarFieldEnum]


  export const Picture_loan_otherScalarFieldEnum: {
    id: 'id',
    loan_code: 'loan_code',
    picture_loan_src: 'picture_loan_src',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Picture_loan_otherScalarFieldEnum = (typeof Picture_loan_otherScalarFieldEnum)[keyof typeof Picture_loan_otherScalarFieldEnum]


  export const Real_investmentScalarFieldEnum: {
    id: 'id',
    investment: 'investment',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Real_investmentScalarFieldEnum = (typeof Real_investmentScalarFieldEnum)[keyof typeof Real_investmentScalarFieldEnum]


  export const Setting_landScalarFieldEnum: {
    id: 'id',
    land_account_name: 'land_account_name',
    land_account_cash: 'land_account_cash',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Setting_landScalarFieldEnum = (typeof Setting_landScalarFieldEnum)[keyof typeof Setting_landScalarFieldEnum]


  export const Setting_land_logsScalarFieldEnum: {
    id: 'id',
    setting_land_id: 'setting_land_id',
    setting_land_detail: 'setting_land_detail',
    setting_land_money: 'setting_land_money',
    setting_land_note: 'setting_land_note',
    employee_id: 'employee_id',
    employee_name: 'employee_name',
    created_at_logs: 'created_at_logs',
    updated_at_logs: 'updated_at_logs',
    deleted_at_logs: 'deleted_at_logs'
  };

  export type Setting_land_logsScalarFieldEnum = (typeof Setting_land_logsScalarFieldEnum)[keyof typeof Setting_land_logsScalarFieldEnum]


  export const Setting_land_reportScalarFieldEnum: {
    id: 'id',
    setting_land_id: 'setting_land_id',
    setting_land_report_detail: 'setting_land_report_detail',
    setting_land_report_money: 'setting_land_report_money',
    setting_land_report_note: 'setting_land_report_note',
    setting_land_report_account_balance: 'setting_land_report_account_balance',
    employee_id: 'employee_id',
    employee_name: 'employee_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Setting_land_reportScalarFieldEnum = (typeof Setting_land_reportScalarFieldEnum)[keyof typeof Setting_land_reportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const document_title_listsOrderByRelevanceFieldEnum: {
    title: 'title',
    note: 'note'
  };

  export type document_title_listsOrderByRelevanceFieldEnum = (typeof document_title_listsOrderByRelevanceFieldEnum)[keyof typeof document_title_listsOrderByRelevanceFieldEnum]


  export const documentsOrderByRelevanceFieldEnum: {
    doc_number: 'doc_number',
    title: 'title',
    cash_flow_name: 'cash_flow_name',
    username: 'username',
    doc_file: 'doc_file',
    filePath: 'filePath',
    note: 'note'
  };

  export type documentsOrderByRelevanceFieldEnum = (typeof documentsOrderByRelevanceFieldEnum)[keyof typeof documentsOrderByRelevanceFieldEnum]


  export const loanOrderByRelevanceFieldEnum: {
    loan_code: 'loan_code',
    loan_customer: 'loan_customer',
    loan_address: 'loan_address',
    loan_number: 'loan_number',
    loan_area: 'loan_area',
    loan_employee: 'loan_employee',
    loan_status: 'loan_status',
    loan_remnark: 'loan_remnark',
    link_map: 'link_map',
    land_account_name: 'land_account_name'
  };

  export type loanOrderByRelevanceFieldEnum = (typeof loanOrderByRelevanceFieldEnum)[keyof typeof loanOrderByRelevanceFieldEnum]


  export const loan_customerOrderByRelevanceFieldEnum: {
    loan_code: 'loan_code',
    customer_fullname: 'customer_fullname',
    customer_phone: 'customer_phone',
    customer_card_id: 'customer_card_id',
    customer_email: 'customer_email',
    customer_address: 'customer_address',
    img: 'img'
  };

  export type loan_customerOrderByRelevanceFieldEnum = (typeof loan_customerOrderByRelevanceFieldEnum)[keyof typeof loan_customerOrderByRelevanceFieldEnum]


  export const loan_paymentOrderByRelevanceFieldEnum: {
    loan_code: 'loan_code',
    loan_employee: 'loan_employee',
    loan_payment_type: 'loan_payment_type',
    loan_payment_pay_type: 'loan_payment_pay_type',
    loan_payment_installment: 'loan_payment_installment',
    loan_payment_customer: 'loan_payment_customer',
    loan_payment_src: 'loan_payment_src',
    payment_file_ref_no: 'payment_file_ref_no',
    land_account_name: 'land_account_name'
  };

  export type loan_paymentOrderByRelevanceFieldEnum = (typeof loan_paymentOrderByRelevanceFieldEnum)[keyof typeof loan_paymentOrderByRelevanceFieldEnum]


  export const loan_runningOrderByRelevanceFieldEnum: {
    loan_running_code: 'loan_running_code'
  };

  export type loan_runningOrderByRelevanceFieldEnum = (typeof loan_runningOrderByRelevanceFieldEnum)[keyof typeof loan_runningOrderByRelevanceFieldEnum]


  export const overdue_statusOrderByRelevanceFieldEnum: {
    token_loan: 'token_loan'
  };

  export type overdue_statusOrderByRelevanceFieldEnum = (typeof overdue_statusOrderByRelevanceFieldEnum)[keyof typeof overdue_statusOrderByRelevanceFieldEnum]


  export const picture_loan_otherOrderByRelevanceFieldEnum: {
    loan_code: 'loan_code',
    picture_loan_src: 'picture_loan_src'
  };

  export type picture_loan_otherOrderByRelevanceFieldEnum = (typeof picture_loan_otherOrderByRelevanceFieldEnum)[keyof typeof picture_loan_otherOrderByRelevanceFieldEnum]


  export const setting_landOrderByRelevanceFieldEnum: {
    land_account_name: 'land_account_name'
  };

  export type setting_landOrderByRelevanceFieldEnum = (typeof setting_landOrderByRelevanceFieldEnum)[keyof typeof setting_landOrderByRelevanceFieldEnum]


  export const setting_land_logsOrderByRelevanceFieldEnum: {
    setting_land_detail: 'setting_land_detail',
    setting_land_note: 'setting_land_note',
    employee_name: 'employee_name'
  };

  export type setting_land_logsOrderByRelevanceFieldEnum = (typeof setting_land_logsOrderByRelevanceFieldEnum)[keyof typeof setting_land_logsOrderByRelevanceFieldEnum]


  export const setting_land_reportOrderByRelevanceFieldEnum: {
    setting_land_report_detail: 'setting_land_report_detail',
    setting_land_report_note: 'setting_land_report_note',
    employee_name: 'employee_name'
  };

  export type setting_land_reportOrderByRelevanceFieldEnum = (typeof setting_land_reportOrderByRelevanceFieldEnum)[keyof typeof setting_land_reportOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DocumentTitleListsDocType'
   */
  export type EnumDocumentTitleListsDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentTitleListsDocType'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DocumentsDocType'
   */
  export type EnumDocumentsDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentsDocType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'LoanType'
   */
  export type EnumLoanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanType'>
    


  /**
   * Reference to a field of type 'CustomerGender'
   */
  export type EnumCustomerGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerGender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type document_title_listsWhereInput = {
    AND?: document_title_listsWhereInput | document_title_listsWhereInput[]
    OR?: document_title_listsWhereInput[]
    NOT?: document_title_listsWhereInput | document_title_listsWhereInput[]
    id?: IntFilter<"document_title_lists"> | number
    doc_type?: EnumDocumentTitleListsDocTypeFilter<"document_title_lists"> | $Enums.DocumentTitleListsDocType
    title?: StringFilter<"document_title_lists"> | string
    note?: StringNullableFilter<"document_title_lists"> | string | null
    created_at?: DateTimeNullableFilter<"document_title_lists"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"document_title_lists"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"document_title_lists"> | Date | string | null
  }

  export type document_title_listsOrderByWithRelationInput = {
    id?: SortOrder
    doc_type?: SortOrder
    title?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: document_title_listsOrderByRelevanceInput
  }

  export type document_title_listsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: document_title_listsWhereInput | document_title_listsWhereInput[]
    OR?: document_title_listsWhereInput[]
    NOT?: document_title_listsWhereInput | document_title_listsWhereInput[]
    doc_type?: EnumDocumentTitleListsDocTypeFilter<"document_title_lists"> | $Enums.DocumentTitleListsDocType
    title?: StringFilter<"document_title_lists"> | string
    note?: StringNullableFilter<"document_title_lists"> | string | null
    created_at?: DateTimeNullableFilter<"document_title_lists"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"document_title_lists"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"document_title_lists"> | Date | string | null
  }, "id">

  export type document_title_listsOrderByWithAggregationInput = {
    id?: SortOrder
    doc_type?: SortOrder
    title?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: document_title_listsCountOrderByAggregateInput
    _avg?: document_title_listsAvgOrderByAggregateInput
    _max?: document_title_listsMaxOrderByAggregateInput
    _min?: document_title_listsMinOrderByAggregateInput
    _sum?: document_title_listsSumOrderByAggregateInput
  }

  export type document_title_listsScalarWhereWithAggregatesInput = {
    AND?: document_title_listsScalarWhereWithAggregatesInput | document_title_listsScalarWhereWithAggregatesInput[]
    OR?: document_title_listsScalarWhereWithAggregatesInput[]
    NOT?: document_title_listsScalarWhereWithAggregatesInput | document_title_listsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"document_title_lists"> | number
    doc_type?: EnumDocumentTitleListsDocTypeWithAggregatesFilter<"document_title_lists"> | $Enums.DocumentTitleListsDocType
    title?: StringWithAggregatesFilter<"document_title_lists"> | string
    note?: StringNullableWithAggregatesFilter<"document_title_lists"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"document_title_lists"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"document_title_lists"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"document_title_lists"> | Date | string | null
  }

  export type documentsWhereInput = {
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    id?: IntFilter<"documents"> | number
    doc_type?: EnumDocumentsDocTypeFilter<"documents"> | $Enums.DocumentsDocType
    doc_number?: StringFilter<"documents"> | string
    doc_date?: DateTimeFilter<"documents"> | Date | string
    title?: StringFilter<"documents"> | string
    price?: DecimalFilter<"documents"> | Decimal | DecimalJsLike | number | string
    cash_flow_name?: StringFilter<"documents"> | string
    employee_id?: IntFilter<"documents"> | number
    username?: StringNullableFilter<"documents"> | string | null
    doc_file?: StringNullableFilter<"documents"> | string | null
    doc_file_date?: DateTimeNullableFilter<"documents"> | Date | string | null
    doc_file_time?: DateTimeNullableFilter<"documents"> | Date | string | null
    doc_file_price?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    filePath?: StringNullableFilter<"documents"> | string | null
    note?: StringNullableFilter<"documents"> | string | null
    created_at?: DateTimeFilter<"documents"> | Date | string
    updated_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"documents"> | Date | string | null
  }

  export type documentsOrderByWithRelationInput = {
    id?: SortOrder
    doc_type?: SortOrder
    doc_number?: SortOrder
    doc_date?: SortOrder
    title?: SortOrder
    price?: SortOrder
    cash_flow_name?: SortOrder
    employee_id?: SortOrder
    username?: SortOrderInput | SortOrder
    doc_file?: SortOrderInput | SortOrder
    doc_file_date?: SortOrderInput | SortOrder
    doc_file_time?: SortOrderInput | SortOrder
    doc_file_price?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: documentsOrderByRelevanceInput
  }

  export type documentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    doc_type?: EnumDocumentsDocTypeFilter<"documents"> | $Enums.DocumentsDocType
    doc_number?: StringFilter<"documents"> | string
    doc_date?: DateTimeFilter<"documents"> | Date | string
    title?: StringFilter<"documents"> | string
    price?: DecimalFilter<"documents"> | Decimal | DecimalJsLike | number | string
    cash_flow_name?: StringFilter<"documents"> | string
    employee_id?: IntFilter<"documents"> | number
    username?: StringNullableFilter<"documents"> | string | null
    doc_file?: StringNullableFilter<"documents"> | string | null
    doc_file_date?: DateTimeNullableFilter<"documents"> | Date | string | null
    doc_file_time?: DateTimeNullableFilter<"documents"> | Date | string | null
    doc_file_price?: DecimalNullableFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    filePath?: StringNullableFilter<"documents"> | string | null
    note?: StringNullableFilter<"documents"> | string | null
    created_at?: DateTimeFilter<"documents"> | Date | string
    updated_at?: DateTimeNullableFilter<"documents"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"documents"> | Date | string | null
  }, "id">

  export type documentsOrderByWithAggregationInput = {
    id?: SortOrder
    doc_type?: SortOrder
    doc_number?: SortOrder
    doc_date?: SortOrder
    title?: SortOrder
    price?: SortOrder
    cash_flow_name?: SortOrder
    employee_id?: SortOrder
    username?: SortOrderInput | SortOrder
    doc_file?: SortOrderInput | SortOrder
    doc_file_date?: SortOrderInput | SortOrder
    doc_file_time?: SortOrderInput | SortOrder
    doc_file_price?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: documentsCountOrderByAggregateInput
    _avg?: documentsAvgOrderByAggregateInput
    _max?: documentsMaxOrderByAggregateInput
    _min?: documentsMinOrderByAggregateInput
    _sum?: documentsSumOrderByAggregateInput
  }

  export type documentsScalarWhereWithAggregatesInput = {
    AND?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    OR?: documentsScalarWhereWithAggregatesInput[]
    NOT?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"documents"> | number
    doc_type?: EnumDocumentsDocTypeWithAggregatesFilter<"documents"> | $Enums.DocumentsDocType
    doc_number?: StringWithAggregatesFilter<"documents"> | string
    doc_date?: DateTimeWithAggregatesFilter<"documents"> | Date | string
    title?: StringWithAggregatesFilter<"documents"> | string
    price?: DecimalWithAggregatesFilter<"documents"> | Decimal | DecimalJsLike | number | string
    cash_flow_name?: StringWithAggregatesFilter<"documents"> | string
    employee_id?: IntWithAggregatesFilter<"documents"> | number
    username?: StringNullableWithAggregatesFilter<"documents"> | string | null
    doc_file?: StringNullableWithAggregatesFilter<"documents"> | string | null
    doc_file_date?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
    doc_file_time?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
    doc_file_price?: DecimalNullableWithAggregatesFilter<"documents"> | Decimal | DecimalJsLike | number | string | null
    filePath?: StringNullableWithAggregatesFilter<"documents"> | string | null
    note?: StringNullableWithAggregatesFilter<"documents"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"documents"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
  }

  export type ledger_land_logsWhereInput = {
    AND?: ledger_land_logsWhereInput | ledger_land_logsWhereInput[]
    OR?: ledger_land_logsWhereInput[]
    NOT?: ledger_land_logsWhereInput | ledger_land_logsWhereInput[]
    id?: IntFilter<"ledger_land_logs"> | number
    land_logs_loan_amount?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_interest?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"ledger_land_logs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ledger_land_logs"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ledger_land_logs"> | Date | string | null
  }

  export type ledger_land_logsOrderByWithRelationInput = {
    id?: SortOrder
    land_logs_loan_amount?: SortOrder
    land_logs_cash_flow?: SortOrder
    land_logs_interest?: SortOrder
    land_logs_summary_net?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type ledger_land_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ledger_land_logsWhereInput | ledger_land_logsWhereInput[]
    OR?: ledger_land_logsWhereInput[]
    NOT?: ledger_land_logsWhereInput | ledger_land_logsWhereInput[]
    land_logs_loan_amount?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_interest?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: DecimalFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"ledger_land_logs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ledger_land_logs"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ledger_land_logs"> | Date | string | null
  }, "id">

  export type ledger_land_logsOrderByWithAggregationInput = {
    id?: SortOrder
    land_logs_loan_amount?: SortOrder
    land_logs_cash_flow?: SortOrder
    land_logs_interest?: SortOrder
    land_logs_summary_net?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ledger_land_logsCountOrderByAggregateInput
    _avg?: ledger_land_logsAvgOrderByAggregateInput
    _max?: ledger_land_logsMaxOrderByAggregateInput
    _min?: ledger_land_logsMinOrderByAggregateInput
    _sum?: ledger_land_logsSumOrderByAggregateInput
  }

  export type ledger_land_logsScalarWhereWithAggregatesInput = {
    AND?: ledger_land_logsScalarWhereWithAggregatesInput | ledger_land_logsScalarWhereWithAggregatesInput[]
    OR?: ledger_land_logsScalarWhereWithAggregatesInput[]
    NOT?: ledger_land_logsScalarWhereWithAggregatesInput | ledger_land_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ledger_land_logs"> | number
    land_logs_loan_amount?: DecimalWithAggregatesFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: DecimalWithAggregatesFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_interest?: DecimalWithAggregatesFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: DecimalWithAggregatesFilter<"ledger_land_logs"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"ledger_land_logs"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ledger_land_logs"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ledger_land_logs"> | Date | string | null
  }

  export type loanWhereInput = {
    AND?: loanWhereInput | loanWhereInput[]
    OR?: loanWhereInput[]
    NOT?: loanWhereInput | loanWhereInput[]
    id?: IntFilter<"loan"> | number
    loan_code?: StringNullableFilter<"loan"> | string | null
    loan_customer?: StringNullableFilter<"loan"> | string | null
    loan_address?: StringNullableFilter<"loan"> | string | null
    loan_number?: StringNullableFilter<"loan"> | string | null
    loan_area?: StringNullableFilter<"loan"> | string | null
    loan_employee?: StringNullableFilter<"loan"> | string | null
    loan_date_promise?: DateTimeNullableFilter<"loan"> | Date | string | null
    loan_installment_date?: DateTimeNullableFilter<"loan"> | Date | string | null
    loan_summary_no_vat?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_sum_interest?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: IntNullableFilter<"loan"> | number | null
    loan_payment_interest?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_summary_all?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_month?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_process?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_type?: EnumLoanTypeFilter<"loan"> | $Enums.LoanType
    loan_tranfer?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_other?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    land_deed_status?: IntFilter<"loan"> | number
    loan_status?: StringNullableFilter<"loan"> | string | null
    loan_remnark?: StringNullableFilter<"loan"> | string | null
    loan_really_pay?: DecimalNullableFilter<"loan"> | Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    link_map?: StringNullableFilter<"loan"> | string | null
    land_account_id?: IntNullableFilter<"loan"> | number | null
    land_account_name?: StringNullableFilter<"loan"> | string | null
    loan_date_close?: DateTimeNullableFilter<"loan"> | Date | string | null
    created_at?: DateTimeNullableFilter<"loan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"loan"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"loan"> | Date | string | null
  }

  export type loanOrderByWithRelationInput = {
    id?: SortOrder
    loan_code?: SortOrderInput | SortOrder
    loan_customer?: SortOrderInput | SortOrder
    loan_address?: SortOrderInput | SortOrder
    loan_number?: SortOrderInput | SortOrder
    loan_area?: SortOrderInput | SortOrder
    loan_employee?: SortOrderInput | SortOrder
    loan_date_promise?: SortOrderInput | SortOrder
    loan_installment_date?: SortOrderInput | SortOrder
    loan_summary_no_vat?: SortOrder
    loan_payment_sum_installment?: SortOrder
    loan_sum_interest?: SortOrder
    loan_payment_year_counter?: SortOrderInput | SortOrder
    loan_payment_interest?: SortOrder
    loan_summary_all?: SortOrder
    loan_payment_month?: SortOrder
    loan_payment_process?: SortOrder
    loan_type?: SortOrder
    loan_tranfer?: SortOrder
    loan_payment_other?: SortOrder
    land_deed_status?: SortOrder
    loan_status?: SortOrderInput | SortOrder
    loan_remnark?: SortOrderInput | SortOrder
    loan_really_pay?: SortOrderInput | SortOrder
    loan_close_payment?: SortOrder
    link_map?: SortOrderInput | SortOrder
    land_account_id?: SortOrderInput | SortOrder
    land_account_name?: SortOrderInput | SortOrder
    loan_date_close?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: loanOrderByRelevanceInput
  }

  export type loanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: loanWhereInput | loanWhereInput[]
    OR?: loanWhereInput[]
    NOT?: loanWhereInput | loanWhereInput[]
    loan_code?: StringNullableFilter<"loan"> | string | null
    loan_customer?: StringNullableFilter<"loan"> | string | null
    loan_address?: StringNullableFilter<"loan"> | string | null
    loan_number?: StringNullableFilter<"loan"> | string | null
    loan_area?: StringNullableFilter<"loan"> | string | null
    loan_employee?: StringNullableFilter<"loan"> | string | null
    loan_date_promise?: DateTimeNullableFilter<"loan"> | Date | string | null
    loan_installment_date?: DateTimeNullableFilter<"loan"> | Date | string | null
    loan_summary_no_vat?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_sum_interest?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: IntNullableFilter<"loan"> | number | null
    loan_payment_interest?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_summary_all?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_month?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_process?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_type?: EnumLoanTypeFilter<"loan"> | $Enums.LoanType
    loan_tranfer?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_other?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    land_deed_status?: IntFilter<"loan"> | number
    loan_status?: StringNullableFilter<"loan"> | string | null
    loan_remnark?: StringNullableFilter<"loan"> | string | null
    loan_really_pay?: DecimalNullableFilter<"loan"> | Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: DecimalFilter<"loan"> | Decimal | DecimalJsLike | number | string
    link_map?: StringNullableFilter<"loan"> | string | null
    land_account_id?: IntNullableFilter<"loan"> | number | null
    land_account_name?: StringNullableFilter<"loan"> | string | null
    loan_date_close?: DateTimeNullableFilter<"loan"> | Date | string | null
    created_at?: DateTimeNullableFilter<"loan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"loan"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"loan"> | Date | string | null
  }, "id">

  export type loanOrderByWithAggregationInput = {
    id?: SortOrder
    loan_code?: SortOrderInput | SortOrder
    loan_customer?: SortOrderInput | SortOrder
    loan_address?: SortOrderInput | SortOrder
    loan_number?: SortOrderInput | SortOrder
    loan_area?: SortOrderInput | SortOrder
    loan_employee?: SortOrderInput | SortOrder
    loan_date_promise?: SortOrderInput | SortOrder
    loan_installment_date?: SortOrderInput | SortOrder
    loan_summary_no_vat?: SortOrder
    loan_payment_sum_installment?: SortOrder
    loan_sum_interest?: SortOrder
    loan_payment_year_counter?: SortOrderInput | SortOrder
    loan_payment_interest?: SortOrder
    loan_summary_all?: SortOrder
    loan_payment_month?: SortOrder
    loan_payment_process?: SortOrder
    loan_type?: SortOrder
    loan_tranfer?: SortOrder
    loan_payment_other?: SortOrder
    land_deed_status?: SortOrder
    loan_status?: SortOrderInput | SortOrder
    loan_remnark?: SortOrderInput | SortOrder
    loan_really_pay?: SortOrderInput | SortOrder
    loan_close_payment?: SortOrder
    link_map?: SortOrderInput | SortOrder
    land_account_id?: SortOrderInput | SortOrder
    land_account_name?: SortOrderInput | SortOrder
    loan_date_close?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: loanCountOrderByAggregateInput
    _avg?: loanAvgOrderByAggregateInput
    _max?: loanMaxOrderByAggregateInput
    _min?: loanMinOrderByAggregateInput
    _sum?: loanSumOrderByAggregateInput
  }

  export type loanScalarWhereWithAggregatesInput = {
    AND?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[]
    OR?: loanScalarWhereWithAggregatesInput[]
    NOT?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"loan"> | number
    loan_code?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_customer?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_address?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_number?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_area?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_employee?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_date_promise?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
    loan_installment_date?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
    loan_summary_no_vat?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_sum_interest?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: IntNullableWithAggregatesFilter<"loan"> | number | null
    loan_payment_interest?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_summary_all?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_month?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_process?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_type?: EnumLoanTypeWithAggregatesFilter<"loan"> | $Enums.LoanType
    loan_tranfer?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    loan_payment_other?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    land_deed_status?: IntWithAggregatesFilter<"loan"> | number
    loan_status?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_remnark?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_really_pay?: DecimalNullableWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: DecimalWithAggregatesFilter<"loan"> | Decimal | DecimalJsLike | number | string
    link_map?: StringNullableWithAggregatesFilter<"loan"> | string | null
    land_account_id?: IntNullableWithAggregatesFilter<"loan"> | number | null
    land_account_name?: StringNullableWithAggregatesFilter<"loan"> | string | null
    loan_date_close?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
  }

  export type loan_customerWhereInput = {
    AND?: loan_customerWhereInput | loan_customerWhereInput[]
    OR?: loan_customerWhereInput[]
    NOT?: loan_customerWhereInput | loan_customerWhereInput[]
    id?: IntFilter<"loan_customer"> | number
    loan_code?: StringFilter<"loan_customer"> | string
    customer_fullname?: StringNullableFilter<"loan_customer"> | string | null
    customer_phone?: StringNullableFilter<"loan_customer"> | string | null
    customer_birthday?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
    customer_card_id?: StringNullableFilter<"loan_customer"> | string | null
    customer_email?: StringNullableFilter<"loan_customer"> | string | null
    customer_gender?: EnumCustomerGenderNullableFilter<"loan_customer"> | $Enums.CustomerGender | null
    customer_address?: StringNullableFilter<"loan_customer"> | string | null
    img?: StringNullableFilter<"loan_customer"> | string | null
    created_at?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
  }

  export type loan_customerOrderByWithRelationInput = {
    id?: SortOrder
    loan_code?: SortOrder
    customer_fullname?: SortOrderInput | SortOrder
    customer_phone?: SortOrderInput | SortOrder
    customer_birthday?: SortOrderInput | SortOrder
    customer_card_id?: SortOrderInput | SortOrder
    customer_email?: SortOrderInput | SortOrder
    customer_gender?: SortOrderInput | SortOrder
    customer_address?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: loan_customerOrderByRelevanceInput
  }

  export type loan_customerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: loan_customerWhereInput | loan_customerWhereInput[]
    OR?: loan_customerWhereInput[]
    NOT?: loan_customerWhereInput | loan_customerWhereInput[]
    loan_code?: StringFilter<"loan_customer"> | string
    customer_fullname?: StringNullableFilter<"loan_customer"> | string | null
    customer_phone?: StringNullableFilter<"loan_customer"> | string | null
    customer_birthday?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
    customer_card_id?: StringNullableFilter<"loan_customer"> | string | null
    customer_email?: StringNullableFilter<"loan_customer"> | string | null
    customer_gender?: EnumCustomerGenderNullableFilter<"loan_customer"> | $Enums.CustomerGender | null
    customer_address?: StringNullableFilter<"loan_customer"> | string | null
    img?: StringNullableFilter<"loan_customer"> | string | null
    created_at?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"loan_customer"> | Date | string | null
  }, "id">

  export type loan_customerOrderByWithAggregationInput = {
    id?: SortOrder
    loan_code?: SortOrder
    customer_fullname?: SortOrderInput | SortOrder
    customer_phone?: SortOrderInput | SortOrder
    customer_birthday?: SortOrderInput | SortOrder
    customer_card_id?: SortOrderInput | SortOrder
    customer_email?: SortOrderInput | SortOrder
    customer_gender?: SortOrderInput | SortOrder
    customer_address?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: loan_customerCountOrderByAggregateInput
    _avg?: loan_customerAvgOrderByAggregateInput
    _max?: loan_customerMaxOrderByAggregateInput
    _min?: loan_customerMinOrderByAggregateInput
    _sum?: loan_customerSumOrderByAggregateInput
  }

  export type loan_customerScalarWhereWithAggregatesInput = {
    AND?: loan_customerScalarWhereWithAggregatesInput | loan_customerScalarWhereWithAggregatesInput[]
    OR?: loan_customerScalarWhereWithAggregatesInput[]
    NOT?: loan_customerScalarWhereWithAggregatesInput | loan_customerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"loan_customer"> | number
    loan_code?: StringWithAggregatesFilter<"loan_customer"> | string
    customer_fullname?: StringNullableWithAggregatesFilter<"loan_customer"> | string | null
    customer_phone?: StringNullableWithAggregatesFilter<"loan_customer"> | string | null
    customer_birthday?: DateTimeNullableWithAggregatesFilter<"loan_customer"> | Date | string | null
    customer_card_id?: StringNullableWithAggregatesFilter<"loan_customer"> | string | null
    customer_email?: StringNullableWithAggregatesFilter<"loan_customer"> | string | null
    customer_gender?: EnumCustomerGenderNullableWithAggregatesFilter<"loan_customer"> | $Enums.CustomerGender | null
    customer_address?: StringNullableWithAggregatesFilter<"loan_customer"> | string | null
    img?: StringNullableWithAggregatesFilter<"loan_customer"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"loan_customer"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"loan_customer"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"loan_customer"> | Date | string | null
  }

  export type loan_paymentWhereInput = {
    AND?: loan_paymentWhereInput | loan_paymentWhereInput[]
    OR?: loan_paymentWhereInput[]
    NOT?: loan_paymentWhereInput | loan_paymentWhereInput[]
    id?: IntFilter<"loan_payment"> | number
    loan_code?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_amount?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_change?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_interest?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_employee?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_type?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_pay_type?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_installment?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_customer?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_src?: StringNullableFilter<"loan_payment"> | string | null
    payment_file_date?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    payment_file_time?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    payment_file_ref_no?: StringNullableFilter<"loan_payment"> | string | null
    payment_file_price?: DecimalNullableFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string | null
    land_account_id?: IntNullableFilter<"loan_payment"> | number | null
    land_account_name?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_date_fix?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    loan_payment_date?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    loan_balance?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
  }

  export type loan_paymentOrderByWithRelationInput = {
    id?: SortOrder
    loan_code?: SortOrderInput | SortOrder
    loan_payment_amount?: SortOrder
    loan_change?: SortOrder
    loan_interest?: SortOrder
    loan_employee?: SortOrderInput | SortOrder
    loan_payment_type?: SortOrderInput | SortOrder
    loan_payment_pay_type?: SortOrderInput | SortOrder
    loan_payment_installment?: SortOrderInput | SortOrder
    loan_payment_customer?: SortOrderInput | SortOrder
    loan_payment_src?: SortOrderInput | SortOrder
    payment_file_date?: SortOrderInput | SortOrder
    payment_file_time?: SortOrderInput | SortOrder
    payment_file_ref_no?: SortOrderInput | SortOrder
    payment_file_price?: SortOrderInput | SortOrder
    land_account_id?: SortOrderInput | SortOrder
    land_account_name?: SortOrderInput | SortOrder
    loan_payment_date_fix?: SortOrderInput | SortOrder
    loan_payment_date?: SortOrderInput | SortOrder
    loan_balance?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: loan_paymentOrderByRelevanceInput
  }

  export type loan_paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: loan_paymentWhereInput | loan_paymentWhereInput[]
    OR?: loan_paymentWhereInput[]
    NOT?: loan_paymentWhereInput | loan_paymentWhereInput[]
    loan_code?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_amount?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_change?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_interest?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_employee?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_type?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_pay_type?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_installment?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_customer?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_src?: StringNullableFilter<"loan_payment"> | string | null
    payment_file_date?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    payment_file_time?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    payment_file_ref_no?: StringNullableFilter<"loan_payment"> | string | null
    payment_file_price?: DecimalNullableFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string | null
    land_account_id?: IntNullableFilter<"loan_payment"> | number | null
    land_account_name?: StringNullableFilter<"loan_payment"> | string | null
    loan_payment_date_fix?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    loan_payment_date?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    loan_balance?: DecimalFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"loan_payment"> | Date | string | null
  }, "id">

  export type loan_paymentOrderByWithAggregationInput = {
    id?: SortOrder
    loan_code?: SortOrderInput | SortOrder
    loan_payment_amount?: SortOrder
    loan_change?: SortOrder
    loan_interest?: SortOrder
    loan_employee?: SortOrderInput | SortOrder
    loan_payment_type?: SortOrderInput | SortOrder
    loan_payment_pay_type?: SortOrderInput | SortOrder
    loan_payment_installment?: SortOrderInput | SortOrder
    loan_payment_customer?: SortOrderInput | SortOrder
    loan_payment_src?: SortOrderInput | SortOrder
    payment_file_date?: SortOrderInput | SortOrder
    payment_file_time?: SortOrderInput | SortOrder
    payment_file_ref_no?: SortOrderInput | SortOrder
    payment_file_price?: SortOrderInput | SortOrder
    land_account_id?: SortOrderInput | SortOrder
    land_account_name?: SortOrderInput | SortOrder
    loan_payment_date_fix?: SortOrderInput | SortOrder
    loan_payment_date?: SortOrderInput | SortOrder
    loan_balance?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: loan_paymentCountOrderByAggregateInput
    _avg?: loan_paymentAvgOrderByAggregateInput
    _max?: loan_paymentMaxOrderByAggregateInput
    _min?: loan_paymentMinOrderByAggregateInput
    _sum?: loan_paymentSumOrderByAggregateInput
  }

  export type loan_paymentScalarWhereWithAggregatesInput = {
    AND?: loan_paymentScalarWhereWithAggregatesInput | loan_paymentScalarWhereWithAggregatesInput[]
    OR?: loan_paymentScalarWhereWithAggregatesInput[]
    NOT?: loan_paymentScalarWhereWithAggregatesInput | loan_paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"loan_payment"> | number
    loan_code?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    loan_payment_amount?: DecimalWithAggregatesFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_change?: DecimalWithAggregatesFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_interest?: DecimalWithAggregatesFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    loan_employee?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    loan_payment_type?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    loan_payment_pay_type?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    loan_payment_installment?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    loan_payment_customer?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    loan_payment_src?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    payment_file_date?: DateTimeNullableWithAggregatesFilter<"loan_payment"> | Date | string | null
    payment_file_time?: DateTimeNullableWithAggregatesFilter<"loan_payment"> | Date | string | null
    payment_file_ref_no?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    payment_file_price?: DecimalNullableWithAggregatesFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string | null
    land_account_id?: IntNullableWithAggregatesFilter<"loan_payment"> | number | null
    land_account_name?: StringNullableWithAggregatesFilter<"loan_payment"> | string | null
    loan_payment_date_fix?: DateTimeNullableWithAggregatesFilter<"loan_payment"> | Date | string | null
    loan_payment_date?: DateTimeNullableWithAggregatesFilter<"loan_payment"> | Date | string | null
    loan_balance?: DecimalWithAggregatesFilter<"loan_payment"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"loan_payment"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"loan_payment"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"loan_payment"> | Date | string | null
  }

  export type loan_runningWhereInput = {
    AND?: loan_runningWhereInput | loan_runningWhereInput[]
    OR?: loan_runningWhereInput[]
    NOT?: loan_runningWhereInput | loan_runningWhereInput[]
    id?: IntFilter<"loan_running"> | number
    loan_running_code?: StringNullableFilter<"loan_running"> | string | null
  }

  export type loan_runningOrderByWithRelationInput = {
    id?: SortOrder
    loan_running_code?: SortOrderInput | SortOrder
    _relevance?: loan_runningOrderByRelevanceInput
  }

  export type loan_runningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: loan_runningWhereInput | loan_runningWhereInput[]
    OR?: loan_runningWhereInput[]
    NOT?: loan_runningWhereInput | loan_runningWhereInput[]
    loan_running_code?: StringNullableFilter<"loan_running"> | string | null
  }, "id">

  export type loan_runningOrderByWithAggregationInput = {
    id?: SortOrder
    loan_running_code?: SortOrderInput | SortOrder
    _count?: loan_runningCountOrderByAggregateInput
    _avg?: loan_runningAvgOrderByAggregateInput
    _max?: loan_runningMaxOrderByAggregateInput
    _min?: loan_runningMinOrderByAggregateInput
    _sum?: loan_runningSumOrderByAggregateInput
  }

  export type loan_runningScalarWhereWithAggregatesInput = {
    AND?: loan_runningScalarWhereWithAggregatesInput | loan_runningScalarWhereWithAggregatesInput[]
    OR?: loan_runningScalarWhereWithAggregatesInput[]
    NOT?: loan_runningScalarWhereWithAggregatesInput | loan_runningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"loan_running"> | number
    loan_running_code?: StringNullableWithAggregatesFilter<"loan_running"> | string | null
  }

  export type overdue_statusWhereInput = {
    AND?: overdue_statusWhereInput | overdue_statusWhereInput[]
    OR?: overdue_statusWhereInput[]
    NOT?: overdue_statusWhereInput | overdue_statusWhereInput[]
    id?: IntFilter<"overdue_status"> | number
    token_loan?: StringNullableFilter<"overdue_status"> | string | null
    token_overdue_loan?: IntFilter<"overdue_status"> | number
    token_loan_status?: IntFilter<"overdue_status"> | number
    created_at?: DateTimeNullableFilter<"overdue_status"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"overdue_status"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"overdue_status"> | Date | string | null
  }

  export type overdue_statusOrderByWithRelationInput = {
    id?: SortOrder
    token_loan?: SortOrderInput | SortOrder
    token_overdue_loan?: SortOrder
    token_loan_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: overdue_statusOrderByRelevanceInput
  }

  export type overdue_statusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: overdue_statusWhereInput | overdue_statusWhereInput[]
    OR?: overdue_statusWhereInput[]
    NOT?: overdue_statusWhereInput | overdue_statusWhereInput[]
    token_loan?: StringNullableFilter<"overdue_status"> | string | null
    token_overdue_loan?: IntFilter<"overdue_status"> | number
    token_loan_status?: IntFilter<"overdue_status"> | number
    created_at?: DateTimeNullableFilter<"overdue_status"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"overdue_status"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"overdue_status"> | Date | string | null
  }, "id">

  export type overdue_statusOrderByWithAggregationInput = {
    id?: SortOrder
    token_loan?: SortOrderInput | SortOrder
    token_overdue_loan?: SortOrder
    token_loan_status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: overdue_statusCountOrderByAggregateInput
    _avg?: overdue_statusAvgOrderByAggregateInput
    _max?: overdue_statusMaxOrderByAggregateInput
    _min?: overdue_statusMinOrderByAggregateInput
    _sum?: overdue_statusSumOrderByAggregateInput
  }

  export type overdue_statusScalarWhereWithAggregatesInput = {
    AND?: overdue_statusScalarWhereWithAggregatesInput | overdue_statusScalarWhereWithAggregatesInput[]
    OR?: overdue_statusScalarWhereWithAggregatesInput[]
    NOT?: overdue_statusScalarWhereWithAggregatesInput | overdue_statusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"overdue_status"> | number
    token_loan?: StringNullableWithAggregatesFilter<"overdue_status"> | string | null
    token_overdue_loan?: IntWithAggregatesFilter<"overdue_status"> | number
    token_loan_status?: IntWithAggregatesFilter<"overdue_status"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"overdue_status"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"overdue_status"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"overdue_status"> | Date | string | null
  }

  export type picture_loan_otherWhereInput = {
    AND?: picture_loan_otherWhereInput | picture_loan_otherWhereInput[]
    OR?: picture_loan_otherWhereInput[]
    NOT?: picture_loan_otherWhereInput | picture_loan_otherWhereInput[]
    id?: IntFilter<"picture_loan_other"> | number
    loan_code?: StringNullableFilter<"picture_loan_other"> | string | null
    picture_loan_src?: StringNullableFilter<"picture_loan_other"> | string | null
    created_at?: DateTimeNullableFilter<"picture_loan_other"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"picture_loan_other"> | Date | string | null
  }

  export type picture_loan_otherOrderByWithRelationInput = {
    id?: SortOrder
    loan_code?: SortOrderInput | SortOrder
    picture_loan_src?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: picture_loan_otherOrderByRelevanceInput
  }

  export type picture_loan_otherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: picture_loan_otherWhereInput | picture_loan_otherWhereInput[]
    OR?: picture_loan_otherWhereInput[]
    NOT?: picture_loan_otherWhereInput | picture_loan_otherWhereInput[]
    loan_code?: StringNullableFilter<"picture_loan_other"> | string | null
    picture_loan_src?: StringNullableFilter<"picture_loan_other"> | string | null
    created_at?: DateTimeNullableFilter<"picture_loan_other"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"picture_loan_other"> | Date | string | null
  }, "id">

  export type picture_loan_otherOrderByWithAggregationInput = {
    id?: SortOrder
    loan_code?: SortOrderInput | SortOrder
    picture_loan_src?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: picture_loan_otherCountOrderByAggregateInput
    _avg?: picture_loan_otherAvgOrderByAggregateInput
    _max?: picture_loan_otherMaxOrderByAggregateInput
    _min?: picture_loan_otherMinOrderByAggregateInput
    _sum?: picture_loan_otherSumOrderByAggregateInput
  }

  export type picture_loan_otherScalarWhereWithAggregatesInput = {
    AND?: picture_loan_otherScalarWhereWithAggregatesInput | picture_loan_otherScalarWhereWithAggregatesInput[]
    OR?: picture_loan_otherScalarWhereWithAggregatesInput[]
    NOT?: picture_loan_otherScalarWhereWithAggregatesInput | picture_loan_otherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"picture_loan_other"> | number
    loan_code?: StringNullableWithAggregatesFilter<"picture_loan_other"> | string | null
    picture_loan_src?: StringNullableWithAggregatesFilter<"picture_loan_other"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"picture_loan_other"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"picture_loan_other"> | Date | string | null
  }

  export type real_investmentWhereInput = {
    AND?: real_investmentWhereInput | real_investmentWhereInput[]
    OR?: real_investmentWhereInput[]
    NOT?: real_investmentWhereInput | real_investmentWhereInput[]
    id?: IntFilter<"real_investment"> | number
    investment?: IntFilter<"real_investment"> | number
    created_at?: DateTimeNullableFilter<"real_investment"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"real_investment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"real_investment"> | Date | string | null
  }

  export type real_investmentOrderByWithRelationInput = {
    id?: SortOrder
    investment?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type real_investmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: real_investmentWhereInput | real_investmentWhereInput[]
    OR?: real_investmentWhereInput[]
    NOT?: real_investmentWhereInput | real_investmentWhereInput[]
    investment?: IntFilter<"real_investment"> | number
    created_at?: DateTimeNullableFilter<"real_investment"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"real_investment"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"real_investment"> | Date | string | null
  }, "id">

  export type real_investmentOrderByWithAggregationInput = {
    id?: SortOrder
    investment?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: real_investmentCountOrderByAggregateInput
    _avg?: real_investmentAvgOrderByAggregateInput
    _max?: real_investmentMaxOrderByAggregateInput
    _min?: real_investmentMinOrderByAggregateInput
    _sum?: real_investmentSumOrderByAggregateInput
  }

  export type real_investmentScalarWhereWithAggregatesInput = {
    AND?: real_investmentScalarWhereWithAggregatesInput | real_investmentScalarWhereWithAggregatesInput[]
    OR?: real_investmentScalarWhereWithAggregatesInput[]
    NOT?: real_investmentScalarWhereWithAggregatesInput | real_investmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"real_investment"> | number
    investment?: IntWithAggregatesFilter<"real_investment"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"real_investment"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"real_investment"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"real_investment"> | Date | string | null
  }

  export type setting_landWhereInput = {
    AND?: setting_landWhereInput | setting_landWhereInput[]
    OR?: setting_landWhereInput[]
    NOT?: setting_landWhereInput | setting_landWhereInput[]
    id?: IntFilter<"setting_land"> | number
    land_account_name?: StringFilter<"setting_land"> | string
    land_account_cash?: DecimalFilter<"setting_land"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"setting_land"> | Date | string
    updated_at?: DateTimeNullableFilter<"setting_land"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"setting_land"> | Date | string | null
  }

  export type setting_landOrderByWithRelationInput = {
    id?: SortOrder
    land_account_name?: SortOrder
    land_account_cash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: setting_landOrderByRelevanceInput
  }

  export type setting_landWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: setting_landWhereInput | setting_landWhereInput[]
    OR?: setting_landWhereInput[]
    NOT?: setting_landWhereInput | setting_landWhereInput[]
    land_account_name?: StringFilter<"setting_land"> | string
    land_account_cash?: DecimalFilter<"setting_land"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"setting_land"> | Date | string
    updated_at?: DateTimeNullableFilter<"setting_land"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"setting_land"> | Date | string | null
  }, "id">

  export type setting_landOrderByWithAggregationInput = {
    id?: SortOrder
    land_account_name?: SortOrder
    land_account_cash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: setting_landCountOrderByAggregateInput
    _avg?: setting_landAvgOrderByAggregateInput
    _max?: setting_landMaxOrderByAggregateInput
    _min?: setting_landMinOrderByAggregateInput
    _sum?: setting_landSumOrderByAggregateInput
  }

  export type setting_landScalarWhereWithAggregatesInput = {
    AND?: setting_landScalarWhereWithAggregatesInput | setting_landScalarWhereWithAggregatesInput[]
    OR?: setting_landScalarWhereWithAggregatesInput[]
    NOT?: setting_landScalarWhereWithAggregatesInput | setting_landScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"setting_land"> | number
    land_account_name?: StringWithAggregatesFilter<"setting_land"> | string
    land_account_cash?: DecimalWithAggregatesFilter<"setting_land"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"setting_land"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"setting_land"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"setting_land"> | Date | string | null
  }

  export type setting_land_logsWhereInput = {
    AND?: setting_land_logsWhereInput | setting_land_logsWhereInput[]
    OR?: setting_land_logsWhereInput[]
    NOT?: setting_land_logsWhereInput | setting_land_logsWhereInput[]
    id?: IntFilter<"setting_land_logs"> | number
    setting_land_id?: IntFilter<"setting_land_logs"> | number
    setting_land_detail?: StringFilter<"setting_land_logs"> | string
    setting_land_money?: DecimalFilter<"setting_land_logs"> | Decimal | DecimalJsLike | number | string
    setting_land_note?: StringNullableFilter<"setting_land_logs"> | string | null
    employee_id?: IntFilter<"setting_land_logs"> | number
    employee_name?: StringNullableFilter<"setting_land_logs"> | string | null
    created_at_logs?: DateTimeNullableFilter<"setting_land_logs"> | Date | string | null
    updated_at_logs?: DateTimeNullableFilter<"setting_land_logs"> | Date | string | null
    deleted_at_logs?: DateTimeNullableFilter<"setting_land_logs"> | Date | string | null
  }

  export type setting_land_logsOrderByWithRelationInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_detail?: SortOrder
    setting_land_money?: SortOrder
    setting_land_note?: SortOrderInput | SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrderInput | SortOrder
    created_at_logs?: SortOrderInput | SortOrder
    updated_at_logs?: SortOrderInput | SortOrder
    deleted_at_logs?: SortOrderInput | SortOrder
    _relevance?: setting_land_logsOrderByRelevanceInput
  }

  export type setting_land_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: setting_land_logsWhereInput | setting_land_logsWhereInput[]
    OR?: setting_land_logsWhereInput[]
    NOT?: setting_land_logsWhereInput | setting_land_logsWhereInput[]
    setting_land_id?: IntFilter<"setting_land_logs"> | number
    setting_land_detail?: StringFilter<"setting_land_logs"> | string
    setting_land_money?: DecimalFilter<"setting_land_logs"> | Decimal | DecimalJsLike | number | string
    setting_land_note?: StringNullableFilter<"setting_land_logs"> | string | null
    employee_id?: IntFilter<"setting_land_logs"> | number
    employee_name?: StringNullableFilter<"setting_land_logs"> | string | null
    created_at_logs?: DateTimeNullableFilter<"setting_land_logs"> | Date | string | null
    updated_at_logs?: DateTimeNullableFilter<"setting_land_logs"> | Date | string | null
    deleted_at_logs?: DateTimeNullableFilter<"setting_land_logs"> | Date | string | null
  }, "id">

  export type setting_land_logsOrderByWithAggregationInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_detail?: SortOrder
    setting_land_money?: SortOrder
    setting_land_note?: SortOrderInput | SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrderInput | SortOrder
    created_at_logs?: SortOrderInput | SortOrder
    updated_at_logs?: SortOrderInput | SortOrder
    deleted_at_logs?: SortOrderInput | SortOrder
    _count?: setting_land_logsCountOrderByAggregateInput
    _avg?: setting_land_logsAvgOrderByAggregateInput
    _max?: setting_land_logsMaxOrderByAggregateInput
    _min?: setting_land_logsMinOrderByAggregateInput
    _sum?: setting_land_logsSumOrderByAggregateInput
  }

  export type setting_land_logsScalarWhereWithAggregatesInput = {
    AND?: setting_land_logsScalarWhereWithAggregatesInput | setting_land_logsScalarWhereWithAggregatesInput[]
    OR?: setting_land_logsScalarWhereWithAggregatesInput[]
    NOT?: setting_land_logsScalarWhereWithAggregatesInput | setting_land_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"setting_land_logs"> | number
    setting_land_id?: IntWithAggregatesFilter<"setting_land_logs"> | number
    setting_land_detail?: StringWithAggregatesFilter<"setting_land_logs"> | string
    setting_land_money?: DecimalWithAggregatesFilter<"setting_land_logs"> | Decimal | DecimalJsLike | number | string
    setting_land_note?: StringNullableWithAggregatesFilter<"setting_land_logs"> | string | null
    employee_id?: IntWithAggregatesFilter<"setting_land_logs"> | number
    employee_name?: StringNullableWithAggregatesFilter<"setting_land_logs"> | string | null
    created_at_logs?: DateTimeNullableWithAggregatesFilter<"setting_land_logs"> | Date | string | null
    updated_at_logs?: DateTimeNullableWithAggregatesFilter<"setting_land_logs"> | Date | string | null
    deleted_at_logs?: DateTimeNullableWithAggregatesFilter<"setting_land_logs"> | Date | string | null
  }

  export type setting_land_reportWhereInput = {
    AND?: setting_land_reportWhereInput | setting_land_reportWhereInput[]
    OR?: setting_land_reportWhereInput[]
    NOT?: setting_land_reportWhereInput | setting_land_reportWhereInput[]
    id?: IntFilter<"setting_land_report"> | number
    setting_land_id?: IntFilter<"setting_land_report"> | number
    setting_land_report_detail?: StringFilter<"setting_land_report"> | string
    setting_land_report_money?: DecimalFilter<"setting_land_report"> | Decimal | DecimalJsLike | number | string
    setting_land_report_note?: StringNullableFilter<"setting_land_report"> | string | null
    setting_land_report_account_balance?: DecimalNullableFilter<"setting_land_report"> | Decimal | DecimalJsLike | number | string | null
    employee_id?: IntFilter<"setting_land_report"> | number
    employee_name?: StringNullableFilter<"setting_land_report"> | string | null
    created_at?: DateTimeNullableFilter<"setting_land_report"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"setting_land_report"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"setting_land_report"> | Date | string | null
  }

  export type setting_land_reportOrderByWithRelationInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_report_detail?: SortOrder
    setting_land_report_money?: SortOrder
    setting_land_report_note?: SortOrderInput | SortOrder
    setting_land_report_account_balance?: SortOrderInput | SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: setting_land_reportOrderByRelevanceInput
  }

  export type setting_land_reportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: setting_land_reportWhereInput | setting_land_reportWhereInput[]
    OR?: setting_land_reportWhereInput[]
    NOT?: setting_land_reportWhereInput | setting_land_reportWhereInput[]
    setting_land_id?: IntFilter<"setting_land_report"> | number
    setting_land_report_detail?: StringFilter<"setting_land_report"> | string
    setting_land_report_money?: DecimalFilter<"setting_land_report"> | Decimal | DecimalJsLike | number | string
    setting_land_report_note?: StringNullableFilter<"setting_land_report"> | string | null
    setting_land_report_account_balance?: DecimalNullableFilter<"setting_land_report"> | Decimal | DecimalJsLike | number | string | null
    employee_id?: IntFilter<"setting_land_report"> | number
    employee_name?: StringNullableFilter<"setting_land_report"> | string | null
    created_at?: DateTimeNullableFilter<"setting_land_report"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"setting_land_report"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"setting_land_report"> | Date | string | null
  }, "id">

  export type setting_land_reportOrderByWithAggregationInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_report_detail?: SortOrder
    setting_land_report_money?: SortOrder
    setting_land_report_note?: SortOrderInput | SortOrder
    setting_land_report_account_balance?: SortOrderInput | SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: setting_land_reportCountOrderByAggregateInput
    _avg?: setting_land_reportAvgOrderByAggregateInput
    _max?: setting_land_reportMaxOrderByAggregateInput
    _min?: setting_land_reportMinOrderByAggregateInput
    _sum?: setting_land_reportSumOrderByAggregateInput
  }

  export type setting_land_reportScalarWhereWithAggregatesInput = {
    AND?: setting_land_reportScalarWhereWithAggregatesInput | setting_land_reportScalarWhereWithAggregatesInput[]
    OR?: setting_land_reportScalarWhereWithAggregatesInput[]
    NOT?: setting_land_reportScalarWhereWithAggregatesInput | setting_land_reportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"setting_land_report"> | number
    setting_land_id?: IntWithAggregatesFilter<"setting_land_report"> | number
    setting_land_report_detail?: StringWithAggregatesFilter<"setting_land_report"> | string
    setting_land_report_money?: DecimalWithAggregatesFilter<"setting_land_report"> | Decimal | DecimalJsLike | number | string
    setting_land_report_note?: StringNullableWithAggregatesFilter<"setting_land_report"> | string | null
    setting_land_report_account_balance?: DecimalNullableWithAggregatesFilter<"setting_land_report"> | Decimal | DecimalJsLike | number | string | null
    employee_id?: IntWithAggregatesFilter<"setting_land_report"> | number
    employee_name?: StringNullableWithAggregatesFilter<"setting_land_report"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"setting_land_report"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"setting_land_report"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"setting_land_report"> | Date | string | null
  }

  export type document_title_listsCreateInput = {
    doc_type: $Enums.DocumentTitleListsDocType
    title: string
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type document_title_listsUncheckedCreateInput = {
    id?: number
    doc_type: $Enums.DocumentTitleListsDocType
    title: string
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type document_title_listsUpdateInput = {
    doc_type?: EnumDocumentTitleListsDocTypeFieldUpdateOperationsInput | $Enums.DocumentTitleListsDocType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_title_listsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: EnumDocumentTitleListsDocTypeFieldUpdateOperationsInput | $Enums.DocumentTitleListsDocType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_title_listsCreateManyInput = {
    id?: number
    doc_type: $Enums.DocumentTitleListsDocType
    title: string
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type document_title_listsUpdateManyMutationInput = {
    doc_type?: EnumDocumentTitleListsDocTypeFieldUpdateOperationsInput | $Enums.DocumentTitleListsDocType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_title_listsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: EnumDocumentTitleListsDocTypeFieldUpdateOperationsInput | $Enums.DocumentTitleListsDocType
    title?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsCreateInput = {
    doc_type: $Enums.DocumentsDocType
    doc_number: string
    doc_date: Date | string
    title: string
    price: Decimal | DecimalJsLike | number | string
    cash_flow_name: string
    employee_id?: number
    username?: string | null
    doc_file?: string | null
    doc_file_date?: Date | string | null
    doc_file_time?: Date | string | null
    doc_file_price?: Decimal | DecimalJsLike | number | string | null
    filePath?: string | null
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type documentsUncheckedCreateInput = {
    id?: number
    doc_type: $Enums.DocumentsDocType
    doc_number: string
    doc_date: Date | string
    title: string
    price: Decimal | DecimalJsLike | number | string
    cash_flow_name: string
    employee_id?: number
    username?: string | null
    doc_file?: string | null
    doc_file_date?: Date | string | null
    doc_file_time?: Date | string | null
    doc_file_price?: Decimal | DecimalJsLike | number | string | null
    filePath?: string | null
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type documentsUpdateInput = {
    doc_type?: EnumDocumentsDocTypeFieldUpdateOperationsInput | $Enums.DocumentsDocType
    doc_number?: StringFieldUpdateOperationsInput | string
    doc_date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_flow_name?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: EnumDocumentsDocTypeFieldUpdateOperationsInput | $Enums.DocumentsDocType
    doc_number?: StringFieldUpdateOperationsInput | string
    doc_date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_flow_name?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsCreateManyInput = {
    id?: number
    doc_type: $Enums.DocumentsDocType
    doc_number: string
    doc_date: Date | string
    title: string
    price: Decimal | DecimalJsLike | number | string
    cash_flow_name: string
    employee_id?: number
    username?: string | null
    doc_file?: string | null
    doc_file_date?: Date | string | null
    doc_file_time?: Date | string | null
    doc_file_price?: Decimal | DecimalJsLike | number | string | null
    filePath?: string | null
    note?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type documentsUpdateManyMutationInput = {
    doc_type?: EnumDocumentsDocTypeFieldUpdateOperationsInput | $Enums.DocumentsDocType
    doc_number?: StringFieldUpdateOperationsInput | string
    doc_date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_flow_name?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: EnumDocumentsDocTypeFieldUpdateOperationsInput | $Enums.DocumentsDocType
    doc_number?: StringFieldUpdateOperationsInput | string
    doc_date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_flow_name?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file?: NullableStringFieldUpdateOperationsInput | string | null
    doc_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doc_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ledger_land_logsCreateInput = {
    land_logs_loan_amount?: Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: Decimal | DecimalJsLike | number | string
    land_logs_interest?: Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ledger_land_logsUncheckedCreateInput = {
    id?: number
    land_logs_loan_amount?: Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: Decimal | DecimalJsLike | number | string
    land_logs_interest?: Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ledger_land_logsUpdateInput = {
    land_logs_loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ledger_land_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    land_logs_loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ledger_land_logsCreateManyInput = {
    id?: number
    land_logs_loan_amount?: Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: Decimal | DecimalJsLike | number | string
    land_logs_interest?: Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ledger_land_logsUpdateManyMutationInput = {
    land_logs_loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ledger_land_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    land_logs_loan_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_cash_flow?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_logs_summary_net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanCreateInput = {
    loan_code?: string | null
    loan_customer?: string | null
    loan_address?: string | null
    loan_number?: string | null
    loan_area?: string | null
    loan_employee?: string | null
    loan_date_promise?: Date | string | null
    loan_installment_date?: Date | string | null
    loan_summary_no_vat?: Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: Decimal | DecimalJsLike | number | string
    loan_sum_interest?: Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: number | null
    loan_payment_interest?: Decimal | DecimalJsLike | number | string
    loan_summary_all?: Decimal | DecimalJsLike | number | string
    loan_payment_month?: Decimal | DecimalJsLike | number | string
    loan_payment_process?: Decimal | DecimalJsLike | number | string
    loan_type: $Enums.LoanType
    loan_tranfer?: Decimal | DecimalJsLike | number | string
    loan_payment_other?: Decimal | DecimalJsLike | number | string
    land_deed_status: number
    loan_status?: string | null
    loan_remnark?: string | null
    loan_really_pay?: Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: Decimal | DecimalJsLike | number | string
    link_map?: string | null
    land_account_id?: number | null
    land_account_name?: string | null
    loan_date_close?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loanUncheckedCreateInput = {
    id?: number
    loan_code?: string | null
    loan_customer?: string | null
    loan_address?: string | null
    loan_number?: string | null
    loan_area?: string | null
    loan_employee?: string | null
    loan_date_promise?: Date | string | null
    loan_installment_date?: Date | string | null
    loan_summary_no_vat?: Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: Decimal | DecimalJsLike | number | string
    loan_sum_interest?: Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: number | null
    loan_payment_interest?: Decimal | DecimalJsLike | number | string
    loan_summary_all?: Decimal | DecimalJsLike | number | string
    loan_payment_month?: Decimal | DecimalJsLike | number | string
    loan_payment_process?: Decimal | DecimalJsLike | number | string
    loan_type: $Enums.LoanType
    loan_tranfer?: Decimal | DecimalJsLike | number | string
    loan_payment_other?: Decimal | DecimalJsLike | number | string
    land_deed_status: number
    loan_status?: string | null
    loan_remnark?: string | null
    loan_really_pay?: Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: Decimal | DecimalJsLike | number | string
    link_map?: string | null
    land_account_id?: number | null
    land_account_name?: string | null
    loan_date_close?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loanUpdateInput = {
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_address?: NullableStringFieldUpdateOperationsInput | string | null
    loan_number?: NullableStringFieldUpdateOperationsInput | string | null
    loan_area?: NullableStringFieldUpdateOperationsInput | string | null
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_promise?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_installment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_summary_no_vat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_sum_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: NullableIntFieldUpdateOperationsInput | number | null
    loan_payment_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_summary_all?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_month?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_process?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_type?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loan_tranfer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_other?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_deed_status?: IntFieldUpdateOperationsInput | number
    loan_status?: NullableStringFieldUpdateOperationsInput | string | null
    loan_remnark?: NullableStringFieldUpdateOperationsInput | string | null
    loan_really_pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    link_map?: NullableStringFieldUpdateOperationsInput | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_close?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_address?: NullableStringFieldUpdateOperationsInput | string | null
    loan_number?: NullableStringFieldUpdateOperationsInput | string | null
    loan_area?: NullableStringFieldUpdateOperationsInput | string | null
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_promise?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_installment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_summary_no_vat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_sum_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: NullableIntFieldUpdateOperationsInput | number | null
    loan_payment_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_summary_all?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_month?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_process?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_type?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loan_tranfer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_other?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_deed_status?: IntFieldUpdateOperationsInput | number
    loan_status?: NullableStringFieldUpdateOperationsInput | string | null
    loan_remnark?: NullableStringFieldUpdateOperationsInput | string | null
    loan_really_pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    link_map?: NullableStringFieldUpdateOperationsInput | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_close?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanCreateManyInput = {
    id?: number
    loan_code?: string | null
    loan_customer?: string | null
    loan_address?: string | null
    loan_number?: string | null
    loan_area?: string | null
    loan_employee?: string | null
    loan_date_promise?: Date | string | null
    loan_installment_date?: Date | string | null
    loan_summary_no_vat?: Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: Decimal | DecimalJsLike | number | string
    loan_sum_interest?: Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: number | null
    loan_payment_interest?: Decimal | DecimalJsLike | number | string
    loan_summary_all?: Decimal | DecimalJsLike | number | string
    loan_payment_month?: Decimal | DecimalJsLike | number | string
    loan_payment_process?: Decimal | DecimalJsLike | number | string
    loan_type: $Enums.LoanType
    loan_tranfer?: Decimal | DecimalJsLike | number | string
    loan_payment_other?: Decimal | DecimalJsLike | number | string
    land_deed_status: number
    loan_status?: string | null
    loan_remnark?: string | null
    loan_really_pay?: Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: Decimal | DecimalJsLike | number | string
    link_map?: string | null
    land_account_id?: number | null
    land_account_name?: string | null
    loan_date_close?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loanUpdateManyMutationInput = {
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_address?: NullableStringFieldUpdateOperationsInput | string | null
    loan_number?: NullableStringFieldUpdateOperationsInput | string | null
    loan_area?: NullableStringFieldUpdateOperationsInput | string | null
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_promise?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_installment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_summary_no_vat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_sum_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: NullableIntFieldUpdateOperationsInput | number | null
    loan_payment_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_summary_all?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_month?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_process?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_type?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loan_tranfer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_other?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_deed_status?: IntFieldUpdateOperationsInput | number
    loan_status?: NullableStringFieldUpdateOperationsInput | string | null
    loan_remnark?: NullableStringFieldUpdateOperationsInput | string | null
    loan_really_pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    link_map?: NullableStringFieldUpdateOperationsInput | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_close?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_address?: NullableStringFieldUpdateOperationsInput | string | null
    loan_number?: NullableStringFieldUpdateOperationsInput | string | null
    loan_area?: NullableStringFieldUpdateOperationsInput | string | null
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_promise?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_installment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_summary_no_vat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_sum_installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_sum_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_year_counter?: NullableIntFieldUpdateOperationsInput | number | null
    loan_payment_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_summary_all?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_month?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_process?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_type?: EnumLoanTypeFieldUpdateOperationsInput | $Enums.LoanType
    loan_tranfer?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_payment_other?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land_deed_status?: IntFieldUpdateOperationsInput | number
    loan_status?: NullableStringFieldUpdateOperationsInput | string | null
    loan_remnark?: NullableStringFieldUpdateOperationsInput | string | null
    loan_really_pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loan_close_payment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    link_map?: NullableStringFieldUpdateOperationsInput | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_date_close?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_customerCreateInput = {
    loan_code: string
    customer_fullname?: string | null
    customer_phone?: string | null
    customer_birthday?: Date | string | null
    customer_card_id?: string | null
    customer_email?: string | null
    customer_gender?: $Enums.CustomerGender | null
    customer_address?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loan_customerUncheckedCreateInput = {
    id?: number
    loan_code: string
    customer_fullname?: string | null
    customer_phone?: string | null
    customer_birthday?: Date | string | null
    customer_card_id?: string | null
    customer_email?: string | null
    customer_gender?: $Enums.CustomerGender | null
    customer_address?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loan_customerUpdateInput = {
    loan_code?: StringFieldUpdateOperationsInput | string
    customer_fullname?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    customer_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    customer_gender?: NullableEnumCustomerGenderFieldUpdateOperationsInput | $Enums.CustomerGender | null
    customer_address?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_customerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: StringFieldUpdateOperationsInput | string
    customer_fullname?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    customer_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    customer_gender?: NullableEnumCustomerGenderFieldUpdateOperationsInput | $Enums.CustomerGender | null
    customer_address?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_customerCreateManyInput = {
    id?: number
    loan_code: string
    customer_fullname?: string | null
    customer_phone?: string | null
    customer_birthday?: Date | string | null
    customer_card_id?: string | null
    customer_email?: string | null
    customer_gender?: $Enums.CustomerGender | null
    customer_address?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loan_customerUpdateManyMutationInput = {
    loan_code?: StringFieldUpdateOperationsInput | string
    customer_fullname?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    customer_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    customer_gender?: NullableEnumCustomerGenderFieldUpdateOperationsInput | $Enums.CustomerGender | null
    customer_address?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_customerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: StringFieldUpdateOperationsInput | string
    customer_fullname?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    customer_birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_card_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    customer_gender?: NullableEnumCustomerGenderFieldUpdateOperationsInput | $Enums.CustomerGender | null
    customer_address?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_paymentCreateInput = {
    loan_code?: string | null
    loan_payment_amount?: Decimal | DecimalJsLike | number | string
    loan_change?: Decimal | DecimalJsLike | number | string
    loan_interest?: Decimal | DecimalJsLike | number | string
    loan_employee?: string | null
    loan_payment_type?: string | null
    loan_payment_pay_type?: string | null
    loan_payment_installment?: string | null
    loan_payment_customer?: string | null
    loan_payment_src?: string | null
    payment_file_date?: Date | string | null
    payment_file_time?: Date | string | null
    payment_file_ref_no?: string | null
    payment_file_price?: Decimal | DecimalJsLike | number | string | null
    land_account_id?: number | null
    land_account_name?: string | null
    loan_payment_date_fix?: Date | string | null
    loan_payment_date?: Date | string | null
    loan_balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loan_paymentUncheckedCreateInput = {
    id?: number
    loan_code?: string | null
    loan_payment_amount?: Decimal | DecimalJsLike | number | string
    loan_change?: Decimal | DecimalJsLike | number | string
    loan_interest?: Decimal | DecimalJsLike | number | string
    loan_employee?: string | null
    loan_payment_type?: string | null
    loan_payment_pay_type?: string | null
    loan_payment_installment?: string | null
    loan_payment_customer?: string | null
    loan_payment_src?: string | null
    payment_file_date?: Date | string | null
    payment_file_time?: Date | string | null
    payment_file_ref_no?: string | null
    payment_file_price?: Decimal | DecimalJsLike | number | string | null
    land_account_id?: number | null
    land_account_name?: string | null
    loan_payment_date_fix?: Date | string | null
    loan_payment_date?: Date | string | null
    loan_balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loan_paymentUpdateInput = {
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_pay_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_installment?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_src?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_ref_no?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_date_fix?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_pay_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_installment?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_src?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_ref_no?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_date_fix?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_paymentCreateManyInput = {
    id?: number
    loan_code?: string | null
    loan_payment_amount?: Decimal | DecimalJsLike | number | string
    loan_change?: Decimal | DecimalJsLike | number | string
    loan_interest?: Decimal | DecimalJsLike | number | string
    loan_employee?: string | null
    loan_payment_type?: string | null
    loan_payment_pay_type?: string | null
    loan_payment_installment?: string | null
    loan_payment_customer?: string | null
    loan_payment_src?: string | null
    payment_file_date?: Date | string | null
    payment_file_time?: Date | string | null
    payment_file_ref_no?: string | null
    payment_file_price?: Decimal | DecimalJsLike | number | string | null
    land_account_id?: number | null
    land_account_name?: string | null
    loan_payment_date_fix?: Date | string | null
    loan_payment_date?: Date | string | null
    loan_balance?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type loan_paymentUpdateManyMutationInput = {
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_pay_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_installment?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_src?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_ref_no?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_date_fix?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_interest?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_employee?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_pay_type?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_installment?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_customer?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_src?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_file_ref_no?: NullableStringFieldUpdateOperationsInput | string | null
    payment_file_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    land_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    land_account_name?: NullableStringFieldUpdateOperationsInput | string | null
    loan_payment_date_fix?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loan_runningCreateInput = {
    loan_running_code?: string | null
  }

  export type loan_runningUncheckedCreateInput = {
    id?: number
    loan_running_code?: string | null
  }

  export type loan_runningUpdateInput = {
    loan_running_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loan_runningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_running_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loan_runningCreateManyInput = {
    id?: number
    loan_running_code?: string | null
  }

  export type loan_runningUpdateManyMutationInput = {
    loan_running_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loan_runningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_running_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type overdue_statusCreateInput = {
    token_loan?: string | null
    token_overdue_loan: number
    token_loan_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type overdue_statusUncheckedCreateInput = {
    id?: number
    token_loan?: string | null
    token_overdue_loan: number
    token_loan_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type overdue_statusUpdateInput = {
    token_loan?: NullableStringFieldUpdateOperationsInput | string | null
    token_overdue_loan?: IntFieldUpdateOperationsInput | number
    token_loan_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type overdue_statusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token_loan?: NullableStringFieldUpdateOperationsInput | string | null
    token_overdue_loan?: IntFieldUpdateOperationsInput | number
    token_loan_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type overdue_statusCreateManyInput = {
    id?: number
    token_loan?: string | null
    token_overdue_loan: number
    token_loan_status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type overdue_statusUpdateManyMutationInput = {
    token_loan?: NullableStringFieldUpdateOperationsInput | string | null
    token_overdue_loan?: IntFieldUpdateOperationsInput | number
    token_loan_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type overdue_statusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token_loan?: NullableStringFieldUpdateOperationsInput | string | null
    token_overdue_loan?: IntFieldUpdateOperationsInput | number
    token_loan_status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type picture_loan_otherCreateInput = {
    loan_code?: string | null
    picture_loan_src?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type picture_loan_otherUncheckedCreateInput = {
    id?: number
    loan_code?: string | null
    picture_loan_src?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type picture_loan_otherUpdateInput = {
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    picture_loan_src?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type picture_loan_otherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    picture_loan_src?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type picture_loan_otherCreateManyInput = {
    id?: number
    loan_code?: string | null
    picture_loan_src?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type picture_loan_otherUpdateManyMutationInput = {
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    picture_loan_src?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type picture_loan_otherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loan_code?: NullableStringFieldUpdateOperationsInput | string | null
    picture_loan_src?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type real_investmentCreateInput = {
    investment: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type real_investmentUncheckedCreateInput = {
    id?: number
    investment: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type real_investmentUpdateInput = {
    investment?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type real_investmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    investment?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type real_investmentCreateManyInput = {
    id?: number
    investment: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type real_investmentUpdateManyMutationInput = {
    investment?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type real_investmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    investment?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_landCreateInput = {
    land_account_name: string
    land_account_cash?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type setting_landUncheckedCreateInput = {
    id?: number
    land_account_name: string
    land_account_cash?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type setting_landUpdateInput = {
    land_account_name?: StringFieldUpdateOperationsInput | string
    land_account_cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_landUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    land_account_name?: StringFieldUpdateOperationsInput | string
    land_account_cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_landCreateManyInput = {
    id?: number
    land_account_name: string
    land_account_cash?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type setting_landUpdateManyMutationInput = {
    land_account_name?: StringFieldUpdateOperationsInput | string
    land_account_cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_landUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    land_account_name?: StringFieldUpdateOperationsInput | string
    land_account_cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_logsCreateInput = {
    setting_land_id: number
    setting_land_detail: string
    setting_land_money?: Decimal | DecimalJsLike | number | string
    setting_land_note?: string | null
    employee_id: number
    employee_name?: string | null
    created_at_logs?: Date | string | null
    updated_at_logs?: Date | string | null
    deleted_at_logs?: Date | string | null
  }

  export type setting_land_logsUncheckedCreateInput = {
    id?: number
    setting_land_id: number
    setting_land_detail: string
    setting_land_money?: Decimal | DecimalJsLike | number | string
    setting_land_note?: string | null
    employee_id: number
    employee_name?: string | null
    created_at_logs?: Date | string | null
    updated_at_logs?: Date | string | null
    deleted_at_logs?: Date | string | null
  }

  export type setting_land_logsUpdateInput = {
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_detail?: StringFieldUpdateOperationsInput | string
    setting_land_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_note?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_detail?: StringFieldUpdateOperationsInput | string
    setting_land_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_note?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_logsCreateManyInput = {
    id?: number
    setting_land_id: number
    setting_land_detail: string
    setting_land_money?: Decimal | DecimalJsLike | number | string
    setting_land_note?: string | null
    employee_id: number
    employee_name?: string | null
    created_at_logs?: Date | string | null
    updated_at_logs?: Date | string | null
    deleted_at_logs?: Date | string | null
  }

  export type setting_land_logsUpdateManyMutationInput = {
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_detail?: StringFieldUpdateOperationsInput | string
    setting_land_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_note?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_detail?: StringFieldUpdateOperationsInput | string
    setting_land_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_note?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at_logs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_reportCreateInput = {
    setting_land_id: number
    setting_land_report_detail: string
    setting_land_report_money?: Decimal | DecimalJsLike | number | string
    setting_land_report_note?: string | null
    setting_land_report_account_balance?: Decimal | DecimalJsLike | number | string | null
    employee_id: number
    employee_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type setting_land_reportUncheckedCreateInput = {
    id?: number
    setting_land_id: number
    setting_land_report_detail: string
    setting_land_report_money?: Decimal | DecimalJsLike | number | string
    setting_land_report_note?: string | null
    setting_land_report_account_balance?: Decimal | DecimalJsLike | number | string | null
    employee_id: number
    employee_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type setting_land_reportUpdateInput = {
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_report_detail?: StringFieldUpdateOperationsInput | string
    setting_land_report_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_report_note?: NullableStringFieldUpdateOperationsInput | string | null
    setting_land_report_account_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_reportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_report_detail?: StringFieldUpdateOperationsInput | string
    setting_land_report_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_report_note?: NullableStringFieldUpdateOperationsInput | string | null
    setting_land_report_account_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_reportCreateManyInput = {
    id?: number
    setting_land_id: number
    setting_land_report_detail: string
    setting_land_report_money?: Decimal | DecimalJsLike | number | string
    setting_land_report_note?: string | null
    setting_land_report_account_balance?: Decimal | DecimalJsLike | number | string | null
    employee_id: number
    employee_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type setting_land_reportUpdateManyMutationInput = {
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_report_detail?: StringFieldUpdateOperationsInput | string
    setting_land_report_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_report_note?: NullableStringFieldUpdateOperationsInput | string | null
    setting_land_report_account_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type setting_land_reportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    setting_land_id?: IntFieldUpdateOperationsInput | number
    setting_land_report_detail?: StringFieldUpdateOperationsInput | string
    setting_land_report_money?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_land_report_note?: NullableStringFieldUpdateOperationsInput | string | null
    setting_land_report_account_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDocumentTitleListsDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTitleListsDocType | EnumDocumentTitleListsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTitleListsDocType[]
    notIn?: $Enums.DocumentTitleListsDocType[]
    not?: NestedEnumDocumentTitleListsDocTypeFilter<$PrismaModel> | $Enums.DocumentTitleListsDocType
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type document_title_listsOrderByRelevanceInput = {
    fields: document_title_listsOrderByRelevanceFieldEnum | document_title_listsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type document_title_listsCountOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type document_title_listsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type document_title_listsMaxOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type document_title_listsMinOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    title?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type document_title_listsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDocumentTitleListsDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTitleListsDocType | EnumDocumentTitleListsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTitleListsDocType[]
    notIn?: $Enums.DocumentTitleListsDocType[]
    not?: NestedEnumDocumentTitleListsDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentTitleListsDocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTitleListsDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTitleListsDocTypeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDocumentsDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsDocType | EnumDocumentsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentsDocType[]
    notIn?: $Enums.DocumentsDocType[]
    not?: NestedEnumDocumentsDocTypeFilter<$PrismaModel> | $Enums.DocumentsDocType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type documentsOrderByRelevanceInput = {
    fields: documentsOrderByRelevanceFieldEnum | documentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type documentsCountOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    doc_number?: SortOrder
    doc_date?: SortOrder
    title?: SortOrder
    price?: SortOrder
    cash_flow_name?: SortOrder
    employee_id?: SortOrder
    username?: SortOrder
    doc_file?: SortOrder
    doc_file_date?: SortOrder
    doc_file_time?: SortOrder
    doc_file_price?: SortOrder
    filePath?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type documentsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    employee_id?: SortOrder
    doc_file_price?: SortOrder
  }

  export type documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    doc_number?: SortOrder
    doc_date?: SortOrder
    title?: SortOrder
    price?: SortOrder
    cash_flow_name?: SortOrder
    employee_id?: SortOrder
    username?: SortOrder
    doc_file?: SortOrder
    doc_file_date?: SortOrder
    doc_file_time?: SortOrder
    doc_file_price?: SortOrder
    filePath?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type documentsMinOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    doc_number?: SortOrder
    doc_date?: SortOrder
    title?: SortOrder
    price?: SortOrder
    cash_flow_name?: SortOrder
    employee_id?: SortOrder
    username?: SortOrder
    doc_file?: SortOrder
    doc_file_date?: SortOrder
    doc_file_time?: SortOrder
    doc_file_price?: SortOrder
    filePath?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type documentsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    employee_id?: SortOrder
    doc_file_price?: SortOrder
  }

  export type EnumDocumentsDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsDocType | EnumDocumentsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentsDocType[]
    notIn?: $Enums.DocumentsDocType[]
    not?: NestedEnumDocumentsDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentsDocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentsDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentsDocTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ledger_land_logsCountOrderByAggregateInput = {
    id?: SortOrder
    land_logs_loan_amount?: SortOrder
    land_logs_cash_flow?: SortOrder
    land_logs_interest?: SortOrder
    land_logs_summary_net?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ledger_land_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    land_logs_loan_amount?: SortOrder
    land_logs_cash_flow?: SortOrder
    land_logs_interest?: SortOrder
    land_logs_summary_net?: SortOrder
  }

  export type ledger_land_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    land_logs_loan_amount?: SortOrder
    land_logs_cash_flow?: SortOrder
    land_logs_interest?: SortOrder
    land_logs_summary_net?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ledger_land_logsMinOrderByAggregateInput = {
    id?: SortOrder
    land_logs_loan_amount?: SortOrder
    land_logs_cash_flow?: SortOrder
    land_logs_interest?: SortOrder
    land_logs_summary_net?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ledger_land_logsSumOrderByAggregateInput = {
    id?: SortOrder
    land_logs_loan_amount?: SortOrder
    land_logs_cash_flow?: SortOrder
    land_logs_interest?: SortOrder
    land_logs_summary_net?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumLoanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[]
    notIn?: $Enums.LoanType[]
    not?: NestedEnumLoanTypeFilter<$PrismaModel> | $Enums.LoanType
  }

  export type loanOrderByRelevanceInput = {
    fields: loanOrderByRelevanceFieldEnum | loanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type loanCountOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    loan_customer?: SortOrder
    loan_address?: SortOrder
    loan_number?: SortOrder
    loan_area?: SortOrder
    loan_employee?: SortOrder
    loan_date_promise?: SortOrder
    loan_installment_date?: SortOrder
    loan_summary_no_vat?: SortOrder
    loan_payment_sum_installment?: SortOrder
    loan_sum_interest?: SortOrder
    loan_payment_year_counter?: SortOrder
    loan_payment_interest?: SortOrder
    loan_summary_all?: SortOrder
    loan_payment_month?: SortOrder
    loan_payment_process?: SortOrder
    loan_type?: SortOrder
    loan_tranfer?: SortOrder
    loan_payment_other?: SortOrder
    land_deed_status?: SortOrder
    loan_status?: SortOrder
    loan_remnark?: SortOrder
    loan_really_pay?: SortOrder
    loan_close_payment?: SortOrder
    link_map?: SortOrder
    land_account_id?: SortOrder
    land_account_name?: SortOrder
    loan_date_close?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loanAvgOrderByAggregateInput = {
    id?: SortOrder
    loan_summary_no_vat?: SortOrder
    loan_payment_sum_installment?: SortOrder
    loan_sum_interest?: SortOrder
    loan_payment_year_counter?: SortOrder
    loan_payment_interest?: SortOrder
    loan_summary_all?: SortOrder
    loan_payment_month?: SortOrder
    loan_payment_process?: SortOrder
    loan_tranfer?: SortOrder
    loan_payment_other?: SortOrder
    land_deed_status?: SortOrder
    loan_really_pay?: SortOrder
    loan_close_payment?: SortOrder
    land_account_id?: SortOrder
  }

  export type loanMaxOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    loan_customer?: SortOrder
    loan_address?: SortOrder
    loan_number?: SortOrder
    loan_area?: SortOrder
    loan_employee?: SortOrder
    loan_date_promise?: SortOrder
    loan_installment_date?: SortOrder
    loan_summary_no_vat?: SortOrder
    loan_payment_sum_installment?: SortOrder
    loan_sum_interest?: SortOrder
    loan_payment_year_counter?: SortOrder
    loan_payment_interest?: SortOrder
    loan_summary_all?: SortOrder
    loan_payment_month?: SortOrder
    loan_payment_process?: SortOrder
    loan_type?: SortOrder
    loan_tranfer?: SortOrder
    loan_payment_other?: SortOrder
    land_deed_status?: SortOrder
    loan_status?: SortOrder
    loan_remnark?: SortOrder
    loan_really_pay?: SortOrder
    loan_close_payment?: SortOrder
    link_map?: SortOrder
    land_account_id?: SortOrder
    land_account_name?: SortOrder
    loan_date_close?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loanMinOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    loan_customer?: SortOrder
    loan_address?: SortOrder
    loan_number?: SortOrder
    loan_area?: SortOrder
    loan_employee?: SortOrder
    loan_date_promise?: SortOrder
    loan_installment_date?: SortOrder
    loan_summary_no_vat?: SortOrder
    loan_payment_sum_installment?: SortOrder
    loan_sum_interest?: SortOrder
    loan_payment_year_counter?: SortOrder
    loan_payment_interest?: SortOrder
    loan_summary_all?: SortOrder
    loan_payment_month?: SortOrder
    loan_payment_process?: SortOrder
    loan_type?: SortOrder
    loan_tranfer?: SortOrder
    loan_payment_other?: SortOrder
    land_deed_status?: SortOrder
    loan_status?: SortOrder
    loan_remnark?: SortOrder
    loan_really_pay?: SortOrder
    loan_close_payment?: SortOrder
    link_map?: SortOrder
    land_account_id?: SortOrder
    land_account_name?: SortOrder
    loan_date_close?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loanSumOrderByAggregateInput = {
    id?: SortOrder
    loan_summary_no_vat?: SortOrder
    loan_payment_sum_installment?: SortOrder
    loan_sum_interest?: SortOrder
    loan_payment_year_counter?: SortOrder
    loan_payment_interest?: SortOrder
    loan_summary_all?: SortOrder
    loan_payment_month?: SortOrder
    loan_payment_process?: SortOrder
    loan_tranfer?: SortOrder
    loan_payment_other?: SortOrder
    land_deed_status?: SortOrder
    loan_really_pay?: SortOrder
    loan_close_payment?: SortOrder
    land_account_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLoanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[]
    notIn?: $Enums.LoanType[]
    not?: NestedEnumLoanTypeWithAggregatesFilter<$PrismaModel> | $Enums.LoanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanTypeFilter<$PrismaModel>
    _max?: NestedEnumLoanTypeFilter<$PrismaModel>
  }

  export type EnumCustomerGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerGender | EnumCustomerGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerGender[] | null
    notIn?: $Enums.CustomerGender[] | null
    not?: NestedEnumCustomerGenderNullableFilter<$PrismaModel> | $Enums.CustomerGender | null
  }

  export type loan_customerOrderByRelevanceInput = {
    fields: loan_customerOrderByRelevanceFieldEnum | loan_customerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type loan_customerCountOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    customer_fullname?: SortOrder
    customer_phone?: SortOrder
    customer_birthday?: SortOrder
    customer_card_id?: SortOrder
    customer_email?: SortOrder
    customer_gender?: SortOrder
    customer_address?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loan_customerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type loan_customerMaxOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    customer_fullname?: SortOrder
    customer_phone?: SortOrder
    customer_birthday?: SortOrder
    customer_card_id?: SortOrder
    customer_email?: SortOrder
    customer_gender?: SortOrder
    customer_address?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loan_customerMinOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    customer_fullname?: SortOrder
    customer_phone?: SortOrder
    customer_birthday?: SortOrder
    customer_card_id?: SortOrder
    customer_email?: SortOrder
    customer_gender?: SortOrder
    customer_address?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loan_customerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCustomerGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerGender | EnumCustomerGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerGender[] | null
    notIn?: $Enums.CustomerGender[] | null
    not?: NestedEnumCustomerGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.CustomerGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCustomerGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumCustomerGenderNullableFilter<$PrismaModel>
  }

  export type loan_paymentOrderByRelevanceInput = {
    fields: loan_paymentOrderByRelevanceFieldEnum | loan_paymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type loan_paymentCountOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    loan_payment_amount?: SortOrder
    loan_change?: SortOrder
    loan_interest?: SortOrder
    loan_employee?: SortOrder
    loan_payment_type?: SortOrder
    loan_payment_pay_type?: SortOrder
    loan_payment_installment?: SortOrder
    loan_payment_customer?: SortOrder
    loan_payment_src?: SortOrder
    payment_file_date?: SortOrder
    payment_file_time?: SortOrder
    payment_file_ref_no?: SortOrder
    payment_file_price?: SortOrder
    land_account_id?: SortOrder
    land_account_name?: SortOrder
    loan_payment_date_fix?: SortOrder
    loan_payment_date?: SortOrder
    loan_balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loan_paymentAvgOrderByAggregateInput = {
    id?: SortOrder
    loan_payment_amount?: SortOrder
    loan_change?: SortOrder
    loan_interest?: SortOrder
    payment_file_price?: SortOrder
    land_account_id?: SortOrder
    loan_balance?: SortOrder
  }

  export type loan_paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    loan_payment_amount?: SortOrder
    loan_change?: SortOrder
    loan_interest?: SortOrder
    loan_employee?: SortOrder
    loan_payment_type?: SortOrder
    loan_payment_pay_type?: SortOrder
    loan_payment_installment?: SortOrder
    loan_payment_customer?: SortOrder
    loan_payment_src?: SortOrder
    payment_file_date?: SortOrder
    payment_file_time?: SortOrder
    payment_file_ref_no?: SortOrder
    payment_file_price?: SortOrder
    land_account_id?: SortOrder
    land_account_name?: SortOrder
    loan_payment_date_fix?: SortOrder
    loan_payment_date?: SortOrder
    loan_balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loan_paymentMinOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    loan_payment_amount?: SortOrder
    loan_change?: SortOrder
    loan_interest?: SortOrder
    loan_employee?: SortOrder
    loan_payment_type?: SortOrder
    loan_payment_pay_type?: SortOrder
    loan_payment_installment?: SortOrder
    loan_payment_customer?: SortOrder
    loan_payment_src?: SortOrder
    payment_file_date?: SortOrder
    payment_file_time?: SortOrder
    payment_file_ref_no?: SortOrder
    payment_file_price?: SortOrder
    land_account_id?: SortOrder
    land_account_name?: SortOrder
    loan_payment_date_fix?: SortOrder
    loan_payment_date?: SortOrder
    loan_balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type loan_paymentSumOrderByAggregateInput = {
    id?: SortOrder
    loan_payment_amount?: SortOrder
    loan_change?: SortOrder
    loan_interest?: SortOrder
    payment_file_price?: SortOrder
    land_account_id?: SortOrder
    loan_balance?: SortOrder
  }

  export type loan_runningOrderByRelevanceInput = {
    fields: loan_runningOrderByRelevanceFieldEnum | loan_runningOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type loan_runningCountOrderByAggregateInput = {
    id?: SortOrder
    loan_running_code?: SortOrder
  }

  export type loan_runningAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type loan_runningMaxOrderByAggregateInput = {
    id?: SortOrder
    loan_running_code?: SortOrder
  }

  export type loan_runningMinOrderByAggregateInput = {
    id?: SortOrder
    loan_running_code?: SortOrder
  }

  export type loan_runningSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type overdue_statusOrderByRelevanceInput = {
    fields: overdue_statusOrderByRelevanceFieldEnum | overdue_statusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type overdue_statusCountOrderByAggregateInput = {
    id?: SortOrder
    token_loan?: SortOrder
    token_overdue_loan?: SortOrder
    token_loan_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type overdue_statusAvgOrderByAggregateInput = {
    id?: SortOrder
    token_overdue_loan?: SortOrder
    token_loan_status?: SortOrder
  }

  export type overdue_statusMaxOrderByAggregateInput = {
    id?: SortOrder
    token_loan?: SortOrder
    token_overdue_loan?: SortOrder
    token_loan_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type overdue_statusMinOrderByAggregateInput = {
    id?: SortOrder
    token_loan?: SortOrder
    token_overdue_loan?: SortOrder
    token_loan_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type overdue_statusSumOrderByAggregateInput = {
    id?: SortOrder
    token_overdue_loan?: SortOrder
    token_loan_status?: SortOrder
  }

  export type picture_loan_otherOrderByRelevanceInput = {
    fields: picture_loan_otherOrderByRelevanceFieldEnum | picture_loan_otherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type picture_loan_otherCountOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    picture_loan_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type picture_loan_otherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type picture_loan_otherMaxOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    picture_loan_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type picture_loan_otherMinOrderByAggregateInput = {
    id?: SortOrder
    loan_code?: SortOrder
    picture_loan_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type picture_loan_otherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type real_investmentCountOrderByAggregateInput = {
    id?: SortOrder
    investment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type real_investmentAvgOrderByAggregateInput = {
    id?: SortOrder
    investment?: SortOrder
  }

  export type real_investmentMaxOrderByAggregateInput = {
    id?: SortOrder
    investment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type real_investmentMinOrderByAggregateInput = {
    id?: SortOrder
    investment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type real_investmentSumOrderByAggregateInput = {
    id?: SortOrder
    investment?: SortOrder
  }

  export type setting_landOrderByRelevanceInput = {
    fields: setting_landOrderByRelevanceFieldEnum | setting_landOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type setting_landCountOrderByAggregateInput = {
    id?: SortOrder
    land_account_name?: SortOrder
    land_account_cash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type setting_landAvgOrderByAggregateInput = {
    id?: SortOrder
    land_account_cash?: SortOrder
  }

  export type setting_landMaxOrderByAggregateInput = {
    id?: SortOrder
    land_account_name?: SortOrder
    land_account_cash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type setting_landMinOrderByAggregateInput = {
    id?: SortOrder
    land_account_name?: SortOrder
    land_account_cash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type setting_landSumOrderByAggregateInput = {
    id?: SortOrder
    land_account_cash?: SortOrder
  }

  export type setting_land_logsOrderByRelevanceInput = {
    fields: setting_land_logsOrderByRelevanceFieldEnum | setting_land_logsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type setting_land_logsCountOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_detail?: SortOrder
    setting_land_money?: SortOrder
    setting_land_note?: SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrder
    created_at_logs?: SortOrder
    updated_at_logs?: SortOrder
    deleted_at_logs?: SortOrder
  }

  export type setting_land_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_money?: SortOrder
    employee_id?: SortOrder
  }

  export type setting_land_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_detail?: SortOrder
    setting_land_money?: SortOrder
    setting_land_note?: SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrder
    created_at_logs?: SortOrder
    updated_at_logs?: SortOrder
    deleted_at_logs?: SortOrder
  }

  export type setting_land_logsMinOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_detail?: SortOrder
    setting_land_money?: SortOrder
    setting_land_note?: SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrder
    created_at_logs?: SortOrder
    updated_at_logs?: SortOrder
    deleted_at_logs?: SortOrder
  }

  export type setting_land_logsSumOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_money?: SortOrder
    employee_id?: SortOrder
  }

  export type setting_land_reportOrderByRelevanceInput = {
    fields: setting_land_reportOrderByRelevanceFieldEnum | setting_land_reportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type setting_land_reportCountOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_report_detail?: SortOrder
    setting_land_report_money?: SortOrder
    setting_land_report_note?: SortOrder
    setting_land_report_account_balance?: SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type setting_land_reportAvgOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_report_money?: SortOrder
    setting_land_report_account_balance?: SortOrder
    employee_id?: SortOrder
  }

  export type setting_land_reportMaxOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_report_detail?: SortOrder
    setting_land_report_money?: SortOrder
    setting_land_report_note?: SortOrder
    setting_land_report_account_balance?: SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type setting_land_reportMinOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_report_detail?: SortOrder
    setting_land_report_money?: SortOrder
    setting_land_report_note?: SortOrder
    setting_land_report_account_balance?: SortOrder
    employee_id?: SortOrder
    employee_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type setting_land_reportSumOrderByAggregateInput = {
    id?: SortOrder
    setting_land_id?: SortOrder
    setting_land_report_money?: SortOrder
    setting_land_report_account_balance?: SortOrder
    employee_id?: SortOrder
  }

  export type EnumDocumentTitleListsDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentTitleListsDocType
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDocumentsDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentsDocType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLoanTypeFieldUpdateOperationsInput = {
    set?: $Enums.LoanType
  }

  export type NullableEnumCustomerGenderFieldUpdateOperationsInput = {
    set?: $Enums.CustomerGender | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumDocumentTitleListsDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTitleListsDocType | EnumDocumentTitleListsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTitleListsDocType[]
    notIn?: $Enums.DocumentTitleListsDocType[]
    not?: NestedEnumDocumentTitleListsDocTypeFilter<$PrismaModel> | $Enums.DocumentTitleListsDocType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDocumentTitleListsDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentTitleListsDocType | EnumDocumentTitleListsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentTitleListsDocType[]
    notIn?: $Enums.DocumentTitleListsDocType[]
    not?: NestedEnumDocumentTitleListsDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentTitleListsDocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTitleListsDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTitleListsDocTypeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentsDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsDocType | EnumDocumentsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentsDocType[]
    notIn?: $Enums.DocumentsDocType[]
    not?: NestedEnumDocumentsDocTypeFilter<$PrismaModel> | $Enums.DocumentsDocType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumDocumentsDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentsDocType | EnumDocumentsDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentsDocType[]
    notIn?: $Enums.DocumentsDocType[]
    not?: NestedEnumDocumentsDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentsDocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentsDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentsDocTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumLoanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[]
    notIn?: $Enums.LoanType[]
    not?: NestedEnumLoanTypeFilter<$PrismaModel> | $Enums.LoanType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLoanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanType | EnumLoanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LoanType[]
    notIn?: $Enums.LoanType[]
    not?: NestedEnumLoanTypeWithAggregatesFilter<$PrismaModel> | $Enums.LoanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanTypeFilter<$PrismaModel>
    _max?: NestedEnumLoanTypeFilter<$PrismaModel>
  }

  export type NestedEnumCustomerGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerGender | EnumCustomerGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerGender[] | null
    notIn?: $Enums.CustomerGender[] | null
    not?: NestedEnumCustomerGenderNullableFilter<$PrismaModel> | $Enums.CustomerGender | null
  }

  export type NestedEnumCustomerGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerGender | EnumCustomerGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CustomerGender[] | null
    notIn?: $Enums.CustomerGender[] | null
    not?: NestedEnumCustomerGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.CustomerGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCustomerGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumCustomerGenderNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}