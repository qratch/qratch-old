import { IPointable, IMovableByPointable } from '.'

/*
 * Vec2 interface.
 */
export interface IVec2 extends IPointable, IMovableByPointable<IVec2> {
  /**
   * Set by given value.
   *
   * @param value value to set.
   */
  set(value: number): this

  /**
   * Set by given x and given y.
   *
   * @param x x to set.
   * @param y y to set.
   */
  set(x: number, y: number): this

  /**
   * Set by given pointable object.
   *
   * @param pointable pointable object to set.
   */
  set(pointable: Partial<IPointable>): this

  /**
   * Adds value to x and y.
   *
   * @param value value to add.
   */
  add(value: number): this

  /**
   * Adds given x and given y to x and y.
   *
   * @param x x to add.
   * @param y y to add.
   */
  add(x: number, y: number): this

  /**
   * Adds given pointable object to x and y.
   *
   * @param pointable pointable object to add.
   */
  add(pointable: Partial<IPointable>): this

  /**
   * Returns a vector of x and y added by given value.
   *
   * @param value value to add.
   */
  added(value: number): IVec2

  /**
   * Returns a vector of x and y added by given x and given y.
   *
   * @param x x to add.
   * @param y y to add.
   */
  added(x: number, y: number): IVec2

  /**
   * Returns a vector of x and y added by given pointable object.
   *
   * @param pointable pointable object to add.
   */
  added(pointable: Partial<IPointable>): IVec2

  /**
   * Subtracts value from x and y.
   *
   * @param value value to subtract.
   */
  subtract(value: number): this

  /**
   * Subtracts given x and given y from x and y.
   *
   * @param x x to subtract.
   * @param y y to subtract.
   */
  subtract(x: number, y: number): this

  /**
   * Subtracts given pointable object from x and y.
   *
   * @param pointable pointable object to subtract.
   */
  subtract(pointable: Partial<IPointable>): this

  /**
   * Returns a vector of x and y subtracted by given value.
   *
   * @param value value to subtract.
   */
  subtracted(value: number): IVec2

  /**
   * Returns a vector of x and y subtracted by given x and given y.
   *
   * @param x x to subtract.
   * @param y y to subtract.
   */
  subtracted(x: number, y: number): IVec2

  /**
   * Returns a vector of x and y subtrated by given pointable object.
   *
   * @param pointable pointable object to subtract.
   */
  subtracted(pointable: Partial<IPointable>): IVec2

  /**
   * Multiplies value by x and y.
   *
   * @param value value to mulitply.
   */
  multiply(value: number): this

  /**
   * Multiplies x and y by given x and given y.
   *
   * @param x x to mulitply.
   * @param y y to mulitply.
   */
  multiply(x: number, y: number): this

  /**
   * Multiplies x and y by given pointable object.
   *
   * @param pointable pointable object to multiply.
   */
  multiply(pointable: Partial<IPointable>): this

  /**
   * Returns a vector of x and y multiplied by given value
   *
   * @param value value to mulitply.
   */
  multiplied(value: number): IVec2

  /**
   * Returns a vector of x and y multiplied by given x and given y.
   *
   * @param x x to mulitply.
   * @param y y to mulitply.
   */
  multiplied(x: number, y: number): IVec2

  /**
   * Returns a vector of x and y mulitplied by given pointable object.
   *
   * @param pointable pointable object to multiply.
   */
  multiplied(pointable: Partial<IPointable>): IVec2

  /**
   * Divide x and y by value.
   *
   * @param value value to divide.
   */
  divide(value: number): this

  /**
   * Divide x and y by given x and given y.
   *
   * @param x x to divide.
   * @param y y to divide.
   */
  divide(x: number, y: number): this

  /**
   * Divide x and y by given pointable object.
   *
   * @param pointable pointable object to divide.
   */
  divide(pointable: Partial<IPointable>): this

  /**
   * Returns a vector of x and y divided by given value.
   *
   * @param value value to divide.
   */
  divided(value: number): IVec2

  /**
   * Returns a vector of x and y divided by given x and given y.
   *
   * @param x x to divide.
   * @param y y to divide.
   */
  divided(x: number, y: number): IVec2

  /**
   * Returns a vector of x and y divided by given pointable object.
   *
   * @param pointable pointable object to divide.
   */
  divided(pointable: Partial<IPointable>): IVec2

  /**
   * Returns the length from (0, 0).
   */
  length(): number

  /**
   * Returns the distance from given x and given y.
   *
   * @param x from x.
   * @param y from y.
   */
  distanceFrom(x: number, y: number): number

  /**
   * Returns the distance from given pointable object.
   *
   * @param pointable from pointable object.
   */
  distanceFrom(pointable: IPointable): number

  /**
   * Returns the dot product of x and y.
   *
   * @param x x to dot product.
   * @param y y to dot product.
   */
  dot(x: number, y: number): number

  /**
   * Returns the dot product of pointable object.
   *
   * @param pointable pointable object to dot product.
   */
  dot(pointable: IPointable): number

  /**
   * Returns the cross product of x and y.
   *
   * @param x x to cross product.
   * @param y y to cross product.
   */
  cross(x: number, y: number): number

  /**
   * Returns the cross product of pointable object.
   *
   * @param pointable pointable object to cross product.
   */
  cross(pointable: IPointable): number
}
