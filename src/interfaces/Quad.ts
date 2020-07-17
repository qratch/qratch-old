import { IVec2 } from './Vec2'
import { IPointable } from './Pointable'
import { IRotatable } from './Rotatable'

/*
 * Quad interface.
 */
export interface IQuad extends IRotatable<IQuad> {
  /**
   * First position.
   */
  p0: IVec2

  /**
   * Second position.
   */
  p1: IVec2

  /**
   * Third position.
   */
  p2: IVec2

  /**
   * Forth position.
   */
  p3: IVec2

  /**
   * Set positions by given positions.
   *
   * @param p0 first position.
   * @param p1 second position.
   * @param p2 third position.
   * @param p3 forth position.
   */
  set(p0: IPointable, p1: IPointable, p2: IPointable, p3: IPointable): this

  /**
   * Set positions by given positions array.
   *
   * @param positions positions array.
   */
  set(positions: [IPointable, IPointable, IPointable, IPointable]): this

  /**
   * Set position at the given index.
   *
   * @param index index(0-3).
   * @param position position.
   */
  set(index: number, position: IPointable): this
}
