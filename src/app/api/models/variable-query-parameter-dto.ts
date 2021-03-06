/* tslint:disable */
/* eslint-disable */
export interface VariableQueryParameterDto {

  /**
   * Comparison operator to be used
   */
  operator?: 'eq' | 'neq' | 'gt' | 'gteq' | 'lt' | 'lteq' | 'like';

  /**
   * The variable value, could be of type boolean, string or number
   */
  value?: {  };
}
