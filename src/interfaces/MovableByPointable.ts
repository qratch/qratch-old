import { IPointable } from '.'

/*
 * MovableByPointable interface.
 */
export interface IMovableByPointable<T> {
  /**
   * Move by given value.
   *
   * @param value value to move.
   */
  moveBy(value: number): this

  /**
   * Move by given x and given y.
   *
   * @param x x to move.
   * @param y y to move.
   */
  moveBy(x: number, y: number): this

  /**
   * Move by given pointable object.
   *
   * @param pointable pointable object to move.
   */
  moveBy(pointable: Partial<IPointable>): this

  /**
   * Returns a object moved by given value.
   *
   * @param value value to move.
   */
  movedBy(value: number): T

  /**
   * Returns a object moved by given x and given y.
   *
   * @param x x to move.
   * @param y y to move.
   */
  movedBy(x: number, y: number): T

  /**
   * Returns a object moved by given pointable object.
   *
   * @param pointable pointable object to move.
   */
  movedBy(pointable: Partial<IPointable>): T
}
