import { IPointable } from './Pointable'

/*
 * PositionSettable interface.
 */
export interface IPositionSettable {
  /**
   * Set the position by given x and given y.
   *
   * @param x x to set.
   * @param y y to set.
   */
  setPos(x: number, y: number): this

  /**
   * Set the position by given pointable object.
   *
   * @param pointable pointable object to set.
   */
  setPos(pointable: IPointable): this
}
