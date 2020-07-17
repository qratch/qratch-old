import { IPointable } from './Pointable'

/**
 * Rotatable interface.
 */
export interface IRotatable<T> {
  /**
   * Returns an object rotated by given angle.
   *
   * @param angle angle of rotation.
   */
  rotated(angle: number): T

  /**
   * Returns an object rotated by given x and given y and given angle.
   *
   * @param x center of rotation x.
   * @param y center of rotation y.
   * @param angle angle of rotation.
   */
  rotatedAt(x: number, y: number, angle: number): T

  /**
   * Returns an object rotated by given pointable object and given angle.
   *
   * @param pointable center pointable object of rotation.
   * @param angle angle of rotation.
   */
  rotatedAt(pointable: IPointable, angle: number): T
}
